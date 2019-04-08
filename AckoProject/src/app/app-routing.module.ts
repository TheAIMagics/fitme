import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FitnessComponent} from './fitness/fitness.component';


const appRoutes : Routes =[
    { path : 'fitness' , component : FitnessComponent}
];

@NgModule({
    imports:[ RouterModule.forRoot(appRoutes)],
    exports:[ RouterModule ]
    })

    export class AppRoutingModule{

    }