export default function rollItems(items){
    let indexForItem = getRndInteger(0, items.length);
    return items[indexForItem];
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}