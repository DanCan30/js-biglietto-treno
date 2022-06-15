// Create a function to manage the script with the button click
document.getElementById("start-button").onclick = function mainFunction() {

    const userDistance = parseInt( prompt("Please insert here how long will be your travel (in KM).") );    //Initialize a variable where the user will select how many kilometers he/she needs to do

    const userAge = parseInt( prompt("Please insert here Your age.") ) //Initialize a variable where the user select his/her age

    const ticketPriceOnKM = 0.21;   //Setting the standard price per KM

    let ticketPrice

        // Setting the price for kid
    const kidDiscount = (ticketPriceOnKM * 20) / 100;
    const ticketForKid = ticketPriceOnKM - kidDiscount;

        // Setting the price for senior
    const seniorDiscount = (ticketPriceOnKM * 40) / 100;
    const ticketForSenior = ticketPriceOnKM - seniorDiscount;


    if (userAge > 110) {
        document.getElementById("info-span").innerHTML = "Congratulations, You should be dead.";
    }

        // User under 18. Kid discount applied
    if (userAge <= 17) {
        ticketPrice = userDistance * ticketForKid;
        console.log(ticketPrice.toFixed(2));

    // User over 65. Senior discount applied
    } else if (userAge >= 65) {
        ticketPrice = userDistance * ticketForSenior;
        console.log(ticketPrice.toFixed(2));

    // Normal price applied
    } else {
        ticketPrice = userDistance * ticketPriceOnKM;
        console.log(ticketPrice.toFixed(2));
    }

    // Added more condition for training (and for the meme)
    if ( ticketPrice >= 200 && (userAge >= 18 && userAge < 64) ) {
        document.getElementById("info-span").innerHTML = "Better to walk.";
    }
    

    if ( isNaN(ticketPrice) == false && ticketPrice > 0 ) {
    document.getElementById("ticket-cost").innerHTML = ticketPrice.toFixed(2) + "€";
    } else {
        document.getElementById("info-span").innerHTML = "Please insert a valid number. Reload the page.";
        console.log("Please insert a valid number. Reload the page.");
    }
}