import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
  <h3>
    This is Success-Alert
  </h3>
  <p>
    Task Succesful. Congratulations
  </p>
  `,
  styles: [`
    h3 {
      color: dodgerblue;
    }
    p {
        padding: 20px;
        background-color: palegreen;
        border: 1px solid green;
    }
  `]
})
export class SuccessAlertComponent {

}
