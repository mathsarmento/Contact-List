import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
  public loading: boolean = true;
  public teste: boolean = false;
  constructor() {
    this.delayfake();
  }

  public delayfake() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
