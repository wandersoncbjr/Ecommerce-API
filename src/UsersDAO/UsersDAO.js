class UsersDAO {
  constructor(banco) {
    this.bd = banco;
  }

  pegarTodosDados() {
    const SQL = `SELECT * FROM usuarios`;
   return new Promise((resolve, reject) => {
      this.bd.all(SQL, (erro, rows) => {
        if (!erro) {
          resolve(rows);
        } else {
          reject(erro);
        }
      });
    });
  }





  inserirDadosnovos(newUser) { const SQL = `INSERT INTO usuarios(id, nome, email, senha) VALUES(?,?,?,?) `;
 return new Promise((resolve, reject) => {
    this.bd.all(
      SQL,
      [newUser.id, newUser.nome, newUser.email, newUser.senha],
      (erro) => {
        if (!erro) {
          resolve("usuario criado" );
        } else {
          reject(erro);
        }
      }
    );
  })
} 
}


export default UsersDAO;