import { PolyMod, MixinType } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";

class goofycars extends PolyMod {
    dependencyinit(mod) {
        if(mod.id == 'carswitcher') {
            mod.carList.push({
                "name": "Poly Huracan",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/huracan.glb`
            })
        }
    }
}

export let polyMod = new goofycars();