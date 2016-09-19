import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Banana Bread', 'This banana bread recipe is moist and delicious, with loads of banana flavor. It\'s wonderful toasted!', 'http://images.media-allrecipes.com/userphotos/250x250/914962.jpg', []),
    new Recipe('Cheddar Baked Chicken', `A crunchy, cheesy coating provides an exciting blend of flavors for baked chicken.`, 'http://images.media-allrecipes.com/userphotos/250x250/696093.jpg', []),
    new Recipe('Italian BBQ Pork Chops', `Pork chops with a quick homemade BBQ sauce made with balsamic vinegar, ketchup, and brown sugar have just the right amount of sweetness to become addictive.`, 'http://images.media-allrecipes.com/userphotos/250x250/659267.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();


  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
