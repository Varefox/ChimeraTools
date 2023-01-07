// Assign necessary experience values to an array
const expValues = [0, 95, 120, 150, 180, 215, 255, 295, 340, 385, 550, 670, 800, 945, 1105, 1275, 1455, 1645, 1850, 2070, 2665, 3125, 3625, 4155, 4725, 5330, 5970, 6650, 7360, 8110, 10230, 11890, 13665, 15565, 17580, 19715, 21975, 24350, 26850, 29465, 36040, 41815, 48200, 55175, 62770, 70980, 79810, 89270, 99385, 110155, 130935, 145000, 173670, 199045, 227240, 258285, 292325, 329445, 369720, 413260, 826525, 1653050, 2479575, 3306100, 4132625, 4959150];

// Create variables from the values input by user. They should represent current level, current experience, and the desired level.
// The final variable represents the total amount of experience needed. This will also be used to determine the amount of pills needed.
lv = document.getElementById("level");
exp = document.getElementById("currentExp");
lvGoal = document.getElementById("levelGoal");
expGoal = document.getElementById("expNeededText");


calcExp = () => {
    count = 0; // This will sum up exp per level for a given range.
    for (let i = parseInt(lv.value, 10); i <= parseInt(lvGoal.value, 10) - 1; i++) {
        count = parseInt(expValues[i], 10) + count;
    };
    count = count - parseInt(exp.value, 10);
    // Update the text that informs the user how much exp they need
    expGoal.innerHTML = parseInt(count).toLocaleString("en-US");
    // To level up pets, exp treats are fed to them. Variables are names of the treats assigned to exp gain.
    const purity = 50000;
    const skycharge = 20000;
    
    // Trickles down the available treats until the total exp required is under 10000.
    purCt = Math.floor(count / purity);
    skyCt = Math.ceil((count - (purity * purCt)) / skycharge);
    skyCt === 3 ? skyCt-- && purCt++ : "";
   
   
    // To Do
    // Reverse the script so that pet level can be predicted based on amount of pills fed.
    
    // Update the results
    document.getElementById("purity-needed").innerHTML = purCt;
    document.getElementById("skycharge-needed").innerHTML = skyCt;
}

// Limits the values so that we don't have errors
limiter = (input) => {
    if (input.value > 66) input.value = 66;
    if (lv.value >= lvGoal.value) lv.value = lvGoal.value - 1;
    calcExp();
}
