import { Component, OnInit } from '@angular/core';

import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private recipeService: RecipeService) { }

  onStore() {
    this.recipeService.storeData()
      .subscribe(
        data => console.log(data)
      );
  }

  onFetch() {
    this.recipeService.fetchData();
  }

}
