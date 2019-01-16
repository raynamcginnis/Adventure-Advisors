// Weather API Key 8623bd08ad8f34423c6d55147d29a7a2

// On ready
$(document).ready(function () {
    // Search Btn Click
    $("#searchBtn").click(function (event) {

        // Prevent page reload
        event.preventDefault();
        //Run Validate function
        var validate = Validate();
        // Weather API Key
        var apiKey = "8623bd08ad8f34423c6d55147d29a7a2";
        // Make sure there is text in the search input
        $("#searchText").html(validate);
        if (validate == null) {
            // AJAX call to get weather information based on search query
            $.ajax({
                type: "GET",
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + $("#searchText").val().trim() + "&appid=" + apiKey + "&units=imperial",
                dataType: "json",
                success: function (result, status, xhr) {
                    // Create a table with table rows holding table data related to weather
                    var table = $("<table><tr><th>Weather Description</th></tr>").attr("id", "weatherInfo");
                    table.append("<tr><td>City:</td><td>" + result.name + "</td></tr>");
                    table.append("<tr><td>Country:</td><td>" + result.sys.country + "</td></tr>");
                    table.append("<tr><td>Current Temperature:</td><td>" + result.main.temp + "°F</td></tr>");
                    table.append("<tr><td>Humidity:</td><td>" + result.main.humidity + "</td></tr>");
                    table.append("<tr><td>Weather:</td><td>" + result.weather.description + "</td></tr>");
                    table.append("<tr><td>Wind Speed:</td><td>" + result.wind.speed + "</td></tr>");
                    $("#weatherInfo").html(table);
                },
                // If theres an error, log the error
                error: function (xhr, status, error) {
                    console.log("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
                }
            });
        }
    });
    // When AJAX is called, make sure img and title show
    $(document).ajaxStart(function () {
        $(".img-responsive1").show();
        $("#weatherTitle").show();
    });
    // When AJAX stops, hide the img and title
    $(document).ajaxStop(function () {
        $(".img-responsive1").hide();
        $("#weatherTitle").hide();
    });
    // Validate function to ensure text exists, if not, display error message
    function Validate() {
        var errorMessage = "";
        if ($("#searchText").val() == null) {
            errorMessage += "Enter a Destination";
        }
        console.log(errorMessage);
    }
});