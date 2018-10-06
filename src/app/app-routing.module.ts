import { LoginComponent } from "./login/login.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { Routes, RouterModule} from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

export const APP_ROUTES:Routes=[

  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'cadastro',component:CadastroComponent},
];


