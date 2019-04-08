import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FitnessComponent} from './fitness/fitness.component';
import { YogaComponent } from './yoga/yoga.component'

const appRoutes : Routes =[
    { path : 'fitness' , component : FitnessComponent},
    { path : 'yoga' , component : FitnessComponent}
];

@NgModule({
    imports:[ RouterModule.forRoot(appRoutes)],
    exports:[ RouterModule ]
    })

    export class AppRoutingModule{

    }