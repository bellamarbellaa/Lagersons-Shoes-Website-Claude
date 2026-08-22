/* @ds-bundle: {"format":4,"namespace":"LagersonsShoesDesignSystem_bbb218","components":[{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"ContactTile","sourcePath":"components/cards/ContactTile.jsx"},{"name":"GuestFrame","sourcePath":"components/cards/GuestFrame.jsx"},{"name":"InfoCard","sourcePath":"components/cards/InfoCard.jsx"},{"name":"ProductCard","sourcePath":"components/cards/ProductCard.jsx"},{"name":"StoreCard","sourcePath":"components/cards/StoreCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/cards/TestimonialCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"PillTag","sourcePath":"components/core/PillTag.jsx"},{"name":"SectionHead","sourcePath":"components/core/SectionHead.jsx"},{"name":"SocialPill","sourcePath":"components/core/SocialPill.jsx"},{"name":"CtaBand","sourcePath":"components/layout/CtaBand.jsx"},{"name":"FeatureRow","sourcePath":"components/layout/FeatureRow.jsx"},{"name":"PageHero","sourcePath":"components/layout/PageHero.jsx"},{"name":"PromoBanner","sourcePath":"components/layout/PromoBanner.jsx"},{"name":"SiteFooter","sourcePath":"components/layout/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/layout/SiteHeader.jsx"},{"name":"WhatsAppFloat","sourcePath":"components/layout/WhatsAppFloat.jsx"}],"sourceHashes":{"components/cards/Card.jsx":"303fa1e42d38","components/cards/ContactTile.jsx":"09d623e37b36","components/cards/GuestFrame.jsx":"4efa35b7a5c7","components/cards/InfoCard.jsx":"55b7e0408df8","components/cards/ProductCard.jsx":"ae38c884f967","components/cards/StoreCard.jsx":"8aefdaba2139","components/cards/TestimonialCard.jsx":"e0b6a33b898f","components/core/Button.jsx":"3a6dd0ee4127","components/core/Divider.jsx":"1a95e3e11b0d","components/core/Eyebrow.jsx":"c42bfca3a694","components/core/PillTag.jsx":"6d8eff169df5","components/core/SectionHead.jsx":"fcf5fe0ef107","components/core/SocialPill.jsx":"c947db7b86cb","components/layout/CtaBand.jsx":"712bb5bafa96","components/layout/FeatureRow.jsx":"36f95e319e5c","components/layout/PageHero.jsx":"9aa5f4555d7c","components/layout/PromoBanner.jsx":"406be75a07e3","components/layout/SiteFooter.jsx":"57c09b1358fd","components/layout/SiteHeader.jsx":"892fa4b90551","components/layout/WhatsAppFloat.jsx":"e06f6fe64b36","ui_kits/website/AboutScreen.jsx":"06dde0e5d1ff","ui_kits/website/ContactScreen.jsx":"9b29d15968f2","ui_kits/website/HomeScreen.jsx":"761968d4d243","ui_kits/website/ProductsScreen.jsx":"7c717dd3747d","ui_kits/website/Section.jsx":"a03a7f9f46f4","ui_kits/website/media.js":"21ec525ae10d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LagersonsShoesDesignSystem_bbb218 = window.LagersonsShoesDesignSystem_bbb218 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  icon,
  title,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--lg-surface-card)',
      border: '1px solid var(--lg-border)',
      borderRadius: 'var(--lg-radius)',
      padding: 'var(--lg-card-pad)',
      transition: 'var(--lg-transition-card)',
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: '52px',
      height: '52px',
      borderRadius: 'var(--lg-radius-round)',
      background: 'var(--lg-pink-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.4rem',
      marginBottom: '18px'
    },
    "aria-hidden": "true"
  }, icon) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--lg-font-display)',
      fontWeight: 700,
      color: 'var(--lg-text-heading)',
      fontSize: '1.2rem',
      lineHeight: 'var(--lg-lh-heading-tight)',
      margin: '0 0 10px'
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--lg-font-body)',
      fontSize: '0.95rem',
      color: 'var(--lg-text-body)',
      lineHeight: 'var(--lg-lh-body-static)'
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/cards/GuestFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GuestFrame({
  name,
  role,
  media = [],
  layout = 'row',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      border: 'var(--lg-border-frame)',
      boxShadow: 'var(--lg-shadow-frame)',
      background: 'var(--lg-white)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: layout === 'row' ? 'row' : 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 0,
      padding: '2%'
    }
  }, media.map((m, i) => m.type === 'video' ? /*#__PURE__*/React.createElement("video", {
    key: i,
    src: m.src + '#t=0.01,0.11',
    controls: true,
    preload: "metadata",
    controlsList: "nodownload",
    style: {
      width: layout === 'row' ? '38.5%' : '100%',
      aspectRatio: '0.5625',
      borderRadius: 'var(--lg-radius-img)',
      display: 'block',
      background: '#000'
    }
  }) : /*#__PURE__*/React.createElement("img", {
    key: i,
    src: m.src,
    alt: m.alt || '',
    loading: "lazy",
    style: {
      width: layout === 'row' ? '38.5%' : '100%',
      borderRadius: 'var(--lg-radius-img)',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '0 12px 16px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--lg-font-display)',
      fontWeight: 500,
      fontSize: 'var(--lg-size-guest-name)',
      lineHeight: 'var(--lg-lh-heading-tight)',
      color: 'var(--lg-ink-700)',
      margin: '0 0 4px'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--lg-font-ui)',
      fontWeight: 400,
      fontSize: 'var(--lg-size-body-sm)',
      color: 'var(--lg-ink-700)',
      margin: 0
    }
  }, role)));
}
Object.assign(__ds_scope, { GuestFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/GuestFrame.jsx", error: String((e && e.message) || e) }); }

// components/cards/InfoCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function InfoCard({
  title,
  level = 'h4',
  children,
  align = 'left',
  style,
  ...rest
}) {
  const H = level;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(H, {
    style: {
      fontFamily: 'var(--lg-font-display)',
      fontWeight: 700,
      color: 'var(--lg-text-heading)',
      fontSize: level === 'h3' ? 'var(--lg-size-h3)' : '40px',
      lineHeight: '44px',
      letterSpacing: 'var(--lg-track-section)',
      margin: '0 0 20px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--lg-font-ui)',
      fontSize: 'var(--lg-size-body-sm)',
      color: 'var(--lg-ink-600)',
      lineHeight: 'var(--lg-lh-body)',
      margin: '0 0 20px'
    }
  }, children));
}
Object.assign(__ds_scope, { InfoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/InfoCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TestimonialCard({
  name,
  role = 'Pelanggan Lagersons',
  initial,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--lg-surface-card)',
      border: '1px solid var(--lg-border)',
      borderRadius: 'var(--lg-radius)',
      padding: '28px 24px',
      position: 'relative',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--lg-font-display)',
      fontSize: '2.6rem',
      color: 'var(--lg-border)',
      lineHeight: 0.4,
      display: 'block',
      marginBottom: '14px'
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--lg-font-body)',
      fontSize: '0.95rem',
      color: 'var(--lg-ink-700)',
      fontStyle: 'italic',
      lineHeight: 'var(--lg-lh-body-static)',
      margin: 0
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginTop: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '42px',
      height: '42px',
      borderRadius: 'var(--lg-radius-round)',
      background: 'var(--lg-pink-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--lg-font-display)',
      fontWeight: 700,
      color: 'var(--lg-pink-800)'
    }
  }, initial || (typeof name === 'string' ? name.replace(/^(Bu|Kak|Mba|Ms|Mrs)\s+/, '')[0] : '')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--lg-font-body)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      fontSize: '0.92rem',
      color: 'var(--lg-ink-700)'
    }
  }, name), /*#__PURE__*/React.createElement("small", {
    style: {
      color: 'var(--lg-text-body)',
      fontSize: '0.78rem'
    }
  }, role))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  fontFamily: 'var(--lg-font-ui)',
  fontWeight: 600,
  borderRadius: 'var(--lg-radius-pill)',
  border: '2px solid transparent',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  transition: 'var(--lg-transition-btn)'
};
const sizes = {
  md: {
    padding: '14px 30px',
    fontSize: '0.95rem'
  },
  sm: {
    padding: '10px 20px',
    fontSize: '0.85rem'
  },
  wp: {
    padding: '17px 40px',
    fontSize: 'var(--lg-size-btn-elementor)'
  }
};
const variants = {
  primary: {
    background: 'var(--lg-brand-gradient)',
    color: 'var(--lg-white)',
    boxShadow: 'var(--lg-shadow)'
  },
  outline: {
    background: 'transparent',
    borderColor: 'var(--lg-pink-650)',
    color: 'var(--lg-pink-650)'
  },
  whatsapp: {
    background: 'var(--lg-whatsapp)',
    color: '#fff',
    boxShadow: 'var(--lg-shadow-whatsapp-hover)'
  },
  onbrand: {
    background: 'var(--lg-white)',
    color: 'var(--lg-pink-800)'
  },
  ghost: {
    background: 'transparent',
    borderColor: 'rgba(255,255,255,0.7)',
    color: 'var(--lg-white)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  href,
  block,
  disabled,
  icon,
  children,
  style,
  ...rest
}) {
  const Tag = href && !disabled ? 'a' : 'button';
  const s = {
    ...base,
    ...(sizes[size] || sizes.md),
    ...(variants[variant] || variants.primary),
    width: block ? '100%' : undefined,
    opacity: disabled ? 0.45 : 1,
    pointerEvents: disabled ? 'none' : undefined,
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: s,
    disabled: Tag === 'button' ? disabled : undefined
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, icon) : null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/ContactTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ContactTile({
  glyph,
  title,
  children,
  actionLabel,
  href,
  variant = 'outline',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--lg-surface-card)',
      border: '1px solid var(--lg-border)',
      borderRadius: 'var(--lg-radius)',
      padding: '26px 18px',
      textAlign: 'center',
      transition: 'var(--lg-transition-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: '1.8rem',
      marginBottom: '12px',
      display: 'block'
    }
  }, glyph), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--lg-font-body)',
      fontWeight: 700,
      fontSize: '1rem',
      color: 'var(--lg-ink-700)',
      margin: '0 0 4px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--lg-font-body)',
      fontSize: '0.85rem',
      color: 'var(--lg-text-body)',
      margin: '0 0 14px'
    }
  }, children), actionLabel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: variant,
    href: href
  }, actionLabel) : null);
}
Object.assign(__ds_scope, { ContactTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ContactTile.jsx", error: String((e && e.message) || e) }); }

// components/cards/StoreCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StoreCard({
  name,
  address,
  mapHref,
  whatsappHref,
  hours,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--lg-surface-card)',
      border: '1px solid var(--lg-border)',
      borderRadius: 'var(--lg-radius)',
      padding: '30px',
      boxShadow: 'var(--lg-shadow-subtle)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h3", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--lg-font-display)',
      fontWeight: 700,
      fontSize: '1.2rem',
      color: 'var(--lg-text-heading)',
      margin: '0 0 0.5em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\uD83D\uDCCD"), name), /*#__PURE__*/React.createElement("address", {
    style: {
      fontStyle: 'normal',
      fontFamily: 'var(--lg-font-body)',
      color: 'var(--lg-text-body)',
      marginBottom: '18px',
      display: 'block',
      lineHeight: 'var(--lg-lh-body-static)'
    }
  }, address), hours ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--lg-font-body)',
      fontSize: '0.9rem',
      color: 'var(--lg-text-body)'
    }
  }, hours) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap'
    }
  }, mapHref ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "outline",
    href: mapHref
  }, "Lihat Peta") : null, whatsappHref ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "whatsapp",
    href: whatsappHref
  }, "WhatsApp") : null));
}
Object.assign(__ds_scope, { StoreCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StoreCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  width = '8%',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width,
      borderTop: '3px solid var(--lg-pink-500)'
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  tone = 'gold',
  children,
  style,
  ...rest
}) {
  const colors = {
    gold: 'var(--lg-gold)',
    pink: 'var(--lg-pink-650)',
    olive: 'var(--lg-olive-label)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--lg-font-ui)',
      fontWeight: 600,
      fontSize: '0.78rem',
      letterSpacing: 'var(--lg-track-label)',
      textTransform: 'uppercase',
      color: colors[tone] || colors.gold,
      marginBottom: '10px',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/PillTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PillTag({
  tone = 'tint',
  children,
  style,
  ...rest
}) {
  const tones = {
    tint: {
      background: 'var(--lg-pink-100)',
      color: 'var(--lg-pink-800)'
    },
    solid: {
      background: 'var(--lg-pink-700)',
      color: 'var(--lg-white)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--lg-pink-800)',
      boxShadow: 'inset 0 0 0 1px var(--lg-border)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--lg-font-ui)',
      fontWeight: 700,
      fontSize: '0.72rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '6px 14px',
      borderRadius: 'var(--lg-radius-pill)',
      ...(tones[tone] || tones.tint),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { PillTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PillTag.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProductCard({
  image,
  alt = '',
  tag,
  title,
  children,
  price,
  shopeeHref,
  whatsappHref,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--lg-surface-card)',
      border: '1px solid var(--lg-border)',
      borderRadius: 'var(--lg-radius)',
      overflow: 'hidden',
      boxShadow: 'var(--lg-shadow-subtle)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'var(--lg-transition-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3.4',
      overflow: 'hidden',
      background: 'var(--lg-pink-100)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 22px 26px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      flex: 1
    }
  }, tag ? /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PillTag, null, tag)) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--lg-font-display)',
      fontWeight: 700,
      color: 'var(--lg-text-heading)',
      fontSize: '1.15rem',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--lg-font-body)',
      fontSize: '0.95rem',
      color: 'var(--lg-text-body)',
      lineHeight: 'var(--lg-lh-body-static)',
      margin: 0
    }
  }, children), price ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--lg-font-display)',
      fontWeight: 700,
      color: 'var(--lg-pink-800)',
      fontSize: '1.15rem'
    }
  }, price) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      marginTop: 'auto',
      paddingTop: '6px',
      flexWrap: 'wrap'
    }
  }, shopeeHref ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    href: shopeeHref
  }, "Shopee") : null, whatsappHref ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "whatsapp",
    href: whatsappHref
  }, "WhatsApp") : null)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHead.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHead({
  eyebrow,
  eyebrowTone,
  title,
  children,
  divider,
  align = 'center',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      maxWidth: align === 'center' ? '640px' : 'none',
      margin: align === 'center' ? '0 auto 48px' : '0 0 48px',
      textAlign: align,
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: eyebrowTone
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--lg-font-display)',
      fontWeight: 700,
      color: 'var(--lg-text-heading)',
      fontSize: 'clamp(1.7rem, 3vw, 2.3rem)',
      lineHeight: 'var(--lg-lh-heading-tight)',
      margin: '0 0 0.5em'
    }
  }, title), divider ? /*#__PURE__*/React.createElement(__ds_scope.Divider, null) : null, children ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--lg-font-body)',
      color: 'var(--lg-text-body)',
      lineHeight: 'var(--lg-lh-body-static)',
      margin: 0
    }
  }, children) : null);
}
Object.assign(__ds_scope, { SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHead.jsx", error: String((e && e.message) || e) }); }

// components/core/SocialPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SocialPill({
  href,
  icon,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: "_blank",
    rel: "noopener",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      border: '1px solid rgba(255,255,255,0.18)',
      borderRadius: 'var(--lg-radius-pill)',
      padding: '9px 16px',
      fontSize: '0.85rem',
      fontFamily: 'var(--lg-font-body)',
      color: 'var(--lg-white)',
      textDecoration: 'none',
      transition: 'background .2s, border-color .2s',
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, icon) : null, children);
}
Object.assign(__ds_scope, { SocialPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SocialPill.jsx", error: String((e && e.message) || e) }); }

// components/layout/CtaBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CtaBand({
  title,
  children,
  actions,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--lg-brand-gradient)',
      borderRadius: 'var(--lg-radius-xl)',
      padding: '56px 40px',
      textAlign: 'center',
      color: 'var(--lg-white)',
      boxShadow: 'var(--lg-shadow)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--lg-font-display)',
      fontWeight: 700,
      color: 'var(--lg-white)',
      fontSize: 'clamp(1.7rem, 3vw, 2.3rem)',
      lineHeight: 'var(--lg-lh-heading-tight)',
      margin: '0 0 0.5em'
    }
  }, title), children ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.9)',
      maxWidth: '520px',
      margin: '0 auto 1em',
      fontFamily: 'var(--lg-font-body)',
      lineHeight: 'var(--lg-lh-body-static)'
    }
  }, children) : null, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, actions) : null);
}
Object.assign(__ds_scope, { CtaBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/CtaBand.jsx", error: String((e && e.message) || e) }); }

// components/layout/FeatureRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FeatureRow({
  image,
  alt = '',
  reverse,
  children,
  style,
  ...rest
}) {
  const media = /*#__PURE__*/React.createElement("div", {
    key: "m",
    style: {
      borderRadius: 'var(--lg-radius)',
      overflow: 'hidden',
      boxShadow: 'var(--lg-shadow)',
      order: reverse ? 2 : 1
    }
  }, typeof image === 'string' ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    style: {
      width: '100%',
      display: 'block'
    }
  }) : image);
  const copy = /*#__PURE__*/React.createElement("div", {
    key: "c",
    style: {
      order: reverse ? 1 : 2
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--lg-feature-gap)',
      alignItems: 'center',
      ...style
    }
  }, rest), [media, copy]);
}
Object.assign(__ds_scope, { FeatureRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/FeatureRow.jsx", error: String((e && e.message) || e) }); }

// components/layout/PageHero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PageHero({
  tag,
  title,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: 'var(--lg-surface-tint)',
      padding: '64px 0 56px',
      textAlign: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--lg-container)',
      margin: '0 auto',
      padding: '0 24px'
    }
  }, tag ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PillTag, null, tag)) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--lg-font-display)',
      fontWeight: 700,
      color: 'var(--lg-text-heading)',
      fontSize: 'clamp(2rem, 4vw, 2.7rem)',
      lineHeight: 'var(--lg-lh-heading-tight)',
      margin: '0 0 12px'
    }
  }, title), children ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--lg-font-body)',
      color: 'var(--lg-text-body)',
      maxWidth: '560px',
      margin: '0 auto',
      lineHeight: 'var(--lg-lh-body-static)'
    }
  }, children) : null));
}
Object.assign(__ds_scope, { PageHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PageHero.jsx", error: String((e && e.message) || e) }); }

// components/layout/PromoBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PromoBanner({
  image,
  alt = '',
  href,
  caption,
  style,
  ...rest
}) {
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement(Tag, {
    href: href,
    target: href ? '_blank' : undefined,
    rel: href ? 'noopener' : undefined,
    style: {
      display: 'block',
      borderRadius: 'var(--lg-radius)',
      overflow: 'hidden',
      boxShadow: 'var(--lg-shadow)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    style: {
      width: '100%',
      display: 'block'
    }
  })), caption ? /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: '16px',
      fontSize: '0.85rem',
      fontFamily: 'var(--lg-font-body)',
      color: 'var(--lg-text-body)'
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { PromoBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PromoBanner.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LINK = {
  color: 'var(--lg-footer-fg)',
  fontSize: '0.92rem',
  textDecoration: 'none',
  fontFamily: 'var(--lg-font-body)'
};
const H4 = {
  color: 'var(--lg-white)',
  fontFamily: 'var(--lg-font-body)',
  fontSize: '0.85rem',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  marginBottom: '18px',
  marginTop: 0
};
function SiteFooter({
  onNavigate,
  style,
  ...rest
}) {
  const nav = ['Home', 'Products', 'About', 'Contact'];
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--lg-footer-bg)',
      color: 'var(--lg-footer-fg)',
      padding: '64px 0 26px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--lg-container)',
      margin: '0 auto',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr 1fr 1.2fr',
      gap: '40px',
      marginBottom: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--lg-font-display)',
      fontSize: '1.8rem',
      color: 'var(--lg-white)',
      marginBottom: '12px'
    }
  }, "Lagersons", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '0.7rem',
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
      color: 'var(--lg-pink-300)',
      marginTop: '4px'
    }
  }, "Shoes")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--lg-footer-muted)',
      fontSize: '0.9rem',
      fontFamily: 'var(--lg-font-body)'
    }
  }, "Sepatu & sandal wanita premium \u2014 elegan, nyaman, dan terjangkau. Ready stock maupun custom order untuk setiap momen Anda."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      marginTop: '18px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SocialPill, {
    href: "https://shopee.co.id/lagersonsshoes",
    icon: "\uD83D\uDED2"
  }, "Shopee"), /*#__PURE__*/React.createElement(__ds_scope.SocialPill, {
    href: "https://www.instagram.com/lagersonsshoes/?hl=en",
    icon: "\uD83D\uDCF7"
  }, "Instagram"), /*#__PURE__*/React.createElement(__ds_scope.SocialPill, {
    href: "https://www.tiktok.com/@lagersonshoes",
    icon: "\uD83C\uDFB5"
  }, "TikTok"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: H4
  }, "Navigasi"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("li", {
    key: n
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: LINK,
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(n);
    }
  }, n))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: H4
  }, "Terhubung"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    style: LINK,
    href: "https://shopee.co.id/lagersonsshoes",
    target: "_blank",
    rel: "noopener"
  }, "Shopee Shop")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    style: LINK,
    href: "https://www.instagram.com/lagersonsshoes/?hl=en",
    target: "_blank",
    rel: "noopener"
  }, "Instagram")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    style: LINK,
    href: "https://www.tiktok.com/@lagersonshoes",
    target: "_blank",
    rel: "noopener"
  }, "TikTok")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    style: LINK,
    href: "https://wa.me/6285714722598",
    target: "_blank",
    rel: "noopener"
  }, "WhatsApp")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: H4
  }, "Toko Kami"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      fontFamily: 'var(--lg-font-body)',
      fontSize: '0.92rem'
    }
  }, /*#__PURE__*/React.createElement("li", null, "Tang City Mall Lt UG Blok A No. 96-97S, Jl. Jenderal Sudirman No.1, Cikokol, Tangerang, Banten 15117"), /*#__PURE__*/React.createElement("li", null, "Melawai Plaza Lt 1 No. 252, Jl. Melawai Raya, Kby. Baru, DKI Jakarta 12930")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.1)',
      paddingTop: '22px',
      textAlign: 'center',
      fontSize: '0.82rem',
      color: 'var(--lg-footer-dim)',
      fontFamily: 'var(--lg-font-body)'
    }
  }, "Copyright \xA9 Lagersons Shoes 2026. All rights reserved.")));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteHeader({
  active = 'Home',
  items = ['Home', 'Products', 'About', 'Contact'],
  onNavigate,
  contactHref = '#',
  logoSrc,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255,255,255,0.94)',
      backdropFilter: 'saturate(180%) blur(8px)',
      WebkitBackdropFilter: 'saturate(180%) blur(8px)',
      borderBottom: '1px solid var(--lg-border)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 24px',
      maxWidth: 'var(--lg-container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('Home');
    },
    style: {
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Lagersons Shoes",
    style: {
      height: '44px',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--lg-font-display)',
      fontWeight: 700,
      fontSize: '1.7rem',
      lineHeight: 1,
      color: 'var(--lg-pink-700)'
    }
  }, "Lagersons"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--lg-font-body)',
      fontSize: '0.85rem',
      letterSpacing: 'var(--lg-track-logo-sub)',
      textTransform: 'uppercase',
      color: 'var(--lg-ink-700)',
      fontWeight: 500,
      marginTop: '2px'
    }
  }, "Shoes"))), /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '36px',
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(it);
    },
    style: {
      fontFamily: 'var(--lg-font-body)',
      fontWeight: 600,
      fontSize: '0.95rem',
      textDecoration: 'none',
      paddingBottom: '6px',
      color: active === it ? 'var(--lg-pink-650)' : 'var(--lg-ink-700)',
      borderBottom: '2px solid ' + (active === it ? 'var(--lg-pink-650)' : 'transparent'),
      transition: 'color .2s, border-color .2s'
    }
  }, it))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    href: contactHref,
    onClick: e => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate('Contact');
      }
    }
  }, "Contact Us"))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/layout/WhatsAppFloat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function WhatsAppFloat({
  href = 'https://wa.me/6285714722598',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: "_blank",
    rel: "noopener",
    "aria-label": "Chat WhatsApp",
    style: {
      position: 'fixed',
      bottom: '22px',
      right: '22px',
      zIndex: 200,
      background: 'var(--lg-whatsapp)',
      color: '#fff',
      width: '58px',
      height: '58px',
      borderRadius: 'var(--lg-radius-round)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.6rem',
      textDecoration: 'none',
      boxShadow: 'var(--lg-shadow-whatsapp)',
      transition: 'transform .2s ease',
      ...style
    }
  }, rest), "\uD83D\uDCAC");
}
Object.assign(__ds_scope, { WhatsAppFloat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/WhatsAppFloat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
try { (() => {
const {
  PageHero,
  SectionHead,
  Card,
  TestimonialCard,
  GuestFrame,
  FeatureRow,
  Eyebrow,
  InfoCard,
  Button,
  CtaBand
} = window.LagersonsShoesDesignSystem_bbb218;
function AboutScreen({
  go
}) {
  const L = window.LG;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    tag: "Tentang Kami",
    title: "Keluarga di Balik Setiap Langkah"
  }, "Lagersons Shoes adalah usaha keluarga di Jabodetabek yang menghadirkan sepatu pesta, dansa, dan harian dengan kualitas premium dan harga terjangkau."), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(FeatureRow, {
    image: /*#__PURE__*/React.createElement("img", {
      src: L.live.store,
      alt: "Toko offline Lagersons",
      style: {
        width: '100%',
        display: 'block'
      }
    })
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "pink"
  }, "Cerita Kami"), /*#__PURE__*/React.createElement(InfoCard, {
    title: "Dari Toko Kecil ke Panggung Besar"
  }, "Berawal dari melayani pelanggan satu per satu di toko, Lagersons kini dipercaya penyanyi, penari, dan finalis pageant untuk tampil di panggung mereka. Dua toko offline kami tetap menjadi tempat pelanggan mencoba, berkonsultasi, dan memesan custom."), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('Contact')
  }, "Kunjungi Toko Kami"))), /*#__PURE__*/React.createElement(Section, {
    tint: true
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Komitmen Kami",
    title: "Kenapa Memilih Lagersons"
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 3
  }, /*#__PURE__*/React.createElement(Card, {
    icon: "\u2702\uFE0F",
    title: "Desain Custom"
  }, "Mulai dari gaya klasik, mewah, hingga kasual, Lagersons melayani pemesanan sepatu custom sesuai kebutuhan dan karakter Anda."), /*#__PURE__*/React.createElement(Card, {
    icon: "\uD83D\uDC5F",
    title: "Bebas Fitting"
  }, "Tak hanya online, pelanggan juga bisa datang langsung ke 2 toko offline Lagersons. Baik untuk fitting, konsultasi, atau pembelian langsung."), /*#__PURE__*/React.createElement(Card, {
    icon: "\uD83D\uDCB0",
    title: "Terjangkau"
  }, "Tampil percaya diri dengan kenyamanan dan kualitas premium, harga tetap terjangkau dan pas di kantong."))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "As Worn By",
    title: "Special Guests"
  }, "Dipercaya oleh penyanyi, influencer, hingga komunitas tari untuk tampil anggun di panggung dan acara spesial mereka."), /*#__PURE__*/React.createElement(Grid, {
    cols: 2,
    style: {
      rowGap: '40px'
    }
  }, /*#__PURE__*/React.createElement(GuestFrame, {
    name: "Yuni Shara",
    role: "Legendary Singer & Actress",
    media: [{
      type: 'video',
      src: L.video.yuni
    }],
    layout: "stack"
  }), /*#__PURE__*/React.createElement(GuestFrame, {
    name: "Gita Bellydancer Bali",
    role: "Professional Bellydancer & Drummer",
    media: [{
      type: 'video',
      src: L.video.gita1
    }],
    layout: "stack"
  }), /*#__PURE__*/React.createElement(GuestFrame, {
    name: "Patricia Nova & Nina Taman",
    role: "Singers & Influencers",
    media: [{
      type: 'image',
      src: L.IMG + 'guests-patricia-nina.jpg',
      alt: 'Patricia Nova dan Nina Taman'
    }],
    layout: "stack"
  }), /*#__PURE__*/React.createElement(GuestFrame, {
    name: "Goong Prada Management",
    role: "Dance Management Studio by UNESA Surabaya",
    media: [{
      type: 'image',
      src: L.IMG + 'guest-goongprada.jpg',
      alt: 'Goong Prada Management'
    }],
    layout: "stack"
  }))), /*#__PURE__*/React.createElement(Section, {
    tint: true,
    id: "testimonials"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Testimoni",
    title: "Kata Pelanggan Kami"
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 3,
    style: {
      rowGap: 'var(--lg-grid-gap)'
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    name: "Bu Marita Suherman"
  }, "Terima kasih Lagersons sudah menemani saya merayakan kelulusan SMA putri tercinta \uD83C\uDF93 Sepatunya cocok dengan kebaya saya dan putri, cantik dan tetap nyaman seharian \u2728"), /*#__PURE__*/React.createElement(TestimonialCard, {
    name: "Bu Ivy Aretha"
  }, "Thank you Lagersons sudah menemani momen spesial yang menjadi bintang pesta. Sepatunya nyaman dipakai dan tetap keren dipadukan outfitnya \uD83D\uDC96\uD83D\uDC60"), /*#__PURE__*/React.createElement(TestimonialCard, {
    name: "Kak Dian Lestari"
  }, "Thank you for your orders! We hope these white heels carry you comfortably and elegantly at your son's wedding. Untuk order custom, tinggal DM saja \u2014 prosesnya ramah dan cepat."), /*#__PURE__*/React.createElement(TestimonialCard, {
    name: "Ms Gita",
    role: "Professional Bellydancer"
  }, "Terima kasih banyak selalu mempercayai sepatu dansa Lagersons \uD83D\uDE4F nyaman dipakai menari seharian."), /*#__PURE__*/React.createElement(TestimonialCard, {
    name: "Kak Putri",
    role: "Traditional Dancer & Model"
  }, "Thank you so much, telah mempercayai sepatu dansa Lagersons dalam setiap penampilan saya \u2728"), /*#__PURE__*/React.createElement(TestimonialCard, {
    name: "Mba Nina Taman",
    role: "Singer & Influencer"
  }, "Semakin sukses selalu \u2014 terima kasih Lagersons sudah menemani penampilan grup kami."))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(CtaBand, {
    title: "Jadi Bagian dari Cerita Kami",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "onbrand",
      href: L.IG
    }, "Instagram Kami"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go('Contact')
    }, "Hubungi Kami"))
  }, "Kirimkan foto Anda memakai Lagersons \u2014 kami senang menampilkan pelanggan di kanal kami.")));
}
Object.assign(window, {
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  PageHero,
  SectionHead,
  StoreCard,
  ContactTile,
  Button,
  PillTag
} = window.LagersonsShoesDesignSystem_bbb218;
function ContactScreen() {
  const L = window.LG;
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    need: 'Custom order',
    message: ''
  });
  const field = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '13px 16px',
    border: '1px solid var(--lg-border)',
    borderRadius: 'var(--lg-radius-sm)',
    fontFamily: 'var(--lg-font-body)',
    fontSize: '0.95rem',
    color: 'var(--lg-ink-700)',
    background: 'var(--lg-white)',
    outline: 'none'
  };
  const label = {
    display: 'block',
    fontFamily: 'var(--lg-font-ui)',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--lg-ink-500)',
    marginBottom: '6px'
  };
  const waHref = 'https://wa.me/6285714722598?text=' + encodeURIComponent('Halo Lagersons, saya ' + (form.name || '—') + '. Kebutuhan: ' + form.need + '. ' + form.message);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    tag: "Kontak",
    title: "Hubungi Lagersons"
  }, "Konsultasi custom order, tanya ukuran, atau mampir ke toko \u2014 tim kami siap membantu lewat WhatsApp setiap hari kerja."), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Terhubung",
    title: "Pilih Kanal Anda"
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 4
  }, /*#__PURE__*/React.createElement(ContactTile, {
    glyph: "\uD83D\uDCAC",
    title: "WhatsApp",
    actionLabel: "Chat Sekarang",
    variant: "whatsapp",
    href: L.WA1
  }, "0857-1472-2598 \xB7 balasan tercepat."), /*#__PURE__*/React.createElement(ContactTile, {
    glyph: "\uD83D\uDED2",
    title: "Shopee",
    actionLabel: "Kunjungi Toko",
    href: L.SHOPEE
  }, "Katalog lengkap & checkout aman."), /*#__PURE__*/React.createElement(ContactTile, {
    glyph: "\uD83D\uDCF7",
    title: "Instagram",
    actionLabel: "@lagersonsshoes",
    href: L.IG
  }, "Koleksi terbaru dan tamu spesial."), /*#__PURE__*/React.createElement(ContactTile, {
    glyph: "\uD83C\uDFB5",
    title: "TikTok",
    actionLabel: "@lagersonshoes",
    href: L.TIKTOK
  }, "Video sepatu dansa & pesta."))), /*#__PURE__*/React.createElement(Section, {
    tint: true
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Toko Kami",
    title: "Kunjungi & Fitting Langsung"
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 2
  }, /*#__PURE__*/React.createElement(StoreCard, {
    name: "Tang City Mall \u2014 Tangerang",
    address: "Lt UG Blok A No. 96-97S, Jl. Jenderal Sudirman No.1, Cikokol, Tangerang, Banten 15117",
    mapHref: "https://maps.google.com/?q=Tang+City+Mall+Tangerang",
    whatsappHref: L.WA1
  }), /*#__PURE__*/React.createElement(StoreCard, {
    name: "Melawai Plaza \u2014 Jakarta Selatan",
    address: "Lt 1 No. 252, Jl. Melawai Raya, Kby. Baru, DKI Jakarta 12930",
    mapHref: "https://maps.google.com/?q=Melawai+Plaza+Jakarta",
    whatsappHref: L.WA2
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '620px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Pesan Cepat",
    title: "Kirim Kebutuhan Anda"
  }, "Isi singkat, lalu kirim langsung ke WhatsApp kami."), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--lg-surface-tint)',
      border: '1px solid var(--lg-border)',
      borderRadius: 'var(--lg-radius)',
      padding: '32px 26px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(PillTag, {
    tone: "solid"
  }, "Terkirim"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--lg-font-body)',
      color: 'var(--lg-text-body)',
      margin: '14px 0 18px'
    }
  }, "Terima kasih, ", form.name || 'Kak', " \uD83D\uDC96 Pesan Anda sudah kami siapkan \u2014 lanjutkan di WhatsApp agar tim kami bisa membalas langsung."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    href: waHref
  }, "Buka WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Ubah Pesan"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Nama"), /*#__PURE__*/React.createElement("input", {
    style: field,
    value: form.name,
    placeholder: "Nama Anda",
    onChange: e => setForm({
      ...form,
      name: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Kebutuhan"), /*#__PURE__*/React.createElement("select", {
    style: field,
    value: form.need,
    onChange: e => setForm({
      ...form,
      need: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", null, "Custom order"), /*#__PURE__*/React.createElement("option", null, "Sepatu pengantin"), /*#__PURE__*/React.createElement("option", null, "Sepatu pesta & dansa"), /*#__PURE__*/React.createElement("option", null, "Ready stock"), /*#__PURE__*/React.createElement("option", null, "Pesanan rombongan"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Pesan"), /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...field,
      minHeight: '110px',
      resize: 'vertical'
    },
    value: form.message,
    placeholder: "Ukuran, warna, tanggal acara\u2026",
    onChange: e => setForm({
      ...form,
      message: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Button, {
    block: true,
    type: "submit"
  }, "Kirim Pesan")))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  SectionHead,
  Eyebrow,
  Button,
  PillTag,
  Card,
  InfoCard,
  TestimonialCard,
  GuestFrame,
  FeatureRow,
  CtaBand
} = window.LagersonsShoesDesignSystem_bbb218;
function HomeScreen({
  go
}) {
  const L = window.LG;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '455px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundImage: 'url(' + L.live.heroBg + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: '#000',
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: '900px',
      padding: '80px 24px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--lg-font-display)',
      fontWeight: 700,
      fontSize: 'var(--lg-size-hero)',
      letterSpacing: 'var(--lg-track-hero)',
      lineHeight: 'var(--lg-lh-heading)',
      color: 'var(--lg-pink-100)',
      margin: '0 0 10px'
    }
  }, "Tampil Anggun di Setiap Langkah"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--lg-font-ui)',
      fontSize: 'var(--lg-size-body-lg)',
      fontWeight: 500,
      letterSpacing: '0.3px',
      color: '#fff',
      maxWidth: '75%',
      margin: '0 auto 28px'
    }
  }, "Lagersons Shoes menghadirkan sepatu pesta dan sandal wanita berkualitas premium yang elegan dan nyaman dipakai dengan harga terjangkau. Tersedia pilihan ", /*#__PURE__*/React.createElement("em", null, "heels"), " ", /*#__PURE__*/React.createElement("strong", null, "siap pakai"), " maupun ", /*#__PURE__*/React.createElement("strong", null, "custom order"), " untuk setiap momen Anda."), /*#__PURE__*/React.createElement(Button, {
    size: "wp",
    href: L.WA1
  }, "Contact Us"))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Keunggulan Kami",
    eyebrowTone: "olive",
    title: "Mengapa Pilih Kami?",
    divider: true
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 3,
    style: {
      marginTop: '25px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: L.live.customDesign,
    alt: "Sepatu custom Lagersons",
    style: {
      width: '100%',
      height: '368px',
      objectFit: 'cover',
      borderRadius: 'var(--lg-radius-img)',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement(InfoCard, {
    level: "h3",
    title: "Desain Custom",
    style: {
      padding: '6px 10px 0'
    }
  }, "Mulai dari gaya klasik, mewah, hingga kasual, Lagersons melayani pemesanan sepatu custom sesuai kebutuhan dan karakter Anda")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: L.live.store,
    alt: "Toko offline Lagersons",
    style: {
      width: '100%',
      height: '368px',
      objectFit: 'cover',
      borderRadius: 'var(--lg-radius-img)',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement(InfoCard, {
    level: "h3",
    title: "Bebas Fitting",
    style: {
      padding: '6px 10px 0'
    }
  }, "Tak hanya online, pelanggan juga bisa datang langsung ke 2 toko offline Lagersons. Baik untuk fitting, konsultasi, atau pembelian langsung")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: L.live.bestInClass,
    alt: "Koleksi Lagersons",
    style: {
      width: '100%',
      height: '368px',
      objectFit: 'cover',
      borderRadius: 'var(--lg-radius-img)',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement(InfoCard, {
    level: "h3",
    title: "Terbaik di Kelasnya",
    style: {
      padding: '6px 10px 0'
    }
  }, "Tampilan premium, model bervariasi, kenyamanan maksimal dan harga terjangkau. Pas di kaki, pas di mata, dan pas di kantong")))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(FeatureRow, {
    reverse: true,
    image: /*#__PURE__*/React.createElement("img", {
      src: L.live.testi1,
      alt: "Pelanggan Lagersons",
      style: {
        width: '100%',
        display: 'block'
      }
    })
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "olive"
  }, "Komitmen Kami #1"), /*#__PURE__*/React.createElement(InfoCard, {
    title: "Tampil Spesial di Setiap Momen"
  }, "Dari langkah pertama di panggung akbar, dansa romantis di hari pernikahan, hingga acara penting profesional, kami percaya bahwa setiap perempuan berhak tampil maksimal"), /*#__PURE__*/React.createElement(Button, {
    size: "wp",
    href: "#spesial"
  }, "View Our Special Guests"))), /*#__PURE__*/React.createElement(Section, {
    tight: true,
    tint: true
  }, /*#__PURE__*/React.createElement(FeatureRow, {
    image: /*#__PURE__*/React.createElement("img", {
      src: L.live.commitment2,
      alt: "Sepatu Lagersons",
      style: {
        width: '100%',
        display: 'block'
      }
    })
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "olive"
  }, "Komitmen Kami #2"), /*#__PURE__*/React.createElement(InfoCard, {
    title: "Desain Kami, Cerminan Anda"
  }, "Setiap perempuan memiliki karakter yang unik. Baik Anda menyukai gaya trendy, klasik, atau minimalis, Lagersons menghadirkan sepatu terbaik sesuai dengan gaya hidup dan kepribadian Anda."), /*#__PURE__*/React.createElement(Button, {
    size: "wp",
    onClick: () => go('Products')
  }, "View Our Collections"))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(FeatureRow, {
    reverse: true,
    image: /*#__PURE__*/React.createElement("img", {
      src: L.live.commitment3,
      alt: "Pelayanan Lagersons",
      style: {
        width: '100%',
        display: 'block'
      }
    })
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "olive"
  }, "Komitmen Kami #3"), /*#__PURE__*/React.createElement(InfoCard, {
    title: "Pelayanan Sepenuh Hati"
  }, "Kami berkomitmen memberikan pengalaman terbaik, mulai dari konsultasi, fitting, custom order, hingga after-sales. Kepuasan Anda adalah prioritas kami, baik offline ataupun online."), /*#__PURE__*/React.createElement(Button, {
    size: "wp",
    onClick: () => go('About')
  }, "View Our Testimonies"))), /*#__PURE__*/React.createElement(Section, {
    id: "spesial",
    tint: true
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "olive"
  }, "Tamu Spesial Kami"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--lg-pink-100)',
      padding: '20px 40px',
      margin: '0 auto 40px',
      maxWidth: '900px'
    }
  }, /*#__PURE__*/React.createElement("h5", {
    style: {
      fontFamily: 'var(--lg-font-display)',
      fontWeight: 700,
      fontSize: '35px',
      lineHeight: '43px',
      letterSpacing: 'var(--lg-track-section)',
      textAlign: 'center',
      color: 'var(--lg-text-heading)',
      margin: 0
    }
  }, "Lagersons sudah berulang kali menjadi pilihan bagi aktris papan atas, dancer tradisional, dan modern, hingga deretan model untuk menunjang penampilan mereka")), /*#__PURE__*/React.createElement(Grid, {
    cols: 2,
    style: {
      rowGap: '40px'
    }
  }, /*#__PURE__*/React.createElement(GuestFrame, {
    name: "Yuni Shara",
    role: "Legendary Singer & Actress",
    media: [{
      type: 'video',
      src: L.video.clip1
    }, {
      type: 'image',
      src: L.live.yuniPhoto,
      alt: 'Yuni Shara'
    }, {
      type: 'video',
      src: L.video.yuni
    }]
  }), /*#__PURE__*/React.createElement(GuestFrame, {
    name: "Ajeng Utami",
    role: "Professional Bellydancer & Selebgram",
    media: [{
      type: 'image',
      src: L.live.ajengPhoto,
      alt: 'Ajeng Utami'
    }, {
      type: 'video',
      src: L.video.ajeng
    }]
  }), /*#__PURE__*/React.createElement(GuestFrame, {
    name: "Gita Bellydancer Bali",
    role: "Professional Bellydancer & Drummer",
    media: [{
      type: 'video',
      src: L.video.gita1
    }, {
      type: 'video',
      src: L.video.gita2
    }]
  }), /*#__PURE__*/React.createElement(GuestFrame, {
    name: "Tarina Putri Rahayu",
    role: "Putri Batik Remaja Indonesia 2025",
    media: [{
      type: 'image',
      src: L.live.testi2,
      alt: 'Tarina Putri Rahayu'
    }],
    layout: "stack"
  }), /*#__PURE__*/React.createElement(GuestFrame, {
    name: "Miss LSPR Jakarta 2024",
    role: "Top University Beauty Pageant Finalist",
    media: [{
      type: 'image',
      src: L.live.missLspr,
      alt: 'Miss LSPR Jakarta 2024'
    }],
    layout: "stack"
  }), /*#__PURE__*/React.createElement(GuestFrame, {
    name: "Batavia Dance Studio",
    role: "Top Dance Performance Company",
    media: [{
      type: 'image',
      src: L.live.batavia,
      alt: 'Batavia Dance Studio'
    }],
    layout: "stack"
  }), /*#__PURE__*/React.createElement(GuestFrame, {
    name: "Melissa Franklien",
    role: "Dancer & Choreographer",
    media: [{
      type: 'image',
      src: L.live.melissa,
      alt: 'Melissa Franklien'
    }],
    layout: "stack"
  }), /*#__PURE__*/React.createElement(GuestFrame, {
    name: "Icha Artha",
    role: "Dancer & Influencer",
    media: [{
      type: 'image',
      src: L.live.icha,
      alt: 'Icha Artha'
    }],
    layout: "stack"
  }), /*#__PURE__*/React.createElement(GuestFrame, {
    name: "Goong Prada Management",
    role: "Dance Management Studio by UNESA Surabaya",
    media: [{
      type: 'image',
      src: L.live.goong,
      alt: 'Goong Prada Management'
    }],
    layout: "stack"
  }), /*#__PURE__*/React.createElement(GuestFrame, {
    name: "Patricia Nova",
    role: "Singer & Influencer",
    media: [{
      type: 'image',
      src: L.IMG + 'guests-patricia-nina.jpg',
      alt: 'Patricia Nova'
    }],
    layout: "stack"
  }))), /*#__PURE__*/React.createElement(Section, {
    tint: true
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Testimoni",
    title: "Kata Pelanggan Kami"
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 3
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    name: "Bu Marita Suherman"
  }, "Terima kasih Lagersons sudah menemani saya merayakan kelulusan SMA putri tercinta \uD83C\uDF93 Sepatunya cocok dengan kebaya saya dan putri, cantik dan tetap nyaman seharian \u2728"), /*#__PURE__*/React.createElement(TestimonialCard, {
    name: "Bu Ivy Aretha"
  }, "Thank you Lagersons sudah menemani momen spesial yang menjadi bintang pesta. Sepatunya nyaman dipakai dan tetap keren dipadukan outfitnya \uD83D\uDC96\uD83D\uDC60"), /*#__PURE__*/React.createElement(TestimonialCard, {
    name: "Kak Dian Lestari"
  }, "Thank you for your orders! We hope these white heels carry you comfortably and elegantly at your son's wedding. Untuk order custom, tinggal DM saja \u2014 prosesnya ramah dan cepat."))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(CtaBand, {
    title: "Siap Tampil Anggun di Momen Spesial Anda?",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "onbrand",
      href: L.WA1
    }, "WhatsApp 0857-1472-2598"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      href: L.WA2
    }, "WhatsApp 0813-1678-0269"))
  }, "Konsultasikan kebutuhan sepatu custom atau kunjungi toko offline kami di Tangerang & Jakarta Selatan. Tim kami siap membantu lewat WhatsApp.")));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductsScreen.jsx
