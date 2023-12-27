import ViewFactory from "../../shared/base/viewFactory.mjs";
import TableBrowserComponent from "./table.mjs";

class BrowserFactory extends ViewFactory {
  createTable() {
    return new TableBrowserComponent();
  }
}

export default BrowserFactory;