// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

//Getting data from data.js file
// tableData.forEach((getData) => {
// 	var row = tbody.append("tr");
	
// 	Object.entries(getData).forEach(function([key, value]){
// 		var cell = row.append("td");
// 		cell.text(value);
// 	});
// });

// Select the button
var button = d3.select("#filter");

button.on("click", function() {

	// Select the input element and get the raw HTML node
	var inputElement = d3.select("#search");

	// Get the value property of the input element
	var inputValue = inputElement.property("value");

	console.log(inputValue);
	// console.log(tableData);


});