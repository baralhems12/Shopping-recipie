import { Component, OnInit } from "@angular/core";
import { Ingredients } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];
  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChange.subscribe(
      (newIngredients: Ingredients[]) => (this.ingredients = newIngredients)
    );
  }

  // shoppingItem(ingredient: Ingredients) {
  //   this.ingredients.push(ingredient);
  // }
}
