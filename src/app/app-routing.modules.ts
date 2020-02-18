import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from "./bill-navbar/autenticacao/login/login.component";
import { LoginFullComponent } from './bill-navbar/autenticacao/login-full/login-full.component';

const routes: Routes = [
    { path: 'lancamentos', loadChildren: './pages/lancamento/lancamento.module#LancamentoModule' },
    { path: 'categorias', loadChildren: './pages/categoria/categoria.module#CategoriaModule' },
    { path: 'faturas', loadChildren: './pages/fatura/fatura.module#FaturaModule' },
    { path: 'login', component: LoginComponent },
    { path: 'login-full', component: LoginFullComponent },
    { path: '', component: HomeComponent }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
