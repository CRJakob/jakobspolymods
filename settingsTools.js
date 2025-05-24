import { readFileSync } from 'fs'

const fs = require('fs');
const path = require('path')

function readFile(path){
    return fs.readFileSync(path.resolve(path), 'utf-8');
}

function setKeybinds(filePath) {
    this.keybinds = readFile(filePath);
    window.localStorage.setItem("polytrack_v4_prod_key_bindings", this.keybinds);
}

function setSettings(filePath) {
    this.settings = readFile(filePath);
    window.localStorage.setItem("polytrack_v4_prod_settings", this.settings);
}

export { setKeybinds, setSettings };