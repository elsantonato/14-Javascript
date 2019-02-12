// from data.js
var tableData = data;

// YOUR CODE HERE!

// Console.log the sightings data from data.js
//console.log(data);

//Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// Get a reference to the table body element in index.html
var tbody = d3.select("tbody");

// Loop through array of objects to return key value pairs 
function buildTable(ufoData) {
	// take all html info and clear before rebuild 
	tbody.html("");
	ufoData.forEach((dataRow) => {
	  var row = tbody.append("tr");
	// Loop through a single oject
	  Object.entries(dataRow).forEach(([key, value]) => {
	    var cell = row.append("td");
	// Apply the values to the td tags referencing object values 
	    cell.text(value);
	  });
	});	
}

// build table using table data 
buildTable(tableData); 

// establish function for user button click
function handleClick() {
	d3.event.preventDefault();
	var date = d3.select("#datetime").property("value") 

	console.log(date)

	// reassign table data to filter data so we can filter it
	var filterData = tableData;

	// conditional statement for filtering data 
	if (date) {
		// filter data and check if the current row is same as input (if true) 
		filterData = filterData.filter(row => row.datetime === date); 

		//console.log(filterData);
	}

	buildTable(filterData);

}

// reference Filter Table button 
d3.select("#filter-btn").on("click", handleClick);
