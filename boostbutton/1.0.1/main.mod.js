import { PolyMod, MixinType } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";

class boostbutton extends PolyMod {
    init = (pml) => {
        this.pml = pml;
        this.touchesphysics = true;
        this.boosting = false;
        console.log("Mod Loaded");
        pml.registerBindCategory("Boost Button Mod");
        pml.registerKeybind("Boost", "boost", "keydown", "KeyB", null, function(e) { console.log("Button Pressed"); });
        pml.registerClassMixin("lU.prototype", "ControlCar", MixinType.INSERT, "reset: a", ",boost: ActivePolyModLoader.getMod('boostbutton').boosting");
        //pml.registerSimWorkerFuncMixin("ammoFunc", MixinType.INSERT, "i.controls.left = e.data.left,", "i.controls.boost = e.data.boost,");
    }
}

export let polyMod = new boostbutton();
