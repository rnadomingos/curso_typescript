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

// #7 - Contextual Typing em funções anônimas

let names = ['bonieky', 'pedro', 'camila', 'paulo', 90];

names.forEach( function(nome){
    if(typeof nome === 'string'){
        console.log(nome.toUpperCase());
    } else {
        console.log(nome);
    }
});

