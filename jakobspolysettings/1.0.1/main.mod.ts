// @ts-ignore
import { PolyMod, PolyModLoader } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";
// @ts-ignore
import { setKeybinds, setSettings } from "https://pml.orangy.cfd/CRJakob/jakobspolymods/dev/settingsTools.js";

class PolySettings extends PolyMod {
    // Mod specific stuff
    #pml: PolyModLoader;

    init = (pmlInstance: PolyModLoader) => {
        this.#pml = pmlInstance;
    };
}

export const polyMod = new PolySettings();
