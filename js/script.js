$('#search-button').on('click', function(){
    $('#result-movie').html('');
    $.ajax({
        type: 'get',    //Methode
        url:'http://omdbapi.com', //url to the api omdb
        dataType: 'json', //type of data to be returned
        data: {
            'apikey' : 'e2be7591', //sesuaikan api key dengan yang kamu dapatkan dari OMDB
            's' : $('#search-input').val()  //sesuaikan dengan keyword yang ingin dicari
        },
        success: function(result){
            console.log(result);
          if(result.Response == 'True'){
            let dataMovies = result.Search;
            //loop data movies dari hasil search
            $.each(dataMovies, function(i, data) {
                $('#result-movie').append(`
                        <div class="col-md-3">
                            <div class="card mb-2">
                                <img src=`+ data.Poster +` class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title text-center">` + data.Title + `</h5>
                                    <h6 class="card-title">Year : `+data.Year+`</h6>
                                    <h6 class="card-title">Type : `+data.Type+`</h6>
                                    <hr>
                                    <a href="#" class="text-decoration-none text-center card-link detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="`+ data.imdbID +`">See Detail</a>
                                </div>
                            </div>
                        </div>
                `);
            });
            $('#search-input').val('');
          } else {
              $('#result-movie').html('<h1 class="text-center text-danger">Data Movie Not Found</h1>');
          }
        }
    });
});

$('#result-movie').on('click', '.detail', function(){

    $.ajax({
         type: 'get',    //Methode
        url:'http://omdbapi.com', //url to the api omdb
        dataType: 'json', //type of data to be returned
        data: {
            'apikey' : 'e2be7591', //sesuaikan api key dengan yang kamu dapatkan dari OMDB
            'i' : $(this).data('id')  //sesuaikan dengan keyword yang ingin dicari
            },
            success: function(datamovie){
                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <table class="table">
                                <tr>
                                    <td>Released</td>
                                    <td>:</td>
                                    <td>`+ datamovie.Released +`</td>
                                </tr>
                                <tr>
                                    <td>Runtime</td>
                                    <td>:</td>
                                    <td>`+ datamovie.Runtime +`</td>
                                </tr>
                                <tr>
                                    <td>Genre</td>
                                    <td>:</td>
                                    <td>`+ datamovie.Genre +`</td>
                                </tr>
                                 <tr>
                                    <td>Director</td>
                                    <td>:</td>
                                    <td>`+ datamovie.Director +`</td>
                                </tr>
                                <tr>
                                    <td>Writer</td>
                                    <td>:</td>
                                    <td>`+ datamovie.Writer +`</td>
                                </tr>
                                <tr>
                                    <td>Actors</td>
                                    <td>:</td>
                                    <td>`+ datamovie.Actors +`</td>
                                </tr>
                                <tr>
                                    <td>Awards</td>
                                    <td>:</td>
                                    <td>`+ datamovie.Awards +`</td>
                                </tr>
                                <tr>
                                    <td>Plot</td>
                                    <td>:</td>
                                    <td>`+ datamovie.Plot +`</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                `);
            }
        });
});