import { getExoticWeapon, getKinetic, getEnergy, getPower } from "./services/weaponService.js"
import { getClass, getExoticArmor, getSubclass, checkCheckboxes } from "./services/classRollService.js"
import { getDissadvantage } from "./services/disadvantagesService.js"
import { changeClassDiv, changeDisadvantageDiv, changeEnergyDiv, changeExoticArmorDiv, changeExoticWeaponDiv, changeKineticDiv, changePowerDiv, changeSubClassDiv } from "./services/divChangerService.js"

document.getElementById('rollButton').addEventListener('click', roll);

function roll(e) {
    e.preventDefault();
    if (!checkCheckboxes()) {
        let exoticArmor = getExoticArmor()
        let currClass = getClass(exoticArmor)

        let exoticWeapon = getExoticWeapon();

        let kinetic = getKinetic();
        let energy = getEnergy();
        let power = getPower();

        let subClass = getSubclass();

        let disadvantage = getDissadvantage()

        ChangeResultDiv(currClass, exoticArmor, exoticWeapon, kinetic, energy, power, subClass, disadvantage);
    }
}

function ChangeResultDiv(currClass, exoticArmor, exoticWeapon, kinetic, energy, power, subClass, disadvantage) {
    changeClassDiv(currClass);
    changeExoticArmorDiv(exoticArmor);
    changeExoticWeaponDiv(exoticWeapon);
    changeKineticDiv(kinetic);
    changeEnergyDiv(energy);   
    changePowerDiv(power);
    changeSubClassDiv(subClass);
    changeDisadvantageDiv(disadvantage);
}

document.getElementById('armorExoticReRoll').addEventListener('click', () => {
    let exoticArmor = getExoticArmor(true);
    if (exoticArmor != "") {
     changeExoticArmorDiv(exoticArmor);
    }
});

document.getElementById('exoticWeaponReRoll').addEventListener('click', () => {
    let exoticWeapon = getExoticWeapon();
    changeExoticWeaponDiv(exoticWeapon);
});

document.getElementById('kineticReRoll').addEventListener('click', () => {
    let kinetic = getKinetic();
    changeKineticDiv(kinetic);
});

document.getElementById('energyReRoll').addEventListener('click', () => {
    let energy = getEnergy();
    changeEnergyDiv(energy);
});

document.getElementById('powerReRoll').addEventListener('click', () => {
    let power = getPower();
    changePowerDiv(power);
});

document.getElementById('superReRoll').addEventListener('click', () => {
    let subclass = getSubclass();
    changeSubClassDiv(subclass);
});;
document.getElementById('disadvantageReRoll').addEventListener('click', () => {
    let disadvantage = getDissadvantage(true);
    changeDisadvantageDiv(disadvantage);
});
