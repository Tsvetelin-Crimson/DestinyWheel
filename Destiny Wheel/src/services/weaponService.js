import rollItems from "../services/rollService.js"
import exoticWeapons from "../data/exotics/weapons/exoticWeapons.js"
import kinetics from "../data/weaponTypes/kineticTypes.js"
import energies from "../data/weaponTypes/energyTypes.js"
import powers from "../data/weaponTypes/PowerTypes.js"


export function getExoticWeapon(){
    return rollItems(exoticWeapons);
}

export function getKinetic(){
    return rollItems(kinetics);
}

export function getEnergy(){
    return rollItems(energies);
}

export function getPower(){
    return rollItems(powers);
}
