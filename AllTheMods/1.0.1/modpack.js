import { PolyMod } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";

class allthemods extends PolyMod {
    init = (pml) => {
        this.pml = pml;

        // check for mods in localStorage
        const raw        = window.localStorage.getItem("polyMods");
        const storedMods = raw ? JSON.parse(raw) : [];
        const loadedBases = new Set(storedMods.map(m => m.base));

        // function to detect if run in Electron, ripped from is-electron library
        function isElectron() {
            // Renderer process
            if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
                return true;
            }
            // Main process
            if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
                return true;
            }
            // Detect the user agent when the `nodeIntegration` option is set to false
            if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
                return true;
            }
            return false;
        }

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
        this.includeProxy = !0

        // run Electron check
        let runningElectron = isElectron();

        // function for loading mods
        function importPolyMod({ url: modurl, version: modversion }) {
            console.info(`⏳ Attempting to import mod: ${modurl}@${modversion}`);
            
            

            // skip if mod already installed
            if (loadedBases.has(modurl))
            {
                console.warn(`⚠️  Skipping import; already in polyMods: ${modurl}`);
                return;
            }

            pml.addMod({
                base:    modurl,
                version: modversion,
                loaded:  true
            })
            .then(mod => {
               pml.setModLoaded(mod, true);
               loadedBases.add(modurl);
               console.info(`✅ Successfully imported: ${modurl}`);
            })
            .catch(err => {
               console.error(`❌ Failed to import ${modurl}:`, err);
            });
        }

        // install polyProxy mod if on Browser
        if(this.includeProxy === true && runningElectron === false) 
        {
            console.info("Running web client, loading PolyProxy")
            importPolyMod(this.polyProxy)
        }
        else
        {
            console.info("Running Electron client, skipping PolyProxy")
        }

        // import and load mod list
        this.modList.forEach(({ url, version }) => {importPolyMod({url, version})});
    }
}

export let polyMod = new allthemods();
