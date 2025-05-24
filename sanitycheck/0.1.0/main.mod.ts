// @ts-ignore
import { PolyMod, PolyModLoader, SettingType } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/0.5.0/PolyModLoader.js";


class sanitycheck extends PolyMod {
    // Mod specific stuff
    #pml: PolyModLoader;
    #audioVolume: number;
    modBaseUrl!: string;
    modVersion!: string;

    init = (pmlInstance: PolyModLoader) => {
        this.#pml = pmlInstance;
        this.#audioVolume = 1;
        
        this.#pml.registerSettingCategory("Sanity Check");
        this.#pml.registerSetting("Sanity check volume", "sanityCheckVolume", SettingType.SLIDER, 1, null);

        
    };

    postInit = () => {
        this.#pml.soundManager.registerSound('line1', `${this.modBaseUrl}/${this.modVersion}/assets/line1.flac`);
        this.#pml.soundManager.registerSound('line2', `${this.modBaseUrl}/${this.modVersion}/assets/line2.flac`);
        this.#pml.soundManager.registerSound('line3', `${this.modBaseUrl}/${this.modVersion}/assets/line3.flac`);
        this.#pml.soundManager.registerSound('line4', `${this.modBaseUrl}/${this.modVersion}/assets/line4.flac`);
        this.#pml.soundManager.registerSound('line5', `${this.modBaseUrl}/${this.modVersion}/assets/line5.flac`);
        this.#pml.soundManager.registerSound('line6', `${this.modBaseUrl}/${this.modVersion}/assets/line6.flac`);

        const audioNames = ['line1', 'line2', 'line3', 'line4', 'line5', 'line6'];
        this.#audioVolume = this.#pml.getSetting("sanityCheckVolume")

        // Play a random line every 30 minutes (30 * 60 * 1000 ms)
        setInterval(() => {
            const randomIndex = Math.floor(Math.random() * audioNames.length);
            const selectedAudio = audioNames[randomIndex];
            this.#pml.soundManager.playSound(selectedAudio, this.#audioVolume);
            console.log(`playing sound ${selectedAudio}`)
        }, 1 * 1 * 1000);
    }
}

export const polyMod = new sanitycheck();
