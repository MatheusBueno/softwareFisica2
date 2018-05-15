import { Component, OnInit } from '@angular/core';

import { LoaderService } from '../../providers/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public loader = true;

  constructor(
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.loaderService.loader(this.loader, 1000).then((loader) => this.loader = loader);
  }

}
