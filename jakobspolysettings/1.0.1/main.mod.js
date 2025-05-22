var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _PolySettings_pml;
// @ts-ignore
import { PolyMod } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";
class PolySettings extends PolyMod {
    constructor() {
        super(...arguments);
        // Mod specific stuff
        _PolySettings_pml.set(this, void 0);
        this.init = (pmlInstance) => {
            __classPrivateFieldSet(this, _PolySettings_pml, pmlInstance, "f");
        };
    }
}
_PolySettings_pml = new WeakMap();
export const polyMod = new PolySettings();
