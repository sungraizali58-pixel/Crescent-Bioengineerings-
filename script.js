/* ===== Crescent Bioengineerings – site script ===== */

// ---------- SETTINGS (edit here) ----------
const WA_NUMBER = "923030148773"; // WhatsApp number: country code + number, no "+" or spaces

// R&D numbers: leave null to hide. Example: {doctors: 12, engineers: 8, universities: 3}
const RND_STATS = { doctors: null, engineers: null, universities: null };
// Partner universities / research centers (names shown as chips). Example: ["University of X"]
const RND_PARTNERS = [];

// ---------- helpers ----------
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const waLink = (t) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t)}`;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- product data ----------
const ICONS = {
  lith: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><rect x="8" y="22" width="48" height="24" rx="4"/><circle cx="42" cy="34" r="6"/><rect x="14" y="30" width="14" height="8" rx="2"/></svg>',
  dia: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><rect x="8" y="26" width="34" height="26" rx="4"/><circle cx="25" cy="39" r="6"/><path d="M42 36c8 0 6-18 14-18M52 12l6 6-6 6"/></svg>'
};

const PROBES_ART = `<svg viewBox="0 0 320 240" role="img" aria-label="Probe sizes 0.8 to 2.0 millimetres" style="width:100%;height:100%">
  ${[["0.8", 1.2], ["1.0", 1.6], ["1.2", 2.1], ["1.5", 2.7], ["1.8", 3.4], ["2.0", 4]].map(([s, w], i) => {
    const y = 40 + i * 30;
    return `<rect x="30" y="${y - 8}" width="34" height="16" rx="3" fill="#7e93ad"/><line x1="64" y1="${y}" x2="250" y2="${y}" stroke="#0b6bbd" stroke-width="${w}" stroke-linecap="round"/><text x="262" y="${y + 4}" font-size="13" font-weight="600" fill="#0f1c33" font-family="Inter,sans-serif">${s} mm</text>`;
  }).join("")}
