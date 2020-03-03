//Assign the data from data.js to a variable
var data = data;

//get reference to the button with the id "filter-btn"
 var button = d3.select("#filter-btn");

// Get a reference to the table body
var tbody = d3.select("tbody");

//console log the data
console.log(data);

//-----------populate html table with data from data.js----------------------------
//the variable "data" was defined in data.js
//create new td for every value in object
data.forEach(function(alienReport){
    //use d3 to append one row per alien report
    var row = tbody.append("tr");
    //use d3 to append a cell for each value in the alien report object
    Object.entries(alienReport).forEach(function([key,value]){
        var cell=row.append("td");
        //for every dell, pupluate the value
        cell.text(value);
    });
});

//--------use the "on" function in d3 and inline function to record an event--------
button.on("click", function() {
    console.log("a button was clicked");
    console.log(d3.event.target);

    //get a reference to the input element on the page with the class "form-control"
    var inputElement = d3.select(".form-control");
    
    //get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(`here's the input value ${inputValue}`);

    //filter data based on inputValue
    var filterdData = data.filter(report => report.datetime === inputValue);
    console.log("here's the data");
    console.log(filterdData);

    ////remove all rows https://stackoverflow.com/questions/7271490/delete-all-rows-in-an-html-table
    d3.select("tbody").remove();


     
});

inputValue.forEach(function(alienReport){
    //use d3 to append one row per alien report
    var row = tbody.append("tr");
    //use d3 to append a cell for each value in the alien report object
    Object.entries(alienReport).forEach(function([key,value]){
        var cell=row.append("td");
        //for every dell, pupluate the value
        cell.text(value);
    });
});










