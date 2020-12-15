export default function rollItems(items){
    let indexForArmor = getRndInteger(0, items.length);
    return items[indexForArmor];
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}