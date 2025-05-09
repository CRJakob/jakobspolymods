function isElectron() {
    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }

    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }

    // Detect the user agent when the `nodeIntegration` option is set to false
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }

    return false;
}

function normalize(u) {
    return new URL(u).href.replace(/\/+$/, "");
}

function importPolyMod({ url: modurl, version: modversion }) {
    console.info(`⏳ Attempting to import mod: ${modurl}@${modversion}`);

    // get polyMods object
    const raw = window.localStorage.getItem("polyMods") || "[]";

    const normUrl = normalize(modurl);

    if (raw.includes(normUrl)) {
        // skip
        console.warn(`⚠️  Skipping import; already in polyMods: ${modurl}`);
    }
    else {
        // import mod
        pml.addMod({ base: modurl, version: modversion, loaded: true })
        .then(mod => {
            pml.setModLoaded(mod, true);
            console.info(`✅ Successfully imported: ${modurl}`);
        })
        .catch(err => {
            console.error(`❌ Failed to import ${modurl}:`, err);
        });
    }
}

export { normalize, importPolyMod, isElectron };