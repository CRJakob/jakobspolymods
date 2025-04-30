import { PolyMod } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";

class allthemodsweb extends PolyMod {
    init = (pml) => {
        this.pml = pml;

        // Mod List
        this.modList = [
            { url: "https://pml.orangy.cfd/GameBuilder202/ErrorPopupMod/main",         version: "latest" },
            { url: "http://pml.orangy.cfd/0rangy/OrangysPolyMods/main/polyproxy",    version: "latest" },
            { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/3decspeed",    version: "latest" },
            { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/husplits",     version: "latest" },
            { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/ghosttoggle",  version: "latest" },
            { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/carswitcher",  version: "latest" },
            { url: "https://pml.orangy.cfd/CRJakob/jakobspolymods/main/goofycars/",   version: "latest" },
            { url: "https://pml.orangy.cfd/CRJakob/jakobspolymods/main/coolcars/",    version: "latest" }
        ];
        console.log(this.modList);
        //import and load mods
        this.modList.forEach(({ url, version }) => {
            // add mod and return id
            let addedMod = pml.addMod({
                base:   url,
                version: version,
                loaded: false
            }).then((mod) => pml.setModLoaded(mod, true));

            // load mods
            //console.log(addedMod);
            //window.polyModLoader.setModLoaded(addedMod, true);
        });
    }
}

export let polyMod = new allthemodsweb();
