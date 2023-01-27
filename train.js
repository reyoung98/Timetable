// Train station, stage 1

// Getting departure times from array of numbers
// const departures = [494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625];

// const departureTimes = departures.map(departure => {
//     let hour = Math.floor(departure / 60);
//     let minutes = Math.round((departure / 60 - Math.floor(departure / 60)) * 60);
//     return `${hour}:${minutes}`
// })

// departureTimes.forEach(departureTime => {
//     console.log(departureTime);
// })

// Train station, stage 2

const departures = [
    { time: { hrs: 8, mins: 14 }, train: 'Acela Express', no: 2153, to: 'Washington, DC', status: 'On Time', track: 2 },
    { time: { hrs: 8, mins: 19 }, train: 'New Haven Line', no: 1541, to: 'Grand Central Terminal', status: 'On Time', track: 14 },
    { time: { hrs: 8, mins: 20 }, train: 'Acela Express', no: 2153, to: 'Washington, DC', status: 'On Time', track: 2 },
    { time: { hrs: 8, mins: 37 }, train: 'Shore Line East', no: 1606, to: 'Old Saybrook', status: 'On Time', track: 12 },
    { time: { hrs: 8, mins: 40 }, train: 'Acela Express', no: 190, to: 'Washington, DC', status: 'On Time', track: 1 },
    { time: { hrs: 8, mins: 43 }, train: 'N.E. Regional', no: 490, to: 'Grand Central Terminal', status: 'On Time', track: 3 },
    { time: { hrs: 8, mins: 50 }, train: 'Shuttle', no: 95, to: 'Springfield', status: 'On Time', track: 2 },
    { time: { hrs: 9, mins: 16 }, train: 'New Haven Line', no: 1545, to: 'Grand Central Terminal', status: 'On Time', track: 8 },
    { time: { hrs: 9, mins: 23 }, train: 'Acela Express', no: 1549, to: 'Grand Central Terminal', status: 'On Time', track: 10 },
    { time: { hrs: 9, mins: 36 }, train: 'Shore Line East', no: 1610, to: 'Washington, DC', status: 'On Time', track: 14 },
    { time: { hrs: 9, mins: 46 }, train: 'New Haven Line', no: 2150, to: 'Grand Central Terminal', status: 'On Time', track: 1 },
    { time: { hrs: 10, mins: 13 }, train: 'N.E. Regional', no: 1551, to: 'Grand Central Terminal', status: 'On Time', track: 8 },
    { time: { hrs: 10, mins: 25 }, train: 'New Haven Line', no: 170, to: 'Grand Central Terminal', status: 'On Time', track: 2 },
]

let status;


// creating the table 
const tableHeader = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const headerNames = Object.keys(departures[1]);

// create the headers
for (let headerName of headerNames) {
    const header = document.createElement('th');
    header.innerText = `${headerName}`;
    tableHeader.appendChild(header);
}

// add one extra column
const btnCol = document.createElement('th');
tableHeader.appendChild(btnCol);

// fill in the data
for (let departure of departures) {
    const tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);
    // console.log(departure.status);
    const innerData = Object.values(departure); // arrays of values for each row
    status = innerData[4];
    // console.log(status);
    const timeData = innerData[0]; // get the time object for each row
    const formatTime = `${timeData.hrs}:${timeData.mins}`; // format the times
    innerData[0] = `${formatTime}`; // replace time object with formatted time
    // console.log(innerData);

    for (let innerDatum of innerData) {
        // console.log(innerData);
        const tableCell = document.createElement('td');
        tableCell.innerHTML = innerDatum;
        tableRow.appendChild(tableCell);

        // adding the class 'status' to all cells which hold the status
        if (innerDatum === departure.status) {
            tableCell.setAttribute('class', 'status');
        }
    }

    // add the buttons
    const newCell = document.createElement('td');
    const statusBtn = document.createElement('button');
    statusBtn.innerHTML = "Change status";
    tableRow.appendChild(newCell);
    newCell.appendChild(statusBtn);
}

// event listeners for buttons
const buttons = document.querySelectorAll('button');
const rows = document.querySelectorAll('tr');

let delayedStatuses;

for (let button of buttons) {
    button.addEventListener('click', (e) => {
        const currentCell = e.target.parentElement;
        const currentRow = currentCell.parentElement;
        console.log(currentRow);
        console.log("btn clicked!")
        currentRow.classList.toggle("delayed");

        // selecting the status cell for rows which have 'delayed' class
        delayedStatus = currentRow.querySelector('.status')
        console.log(delayedStatus);

        // Toggle status when clicked
        if (delayedStatus.innerHTML === "On Time") {
            delayedStatus.innerHTML = "Delayed" 
        } else {
            delayedStatus.innerHTML = "On Time";
        }
    })
}