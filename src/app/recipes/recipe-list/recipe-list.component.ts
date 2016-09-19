import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'https://s-media-cache-ak0.pinimg.com/736x/0e/33/60/0e33609bd82661102258d0d4c7832f4b.jpg');

  constructor() { }

  ngOnInit() {
  }

}
