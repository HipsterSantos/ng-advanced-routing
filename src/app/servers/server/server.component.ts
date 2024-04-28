import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  server!: {id: number, name: string, status: string};
  serverId!: number;
  allowEdit: boolean = false;
  constructor(private route: Router, private serversService: ServersService,private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.serverId  = +this.activeRoute.snapshot.params['id']
    this.server = this.serversService.getServer(this.serverId)!;
    this.allowEdit = this.activeRoute.snapshot.queryParams['allowEdit']
    
    this.activeRoute.params.subscribe( (params: Params)=>{
      this.server = this.serversService.getServer(+params['id'])!;
    })
    this.activeRoute.queryParams.subscribe( (params: Params)=>{
      this.allowEdit = params['allowEdit']
    })
    console.log('server - queryparams', this.activeRoute.snapshot.queryParamMap)
    console.log('server - fragment', this.activeRoute.snapshot.fragment)
  }
  onEdit(){
    this.route.navigate(['/server',this.serverId,'edit'],{
      relativeTo: this.activeRoute ,
      preserveFragment: true,
      queryParamsHandling:'merge',
      queryParams:{allowEdit: 1},
      fragment:'top'
    })
  }

}
