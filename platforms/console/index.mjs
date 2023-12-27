import ViewFactory from "../../shared/base/viewFactory.mjs";
import TableConsoleComponent from "./table.mjs";

class ConsoleFactory extends ViewFactory {
  createTable() {
    return new TableConsoleComponent();
  }
}

export default ConsoleFactory;