</svg>`;

const IMG = (src, w, h, alt, cap) => ({ src, w, h, alt, cap });

const PRODUCTS = [
  {
    id: "lithobuster", cat: "Lithotripsy", name: "Pneumatic Lithotripsy – Lithobuster",
    short: "Compressed-air ballistic stone fragmentation.",
    desc: "Uses compressed air to generate kinetic energy in a titanium bullet, which is transmitted to a stainless titanium probe. The probe, in direct contact with the stone, delivers high-vibration impacts that fracture it into smaller pieces, making them easier to remove or pass naturally.",
    images: [
      IMG("images/lithobuster.jpg", 1448, 1086, "Crescent Lithobuster pneumatic lithotripsy unit", "Studio image"),
      IMG("images/lithobuster-real.jpg", 1600, 1200, "Actual Lithobuster unit photographed in our workshop", "Actual unit")
    ],
    feats: ["Ease of use and cost effective", "Safe and efficient procedure", "Rapid stone fragmentation", "Adjustable pressure levels", "Durable materials, economic price, superior quality"],
    specs: [["Principle", "Pneumatic & ballistic"], ["Applications", "URS, bladder stones, PCNL"], ["Pressure", "Adjustable (pressure control knob and gauge)"], ["Display", "LCD – mode, frequency, shot count"], ["Operation", "Foot switch and air output port"]]
  },
  {
    id: "soundless", cat: "Lithotripsy", name: "Integrated Soundless Lithobuster",
    short: "Lithobuster with built-in soundless compressor on a mobile trolley.",
    desc: "An advanced pneumatic lithotripsy system designed for superior stone fragmentation with a focus on user convenience and patient comfort. The integrated, soundless compressor ensures quiet operation, which enhances the surgical environment and reduces patient stress.",
    images: [IMG("images/soundless-lithobuster.jpg", 1234, 1234, "Integrated soundless Lithobuster on mobile trolley", "Studio image")],
    feats: ["Integrated soundless compressor", "Durable materials", "Economic price, superior quality", "Adjustable pressure levels", "Safe and efficient procedure, rapid stone fragmentation"],
    specs: [["Compressor", "Integrated, soundless"], ["Mobility", "Mobile trolley with castors"], ["For patients", "Minimally invasive, effective stone removal, shorter procedure time, low risk of infection, quick recovery"], ["For surgeons", "Precision and control, reduced procedure time, versatility, enhanced safety"]]
  },
  {
    id: "zm2", cat: "Lithotripsy", name: "ZM2 Pneumatic Handpiece",
    short: "Powerful ballistic technology, compatible with the Swiss LithoClast.",
    desc: "A lightweight, ergonomic pneumatic handpiece using ballistic technology for controlled, precise fragmentation with consistent power output and lower heat generation.",
    images: [IMG("images/zm2-handpiece.jpg", 1234, 1234, "Crescent pneumatic handpiece", "Illustrative image")],
    feats: ["Reduced fatigue for surgeons", "Light weight design", "Ergonomics improve patient safety", "Lower heat generation", "Consistent power output"],
    specs: [["Technology", "Ballistic"], ["Compatibility", "Swiss LithoClast"], ["Available for", "PCNL and URS"]]
  },
  {
    id: "probes", cat: "Lithotripsy", name: "Handpiece Probes",
    short: "Six standard sizes from 0.8 mm to 2.0 mm.",
    desc: "Probes compatible with the Swiss LithoClast, available for percutaneous nephrolithotomy (PCNL) and uretero-renoscopy (URS) applications.",
    images: [], art: PROBES_ART,
    feats: ["Powerful fragmentation", "Controlled and precise", "Extremely durable", "High tissue safety"],
    specs: [["Standard sizes", "0.8 / 1.0 / 1.2 / 1.5 / 1.8 / 2.0 mm"], ["Compatibility", "Swiss LithoClast"], ["Available for", "PCNL and URS"]]
  },
  {
    id: "light-source", cat: "Endoscopy", name: "Endoscopic Light Source",
    short: "Bright, uniform illumination up to 8000 lumens.",
    desc: "High-intensity LED (or Xenon) light source for bright and uniform illumination during endoscopic procedures, with advanced cooling and automatic safety shut-off.",
    images: [
      IMG("images/light-source.jpg", 1254, 1254, "Crescent LED light source with grey light cable", "Studio image"),
      IMG("images/light-source-2.jpg", 1254, 1254, "Crescent LED light source with blue light cable", "Studio image"),
      IMG("images/light-source-3.jpg", 1254, 1254, "Crescent LED light source with black light cable", "Studio image")
    ],
    feats: ["Adjustable output up to 8000 lumens", "Daylight colour temperature for true-to-life colour", "Advanced cooling for continuous operation", "Automatic shut-off and overheating protection", "Low power consumption"],
    specs: [["Light type", "High-intensity LED or Xenon"], ["Brightness", "Up to 8000 lumens (adjustable)"], ["Colour temperature", "5,500 K – 6,500 K"], ["CRI", "≥ 90"], ["Compatibility", "Universal light adapter (e.g. Olympus, Storz, Stryker)"], ["Lifespan", "30,000+ hours (LED)"]]
  },
  {
    id: "camera", cat: "Endoscopy", name: "Endoscopic Camera System",
    short: "4K, Full HD and HD cameras with accurate white balance.",
    desc: "Endoscopic cameras engineered for healthcare, veterinary and industrial inspection use. Each camera has a high-resolution LCD for real-time monitoring and analysis, with accurate white balance for consistent, true colour.",
    images: [IMG("images/camera.jpg", 1234, 1234, "Crescent 4K endoscopic camera system with monitor, camera control unit and light source", "Studio image")],
    feats: ["Accurate colour rendering to distinguish healthy and diseased tissue", "Improved visibility and depth perception", "No colour shift when switching instruments or light sources", "Clear video and photo documentation", "Camera head with photo capture, zoom and white balance buttons"],
    specs: [["Ultra HD 4K", "3840 × 2160, advanced CMOS, HDR, 60 fps"], ["FHD digital", "1920 × 1080, progressive scan, USB connectivity"], ["HD digital", "1280 × 720, advanced CMOS, HDR, 60 fps"], ["Applications", "Surgical visualization, general endoscopy, diagnostic imaging"]]
  },
  {
    id: "monitor", cat: "Endoscopy", name: "Medical-Grade LED Monitor",
    short: "Full HD or 4K display built for operating rooms.",
    desc: "Medical-grade LED monitors for crystal-clear visualization of fine details during endoscopic and minimally invasive procedures, in a robust antimicrobial housing.",
    images: [IMG("images/monitor.jpg", 1302, 1086, "Medical-grade display showing an endoscopic image", "Illustrative image")],
    feats: ["High-luminance LED backlight for bright operating rooms", "Calibrated colour for accurate tissue differentiation", "HDR for bright and dark regions", "Antimicrobial coating for hygienic use", "VESA mount for wall or boom arm"],
    specs: [["Resolution", "Full HD (1920 × 1080) or 4K Ultra HD (3840 × 2160)"], ["Response time", "< 10 ms"], ["Colour gamut", "BT.709 or DCI-P3"], ["Inputs", "HDMI, DVI, SDI"], ["Compliance", "IEC 60601, DICOM-compatible grayscale calibration"]]
  },
  {
    id: "trolley", cat: "Endoscopy", name: "Medical Equipment Trolley",
    short: "Mobile trolley for the complete endoscopy tower.",
    desc: "A sturdy, ergonomic trolley with adjustable shelves and a storage drawer to carry camera, light source and other equipment smoothly through the operating room.",
    images: [IMG("images/trolley.jpg", 1024, 1536, "Crescent medical equipment trolley with shelves and drawer", "Studio image")],
    feats: ["Durability and sturdiness", "Smooth mobility on lockable castors", "Ergonomic design", "Ample storage capacity", "Customization options"],
    specs: [["Construction", "Aluminium-style frame with shelves and drawer"], ["Mobility", "Four castors"], ["Customization", "Available on request"]]
  },
  {
    id: "uroflow", cat: "Urology & Surgery", name: "Uroflow Meter", isNew: true,
    short: "Non-invasive assessment of urine flow with live flow curve.",
    desc: "A uroflowmeter that records urine flow over time and displays the flow curve together with key results on a clear screen, helping clinicians assess voiding function.",
    images: [IMG("images/uroflow-meter.jpg", 1536, 1024, "Crescent uroflow meter with funnel and graduated measuring jar", "Studio image")],
    feats: ["Live flow-rate curve", "Voided volume, maximum and average flow, voiding time", "One-touch Start / Stop", "Funnel with graduated measuring jar", "Non-invasive, simple testing"],
    specs: [["Results shown", "Voided volume (ml), max flow (ml/s), avg flow (ml/s), voiding time (s)"], ["Display", "Flow graph with numeric results"], ["Collection", "Funnel and graduated jar"], ["Full specifications", "Contact us"]]
  },
  {
    id: "diathermy", cat: "Urology & Surgery", name: "Diathermy Machine", isNew: true,
    short: "Electrosurgical unit for cutting and coagulation.",
    desc: "An electrosurgical diathermy unit for cutting and coagulation during surgical procedures, helping control bleeding with precision.",
    images: [], icon: "dia",
    feats: ["Cutting and coagulation modes", "Adjustable power output", "Suitable for general and urological surgery", "Simple, reliable controls"],
    specs: [["Function", "Electrosurgical cutting and coagulation"], ["Full specifications", "Contact us"]]
  }
];

// ---------- WhatsApp links ----------
$$("[data-wa]").forEach((a) => (a.href = waLink(a.dataset.wa)));
$("#yr").textContent = new Date().getFullYear();

// ---------- quote list (saved in the browser) ----------
let quote = [];
try { quote = JSON.parse(localStorage.getItem("crescentQuote") || "[]").filter((id) => PRODUCTS.some((p) => p.id === id)); } catch (e) { quote = []; }
const saveQuote = () => { try { localStorage.setItem("crescentQuote", JSON.stringify(quote)); } catch (e) { /* ignore */ } };
const byId = (id) => PRODUCTS.find((p) => p.id === id);

function updateQuoteUI() {
  $("#quoteCount").textContent = quote.length;
  $$(".pc .add").forEach((b) => {
    const on = quote.includes(b.dataset.id);
    b.classList.toggle("in", on);
    b.setAttribute("aria-pressed", on);
    b.title = on ? "Remove from quote list" : "Add to quote list";
    b.textContent = on ? "✓" : "+";
  });
  if (current) $("#mAdd").textContent = quote.includes(current.id) ? "Remove from quote list" : "Add to quote list";
  renderDrawer();
}
function toggleQuote(id) {
  quote = quote.includes(id) ? quote.filter((x) => x !== id) : [...quote, id];
  saveQuote(); updateQuoteUI();
}

// ---------- catalogue ----------
const grid = $("#grid"), chips = $("#chips"), result = $("#result"), emptyMsg = $("#empty"), search = $("#q");
const CATS = ["All", ...new Set(PRODUCTS.map((p) => p.cat))];
let activeCat = "All";

const mediaHTML = (p, big) => {
  if (p.images.length) {
    const i = p.images[0];
    return `<img src="${i.src}" width="${i.w}" height="${i.h}" alt="${esc(i.alt)}" loading="lazy" decoding="async">`;
  }
  if (p.art) return `<span class="ph">${p.art}</span>`;
  return `<span class="ph">${ICONS[p.icon] || ICONS.lith}<span>Photo coming soon</span></span>`;
};

function renderChips() {
  chips.innerHTML = CATS.map((c) => `<button type="button" role="tab" class="${c === activeCat ? "on" : ""}" aria-selected="${c === activeCat}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
}
function renderGrid() {
  const q = search.value.trim().toLowerCase();
  const list = PRODUCTS.filter((p) => (activeCat === "All" || p.cat === activeCat) &&
    (!q || (p.name + " " + p.short + " " + p.desc + " " + p.cat).toLowerCase().includes(q)));
  grid.innerHTML = list.map((p) => `
    <article class="pc">
      <button class="pc-img" type="button" data-open="${p.id}" aria-label="View ${esc(p.name)}">
        <span class="tag">${esc(p.cat)}</span>${p.isNew ? '<span class="tag new">NEW</span>' : ""}
        ${mediaHTML(p)}
      </button>
      <div class="pc-b">
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.short)}</p>
        <div class="pc-a">
          <button class="btn btn-primary" type="button" data-open="${p.id}">View details</button>
          <button class="btn btn-outline add" type="button" data-id="${p.id}" aria-label="Toggle ${esc(p.name)} in quote list">+</button>
        </div>
      </div>
    </article>`).join("");
  emptyMsg.hidden = list.length > 0;
  result.textContent = `Showing ${list.length} of ${PRODUCTS.length} products`;
  updateQuoteUI();
}
chips.addEventListener("click", (e) => {
  const b = e.target.closest("button"); if (!b) return;
  activeCat = b.dataset.c; renderChips(); renderGrid();
});
search.addEventListener("input", renderGrid);
$("#resetFilters").addEventListener("click", () => { search.value = ""; activeCat = "All"; renderChips(); renderGrid(); });
grid.addEventListener("click", (e) => {
  const add = e.target.closest(".add");
  if (add) { toggleQuote(add.dataset.id); return; }
  const o = e.target.closest("[data-open]");
  if (o) openModal(o.dataset.open);
});
// solution cards filter the catalogue
$$(".sol").forEach((a) => a.addEventListener("click", () => {
  activeCat = a.dataset.cat.replace("&amp;", "&"); search.value = ""; renderChips(); renderGrid();
}));

