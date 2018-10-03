$(document).ready(function(){

    $('button').on('click', function() {
        var band = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + band + "&api_key=z5kDFqfoDbm7aOzXE440gmsyerGzT8ek";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function(response) {

                console.log(response)

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var bandDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var bandImage = $('<img/>');

                    bandImage.addClass('bndImg')

                    bandImage.attr('src', results[i].images.fixed_height.url);

                    bandImage.attr('data-still', results[i].images.fixed_height_still.url)

                    bandImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    bandDiv.append(p);

                    bandDiv.append(bandImage);

                    bandDiv.prependTo($('#gifs'));
                }

                $('.bndImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });
    });

    var bands = [''];

        $('#theButton').on('click', function(){
            var bandButton = $("#gif-input").val();

            var newButton = $("<button/>").addClass( "btn btn-info band").attr('data-name',bandButton).html(bandButton).css({'margin': '5px'});
            
            $("#bandsbuttons").append(newButton);
                console.log("Work");

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + bandButton + "&api_key=z5kDFqfoDbm7aOzXE440gmsyerGzT8ek";
                console.log(bandButton);

            $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {

            var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var bandDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var bandImage = $('<img/>');

                    bandImage.addClass('bndImg')

                    bandImage.attr('src', results[i].images.fixed_height_still.url);

                    bandImage.attr('data-still', results[i].images.fixed_height_still.url)

                    bandImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    bandDiv.append(p);

                    bandDiv.append(bandImage);

                    bandDiv.prependTo($('#gifs'));
                }

                $('.bndImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });

            $("#gif-input").val("");
            return false;
        })
  
});
