import rollItems from "../services/rollService.js"
import hunterExoticArmor from "../data/exotics/armors/hunter.js"
import warlockExoticArmor from "../data/exotics/armors/warlock.js"
import titanExoticArmor from "../data/exotics/armors/titan.js"
import subClasses from "../data/subclasses/subClassTypes.js"

const resultList = document.querySelector('#results > ul');
const anyCheckbox = document.getElementById('anyCheckbox');
const hunterCheckbox = document.getElementById('hunterCheckbox');
const warlockCheckbox = document.getElementById('warlockCheckbox');
const titanCheckbox = document.getElementById('titanCheckbox');

export function getExoticArmor(reroll = false) {
    let allowedExoticArmors = []
    if (reroll) {
        let curClass = resultList.children[0].textContent;
        if (curClass == "Hunter") {
            return rollItems(hunterExoticArmor)

        } else if (curClass == "Warlock") {
            return rollItems(warlockExoticArmor)

        } else if (curClass == "Titan") {
            return rollItems(titanExoticArmor)

        } else {
            return "";
        }
    } else {
        if (anyCheckbox.checked) {
            allowedExoticArmors.push(...hunterExoticArmor, ...warlockExoticArmor, ...titanExoticArmor);

            return rollItems(allowedExoticArmors)
        } else {
            if (hunterCheckbox.checked) {
                allowedExoticArmors.push(...hunterExoticArmor);
            }

            if (warlockCheckbox.checked) {
                allowedExoticArmors.push(...warlockExoticArmor);
            }

            if (titanCheckbox.checked) {
                allowedExoticArmors.push(...titanExoticArmor);
            }

            return rollItems(allowedExoticArmors)
        }
    }
}

export function checkCheckboxes() {
    if (!anyCheckbox.checked && !hunterCheckbox.checked && !warlockCheckbox.checked && !titanCheckbox.checked) {
        return true
    }
    return false;
}

export function getClass(exoticArmor) {
    if (hunterExoticArmor.includes(exoticArmor)) {
        return "Hunter";
    } else if (warlockExoticArmor.includes(exoticArmor)) {
        return "Warlock";
    } else if (titanExoticArmor.includes(exoticArmor)) {
        return "Titan";
    } else {
        throw new Error('Armor doesn\'t exist or is null');
    }
}


export function getSubclass() {
    let subClass = rollItems(subClasses);
    if (subClass != "Stasis") {
        let subClassVariation = rollItems(["Middle", "Top", "Bottom"])
        subClass += " " + subClassVariation;
    }
    return subClass;
}