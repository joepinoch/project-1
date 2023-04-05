var location = document.getElementById("search-location");
console.log(location);
var genre = document.getElementById("genre");
console.log(genre);


$(document).ready(function(){
  $("button").on("click", function(){
    $.ajax({
      type:"GET",
      url:`https://app.ticketmaster.com/discovery/v2/events.json?size=10&postalCode=${location.val}&classificationName=[music,${genre.val}]&apikey=fRxWNBut35gtcCbvmA6gavOYvhqsLzKQ`,
      async:true,
      dataType: "json",
      success: function(json) {
                  console.log(json._embedded.events);
                  for (i=0,i=<json._embedded.events.length,i++) {
                    var artist[i] = json._embedded.events
                  }
                  // Parse the response.
                  // Do other things.
               },
      error: function(xhr, status, err) {
                  console.log("it no work")
                  // This time, we do not end up here!
               }
    });
  });
});