// ---------- product modal ----------
const modal = $("#modal"), mMain = $("#mMain"), mThumbs = $("#mThumbs");
let current = null, lastFocus = null;

function showImage(i) {
  mMain.classList.remove("zoom");
  const im = current.images[i];
  mMain.innerHTML = `<img src="${im.src}" width="${im.w}" height="${im.h}" alt="${esc(im.alt)}" decoding="async"><span class="m-cap">${esc(im.cap)}</span>`;
  $$("button", mThumbs).forEach((b, k) => b.classList.toggle("on", k === i));
}
function openModal(id) {
  current = byId(id); if (!current) return;
  lastFocus = document.activeElement;
  const p = current;
  $("#mCat").textContent = p.cat;
  $("#mTitle").textContent = p.name;
  $("#mDesc").textContent = p.desc;
  $("#mFeat").innerHTML = p.feats.map((f) => `<li>${esc(f)}</li>`).join("");
  $("#mSpecs").innerHTML = p.specs.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join("");
  $("#mWa").href = waLink(`Hello Crescent Bioengineerings, I am interested in: ${p.name}. Please share details and price.`);
  if (p.images.length) {
    mThumbs.innerHTML = p.images.length > 1 ? p.images.map((im, i) => `<button type="button" aria-label="Photo ${i + 1}"><img src="${im.src}" alt="" loading="lazy"></button>`).join("") : "";
    showImage(0);
    $("#mHint").hidden = false;
  } else {
    mThumbs.innerHTML = "";
    mMain.innerHTML = `<div class="ph" style="padding:30px">${p.art || (ICONS[p.icon] || "") + "<span>Photo coming soon</span>"}</div>`;
    $("#mHint").hidden = true;
  }
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  updateQuoteUI();
  $(".x", modal).focus();
}
function closeModal() {
  modal.hidden = true; current = null;
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}
mThumbs.addEventListener("click", (e) => {
  const b = e.target.closest("button"); if (!b) return;
  showImage($$("button", mThumbs).indexOf(b));
});
mMain.addEventListener("click", (e) => { if (e.target.tagName === "IMG") mMain.classList.toggle("zoom"); });
mMain.addEventListener("mousemove", (e) => {
  if (!mMain.classList.contains("zoom")) return;
  const r = mMain.getBoundingClientRect(), img = $("img", mMain);
  if (img) img.style.transformOrigin = `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`;
});
$("#mAdd").addEventListener("click", () => current && toggleQuote(current.id));
$$("[data-close]", modal).forEach((el) => el.addEventListener("click", closeModal));

