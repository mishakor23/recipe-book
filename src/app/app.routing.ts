import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home.component';


const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule'},
  { path: 'shopping-list', component: ShoppingListComponent }
];

export const routing = RouterModule.forRoot(app_routes);
