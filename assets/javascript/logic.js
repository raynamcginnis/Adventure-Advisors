// Weather API Key 8623bd08ad8f34423c6d55147d29a7a2

// On ready
$(document).ready(function () {
    $("#searchBtn").click(function (e) {
        event.preventDefault();
        var validate = Validate();
        var apiKey = "8623bd08ad8f34423c6d55147d29a7a2";
        $("#searchText").html(validate);
        if (validate.length == 0) {
            $.ajax({
                type: "GET",
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + $("#searchText").val().trim() + "&appid=" + apiKey + "&units=imperial",
                dataType: "json",
                success: function (result, status, xhr) {
                    var table = $("<table><tr><th>Weather Description</th></tr>").attr("id", "weatherInfo");
                    table.append("<tr><td>City:</td><td>" + result.name + "</td></tr>");
                    table.append("<tr><td>Country:</td><td>" + result.sys.country + "</td></tr>");
                    table.append("<tr><td>Current Temperature:</td><td>" + result.main.temp + "°F</td></tr>");
                    table.append("<tr><td>Humidity:</td><td>" + result.main.humidity + "</td></tr>");
                    table.append("<tr><td>Weather:</td><td>" + result.weather.discription + "</td></tr>");
                    table.append("<tr><td>Wind Speed:</td><td>" + result.wind.speed + "</td></tr>");
                    $("#weatherInfo").html(table);
                },
                error: function (xhr, status, error) {
                    alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
                }
            });
        }
    });

    $(document).ajaxStart(function () {
        $(".img-responsive1").show();
        $("#weatherTitle").show();
    });

    $(document).ajaxStop(function () {
        $(".img-responsive1").hide();
        $("#weatherTitle").show();
    });

    function Validate() {
        var errorMessage = "";
        if ($("#citySelect").val() == "Select") {
            errorMessage += "► Select City";
        }
        return errorMessage;
    }
});
