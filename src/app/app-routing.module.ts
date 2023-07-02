import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StartangularComponent } from './startangular/startangular.component';

const routes: Routes = [{path:'portfolio', component : PortfolioComponent},
{path:'about', component : AboutComponent},
{path:'contact', component :ContactComponent},
{path:'portfolio',component:PortfolioComponent},
{path:'startangular',component:StartangularComponent},
{path:'',redirectTo:"startangular",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
