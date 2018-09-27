import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const appRoutes: Routes = [
  {path: 'produit', component: ProduitComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/produit', pathMatch: 'full'}
];

@NgModule({
      imports: [
        RouterModule.forRoot(
          appRoutes,
          {enableTracing: true}
        )
      ],
      exports: [RouterModule]
})

export class AppRoutingModule {

}
