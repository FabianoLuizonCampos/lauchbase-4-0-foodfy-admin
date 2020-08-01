//const recipes = require("../../database/data")
const data = require("../../database/data.json")
const fs = require("fs")

module.exports = {
    index (req,res) {

        return res.render("admin/recipes/index", { items: data.recipes } )

    },
    show (req,res) {
        const { id } = req.params     
        
        const foundRecipe = data.recipes.find( function (recipe) {
            return ( recipe.id == id) // Could be a if            
        })
        
        if (! foundRecipe ) return res.send("Recipe not found")

        //console.log(foundRecipe)
        return res.render("admin/recipes/recipe-detail", { item: foundRecipe })
    },
    create (req, res) {
        return res.render("admin/recipes/create")   
    },
    post (req, res) {
        
        const keys = Object.keys(req.body)

        
        for (const key of keys) {

            if (req.body[key] == "") {
                return res.send('Por favor, preencha todos os campos')            
            }        
        }
    
        let { image, title, author, ingredients, preparation, information } = req.body

        const id = Number(data.recipes.length + 1)
              
        data.recipes.push({
            id,
            image,
            title,
            author,
            ingredients, 
            preparation, 
            information
        })

        console.log(data)

       
        fs.writeFile("src/database/data.json", JSON.stringify(data, null, 4), function(err) {
            if (err) { 
                return res.send(`Houve um erro no cadastro!!!: ${err}`)
            }
            
            //return res.send("ok")
            return res.redirect("/admin/recipes")        
            
            }
        )
        
        
    },
    edit (req, res) {
        const { id } = req.params     
        
        const foundRecipe = data.recipes.find( function (recipe) {
            return ( recipe.id == id)            
        })
        
        if (! foundRecipe ) return res.send("Recipe to edit  not found")

        return res.render("admin/recipes/edit", { item: foundRecipe })
    },
    put (req, res) {

        const { id } = req.body

        //console.log(id)

        let index = 0

        const foundRecipe = data.recipes.find( function (recipe, foundIndex) {
            if ( recipe.id == id) {
                index = foundIndex
                return true
            }            
        })

        if (! foundRecipe ) return res.send("Recipe to put  not found") 

        const recipe = {
            ...foundRecipe,
            ...req.body,
            id: Number(req.body.id)
        }

        data.recipes[index] = recipe

        fs.writeFile("src/database/data.json", JSON.stringify(data, null, 4), function(err) {
            if (err) { 
                return res.send(`Houve um erro no cadastro!!!: ${err}`)
            }
            
            //return res.send("ok")
            return res.redirect(`/admin/recipes/${id}`)        
            
            }
        )
        

    },
    delete (req, res) {
        
        const { id } = req.body

        const filteredRecipe = data.recipes.filter(function (recipe) {
            return recipe.id != id
        })

        data.recipes = filteredRecipe

        fs.writeFile("src/database/data.json", JSON.stringify(data, null, 4), function(err) {
            if (err) { 
                return res.send('Houve um erro na exclusão da receita!!!')
            }
            
            return res.render("admin/recipes/index", { items: data.recipes } )   
            
            }
        )
        
    }
}