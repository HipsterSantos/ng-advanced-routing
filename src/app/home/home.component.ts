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
  loadServer(){
    this.route.navigate(['server'],{relativeTo: this.activeRoute})
    // this.activeRoute.
  }

}
