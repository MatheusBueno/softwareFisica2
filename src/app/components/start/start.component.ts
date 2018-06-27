import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  public generic: string[] = ['', '', '', '', '', '', ''];

  // Particle vars
  myStyle = {};
  myParams = {};
  width = 100;
  height = 100;

  constructor() { }

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

    this.animationLetter(this.generic, 115, 1500, 300, ['f', 'í', 's', 'i', 'c', 'a', '#', '2']);
    setTimeout(() => {
      if (document.getElementById('btn-start')) {
        document.getElementById('btn-start').classList.remove('hide');
        document.getElementById('btn-start').classList.add('show');
      }
    }, 3900);
  }

  animationLetter(array: string[], timer: number, finishTimer: number, delay: number, solution: string[]) {
    const position = [];
    for (let i = 0; i <= array.length; i++)
      position[i] = setInterval(() => array[i] = (Math.random() * 9).toString(), timer);

    for (let i = 0; i <= array.length; i++) {
      setTimeout(() => {
        clearInterval(position[i]);
        array[i] = solution[i];
      }, finishTimer += delay);
    }

  }

}
