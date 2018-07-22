import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] = [
    new Ingredient("potato",12),
    new Ingredient("sugar",8),
    new Ingredient("chillies",10),
    new Ingredient("tomatoes",9)
  ];
  constructor() { }

  ngOnInit() {
  }

}
