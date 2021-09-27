window.alert('Bem-vindo a Calculadora de IMC!')

const calcular = document.getElementById('calcular');
calcular.addEventListener('click', imc);

const limpar = document.getElementById('limpar');
limpar.addEventListener('click', limpar_elementos);

function imc () {
  const nome = document.getElementById('nome').value;
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;
  const resultado = document.getElementById('resultado');

  if(nome !== '' && peso !== '' && altura !== ''){
    const imc =  (peso / (altura * altura)).toFixed(1);
    const peso_min = (18.5*(altura**2).toFixed(1));
    const peso_max = (25*(altura**2).toFixed(1));
    let classificacao = '';

   

    if(imc < 18.5){
      classificacao = 'abaixo do peso' 
    }else if(imc > 18.5 && imc < 24.9){
      classificacao = 'com o peso adequado'      
    }else if(imc > 24.9 && imc < 29.9){
      classificacao = 'com sobrepeso'    
    }else if(imc > 29.9 && imc < 34.9){
      classificacao = 'com obesidade grau 1'     
    }else if(imc > 34.9 && imc < 39.9){
      classificacao = 'com obesidade grau 2'     
    }else{
      classificacao = 'com obesidade grau 3'    
    }
    
    resultado.textContent = `Olá ${nome}!!! Com ${peso}Kg e ${altura}m seu imc é ${imc} e você está ${classificacao}.Procure manter o seu peso entre ${peso_min}kg e ${peso_max}kg`;
  }else{
    resultado.textContent = 'Preencha todos os campos!!!';
  }
}

function limpar_elementos () {
  const nome = document.getElementById('nome').value;
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;
  const resultado = document.getElementById('resultado');

  document.getElementById('peso').value = ' ';
  document.getElementById('altura').value = ' ';
  document.getElementById('nome').value = ' ';
  document.getElementById('resultado').value = ' ';

  resultado.textContent = ' ';
}
