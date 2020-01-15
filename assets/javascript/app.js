var topics=["Scooby Doo", "Popeye", "Spongebob", "Betty Boop", "Gumby", "Tweety", "Courage the Cowardly dog"];

function displayGifs() {

    var gifs = $(this).attr("data-gif");
    var queryURL = "" + gifs + "";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        var gifDiv = $("<div class='movie'>");

        var rating = response.Rated;

        var pOne = $("<p>").text("rating: " + rating);

        gifDiv.append(pOne);

        var gifURL = response. ;

        var 
    })

}