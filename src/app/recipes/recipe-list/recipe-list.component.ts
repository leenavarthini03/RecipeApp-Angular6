import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("test1","this is the sample recipe1","https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/14/0/0046750F4_Wild-Rice-Pilaf-with-Nuts-and-Lemon_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371591495859.jpeg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
