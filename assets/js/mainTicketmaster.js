


$(document).ready(function () {
  $("button").on("click", function () {
    event.preventDefault();
    var Searchlocation = document.getElementById("search-location").value;
    console.log(Searchlocation);
    var genre = document.getElementById("genre").value;
    console.log(genre);
    console.log(Searchlocation);
    console.log(genre);
    $.ajax({
      type: "GET",
      url: `https://app.ticketmaster.com/discovery/v2/events.json?size=10&postalCode=${Searchlocation}&classificationName=[music,${genre}]&apikey=fRxWNBut35gtcCbvmA6gavOYvhqsLzKQ`,
      async: true,
      dataType: "json",
      success: function (json) {
        console.log(json._embedded.events);
        //let artist = new Array(json._embedded.events.length);
        for (let i = 0; i <= json._embedded.events.length; i++) {
          var artist = json._embedded.events[i]._embedded.attractions[0].artist || "No Artist";
          //if (json._embedded.events[i]._embedded.attractions[i]=false) {
          // artist[i]="Artist Name not Available";
          // } else {
          // artist[i] = json._embedded.events[i]._embedded.attractions[i]; 
          //}

        }
        console.log(artist);

      },

      // Parse the response.
      // Do other things.
      //  }),
      error: function (xhr, status, err) {
        console.log("it no work")
        // This time, we do not end up here!
      }
    });
  });
});
[0]