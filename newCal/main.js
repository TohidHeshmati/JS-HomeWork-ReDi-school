let today = moment();
console.log(today.date());

let weekViewElement = document.getElementById("weekView");
let justToday = `${today.format("ddd")}.${today.date()}.${today.month() + 1}`; //indicates what day exactly today is
let defaultViewNumber = 1; // 1 for week view 2 for month view

function changeView(){
    if (defaultViewNumber ===1){
        defaultViewNumber = 2;
        monthViewMain();
    } else if (defaultViewNumber === 2) {
        defaultViewNumber = 1;
        weekViewMain();
    }
    defaultView(defaultViewNumber);

}
//here we create buttons and manipulate them to create and change depending on week or month view
let nextButton = document.createElement("button");
let previousButton = document.createElement("button");
nextButton.id = "nextButton";
previousButton.id = "previousButton";

function buttonManipulator(defaultViewNumber) {
    if (defaultViewNumber ===1){
        nextButton.innerText = "next week";
        nextButton.onclick = nextWeek;
        previousButton.innerText = "previous week";
        previousButton.onclick = previousWeek;
    } else {
        nextButton.innerText = "next month";
        nextButton.onclick = nextMonth;
        previousButton.innerText = "previous month";
        previousButton.onclick = previousMonth;
    }
}buttonManipulator(defaultViewNumber);//so it runs at the beginning

function defaultView(defaultViewNumber) {
    buttonManipulator(defaultViewNumber);

    let buttonDiv = document.getElementById("buttonDiv");
    buttonDiv.appendChild(previousButton);
    buttonDiv.appendChild(nextButton);

    //weekViewElement = weekViewElement.appendChild(buttonDiv);
    
    if (defaultViewNumber ===1){
        weekViewMain();
    } else {
        monthViewMain();
    }
}defaultView(defaultViewNumber);//so it runs at the beginning

function weekViewMain() {
        for (let i = 1; i < 8; ++i) {
            let dayDivElement = document.createElement("div");
            let day = today.clone();

            day.add(i - today.day(), 'days');
            let todayString = `${day.format("ddd")}.${day.date()}.${day.month()+1}`;

            if (todayString === justToday) {
                todayString = "<b>" + todayString + "</b>";
            }
            dayDivElement.innerHTML = todayString;

            dayDivElement.classList.add("day");
            weekViewElement.appendChild(dayDivElement);
        }
    }
function monthViewMain() {
        for (let i = 1; i < today.daysInMonth()+1; ++i) {
            let dayDivElement = document.createElement("div");
            let day = today.clone();

            day.add(i - today.date(), 'days');
            let todayString = `${day.format("ddd")}.${day.date()}.${day.month()+1}`;

            if (todayString === justToday) {
                todayString = "<b>" + todayString + "</b>";
            }
            dayDivElement.innerHTML = todayString;

            dayDivElement.classList.add("day");
            weekViewElement.appendChild(dayDivElement);
        }
    }
function previousWeek() {
    weekViewElement.innerHTML ="";
    today = today.add(-7, 'days');
    defaultView(defaultViewNumber);
    checkEvents();
}
function nextWeek() {
    weekViewElement.innerHTML ="";
    today = today.add(7, 'days');
    checkEvents();
    defaultView(defaultViewNumber);
}
function previousMonth() {
    weekViewElement.innerHTML ="";
    let daysInMonth = today.daysInMonth();
    daysInMonth = (-1)*daysInMonth;
    today = today.add(daysInMonth, 'days');
    monthViewMain();
    checkEvents();
}
function nextMonth() {
    weekViewElement.innerHTML ="";
    let daysInMonth = today.daysInMonth();
    today = today.add(daysInMonth, 'days');
    checkEvents();
    monthViewMain();
}
function checkEvents() {
    //compare if the begin or the end of this week has overlap with eventS
    //capital S in eventS shows that we should go through all the events and compare them.
    let newDayNumber = today.date();
}

let event = [
    {
        title:"my event",
        begin:moment(),
        end:moment().clone().add(1,"hours")
    },
    {
        title:"my other event",
        begin:moment(),
        end:moment().add(2,"days")
    }
];