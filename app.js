

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
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let liTag = "";

    for (let i = 1; i <= lastDateofMonth; i++) {
        // console.log(i);
        //so we don't need to add each individual li tag for days
        liTag += `<li>${i}</li>`;
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
    });
});