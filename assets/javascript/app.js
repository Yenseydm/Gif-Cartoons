
$(document).ready(function(){

    var topics=["Scooby Doo", "Popeye", "Spongebob", "Betty Boop", "Gumby", "Tweety", "Courage the Cowardly dog"];
    
    function displayGifs() {
       
        var gifs = $(this).attr("data-gif");
        console.log(gifs);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifs + "&api_key=Cf5v2mEBad0sucE5TLOhif9B3iuSseU2&limit=10";
        
        $.ajax({
            url: queryURL,
            method: "GET"
    
        }).then(function(response){
            console.log(response);

            for (i = 0; i < response.data.length; i++){
    
            var gifDiv = $("<div class='giftoons'>");
    
            var rated = response.data[i].rating;
    
            var pOne = $("<p>").text("Rating: " + rated);
    
            gifDiv.append(pOne);
    
            var gifURL = response.data[i].images.fixed_height_still.url;
            
            var giphyimage = $("<img>");

            giphyimage.attr("data-video", response.data[i].images.fixed_height.url);

            giphyimage.attr("data-photo", gifURL);

            giphyimage.attr("data-status", "photo");

            giphyimage.attr("src", gifURL);
            
            giphyimage.addClass("gifStatus");

            gifDiv.append(giphyimage);
    
            $("#cartoon-view").prepend(gifDiv);
            
            }
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

        $("#cartoon-view").on("click", ".gifStatus", function(event){
            var photo = $(this).attr("data-photo");
            var video = $(this).attr("data-video");
            var status = $(this).attr("data-status");

            if (status === "photo"){
                $(this).attr("src", video);
                $(this).attr("data-status", "video")

            } else {
                $(this).attr("src", photo);
                $(this).attr("data-status", "photo");
                
            }

        });
    
        $("#add-cartoon").on("click", function(event){
            event.preventDefault();
    
            var giphy = $("#cartoon-input").val().trim();
    
            topics.push(giphy);
    
            Buttons();
        });
    
        $(document).on("click", ".gif-btn", displayGifs);
    
        Buttons();
});
