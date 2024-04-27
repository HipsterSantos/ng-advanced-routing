import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.scss']
})
export class EditServerComponent implements OnInit {
  server!: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(private route:Router, private serversService: ServersService,private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(+this.activeRoute.snapshot.params['id'])!;
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.activeRoute.params.subscribe((params: Params)=>{
      if (params['id'] > this.serversService.getServers().length){
        this.route.navigate(['/notfound'])
      }
    })
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
