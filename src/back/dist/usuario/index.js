"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    connection;
    constructor(conexao) {
        this.connection = conexao.connection;
    }
    async createTableUsuario(dbName) {
        return new Promise((resolve, reject) => {
            this.connection.query(`Use ${dbName};`, (useErro, useResults) => {
                if (useErro) {
                    console.error("Erro ao selecionar o banco de dados:", useErro);
                    reject(useErro);
                }
                else {
                    console.log("Banco de dados selecionado com sucesso!");
                    this.connection.query(`create table if not exists usuario(
                        id_usuario int auto_increment primary key,
                        cpf int, rg varchar(9), nome varchar(50), foto varchar(50),
                        telefone varchar(14), email varchar(30), senha varchar(10),
                        endereco varchar(50), numero int, cep varchar(8), tipo int
                        );`, (error, results) => {
                        if (error) {
                            console.error("Erro ao criar a tabela:", error);
                            reject(error);
                        }
                        else {
                            console.log("Tabela crida com sucesso!");
                            resolve();
                        }
                    });
                }
            });
        });
    }
    async loginUsuario(dbName, credencial, senha) {
        return new Promise((resolve, reject) => {
            this.connection.query(`USE ${dbName};`, (useErro, useResults) => {
                if (useErro) {
                    console.error("Erro ao selecionar o banco de dados:", useErro);
                    reject(useErro);
                }
                else {
                    console.log("Banco de dados selecionado com sucesso!");
                    this.connection.query(`usuario(
                                id_usuario int auto_increment primary key,
                                cpf int, rg varchar(9), nome varchar(50), foto varchar(50),
                                telefone varchar(14), email varchar(30), senha varchar(10),
                                endereco varchar(50), cep varchar(8), tipo int
                                );`, [credencial, senha], (error, results) => {
                        if (error) {
                            console.error("Erro ao buscar usuário:", error);
                            reject(error);
                        }
                        else {
                            if (results.length > 0) {
                                console.log("Usuário encontrado:", results[0]);
                                resolve(true); // Usuário encontrado
                            }
                            else {
                                console.log("Usuário não encontrado");
                                resolve(false); // Usuário não encontrado
                            }
                        }
                    });
                }
            });
        });
    }
    async cadastroUsuario(dbName, cpf, rg, nome, foto, // Adicionado o parâmetro 'foto'
    telefone, email, senha, endereco, numero, cep, tipo) {
        return new Promise((resolve, reject) => {
            this.connection.query(`USE ${dbName};`, (useError, useResults) => {
                if (useError) {
                    console.error("Erro ao selecionar o banco de dados:", useError);
                    reject(useError);
                }
                else {
                    console.log("Banco de dados selecionado com sucesso!");
                    // Use placeholders (?) para os valores e passe-os como um array na query
                    this.connection.query(`INSERT INTO usuario (
                            cpf, rg, nome, foto, telefone, email, senha, endereco, numero, cep, tipo
                        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`, [cpf, rg, nome, foto, telefone, email, senha, endereco, numero, cep, tipo], (error, results) => {
                        if (error) {
                            console.error("Erro ao cadastrar usuário:", error);
                            reject(error);
                        }
                        else {
                            console.log("Usuário cadastrado com sucesso!");
                            resolve(true);
                        }
                    });
                }
            });
        });
    }
}
exports.Usuario = Usuario;
