import NotImplementedException from './notImplementedException.mjs'

class TableComponent {
  render(data) {
    throw new NotImplementedException(this.render.name);
  }
}

export default TableComponent;