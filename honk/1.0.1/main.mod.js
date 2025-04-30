import { PolyMod, MixinType } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";

class honkmod extends PolyMod {
    init = (pml) => {
        this.pml = pml;
    }
    postInit = (pml) => {
        this.pml = pml;
        pml.soundManager.registerSound("honk", `${this.modBaseUrl}/${this.modVersion}/assets/honk.flac`);
        this.audioVolume = pml.getSetting(SoundEffectVolume);
        honk.volume = this.audioVolume;
        pml.registerBindCategory("Honk Mod");
        pml.registerKeybind("Honk", "honk", "keydown", "KeyI", null, function(h) {pml.soundManager.playSound("honk", this.audioVolume)});
    }
}

export let polyMod = new honkmod();
