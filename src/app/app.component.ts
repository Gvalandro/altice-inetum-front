import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value = '';
  sequence = [];
  nValue = '';
  errorMessage = '';

  constructor(private appService: AppService) {}

  onSubmit() {
    const numberValue = parseInt(this.value);
    if( isNaN(numberValue) || numberValue < 0){
      this.value = "Input should be a positive number";
      this.nValue = '';
      this.sequence = [];

    }
    this.appService.getSequence(this.value).subscribe((data) => {
      console.log(data);
      this.sequence = data.sequence;
      this.nValue = data.value;
      this.value = '';
    }, (error) => console.log(error));
  }
}
