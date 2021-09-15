import rollItems from "../services/rollService.js";
import { fetchJson } from "../services/helperFunctions.js";

export async function getExoticWeapon(){
    let exoticWeapons = await fetchJson("/src/data/exotics/weapons/weapons.json");
    return rollItems(exoticWeapons);
}

export async function getKinetic(){
    let kinetics = await fetchJson("/src/data/weaponTypes/kinetic.json");
    return rollItems(kinetics);
}

export async function getEnergy(){
    let energies = await fetchJson("/src/data/weaponTypes/energy.json");
    return rollItems(energies);
}

export async function getPower(){
    let powers = await fetchJson("/src/data/weaponTypes/power.json");
    return rollItems(powers);
}
