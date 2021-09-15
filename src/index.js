import { getExoticWeapon, getKinetic, getEnergy, getPower } from "./services/weaponService.js"
import { getClass, getExoticArmor, getSubclass, checkCheckboxes } from "./services/classRollService.js"
import { getDissadvantage } from "./services/disadvantagesService.js"
import { changeClassDiv, changeDisadvantageDiv, changeEnergyDiv, changeExoticArmorDiv, changeExoticWeaponDiv, changeKineticDiv, changePowerDiv, changeSubClassDiv } from "./services/divChangerService.js"

document.getElementById('rollButton').addEventListener('click', roll);

const errorDiv = document.getElementById("rollErrorDiv");

async function roll(e) {
    e.preventDefault();
    if (!checkCheckboxes()) {
        let exoticArmor = await getExoticArmor()
        let currClass = await getClass(exoticArmor)

        let exoticWeapon = await getExoticWeapon();

        let kinetic = await getKinetic();
        let energy = await getEnergy();
        let power = await getPower();

        let subClass = await getSubclass();

        let disadvantage = await getDissadvantage()

        ChangeResultDiv(currClass, exoticArmor, exoticWeapon, kinetic, energy, power, subClass, disadvantage);
    } else {
        const errorMessage = "You must pick at least one class to be able to roll";
        errorDiv.textContent = errorMessage;
        errorDiv.hidden = false;
        setTimeout(() => {
            errorDiv.hidden = true;
            errorDiv.textContent = "";
        }, 5000);
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

document.getElementById('armorExoticReRoll').addEventListener('click', async () => {
    let exoticArmor = await getExoticArmor(true);
    if (exoticArmor != "") {
     changeExoticArmorDiv(exoticArmor);
    }
});

document.getElementById('exoticWeaponReRoll').addEventListener('click', async () => {
    let exoticWeapon = await getExoticWeapon();
    changeExoticWeaponDiv(exoticWeapon);
});

document.getElementById('kineticReRoll').addEventListener('click', async () => {
    let kinetic = await getKinetic();
    changeKineticDiv(kinetic);
});

document.getElementById('energyReRoll').addEventListener('click', async () => {
    let energy = await getEnergy();
    changeEnergyDiv(energy);
});

document.getElementById('powerReRoll').addEventListener('click', async () => {
    let power = await getPower();
    changePowerDiv(power);
});

document.getElementById('superReRoll').addEventListener('click', async () => {
    let subclass = await getSubclass();
    changeSubClassDiv(subclass);
});;
document.getElementById('disadvantageReRoll').addEventListener('click', async () => {
    let disadvantage = await getDissadvantage(true);
    changeDisadvantageDiv(disadvantage);
});