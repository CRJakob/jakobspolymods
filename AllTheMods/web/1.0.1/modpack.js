import { PolyMod } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";

class allthemodsweb extends PolyMod {
    init = (pml) => {
        this.pml = pml;
        // Mod List
        this.modList = [
            { url: "https://pml.orangy.cfd/GameBuilder202/ErrorPopupMod/main", version: "latest" },
            { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/polyproxy", version: "latest" },
            { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/3decspeed", version: "latest" },
            { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/husplits", version: "latest" },
            { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/ghosttoggle", version: "latest" },
            { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/carswitcher", version: "latest" },
            { url: "https://pml.orangy.cfd/CRJakob/jakobspolymods/main/goofycars/", version: "latest" },
            { url: "https://pml.orangy.cfd/CRJakob/jakobspolymods/main/coolcars/", version: "latest" }
        ];
        console.log(this.modList);
        let allloadedmods = pml.getAllMods();
        console.log(allloadedmods);

        // function for loading mods
        function importMod({ url: modurl, version: modversion }) {
            window.polyModLoader.addMod({
                base:    modurl,
                version: modversion,
                loaded:  true
            }).then((mod) => pml.setModLoaded(mod, true));
        }
        // import and load mods
        this.modList.forEach(({ url, version }) => {importMod({url, version})});

        // unload Modpack after imports to prevent duplicate mod errors
        pml.setModLoaded(this, false);
    }
}

export let polyMod = new allthemodsweb();
