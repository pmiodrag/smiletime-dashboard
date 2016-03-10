declare var require: any;
import {Component, View} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'rd-widget'
})
@View({
  template: require('./rd-widget.html'),
  directives: [CORE_DIRECTIVES],
//    styles: [require('../../styles/styles.css'), require('../../styles/app.css'), require('../../styles/bootstrap.min.css'), 
//  require('../../styles/font-awesome.min.css'), require('../../styles/rdash.css')],
})
export class RdWidget {
}
