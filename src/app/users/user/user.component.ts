import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Params, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  user!: {id: number, name: string};
  paramsSubs!: Subscription;
  constructor(private route:Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = { 
      id:this.activeRoute.snapshot.params['id'],
      name:this.activeRoute.snapshot.params['name']
    }
    this.paramsSubs = this.activeRoute.params.subscribe((params: Params)=>{
      this.user.id = params['id']
      this.user.name = params['name']
    })
      // this.route.events.pipe(filter( (e)=> {
      //   if(e instanceof NavigationStart){
      //     console.log('navigation started')
      //   }
      // }))
  }
  ngOnDestroy(): void {
    this.paramsSubs.unsubscribe()
    //leave memory clean
  }

}
