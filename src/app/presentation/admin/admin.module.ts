import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin.routing';
import { LayoutComponent } from './layout/layout.component';
import { PrimeNGModule } from 'src/app/common/shared/primeng/primeng.module';
//import { EnterpriseComponent } from './enterprise/enterprise.component';

const COMPONENTS = [
    LayoutComponent
]

@NgModule({
    declarations: [
        COMPONENTS,
       // EnterpriseComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        PrimeNGModule,
        AdminRoutingModule
    ]
})

export class AdminModule { }
