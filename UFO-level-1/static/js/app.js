// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

//Getting data from data.js file
data.forEach((getData) => {
	var row = tbody.append("tr");
	
	Object.entries(getData).forEach(function([key, value]){
		var cell = row.append("td");
		cell.text(value);
	});
});