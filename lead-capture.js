/* Set the deployed Google Apps Script /exec URL before publishing. */
const LEAD_ENDPOINT = 'https://script.google.com/macros/s/AKfycbw-i-Z1TQTXOzke_NQke0l3D564RaH7eJ4bEp44WueXQG4D_YsrbM0YGN9yArSe6lZROA/exec';
(function () {
  const params = new URLSearchParams(location.search);
  for (const key of ['utm_source','utm_medium','utm_campaign']) {
    try { if (params.has(key)) sessionStorage.setItem('lagersons_'+key, params.get(key).slice(0,200)); } catch (_) {}
  }
  const f = document.getElementById('contactForm');
  if (!f) return;
  f.elements.lead_id.value = crypto.randomUUID();
  f.elements.source_page.value = location.origin + location.pathname;
  for (const key of ['utm_source','utm_medium','utm_campaign']) {
    try {
      if (params.has(key)) sessionStorage.setItem('lagersons_'+key, params.get(key).slice(0,200));
      f.elements[key].value = params.get(key) || sessionStorage.getItem('lagersons_'+key) || '';
    } catch (_) { f.elements[key].value = params.get(key) || ''; }
  }
  const status = document.getElementById('status');
  const button = f.querySelector('button[type="submit"]');
  let inFlight = false;
  let saved = false;
  let attemptedPayload = null;
  let whatsappLink = null;
  function fingerprint() {
    const data = new URLSearchParams(new FormData(f));
    data.delete('lead_id');
    return data.toString();
  }
  function edited() {
    if (saved && !inFlight) {
      status.textContent = 'Perubahan belum dikirim. Klik Simpan Pertanyaan untuk mengirim pertanyaan baru.';
      button.textContent = 'Simpan Pertanyaan & Lanjut ke WhatsApp';
      whatsappLink?.remove();
      whatsappLink = null;
    }
  }
  f.addEventListener('input', edited);
  f.addEventListener('change', edited);
  f.addEventListener('submit', async function (event) {
    event.preventDefault();
    if (inFlight || !f.reportValidity()) return;
    if (!/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(LEAD_ENDPOINT)) {
      status.textContent = 'Formulir sedang disiapkan. Silakan gunakan tombol Chat Langsung untuk menghubungi kami.';
      return;
    }
    const submittedPayload = fingerprint();
    // Retry an uncertain save with the same ID; new enquiries get new IDs.
    if (saved || attemptedPayload !== submittedPayload) f.elements.lead_id.value = crypto.randomUUID();
    attemptedPayload = submittedPayload;
    saved = false;
    inFlight = true;
    const submission = new URLSearchParams(new FormData(f));
    whatsappLink?.remove();
    whatsappLink = null;
    button.disabled = true;
    status.textContent = 'Menyimpan pertanyaan Anda…';
    try {
      const response = await fetch(LEAD_ENDPOINT, {method:'POST', body:submission, signal:AbortSignal.timeout(25000)});
      const result = await response.json();
      if (!response.ok || !result.ok || !/^https:\/\/wa\.me\/(6285714722598|6281316780269)\?text=/.test(result.whatsapp || '')) throw new Error('Save not confirmed');
      status.textContent = 'Terima kasih, pertanyaan Anda tersimpan. Klik tombol di bawah untuk melanjutkan ke WhatsApp, lalu tekan Kirim di sana.';
      const link = document.createElement('a');
      link.href = result.whatsapp.replace(/%0AModel%3A%20(?=%0A)/i, '');
      link.className = 'btn btn-wa';
      link.textContent = 'Lanjutkan ke WhatsApp';
      link.target = '_blank';
      link.rel = 'noopener';
      status.after(link);
      whatsappLink = link;
      saved = true;
      button.textContent = 'Kirim Pertanyaan Baru';
      if (fingerprint() !== submittedPayload) {
        status.textContent = 'Pertanyaan sebelumnya tersimpan. Perubahan pada formulir belum dikirim; klik Simpan Pertanyaan untuk mengirimkannya.';
        button.textContent = 'Simpan Pertanyaan & Lanjut ke WhatsApp';
        whatsappLink.remove();
        whatsappLink = null;
      }
    } catch (_) {
      status.textContent = 'Penyimpanan belum dapat dikonfirmasi. Silakan coba lagi atau gunakan Chat Langsung. Jika sudah tersimpan, percobaan ulang tidak membuat duplikat.';
    } finally {
      inFlight = false;
      button.disabled = false;
    }
  });
})();
