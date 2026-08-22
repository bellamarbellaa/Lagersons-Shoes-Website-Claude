# Lagersons Shoes — Design System

Lagersons Shoes (**@lagersonsshoes**) is a family-owned women's footwear brand in
Greater Jakarta (Jabodetabek), Indonesia. It makes and sells *sepatu pesta* —
party, bridal and dance heels — plus everyday sandals and boots, positioned as
**premium look and comfort at an affordable price**, with made-to-order custom
sizing and models. Two physical stores (Tangerang and South Jakarta) back an
online business run through WhatsApp, Shopee, Instagram and TikTok. Its
credibility engine is social proof: named singers, actresses, pageant winners,
belly dancers and dance studios wearing the shoes on stage.

Tagline used on site: **"Tampil Anggun di Setiap Langkah"** — *Look elegant with
every step.* Site description: *"Sepatu Pesta dan Dansa Premium Harga
Terjangkau."*

## Sources used to build this system

| Source | What it gave us |
| --- | --- |
| `Lagersons/` (attached folder) — saved HTML of the live WordPress/Elementor site `live-lagersons-shoes.pantheonsite.io` (`home.html`, `products.html`, `about.html`) + 3 PDF printouts | **Ground truth for visuals, imagery and video.** Astra theme + Elementor global colors, real type scale, the Special Guests video/photo frames, real customer/celebrity media URLs. |
| `lagersons-site/` (attached folder) — static rebuild (`index/products/about/contact.html`, `css/style.css`, `js/main.js`, `images/`) | **Ground truth for structure, navigation and outbound links** (WhatsApp, Instagram, TikTok, Shopee), page inventory, product copy, local product photography. |
| `uploads/Gemini_Generated_Image_*.png` | The brand logo lockups (wordmark + pink badge). Copied to `assets/logo/`. |
| `uploads/lagersonsproject.pdf`, `Lagersons/*.pdf` | Page printouts of the same WordPress content — not re-parsed; the HTML export supersedes them. |

Live/social endpoints (verbatim from the sources — use these, never invent):

- Shopee — https://shopee.co.id/lagersonsshoes
- Instagram — https://www.instagram.com/lagersonsshoes/?hl=en
- TikTok — https://www.tiktok.com/@lagersonshoes
- Facebook — https://www.facebook.com/p/lagersonsshoes
- WhatsApp — https://wa.me/6285714722598 and https://wa.me/6281316780269 (short link used on the live site: https://wa.link/bi092k)
- Stores — Tang City Mall Lt UG Blok A No. 96-97S, Jl. Jenderal Sudirman No.1, Cikokol, Tangerang, Banten 15117 · Melawai Plaza Lt 1 No. 252, Jl. Melawai Raya, Kby. Baru, DKI Jakarta 12930

## Products / surfaces represented

There is **one product**: the public marketing website (plus the social/commerce
funnel it feeds). There is no app, dashboard or logged-in surface anywhere in the
sources, so this system contains a single UI kit: `ui_kits/website/`.

---

## CONTENT FUNDAMENTALS

**Language.** Indonesian first, with English used for headline flourishes and
product names. Real examples, mixed in a single page: *"Tampil Anggun di Setiap
Langkah"*, *"Mengapa Pilih Kami?"*, *"Desain Kami, Cerminan Anda"*, then
*"Make Your Big Day Unforgettable"*, *"View Our Collections"*, *"Special
Guests"*, *"Bridal Lace Heels"*. Buttons are often English even when the body is
Indonesian (*"Contact Us"*, *"Check Our Selection"*, *"View Our Testimonies"*).

**Person.** The brand writes as **"kami"** (we) and addresses the customer with
the formal-respectful **"Anda"** — never the casual *kamu*. Customers are
addressed and credited with Indonesian honorifics: *Bu Marita*, *Kak Putri*,
*Mba Nina*, *Ms Gita*, *Mrs Yuni Shara*. Gratitude is a house move: many captions
literally begin *"Thank you so much…"* / *"Terima kasih banyak…"*.

**Tone.** Warm, gracious, family-run; proud but not boastful. Benefit-led and
concrete rather than abstract: *"Pas di kaki, pas di mata, dan pas di kantong"*
(fits your foot, your eye and your wallet). Claims are always paired with the
affordability promise — *premium* never appears without *terjangkau*.

**Casing.** Headings are sentence/title case, never ALL CAPS. Small eyebrow
labels above sections **are** all-caps: `KEUNGGULAN KAMI`, `KOMITMEN KAMI #1`,
`KOMITMEN KAMI #2`, `KOMITMEN KAMI #3`, `TAMU SPESIAL KAMI`. The rebuild uses
letter-spaced small caps for the same role (`Komitmen Kami`, `As Worn By`,
`Koleksi Pengantin`).

**Structure of a section.** eyebrow label → serif heading → short paragraph →
one button. Copy blocks are 1–3 sentences; nothing long-form exists on the site.

