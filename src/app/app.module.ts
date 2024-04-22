import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    component: UsersComponent,
    path:'user',
    children: [
      {
        path:'users/:id/:name',
        component: UserComponent
      }  
    ]
  },
  {
    component: ServersComponent,
    path:'server',
    children:[
      {
        component: EditServerComponent,
        path: ':id/edit'
      },
      {
        component: ServerComponent,
        path: ':id'
      }
    ]
  },
  
  {
    component: HomeComponent,
    path:''
  },
  {
    path: '404'
  },
  {path: '**', redirectTo: '/404'}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
