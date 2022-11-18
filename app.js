

const currentDate = document.querySelector(".current-date");


//getting the new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    //getting the last date of the month
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();

    for (let i = 1; i <= lastDateofMonth; i++) {
        console.log(i);
    }

    //title month and year
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
}

renderCalendar();