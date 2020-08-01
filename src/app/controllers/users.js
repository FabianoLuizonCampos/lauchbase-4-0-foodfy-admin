//const recipes = require("../../database/data")
const data = require("../../database/data.json")

module.exports = {
    about (req,res) {
        return res.render("user/about")
    },
    recipes (req,res) {
        return res.render("user/recipes", { items: data.recipes} )
    },
    recipe_details (req,res) {
        let { id } = req.params     
        
        const foundRecipe = data.recipes.find( function (recipe) {
            return ( recipe.id == id) // Could be a if            
        })
        
        if (! foundRecipe ) return res.send("Recipe not found")

        //console.log(data.recipes[id])
        return res.render("user/recipe-detail", { item: foundRecipe })
    }
}