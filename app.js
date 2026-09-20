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

  const REQUIREMENT_OVERRIDES = {
    "m-forage":[["20","Wood","starter target"],["10","Stone","starter target"],["3","Different foods","keep active"]],
    "m-workbench":[["1","Hammer"],["10","Wood"]],
    "m-rested":[["1","Shelter"],["1","Campfire"],["1","Bed"]],
    "m-flint":[["VAR","Flint"],["VAR","Leather Scraps"],["VAR","Deer Hide"]],
    "m-bow":[["10","Wood"],["8","Leather Scraps"]],
    "m-antler":[["1","Hard Antler"],["10","Wood"]],
    "bf-cores":[["10","Surtling Cores","early target"]],
    "bf-smelt":[["10","Surtling Cores","5 per structure"],["40","Stone","20 per structure"]],
    "bf-bronze":[["2","Copper","per Bronze"],["1","Tin","per Bronze"]],
    "bf-finewood":[["1","Bronze Axe"]],
    "bf-portal":[["20","Finewood"],["10","Greydwarf Eyes"],["2","Surtling Cores"]],
    "bf-karve":[["30","Finewood"],["10","Deer Hide"],["20","Resin"],["80","Bronze Nails"]],
    "bf-farm":[["5","Core Wood"],["5","Bronze"]],
    "bf-cauldron":[["10","Tin","Cauldron"],["30","Finewood","Fermenter"],["5","Bronze","Fermenter"],["10","Resin","Fermenter"]],
    "bf-key":[["1","Swamp Key"]],
    "s-prep":[["1+","Poison Resistance Mead"],["3","Good foods","keep active"],["1","Portal kit"]],
    "s-crypt":[["1","Swamp Key"],["1","Pickaxe"]],
    "s-iron":[["1+","Scrap Iron"],["1","Smelter"]],
    "s-ironpick":[["20","Iron","Iron Pickaxe"],["3","Core Wood","Iron Pickaxe"]],
    "s-longship":[["40","Ancient Bark"],["40","Finewood"],["10","Deer Hide"],["100","Iron Nails"]],
    "s-turnips":[["1+","Turnip Seeds"],["1","Cultivator"]],
    "s-forge":[["VAR","Iron"],["VAR","Wood"],["VAR","Chain"],["VAR","Deer Hide"]],
    "s-bones":[["10","Withered Bones"]],
    "s-wishbone":[["1","Wishbone"]],
    "mt-frost":[["1+","Frost Resistance Mead","until gear replaces it"]],
    "mt-silver":[["1","Wishbone"],["1","Iron Pickaxe"]],
    "mt-wolfgear":[["VAR","Silver"],["VAR","Wolf Pelts/Fangs"],["VAR","Loadout materials"]],
    "mt-onions":[["1+","Onion Seeds"],["1","Cultivator"]],
    "mt-caves":[["1+","Frost Caves","explore"]],
    "p-outpost":[["1","Portal kit"],["3","Strong foods","keep active"],["1","Combat loadout"]],
    "p-crops":[["1+","Barley"],["1+","Flax"]],
    "p-gear":[["VAR","Iron"],["VAR","Linen Thread"],["VAR","Black Metal"]],
    "p-firewine":[["1+","Fire Resistance Barley Wine"],["1","Fermenter"]],
    "p-totems":[["5","Fuling Totems"]],
    "p-wisps":[["1","Torn Spirit"],["10","Stone"]],
    "mi-wisplight":[["1","Wisp"],["1","Silver"]],
    "mi-materials":[["VAR","Yggdrasil Wood"],["VAR","Black Marble"]],
    "mi-mines":[["5","Black Cores","minimum station target"],["9","Sealbreaker Fragments"]],
    "mi-extractor":[["1","Dvergr Extractor"],["10","Yggdrasil Wood"],["5","Black Metal"]],
    "mi-build":[["VAR","Mistlands materials","depends on build"]],
    "mi-sealbreaker":[["9","Sealbreaker Fragments"]],
    "mi-queen":[["1","Sealbreaker"]],
    "mi-drakkar":[["VAR","Ceramic Plates"],["VAR","Late-game ship materials"]],
    "a-sail":[["1","Drakkar"],["3","Strong foods"],["1+","Fire Resistance"],["1","Portal kit"]],
    "a-beach":[["VAR","Building supplies"],["1","Portal"]],
    "a-flametal":[["VAR","Flametal"],["VAR","Ashlands materials"]],
    "a-fortress":[["1","Siege-capable kit"]],
    "a-bells":[["9","Bell Fragments"],["3","Bells","result"]],
    "a-upgrades":[["VAR","Flametal"],["VAR","Ashwood"],["VAR","Biome materials"]],
    "a-fader":[["3","Bells"]],
    "a-potential":[["1","Forge of Potential location"],["VAR","Idols"]],
    "dn-embers":[["VAR","Embers","stock a supply"]],
    "dn-land":[["1","Cold-ready loadout"],["VAR","Expedition supplies"]],
    "dn-seals":[["2","Seal Pelts"],["1","Ember"],["10","Ember Charges","result"]],
    "dn-tissue":[["1+","Ember Charges"],["VAR","Petrified Tissue","yield"]],
    "dn-bloodgold":[["VAR","Petrified Tissue"],["1","Blast Furnace"]],
    "dn-ice":[["10","Frost Cores"],["5","Ice","per Liquid Frost"]],
    "dn-tunnels":[["20+","Frost Cores","10 kiln + 10 foundry"],["VAR","Moulds"]],
    "dn-casting":[["10","Frost Cores"],["VAR","Bloodgold"],["VAR","Moulds"],["VAR","Liquid Frost"]],
    "dn-key":[["15","Bloodgold"],["3","Intricate Key Moulds"],["3","Liquid Frost","one per key"],["3","Intricate Keys","result"]],
    "dn-morkhalla":[["3","Intricate Keys"]],
    "dn-blood":[["3","Mörkhalla invasions"],["3","Malicious Blood","result"]],
    "dn-coal":[["VAR","Memorial Coal"],["VAR","Relevant essences"]],
    "dn-smoker":[["VAR","Bloodgold"],["VAR","Timberwood"],["VAR","Moose Hide"],["VAR","Nornathread"]],
    "dn-kall":[["3","Malicious Blood"]],
    "dn-crown":[["1","Crown Jewel"],["5","Bloodgold"],["1","Sacrificial Blood","endgame handoff"]]
  };

  const ONE_EACH_HINTS = new Set([
    "Hammer","Workbench","Smelter","Forge","Bronze Axe","Cultivator","Fermenter",
    "Swamp Key","pickaxe","Wishbone","Iron Pickaxe","Artisan Table","Sealbreaker",
    "Drakkar","Eternal Pyre","Blast Furnace"
  ]);

  function parseRequirementPart(part) {
    const clean = part
      .replace(/\s+at\s+.+$/i, "")
      .replace(/\s+for\s+.+$/i, "")
      .trim();

    const numeric = clean.match(/^([\d,]+)\s+(.+)$/);
    if (numeric) {
      return {qty:numeric[1].replace(/,/g,""), name:numeric[2].replace(/\s+each$/i,"").trim(), note:/\beach$/i.test(clean) ? "each" : ""};
    }

    const one = [...ONE_EACH_HINTS].find(x => clean.toLowerCase() === x.toLowerCase());
    if (one) return {qty:"1", name:clean, note:""};

    return {qty:"VAR", name:clean, note:""};
  }

  function prepareItems(m) {
    if (REQUIREMENT_OVERRIDES[m.id]) {
      return REQUIREMENT_OVERRIDES[m.id].map(([qty,name,note=""]) => ({qty,name,note}));
    }

    const need = m.need || "";
    if (/^nothing$/i.test(need.trim())) return [{qty:"VAR",name:"Supplies",note:"no fixed recipe"}];

    return need
      .split(/\s*[+;,]\s*/)
      .map(s => s.trim())
      .filter(Boolean)
      .map(parseRequirementPart);
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

  function initMarkDoneFire() {
    const surface = document.querySelector(".complete-action > span");
    const input = document.querySelector(".current-check");
    if (!surface || !input || input.checked) return;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      surface.classList.add("fire-static");
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.className = "markdone-fire";
    canvas.setAttribute("aria-hidden", "true");
    surface.prepend(canvas);

    const gl = canvas.getContext("webgl", {
      alpha:true,
      antialias:false,
      depth:false,
      stencil:false,
      premultipliedAlpha:true,
      powerPreference:"low-power"
    });

    if (!gl) {
      canvas.remove();
      surface.classList.add("fire-static");
      return;
    }

    const vertexSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentSource = `
      precision mediump float;
      varying vec2 v_uv;
      uniform float u_time;
      uniform vec2 u_resolution;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      float fbm(vec2 p) {
        float value = 0.0;
        float amp = 0.5;
        for (int i = 0; i < 5; i++) {
          value += amp * noise(p);
          p = p * 2.03 + vec2(17.1, 9.2);
          amp *= 0.5;
        }
        return value;
      }

      void main() {
        vec2 uv = v_uv;
        float t = u_time;

        // Organic forge turbulence: no fixed columns or repeating zig-zag shapes.
        float warpA = fbm(vec2(uv.x * 3.2, uv.y * 2.2 - t * 0.38));
        float warpB = fbm(vec2(uv.x * 6.7 + 9.3, uv.y * 3.8 - t * 0.72));

        vec2 flowUv = vec2(
          uv.x * 7.8 + (warpA - 0.5) * 1.35,
          uv.y * 5.6 - t * 0.95
        );

        float coarse = fbm(flowUv);
        float fine = fbm(vec2(
          uv.x * 15.5 + (warpB - 0.5) * 1.15,
          uv.y * 10.0 - t * 1.45
        ));

        // Open the mask enough that fire is always visible, while noise still
        // determines where taller licks form.
        float pockets = smoothstep(0.34, 0.68, coarse * 0.72 + fine * 0.28);

        float baseHeight =
          (1.0 - uv.y) * 1.03 +
          coarse * 0.46 +
          fine * 0.14;

        float licks = smoothstep(0.93, 1.25, baseHeight) * pockets;
        licks *= 1.0 - smoothstep(0.48, 0.88, uv.y);

        // Guaranteed low forge bed. This prevents the effect from disappearing
        // when the turbulent flame mask happens to be sparse.
        float emberNoise = 0.68 + 0.32 * noise(vec2(uv.x * 18.0 - t * 0.28, t * 1.7));
        float fireBed = (1.0 - smoothstep(0.02, 0.22, uv.y)) * emberNoise;

        float flame = max(licks, fireBed * 0.82);
        flame *= smoothstep(-0.03, 0.055, uv.y);

        float core =
          max(
            smoothstep(1.05, 1.33, baseHeight) * pockets,
            fireBed * 0.58
          ) *
          (1.0 - smoothstep(0.0, 0.39, uv.y));

        float rim =
          (smoothstep(0.84, 1.00, baseHeight) -
           smoothstep(1.14, 1.30, baseHeight)) *
          pockets;

        vec3 ember = vec3(0.47, 0.075, 0.018);
        vec3 orange = vec3(0.96, 0.25, 0.035);
        vec3 amber = vec3(1.0, 0.56, 0.10);
        vec3 hot = vec3(1.0, 0.87, 0.48);

        vec3 color = mix(ember, orange, clamp(flame * 1.35 + rim * 0.45, 0.0, 1.0));
        color = mix(color, amber, clamp(core * 1.15, 0.0, 1.0));
        color = mix(color, hot, clamp(core * core * 0.72, 0.0, 1.0));

        float alpha = flame * 0.68 + core * 0.16;
        alpha *= 0.80 + 0.20 * noise(vec2(uv.x * 14.0, t * 2.0));

        gl_FragColor = vec4(color * alpha, alpha);
      }
    `;

    function compile(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = compile(gl.VERTEX_SHADER, vertexSource);
    const fs = compile(gl.FRAGMENT_SHADER, fragmentSource);
    if (!vs || !fs) {
      canvas.remove();
      surface.classList.add("fire-static");
      return;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.deleteShader(vs);
    gl.deleteShader(fs);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      canvas.remove();
      surface.classList.add("fire-static");
      return;
    }

    gl.useProgram(program);
    const position = gl.getAttribLocation(program, "a_position");
    const timeLoc = gl.getUniformLocation(program, "u_time");
    const resolutionLoc = gl.getUniformLocation(program, "u_resolution");

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1,-1, 1,-1, -1,1,
      -1,1, 1,-1, 1,1
    ]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    function resize() {
      const rect = surface.getBoundingClientRect();
      const scale = Math.min(window.devicePixelRatio || 1, 1.25) * 0.72;
      const w = Math.max(2, Math.min(520, Math.round(rect.width * scale)));
      const h = Math.max(2, Math.min(120, Math.round(rect.height * scale)));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    }

    resize();
    const ro = window.ResizeObserver ? new ResizeObserver(resize) : null;
    ro?.observe(surface);

    const start = performance.now();
    let last = 0;

    function frame(now) {
      if (!canvas.isConnected) {
        ro?.disconnect();
        gl.deleteBuffer(buffer);
        gl.deleteProgram(program);
        return;
      }
      if (input.checked) {
        canvas.classList.add("is-extinguished");
        ro?.disconnect();
        return;
      }
      if (document.hidden || now - last < 33) {
        requestAnimationFrame(frame);
        return;
      }

      last = now;
      resize();
      gl.useProgram(program);
      gl.uniform1f(timeLoc, (now - start) * 0.001);
      gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
      gl.clearColor(0,0,0,0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }

  function questHtml(m, globalIndex) {
    const guides = matchedGuides(m);
    const items = prepareItems(m);
    const side = m.type !== "core";

    return `<div class="quest-context" style="--biomeColor:${m.stage.color}">
      <span>STEP ${globalIndex + 1}</span>
      <span class="quest-context-biome">${m.stageName}</span>
      <span>${typeLabel(m.type)}</span>
    </div>
    <article class="quest-card compact-quest" id="currentQuest" style="--biomeColor:${m.stage.color};--biomeTint:${m.stage.tint}">
      <header class="compact-quest-head">
        <h2 class="objective-main">${m.do}</h2>
      </header>

      <div class="compact-quest-body">
        <section class="essential-needs">
          <div class="section-label">NEEDED</div>
          <div class="need-chips">
            ${items.map(item => `<span class="need-item"><b class="need-qty">${escapeHtml(item.qty)}</b><span class="need-name">${escapeHtml(item.name)}${item.note ? `<small>${escapeHtml(item.note)}</small>` : ""}</span></span>`).join("")}
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
          <div class="unlock-line standalone-unlock"><span>UNLOCKS</span><strong>${m.unlock}</strong></div>

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
      initMarkDoneFire();
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

  function resetAllProgress() {
    progress = {};
    saveProgress();
    renderAll(true);
  }

  const resetTop = $("#resetProgressTop");
  const resetDialog = $("#resetDialog");
  const confirmReset = $("#confirmReset");

  resetTop?.addEventListener("click", () => {
    if (resetDialog?.showModal) {
      resetDialog.showModal();
    } else if (confirm("Are you sure you want to reset all progression?")) {
      resetAllProgress();
    }
  });

  confirmReset?.addEventListener("click", e => {
    e.preventDefault();
    resetDialog?.close();
    resetAllProgress();
  });

  ["skillCurrent","skillTarget"].forEach(id => $("#" + id)?.addEventListener("input", updateSkillCalc));

  renderStations();
  renderSkills();
  renderSources();
  renderAll();
  updateSkillCalc();
})();