import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: 'https://www.petz.com.br/blog/wp-content/uploads/2022/05/o-que-maritaca-come-topo-1280x720.jpg',
      alternativo: 'uma maritaca verde'
    },
    {
      url: 'https://parqueecologicoimigrantes.org.br/cms/wp-content/uploads/2022/04/papagaioCapa.jpg',
      alternativo: 'um papagaio multicor'
    },
    {
      url: 'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/arara-azul.jpg',
      alternativo: 'uma arara azul'
    }
  ]
}
