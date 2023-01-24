import User from "../models/userModels.js";
import UsersDAO from "../UsersDAO/UsersDAO.js";

function indexController(app, bd) {
  const newUsersDAO = new UsersDAO(bd);
  app.get("/", async (req, res) => {
    try {
      const userdata = await newUsersDAO.pegarTodosDados();
      res.json(userdata);
    } catch (erro) {
      console.log(erro);
    }
  });

  app.post("/", async (req, res) => {
    try {
      const newUser = new User(req.body.nome, req.body.senha, req.body.email);
      const newdataUser = await newUsersDAO.inserirDadosnovos(newUser);
      console.log(newUser);
      res.json(newdataUser);
    } catch (erro) {
      console.log(erro);
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
