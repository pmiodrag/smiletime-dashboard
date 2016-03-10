declare var require: any;
import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { Home } from './home';
import { Workers } from './workers';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
//import { AuthComponent } from './auth/auth.component';
import {Dashboard} from './components/dashboard/dashboard';
import {Tables} from './components/tables/tables';
@Component({
  selector: 'app',
  directives: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
   styles: [require('./styles/styles.css'), require('./styles/app.css'), require('./styles/bootstrap.min.css'), 
  require('./styles/font-awesome.min.css'), require('./styles/rdash.css')]
})
@RouteConfig([
  { path: '/home',    name: 'Home',    component: Home,   useAsDefault: true },
  { path: '/workers', name: 'Workers', component: Workers },
   { path: '/customers', name: 'Customers', component: CustomersComponent },
// { path: '/orders/:id', as: 'Orders', component: OrdersComponent    },
//    { path: '/login', as: 'Auth', component: AuthComponent },
     {path: '/dashboard',  component: Dashboard, name: 'Dashboard'},
//  {path: '/tables', component: Tables, as: 'Tables'},
])
export class App {}
