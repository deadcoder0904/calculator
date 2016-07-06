$(document).ready(function () {
    var box = $('span.box');
    var input = $('input');

    box.click(function(){
      var attr = $(this).attr("id");
      switch (attr){
        case 'AC':
          input.val("");
          break;
        case 'CE':
          input.val(input.val().slice(0,-1));
          break;
        case 'ANS':
        case '=':
          input.val(eval(input.val()));
          break;
        default:
          input.val(input.val() + attr);
          break;
      }
    });
});