**Emoji.** Yes — sparingly and affectionately, in customer-facing captions,
testimonials and social/CTA buttons: 👠 ✨ 💖 🎓 💃 ❤️ 🙏 🛍️ 🛒 📷 🎵 💬.
Emoji appear *inside sentences and on utility buttons*, never inside serif
headings. Product/commitment cards in the rebuild use a single emoji glyph as an
icon (✂️ 👟 💰) because the brand ships no icon set — see ICONOGRAPHY.

**Named social proof is copy.** Guests are credited with name + role in two
lines: *"Yuni Shara / Legendary Singer & Actress"*, *"Ajeng Utami / Professional
Bellydancer & Selebgram"*, *"Gita Bellydancer Bali / Professional Bellydancer &
Drummer"*, *"Tarina Putri Rahayu / Putri Batik Remaja Indonesia 2025"*,
*"Goong Prada Management / Dance Management Studio by UNESA Surabaya"*. Keep the
Instagram handle in body copy when the source has it (`@gitabellydance`).

**Prices.** Written as *"Mulai Rp 650.000"* or, where the brand hasn't published a
price, *"Hubungi kami untuk harga"*. Never invent a figure.

**No seasonal promo artwork, and no poster crops as product shots.** The source
material included Kemerdekaan (Independence Day) discount posters. The brand has
asked for them to be kept off the site entirely, together with every product
image cropped out of one — those crops carry poster typography and pink burst
backgrounds. Use only real product and customer photography, and never
reintroduce holiday campaign artwork or its discount copy.

---

## VISUAL FOUNDATIONS

**Colour.** Pink is the entire identity. The live site's Astra global palette is
`#FB5FAB` (action pink) / `#EA559D` (hover) / `#FCEEF5` + `#FAD8E9` (soft
surfaces) / `#0F172A` + `#454F5E` (ink) / `#140610` (near-black). The supplied
logo is a deeper magenta-rose, sampled at `#D30071`; the static rebuild leans
into that range with `#EC1E79` → `#C2185B` gradients and a `#B8935A` gold used
only for small eyebrow labels. One warm neutral (white) plus one dark
(`#201A22` footer) carry everything else. No more than two background tones per
page: white and a pink tint. WhatsApp green `#25D366` is the single
non-brand colour, used exclusively for WhatsApp actions.

**Type.** Two voices. **Playfair Display 700** for every heading, the logo
wordmark and guest names — high-contrast serif, tight tracking at display sizes
(`-3px` on the 58px hero, `-2px` on 40px section heads). **Inter Tight / Poppins**
for all body, UI and buttons at 16–20px, 400–600 weight, line-height 1.65–1.7.
Small labels are 12px uppercase with 0.14em tracking. Logo sub-word "SHOES" is
0.4em-tracked uppercase under the serif "Lagersons".

**Layout.** Centred 1180–1200px container, 24px gutters, 84px section rhythm
(56px for tight bands). Two repeating patterns: a 3-up card grid with 28px gaps,
and an alternating 50/50 image + copy feature row with a 56px gap that flips
sides every other section. The header is sticky with a translucent white
background; a WhatsApp bubble is fixed bottom-right on every page.

**Imagery.** Real, unretouched, warm — WhatsApp-sourced customer photos, in-store
shots and Instagram/TikTok stills of celebrity guests. Mostly portrait 4:5 or
1:1, natural indoor light, faintly warm cast, no grain treatment, no
duotone, no black-and-white. Product shots are close, feet-and-shoe crops on
plain or pink-box backgrounds. Video is vertical 9:16 (`--video-aspect-ratio:
0.5625`) social clips, played inline with native controls, poster frame pulled at
`#t=0.01`. Imagery is never overlaid with text except in the hero, where a black
overlay at 0.5 opacity sits over a full-bleed background image.

**Frames, cards and borders.** Three distinct card treatments exist and should
not be blended:
1. *Content card* — white, 1px `#F6C9DD` border, 18px radius, 32px/26px padding,
   lifts `-4px` with the pink shadow on hover.
