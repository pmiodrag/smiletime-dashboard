import {Component, View} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'rd-widget-footer'
})
@View({
  templateUrl: 'app/components/rd-widget-footer/rd-widget-footer.html',
  directives: [CORE_DIRECTIVES]
})
export class RdWidgetFooter {
}
