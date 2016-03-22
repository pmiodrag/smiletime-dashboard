import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink } from 'angular2/router';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../shared/services/data.service';
import { Sorter } from '../../shared/sorter';
import { FilterTextboxComponent } from './filterTextbox.component';
import { SortByDirective } from '../../shared/directives/sortby.directive';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';
import { TrimPipe } from '../../shared/pipes/trim.pipe';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
@Component({ 
  selector: 'pacients', 
  providers: [DataService],
  templateUrl: 'app/components/pacients/pacients.html',
  directives: [CORE_DIRECTIVES, RouterLink, FilterTextboxComponent, SortByDirective],
  pipes: [CapitalizePipe, TrimPipe]
})
export class PacientsComponent {

  title: string;
  filterText: string;
  listDisplayModeEnabled: boolean;
  pacients: any[] = [];
  filteredPacients: any[] = [];
  sorter: Sorter;

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.title = 'Pacients';
    this.filterText = 'Filter Pacients:';
    this.listDisplayModeEnabled = false;

    this.dataService.getPacients() 
        .subscribe((pacients:any[]) => {
          console.log("getPacients", pacients);
          this.pacients = this.filteredPacients = pacients;
        });

    this.sorter = new Sorter();
  }

  changeDisplayMode(mode: string) {
      this.listDisplayModeEnabled = (mode === 'List');
  }

  filterChanged(data: string) {
    if (data && this.pacients) {
        data = data.toUpperCase();
        let props = ['firstName', 'middleName', 'lastName', 'address', 'place'];
        let filtered = this.pacients.filter(item => {
            let match = false;
            for (let prop of props) {
                if (item[prop]!= null && item[prop].toString().toUpperCase().indexOf(data) > -1) {
                  match = true;
                  break;
                }
            };
            return match;
        });
        this.filteredPacients = filtered;
    }
    else {
      this.filteredPacients = this.pacients;
    }
  }

  deletePacient(id: number) {

  }

  sort(prop: string) {
      //Check for complex type such as 'state.name'
      if (prop && prop.indexOf('.')) {
        
      }
      this.sorter.sort(this.filteredPacients, prop);
  }

}
