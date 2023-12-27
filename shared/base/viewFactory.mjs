import NotImplementedException from "./notImplementedException.mjs";

class ViewFactory {
  createTable() {
    throw new NotImplementedException(this.createTable.name)
  }
}

export default ViewFactory;