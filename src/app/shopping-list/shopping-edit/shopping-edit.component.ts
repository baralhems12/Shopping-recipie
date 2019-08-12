import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";
import { Ingredients } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("inputName", { static: false }) shopInputName: ElementRef;
  @ViewChild("inputAmount", { static: false }) shopInputAmount: ElementRef;
  // @Output() addShopItem = new EventEmitter<Ingredients>();
  constructor(private slService: ShoppingListService) {}

  ngOnInit() {}

  addOnClick() {
    const newIngName = this.shopInputName.nativeElement.value;
    const newIngAmt = this.shopInputAmount.nativeElement.value;
    const newIngItem = new Ingredients(newIngName, newIngAmt);
    // this.addShopItem.emit(newIngItem);
    this.slService.addIngredients(newIngItem);
  }
}
