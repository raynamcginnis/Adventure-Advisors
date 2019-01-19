//if checked, grab search input

//firebase

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBNxXvHwFMZknaZ4GNpH7AJl4QZmS15-WM",
    authDomain: "adventureadvisors-e98a1.firebaseapp.com",
    databaseURL: "https://adventureadvisors-e98a1.firebaseio.com",
    projectId: "adventureadvisors-e98a1",
    storageBucket: "adventureadvisors-e98a1.appspot.com",
    messagingSenderId: "568711330769"
};

firebase.initializeApp(config);

var database = firebase.database();

var favoriteLocation = ""


if ($('input[name="favorite"]').is(':checked')) {
    event.preventDefault();

    var favoriteLocation = $("#searchText").val().trim();

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + $("#searchText").val().trim() + "&appid=" + apiKey + "&units=imperial",
        type: "GET",
        dataType: "JSONP",
        success: function (weather, status, xhr) {
            // Create a table with table rows holding table data related to weather
            var table = $("<table><thead><tr>Weather Description</tr></thead>").attr("class", "z-depth-2 responsive-table centered");
            table.append("<tbody><tr><td>City:</td><td>" + weather.name + "</td></tr>");
            table.append("<tr><td>Country:</td><td>" + weather.sys.country + "</td></tr>");
            table.append("<tr><td>Current Temperature:</td><td>" + weather.main.temp + "°F</td></tr>");
            table.append("<tr><td>Humidity:</td><td>" + weather.main.humidity + "</td></tr>");
            table.append("<tr><td>Weather:</td><td>" + weather.weather[0].description + "</td></tr>");
            table.append("<tr><td>Wind Speed:</td><td>" + weather.wind.speed + "</td></tr></tbody></table>");
            $("#weatherInfo").html(table);
        },
        // If theres an error, log the error
        error: function (xhr, status, error) {
            console.log("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
        }
    });

    // Creates local "temporary" object for holding location data

    var locationData = {
        weather,
        weather,
        traffic,
        traffic,
        toDo,
        toDo
    };

};


// Uploads data to the database
database.ref().push(favoriteLocation);

// Logs everything to console
console.log(favoriteLocation.weather);
console.log(favoriteLocation.traffic);
console.log(favoriteLocation.toDo);

// 3. Create Firebase event for adding location specific info to the database and a row in favorites div
database.ref().on("child_added", function (childSnapshot) {
            console.log(childSnapshot.val());

            // Store everything into a variable.
            var location = childSnapshot.val().searchText;
            var weather = childSnapshot.val().weatherResults;
            var traffic = childSnapshot.val().trafficResults;
            var toDo = childSnapshot.val().toDoResults;

            console.log(location);
            console.log(weather);
            console.log(traffic);
            console.log(toDo);

            // Create the new row in Favorites Div (may want this to be .html or something else) as button
            var newRow = $("#favoritesDiv").append(

                //need to figure out how to add class of favLocation when button is clicked
                $("<button>").; $("#searchText").text("#location"),
            );

            //function for when you click on favorite label

            $("#favlocation").click(function () {

                        $("#weatherDiv").html(weather),
                            $("#trafficDiv").html(traffic),
                            $("#toDoDiv").html(toDo)

                    );