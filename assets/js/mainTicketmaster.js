


$(document).ready(function () {
  $("button").on("click", function () {
    event.preventDefault();
    var Searchlocation = document.getElementById("search-location").value;
    console.log(Searchlocation);
    var genre = document.getElementById("genre").value;
    console.log(genre);
   var date = document.getElementById("date").value;
   console.log(date);
   var distance = document.getElementById("distance").value;

    $.ajax({
      type: "GET",
      url: `https://app.ticketmaster.com/discovery/v2/events.json?size=10&postalCode=${Searchlocation}&classificationName=[music,${genre}]&startDateTime=${date}&radius=${distance}&apikey=fRxWNBut35gtcCbvmA6gavOYvhqsLzKQ`,
      async: true,
      dataType: "json",
      success: function (json) {
        console.log(json._embedded.events);
        
        for (var i = 0; i <= json._embedded.events.length; i++) {
          var resultsEventName = json._embedded.events[i].name;
          //results = [event name, event date, venue name, ticketmaster link, spotify link]
          //resultsEventName[i] = [json._embedded.events[i].name.value];
          //json._embedded.events[i].dates.start.localDate, json._embedded.events[i]._embedded.venues[0].name, json._embedded.events[i].url, "Insert Spotify here"];

        }
        console.log(resultsEventName);

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
[0].name
