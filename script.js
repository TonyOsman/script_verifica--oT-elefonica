document.getElementById("validar").onclick = function() {

    var continuar = true,
      numero = document.getElementById('numero').value;
  
    // Verificar se vazio
    if (numero.length === 0) {
      alert("Brincalhão, preenche lá o número!");
      continuar = false;
    }
  
    // Verificar se número é de utilidade publica
    if (numero.length === 3) {
      alert("Número de utilidade publica");
      continuar = false;
    }
  
    // Verificar se tem código do país para retirar
    if (continuar && numero.substring(0, 3) === "+55") {
      numero = numero.substring(3);
    }
  
    // Verificar se menos que 12 digitos
    if (continuar && numero.length < 12) {
      alert("Número inválido, por favor introduza Cod. Operadora + Cod. Area + Numero");
      continuar = false;
    }
  
    // Verificar se contém 13 digitos
    if (continuar && numero.length === 13) {
      alert("Número móvel");
      continuar = false;
    }
  
    // Verificar se o 5º digito
    var digitoControlo = numero.charAt(4);
  
    if (continuar) {
  
      if (digitoControlo >= 2 && digitoControlo <= 5) {
        alert("Número fixo");
      } else if (digitoControlo >= 6 && digitoControlo <= 9) {
        alert("Número móvel");
      } else {
        alert("Número especial");
      }
    }
  }
  function ir(){
    document.location(index.html);
  }