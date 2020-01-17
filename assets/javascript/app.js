var topics=["Scooby Doo", "Popeye", "Spongebob", "Betty Boop", "Gumby", "Tweety", "Courage the Cowardly dog"];

function displayGifs() {
   
    var gifs = $(this).attr("data-gif");
    console.log(gifs);
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Cf5v2mEBad0sucE5TLOhif9B3iuSseU2&limit=10&q?" + gifs;
    
    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function(response){
        console.log(response);

        var gifDiv = $("<div class='giftoons'>");

        var rated = response.data[i].rating;

        var pOne = $("<p>").text("Rating: " + rated);

        gifDiv.append(pOne);

        var gifURL = response.data[i].images;

        var giphyOne = $("<img>").attr("src", gifURL);

        gifDiv.append(giphyOne);

        $("#cartoon-view").html(gifDiv);
        
        
    }) 
}

    function Buttons(){

        $("#buttons-view").empty();

        for (var i = 0; i < topics.length; i++) {

            var press = $("<button>");
            press.addClass("gif-btn");
            press.attr("data-gif", topics[i]);
            press.text(topics[i]);
            $("#buttons-view").append(press);

        }

    }

    $("#add-cartoon").on("click", function(event){
        event.preventDefault();

        var giphy = $("#cartoon-input").val().trim();

        topics.push(giphy);

        Buttons();
    });

    $(document).on("click", ".gif-btn", displayGifs);

    Buttons();
