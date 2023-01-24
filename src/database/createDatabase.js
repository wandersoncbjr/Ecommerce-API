import sqlite3 from "sqlite3";
import path from "path";
const caminhoArq = path.resolve("./src/database/", "database.db");

const db = new sqlite3.Database(caminhoArq);

// habilitar as chaves extrangeiras
const pragma = `PRAGMA foreign_keys = ON`;

function enableForeignKey() {
  db.run(pragma, (error) => {
    if (error) console.log("Error in process of creation exec 'pragma'");
  });
}

//==== Usuários
const usuarios = `
CREATE TABLE usuarios (
    id VARCHAR(100) PRIMARY KEY,
    nome VARCHAR(150),
    email VARCHAR(150),
    senha VARCHAR(100)
)`;

const produtos = `
CREATE TABLE produtos (
   id VARCHAR(100) PRIMARY KEY,
    titulo VARCHAR(80),
    descricao VARCHAR(300),
    valor FLOAT(100)
)`;

const carrinho = `
CREATE TABLE carrinho (
   id VARCHAR(100) PRIMARY KEY,
    produtos_id VARCHAR(100),
    usuarios_id VARCHAR(100),
    status VARCHAR(20),
    FOREIGN KEY(produtos_id) REFERENCES produtos(id),
    FOREIGN KEY(usuarios_id) REFERENCES usuarios(id))`;



function CriarTabelaUsuarios(){
  db.run(usuarios, (error) => {
    if (error) console.log(error);
  });
}

function CriarTabelaProdutos() {
    db.run(produtos, (error) => {
      if (error) console.log(error);
    });
  }
  function CriarTabelaCarrinho(){
    db.run(carrinho, (error) => {
      if (error) console.log(error);
    });
  }

("");
db.serialize(() => {
  enableForeignKey();
  CriarTabelaUsuarios();
  CriarTabelaProdutos();
  CriarTabelaCarrinho();
});
