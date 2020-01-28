// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

//Getting data from data.js file
tableData.forEach((getData) => {
	var row = tbody.append("tr");
	
	Object.entries(getData).forEach(function([key, value]){
		var cell = row.append("td");
		cell.text(value);
	});
});

// Select the button
var button = d3.select("#filter");

button.on("click", function() {

	//Get which category is choosen by the user
	var categoryChoice = d3.select(".select");

	// Select the input element and get the raw HTML node
	var inputElement = d3.select("#search");

	// Get the value property of the input element
	var inputValue = inputElement.property("value");

	//Get the property value for the choice
	var choice = categoryChoice.property("value");

	console.log(inputValue);
	console.log(choice);

	var filteredData = {};

	if(choice === "date"){
		filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
	}
	else if(choice === "city"){
		filteredData = tableData.filter(tableData => tableData.city === inputValue);
	}
	else if(choice === "state"){
		filteredData = tableData.filter(tableData => tableData.state=== inputValue);
	}
	else if(choice === "country"){
		filteredData = tableData.filter(tableData => tableData.country === inputValue);
	}
	else{
		filteredData = tableData.filter(tableData => tableData.shape === inputValue);
	}

	console.log(filteredData);

	var table = d3.select("tbody");

	table.html("");

	filteredData.forEach((showData) =>{
		var row = table.append("tr");
		
		Object.entries(showData).forEach(function([key, value]){
			console.log(key, value);
			var cell = row.append("td");
			cell.text(value);
		});

	});

});