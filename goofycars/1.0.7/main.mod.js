import { PolyMod, MixinType } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";

class goofycars extends PolyMod {
    init = (pml) => {
        pml.getMod("carswitcher").carModels.push(
            {
                "name": "Dababy Car",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/dababy.glb`,
                "sound": "audio/engine.flac"
            },
            {
                "name": "Hitbox Car",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/hitbox.glb`,
                "sound": "audio/engine.flac"
            },
            {
                "name": "Octane",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/octane.glb`,
                "sound": "audio/engine.flac"
            },
            {
                "name": "Wireframe",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/wireframe.glb`,
                "sound": "audio/engine.flac"
            },
            {
                "name": "Lego F1 Car",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/legocar.glb`,
                "sound": "audio/engine.flac"
            },
            {
                "name": "Checkpoint",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/checkpoint.glb`,
                "sound": "audio/engine.flac"
            },
            {
                "name": "Golf Cart",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/golfcart.glb`,
                "sound": "audio/engine.flac"
            },
            {
                "name": "Minecart",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/minecart.glb`,
                "sound": `${this.modBaseUrl}/${this.modVersion}/assets/minecart.flac`
            }
        )
    }
}

export let polyMod = new goofycars();
