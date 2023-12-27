import { database } from '../shared/data.mjs'

// poderia estar em outro arquivo
class Application {
  constructor(factory) {
    this.table = factory.createTable();
  }

  initialize(database) {
    this.table.render(database);
  }
}


;(async function main() {

  let path = globalThis.window ? 'browser' : 'console';
  console.log('path', path)
  // dynamic import
  // {default: ViewFactory} atribui um apelido 'ViewFactory' ao que foi exportado no arquivo index.mjs importado
  const { default: ViewFactory }  = await import(`../platforms/${path}/index.mjs`);
  const app = new Application(new ViewFactory());
  app.initialize(database);

})();