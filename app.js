(() => {
  const data = window.VALHEIM_DATA;
  const STORAGE_KEY = "valheim-tech-tree-progress-v1";
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];
  let filter = "all";
  let search = "";
  let progress = loadProgress();

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); }
    catch { return {}; }
  }

  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  const allMilestones = () => data.stages.flatMap(stage =>
    stage.milestones.map(m => ({...m, stageId:stage.id, stageName:stage.name}))
  );

  function isVisible(m) {
    const typeMatch = filter === "all" || m.type === filter;
    const hay = [m.title,m.summary,m.need,m.do,m.unlock].join(" ").toLowerCase();
    return typeMatch && (!search || hay.includes(search));
  }

  function stageState(stage) {
    const core = stage.milestones.filter(m => m.type === "core");
    const done = core.filter(m => progress[m.id]).length;
    return {done, total:core.length, complete:done === core.length};
  }

  function firstIncompleteCore() {
    return allMilestones().find(m => m.type === "core" && !progress[m.id]);
  }

  function renderBiomeRail() {
    const rail = $("#biomeRail");
    const next = firstIncompleteCore();
    rail.innerHTML = data.stages.map(stage => {
      const state = stageState(stage);
      const current = next && next.stageId === stage.id;
      return `<div class="biome-node ${state.complete ? "done" : ""} ${current ? "current" : ""}" data-stage="${stage.id}" title="Jump to ${stage.name}">
        <div class="biome-dot">${state.complete ? "✓" : stage.index}</div>
        <div class="biome-name">${stage.name}</div>
        <div class="biome-boss">${stage.boss}</div>
      </div>`;
    }).join("");
    $$(".biome-node", rail).forEach(el => el.addEventListener("click", () => {
      document.getElementById("stage-" + el.dataset.stage)?.scrollIntoView({behavior:"smooth", block:"start"});
    }));
  }

  function renderRoadmap() {
    const target = $("#roadmap");
    target.innerHTML = data.stages.map(stage => `
      <article class="biome-card" id="stage-${stage.id}" style="--biomeColor:${stage.color};--biomeTint:${stage.tint}">
        <header class="biome-header">
          <div class="biome-index">${stage.index}</div>
          <div>
            <div class="eyebrow">BIOME</div>
            <h2>${stage.name}</h2>
            <p>${stage.blurb}</p>
          </div>
          <div class="boss-pill"><span>BOSS GATE</span><strong>${stage.boss}</strong><span>${stage.bossReq}</span></div>
        </header>
        <div class="milestones">
          ${stage.milestones.map(m => milestoneHtml(m)).join("")}
        </div>
      </article>
    `).join("");

    $$(".check", target).forEach(box => box.addEventListener("change", e => {
      progress[e.target.dataset.id] = e.target.checked;
      if (!e.target.checked) delete progress[e.target.dataset.id];
      saveProgress();
      e.target.closest(".milestone").classList.toggle("complete", e.target.checked);
      updateDashboard();
      renderBiomeRail();
    }));
    applyFilters();
  }

  function milestoneHtml(m) {
    const checked = !!progress[m.id];
    return `<div class="milestone ${checked ? "complete" : ""}" data-id="${m.id}" data-type="${m.type}">
      <input class="check" type="checkbox" data-id="${m.id}" aria-label="Complete: ${escapeHtml(m.title)}" ${checked ? "checked" : ""}>
      <div>
        <div class="mile-title">${m.title}</div>
        <div class="mile-sub">${m.summary}</div>
        <div class="details">
          <div class="detail"><b>Need</b>${m.need}</div>
          <div class="detail"><b>Do</b>${m.do}</div>
          <div class="detail"><b>Unlocks / why</b>${m.unlock}</div>
        </div>
      </div>
      <span class="type-tag ${m.type}">${m.type === "core" ? "Core" : m.type === "optional" ? "Side" : "Crafting"}</span>
    </div>`;
  }

  function applyFilters() {
    $$(".milestone").forEach(el => {
      const id = el.dataset.id;
      const m = allMilestones().find(x => x.id === id);
      el.classList.toggle("filtered", !isVisible(m));
    });
    $$(".biome-card").forEach(card => {
      const any = $$(".milestone:not(.filtered)", card).length > 0;
      card.style.display = any ? "" : "none";
    });
  }

  function updateDashboard() {
    const all = allMilestones();
    const core = all.filter(m => m.type === "core");
    const doneAll = all.filter(m => progress[m.id]).length;
    const doneCore = core.filter(m => progress[m.id]).length;
    const pct = Math.round((doneCore / core.length) * 100);
    $("#progressPercent").textContent = pct + "%";
    $("#progressBar").style.width = pct + "%";
    $("#coreProgress").textContent = `${doneCore} / ${core.length} core milestones`;
    $("#allProgress").textContent = `${doneAll} / ${all.length} total`;
    const next = firstIncompleteCore();
    if (next) {
      $("#nextMilestoneTitle").textContent = next.title;
      $("#nextMilestoneMeta").textContent = next.stageName;
      $("#jumpNext").disabled = false;
    } else {
      $("#nextMilestoneTitle").textContent = "The saga is complete";
      $("#nextMilestoneMeta").textContent = "All core milestones checked";
      $("#jumpNext").disabled = true;
    }
  }

  function renderStations() {
    $("#stations").innerHTML = data.stations.map(st => `
      <article class="station">
        <div class="eyebrow">CRAFTING STATION</div>
        <h3>${st.name}</h3>
        <div class="max">${st.max}</div>
        <div class="mile-sub">${st.base}</div>
        <div class="upgrade-list">
          ${st.upgrades.map((u,i) => `<div class="upgrade"><strong>${String(i+1).padStart(2,"0")}</strong><div><strong>${u[0]}</strong><span>${u[1]}</span></div></div>`).join("")}
        </div>
      </article>
    `).join("");
  }

  function renderSkills() {
    $("#skills").innerHTML = data.skills.map(s => `
      <div class="skill"><strong>${s[0]}</strong><span>${s[1]}</span></div>
    `).join("");
  }

  function renderSources() {
    $("#sources").innerHTML = data.sources.map(s => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer"><strong>${s.title}</strong><small>${s.note}</small></a>
    `).join("");
  }

  function xpForLevel(level) {
    return 0.5 * Math.pow(level + 1, 1.5) + 0.5;
  }

  function updateSkillCalc() {
    let current = Math.max(0, Math.min(99, Number($("#skillCurrent").value) || 0));
    let target = Math.max(1, Math.min(100, Number($("#skillTarget").value) || 1));
    if (target <= current) {
      $("#skillXp").textContent = "0 XP";
      return;
    }
    let xp = 0;
    for (let level = current; level < target; level++) xp += xpForLevel(level);
    $("#skillXp").textContent = Math.ceil(xp).toLocaleString() + " XP";
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]));
  }

  $("#filters").addEventListener("click", e => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    filter = btn.dataset.filter;
    $$(".chip").forEach(x => x.classList.toggle("active", x === btn));
    applyFilters();
  });

  $("#searchInput").addEventListener("input", e => {
    search = e.target.value.trim().toLowerCase();
    applyFilters();
  });

  $("#resetProgress").addEventListener("click", () => {
    if (!confirm("Reset every checked Valheim milestone on this device?")) return;
    progress = {};
    saveProgress();
    renderRoadmap();
    renderBiomeRail();
    updateDashboard();
  });

  $("#jumpNext").addEventListener("click", () => {
    const next = firstIncompleteCore();
    if (!next) return;
    const el = document.querySelector(`.milestone[data-id="${next.id}"]`);
    el?.scrollIntoView({behavior:"smooth", block:"center"});
    el?.animate([{background:"rgba(214,180,107,.16)"},{background:"transparent"}],{duration:1200});
  });

  ["skillCurrent","skillTarget"].forEach(id => $("#" + id).addEventListener("input", updateSkillCalc));

  renderBiomeRail();
  renderRoadmap();
  renderStations();
  renderSkills();
  renderSources();
  updateDashboard();
  updateSkillCalc();
})();