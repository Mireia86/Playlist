  var listaUsuario = [];

$(document).on("click", "#search", search);
$(document).on("click", ".show", mostrar);
$(document).on("click", ".btn-play", play);

  function search (event){
    	 	event.preventDefault();	
        
      	var song = $(".write").val();
    	  var request = $.get("https://api.spotify.com/v1/search?type=track&query=" + '"' + song + '"');
        
        request.done(success);

        		function success (song){
      				var track = song.tracks.items[0];
      			  var titulo=track.name
                  $(".title").text(titulo);
          		var autor=track.artists[0].name
                  $(".author").html(autor);
          				$(".imagen").prop("src", track.album.images[0].url);
          				$(".songsAudio").prop ("src", track.preview_url);	

              var lista = "<li>" + titulo  +",  " + autor + "</li>";
                $(".listaCan").append(lista);
          
              var list = [autor, titulo];
              listaUsuario.push(list);
              window.localStorage.setItem('Datos', JSON.stringify(listaUsuario));
      
  //console.log(list);
  //console.log(typeof listaUsuario);
   
         }
   };


  function mostrar(event){
      event.preventDefault();
       
      var get=window.localStorage.getItem('Datos');
      var getSave=JSON.parse(get);
      
      $(".myList").append("<h4>" + "My list is: " + "</h4>"); 
      for (var i = 0; i<getSave.length; i++) {
            var showList="<li>" + getSave[i] + "</li>"
            $(".myList").append(showList); 
        }
       console.log(showList);
  };


  function play (){
    if ($(this).hasClass("disabled")){
        $(this).removeClass("disabled");
        $(this).addClass("playing");
        $(".songsAudio").trigger("play");
    } else {
        $(this).removeClass("playing");
        $(this).addClass("disabled");
        $(".songsAudio").trigger("pause"); 
    }
  };

  function printTime (){

    var current = $(".songsAudio").prop("currentTime");
    $("#progre").val((current));
    console.debug('Current time: ' + current);
  }

  $(".songsAudio").on("timeupdate", printTime);



