// after (identical to carswitcher):
import { PolyMod } from "https://cdn.jsdelivr.net/gh/0rangy/PolyModLoader@0.5.0/PolyModLoader.js";

class goofycars extends PolyMod {
    init = (pml) => {
        pml.getMod("carswitcher").carModels.push(
            {
                "name": "Poly Huracan",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/huracan.glb`
            }
        )
    }
}

export let polyMod = new goofycars();
