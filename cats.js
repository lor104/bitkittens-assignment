$(document).ready(function() {

  $('.summon-cats').on('click', function() {
    // console.log('Cliked!');

    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    }).done(function(data) {
      var catList = data["cats"];
      console.log(catList);
      console.log(catList[0]["name"]);
      console.log(catList[1]["name"]);
      console.log(catList[2]["name"]);

      for (var i = 0; i < catList.length; i++) {
        cat = catList[i]
        id = '#cat' + (i + 1)
        $('<img>').attr('src', cat.photo).appendTo(id)
      }

    });

  });

});