try { (() => {
const {
  PageHero,
  SectionHead,
  ProductCard,
  FeatureRow,
  Eyebrow,
  InfoCard,
  Button,
  CtaBand
} = window.LagersonsShoesDesignSystem_bbb218;
function ProductsScreen({
  go
}) {
  const L = window.LG;
  const wa = name => 'https://wa.me/6285714722598?text=Halo%20Lagersons%2C%20saya%20tertarik%20dengan%20' + encodeURIComponent(name);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    tag: "Katalog",
    title: "Koleksi Lagersons Shoes"
  }, "Sepatu & sandal wanita premium untuk pernikahan, pesta, kerja, hingga harian \u2014 tersedia ready stock maupun custom order sesuai keinginan Anda."), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Koleksi Pengantin",
    title: "Sepatu & Heels Pernikahan"
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 2
  }, /*#__PURE__*/React.createElement(ProductCard, {
    image: L.photo.bridal,
    alt: "Sepatu heels bridal lace payet Lagersons",
    tag: "Bridal",
    title: "Bridal Lace Heels",
    price: "Mulai Rp 650.000",
    shopeeHref: L.SHOPEE,
    whatsappHref: wa('Bridal Lace Heels')
  }, "Sequin & lace heels dengan bros payet \u2014 elegan untuk akad, resepsi, maupun after party. \u201CBeautiful in every step.\u201D"), /*#__PURE__*/React.createElement(ProductCard, {
    image: L.photo.party,
    alt: "Sandal pesta Lagersons",
    tag: "Party",
    title: "Embellished Beaded Mules",
    price: "Hubungi kami untuk harga",
    shopeeHref: L.SHOPEE,
    whatsappHref: wa('Embellished Beaded Mules')
  }, "Sandal mule bermotif manik & kristal, cocok untuk seserahan, pesta, maupun acara formal keluarga."))), /*#__PURE__*/React.createElement(Section, {
    tint: true
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Ready Stock",
    title: "Sandal & Heels Harian"
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 3,
    style: {
      rowGap: 'var(--lg-grid-gap)'
    }
  }, /*#__PURE__*/React.createElement(ProductCard, {
    image: L.IMG + 'product-white-heels.jpg',
    alt: "Sandal block heels putih Lagersons",
    tag: "Best Seller",
    title: "White Block Heels",
    price: "Hubungi kami untuk harga",
    shopeeHref: L.SHOPEE,
    whatsappHref: wa('White Block Heels')
  }, "Sandal block heel warna putih, nyaman dipakai berdiri lama \u2014 favorit untuk acara keluarga dan resepsi."), /*#__PURE__*/React.createElement(ProductCard, {
    image: L.photo.collection,
    alt: "Sandal platform heels nude Lagersons",
    tag: "Ready Stock",
    title: "Nude Platform Heels",
    price: "Hubungi kami untuk harga",
    shopeeHref: L.SHOPEE,
    whatsappHref: wa('Nude Platform Heels')
  }, "Platform heels warna nude dengan tali silang, memberi tambahan tinggi tanpa mengorbankan kenyamanan kaki."), /*#__PURE__*/React.createElement(ProductCard, {
    image: L.photo.custom,
    alt: "Sandal heels tali warna tan Lagersons",
    tag: "Ready Stock",
    title: "Tan Strappy Block Heels",
    price: "Hubungi kami untuk harga",
    shopeeHref: L.SHOPEE,
    whatsappHref: wa('Tan Strappy Block Heels')
  }, "Sandal heels tali dengan aksen simpul, warna tan yang serasi dengan banyak outfit kerja maupun santai."))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(FeatureRow, {
    image: L.photo.service,
    alt: "Pelayanan dan koleksi Lagersons Shoes"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "pink"
  }, "Custom Order"), /*#__PURE__*/React.createElement(InfoCard, {
    title: "Punya Desain Impian Sendiri?"
  }, "Lagersons melayani pemesanan sepatu custom mulai dari gaya klasik, mewah, hingga kasual \u2014 pilih bahan, warna, dan detail sesuai karakter Anda. Cocok untuk seragam kantor, hadiah, maupun kebutuhan komunitas & tari dalam jumlah banyak."), /*#__PURE__*/React.createElement("ul", {
    style: {
      color: 'var(--lg-text-body)',
      fontFamily: 'var(--lg-font-body)',
      paddingLeft: '20px',
      marginBottom: '24px'
    }
  }, /*#__PURE__*/React.createElement("li", null, "Konsultasi desain & ukuran gratis"), /*#__PURE__*/React.createElement("li", null, "Bisa fitting langsung di 2 toko offline kami"), /*#__PURE__*/React.createElement("li", null, "Cocok untuk pesanan personal maupun rombongan (dance studio, kantor, komunitas)")), /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    href: "https://wa.me/6285714722598?text=Halo%20Lagersons%2C%20saya%20ingin%20konsultasi%20custom%20order%20sepatu"
  }, "Konsultasi Custom Order"))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement(CtaBand, {
    title: "Belanja Lebih Mudah via Shopee",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "onbrand",
      icon: "\uD83D\uDECD\uFE0F",
      href: L.SHOPEE
    }, "Kunjungi Shopee Lagersons"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go('Contact')
    }, "Hubungi Kami"))
  }, "Lihat katalog lengkap, ulasan pelanggan, dan checkout aman langsung melalui toko resmi Shopee kami.")));
}
Object.assign(window, {
  ProductsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Section.jsx
try { (() => {
const Section = ({
  tint,
  tight,
  children,
  style,
  id
}) => /*#__PURE__*/React.createElement("section", {
  id: id,
  style: {
    padding: tight ? 'var(--lg-section-y-tight) 0' : 'var(--lg-section-y) 0',
    background: tint ? 'var(--lg-surface-soft)' : 'var(--lg-white)',
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: '100%',
    maxWidth: 'var(--lg-container)',
    margin: '0 auto',
    padding: '0 var(--lg-gutter)',
    boxSizing: 'border-box'
  }
}, children));
const Grid = ({
  cols = 3,
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: 'repeat(' + cols + ', 1fr)',
    gap: 'var(--lg-grid-gap)',
    ...style
  }
}, children);
Object.assign(window, {
  Section,
  Grid
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Section.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/media.js
try { (() => {
/* Real Lagersons media. Remote URLs are the live WordPress site's own files —
   the brand's actual photography and Special Guests video. Local paths are the
   photos copied into this design system. */
window.LG = {
  WA1: 'https://wa.me/6285714722598?text=Halo%20Lagersons%2C%20saya%20ingin%20bertanya%20tentang%20produk',
  WA2: 'https://wa.me/6281316780269?text=Halo%20Lagersons%2C%20saya%20ingin%20bertanya%20tentang%20produk',
  SHOPEE: 'https://shopee.co.id/lagersonsshoes',
  IG: 'https://www.instagram.com/lagersonsshoes/?hl=en',
  TIKTOK: 'https://www.tiktok.com/@lagersonshoes',
  LOGO_BADGE: '../../assets/logo/lagersons-logo-badge-pink.png',
  LOGO_WORDMARK: '../../assets/logo/lagersons-logo-wordmark.png',
  IMG: '../../assets/imagery/',
  /* Real product photography (no campaign/poster artwork) */
  photo: {
    bridal: '../../assets/imagery/product-white-heels.jpg',
    party: 'https://live-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-08-at-17.05.01.jpeg',
    collection: 'https://live-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-08-at-17.04.34.jpeg',
    custom: 'https://live-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-07-at-09.38.54-1.jpeg',
    service: 'https://live-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-11-at-10.00.45.jpeg'
  },
  live: {
    heroBg: 'https://live-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/@lagersonsshoes-Email-Header-1.png',
    customDesign: 'https://live-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-07-at-09.38.54-1.jpeg',
    store: 'https://live-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/Toko3.jpg',
    bestInClass: 'https://live-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-08-at-17.04.34.jpeg',
    testi1: 'https://live-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/Testi1.jpg',
    testi2: 'https://live-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/Testi2-1.jpg',
    commitment2: 'https://live-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-08-at-17.05.01.jpeg',
    commitment3: 'https://live-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-11-at-10.00.45.jpeg',
    yuniPhoto: 'https://live-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-09-at-09.41.08-2.jpeg',
    ajengPhoto: 'https://live-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-08-at-19.49.01-2.jpeg',
    missLspr: 'https://live-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/LSPR24-One_imresizer-1.jpg',
    batavia: 'https://live-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/Sukses-selalu-maki._imresizer-3.jpg',
    melissa: 'https://live-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/Screenshot-3626.png',
    icha: 'https://live-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-11-at-14.45.02-1.jpeg',
    goong: 'https://live-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/Screenshot-3631.png'
  },
  video: {
    clip1: 'https://dev-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/AQM1ktdkQ7P8ggsHiP5ZoQEtI5lLoBwabIsfNLuNas2g8FIUVanOLr6RY54QYsFl8iuOk4YRJEAGyLullpEve9OE1QajT6Th-1.mp4',
    yuni: 'https://dev-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/Thank-you-so-much-Mrs-Yuni-Shara-@yunishara36-yang-sudah-mempercayai-Lagersons-Shoes-%E2%9D%A4%EF%B8%8F%F0%9F%99%8F%E2%9D%A4%EF%B8%8F.mp4',
    ajeng: 'https://dev-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/Performance-belly-dance-%F0%9F%92%83%F0%9F%92%83%F0%9F%92%83-Miss-@itsajenggutami_-luar-biasa-keren.-thank-you-so-much-sela.mp4',
    gita1: 'https://dev-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/Thank-you-so-much-Ms-Gita-@gitabellydance-selalu-shopping-sepatu-dance-Lagersons%F0%9F%99%8F.-Terima-k.mp4',
    gita2: 'https://dev-lagersons-shoes.pantheonsite.io/wp-content/uploads/2026/02/Sukses-selalu-Dear-Ms-Gita-belly-dancer-@gitabellydance-.-Terima-kasih-banyak-selalu-mempercay-1.mp4'
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/media.js", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ContactTile = __ds_scope.ContactTile;

__ds_ns.GuestFrame = __ds_scope.GuestFrame;

__ds_ns.InfoCard = __ds_scope.InfoCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.StoreCard = __ds_scope.StoreCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.PillTag = __ds_scope.PillTag;

__ds_ns.SectionHead = __ds_scope.SectionHead;

__ds_ns.SocialPill = __ds_scope.SocialPill;

__ds_ns.CtaBand = __ds_scope.CtaBand;

__ds_ns.FeatureRow = __ds_scope.FeatureRow;

__ds_ns.PageHero = __ds_scope.PageHero;

__ds_ns.PromoBanner = __ds_scope.PromoBanner;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.WhatsAppFloat = __ds_scope.WhatsAppFloat;

})();
