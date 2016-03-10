declare var require: any;

import { Component } from 'angular2/core';
import { NgIf } from 'angular2/common';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
//import { AuthComponent } from './auth/auth.component';
import {Dashboard} from './components/dashboard/dashboard';
//import {Tables} from './components/tables/tables';
@Component({
  selector: 'preboot-page',
  directives: [NgIf, AppComponent],
  template: require('./home.html'),
//  styles: [require('./styles/styles.css'), require('./styles/app.css'), require('./styles/bootstrap.min.css'), 
//  require('./styles/font-awesome.min.css'), require('./styles/rdash.css')]
})
export class Home {
  name = 'World';
  messagePreboot = '';
  messageLazyLoading = '';

  constructor() {
    setTimeout(() => this.name = 'Angular', 1000);
  }

  onCheckPreboot() {
    console.log('Check preboot');
    this.messagePreboot = 'Preboot is working';
  }

  onCheckLazyLoading() {
    require.ensure([], () => {
      const greeter = require('./greeter.ts');
      this.messageLazyLoading = greeter.greet();
    });
  }
}
