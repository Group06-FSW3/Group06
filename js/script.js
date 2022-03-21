$('#search-button').on('click', function(){
    $.ajax({
        type: 'get',    //Methode
        url:'http://omdbapi.com', //url to the api omdb
        dataType: 'json', //type of data to be returned
        data: {
            'apikey' : 'e2be7591', //sesuaikan api key dengan yang kamu dapatkan dari OMDB
            's' : $('#search-input').val()  //sesuaikan dengan keyword yang ingin dicari
        },
        success: function(result){
          if(result.Response == 'True'){

          } else {
              $('#no-result').html('<h1 class="text-center text-danger">Data Movie Not Found</h1>');
          }
        }
    });
});