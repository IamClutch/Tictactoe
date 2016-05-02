$(document).ready(function() {
  var turn = 0;
  var winningcombo = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,5,7], [1,5,9], [3,6,9]];

  function checkwin(){

    for (var prop in winningcombo) {

      if ($('.X').hasClass(winningcombo[prop][0]) &&
        $('.X').hasClass(winningcombo[prop][1]) &&
        $('.X').hasClass(winningcombo[prop][2])){
        alert("You Win");

    }   else if
        ($('.O').hasClass(winningcombo[prop][0]) &&
        $('.O').hasClass(winningcombo[prop][1]) &&
        $('.O').hasClass(winningcombo[prop][2])){


          alert("You Win");
        }
      };
    };


    $('td').click(function () {
      if (turn % 2 === 0) {
        $(this).html('X').addClass('X');
    } else {
        $(this).html('O').addClass('O');
    }


    turn++;
    checkwin();

  });
});
