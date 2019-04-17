let thisMoment = moment();
let dayNum = thisMoment.day();
let dayInMonth = thisMoment.format("D");
console.log("day in the month "+dayInMonth);

let tableElement = document.getElementById("table");

for (let k=0; k<5; k++){
        let rowElement = document.createElement("tr");
        rowElement.id = "tr"+k;

        for (let i = 1; i<8; i++) {
                let adyElement = document.createElement("td");
                da

                let numberOfDay = i-dayNum;
                let dayID = "td"+i;
                let dayElement = document.getElementById(dayID);
                dayElement.textContent= thisMoment.clone().add(numberOfDay, 'days').format("MMM Do");

                if (i === dayNum) {
                    dayElement.style.borderWidth = "4px";
                }
}