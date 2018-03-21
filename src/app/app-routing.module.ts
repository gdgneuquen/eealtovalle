import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EtapasComponent } from './etapas/etapas.component';
import { RecursosComponent } from './recursos/recursos.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'etapas', component: EtapasComponent },
  { path: 'recursos', component: RecursosComponent },
  { path: 'portfolio/:etapa', component: PortfolioComponent },
  { path: 'detalle/:id', component: PortfolioDetailComponent }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
