// @ts-ignore
import { PolyMod, PolyModLoader } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";

async function loadKeybinds() {
  const res = await fetch('/keybinds.txt');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const keybindsText = await res.text();
  return keybindsText;
  console.log('Raw keybinds:', keybindsText);
}

loadKeybinds().catch(console.error);


class PolySettings extends PolyMod {
    // Mod specific stuff
    #pml: PolyModLoader;
    #keybinds = loadKeybinds();

    init = (pmlInstance: PolyModLoader) => {
        this.#pml = pmlInstance;
    };
}

export const polyMod = new PolySettings();
