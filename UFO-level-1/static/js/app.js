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
    // filter matching user input 
    var filterDate = data.filter(data => data.datetime === inputDate);
    console.log(filterDate);
    var filterCity = data.filter(data => data.city === inputCity);
    console.log(filterCity);
    var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity);
    console.log(filterData);

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
        tbody.append('tr').append('td').text('No UFO sigthings.');
    }
});

resetbtn.on('click', () => {
    tbody.html('')
    populate(data)
    console.log('Reset Filter')
})
    /* var button = d3.select('#filter-btn');

button.on('click', function() {
    var dateInput = d3.select('#date-filter');
    var dateValue = dateInput.property('value');

    var filtered = tableData.filter(item => item.dateTime === dateValue);
    tbody.html(``); */
/*     tableData.forEach(item => {
        var tr = tbody.append('tr');
        tr.append('td').text(item.datetime);
        tr.append('td').text(item.city);
        tr.append('td').text(item.state);
        tr.append('td').text(item.country);
        tr.append('td').text(item.shape);
        tr.append('td').text(item.durationMinutes);
        tr.append('td').text(item.comments);
    });
    
        filtered.forEach(item => {
            var tr = tbody.append('tr');
            tr.append('td').text(item.datetime);
            tr.append('td').text(item.city);
            tr.append('td').text(item.state);
            tr.append('td').text(item.country);
            tr.append('td').text(item.shape);
            tr.append('td').text(item.durationMinutes);
            tr.append('td').text(item.comments);
        });
 */    