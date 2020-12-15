import { getExoticWeapon, getKinetic, getEnergy, getPower } from "./services/weaponService.js"
import { getClass, getExoticArmor, getSubclass, checkCheckboxes } from "./services/classRollService.js"
import { getDissadvantage } from "./services/disadvantagesService.js"

document.getElementById('rollButton').addEventListener('click', roll);
const resultList = document.querySelector('#results > ul');
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


function changeClassDiv(currClass){
    resultList.children[0].textContent = currClass;
}

function changeExoticArmorDiv(exoticArmor){
    resultList.children[2].textContent = exoticArmor;
}

function changeExoticWeaponDiv(exoticWeapon){
    resultList.children[4].textContent = exoticWeapon;
}

function changeKineticDiv(kinetic){
    resultList.children[6].textContent = kinetic;
}

function changeEnergyDiv(energy){
    resultList.children[8].textContent = energy;
}

function changePowerDiv(power){
    resultList.children[10].textContent = power;
}

function changeSubClassDiv(subClass){
    resultList.children[12].textContent = subClass;
}

function changeDisadvantageDiv(disadvantage){
    resultList.children[14].textContent = disadvantage.title;
    resultList.children[16].textContent = disadvantage.explanation;
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
