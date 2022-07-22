/* Como podemos rodar isso em um arquivo.ts sem causar erros? 
let employee = {};
employee.code = 10;
employee.name = "John"; */

// solução 1
const funcionario = {
    codigo: 10,
    nome: 'João'
};

// solução 2
const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'joao'
}

// solução 3 e 4
interface Funcionario {
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'João'
}