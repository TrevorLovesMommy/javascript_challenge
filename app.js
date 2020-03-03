//populate table with data from data.js

// Get a reference to the table body
var tbody = d3.select("tbody");

//console log the data
console.log(data);

//Loop through data variable from data.js 


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




