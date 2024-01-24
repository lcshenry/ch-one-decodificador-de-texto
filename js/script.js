const criptografia = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
  };
  
  const descriptografia = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
  };
  
  function criptografar(texto) {
    let textoCriptografado = texto;
    for (let letra in criptografia) {
      let regex = new RegExp(letra, "g");
      textoCriptografado = textoCriptografado.replace(regex, criptografia[letra]);
    }
    return textoCriptografado;
  }
  
  function descriptografar(textoCriptografado) {
    let texto = textoCriptografado;
    for (let palavra in descriptografia) {
      let regex = new RegExp(palavra, "g");
      texto = texto.replace(regex, descriptografia[palavra]);
    }
    return texto;
  }
  
  document.getElementById('criptografar').addEventListener('click', function() {
    let texto = document.getElementById('texto').value;
    let textoCriptografado = criptografar(texto);
    document.getElementById('info').innerText = 'Resultado: ';
    document.getElementById('resultado').innerText = textoCriptografado;
  });
  
  document.getElementById('descriptografar').addEventListener('click', function() {
    let textoCriptografado = document.getElementById('texto').value;
    let texto = descriptografar(textoCriptografado);
    document.getElementById('info').innerText = 'Resultado: ';
    document.getElementById('resultado').innerText = texto;
  });