// ---------- quote drawer ----------
const drawerWrap = $("#drawerWrap");
function renderDrawer() {
  const items = quote.map(byId).filter(Boolean);
  $("#dList").innerHTML = items.map((p) => `<li>${p.images[0] ? `<img src="${p.images[0].src}" alt="">` : '<span class="ni"></span>'}<span>${esc(p.name)}</span><button type="button" data-rm="${p.id}" aria-label="Remove ${esc(p.name)}">×</button></li>`).join("");
  $("#dEmpty").hidden = items.length > 0;
  $("#dSend").disabled = items.length === 0;
  $("#dSend").style.opacity = items.length ? 1 : .5;
  $("#dClear").hidden = items.length === 0;
}
const openDrawer = () => { drawerWrap.hidden = false; document.body.style.overflow = "hidden"; renderDrawer(); $(".x", drawerWrap).focus(); };
const closeDrawer = () => { drawerWrap.hidden = true; if (modal.hidden) document.body.style.overflow = ""; };
$("#openQuote").addEventListener("click", openDrawer);
$$("[data-close-drawer]").forEach((el) => el.addEventListener("click", closeDrawer));
$("#dList").addEventListener("click", (e) => { const b = e.target.closest("[data-rm]"); if (b) toggleQuote(b.dataset.rm); });
$("#dClear").addEventListener("click", () => { quote = []; saveQuote(); updateQuoteUI(); });
$("#dSend").addEventListener("click", () => {
  const items = quote.map(byId).filter(Boolean); if (!items.length) return;
  const name = $("#dName").value.trim(), org = $("#dOrg").value.trim();
  let t = "Hello Crescent Bioengineerings, I would like a quotation for:\n" + items.map((p, i) => `${i + 1}. ${p.name}`).join("\n");
  if (name) t += `\n\nName: ${name}`;
  if (org) t += `\nHospital/Clinic: ${org}`;
  window.open(waLink(t), "_blank", "noopener");
});

