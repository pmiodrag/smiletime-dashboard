import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink, RouteParams } from 'angular2/router';
import { DataService } from '../../shared/services/data.service';

@Component({ 
  selector: 'treatments',
  providers: [DataService],
  templateUrl: 'app/components/treatments/treatments.html',
  directives: [CORE_DIRECTIVES, RouterLink]
})
export class TreatmentsComponent {
	
    title: string = 'Pacients';
    filteredTreatments: any[] = [];
  
    constructor(private dataService: DataService, private _routeParams: RouteParams) {
      
    }
    
    ngOnInit() {
      let patientId = parseInt(this._routeParams.get('id'), 10);
      this.dataService.getTreatments().subscribe((treatments: any[]) => {
          
        this.filteredTreatments = treatments.filter(treatment => treatment.patientId === patientId);
         console.log("this.filteredTreatments", this.filteredTreatments);
      });
    }
}
