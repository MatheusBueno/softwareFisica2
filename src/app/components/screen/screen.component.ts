import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  public screen: string;

  public conteudo = {
    title: '',
    content: '',
  };

  public auths = [
    {
      name: 'Gustavo Faversani Gil',
      ra: 1835718,
    },
    {
      name: 'Haislan Ryuji Shirashigue',
      ra: 1828070,
    },
    {
      name: 'Higor Medeiros Cordeiro de Souza',
      ra: 1886770,
    },
    {
      name: 'Lucas Dolce',
      ra: 1841530,
    },
    {
      name: 'Matheus Bueno Euzebio',
      ra: 1913352,
    },
    {
      name: 'Matheu Parada Encinas Rabaza',
      ra: 1886347,
    },
    {
      name: 'Jorge leonardo fonseca donda',
      ra: 1884646,
    },
  ];

  // tslint:disable:max-line-length
  public engines = [
    {
      title: 'Motor Stirling Gama',
      description: `Está entre o modelo mais conhecido, é constituído por dois cilindros independentes, onde o pistão quente (pistão deslocador) faz o deslocamento do fluido de trabalho (ar ou gás) entre a extremidade “quente e fria”, suspenso por uma haste deslizante sobre buchas, pelo centro do cilindro quente e este pistão é totalmente isolado e confinado do ambiente externo.` +
        `O segundo pistão, conhecido como pistão de trabalho, encontra-se separado do cilindro quente, diferentemente do Beta. Esse é responsável pelo trabalho do motor (compressão, expansão, descompressão e contração do fluido de trabalho).`,
      image: 'assets/gama.png',
      description2: 'Todos os motores do modelo Gama, possuem um pistão deslocador suspenso por uma haste dentro do cilindro quente e o pistão de trabalho é responsável pela absorção da pressão, transformando em movimento mecânico, além de fazer a compressão e descompressão do ar.',
    },
    {
      title: 'Motor Stirling Beta',
      description: 'O Motor Stirling Beta é constituído por um único cilindro, de dois pistões em linha, onde o pistão interno faz o deslocamento do fluido de trabalho “ar ou gás” entre as duas câmaras “quente e fria”.' +
      'O segundo pistão, conhecido como pistão de trabalho, mantém suspenso o pistão deslocador, visivelmente aparente e responsável pelo trabalho do motor. Além de auxiliar no confinamento do fluido de trabalho no interior do motor.',
      image: 'assets/beta.png',
      description2: 'Outro motor Stirling de configuração Beta com transmissão rômbica, e também conhecido como “Stirling Beta Robótic”, possui um diferencial no mecanismo aliado ao virabrequim. Este mecanismo reduz atrito do pistão de trabalho sobre o cilindro e da haste do pistão deslocador sobre o pistão de trabalho; porque não ocorre a inclinação lateral da biela, como em um virabrequim convencional.'
    },
    {
      title: 'Motor Stirling Alfa',
      description: 'O motor do tipo Stirling Alfa, possui um funcionamento diferenciado em relação ao Gama e Beta, é constituído por dois cilindros independentes, onde o pistão quente é responsável pela produção do movimento mecânico decorrente da variação de pressão e vácuo interno do motor. O pistão quente é totalmente visível, extremidade em que a biela é fixa, diferentemente do Gama e Beta.' +
      'O pistão frio é o responsável pela compressão e descompressão do fluido de trabalho “ar ou gás” no motor.',
      image: 'assets/alfa.png',
      description2: 'Este segundo modelo Alfa, possui os pistões em posição em um formato de “L”, onde os pistões trabalham em um ângulo de 90°, ligados a um único ponto no virabrequim.',
      image2 : 'assets/alfa90.png',
      title2: 'Motor Stirling Ross Yoke',
      description3: 'Este terceiro modelo Alfa, é conhecido por “Motor Stirling Ross Yoke”, este é considerado uns dos modelos mais eficientes entre todos eles, devido ao baixo atrito dos pistões sobre os cilindros.',
      image3: 'assets/ross.png'
    },
    {
      title: 'Modelos de Motor Stirling e seus respectivos fins',
      description: 'Apesar das inúmeras tentativas e milhões de dólares gastos em pesquisas e desenvolvimento pela Ford, GM e NASA em desenvolver veículos híbridos com motores Stirling, esses veículos nunca foram lançados ao público. As três citadas conseguiram realizar um veículo dessa forma. A Ford conseguiu um veículo que utilizava o motor Stirling como um motor primário para locomoção, mas o primeiro problema encontrado era que o veículo não respondia assim que o motorista fizesse uma determinada ação, como acelerar o veículo. Segundo (FLUMMO, 2008), esse delay era algo em torno de vinte segundos. Ou seja, após realizado o feito de “acelerar”, o motor só teria a capacidade de responder à altura vinte segundos depois. A NASA seguiu a mesma linha da Ford e realizou um veículo que usava o motor Stirling como primário, sendo a modificação de uma Dodge D-150 a mais sucedida. Apesar de serem realizados vários testes e algumas propagandas do projeto, a responsável encontrou os mesmos problemas que a Ford, suspendendo o projeto logo depois. Já a GM tentou inovar na questão de veículo híbrido. Apelidado de Stir-Lec I, o projeto teve uma alteração na carroceria de um Opel Kadett para alocação de um motor elétrico como motor principal e um motor Stirling para funcionar como um gerador de eletricidade. Dessa forma, o motor Stirling seria responsável por recarregar as baterias do veículo conforme sua locomoção.',
      description2: 'Apesar das tentativas de desenvolvimento desse tipo de veículo terem estagnado na década de 70, atualmente existe um especialista que mantém reservadas diversas patentes referentes a veículos equipados com motores Stirling. Dean Kamen, idealizador e inventor da Segway e a trabalho pela DEKA labs.',
      description3: 'Dean possui patentes referentes a projetos com utilização do motor. Um deles é a Scooter movida por motor Stirling, frisando que esse projeto permanece em desenvolvimento e não foi lançado ao público. Diante de seu desenvolvimento e custo, um grupo Norueguês tem apoiado e investido na DEKA labs. UK com o objetivo de lançar abertamente os projetos ao publico.',
      image3: 'assets/moto.png'
    }
  ];


  constructor(
    private activeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(params => this.screen = params['screen']);

    if (this.screen === 'animacao') {
      this.conteudo.title = 'Animação';
      this.conteudo.content = 'O motor do tipo Stirling Alfa' +
        ' é constituído por dois cilindros independentes, onde o pistão quente é responsável ' +
        'pela produção do movimento mecânico decorrente da variação de pressão e vácuo interno do motor. ' +
        'O pistão quente é totalmente visível, extremidade em que a biela é fixa, diferentemente do Gama e Beta.' +
        'O pistão frio é o responsável pela compressão e descompressão do fluido de trabalho “ar ou gás” no motor.';
    } else if (this.screen === 'biografia') {
      this.conteudo.title = 'Biografia';
      this.conteudo.content = 'Robert Stirling. Nasceu a 25 de Outubro de 1790, e, faleceu em Galston, East Ayrshire, a 6 de Junho de 1878. Foi um pastor escocês e inventor do motor Stirling. Stirling nasceu em Cloag Farm perto de Methven, Perthshire (o terceiro de oito filhos) e herdou do seu pai o interesse pela engenharia. Estudou teologia na Universidade de Edinburgh e na Universidade de Glasgow e tornou-se ministro da Igreja da Escócia como segundo encarregado da Laigh Kirk de Kilmarnock em 1816. <p>' +
        'Ele foi o criador do motor stirling que é um motor de combustão externa. Teoricamente, o motor Stirling é uma máquina térmica o mais eficiente possível. Alguns protótipos construídos pela empresa holandesa Phillips nos anos 1950 e 1960 chegaram a índices de 45%, superando facilmente os motores a gasolina, diesel e as máquinas a vapor (eficiência entre 20% e 30%).' +
        ' Foi aperfeiçoado pelo pastor escocês Robert Stirling em 1816, auxiliado pelo seu irmão engenheiro. Eles visavam a substituição do motor a vapor, com o qual o motor stirling tem grande semelhança estrutural e teórica. No início do século XIX, as máquinas a vapor explodiam com muita frequência, em função da precária tecnologia metalúrgica das caldeiras, que se rompiam quando submetidas à alta pressão. Sensibilizados com a dor das famílias dos operários mortos em acidentes, os irmãos Stirling procuraram conceber um mecanismo mais seguro. É referido também como motor de ar quente, por utilizar os gases atmosféricos como fluido de trabalho.' +
        ' Outra invenção.' +
        ' Ele inventou o que chamou de "economizador" de calor (agora geralmente conhecido como o "regenerador"), um dispositivo para melhorar o isolamento térmico/eficiência de combustível de uma variedade de processos industriais, obtendo a patente de um "economizador" e um motor incorporado em 1816. Em 1818 ele construiu a primeira versão prática de seu motor, usado para bombear água de uma pedreira. A base teórica do motor de Stirling, o ciclo de Stirling, não seria totalmente compreendido até o trabalho de Sadi Carnot (1796-1832).';

    } else if (this.screen === 'motores') {
      this.conteudo.title = 'Motores';
    } else if (this.screen === 'autor') {
      this.conteudo.title = 'Autores';
    }


  }

}
