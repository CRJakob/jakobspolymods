var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _sanitycheck_pml, _sanitycheck_audioVolume;
// @ts-ignore
import { PolyMod, SettingType } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";
class sanitycheck extends PolyMod {
    constructor() {
        super(...arguments);
        // Mod specific stuff
        _sanitycheck_pml.set(this, void 0);
        _sanitycheck_audioVolume.set(this, void 0);
        this.init = (pmlInstance) => {
            __classPrivateFieldSet(this, _sanitycheck_pml, pmlInstance, "f");
            __classPrivateFieldSet(this, _sanitycheck_audioVolume, 1, "f");
            __classPrivateFieldGet(this, _sanitycheck_pml, "f").registerSettingCategory("Sanity Check");
            __classPrivateFieldGet(this, _sanitycheck_pml, "f").registerSetting("Sanity check volume", "sanityCheckVolume", SettingType.SLIDER, 1, null);
        };
        this.postInit = () => {
            __classPrivateFieldGet(this, _sanitycheck_pml, "f").soundManager.registerSound('line1', `${this.modBaseUrl}/${this.modVersion}/assets/line1.flac`);
            __classPrivateFieldGet(this, _sanitycheck_pml, "f").soundManager.registerSound('line2', `${this.modBaseUrl}/${this.modVersion}/assets/line2.flac`);
            __classPrivateFieldGet(this, _sanitycheck_pml, "f").soundManager.registerSound('line3', `${this.modBaseUrl}/${this.modVersion}/assets/line3.flac`);
            __classPrivateFieldGet(this, _sanitycheck_pml, "f").soundManager.registerSound('line4', `${this.modBaseUrl}/${this.modVersion}/assets/line4.flac`);
            __classPrivateFieldGet(this, _sanitycheck_pml, "f").soundManager.registerSound('line5', `${this.modBaseUrl}/${this.modVersion}/assets/line5.flac`);
            __classPrivateFieldGet(this, _sanitycheck_pml, "f").soundManager.registerSound('line6', `${this.modBaseUrl}/${this.modVersion}/assets/line6.flac`);
            const audioNames = ['line1', 'line2', 'line3', 'line4', 'line5', 'line6'];
            __classPrivateFieldSet(this, _sanitycheck_audioVolume, __classPrivateFieldGet(this, _sanitycheck_pml, "f").getSetting("sanityCheckVolume"), "f");
            // Play a random line every 30 minutes (30 * 60 * 1000 ms)
            setInterval(() => {
                const randomIndex = Math.floor(Math.random() * audioNames.length);
                const selectedAudio = audioNames[randomIndex];
                __classPrivateFieldGet(this, _sanitycheck_pml, "f").soundManager.playSound(selectedAudio, __classPrivateFieldGet(this, _sanitycheck_audioVolume, "f"));
                console.log(`playing sound ${selectedAudio}`);
            }, 1 * 1 * 1000);
        };
    }
}
_sanitycheck_pml = new WeakMap(), _sanitycheck_audioVolume = new WeakMap();
export const polyMod = new sanitycheck();
