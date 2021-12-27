//Trabalhando com Funcoes

function firstLetterUpperCase(name: string){
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter+name.substring(1);
}
// exemplo de um erro/critica do TS
//firstLetterUpperCase(90);


// Inserindo tipagem(Type) no retorno de uma função

function firstLetterUpperCase2(name1: string): string{
    let firstLetter = name1.charAt(0).toUpperCase();
    return firstLetter+name1.substring(1);
}

let nome3: string = firstLetterUpperCase2('renan');

// Exemplo 2
function somar(n1: number, n2: number): number{
    return n1 + n2;
}

let alguma = somar(10, 2);