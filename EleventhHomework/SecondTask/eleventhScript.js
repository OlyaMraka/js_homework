// #whXxOBlYS0H
//
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// // Інгредієнти повинні бути списком під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(data => {
        let {recipes, total, skip, limit} = data;

        for(let {
            id,
            name,
            ingredients,
            instructions,
            prepTimeMinutes,
            cookTimeMinutes,
            servings,
            difficulty,
            cuisine,
            caloriesPerServing,
            tags,
            userId,
            image,
            rating,
            reviewCount,
            mealType} of recipes) {

            let recipeContainer = document.createElement("div");
            recipeContainer.className = "recipe_container";

            let recipeHeader = document.createElement("div")
            recipeHeader.className = "recipe_header"

            let recipeId = document.createElement("p")
            recipeId.innerText = id;
            let recipeTitle = document.createElement("p")
            recipeTitle.innerText = name;
            recipeHeader.append(recipeId, recipeTitle);

            let instructionsBlock = document.createElement("div")
            instructionsBlock.className = "instructions_block";

            let ingredientsList = document.createElement("ul")
            ingredientsList.className = "ingredients_list"
            for(let ingredient of ingredients) {
                let ingredientText = document.createElement("li");
                ingredientText.innerText = ingredient;
                ingredientsList.appendChild(ingredientText);
            }

            let instructionsList = document.createElement("ul")
            instructionsList.className = "instructions_list"
            for(let instruction of instructions) {
                let instructionText = document.createElement("li")
                instructionText.innerText = instruction;
                instructionsList.appendChild(instructionText);
            }

            instructionsBlock.append(ingredientsList, instructionsList);

            let otherDetails = document.createElement("div");
            otherDetails.className = "other_details";
            let otherDetailText = document.createElement("p")
            otherDetailText.innerHTML = `Preparation Time Minutes: ${prepTimeMinutes}<br>
Cooking Time Minutes: ${cookTimeMinutes}<br>Servings: ${servings}<br>Difficulty: ${difficulty}<br>
Cuisine: ${cuisine}<br>Calories per Serving: ${caloriesPerServing}<br>Creator id: ${userId}<br>`;

            let tagsContainer = document.createElement("div");
            tagsContainer.className = "tags_container";
            tagsContainer.className = "tags";
            for (let tag of tags) {
                let tagText = document.createElement("p")
                tagText.innerText = tag;
                tagsContainer.appendChild(tagText);
            }

            otherDetails.append(otherDetailText, tagsContainer);

            let outcomeContainer = document.createElement("div");
            outcomeContainer.className = "outcome_container";

            let outcomeImage = document.createElement("img");
            outcomeImage.src = image;
            outcomeImage.className = "outcome_image";

            let outComeDetails = document.createElement("p");
            outComeDetails.className = "outcome_details";
            outComeDetails.innerHTML = `Rating: ${rating}<br>Review count: ${reviewCount}<br>`;

            let mealTypesContainer = document.createElement("div");
            for(let type of mealType){
                let mealTypeText = document.createElement("p")
                mealTypeText.innerText = type;
                mealTypesContainer.appendChild(mealTypeText);
            }

            outcomeContainer.append(outComeDetails, outcomeImage, mealTypesContainer);

            recipeContainer.append(recipeHeader, instructionsBlock, otherDetails, outcomeContainer);

            document.body.appendChild(recipeContainer);
        }

        let footerContainer = document.createElement("div");

        let totalText = document.createElement("p");
        totalText.innerText = `Total: ${total}`;

        let skipText = document.createElement("p");
        skipText.innerText = `Skip: ${skip}`;

        let limitText = document.createElement("p");
        limitText.innerText = `Limit: ${limit}`;

        footerContainer.append(totalText, skipText, limitText);

        document.body.append(footerContainer);
    });