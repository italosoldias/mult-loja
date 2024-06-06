export function validaCPF(strCPF) {
  // Remove any non-digit characters and convert the input to a string
  let Soma;
  let Resto;
  Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11)) Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10))) return false;

  Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11)) Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11))) return false;
  return true;
}



export function temEspacosEmBrancoExcessoOuVazio(inputString) {
  //Remove espaços iniciais e finais usando expressões regulares


  if (inputString == "" || inputString == " ") {

    return true

  } else {
    // Verifica se há espaços consecutivos usando uma expressão regular
    const regex = /\s{2,}/g; // Corresponde a três ou mais espaços consecutivos

    const temMuitoEspacoEmBranco = regex.test(inputString);
    return temMuitoEspacoEmBranco;
  }

  // const espacosString = inputString.trim();
  // Verifica se há espaços consecutivos usando uma expressão regular



}

