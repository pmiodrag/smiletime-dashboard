import { Component } from 'angular2/core';
import { CORE_DIRECTIVES} from 'angular2/common';
import { ROUTER_DIRECTIVES, RouteConfig , RouterLink} from 'angular2/router';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
//import { AuthComponent } from './auth/auth.component';
import {Dashboard} from './components/dashboard/dashboard';
import {Tables} from './components/tables/tables';
@Component({ 
    selector: 'app-container',
    directives: [ROUTER_DIRECTIVES, RouterLink, CORE_DIRECTIVES, CustomersComponent, Dashboard],
    templateUrl: 'app/app.component.html' 
})
@RouteConfig([
 { path: '/customers', as: 'Customers', component: CustomersComponent },
 { path: '/orders/:id', as: 'Orders', component: OrdersComponent    },
//    { path: '/login', as: 'Auth', component: AuthComponent },
//     {path: '/dashboard',  component: Dashboard, as: 'Dashboard', useAsDefault: true },
  {path: '/tables', component: Tables, as: 'Tables'},
])
export class AppComponent {
  
  mobileView:number = 992;
  toggle:boolean = false;
  profile: string;
  pacientDisplayModeEnabled: boolean;
  constructor() {
    this.attachEvents();
  }

  ngOnInit() {
   
    this.pacientDisplayModeEnabled = true;

  
  }
  attachEvents() {
    window.onresize = ()=> {
      if (this.getWidth() >= this.mobileView) {
        if (localStorage.getItem('toggle')) {
          this.toggle = !localStorage.getItem('toggle') ? false : true;
        } else {
          this.toggle = true;
        }
      } else {
        this.toggle = false;
      }
    }
  }

  getWidth() {
    return window.innerWidth;
  }

  toggleSidebar() {
    this.toggle = !this.toggle;
    localStorage.setItem('toggle', this.toggle.toString());
  }
  
}
