import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router,private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  loadServer(id: number){
    this.route.navigate(['server',id,'edit'],{queryParams:{allowEdit: '1'},fragment:'loading',relativeTo: this.activeRoute})
    console.log('query params = ',this.activeRoute.snapshot.queryParamMap)
    console.log('fragments = ',this.activeRoute.snapshot.fragment)
  }

}
