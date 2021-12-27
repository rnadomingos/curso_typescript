// TIPAGENS PRIMITIVAS

let nome: string = 'Giropops';

let idade = 90;

let programador: boolean = true;


//Arrays
let nomes: string[] = ['strigus', 'giropops', 'renan', 'stratus'];

let idades: number[] = [90,15,30,20];

// modo não muito utilizado, dar preferencia ao modelo anterior (number[])
let idade2: Array<number> = [90,15,30,20];

// type any - aceita qualquer tipo
let nomess: any = ['strigus', 'giropops', 90, 'stratus'];

nomess.push(true);


