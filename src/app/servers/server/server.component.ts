import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  server!: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1)!;
    console.log('server - queryparams', this.activeRoute.snapshot.queryParamMap)
    console.log('server - fragment', this.activeRoute.snapshot.fragment)
  }

}
