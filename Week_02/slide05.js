const urlBacon =
    "https://restcountries.com/v3.1/region/europe";
(function() {
    $.ajax({
            method: "GET",
            url: urlBacon,
            dataType: "json"
        })
        .done(function(data) {
            console.log(data);
        })
        .fail(function() {
            alert("no good");
        });
})()