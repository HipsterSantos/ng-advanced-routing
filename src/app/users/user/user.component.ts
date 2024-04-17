import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Params, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user!: {id: number, name: string};

  constructor(private route:Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = { 
      id:this.activeRoute.snapshot.params['id'],
      name:this.activeRoute.snapshot.params['name']
    }
    this.activeRoute.params.subscribe((params: Params)=>{
      this.user.id = params['id']
      this.user.name = params['name']
    })
      // this.route.events.pipe(filter( (e)=> {
      //   if(e instanceof NavigationStart){
      //     console.log('navigation started')
      //   }
      // }))
  }

}
