// after (identical to carswitcher):
import { PolyMod } from "https://cdn.jsdelivr.net/gh/0rangy/PolyModLoader@0.5.0/PolyModLoader.js";

class GoofyCars extends PolyMod {
  dependencyInit(mod) {
    if (mod.id == 'carswitcher') {
      // now this will actually run
      console.log(mod.carModels);
      mod.carModels.push({
        "name"": "Poly Huracan",
        "url": `${this.modBaseUrl}/${this.modVersion}/assets/huracan.glb`
      });
    }
  }
}

export let polyMod = new GoofyCars();
