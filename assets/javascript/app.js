var topics=["Scooby Doo", "Popeye", "Spongebob", "Betty Boop", "Gumby", "Tweety", "Courage the Cowardly dog"];

function displayGifs() {

    var gifs = $(this).attr("data-gif");
    var queryURL = "api.giphy.com/v1/gifs/search" + gifs + "Cf5v2mEBad0sucE5TLOhif9B3iuSseU2";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        // var gifDiv = $("<div class='movie'>");

        // var rating = response.Rated;

        // var pOne = $("<p>").text("rating: " + rating);

        // gifDiv.append(pOne);

        // var gifURL = response. ;

        // var 
    })
}
    
    function Buttons(){

        $("#cartoon-view").empty();

        for (var i = 0; i < topics.length; i++) {

            var press = $("<button>");
            press.addClass("gif-btn");
            press.attr("data-gif", topics[i]);
            press.text(topics[i]);
            $("#cartoon-view").append(press);

        }

    }

    $("#add-gif").on("click", function(event){
        event.preventDefault();

        var giphy = $("#gif-input").val().trim();

        topics.push(giphy);

        Buttons();
    });
    
