import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

 constructor(private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToProviderEditPage(){
     this.router.navigate(['/doctorhomepage/providereditpage']);
  }

}
