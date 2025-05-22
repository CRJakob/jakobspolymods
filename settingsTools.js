function setKeybinds(keybinds) {
    window.localStorage.setItem("polytrack_v4_prod_key_bindings", keybinds);
}

function setSettings(settings) {
    window.localStorage.setItem("polytrack_v4_prod_settings", settings);
}

export { setKeybinds, setSettings };