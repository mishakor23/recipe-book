import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Banana Bread', 'This banana bread recipe is moist and delicious, with loads of banana flavor. It\'s wonderful toasted!', 'http://images.media-allrecipes.com/userphotos/250x250/914962.jpg', [
      new Ingredient('Banana', 3),
      new Ingredient('Flour', 2)
    ]),
    new Recipe('Cheddar Baked Chicken', `A crunchy, cheesy coating provides an exciting blend of flavors for baked chicken.`, 'http://images.media-allrecipes.com/userphotos/250x250/696093.jpg', []),
    new Recipe('Italian BBQ Pork Chops', `Pork chops with a quick homemade BBQ sauce made with balsamic vinegar, ketchup, and brown sugar have just the right amount of sweetness to become addictive.`, 'http://images.media-allrecipes.com/userphotos/250x250/659267.jpg', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}
