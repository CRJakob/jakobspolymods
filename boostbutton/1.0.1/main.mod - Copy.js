import { PolyMod, MixinType } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";

class boostbutton extends PolyMod {
    init = (pml) => {
        this.pml = pml;
        this.touchesphysics = true;
        this.boosting = false;
        this.boostAmount = 200;
        this.e = 4e3;
        pml.registerBindCategory("Boost Button Mod");
        pml.registerKeybind("Boost", "boost", "keydown", "KeyB", null, (e) => {
            this.boosting = true;
        });
        pml.registerClassMixin("lU.prototype", "controlCar", MixinType.INSERT, "reset:a", ', boost: ActivePolyModLoader.getMod("boostbutton").boosting');
        pml.registerSimWorkerFuncMixin("ammoFunc", MixinType.INSERT, "i.controls.left = e.data.left,", "i.controls.boost = e.data.boost,");
        pml.registerSimWorkerFuncMixin(
            "s_",
            MixinType.INSERT,
            "const l = this.getWheelInContact(0) || this.getWheelInContact(1) || this.getWheelInContact(2) || this.getWheelInContact(3);",
            (boost) => {
                console.log("button pressed")
                if (this.boosting === true && !pml.hasFinished()) {
                    l_(pml, UA, "f").applyEngineForce(this.e, this.boostAmount);
                    this.boosting = false;
                }
            }
        )
    }
}

export let polyMod = new boostbutton();
