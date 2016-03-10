declare var require: any;
import { Component } from 'angular2/core';
import { CORE_DIRECTIVES} from 'angular2/common';
import { ROUTER_DIRECTIVES ,RouteConfig, RouterLink} from 'angular2/router';
//import { CustomersComponent } from './customers/customers.component';
//import { OrdersComponent } from './orders/orders.component';
//import { AuthComponent } from './auth/auth.component';
import {Dashboard} from './components/dashboard/dashboard';
import {Tables} from './components/tables/tables';
@Component({ 
    selector: 'app-container',
    directives: [ROUTER_DIRECTIVES, RouterLink, CORE_DIRECTIVES,Dashboard],
    template: require('./app.component.html'),
     styles: [require('./styles/styles.css'), require('./styles/app.css'), require('./styles/bootstrap.min.css'), 
  require('./styles/font-awesome.min.css'), require('./styles/rdash.css')]
})
//@RouteConfig([
// { path: '/customers', as: 'Customers', component: CustomersComponent },
// { path: '/orders/:id', as: 'Orders', component: OrdersComponent    },
////    { path: '/login', as: 'Auth', component: AuthComponent },
//     {path: '/dashboard',  component: Dashboard, as: 'Dashboard'},
//  {path: '/tables', component: Tables, as: 'Tables'},
//])
export class AppComponent {
     constructor() {
        // this.attachEvents();
//    setTimeout(() => this.name = 'Angular', 1000);
  }
//  
  mobileView:number = 992;
  toggle:boolean = false;
  profile: string;
  pacientDisplayModeEnabled: boolean;
 

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
