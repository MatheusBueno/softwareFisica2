import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Particle vars
  myStyle = {};
  myParams = {};
  width = 100;
  height = 100;

  public links = [
    {
      title: 'Biografia',
      image: 'assets/open-book.png',
      description: 'Robert Stirling foi um pastor escocês e inventor do motor Stirling. Stirling nasceu em Cloag Farm perto de Methven,' +
        'Perthshire ...',
      link: 'biografia'
    },
    {
      title: 'Motores',
      image: 'assets/motor.png',
      description: 'Motor Stirling é uma máquina térmica de ciclo fechado. É referido também como motor a ar quente,' +
        ' por utilizar os gases atmosféricos como fluido de trabalho.',
      link: 'motores'
    },
    {
      title: 'Animação',
      image: 'assets/video-player.png',
      description: 'O motor do tipo Stirling Alfa é constituído por dois cilindros independentes, onde o pistão quente é responsável pela ',
      link: 'animacao'
    },
    {
      title: 'Autores',
      image: 'assets/programmer.png',
      description: 'Projeto desenvolvido por alunos da utfpr-cp para a disciplina de Física 2',
      link: 'autor'
    },
  ];

  constructor(
    private router: Router
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
  }

  openScreen(link: string) {
    this.router.navigate(['screen/', link]);
  }
}
