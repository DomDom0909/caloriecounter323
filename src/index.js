const meal = document.querySelector("#meal");//calorieName
const calories = document.querySelector("#calories");//calorie
const addMeal = document.querySelector("#addMeal");//createElement
const remove = document.querySelector("#remove");//cancle
const table = document.querySelector("#table");//table

addMeal.addEventListener("click", function(event) { 
    addToTable(event);
});

function addToTable(event) {
    if (meal.value !== "" && calories.value !== "") { 
        const newMeal = document.createElement("tr");
        const newMealName = document.createElement("td");
        const newcalories = document.createElement("td");
        
        newMealName.innerText = meal.value;
        newcalories.innerText = calories.value;
        meal.value = "";
        calories.value = "";

        newMeal.appendChild(newMealName);
        newMeal.appendChild(newcalories);
        table.appendChild(newMeal);
    }
}

remove.addEventListener("click", function(event) {
    meal.value = "";
    calories.value = "";
});