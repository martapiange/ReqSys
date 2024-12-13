import { PLATFORM } from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Campus Management';
    config.map([
      { route: '', name: 'home', moduleId: PLATFORM.moduleName('./homepage'), nav: true, title: 'Home' },
    ]);

    this.router = router;
  }
}