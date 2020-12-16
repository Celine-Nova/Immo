import { NgModule } from '@angular/core';




import { Routes, RouterModule } from '@angular/router';
import { DetailPropertyComponent } from './detail-property/detail-property.component';
import { PropertyListComponent } from './property-list/property-list.component';

const publicRoutes: Routes = [
    { path: '', component: PropertyListComponent },
    { path: 'detail/:id', component: DetailPropertyComponent },
]

@NgModule({
    imports: [RouterModule.forChild(publicRoutes)],
    exports: [RouterModule]
})
export class PublicRoutingModule { }