// keyboard: Esc closes, Tab stays inside open dialogs
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { if (!drawerWrap.hidden) closeDrawer(); else if (!modal.hidden) closeModal(); return; }
  if (e.key !== "Tab") return;
  const box = !drawerWrap.hidden ? $(".drawer", drawerWrap) : !modal.hidden ? $(".m-card", modal) : null;
  if (!box) return;
  const f = $$("a[href],button:not([disabled]),input,select,textarea", box).filter((n) => n.offsetParent !== null);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

// ---------- contact form -> WhatsApp ----------
const formProduct = $("#formProduct");
formProduct.innerHTML += PRODUCTS.map((p) => `<option>${esc(p.name)}</option>`).join("");
$("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const E = e.target.elements, hint = $("#formHint"), name = E["name"].value.trim();
  E["name"].classList.toggle("invalid", !name);
  if (!name) { hint.textContent = "Please enter your name."; E["name"].focus(); return; }
  hint.textContent = "";
  let t = `Hello Crescent Bioengineerings, my name is ${name}.`;
  if (E["org"].value.trim()) t += `\nHospital/Clinic: ${E["org"].value.trim()}`;
  if (E["city"].value.trim()) t += `\nCity: ${E["city"].value.trim()}`;
  if (E["phone"].value.trim()) t += `\nPhone: ${E["phone"].value.trim()}`;
  if (E["product"].value) t += `\nInterested in: ${E["product"].value}`;
  if (E["msg"].value.trim()) t += `\n\n${E["msg"].value.trim()}`;
  window.open(waLink(t), "_blank", "noopener");
  hint.textContent = "Opening WhatsApp… if nothing opens, please allow pop-ups or message us directly.";
});

