(() => {
  const data = window.VALHEIM_DATA;
  const STORAGE_KEY = "valheim-tech-tree-progress-v2";
  const LEGACY_KEY = "valheim-tech-tree-progress-v1";
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];

  let progress = loadProgress();
  let historyOpen = false;

  const RESOURCE_GUIDES = {
    "wood": ["Wood", "Pick up branches in the Meadows or punch/chop small beech trees. Once you have a stone axe, normal tree cutting becomes much faster."],
    "stone": ["Stone", "Pick loose stones from the ground early on. Later, use a pickaxe on rocks and boulders when you need larger quantities."],
    "flint": ["Flint", "Walk Meadows coastlines and riverbanks. Flint appears as pale, sharp-looking stones right at the water's edge."],
    "food": ["Food", "Forage raspberries and mushrooms, hunt boar/deer, and keep all three food slots filled. Valheim has no hunger death, but food determines your health and stamina ceiling."],
    "leather scraps": ["Leather scraps", "Hunt boars in the Meadows. Boars can also be tamed and bred later for a renewable supply."],
    "deer hide": ["Deer hide", "Hunt deer. Approach quietly or use a bow; deer flee quickly once alerted."],
    "deer trophies": ["Deer Trophies", "Deer have a chance to drop trophies when killed. Hunt around open Meadows and listen for their calls."],
    "hard antler": ["Hard Antler", "Dropped by Eikthyr. Use it at a Workbench to make the Antler Pickaxe."],
    "surtling cores": ["Surtling Cores", "Explore Black Forest Burial Chambers. Look for red glowing cubes on stands inside. Later they can also come from Surtlings."],
    "copper": ["Copper", "Mine large copper deposits in the Black Forest with a pickaxe. The visible surface is only part of the deposit; copper usually extends underground."],
    "tin": ["Tin", "Mine the small shiny deposits along Black Forest shorelines and river edges."],
    "bronze": ["Bronze", "Smelt Copper and Tin, then combine 2 Copper + 1 Tin at a Forge. Bronze is crafted; it is not mined directly."],
    "finewood": ["Fine Wood", "Use a Bronze Axe or better on birch and oak. Shipwrecks can provide small amounts earlier, but an axe is the dependable route."],
    "core wood": ["Core Wood", "Chop pine trees in the Black Forest."],
    "greydwarf eyes": ["Greydwarf Eyes", "Dropped by Greydwarfs in the Black Forest. Nighttime and spawners make them easy to farm."],
    "carrot seeds": ["Carrot Seeds", "Find the small white seed flowers in the Black Forest. Plant seeds with a Cultivator, then replant harvested carrots as seed-carrots to multiply your stock."],
    "carrot": ["Carrots", "Grow from Carrot Seeds in cultivated soil. Keep a portion of each harvest for seed production."],
    "cultivator": ["Cultivator", "Craft at a Forge from Bronze and Core Wood. Use it to cultivate soil and plant crops."],
    "cauldron": ["Cauldron", "Craft from Tin over a fire. It is the main cooking station for advanced foods and mead bases."],
    "fermenter": ["Fermenter", "Craft after Bronze/Fine Wood progression. Put a prepared mead base inside and wait for fermentation to finish."],
    "ancient seeds": ["Ancient Seeds", "Dropped by Greydwarf Brutes and Shamans, and found by destroying Greydwarf nests in the Black Forest."],
    "swamp key": ["Swamp Key", "Dropped by The Elder. Carry it to unlock the iron gates on Sunken Crypts in the Swamp."],
    "poison resistance": ["Poison Resistance", "Cook a Poison Resistance Mead base at the Cauldron and ferment it before serious Swamp runs. Drink before fighting blobs, oozers or Bonemass."],
    "scrap iron": ["Scrap Iron", "Mine Muddy Scrap Piles inside Sunken Crypts. You can also find Scrap Iron in crypt chests."],
    "iron": ["Iron", "Smelt Scrap Iron in a normal Smelter. Because metal cannot use normal portals, plan a boat or local smelting route."],
    "ancient bark": ["Ancient Bark", "Chop the large ancient trees in the Swamp with a Bronze Axe or better."],
    "turnip seeds": ["Turnip Seeds", "Look for small yellow seed flowers in the Swamp. They are easy to miss, so take the first seeds home safely and multiply them in your farm."],
    "turnip": ["Turnips", "Grow from Turnip Seeds in cultivated soil outside the Swamp. Replant some turnips as seed-turnips to expand the crop."],
    "thistle": ["Thistle", "Collect glowing blue thistle plants at night or in dark areas of the Black Forest and Swamp."],
    "dandelion": ["Dandelion", "Common yellow flowers in the Meadows; Greydwarf Brutes can also drop them."],
    "chain": ["Chain", "Dropped by Wraiths in the Swamp at night and also found in Sunken Crypt chests."],
    "withered bones": ["Withered Bones", "Found mainly inside Sunken Crypts, lying on the ground or in chests. You need ten for Bonemass."],
    "wishbone": ["Wishbone", "Dropped by Bonemass. Equip it like an accessory and follow the pulsing signal to buried deposits and treasure."],
    "frost resistance": ["Frost Resistance", "Before you own frost-protective gear, brew Frost Resistance Mead. You need it to survive Mountain freezing."],
    "silver": ["Silver", "Equip the Wishbone in the Mountains and follow stronger pulses. Mine the buried vein with an Iron Pickaxe."],
    "wolf pelt": ["Wolf Pelts", "Hunt wolves in the Mountains. A shield and controlled terrain help because wolf packs can burst you down quickly."],
    "obsidian": ["Obsidian", "Mine the small black deposits found on Mountain slopes with an Iron Pickaxe."],
    "onion seeds": ["Onion Seeds", "Found in chests inside Mountain ruins and structures. Bring them home and multiply them before relying on onion foods."],
    "dragon eggs": ["Dragon Eggs", "Found at drake nests in the Mountains. Each is very heavy and cannot pass through normal portals, so plan transport to Moder's altar."],
    "dragon tears": ["Dragon Tears", "Dropped by Moder. Two are used to build the Artisan Table."],
    "coins": ["Coins", "Loot Burial Chambers, crypts, chests and valuables such as Amber, Amber Pearls and Rubies. Sell valuables to Haldor."],
    "barley": ["Barley", "Steal it from Fuling villages in the Plains, then grow it only in the Plains biome. Process it in a Windmill."],
    "flax": ["Flax", "Loot it from Fuling villages and grow it only in the Plains. Process it in a Spinning Wheel for Linen Thread."],
    "black metal": ["Black Metal", "Fulings drop Black Metal Scrap. Process the scrap in a Blast Furnace; a normal Smelter will not accept it."],
    "linen thread": ["Linen Thread", "Feed Plains-grown Flax into a Spinning Wheel."],
    "fuling totems": ["Fuling Totems", "Raid Fuling villages and camps. Totems are commonly displayed on stands inside larger settlements."],
    "torn spirit": ["Torn Spirit", "Dropped by Yagluth. It is the key material for building a Wisp Fountain."],
    "wisp": ["Wisp", "Build a Wisp Fountain using Yagluth's drop. Wisps gather at the fountain at night; combine one with Silver for a Wisplight."],
    "yggdrasil wood": ["Yggdrasil Wood", "Cut the Yggdrasil shoots growing through the Mistlands with a Black Metal Axe or better."],
    "black marble": ["Black Marble", "Mine petrified remains and break Dvergr structures with an appropriate pickaxe. Be careful: damaging Dvergr property can make nearby Dvergr hostile."],
    "black core": ["Black Cores", "Found primarily inside Infested Mines in the Mistlands. Search thoroughly; several late-game stations compete for the same cores."],
    "sealbreaker fragments": ["Sealbreaker Fragments", "Search Infested Mines. Collect nine fragments to assemble the Sealbreaker used for The Queen's first encounter."],
    "dvergr extractor": ["Dvergr Extractor", "Found in Dvergr component crates. Taking one usually means breaking Dvergr property, which can anger nearby Dvergr."],
    "sap": ["Sap", "Use a Sap Extractor on a glowing Ancient Root in the Mistlands. Roots recharge over time, so multiple roots improve throughput."],
    "soft tissue": ["Soft Tissue", "Harvest giant skulls/petrified remains in the Mistlands. Dvergr locations may also contain it."],
    "refined eitr": ["Refined Eitr", "Feed Sap and Soft Tissue into an Eitr Refinery. Keep distance from the refinery while it runs; its sparks can damage nearby structures."],
    "majestic carapace": ["Majestic Carapace", "Dropped by The Queen. It unlocks the Artisan Press, the bridge into Ashlands ship technology."],
    "ceramic plates": ["Ceramic Plates", "Produce them with the Artisan Press after defeating The Queen. They are a required part of the Drakkar progression."],
    "drakkar": ["Drakkar", "Build only after obtaining Ceramic Plates from Queen-gated Artisan technology. Stock it like an expedition ship before sailing toward Ashlands."],
    "grausten": ["Grausten", "Common Ashlands stone material. Mine/break Ashlands rock formations and structures as you establish a beachhead."],
    "molten cores": ["Molten Cores", "Found in Ashlands progression locations, especially fortress-related content. Save enough for Stone Portal infrastructure."],
    "flametal": ["Flametal", "Acquire in the Ashlands from Flametal deposits and biome progression loot. Treat mining trips as combat encounters and keep an escape route."],
    "ashwood": ["Ashwood", "Chop Ashlands trees with late-game axes. It is used heavily in Ashlands building and station upgrades."],
    "charred bone": ["Charred Bone", "Dropped by Charred enemies throughout the Ashlands."],
    "bell fragments": ["Bell Fragments", "Raid Charred Fortresses. Collect nine total, then craft three completed Bells at the Black Forge."],
    "bells": ["Bells", "Craft from Bell Fragments at the Black Forge. Three completed Bells are needed for Fader's summon."],
    "fader relic": ["Fader Relic", "Dropped by Fader. Keep it: this is the required component for the Eternal Pyre and the bridge to the next progression chain."],
    "eternal pyre": ["Eternal Pyre", "Build at a Stonecutter from 10 Stone and Fader's Relic. Once placed, it attracts Embers at your base."],
    "embers": ["Embers", "Collected from the Eternal Pyre. Bring a supply north because this prerequisite is generated outside the Deep North."],
    "seal pelts": ["Seal Pelts", "Hunt adult seals in the Deep North. Two pelts plus one Ember make ten Ember Charges."],
    "ember charges": ["Ember Charges", "Craft ten at a Workbench from 2 Seal Pelts + 1 Ember. Use them to break open petrified remains."],
    "petrified tissue": ["Petrified Tissue", "Open a defeated Gammeltroll's petrified body with an Ember Charge, or find petrified bone piles in the Deep North."],
    "bloodgold": ["Bloodgold", "Smelt Petrified Tissue in a Blast Furnace. Bloodgold is the base metal for Deep North casts, keys and final gear."],
    "frost cores": ["Frost Cores", "Run Winding Tunnels in the Deep North. You need a large supply because both the Frigid Kiln and Frost Foundry consume ten to build."],
    "ice": ["Ice", "Harvest black ice shards and frozen creatures/resources around the Deep North. Five Ice becomes one Liquid Frost in the Frigid Kiln."],
    "liquid frost": ["Liquid Frost", "Process Ice in the Frigid Kiln. The Frost Foundry uses it to harden Bloodgold casts into finished items."],
    "mould": ["Moulds", "Search Winding Tunnels and kill their key enemies. Moulds are consumed when turning Bloodgold into casts at the Black Forge."],
    "intricate keys": ["Intricate Keys", "Make a key cast at a level-4 Black Forge from 5 Bloodgold + an Intricate Key Mould, then harden the cast in a Frost Foundry. Repeat until you have three."],
    "malicious blood": ["Malicious Blood", "Earn one from each completed Fimbulvinter/Jotun invasion triggered after clearing a Mörkhalla. You need three total."],
    "timberwood": ["Timberwood", "Harvest the Deep North's large timber-producing vegetation/trees with suitable late-game tools."],
    "moose hide": ["Moose Hide", "Hunt moose in the Deep North. Their hides are used in late station and equipment recipes."],
    "nornathread": ["Nornathread", "Obtain through Deep North progression and use it for the final Galdr Table extension and high-tier crafting."],
    "crown jewel": ["Crown Jewel", "Dropped after defeating Kall Fimbulbringer. Combine it with Bloodgold at the required Black Forge level for the Crown."],
    "sacrificial blood": ["Sacrificial Blood", "Obtained from the final Kall progression. Take it to the sacrificial stones to continue the 1.0 ending sequence."],
    "burial chambers": ["Burial Chambers", "Black Forest dungeons guarded by skeletons. Bring a shield/club and mark each one on the map until you have enough Surtling Cores."],
    "sunken crypt": ["Sunken Crypts", "Green-lit stone crypts in the Swamp. They require the Swamp Key from The Elder and contain Muddy Scrap Piles rich in Scrap Iron."],
    "frost caves": ["Frost Caves", "Large cave entrances in the Mountains. They contain cultists, Fenring-related materials and optional Fenris progression."],
    "fuling villages": ["Fuling Villages", "Large Plains settlements. Scout from range, thin Fulings carefully, then loot Barley, Flax, Totems and valuables."],
    "infested mines": ["Infested Mines", "Mistlands dungeons, often beneath distinctive ruined entrances. They contain Seekers, Black Cores and Sealbreaker Fragments."],
    "charred fortresses": ["Charred Fortresses", "Ashlands strongholds that must be breached. They contain key boss-progression loot including Bell Fragments."],
    "winding tunnels": ["Winding Tunnels", "Deep North dungeons and the dependable source of Frost Cores and important Moulds. Mark your route inside so you can leave efficiently."],
    "mörkhalla": ["Mörkhalla", "Use an Intricate Key for each progression site. Breaking the Malicious Ice at the end triggers the invasion that awards Malicious Blood."],
    "aesir passage": ["Aesir Passage", "The final Deep North progression location. Bring all three Malicious Blood to the Strange Bowl when you are ready for Kall."]
  };

  function loadProgress() {
    try {
      const current = localStorage.getItem(STORAGE_KEY);
      if (current) return JSON.parse(current);
      const legacy = JSON.parse(localStorage.getItem(LEGACY_KEY) || "{}");
      if (legacy && Object.keys(legacy).length) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(legacy));
        return legacy;
      }
    } catch {}
    return {};
  }

  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  const sequence = () => data.stages.flatMap((stage, stageIndex) =>
    stage.milestones.map((m, localIndex) => ({
      ...m,
      stageId: stage.id,
      stageName: stage.name,
      stageIndex,
      localIndex,
      stage
    }))
  );

  function resolved(m) {
    return progress[m.id] === true || progress[m.id] === "skipped";
  }

  function currentMilestone() {
    return sequence().find(m => !resolved(m)) || null;
  }

  function currentIndex() {
    const current = currentMilestone();
    if (!current) return sequence().length;
    return sequence().findIndex(m => m.id === current.id);
  }

  function coreStats() {
    const core = sequence().filter(m => m.type === "core");
    const done = core.filter(m => progress[m.id] === true).length;
    return { done, total: core.length, pct: Math.round((done / core.length) * 100) };
  }

  function typeLabel(type) {
    return type === "core" ? "Core objective" : type === "crafting" ? "Crafting side step" : "Optional side step";
  }

  function renderBiomeRail() {
    const current = currentMilestone();
    const activeStage = current ? current.stageIndex : data.stages.length - 1;
    $("#biomeRail").innerHTML = data.stages.map((stage, i) => {
      const stageItems = sequence().filter(m => m.stageId === stage.id);
      const complete = stageItems.every(resolved);
      const unlocked = i <= activeStage || !current;
      const active = current && i === activeStage;
      const bossMilestoneIndex = stageItems.findIndex(m =>
        m.title.toLowerCase().includes(stage.boss.toLowerCase())
      );
      const currentLocal = current && current.stageId === stage.id ? current.localIndex : Infinity;
      const bossKnown = complete || (active && bossMilestoneIndex >= 0 && currentLocal >= bossMilestoneIndex);
      const name = unlocked ? stage.name : "Uncharted";
      const boss = unlocked ? (bossKnown ? stage.boss : "Threat unknown") : "Hidden by fog";
      return `<div class="biome-node ${complete ? "done" : ""} ${active ? "current" : ""} ${!unlocked ? "locked" : ""}">
        <div class="biome-dot">${complete ? "✓" : unlocked ? stage.index : "?"}</div>
        <div class="biome-name">${name}</div>
        <div class="biome-boss">${boss}</div>
      </div>`;
    }).join("");
  }

  function prepareItems(need) {
    if (!need || /^nothing$/i.test(need.trim())) return ["Nothing special — start exploring and gathering."];
    return need
      .split(/\s*[+;]\s*/)
      .map(s => s.trim())
      .filter(Boolean);
  }

  function matchedGuides(m) {
    const hay = [m.need, m.summary, m.do].join(" ").toLowerCase();
    const candidates = Object.entries(RESOURCE_GUIDES)
      .filter(([key]) => hay.includes(key))
      .sort((a,b) => b[0].length - a[0].length);

    const chosen = [];
    const genericBlocked = {
      "wood":["finewood","core wood","yggdrasil wood","ashwood","timberwood"],
      "stone":["black marble","grausten"],
      "ice":["malicious ice"]
    };

    for (const [key, value] of candidates) {
      const blockers = genericBlocked[key] || [];
      if (blockers.some(b => hay.includes(b))) continue;
      if (chosen.some(x => x[1][0] === value[0])) continue;
      chosen.push([key, value]);
      if (chosen.length >= 6) break;
    }
    return chosen.map(([,value]) => value);
  }

  function questHtml(m, globalIndex) {
    const guides = matchedGuides(m);
    const items = prepareItems(m.need);
    const side = m.type !== "core";

    return `<article class="quest-card compact-quest" id="currentQuest" style="--biomeColor:${m.stage.color};--biomeTint:${m.stage.tint}">
      <header class="compact-quest-head">
        <div class="compact-meta">
          <span>STEP ${globalIndex + 1}</span>
          <span class="compact-biome">${m.stageName}</span>
          <span>${typeLabel(m.type)}</span>
        </div>
        <h2>${m.title}</h2>
        <div class="essential-action">
          <span>DO</span>
          <strong>${m.do}</strong>
        </div>
      </header>

      <div class="compact-quest-body">
        <section class="essential-needs">
          <div class="section-label">NEEDED</div>
          <div class="need-chips">
            ${items.map(item => `<span><i></i>${escapeHtml(item)}</span>`).join("")}
          </div>
        </section>

        <div class="quest-actions compact-actions">
          <label class="complete-action">
            <input class="check current-check" type="checkbox" data-id="${m.id}">
            <span><b aria-hidden="true"></b><strong>Mark done</strong><small>Reveal next step</small></span>
          </label>
          ${side ? `<button class="skip-action" data-skip="${m.id}">Skip <span>→</span><small>Optional for progression</small></button>` : ""}
        </div>

        <section class="visible-details">
          <div class="detail-intro">
            <div class="section-label">WHY THIS STEP</div>
            <p>${m.summary}</p>
            <div class="unlock-line"><span>UNLOCKS</span><strong>${m.unlock}</strong></div>
          </div>

          <div class="detail-block visible-checklist">
            <div class="section-label">QUICK CHECKLIST</div>
            <ol class="action-steps">
              <li><span>1</span><div><strong>Prepare</strong><p>Gather the requirements listed above.</p></div></li>
              <li><span>2</span><div><strong>Execute</strong><p>${m.do}.</p></div></li>
              <li><span>3</span><div><strong>Confirm</strong><p>Mark it done when the objective is finished in your world.</p></div></li>
            </ol>
          </div>
        </section>

        <details class="where-to-get">
          <summary>
            <span>
              <strong>Where to get it</strong>
              <small>Locations, drops and crafting routes</small>
            </span>
            <b>⌄</b>
          </summary>
          <div class="where-to-get-body">
            ${guides.length ? `
              <div class="acquisition-grid">
                ${guides.map(([name,tip]) => `<div class="acquisition"><div class="acquisition-name">${name}</div><p>${tip}</p></div>`).join("")}
              </div>`
            : `<div class="acquisition fallback"><div class="acquisition-name">Follow the previous unlock</div><p>${m.summary} Your immediate action is: ${m.do}.</p></div>`}
          </div>
        </details>
      </div>
    </article>`;
  }

  function renderRoadmap(scroll=false) {
    const current = currentMilestone();
    const index = currentIndex();

    if (!current) {
      $("#roadmap").innerHTML = `<article class="quest-card victory">
        <div class="quest-body victory-body">
          <div class="victory-rune">ᛉ</div>
          <div class="eyebrow">SAGA COMPLETE</div>
          <h2>You have reached the end of the guided path.</h2>
          <p>Every progression step in this 1.0 guide has been resolved. The rest is building absurd fortresses and pretending the roof supports are structurally necessary.</p>
        </div>
      </article>`;
    } else {
      $("#roadmap").innerHTML = questHtml(current, index);
      $(".current-check")?.addEventListener("change", e => {
        if (!e.target.checked) return;
        const id = e.target.dataset.id;
        progress[id] = true;
        saveProgress();
        setTimeout(() => {
          renderAll(true);
        }, 320);
      });
      $(".skip-action")?.addEventListener("click", e => {
        const button = e.target.closest("[data-skip]");
        progress[button.dataset.skip] = "skipped";
        saveProgress();
        renderAll(true);
      });
    }

    if (scroll) {
      setTimeout(() => $("#currentQuest")?.scrollIntoView({behavior:"smooth", block:"center"}), 50);
    }
  }

  function updateDashboard() {
    const stats = coreStats();
    const current = currentMilestone();
    $("#progressPercent").textContent = stats.pct + "%";
    $("#progressBar").style.width = stats.pct + "%";
    $("#coreProgress").textContent = stats.done
      ? `${stats.done} core milestone${stats.done === 1 ? "" : "s"} completed`
      : "No core milestones completed yet";
    $("#stepNumber").textContent = current ? `Step ${currentIndex()+1}` : "Saga complete";

    if (current) {
      if ($("#nextMilestoneTitle")) $("#nextMilestoneTitle").textContent = current.title;
      if ($("#nextMilestoneMeta")) $("#nextMilestoneMeta").textContent = `${current.stageName} • ${typeLabel(current.type)}`;
      if ($("#jumpNext")) $("#jumpNext").disabled = false;
    } else {
      if ($("#nextMilestoneTitle")) $("#nextMilestoneTitle").textContent = "The guided path is complete";
      if ($("#nextMilestoneMeta")) $("#nextMilestoneMeta").textContent = "Skål.";
      if ($("#jumpNext")) $("#jumpNext").disabled = true;
    }
  }

  function renderHistory() {
    const history = $("#history");
    const done = sequence().filter(resolved);
    if (!historyOpen) {
      history.hidden = true;
      return;
    }
    history.hidden = false;
    history.innerHTML = `<div class="history-head"><div><div class="eyebrow">TRAIL BEHIND YOU</div><h3>${done.length} resolved step${done.length === 1 ? "" : "s"}</h3></div></div>
      <div class="history-list">
        ${done.length ? done.map((m,i) => `<div class="history-item">
          <span class="history-mark ${progress[m.id] === "skipped" ? "skip" : ""}">${progress[m.id] === "skipped" ? "↷" : "✓"}</span>
          <div><strong>${m.title}</strong><small>${m.stageName} • ${progress[m.id] === "skipped" ? "Skipped" : "Completed"}</small></div>
          <button data-undo="${m.id}" class="undo">Undo</button>
        </div>`).join("") : "<p class='muted'>Nothing completed yet. Your saga is suspiciously pristine.</p>"}
      </div>`;

    $$("[data-undo]", history).forEach(btn => btn.addEventListener("click", () => {
      delete progress[btn.dataset.undo];
      saveProgress();
      renderAll(true);
    }));
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
    const currentInput = $("#skillCurrent");
    const targetInput = $("#skillTarget");
    if (!currentInput || !targetInput) return;
    const current = Math.max(0, Math.min(99, Number(currentInput.value) || 0));
    const target = Math.max(1, Math.min(100, Number(targetInput.value) || 1));
    let xp = 0;
    if (target > current) {
      for (let level = current; level < target; level++) xp += xpForLevel(level);
    }
    $("#skillXp").textContent = Math.ceil(xp).toLocaleString() + " XP";
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]));
  }

  function renderAll(scroll=false) {
    renderBiomeRail();
    renderRoadmap(scroll);
    updateDashboard();
    renderHistory();
  }

  $("#jumpNext")?.addEventListener("click", () => {
    $("#currentQuest")?.scrollIntoView({behavior:"smooth", block:"center"});
  });

  $("#toggleHistory").addEventListener("click", () => {
    historyOpen = !historyOpen;
    $("#toggleHistory").textContent = historyOpen ? "Hide completed steps" : "Show completed steps";
    renderHistory();
    if (historyOpen) $("#history").scrollIntoView({behavior:"smooth", block:"start"});
  });

  $("#resetProgress").addEventListener("click", () => {
    if (!confirm("Reset every completed and skipped Valheim step on this device?")) return;
    progress = {};
    saveProgress();
    renderAll(true);
  });

  ["skillCurrent","skillTarget"].forEach(id => $("#" + id)?.addEventListener("input", updateSkillCalc));

  renderStations();
  renderSkills();
  renderSources();
  renderAll();
  updateSkillCalc();
})();