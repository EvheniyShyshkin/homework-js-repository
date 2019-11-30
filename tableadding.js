$.ajax({
    url: 'https://restcountries.eu/rest/v2/all',
    success: function(data) {
        console.log(data);
        var str = '';

for(let el of data) {
            str += '<tr><td>' + el.name + '<td><td>' + el.region + '<td><td>' + el.population
            + '<td><td>' + el.area + '<td><td><img src="' + el.flag + '" width="80px" height="50px"><td><td>'
            + el.numericCode + '</ttd></tr>';
            $('table').html(str);
    }
 }
});