// ---------- R&D (optional numbers & partners) ----------
const rs = $("#rndStats");
const rows = [["doctors", "Doctors"], ["engineers", "Biomedical engineers"], ["universities", "University research centers"]].filter(([k]) => RND_STATS[k] != null);
if (rows.length) {
  rs.hidden = false;
  rs.innerHTML = rows.map(([k, l]) => `<div class="stat"><b data-count="${RND_STATS[k]}">${RND_STATS[k]}</b><span>${l}</span></div>`).join("");
}
if (RND_PARTNERS.length) {
  const pe = $("#rndPartners"); pe.hidden = false;
  pe.innerHTML = "<strong>Research partners:</strong> " + RND_PARTNERS.map((n) => `<span>${esc(n)}</span>`).join("");
}

// ---------- hero slideshow ----------
const slides = $$("#stage .slide"), dotsBox = $("#dots");
let si = 0, timer;
dotsBox.innerHTML = slides.map((_, i) => `<button type="button" aria-label="Show slide ${i + 1}"></button>`).join("");
const dotEls = $$("button", dotsBox);
function showSlide(i) {
  si = (i + slides.length) % slides.length;
  slides.forEach((s, k) => s.classList.toggle("active", k === si));
  dotEls.forEach((d, k) => d.classList.toggle("on", k === si));
}
function play() { if (reduceMotion) return; clearInterval(timer); timer = setInterval(() => showSlide(si + 1), 4500); }
dotEls.forEach((d, i) => d.addEventListener("click", () => { showSlide(i); play(); }));
$("#stage").addEventListener("mouseenter", () => clearInterval(timer));
$("#stage").addEventListener("mouseleave", play);
document.addEventListener("visibilitychange", () => (document.hidden ? clearInterval(timer) : play()));
showSlide(0); play();

// ---------- nav, progress, back-to-top ----------
const nav = $("#nav"), burger = $("#burger"), progress = $("#progress"), toTop = $("#toTop");
function onScroll() {
  const y = window.scrollY, h = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
  nav.classList.toggle("solid", y > 24 || nav.classList.contains("open"));
  toTop.classList.toggle("show", y > 700);
}
addEventListener("scroll", onScroll, { passive: true }); onScroll();
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open); onScroll();
});
$$("#links a").forEach((a) => a.addEventListener("click", () => { nav.classList.remove("open"); burger.setAttribute("aria-expanded", false); onScroll(); }));
toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

// ---------- reveal, counters, active link ----------
function countUp(el) {
  const target = +el.dataset.count, suffix = el.dataset.suffix || "";
  if (reduceMotion || !isFinite(target)) { el.textContent = target.toLocaleString("en-US") + suffix; return; }
  const t0 = performance.now(), dur = 1400;
  (function step(t) {
    const k = Math.min(1, (t - t0) / dur), v = Math.round(target * (1 - Math.pow(1 - k, 3)));
    el.textContent = v.toLocaleString("en-US") + (k === 1 ? suffix : "");
    if (k < 1) requestAnimationFrame(step);
  })(t0);
}
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((es) => es.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in");
    $$("[data-count]", en.target).forEach(countUp);
    if (en.target.matches("[data-count]")) countUp(en.target);
    io.unobserve(en.target);
  }), { threshold: 0.15 });
  $$(".reveal").forEach((el) => io.observe(el));
  $$(".stats .stat b, .rnd-stats .stat b").forEach((el) => io.observe(el));

  const links = $$("#links a");
  const so = new IntersectionObserver((es) => es.forEach((en) => {
    if (!en.isIntersecting) return;
    links.forEach((a) => a.setAttribute("aria-current", a.getAttribute("href") === "#" + en.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach((s) => so.observe(s));
} else {
  $$(".reveal").forEach((el) => el.classList.add("in"));
}

// ---------- init ----------
renderChips(); renderGrid();
