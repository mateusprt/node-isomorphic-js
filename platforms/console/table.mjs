import TableComponent from '../../shared/base/tableComponent.mjs'
import chalk from 'chalk';
import chalkTable from 'chalk-table';

class TableConsoleComponent extends TableComponent {
  render(data) {
    const columns = this.prepareData(data);
    const options = {
      leftPad: 2,
      columns
    }
    const table = chalkTable(options, data)
    console.log(table);
  }

  prepareData(data) {
    const [firstItem] = data;
    const headers = Object.keys(firstItem);

    const formatHeader = (data, index) => index % 2 ?  chalk.blue(data) : chalk.yellow(data);

    const cols = headers.map((item, index) => ({
      field: item,
      name: formatHeader(item, index)
    }))

    return cols;
  }
}

export default TableConsoleComponent;