import { PolyMod, MixinType } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";

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
                "name": "Mclaren F1 GT",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/mclaren.glb`
            },
            {
                "name": "Nissan Skyline GTR",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/nissan.glb`
            },
            {
                "name": "AE86",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/driftcar.glb`
            },
            {
                "name": "Cybertruck",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/cybertruck.glb`
            }
        )
    }
}

export let polyMod = new coolcars();
