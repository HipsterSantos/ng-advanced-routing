import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.scss'
})
export class NotfoundComponent implements OnInit{

    constructor(private route: Router){}
    ngOnInit(): void {
      setTimeout(()=>{
        this.route.navigate(['/'])
      },1000)
    }
}
