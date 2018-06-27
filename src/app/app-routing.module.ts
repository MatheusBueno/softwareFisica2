import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenComponent } from './components/screen/screen.component';
import { HomeComponent } from './components/home/home.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
    {
        path: '',
        component: StartComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'screen/:screen',
        component: ScreenComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
