declare var require : any;
import {Component, View} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
@Component({
  selector: 'rd-loading'
})
@View({
  template: require('./rd-loading.html')
})
export class RdLoading {

}
