import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes:[
    {
        component: UserComponent,
        path:'user',
        children: [
          {
            path:'users/:id/:name',
            component: UserComponent
          }  
        ]
      },
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[]
})
export class appRoutingModule{}