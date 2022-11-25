

const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons span");


//getting the new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Building the Calendar days to appear without being in HTML
const renderCalendar = () => {
    //getting the last date of the month
    let firstDateofMonth = new Date(currYear, currMonth, 1).getDay(), //to get the first day
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),// to get the last day
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();// to get last day of last month
    firstDateofNextMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();// to get first day of Next month
    let liTag = "";

    for (let i = firstDateofMonth; i > 0; i--){ //last days of the previous month
        liTag += `<li class = "inactive">${lastDateofLastMonth - i + 1}</li>`;       
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // all of the days in the current month
        // console.log(i);
        //adding the active class if the current date, month, year matches
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                     && currYear === new Date().getFullYear() ? "active" : ""; 
        //so we don't need to add each individual li tag for days
        liTag += `<li class = "${isToday}">${i}</li>`;
    }

    for (let i = firstDateofNextMonth; i < 6; i++) { //first days of the next month
        liTag += `<li class = "inactive">${i - firstDateofNextMonth + 1}</li>`; 
    }

    //title month and year
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}

renderCalendar();

//Icons
prevNextIcon.forEach(icon => {
    //adding a click event on both chevron icons
    icon.addEventListener("click", () => {
        // console.log(icon);

        //if the prev icon is click then it minuses the month by 1, else it adds by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        //to inccorporate next year's dates
        if (currMonth < 0 || currMonth > 11) { //if current month is less than 0 or greater than 11

            //creating a new date of current year and month and passing it as a date value
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear(); //updating current year with new date year
            currMonth = date.getMonth(); //updating current month with new date month
        } else { //else pass new date as date value
            date = new Date();
        }

        //calling the calendar
        renderCalendar();
    });
});