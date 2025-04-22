// after (identical to carswitcher):
import { PolyMod } from "https://cdn.jsdelivr.net/gh/0rangy/PolyModLoader@0.5.0/PolyModLoader.js";

class coolcars extends PolyMod {
    init = (pml) => {
        pml.getMod("carswitcher").carModels.push(
            {
                "name": "Audi R8",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/audir8.glb`
            },
            {
                "name": "Countach",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/countach.glb`
            },
            {
                "name": "Koenigsegg",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/koenigsegg.glb`
            },
            {
                "name": "SVJ",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/svj.glb`
            },
            {
                "name": "Mclaren F1",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/mclaren.glb`
            },
            {
                "name": "Nissan Skyline GTR",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/nissan.glb`
            },

        )
    }
}

export let polyMod = new coolcars();
