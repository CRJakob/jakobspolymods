import { PolyMod } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";
import { isElectron } from "https://pml.orangy.cfd/CRJakob/jakobspolymods/main/isElectron.js";

class allthemods extends PolyMod {
    init = (pml) => {
        this.pml = pml;

        // Mod List
        this.modList = [
            { url: "https://pml.orangy.cfd/GameBuilder202/ErrorPopupMod/main", version: "latest" },
            { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/3decspeed", version: "latest" },
            { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/husplits", version: "latest" },
            { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/ghosttoggle", version: "latest" },
            { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/carswitcher", version: "latest" },
            { url: "https://pml.orangy.cfd/CRJakob/jakobspolymods/main/goofycars/", version: "latest" },
            { url: "https://pml.orangy.cfd/CRJakob/jakobspolymods/main/coolcars/", version: "latest" }
        ];

        // PolyProxy mod
        this.polyProxy = { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/polyproxy", version: "latest" };
        this.includeProxy = true;

        // funtion to normalize urls
        function normalize(u) {
          return new URL(u).href.replace(/\/+$/, "");
        }

        // function for loading mods
        function importPolyMod({ url: modurl, version: modversion }) {
          console.info(`⏳ Attempting to import mod: ${modurl}@${modversion}`);

          // parse stored polyMods
          const raw = window.localStorage.getItem("polyMods") || "[]";

          const normUrl = normalize(modurl);
          console.info(normUrl);

          if (raw.includes(normUrl)) {
            // skip
            console.warn(`⚠️  Skipping import; already in polyMods: ${modurl}`);
          }
          else {
            // import mod
            pml.addMod({ base: modurl, version: modversion, loaded: true })
            .then(mod => {
              pml.setModLoaded(mod, true);
              console.info(`✅ Successfully imported: ${modurl}`);
            })
            .catch(err => {
              console.error(`❌ Failed to import ${modurl}:`, err);
            });
        }
    }
        
    // run Electron check
    let runningElectron = isElectron();

    // install polyProxy mod if on Browser
    if(this.includeProxy === true && runningElectron === false) {
        console.info("Running web client, loading PolyProxy")
        importPolyMod(this.polyProxy)
    } else {
        console.info("Running Electron client, skipping PolyProxy")
    }

    // import and load mod list
    this.modList.forEach(({ url, version }) => {importPolyMod({url, version})});
    }
}

export let polyMod = new allthemods();