import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFound } from './pageNotFound/404.component';

@NgModule({
    declarations:[
        NavBarComponent,
        PageNotFound,
    ],
    imports:[
        RouterModule.forRoot([
            { 
              path:'**',component : PageNotFound 
            }])
    ],
    exports :[
        NavBarComponent,
    ]

})
export class CoreModule { }