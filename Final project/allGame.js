$(document).ready(function(){
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://gamerpower.p.rapidapi.com/api/giveaways',
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd2129940b5msh616ad49c215b1f7p10812bjsnb839e4e08eef',
            'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
        }
    };

    
    $.ajax(settings).done(function (response) {
        console.log(response);
        var table = '<table><thead><tr><th>Image</th><th>Title</th><th>Users</th><th>Worth</th><th>Platform</th><th>Type</th></tr></thead><tbody>';
        for (var i = 0; i < response.length; i++) {
            table += '<tr>';
            table += '<td><img src="' + response[i].image + '" alt="' + response[i].title + '"></td>';
            table += '<td>' + response[i].title + '</td>';
            table += '<td>' + response[i].users + '</td>';
            table += '<td>' + response[i].worth + '</td>';
            table += '<td>' + response[i].platforms + '</td>';
            table += '<td>' + response[i].type + '</td>';
            table += '</tr>';
        }
        
        table += '</tbody></table>';
        $('#tableContainer').append(table);
    });
});






