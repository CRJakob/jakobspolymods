import { PolyMod } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";

class allthemodsweb extends PolyMod {
    init = (pml) => {
        this.pml = pml;

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

        // debugging
        console.log(this.modList);
        let allloadedmods = pml.getAllMods();
        console.log(allloadedmods);

        // run Electron check
        let runningElectron = isElectron();
        console.log(runningElectron);

        // function for loading mods
        function importPolyMod({ url: modurl, version: modversion }) {
            console.info(`⏳ Attempting to import mod: ${modurl}@${modversion}`);
            
            // check for mods in localStorage
            const raw = window.localStorage.getItem("polyMods");
            const mods = raw
            ? /** @type {{base:string,version:string,loaded:boolean}[]} */(JSON.parse(raw)) : [];

            // skip if mod already installed
            if (mods.some(m => m.base === modurl))
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
               console.info(`✅ Successfully imported: ${modurl}`);
            })
            .catch(err => {
               console.error(`❌ Failed to import ${modurl}:`, err);
            });
        }

        // install polyProxy mod if on Browser
        if(this.includeProxy === true && runningElectron === false) {importPolyMod(this.polyProxy)}

        // import and load mod list
        this.modList.forEach(({ url, version }) => {importPolyMod({url, version})});

        // unload Modpack mod after imports to prevent duplicate mod errors
        pml.setModLoaded(this, false);
    }
}

export let polyMod = new allthemodsweb();
