import { Component } from '@angular/core';

import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  providers: [RecipeService]
})
export class AppComponent {
}
