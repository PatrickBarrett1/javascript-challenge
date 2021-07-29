// from data.js
var tableData = data;

// YOUR CODE HERE!
// reference to the table body
var tbody = d3.select('tbody');
var button = d3.select('#filter-btn');
var resetbtn = d3.select('#reset-btn');
var inputField1 = d3.select('#datetime');
var inputField2 = d3.select('#city');
var columns = ['datetime', 'city', 'state', 'country', 'shape', 'durationMinutes', 'comments']

var populate = (dataInput) => {
    dataInput.forEach(ufo => {
        var trow = tbody.append('tr');
        columns.forEach(column => trow.append('td').text(ufo[column])
        )
    });
}

// populate data table
populate(data);

// user input filter
button.on('click', () => {
    d3.event.preventDefault();
    var inputDate = inputField1.property('value').trim();
    var inputCity = inputField2.property('value').toLowerCase().trim();
    // filter user input 
    var filterDate = data.filter(data => data.datetime === inputDate);
    var filterCity = data.filter(data => data.city === inputCity);
    var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity);


// populate table with filtered data
tbody.html('');

let response = {
    filterData, filterCity, filterDate
}

if (response.filterData.length !== 0) {
    populate(filterData);
}
    else if ( response.filterData.length === 0 && ((response.filterCity.length !== 0 || response.filterDate.length !==0))){
        populate(filterCity) || populate(filterDate);
    }
    else {
        tbody.append('tr').append('td').text('No UFO sigthings reported.');
    }
});

resetbtn.on('click', () => {
    tbody.html('')
    populate(data)
})

// user input filtering triggered by 'Enter' key on keyboard
var input = document.getElementById("datetime");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("filter-btn").click();
        }
    });

var input = document.getElementById("city");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("filter-btn").click();
        }
    });