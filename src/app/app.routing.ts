import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { recipes_routes } from './recipes/recipes.routes';

const app_routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: recipes_routes },
  { path: 'shopping-list', component: ShoppingListComponent }
];

export const app_routing = RouterModule.forRoot(app_routes);
