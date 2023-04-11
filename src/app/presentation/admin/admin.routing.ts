import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";

const DEFAULT_ROUTE: string = 'enterprise'

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [

            // Ruta Default
            {
                path: '',
                redirectTo: DEFAULT_ROUTE,
                pathMatch: 'full'
            },

            // Empresa  Module
            {
                path: 'enterprise', // rutas-routing.module
                loadChildren: () => import('./enterprise/enterprise.module').then(m => m.EnterpriseModule)
            },

            // Client Module
            {
                path: 'client',
                loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
            },

            // Billing Module
            {
                path: 'billing',
                loadChildren: () => import('./billing/billing.module').then(m => m.BillingModule)
            },

            // Rates Module
            {
                path: 'rates',
                loadChildren: () => import('./rates/rates.module').then(m => m.RatesModule)
            },

            // Settlement Module
            {
                path: 'settlement',
                loadChildren: () => import('./settlement/settlement.module').then(m => m.SettlementModule)
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class AdminRoutingModule { }