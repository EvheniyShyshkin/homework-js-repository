$.ajax({
    url: 'https://restcountries.eu/rest/v2/all',
    success: function(data) {
        console.log(data);
        var str = '';

for(let el of data) {
        str += '<tr><td>' + el.name + '<td><td>' + el.region + '<td><td>' + el.population
        + '<td><td>' + el.area + '<td><td>' + el.flag + '<td><td>' + el.numericCode + '</td></tr>';
        $('table').html(str);
    }
 }  
});


