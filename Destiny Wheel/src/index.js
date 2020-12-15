import hunterExotics from "./data/exotics/hunter.js"
import warlockExotics from "./data/exotics/warlock.js"


const rollButton = document.getElementById('rollButton');
const anyCheckbox = document.getElementById('anyCheckbox');
const hunterCheckbox = document.getElementById('hunterCheckbox');
const warlockCheckbox = document.getElementById('warlockCheckbox');
const titanCheckbox = document.getElementById('titanCheckbox');

rollButton.addEventListener('click', roll)

function roll(e){
    // e.preventDefault();  // if need be re-add
    console.log(hunterExotics);
    let allowedExoticArmors = []
    if (anyCheckbox.checked) {
        console.log("in if for anycheck");


        
    } else {
        if (hunterCheckbox.checked) {
            console.log("in if for hunter");
            allowedExoticArmors.push(...hunterExotics);
        }

        if (warlockCheckbox.checked) {
            console.log("in if for warlock");
            allowedExoticArmors.push(...warlockExotics);
            
        }

        if (titanCheckbox.checked) {
            console.log("in if for titan");
             
        }

        let indexForArmor = getRndInteger(0, allowedExoticArmors.length);
        console.log(allowedExoticArmors[indexForArmor]);
        return;
    }
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}