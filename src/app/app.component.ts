import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from './Services/api-services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test';

  allInformation: any
  constructor(private api: ApiServicesService) { }
  ngOnInit(): void {
    this.api.getAllDetails().subscribe((data: any) => {
      console.log(data.users);
      this.allInformation=data.users

    })
  }

}
