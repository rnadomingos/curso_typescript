
// Aula #8 - Types em Objetos
function resumo(usuario: {nome: string, idade: number}){
    return `Olá!! ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos.`; 
}

//Implementação da Função
let u = {
    nome: 'Renan',
    idade: 90,
};
resumo(u);

//Aula #9 - Propriedades Opcionais
function resumo1(usuario: {nome: string, idade?: number}){
    if(usuario.idade !== undefined){
        return `Olá!! ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos.`; 
    } else {
        {
         return `Olá!! ${usuario.nome}, tudo bem?`; 
        }
    }
    
}
//Implementação da Função
let u1 = {
    nome: 'Renan',
};
resumo1(u1);

// Aula #10 - Union Types (Multiplos Tipos)

function mostrarIdade(idade: string | number ){
    if (typeof idade === 'string') {
        console.log(idade.toUpperCase());
    } else {
        console.log(idade);        
    }
}

mostrarIdade(10);
mostrarIdade("90");

// Aula #11 - Type e Interface: Como usar e suas diferenças

// A principal diferença entre type e interface é que o type pode ser definido apenas 1 vez, 
// enquanto que o interface pode ser **reescrito mais de uma vez, 
// adicionando novas propriedades aos objetos em outros locais do código

// Utilizado sempre em PascalCase (NomeSobrenome), diferente do camelCase(nomeSobrenome).

/*
EXEMPLO DE USO TYPE

type User = {
    nome: string,
    idade: number
};
*/

//EXEMPLO DE USO INTERFACE

/* interface User {
    nome: string;
    idade: number;
} */

// EXEMPLO 2 DE USO INTERFACE 

interface User {
    nome: string;
}

interface User {
    idade: number;
}

function resumido(usuario: User){
    return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`;
}

resumido({
    nome: 'Renan',
    idade: 30
});

// Aula #12 - Type Assertions

/*  sem o Assertions - o TypeScript gera um alerta por não ter certeza
    se a propriedade value existirá neste Element do HTML 
*/
let idadeField1 = document.getElementById('idade');
//...
console.log(idadeField1.value)

/* com o Assertions - o TypeScript reconhece que o campo vindo do HTML reconhecerá que existe
   a propriedade value no campo indicado. */

let idadeField2 = document.getElementById('idade') as HTMLInputElement;
//....
console.log(idadeField2.value)