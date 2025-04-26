import { PolyMod, MixinType } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";

class goofycars extends PolyMod {
    init = (pml) => {
        pml.getMod("carswitcher").carModels.push(
            {
                "name": "Dababy Car",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/dababy.glb`
            },
            {
                "name": "Hitbox Car",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/hitbox.glb`
            },
            {
                "name": "Octane",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/octane.glb`
            },
            {
                "name": "Wireframe",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/wireframe.glb`
            },
            {
                "name": "Lego F1 Car",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/legocar.glb`
            },
            {
                "name": "Checkpoint",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/checkpoint.glb`
            },
            {
                "name": "Golf Cart",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/golfcart.glb`
            }
        )
    }
}

export let polyMod = new goofycars();
