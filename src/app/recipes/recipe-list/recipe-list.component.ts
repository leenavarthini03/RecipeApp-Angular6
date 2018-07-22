import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("test1","this is the sample recipe1","http://pngimg.com/uploads/fries/fries_PNG22.png"),
    new Recipe("test1","this is the sample recipe1","http://pngimg.com/uploads/fries/fries_PNG22.png")

  ];

  constructor() { }

  ngOnInit() {
  }

}
