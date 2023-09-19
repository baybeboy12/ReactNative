$.ajax({
        url: "https://restcountries.com/v3.1/region/europe",
        beforeSend: function(xhr) {
            xhr.overrideMimeType("text/plain charset = x - user - defined ")
        }
    })
    .done(function(data) {
        if (console && console.log) {
            console.log("Sample of data:",
                data.slice(0, 100));
        }
    });