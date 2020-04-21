import DocsHome from '../components/pages/DocsHome.vue';
import Landing from '../components/pages/Landing.vue';
import TCStringDecode from '../components/pages/TCStringDecode.vue';
import TCStringEncode from '../components/pages/TCStringEncode.vue';
import {LinkModel} from '../model/LinkModel';
import {RouteConfig} from 'vue-router';

class SectionModel extends Map {

  public constructor() {

    super();

    const encoder: LinkModel = new LinkModel('Encode', TCStringEncode);
    const decoder: LinkModel = new LinkModel('Decode', TCStringDecode);

    this.set('TCString', [encoder, decoder]);

    const docsHome: LinkModel = new LinkModel('Documentation', DocsHome);

    this.set('Documentation', [docsHome]);

  }

  public getRouteConfig(): RouteConfig[] {

    const routes: RouteConfig[] = [
      {path: '/', name: 'home', component: Landing},
    ];

    this.forEach((links: LinkModel[]): void => {

      links.forEach((link: LinkModel): void => {

        routes.push({
          path: '/'+link.path,
          name: link.title,
          component: link.component,
        });

      });

    });

    return routes;

  }

}

export {SectionModel};
