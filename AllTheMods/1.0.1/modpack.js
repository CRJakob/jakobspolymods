import { PolyMod } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";
import { normalize, importPolyMod, isElectron } from "https://pml.orangy.cfd/CRJakob/jakobspolymods/main/modpackTools.js";

class allthemods extends PolyMod {
  init = (pml) => {
    // do not touch this
    this.pml = pml;

    // include the polyProxy mod, true/false
    this.includeProxy = true;

    // Mod List
    // { url: "the mod's url", version: "the mod version, use latest for newest mod version" } 
    this.modList = [
      { url: "https://pml.orangy.cfd/GameBuilder202/ErrorPopupMod/main", version: "latest" },
      { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/3decspeed", version: "latest" },
      { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/husplits", version: "latest" },
      { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/ghosttoggle", version: "latest" },
      { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/carswitcher", version: "latest" },
      { url: "https://pml.orangy.cfd/CRJakob/jakobspolymods/main/goofycars/", version: "latest" },
      { url: "https://pml.orangy.cfd/CRJakob/jakobspolymods/main/coolcars/", version: "latest" }
    ];



    // PolyProxy mod
    this.polyProxy = { url: "https://pml.orangy.cfd/0rangy/OrangysPolyMods/main/polyproxy", version: "latest" };
    
    // run Electron check
    let runningElectron = isElectron();

    // install polyProxy mod if on Browser
    if(this.includeProxy === true && runningElectron === false) {
        console.info("Running web client, loading PolyProxy")
        importPolyMod(this.polyProxy)
    } else {
        console.info("Running Electron client, skipping PolyProxy")
    }

    // import and load mod list
    this.modList.forEach(({ url, version }) => {importPolyMod({url, version})});
  }
}

export let polyMod = new allthemods();