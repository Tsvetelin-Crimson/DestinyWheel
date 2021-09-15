import rollItems from "../services/rollService.js";
import { fetchJson } from "../services/helperFunctions.js";

const resultList = document.querySelector('#results > ul');
const anyCheckbox = document.getElementById('anyCheckbox');
const hunterCheckbox = document.getElementById('hunterCheckbox');
const warlockCheckbox = document.getElementById('warlockCheckbox');
const titanCheckbox = document.getElementById('titanCheckbox');

const hunterJsonPath = "/src/data/exotics/armors/hunter.json";
const warlockJsonPath = "/src/data/exotics/armors/warlock.json";
const titanJsonPath = "/src/data/exotics/armors/titan.json";
const subClassesJsonPath = "/src/data/subClasses/subClasses.json";

export async function getExoticArmor(reroll = false) {
    let allowedExoticArmors = []
    if (reroll) {
        let curClass = resultList.children[0].textContent;
        if (curClass == "Hunter") {
            let hunterExoticArmor = await fetchJson(hunterJsonPath);

            return rollItems(hunterExoticArmor)
        } else if (curClass == "Warlock") {
            let warlockExoticArmor = await fetchJson(warlockJsonPath);

            return rollItems(warlockExoticArmor)
        } else if (curClass == "Titan") {
            let titanExoticArmor = await fetchJson(titanJsonPath);

            return rollItems(titanExoticArmor)
        } else {
            return "";
        }
    } else {
        let hunterExoticArmor = [];
        let warlockExoticArmor = [];
        let titanExoticArmor = [];
        
        if (anyCheckbox.checked) {
            hunterExoticArmor = await fetchJson(hunterJsonPath);
            warlockExoticArmor = await fetchJson(warlockJsonPath);
            titanExoticArmor = await fetchJson(titanJsonPath);

            allowedExoticArmors.push(...hunterExoticArmor, ...warlockExoticArmor, ...titanExoticArmor);

            return rollItems(allowedExoticArmors)
        } else {
            if (hunterCheckbox.checked) {
                hunterExoticArmor = await fetchJson(hunterJsonPath);
                allowedExoticArmors.push(...hunterExoticArmor);
            }

            if (warlockCheckbox.checked) {
                warlockExoticArmor = await fetchJson(warlockJsonPath);
                allowedExoticArmors.push(...warlockExoticArmor);
            }

            if (titanCheckbox.checked) {
                titanExoticArmor = await fetchJson(titanJsonPath);
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

export async function getClass(exoticArmor) {
    let hunterExoticArmor = await fetchJson(hunterJsonPath);
    let warlockExoticArmor = await fetchJson(warlockJsonPath);
    let titanExoticArmor = await fetchJson(titanJsonPath);

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


export async function getSubclass() {
    let subClasses = await fetchJson(subClassesJsonPath);
    let subClass = rollItems(subClasses);

    if (subClass != "Stasis") {
        let subClassVariation = rollItems(["Middle", "Top", "Bottom"])
        subClass += " " + subClassVariation;
    }
    return subClass;
}