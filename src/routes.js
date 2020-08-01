const express = require("express")
const routes = express.Router()
const users = require("../src/app/controllers/users")
const recipes = require("../src/app/controllers/admins")

//First Route
const data = require("../src/database/data.json")

routes.get("/", function (req,res) {
    
    return res.render("user/index", { items: data.recipes} )
})

// Users Route
routes.get("/about", users.about)
routes.get("/recipes", users.recipes)
routes.get("/recipe-detail/:id", users.recipe_details )

// Admin Route

routes.get("/admin/recipes", recipes.index) // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita
routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
routes.put("/admin/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita


module.exports = routes