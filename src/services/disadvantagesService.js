import rollItems from "../services/rollService.js"
import { fetchJson } from "../services/helperFunctions.js"

const disadvantageCheckbox = document.getElementById('disadvantage');

export async function getDissadvantage(reroll = false) {
    let disadvantages = await fetchJson("/src/data/disadvantages/disadvantages.json"); 
    let disadvantage = {
        title: "No Disadvantage",
        explanation: "No Disadvantage"
    }
    if (!reroll) {
        if (disadvantageCheckbox.checked) {
            disadvantage = rollItems(disadvantages);
        }
    } else {
        disadvantage = rollItems(disadvantages);
    }
    
    return disadvantage;
}