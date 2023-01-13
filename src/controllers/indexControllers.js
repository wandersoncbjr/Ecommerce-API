function indexController(app, bd) {
  app.get("/", (req, res) => {
    try {
      const SQL = `SELECT * FROM usuarios`;
      new Promise((resolve, reject) => {
        bd.all(SQL, (erro, rows) => {
          if (!erro) {
            resolve(rows);
          } else {
            reject(erro);
          }
        });
      }).then((result) => res.json(result));
    } catch (error) {
      console.log(error);
    }
  });

  app.post("Usuarios", (req, res) => {
    try {
      const SQL = `SELECT * FROM usuarios`;
      new Promise((resolve, reject) => {
        bd.all(SQL, (erro, rows) => {
          if (!erro) {
            resolve(rows);
          } else {
            reject(erro);
          }
        });
      }).then((result) => res.json(result));
    } catch (error) {
      console.log(error);
    }
  });

  app.put("Usuarios", (req, res) => {
    res.send("usuario atualizado");
  });

  app.delete("Usuarios", (req, res) => {
    res.send("usuario deletado");
  });

  app.get("Produtos", (req, res) => {
    res.send("pegando Produtos");
  });

  app.post("Produtos", (req, res) => {
    res.send(`Produtos ${req.body.nome} foi criado com sucesso`);
  });

  app.put("Produtos", (req, res) => {
    res.send("Produtos atualizado");
  });

  app.delete("Produtos", (req, res) => {
    res.send("Produtos deletado");
  });

  app.get("Carrinho", (req, res) => {
    res.send("pegando Carrinho");
  });

  app.post("Carrinho", (req, res) => {
    res.send(`Carrinho ${req.body.nome} foi criado com sucesso`);
  });

  app.put("Carrinho", (req, res) => {
    res.send("Carrinho atualizado");
  });

  app.delete("Carrinho", (req, res) => {
    res.send("Carrinho deletado");
  });
}

export default indexController;
