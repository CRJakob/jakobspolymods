import { PolyMod, MixinType } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";

class f1cars extends PolyMod {
    init = (pml) => {
        pml.getMod("carswitcher").carModels.push(
            {
                "name": "Mclaren MP4/5",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/mclarenmp4_5.glb`
            },
            {
                "name": "Mercedes F1 W14",
                "url": `${this.modBaseUrl}/${this.modVersion}/assets/mercedesW14.glb`
            }
        )
    }
}

export let polyMod = new f1cars();
