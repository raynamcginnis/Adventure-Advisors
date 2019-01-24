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
// Firebase Database
var database = firebase.database();
// On Favorite button click
$("#searchBtn").on("click", function (event) {
    event.preventDefault();
    // Favorites  = SearchText Input
    var favorite = $("#searchText").val();
    // establish FireBase Favorites
    var favPlace = {
        favorite: favorite
        
    };


    // Establish database reference, push favorite places to database
    database.ref().push();
    //   console.log(favPlace);
});
// Add snapshot value to new favorite places to append into new row
database.ref().on("child_added", function (childSnapshot) {

    var newFavPlace = childSnapshot.val().favorite;
    var addUserDestinations = favorite;
    var newFavDestinations = {};

    for (var i = 0, len = addUserDestinations.length; i < len; i++) {

        var key = addUserDestinations[i].getAttribute('data-key');
        var value = addUserDestinations[i].value;
        newFavDestinations[key] = value;
    }
    database.ref().push(newFavDestinations, function () {
        console.log("Data has been inserted:");
        console.log(newFavDestinations);
    });

    var newRow = $("<tr>").append(
        $("<td>").text(newFavPlace.toUpperCase())
    );
    $("#favorite").prepend(newRow);
});