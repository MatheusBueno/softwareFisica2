import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  public screen: string;
  // Particle vars
  myStyle = {};
  myParams = {};
  width = 100;
  height = 100;

  constructor(
    private activeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    // Particles
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'background': '#174EA0'
    };

    this.myParams = {
      particles: {
        number: {
          value: 350,
          density: {
            enable: true,
            value_area: 4000
          },
        },
        opacity: {
          random: true
        },
        line_linked: {
          enable: true,
          distance: 170,
          color: '#c0c0c0'
        },
        move: {
          speed: 2
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
        },
      }
    };


    this.activeRouter.params.subscribe(params => this.screen = params['screen']);
  }

}
