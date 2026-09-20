window.VALHEIM_DATA = {
  version: "1.0.15",
  updated: "2026-09-20",
  stages: [
    {
      id:"meadows", index:"01", name:"Meadows", color:"#9abb72", tint:"rgba(107,142,76,.20)",
      boss:"Eikthyr", bossReq:"2 Deer Trophies",
      blurb:"Survive, establish your first rested base, learn food and crafting, then unlock mining.",
      milestones:[
        {id:"m-forage",type:"core",title:"Gather wood, stone and food",summary:"Pick up branches and stones; forage raspberries and mushrooms while learning stamina management.",need:"Nothing",do:"Collect wood + stone; keep 3 different foods active",unlock:"Stone Axe, Club, Hammer and basic survival crafting"},
        {id:"m-workbench",type:"core",title:"Build a covered Workbench",summary:"A Workbench only becomes usable for crafting when it has enough shelter.",need:"Hammer + 10 Wood",do:"Build Workbench, roof it and give it working space",unlock:"Repairing, basic weapons, shields, bows and building pieces"},
        {id:"m-rested",type:"core",title:"Create a bed + fire + rested shelter",summary:"Rested is one of the strongest progression buffs in the game; keep it active whenever possible.",need:"Shelter, Campfire, Bed",do:"Claim a bed and sit/sleep near a sheltered fire",unlock:"Faster health/stamina recovery and safer respawns"},
        {id:"m-flint",type:"core",title:"Collect Flint and hunt boar/deer",summary:"Flint is found along Meadows shorelines. Leather scraps and deer hide open the first real gear tier.",need:"Shoreline + hunting",do:"Make Flint Axe/Knife/Spear as useful; gather hides and scraps",unlock:"Leather gear and Workbench upgrades"},
        {id:"m-wb2",type:"crafting",title:"Workbench Lv.2 — Chopping Block",summary:"Your first station extension.",need:"10 Wood + 10 Flint",do:"Place within Workbench extension range",unlock:"Higher-quality Workbench recipes"},
        {id:"m-wb3",type:"crafting",title:"Workbench Lv.3 — Tanning Rack",summary:"Push your leather-era equipment further before the first boss.",need:"10 Wood + 15 Flint + 20 Leather Scraps + 5 Deer Hide",do:"Place near the Workbench",unlock:"Higher Workbench crafting/upgrades"},
        {id:"m-bow",type:"core",title:"Craft a Crude Bow and stock arrows",summary:"A bow makes deer hunting and the first boss dramatically cleaner.",need:"Workbench + Leather Scraps",do:"Practice bow shots and gather Deer Trophies",unlock:"Reliable ranged combat"},
        {id:"m-eikthyr",type:"core",title:"Defeat Eikthyr",summary:"The first boss is the gate from stone-age survival into metal progression.",need:"2 Deer Trophies at Eikthyr's altar",do:"Summon and defeat Eikthyr",unlock:"Hard Antlers + Eikthyr Trophy/power"},
        {id:"m-antler",type:"core",title:"Craft the Antler Pickaxe",summary:"Hard Antlers let you mine the ore that starts the Bronze Age.",need:"Hard Antler + Wood",do:"Craft at Workbench",unlock:"Copper and Tin mining → Black Forest tech"}
      ]
    },
    {
      id:"black-forest", index:"02", name:"Black Forest", color:"#76a06d", tint:"rgba(57,102,70,.22)",
      boss:"The Elder", bossReq:"3 Ancient Seeds",
      blurb:"Build a metal economy, unlock portals and boats, start farming, then earn the Swamp Key.",
      milestones:[
        {id:"bf-cores",type:"core",title:"Raid Burial Chambers for Surtling Cores",summary:"Aim for at least 10 early so you can run a Smelter and Charcoal Kiln together.",need:"Black Forest Burial Chambers",do:"Explore chambers and clear skeleton rooms",unlock:"Smelter, Charcoal Kiln and later Portals"},
        {id:"bf-smelt",type:"core",title:"Build Smelter + Charcoal Kiln",summary:"Ore plus coal is your first production chain.",need:"5 Surtling Cores + 20 Stone each",do:"Feed Copper/Tin ore and coal",unlock:"Metal bars"},
        {id:"bf-bronze",type:"core",title:"Mine Copper + Tin and make Bronze",summary:"Copper comes from large forest deposits; Tin lines Black Forest water edges.",need:"Antler Pickaxe + Smelter",do:"Smelt Copper/Tin, build Forge, combine 2 Copper + 1 Tin",unlock:"Bronze-tier tools, weapons and armor"},
        {id:"bf-forge",type:"crafting",title:"Build and start upgrading the Forge",summary:"The Forge is the metal-equipment station and will remain relevant for several biomes.",need:"4 Stone + 4 Coal + 10 Wood + 6 Copper",do:"Build Forge; add Cooler/Anvils as materials allow",unlock:"Metal crafting and equipment upgrades"},
        {id:"bf-finewood",type:"core",title:"Bronze Axe → Finewood",summary:"Cut birch/oak once you have a Bronze Axe.",need:"Bronze Axe",do:"Harvest Finewood",unlock:"Finewood Bow, better furniture, Portals and Karve tech"},
        {id:"bf-portal",type:"core",title:"Establish a Portal network",summary:"Portals transform exploration. Normal portals cannot transport most metals.",need:"Finewood + Greydwarf Eyes + Surtling Cores",do:"Place and pair named portals",unlock:"Fast non-metal travel"},
        {id:"bf-karve",type:"core",title:"Build a Karve",summary:"The Karve is your first genuinely useful exploration/ore-hauling boat.",need:"Bronze Nails + Finewood + Deer Hide + Resin",do:"Build near water",unlock:"Safer sea travel and remote mining"},
        {id:"bf-farm",type:"core",title:"Craft Cultivator and grow Carrots",summary:"Carrot Seeds are found as white flowers in Black Forest.",need:"Forge + Bronze + Core Wood",do:"Cultivate soil; plant seeds, then carrots for seed multiplication",unlock:"Renewable food + livestock support"},
        {id:"bf-cauldron",type:"crafting",title:"Build Cauldron + Fermenter",summary:"Meads become crucial in the next biomes.",need:"Tin for Cauldron; Bronze/Finewood/Resin for Fermenter",do:"Cook mead bases and ferment them",unlock:"Poison/Frost resistance and stronger food chains"},
        {id:"bf-adze",type:"crafting",title:"Workbench Lv.4 — Adze",summary:"A compact Bronze Age Workbench extension.",need:"10 Finewood + 3 Bronze",do:"Place near Workbench",unlock:"Workbench Lv.4 recipes/upgrades"},
        {id:"bf-haldor",type:"optional",title:"Find Haldor the merchant",summary:"Buy the Megingjord carry-weight belt first if you can afford it; fishing and other utility items are here too.",need:"Explore Black Forests far from spawn",do:"Visit Haldor and spend coins/valuables",unlock:"Merchant utility gear"},
        {id:"bf-elder",type:"core",title:"Defeat The Elder",summary:"Bring fire arrows and use the pillars for cover.",need:"3 Ancient Seeds at The Elder altar",do:"Summon and defeat The Elder",unlock:"Swamp Key + Elder Trophy/power"},
        {id:"bf-key",type:"core",title:"Take the Swamp Key",summary:"This opens the iron-bearing Sunken Crypts in the Swamp.",need:"Defeat The Elder",do:"Carry a Swamp Key on expeditions",unlock:"Sunken Crypts → Iron Age"}
      ]
    },
    {
      id:"swamp", index:"03", name:"Swamp", color:"#a79b62", tint:"rgba(116,106,56,.20)",
      boss:"Bonemass", bossReq:"10 Withered Bones",
      blurb:"Prepare for poison, mine Scrap Iron from crypts, establish turnip farming and defeat Bonemass.",
      milestones:[
        {id:"s-prep",type:"core",title:"Prepare Poison Resistance + a dry portal outpost",summary:"Swamp attrition is the real enemy: Wet, poison, darkness and poor stamina compound quickly.",need:"Poison Resistance Mead + good food + portal materials",do:"Land by daylight and establish a protected portal",unlock:"Repeatable Swamp expeditions"},
        {id:"s-crypt",type:"core",title:"Open a Sunken Crypt",summary:"Use the Elder's Swamp Key and mine Muddy Scrap Piles inside.",need:"Swamp Key + pickaxe",do:"Clear crypt rooms and collect Scrap Iron",unlock:"Scrap Iron + Withered Bones"},
        {id:"s-iron",type:"core",title:"Smelt Iron",summary:"Iron is a huge infrastructure tier, not merely an armor upgrade.",need:"Scrap Iron + Smelter",do:"Smelt your first Iron bars",unlock:"Iron gear, nails, structural/building tech and station upgrades"},
        {id:"s-ironpick",type:"core",title:"Prioritize Iron Pickaxe + core combat gear",summary:"The Iron Pickaxe remains important for Mountain silver. Upgrade your main weapon/shield before vanity pieces.",need:"Iron + Forge",do:"Craft Iron Pickaxe; choose armor/weapons for your build",unlock:"Mountain mining readiness"},
        {id:"s-stonecutter",type:"crafting",title:"Build a Stonecutter",summary:"Stone construction and several later progression objects depend on it.",need:"10 Wood + 2 Iron + 4 Stone",do:"Place near Workbench",unlock:"Stone building pieces and later special structures"},
        {id:"s-longship",type:"core",title:"Build a Longship",summary:"Iron Nails and Ancient Bark unlock the proper cargo/exploration vessel.",need:"Iron Nails + Ancient Bark + Finewood + Deer Hide",do:"Build a Longship",unlock:"Large cargo capacity and safer long-range travel"},
        {id:"s-turnips",type:"core",title:"Find Turnip Seeds and multiply them",summary:"Turnip flowers are easy to miss. Bring seeds home rather than gambling the whole crop in the Swamp.",need:"Turnip Seeds + Cultivator",do:"Plant seeds → turnips → seed turnips",unlock:"Stronger foods + Spice Rack"},
        {id:"s-spice",type:"crafting",title:"Cauldron Lv.2 — Spice Rack",summary:"Turns your farm into a meaningful food upgrade.",need:"3 Dandelion + 2 Carrot + 5 Mushroom + 3 Thistle + 3 Turnip",do:"Hang near Cauldron",unlock:"Higher-tier cooking"},
        {id:"s-forge",type:"crafting",title:"Push Forge upgrades with Iron + Chains",summary:"Smith's Anvil, Tool Rack and Bellows become available around this era.",need:"Iron, Wood, Chain and Deer Hide",do:"Build available Forge extensions",unlock:"Higher-quality iron and later gear"},
        {id:"s-bones",type:"core",title:"Collect 10 Withered Bones",summary:"Found mainly in Sunken Crypts.",need:"Crypt exploration",do:"Store 10 Withered Bones",unlock:"Bonemass summon"},
        {id:"s-bonemass",type:"core",title:"Defeat Bonemass",summary:"Blunt damage and poison resistance are especially effective.",need:"10 Withered Bones at Bonemass altar",do:"Summon and defeat Bonemass",unlock:"Wishbone + Bonemass Trophy/power"},
        {id:"s-wishbone",type:"core",title:"Equip the Wishbone",summary:"Its pulses reveal buried silver in Mountains and other hidden treasures.",need:"Defeat Bonemass",do:"Equip Wishbone while exploring Mountains",unlock:"Silver Age"}
      ]
    },
    {
      id:"mountains", index:"04", name:"Mountains", color:"#b7d8da", tint:"rgba(129,188,197,.18)",
      boss:"Moder", bossReq:"3 Dragon Eggs",
      blurb:"Survive freezing, mine Silver, finish the classic Workbench/Forge ladders and unlock Artisan technology.",
      milestones:[
        {id:"mt-frost",type:"core",title:"Gain Frost Resistance",summary:"Start with Frost Resistance Mead; later a Wolf/Fenris/Lox cape can provide persistent protection.",need:"Frost Resistance Mead or frost-protective gear",do:"Enter Mountains without taking freezing damage",unlock:"Sustainable Mountain exploration"},
        {id:"mt-silver",type:"core",title:"Use Wishbone to find Silver",summary:"Silver veins are buried. An Iron Pickaxe is required to mine them.",need:"Wishbone + Iron Pickaxe",do:"Follow Wishbone pulses; expose and mine Silver",unlock:"Silver-tier equipment"},
        {id:"mt-wolfgear",type:"core",title:"Craft frost-safe Mountain gear",summary:"Wolf armor/cape, Silver weapons, Draugr Fang and Frostner are all strong era-defining options.",need:"Silver + Wolf pelts/fangs + other recipe materials",do:"Commit to a loadout and upgrade it",unlock:"Safer Mountain combat and boss prep"},
        {id:"mt-obsidian",type:"crafting",title:"Workbench Lv.5 — Tool Shelf",summary:"Obsidian is the last material needed for the classic Workbench upgrade chain.",need:"10 Finewood + 4 Iron + 4 Obsidian",do:"Place near Workbench",unlock:"Workbench Lv.5"},
        {id:"mt-onions",type:"core",title:"Find Onion Seeds",summary:"Seeds appear in Mountain chests; onions become an excellent renewable stamina-food line.",need:"Mountain structure chests + Cultivator",do:"Bring seeds home and multiply crop",unlock:"Onion foods"},
        {id:"mt-caves",type:"optional",title:"Clear Frost Caves / unlock Fenris tech",summary:"Optional cave progression provides Fenris materials and unique gear.",need:"Frost Caves",do:"Explore caves and gather cultist/fenring materials",unlock:"Fenris armor and cave recipes"},
        {id:"mt-grind",type:"crafting",title:"Forge Lv.7 — finish the upgrade ladder",summary:"Craft a Sharpening Stone at a Stonecutter, then use it for the Grinding Wheel if still missing.",need:"25 Wood + 1 Sharpening Stone for Grinding Wheel",do:"Build all six Forge extensions",unlock:"Forge Lv.7"},
        {id:"mt-eggs",type:"core",title:"Transport 3 Dragon Eggs",summary:"Eggs are heavy and cannot pass normal portals.",need:"3 Dragon Eggs",do:"Carry/ship them to Moder's altar",unlock:"Moder summon"},
        {id:"mt-moder",type:"core",title:"Defeat Moder",summary:"The Mountain boss gates the Artisan production tier.",need:"3 Dragon Eggs at Moder altar",do:"Summon and defeat Moder",unlock:"Dragon Tears + Moder Trophy/power"},
        {id:"mt-artisan",type:"core",title:"Build the Artisan Table",summary:"Dragon Tears let you construct the Artisan Table, which unlocks Plains processing structures.",need:"2 Dragon Tears + 10 Wood",do:"Build Artisan Table",unlock:"Blast Furnace, Spinning Wheel and Windmill"},
        {id:"mt-pockets",type:"optional",title:"Buy Haldor's Wider Pockets",summary:"A 1.0 progression reward after Moder: one permanent extra inventory row for the character.",need:"Moder defeated + 1,000 Coins",do:"Buy Wider Pockets from Haldor",unlock:"+1 permanent inventory row"}
      ]
    },
    {
      id:"plains", index:"05", name:"Plains", color:"#d5bd70", tint:"rgba(186,155,60,.18)",
      boss:"Yagluth", bossReq:"5 Fuling Totems",
      blurb:"Build a Plains farm and industrial chain for Black Metal, Linen and Barley, then unlock Wisps.",
      milestones:[
        {id:"p-outpost",type:"core",title:"Establish a secure Plains outpost",summary:"Deathsquitos and Fulings punish low awareness. A portal, walls and good sight-lines make farming sustainable.",need:"Portal + strong food/gear",do:"Secure a patch of Plains near useful resources",unlock:"Plains farming and industry"},
        {id:"p-crops",type:"core",title:"Raid villages for Barley + Flax",summary:"Both crops only grow in the Plains.",need:"Fuling villages",do:"Steal crops and start a protected Plains farm",unlock:"Barley Flour + Linen Thread"},
        {id:"p-blast",type:"core",title:"Build Blast Furnace → Black Metal",summary:"Fuling Black Metal Scrap cannot be processed in the normal Smelter.",need:"Artisan Table + Surtling Cores + Iron + Finewood + Stone",do:"Process Black Metal Scrap",unlock:"Black Metal gear and advanced crafting"},
        {id:"p-spin",type:"core",title:"Build Spinning Wheel → Linen Thread",summary:"Feed Flax into the Spinning Wheel.",need:"Artisan Table + Finewood + Iron Nails + Leather Scraps",do:"Process Flax",unlock:"Padded armor and linen recipes"},
        {id:"p-wind",type:"core",title:"Build Windmill → Barley Flour",summary:"Windmill throughput depends on wind.",need:"Artisan Table + Stone + Wood + Iron Nails",do:"Process Barley",unlock:"Top-tier Plains foods"},
        {id:"p-gear",type:"core",title:"Reach Padded / Black Metal combat tier",summary:"Padded armor is built from Iron + Linen while Black Metal drives late physical weapons/shields.",need:"Iron, Linen Thread, Black Metal",do:"Upgrade the loadout you actually use",unlock:"Mistlands-ready survivability"},
        {id:"p-pans",type:"crafting",title:"Cauldron Lv.4 — Pots and Pans",summary:"The Plains cooking extension.",need:"5 Iron + 5 Copper + 5 Black Metal + 10 Finewood",do:"Place near Cauldron",unlock:"Higher-tier foods"},
        {id:"p-firewine",type:"core",title:"Brew Fire Resistance Barley Wine",summary:"Useful now and especially important for Ashlands later.",need:"Barley-based mead base + Fermenter",do:"Keep a reserve",unlock:"Reliable fire resistance"},
        {id:"p-totems",type:"core",title:"Collect 5 Fuling Totems",summary:"Totems are found in Fuling villages/camps.",need:"Village raids",do:"Store 5 Fuling Totems",unlock:"Yagluth summon"},
        {id:"p-yagluth",type:"core",title:"Defeat Yagluth",summary:"The Plains boss gates safe navigation through Mistlands fog.",need:"5 Fuling Totems at Yagluth altar",do:"Summon and defeat Yagluth",unlock:"Torn Spirits + Yagluth Trophy/power"},
        {id:"p-wisps",type:"core",title:"Build a Wisp Fountain",summary:"Torn Spirits enable the Wisp Fountain; it produces Wisps at night.",need:"Torn Spirit + Stonecutter materials",do:"Build fountain; collect a Wisp at night",unlock:"Wisplight / Wisp Torches → Mistlands navigation"}
      ]
    },
    {
      id:"mistlands", index:"06", name:"Mistlands", color:"#a99cc7", tint:"rgba(119,91,153,.20)",
      boss:"The Queen", bossReq:"Sealbreaker (9 fragments)",
      blurb:"Collect Black Cores and Sealbreaker Fragments, build eitr technology, then earn the carapace that opens Ashlands.",
      milestones:[
        {id:"mi-wisplight",type:"core",title:"Craft and equip a Wisplight",summary:"The Wisp clears nearby mist so terrain and enemies stop appearing at kissing distance.",need:"Wisp + Silver",do:"Craft Wisplight",unlock:"Practical Mistlands exploration"},
        {id:"mi-materials",type:"core",title:"Harvest Yggdrasil Wood + Black Marble",summary:"These two materials underpin most Mistlands crafting infrastructure.",need:"Black Metal Axe for Yggdrasil shoots; structures/tissues for marble",do:"Stock both materials",unlock:"Black Forge / eitr building tech"},
        {id:"mi-mines",type:"core",title:"Raid Infested Mines",summary:"Mines contain the Black Cores and Sealbreaker Fragments that drive nearly the entire biome.",need:"Mistlands combat readiness",do:"Collect at least 5 Black Cores and ultimately 9 Sealbreaker Fragments",unlock:"Black Forge, Eitr Refinery, Galdr Table and Sealbreaker"},
        {id:"mi-blackforge",type:"crafting",title:"Build the Black Forge",summary:"The Mistlands physical-equipment station.",need:"10 Black Marble + 10 Yggdrasil Wood + 5 Black Core",do:"Build under cover",unlock:"Carapace/Mistlands weapon and tool crafting"},
        {id:"mi-extractor",type:"core",title:"Acquire Dvergr Extractor → Sap Extractor",summary:"Dvergr Extractors come from component crates. Breaking Dvergr property can make nearby Dvergr hostile.",need:"Dvergr Extractor + Yggdrasil Wood + Black Metal",do:"Attach Sap Extractor to an Ancient Root",unlock:"Sap"},
        {id:"mi-eitr",type:"core",title:"Build Eitr Refinery and refine eitr",summary:"The refinery consumes Sap + Soft Tissue to produce Refined Eitr.",need:"20 Black Marble + 5 Black Metal + 10 Yggdrasil Wood + 5 Black Core + 3 Sap",do:"Build refinery; feed Sap + Soft Tissue",unlock:"Refined Eitr"},
        {id:"mi-galdr",type:"crafting",title:"Build the Galdr Table",summary:"This is the gateway to staves, magic equipment and the eitr playstyle.",need:"20 Yggdrasil Wood + 10 Black Metal + 5 Black Core + 5 Refined Eitr",do:"Build Galdr Table",unlock:"Elemental/Blood Magic equipment"},
        {id:"mi-build",type:"core",title:"Choose physical, magic or hybrid Mistlands build",summary:"Carapace equipment comes from the Black Forge; magic comes from Galdr Table + eitr foods.",need:"Mistlands materials",do:"Upgrade one coherent loadout rather than every recipe",unlock:"Queen-ready combat tier"},
        {id:"mi-sealbreaker",type:"core",title:"Craft the Sealbreaker",summary:"Nine fragments from Infested Mines combine into the key for The Queen's first encounter.",need:"9 Sealbreaker Fragments",do:"Assemble Sealbreaker",unlock:"Queen entrance"},
        {id:"mi-queen",type:"core",title:"Defeat The Queen",summary:"A long indoor boss fight; bring a portal outside the citadel and a build with reliable crowd control.",need:"Sealbreaker",do:"Open the Infested Citadel and defeat The Queen",unlock:"Majestic Carapace + Queen Trophy/power"},
        {id:"mi-press",type:"core",title:"Artisan Press → Ceramic Plates",summary:"The Queen's Majestic Carapace enables the Artisan Press, which makes the heat-resistant components for Ashlands travel.",need:"5 Black Marble + 5 Bronze + 1 Majestic Carapace",do:"Upgrade Artisan Table with the Press and produce Ceramic Plates",unlock:"Drakkar construction"},
        {id:"mi-drakkar",type:"core",title:"Build the Drakkar",summary:"The Drakkar is required for the boiling waters around Ashlands.",need:"Ceramic Plates + late-game ship materials",do:"Stock the ship, portal materials and fire-resistance supplies",unlock:"Safe Ashlands approach"},
        {id:"mi-pockets",type:"optional",title:"Buy Haldor's Deeper Pockets",summary:"Another 1.0 character upgrade after defeating The Queen.",need:"Queen defeated + 2,000 Coins",do:"Buy Deeper Pockets from Haldor",unlock:"+1 additional permanent inventory row"}
      ]
    },
    {
      id:"ashlands", index:"07", name:"Ashlands", color:"#dc7661", tint:"rgba(155,61,43,.20)",
      boss:"Fader", bossReq:"3 Bells (9 Bell Fragments)",
      blurb:"Survive the landing, establish metal-capable portals, raid fortresses and defeat Fader to ignite the route north.",
      milestones:[
        {id:"a-sail",type:"core",title:"Sail a prepared Drakkar into Ashlands",summary:"The surrounding water boils. Treat the voyage as an expedition, not a casual scouting trip.",need:"Drakkar + strong food + Fire Resistance + portal kit",do:"Navigate the spires and reach shore",unlock:"Ashlands beachhead"},
        {id:"a-beach",type:"core",title:"Secure a beachhead immediately",summary:"Enemy pressure can snowball. Terrain, shield generators and a fallback portal matter more than style.",need:"Building supplies + portal",do:"Fortify spawn/portal area before ranging inland",unlock:"Repeatable Ashlands runs"},
        {id:"a-stoneportal",type:"core",title:"Unlock the Stone Portal",summary:"This portal tier can transport metals, radically shortening Ashlands logistics.",need:"Grausten + Greydwarf Eyes + Molten Cores",do:"Build a Stone Portal pair",unlock:"Portal travel with metal"},
        {id:"a-flametal",type:"core",title:"Acquire Flametal and Ashlands materials",summary:"Flametal, Ashwood, Charred Bone, Morgen materials and gems drive the biome's gear upgrades.",need:"Ashlands exploration/combat",do:"Mine/loot and upgrade Black Forge equipment",unlock:"Ashlands-tier armor and weapons"},
        {id:"a-fortress",type:"core",title:"Raid Charred Fortresses",summary:"Fortresses are the key progression dungeons of the biome.",need:"Siege-capable Ashlands kit",do:"Breach fortresses and loot their interiors",unlock:"Bell Fragments, gems and progression loot"},
        {id:"a-bells",type:"core",title:"Collect 9 Bell Fragments → craft 3 Bells",summary:"Three completed Bells are the offering for Fader.",need:"9 Bell Fragments",do:"Craft 3 Bells at the Black Forge",unlock:"Fader summon"},
        {id:"a-upgrades",type:"crafting",title:"Finish Ashlands station extensions",summary:"Metal Cutter/Gem Cutter, Feathery Wreath and Rolling Pins/Cutting Boards push Black Forge, Galdr and Cauldron into the Ashlands tier.",need:"Flametal + Ashwood + biome materials",do:"Build the extensions matching your build/food needs",unlock:"Higher station levels and Ashlands gear/food"},
        {id:"a-fader",type:"core",title:"Defeat Fader",summary:"Bring the 3 Bells to Fader's arena and be ready for a fire-heavy endurance fight.",need:"3 Bells",do:"Summon and defeat Fader",unlock:"Fader Relic + Fader Trophy/power"},
        {id:"a-pyre",type:"core",title:"Build the Eternal Pyre",summary:"The Fader Relic is the crucial bridge from Ashlands to the Deep North. The Pyre attracts Embers.",need:"10 Stone + 1 Fader Relic at a Stonecutter",do:"Build Eternal Pyre at your base",unlock:"Embers → Ember Charges → Deep North resource chain"},
        {id:"a-potential",type:"optional",title:"Find the Forge of Potential",summary:"A 1.0 optional endgame system located in the Mountains. Battle/Protection Idols can attempt +1 quality on already-maxed compatible gear.",need:"Find its unique world location + Idols",do:"Use only if you accept risk: the standard attempt is 65% success and failure destroys the offered item",unlock:"Beyond-normal-quality endgame equipment"}
      ]
    },
    {
      id:"deep-north", index:"08", name:"Deep North", color:"#9edee4", tint:"rgba(92,173,185,.20)",
      boss:"Kall Fimbulbringer", bossReq:"3 Malicious Blood",
      blurb:"Valheim 1.0's endgame chain: fire against ice, Bloodgold casting, three Mörkhalla invasions and the final Aesir Passage.",
      milestones:[
        {id:"dn-embers",type:"core",title:"1. Stock Embers from the Eternal Pyre",summary:"Do this before committing to Deep North exploration; Embers are the ignition source for the biome's first tool chain.",need:"Eternal Pyre",do:"Collect Embers at your base",unlock:"Ember Charges"},
        {id:"dn-land",type:"core",title:"2. Land and clear Deep Snow",summary:"Deep snow can impede construction and movement. The Snow Shovel is useful for establishing a clean foothold.",need:"Cold-ready gear + expedition supplies",do:"Create a safe landing/base area and clear snow where needed",unlock:"Stable Deep North operations"},
        {id:"dn-seals",type:"core",title:"3. Hunt seals → craft Ember Charges",summary:"Two Seal Pelts plus one Ember crafts ten Ember Charges at a Workbench.",need:"2 Seal Pelts + 1 Ember",do:"Craft Ember Charges",unlock:"Opening petrified remains"},
        {id:"dn-tissue",type:"core",title:"4. Open petrified remains for Petrified Tissue",summary:"Kill a Gammeltroll or find petrified bone piles; Ember Charges open the petrified body/resource.",need:"Ember Charges",do:"Harvest Petrified Tissue",unlock:"Bloodgold"},
        {id:"dn-bloodgold",type:"core",title:"5. Smelt Petrified Tissue → Bloodgold",summary:"Bloodgold is the defining metal of Deep North and the material used for casts, keys and final equipment.",need:"Petrified Tissue + Blast Furnace",do:"Smelt tissue in Blast Furnace",unlock:"Bloodgold casting chain"},
        {id:"dn-ice",type:"core",title:"6. Build Frigid Kiln and make Liquid Frost",summary:"The Kiln requires Frost Cores from Winding Tunnels. Five Ice produce one Liquid Frost.",need:"10 Frost Cores for Frigid Kiln + Ice",do:"Build Kiln; process Ice",unlock:"Liquid Frost"},
        {id:"dn-tunnels",type:"core",title:"7. Clear Winding Tunnels for Frost Cores + Moulds",summary:"You need 20 Frost Cores total for the Frigid Kiln and Frost Foundry. Hunt key/item moulds as you go.",need:"Winding Tunnel exploration",do:"Gather 20 Frost Cores plus required Moulds",unlock:"Frost Foundry + cast blueprints"},
        {id:"dn-casting",type:"core",title:"8. Build the Frost Foundry and learn casting",summary:"At the Black Forge, combine a Mould + Bloodgold into a Cast; finish that cast at the Frost Foundry using Liquid Frost.",need:"10 Frost Cores for Foundry + Bloodgold + Moulds + Liquid Frost",do:"Create and finish your first cast",unlock:"Deep North equipment production"},
        {id:"dn-key",type:"core",title:"9. Make 3 Intricate Keys",summary:"Each key cast costs 5 Bloodgold + 1 Intricate Key Mould at a level-4 Black Forge, then must be finished at the Frost Foundry.",need:"15 Bloodgold + 3 key Moulds + Lv.4 Black Forge + Liquid Frost",do:"Cast and finish 3 Intricate Keys",unlock:"Three Mörkhalla progression encounters"},
        {id:"dn-morkhalla",type:"core",title:"10. Clear 3 Mörkhalla and break Malicious Ice",summary:"Each Mörkhalla culminates in Malicious Ice. Breaking it triggers a Fimbulvinter/Jotun invasion.",need:"3 Intricate Keys",do:"Complete all three Mörkhalla",unlock:"Three invasion events"},
        {id:"dn-blood",type:"core",title:"11. Win all 3 invasions → Malicious Blood",summary:"Each completed invasion yields one Malicious Blood.",need:"Complete each Mörkhalla invasion",do:"Collect 3 Malicious Blood total",unlock:"Kall summon"},
        {id:"dn-coal",type:"optional",title:"12. Explore Memorial Coal infusion routes",summary:"Fallen Warriors and associated essences support optional Frostfire/Thunderblood weapon specialization.",need:"Memorial Coal + relevant essences",do:"Experiment with endgame weapon infusions",unlock:"Specialized Deep North weapons"},
        {id:"dn-smoker",type:"crafting",title:"Deep North station extensions",summary:"Smoker upgrades the Cauldron; Smith's Aprons upgrades the Black Forge; Standing Loom upgrades the Galdr Table.",need:"Bloodgold, Timberwood, Moose Hide and Nornathread",do:"Build extensions relevant to food, physical gear and magic",unlock:"Final 1.0 crafting tiers"},
        {id:"dn-kall",type:"core",title:"13. Summon and defeat Kall Fimbulbringer",summary:"Offer all three Malicious Blood at the Strange Bowl in Aesir Passage.",need:"3 Malicious Blood",do:"Enter Aesir Passage, make the offering and defeat Kall",unlock:"Crown Jewel + Sacrificial Blood"},
        {id:"dn-crown",type:"core",title:"Craft the Crown and complete the endgame handoff",summary:"The Crown Jewel combines with Bloodgold at the level-4 Black Forge. Sacrificial Blood is used at the sacrificial stones for the ending progression.",need:"Crown Jewel + 5 Bloodgold; Sacrificial Blood",do:"Craft the Crown and follow the sacrificial-stone finale",unlock:"Valheim 1.0 endgame completion"}
      ]
    }
  ],
  stations: [
    {name:"Workbench",max:"Lv. 5",base:"Base: 10 Wood",upgrades:[
      ["Lv.2 Chopping Block","10 Wood + 10 Flint"],
      ["Lv.3 Tanning Rack","10 Wood + 15 Flint + 20 Leather Scraps + 5 Deer Hide"],
      ["Lv.4 Adze","10 Finewood + 3 Bronze"],
      ["Lv.5 Tool Shelf","10 Finewood + 4 Iron + 4 Obsidian"]
    ]},
    {name:"Forge",max:"Lv. 7",base:"Base: 4 Stone + 4 Coal + 10 Wood + 6 Copper",upgrades:[
      ["Forge Cooler","25 Finewood + 10 Copper"],
      ["Anvils","5 Wood + 2 Bronze"],
      ["Smith's Anvil","5 Wood + 20 Iron"],
      ["Forge Tool Rack","10 Wood + 15 Iron"],
      ["Forge Bellows","5 Wood + 5 Deer Hide + 4 Chain"],
      ["Grinding Wheel","25 Wood + 1 Sharpening Stone"]
    ]},
    {name:"Cauldron",max:"Lv. 7 in 1.0",base:"Base: 10 Tin",upgrades:[
      ["Spice Rack","3 Dandelion + 2 Carrot + 5 Mushroom + 3 Thistle + 3 Turnip"],
      ["Butcher's Table","2 Ancient Bark + 4 Core Wood + 4 Finewood + 2 Silver"],
      ["Pots and Pans","5 Iron + 5 Copper + 5 Black Metal + 10 Finewood"],
      ["Mortar and Pestle","8 Black Marble + 6 Finewood + 4 Core Wood"],
      ["Rolling Pins and Cutting Boards","8 Ashwood + 6 Finewood + 4 Flametal"],
      ["Smoker (Deep North)","5 Bloodgold + 6 Timberwood"]
    ]},
    {name:"Artisan Table",max:"Lv. 2",base:"Base: 2 Dragon Tears + 10 Wood",upgrades:[
      ["Artisan Press","5 Black Marble + 5 Bronze + 1 Majestic Carapace"],
      ["Why it matters","Press makes Ceramic Plates used in the Ashlands ship progression"]
    ]},
    {name:"Black Forge",max:"Lv. 6 in 1.0",base:"Base: 10 Black Marble + 10 Yggdrasil Wood + 5 Black Core",upgrades:[
      ["Black Forge Cooler","5 Iron + 5 Copper + 4 Black Marble"],
      ["Black Forge Vice","5 Iron + 8 Copper + 2 Mechanical Spring"],
      ["Metal Cutter","5 Black Marble + 5 Flametal + 5 Ashwood + 4 Charred Bone"],
      ["Gem Cutter","5 Flametal + 8 Ashwood + 2 Morgen Sinew + 1 Bloodstone"],
      ["Smith's Aprons (Deep North)","5 Bloodgold + 8 Timberwood + 2 Moose Hide"]
    ]},
    {name:"Galdr Table",max:"Lv. 5 in 1.0",base:"Base: 20 Yggdrasil Wood + 10 Black Metal + 5 Black Core + 5 Refined Eitr",upgrades:[
      ["Rune Table","10 Black Marble + 5 Yggdrasil Wood + 10 Refined Eitr"],
      ["Unfading Candles","10 Black Marble + 3 Skeleton Trophies + 10 Refined Eitr + 15 Resin"],
      ["Feathery Wreath","8 Celestial Feathers + 1 Asksvin Trophy + 10 Refined Eitr + 3 Ashwood"],
      ["Standing Loom (Deep North)","5 Timberwood + 10 Nornathread"]
    ]}
  ],
  skills: [
    ["Axes","Axe damage and effectiveness"],
    ["Blocking","Damage absorbed when blocking/parrying"],
    ["Blood Magic","Blood-magic performance and resource efficiency"],
    ["Bows","Bow damage and handling"],
    ["Clubs","Club/mace damage"],
    ["Cooking","Cooking speed, tray wear and bonus-yield effects"],
    ["Crafting","Craft speed, hammer wear and build stamina efficiency"],
    ["Crossbows","Crossbow accuracy/damage"],
    ["Dodge","Reduces dodge stamina cost as it improves"],
    ["Elemental Magic","Elemental damage and eitr efficiency"],
    ["Farming","Cultivator stamina/wear, harvest radius and bonus yields"],
    ["Fishing","Fishing stamina use and pull speed"],
    ["Fists","Unarmed damage"],
    ["Jump","Jump performance/height"],
    ["Knives","Knife damage"],
    ["Pickaxes","Pickaxe damage/effectiveness"],
    ["Polearms","Polearm damage"],
    ["Riding","Mount speed/stamina efficiency"],
    ["Run","Run speed/stamina efficiency"],
    ["Sneak","Sneak stamina and stealth"],
    ["Spears","Spear damage"],
    ["Swim","Swimming stamina efficiency"],
    ["Swords","Sword damage"],
    ["Wood Cutting","Tree-cutting effectiveness"]
  ],
  sources: [
    {title:"Iron Gate — Valheim 1.0 has arrived",note:"Official 1.0 / Deep North launch announcement",url:"https://www.valheim.com/news/valheim-1-0-has-arrived-/"},
    {title:"Iron Gate — Valheim News",note:"Current live patch notes; 1.0.15 on Sep 18, 2026",url:"https://www.valheim.com/news/"},
    {title:"Valheim.tools — Progression",note:"Current game-data-backed biome progression overview",url:"https://www.valheim.tools/guides/progression"},
    {title:"Valheim.tools — Deep North progression",note:"Detailed 1.0 endgame chain, Bloodgold, keys, invasions and Kall",url:"https://www.valheim.tools/guides/deep-north-progression"},
    {title:"Valheim.tools — Bosses",note:"Boss order and summon requirements",url:"https://www.valheim.tools/bosses"},
    {title:"Valheim.tools — Skills",note:"Current 24-skill list and effects",url:"https://www.valheim.tools/skills"},
    {title:"PC Gamer — Valheim biome order",note:"Post-1.0 biome/boss progression cross-check",url:"https://www.pcgamer.com/games/survival-crafting/valheim-biome-order/"},
    {title:"Mobalytics — Forge of Potential",note:"Post-1.0 optional quality-upgrade system",url:"https://mobalytics.gg/gamebase/guides/valheim-forge-of-potential-guide"}
  ]
};