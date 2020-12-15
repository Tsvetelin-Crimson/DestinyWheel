import rollItems from "../services/rollService.js"
import disadvantages from "../data/disadvantages/disadvantages.js"

const disadvantageCheckbox = document.getElementById('disadvantage');

export function getDissadvantage(reroll = false) {
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