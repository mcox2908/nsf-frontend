import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnterpriseRoutingModule } from './enterprise.routing';
import { EnterpriseComponent } from './enterprise.component';
import { PrimeNGModule } from 'src/app/common/shared/primeng/primeng.module';

 import { PipeModule } from 'src/app/common/helpers/pipes/pipe.module';


const COMPONENTS = [
    EnterpriseComponent
   
]

@NgModule({
    declarations: [
        COMPONENTS
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        PipeModule,
        ReactiveFormsModule,
        PrimeNGModule,
        EnterpriseRoutingModule,
    ],
})

export class EnterpriseModule { }
