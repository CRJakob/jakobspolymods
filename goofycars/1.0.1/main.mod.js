// use the same loader URL that the base mod uses:
import { PolyMod } from "https://cdn.jsdelivr.net/gh/0rangy/PolyModLoader@0.5.0/PolyModLoader.js";

class GoofyCars extends PolyMod {
  // tell the loader “load carswitcher first, then me”
  static get dependencies() { 
    return ["carswitcher"]; 
  }

  init(pml) {
    // IMPORTANT: call super so PolyMod can wire itself up
    super.init(pml);

    // grab the already‑loaded car‑switcher instance by its mod‑id
    const switcher = pml.getMod("carswitcher");

    // now safely append your new car
    switcher.carList.push({
      name: "Poly Huracan",
      url: `${this.modBaseUrl}/${this.modVersion}/assets/huracan.glb`
    });
  }
}

// finally export your mod instance
export let polyMod = new GoofyCars();
