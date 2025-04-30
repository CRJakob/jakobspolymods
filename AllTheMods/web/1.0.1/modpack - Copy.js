import { PolyMod } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";

class allthemodsweb extends PolyMod {
    init = (pml) => {
        this.pml = pml;
        // Mod List
        this.modList = [
            { url: "https://pml.orangy.cfd/GameBuilder202/ErrorPopupMod/main", version: "latest"},
            { url: "http://pml.orangy.cfd/0rangy/OrangysPolyMods/main/polyproxy", version: "latest"},
            { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/3decspeed", version: "latest"},
            { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/husplits", version: "latest"},
            { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/ghosttoggle", version: "latest"},
            { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/carswitcher", version: "latest"},
            { url: "https://pml.orangy.cfd/CRJakob/jakobspolymods/main/goofycars/", version: "latest"},
            { url: "https://pml.orangy.cfd/CRJakob/jakobspolymods/main/coolcars/", version: "latest"}
        ];
        console.log(this.modList);
        // Destructure {url, version} right in the parameter list
        function importMod({ url: modurl, version: modversion }) {
            pml.addMod({
                base:    modurl,
                version: modversion,
                loaded:  false
            });
            pml.setModLoaded()
        }
        // import each mod
        this.modList.forEach(importMod);
    }
}

export let polyMod = new allthemodsweb();
