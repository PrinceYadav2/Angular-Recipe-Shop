import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;

  // @Output() ingredientAdded : EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient(amountEl: HTMLInputElement) {
    const amount = parseInt(amountEl.value);
    const name = this.nameInputRef.nativeElement.value;
    if (!amount || !name) {
      return;
    }
    const ingredient = new Ingredient(name, amount);
    this.shoppingListService.addIngredient(ingredient);
  }

}
