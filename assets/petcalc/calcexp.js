// Required experience indexed to match level
const expValues = [0, 95, 120, 150, 180, 215, 255, 295, 340, 385, 550, 670, 800, 945, 1105, 1275, 1455, 1645, 1850, 2070, 2665, 3125, 3625, 4155, 4725, 5330, 5970, 6650, 7360, 8110, 10230, 11890, 13665, 15565, 17580, 19715, 21975, 24350, 26850, 29465, 36040, 41815, 48200, 55175, 62770, 70980, 79810, 89270, 99385, 110155, 130935, 145000, 173670, 199045, 227240, 258285, 292325, 329445, 369720, 413260, 826525, 1653050, 2479575, 3306100, 4132625, 4959150, 5785675, 6612200, 7438725, 8265250];

const lv = document.getElementById("level");
const exp = document.getElementById("currentExp");
const lvGoal = document.getElementById("levelGoal");
const expGoal = document.getElementById("expNeededText");


const calcExp = () => {
    
    let count = 0; // This will sum up exp per level for a given range.
    for (let i = parseInt(lv.value, 10); i <= parseInt(lvGoal.value, 10) - 1; i++) {
        count = parseInt(expValues[i], 10) + count;
    };
    count = count - parseInt(exp.value, 10);

    expGoal.innerText = parseInt(count).toLocaleString("en-US");

    // EXP amounts for pills
    const purity = 50000;
    const skycharge = 20000;
    
    let purCt = Math.floor(count / purity);
    let skyCt = Math.ceil((count - (purity * purCt)) / skycharge);
    skyCt === 3 ? skyCt-- && purCt++ : "";
   
   
    
    // Update the results
    document.getElementById("purity-needed").innerText = purCt;
    document.getElementById("skycharge-needed").innerText = skyCt;
        
}

// Limits the values so that we don't have errors
limiter = (input) => {
    if (input.value > 70) input.value = 70;
    if (lv.value >= lvGoal.value) lv.value = lvGoal.value - 1;
    calcExp();
}