2. *Special-guest frame* (live site's signature) — 2px solid deep-pink border,
   **no** radius, and a hard **top-left** offset shadow `-3px -3px 5px rgba(0,0,0,0.5)`.
   Photos and videos inside sit at 2px radius.
3. *Media block* — hero image at 24px radius with a 6px white inset border and a
   1.2° rotation; CTA band at 28px radius filled with the pink gradient.

**Shadows.** Pink-tinted and generous — `0 10px 30px rgba(214,30,120,0.12)`
resting, `0 14px 34px rgba(214,30,120,0.2)` on hover; a neutral
`0 6px 18px rgba(0,0,0,0.04)` for quiet cards. Only the guest frame uses a hard,
directional shadow. No inner shadows anywhere.

**Corner radii.** Pills (999px) for every button, tag and social chip; 18px cards;
24px hero media; 28px CTA band; 2px on photos; 4px on the theme's default
buttons; 50% on avatars and icon circles.

**Motion.** Restrained and short: 0.15–0.25s `ease` on transform, shadow,
background and colour. Hover = a 2–5px lift plus a deeper shadow; the WhatsApp
bubble scales to 1.08. Scroll reveals are simple opacity/translate fade-ups.
No bounces, no spring, no parallax, no autoplaying motion.

**Hover / press states.** Primary button: lifts 2px, shadow deepens, gradient
stays. Outline button: fills with pink, text turns white. Nav links: turn pink and
grow a 2px pink underline. Cards: lift and gain the pink shadow. Footer links:
lighten to `#F6C9DD`. Social pills: fill pink. There are no distinct pressed
states in the source — press reads as the hover state.

**Transparency and blur.** Exactly one use: the sticky header at
`rgba(255,255,255,0.94)` with `backdrop-filter: saturate(180%) blur(8px)`. Plus
the hero's 0.5 black overlay over the background photo. Nothing else is
translucent — no glass cards, no frosted panels.

**Gradients.** Two only: the 135° pink action gradient
(`#EC1E79 → #C2185B`) on primary buttons and the CTA band, and a soft radial
hero wash (`#FFE1EE → #FFF6FA → #FFFFFF` from the top right). No purple, no
multi-stop meshes.

**Dividers.** A centred 8%-wide, 3px pink rule under section headings.

---

## ICONOGRAPHY

The brand ships **no icon system**: there is no icon font, no SVG sprite and no
PNG icon set in either source. The live WordPress site uses only photography,
video and text — its few UI glyphs come from theme-inlined Astra SVGs (hamburger,
search) that carry no brand meaning. The static rebuild fills the gap with
**Unicode emoji used as icons**, which is therefore the brand's de facto
iconography and what this system documents:

- Section/feature icons in a 52px pink circle: ✂️ (custom design), 👟 (free
  fitting), 💰 (affordable).
- Channel buttons and pills: 🛒/🛍️ Shopee, 📷 Instagram, 🎵 TikTok, 💬 WhatsApp.
- Decorative accents in copy: ✨ 💖 👠 🎓 💃.
- Favicon: an inline SVG containing the 👠 emoji glyph.
- The quotation mark on testimonial cards is a typographic `"` set in Playfair
  Display at 2.6rem, not an icon.

**Rule:** do not introduce Lucide/Heroicons/Font Awesome into Lagersons work — a
stroked icon set would read as a different brand. Where a UI genuinely needs a
functional glyph beyond this set, use the emoji closest in meaning, at the same
1.4rem/52px-circle treatment, and flag it. No icon substitution has been made in
this system.

**Logo.** Two real lockups were supplied and are in `assets/logo/`:
`lagersons-logo-wordmark.png` (magenta serif "Lagersons" over "Shoes", light
background) and `lagersons-logo-badge-pink.png` (white lockup with a heart-and-
flourish ornament on a `#D30071` field). The live WordPress site additionally
serves a 512×512 square logo at
`/wp-content/uploads/2026/02/cropped-Untitled-design.png`. Where no bitmap is
appropriate, set the brand name in Playfair Display 700 with "SHOES"
letter-spaced beneath — that is exactly what both source sites do in their header
and footer.

---

## Remote media (important)

The live site's real photography and all Special Guests video live on
`live-lagersons-shoes.pantheonsite.io` / `dev-lagersons-shoes.pantheonsite.io`.
Those binaries could not be copied into this project (they are only reachable over
the network, not through the attached folders), but they **do load in a browser**
and are referenced by URL in `assets/remote-media.json` and in the UI kit, so the
kit shows the brand's real imagery and video. Locally-copied photography from the
static rebuild lives in `assets/imagery/`. If you need offline-safe assets,
download the URLs in `assets/remote-media.json` into `assets/imagery/` and
re-point the references.

---

## Index

- `styles.css` — the one stylesheet consumers link; `@import`s everything below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
  `radii.css`, `shadows.css`, `motion.css`.
- `assets/logo/` — the two supplied logo lockups.
- `assets/imagery/` — real product, collection and guest photography (no promo
  artwork, no poster crops — see CONTENT FUNDAMENTALS).
- `assets/remote-media.json` — URLs of the live site's real photos and videos.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/core/` — Button, PillTag, Eyebrow, SectionHead, Divider, SocialPill.
- `components/cards/` — Card, InfoCard, ProductCard, TestimonialCard, GuestFrame,
  StoreCard, ContactTile.
- `components/layout/` — SiteHeader, SiteFooter, PageHero, FeatureRow, PromoBanner,
  CtaBand, WhatsAppFloat.
- `ui_kits/website/` — click-through recreation of the four-page marketing site.
- `SKILL.md` — Agent-Skills wrapper so this folder can be used from Claude Code.

### Intentional additions

Nothing was invented. Every component maps to a construct that exists in one or
both source sites; `Eyebrow`, `Divider` and `SocialPill` are named after the
classes the rebuild already uses (`.eyebrow`, `.elementor-divider`,
`.social-pill`).
