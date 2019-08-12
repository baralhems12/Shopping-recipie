import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredients } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  selectRecipe = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {}
  // recipes array of type 'Recipe' Model
  private recipes: Recipe[] = [
    new Recipe(
      "Momo",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/6/6c/Plateful_of_Momo_in_Nepal.jpg",
      [new Ingredients("buff meat", 2), new Ingredients("flour", 3)]
    ),
    new Recipe(
      "Nepali food",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Nepali_Dal_Bhat.JPG",
      [new Ingredients("rice", 2), new Ingredients("lentils", 3)]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.slService.addIngredientsFrmRecipe(ingredients);
  }
}
