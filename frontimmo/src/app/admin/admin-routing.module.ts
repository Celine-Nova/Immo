import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TypeListComponent} from './type/type-list/type-list.component';
import {TypeAddComponent} from './type/type-add/type-add.component';
import {TypeEditComponent} from './type/type-edit/type-edit.component';

const adminRoutes: Routes = [
    { path: 'types', component: TypeListComponent },
    { path: 'type/add', component: TypeAddComponent },
    { path: 'type/edit/:id', component: TypeEditComponent },
    // { path: 'category', component: AdminCategoryList },
    // { path: 'category/add', component: CategoryAddComponent },
    // { path: 'category/edit/:id', component: CategoryEditComponent },
    // { path: 'movie', component: AdminMovieList },
    // { path: 'movie/add/actor/:id', component: AddActorComponent },
    // { path: 'movie/add', component: MovieAddComponent },
    // { path: 'movie/edit/:id', component: MovieEditComponent },
];
@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
