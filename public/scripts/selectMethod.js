const selectMethod = document.querySelectorAll(".selectMethod")
const form = document.querySelector("form")

for (let actionMethod of selectMethod) {
  actionMethod.addEventListener("click", function() {

      const content = actionMethod.getAttribute("id")

      console.log(content)

      if(content === "put") {
        form.action = "/admin/recipes/?_method=PUT"
      }
      else if (content === "delete") {
        form.action = "/admin/recipes/?_method=DELETE"
      }
  })
}

/*const buttons = document.querySelectorAll(".remove-ingredient")

const inputs = document.querySelectorAll(".ingredient")

for (let button of buttons) {
  button.addEventListener("click", function() {

    const buttonIndex = ( button.getAttribute("id") ) - 10

    console.log(buttonIndex)

    button.remove()

    input = inputs[buttonIndex]

    input.remove()

  })
}*/


/*const ingredients = document.querySelectorAll(".remove-ingredient")

const inputIngredients = document.querySelectorAll(".ingredient")

for(let ingredient of ingredients) {
    ingredient.addEventListener("click", function () {
        
        const ingredientIndex = ingredient.getAttribute("id")
        
        //console.log(ingredientIndex)

        ingredient.remove()

        const inputElement = document.getElementById 
      

        
    } )
}
*/

