// Renders the bilingual catalogue from data/catalogue.json. Language comes from <html lang>.
(function () {
  const lang = document.documentElement.lang.startsWith("zh") ? "zh" : "en";
  const L = {
    en: { all: "All", EU: "Europe", CN: "China", "EU-CN": "EU–China bridges",
          "pa-reuse": "Public-sector reuse", "implicit-collaboration": "Existing collaboration",
          funding: "Funding", governance: "Governance",
          verified: "✓ verified source", "to-verify": "◔ being verified", since: "Catalogue v" },
    zh: { all: "全部", EU: "欧洲", CN: "中国", "EU-CN": "中欧桥梁",
          "pa-reuse": "公共部门复用", "implicit-collaboration": "既有合作",
          funding: "资金", governance: "治理",
          verified: "✓ 来源已核实", "to-verify": "◔ 核实中", since: "目录版本 v" }
  }[lang];
  const root = document.getElementById("catalogue");
  const filt = document.getElementById("catalogue-filters");
  const base = root.dataset.src;
  let data = [], side = "all", cat = "all";

  function esc(s) { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; }

  function render() {
    const rows = data.filter(e => (side === "all" || e.side === side) && (cat === "all" || e.category === cat));
    root.innerHTML = rows.map(e => `
      <article class="card">
        <div><span class="tag t-${e.side}">${esc(L[e.side])}</span><span class="badge">${esc(L[e.category])}</span></div>
        <h3>${esc(e.title[lang])}</h3>
        <p>${esc(e.summary[lang])}</p>
        <p class="reuse">${esc(e.reuse[lang])}</p>
        <div class="meta"><span class="st-${e.status}">${esc(L[e.status])}</span> · ${esc(e.id)}</div>
        <div class="src">${e.sources.map((u, i) => `<a href="${esc(u)}" rel="noopener">[${i + 1}]</a>`).join("")}</div>
      </article>`).join("");
  }

  function btn(group, value, label, current) {
    return `<button data-g="${group}" data-v="${value}" aria-pressed="${value === current}">${esc(label)}</button>`;
  }
  function renderFilters() {
    filt.innerHTML =
      ["all", "EU", "CN", "EU-CN"].map(v => btn("side", v, L[v], side)).join("") +
      " · " +
      ["all", "pa-reuse", "implicit-collaboration", "funding", "governance"].map(v => btn("cat", v, L[v], cat)).join("");
  }
  filt.addEventListener("click", ev => {
    const b = ev.target.closest("button"); if (!b) return;
    if (b.dataset.g === "side") side = b.dataset.v; else cat = b.dataset.v;
    renderFilters(); render();
  });

  fetch(base).then(r => r.json()).then(j => {
    data = j.entries;
    const v = document.getElementById("catalogue-version");
    if (v) v.textContent = `${L.since}${j.version} · ${j.updated} · ${j.entries.length}`;
    renderFilters(); render();
  }).catch(() => { root.textContent = "—"; });
})();
