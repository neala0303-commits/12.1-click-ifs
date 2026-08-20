//varaibles used for later
let clicks = 0;

let press = document.getElementById("clickerButton");

let hidden = false;

let reset = document.getElementById("resetButton");


//this function updates the click count and checks for advancements
function updateClickCount() { 

    //increases clicks by 1
    clicks += 1;

    //changes visible number
    document.getElementById("clickcurrent").innerText = clicks;
    

    // these 3 ifs check for advancements based on number of clicks
    if (clicks >= 10) {
        document.getElementById("advancment 1").innerText = "You have found the 1st advancement by reaching 10 clicks!";
    }

    if (clicks >= 100) {
        document.getElementById("advancment 2").innerText = "You have found the 2nd advancement by reaching 100 clicks!";
    }

    if (clicks >= 1000) {
        document.getElementById("advancment 5").innerText = "You have found the 5th advancement by reaching 1000 clicks!";
    }
}

// this function resets the click count and checks for 2 other achievements
function resetClickCount() {

    // advancement 3 is found by resetting the clicks
    document.getElementById("advancment 3").innerText = "You have found the 3rd advancement by resetting the clicks";
    // the next 2 ifs check for the 4th advancement by inputting a specific number of clicks and resetting 
    if (clicks == 355) {
        hidden = true;
    }

    if (clicks == 2 && hidden == true) {
        document.getElementById("advancment 4").innerText = "You have found the 4th advancement by inputing Milu. The chinese fraction that is accurate to pi to the sixth decimal.";
    }
    clicks = 0;
    document.getElementById("clickcurrent").innerText = clicks;

}


//registers when buttons are pressed

press.onclick = updateClickCount;
reset.onclick = resetClickCount;