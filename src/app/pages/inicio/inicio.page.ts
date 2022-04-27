import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'barbell-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'balloon-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'body-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'tablet-landscape-outline',
      name: 'Button',
      redirectTo: '/button'
    },
    {
      icon: 'card-outline',
      name: 'Card',
      redirectTo: '/card'
    },
    {
      icon: 'checkbox-outline',
      name: 'Check',
      redirectTo: '/check'
    },
    {
      icon: 'calendar-number-outline',
      name: 'dateTime',
      redirectTo: '/date-time'
    },
    {
      icon: 'trail-sign-outline',
      name: 'fab',
      redirectTo: '/fab'
    },
    {
      icon: 'extension-puzzle-outline',
      name: 'grid',
      redirectTo: '/grid'
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite',
      redirectTo: '/infinite'
    },
    {
      icon: 'reader-outline',
      name: 'Input Forms',
      redirectTo: '/input'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
