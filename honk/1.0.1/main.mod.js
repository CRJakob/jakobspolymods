import { PolyMod, MixinType } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";

class honkmod extends PolyMod {
    init = (pml) => {
        this.pml = pml;
        var honk = new Audio(`${this.modBaseUrl}/${this.modVersion}/assets/honk.mp3`);
        //honk.volume = pml.SoundEffectVolume;
        pml.registerBindCategory("Honk Mod");
        pml.registerKeybind("Honk", "honk", "keydown", "KeyI", null, function(h) {console.log(pml.SoundEffectVolume);});
    }
}

export let polyMod = new honkmod();
