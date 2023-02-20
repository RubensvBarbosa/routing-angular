import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.route.data
      .subscribe(
        (data: Data) => {
          this.server = data['server'];
        }
      );



    // HIS SOLUTION
    // const id =  +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // )

    // MY SOLUTION
    // this.server = {
    //   id: this.route.snapshot.params['id'],
    //   name: this.route.snapshot.params['name'],
    //   status: this.route.snapshot.params['status'],
    // };
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server.id = params['id'];
    //     this.server.name = params['name'];
    //     this.server.status = params['status'];
    //   }
    // );
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
