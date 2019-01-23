
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


$("#favBtn").on("click", function (event) {
  event.preventDefault();

  var favorite = $("#searchText").val().trim();

  var favPlace = {
    favorite: favorite
  }


  database.ref().push(favPlace)
  console.log(favPlace);
});

database.ref().on("child_added", function (childSnapshot) {

  var newFavPlace = childSnapshot.val().favorite;
  console.log(newFavPlace);

  var newRow = $("<tr>").append(
    $("<td>").text(newFavPlace)
  );
  $("#favorite").append(newRow);
});