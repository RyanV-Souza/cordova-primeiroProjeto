// This is a JavaScript file


$(document).on('click', '#btnSomar', function(){
  valor1 = $("#primeiroValor").val();
  valor2 = $("#segundoValor").val();
  var soma = parseInt(valor1) + parseInt(valor2);
  $("#resultadoValores").val(soma);


});

$(document).on('click', '#btnSubtrair', function(){
  var subtrair = valor1 - valor2;
  $("#resultadoValores").val(subtrair);


});
