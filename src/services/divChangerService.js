const resultList = document.querySelector('#results > ul');

export function changeClassDiv(currClass){
    resultList.children[0].textContent = currClass;
}

export function changeExoticArmorDiv(exoticArmor){
    resultList.children[2].textContent = exoticArmor;
}

export function changeExoticWeaponDiv(exoticWeapon){
    resultList.children[4].textContent = exoticWeapon;
}

export function changeKineticDiv(kinetic){
    resultList.children[6].textContent = kinetic;
}

export function changeEnergyDiv(energy){
    resultList.children[8].textContent = energy;
}

export function changePowerDiv(power){
    resultList.children[10].textContent = power;
}

export function changeSubClassDiv(subClass){
    resultList.children[12].textContent = subClass;
}

export function changeDisadvantageDiv(disadvantage){
    resultList.children[14].textContent = disadvantage.title;
    resultList.children[16].textContent = disadvantage.explanation;
}