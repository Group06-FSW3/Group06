$('#search-button').on('click', function(){
    $.ajax({
        type: 'get',
        url:'http://omdbapi.com',
        dataType: 'json',
        data: {
            'apikey' : 'e2be7591',
            's' : $('#search-input').val()
        },
        success: function(result){
          if(result.Response == 'True'){

          } else {
              $('#no-result').html('<h1 class="text-center text-danger">Data Movie Not Found</h1>');
          }
        }
    });
});