import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: '<h1>Тестовое задание</h1>',
  styles: [`h1 { font-family: Lato; color: #F1C40F; } p {font-family: Lato; color: #666;}`]
})
export class AppTitleComponent  {
  @Input() number: string;
}
