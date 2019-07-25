// This is a JavaScript file

$(document).on('click', '#btnEnviar', function(){
  var valor1 = $("#primeiroValor").val();
  var valor2 = $("#segundoValor").val();
  var soma = parseInt(valor1) + parseInt(valor2);

  $("#resultadoValores").val(soma);


});
