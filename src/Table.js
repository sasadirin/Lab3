import React from "react";
import Company from "./Company";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      option: { value: "середне" , position:"1"}
    };
  }

  handleOnExpand(option) {
    this.props.expand(option.value,option.position);
    if(option.position=="1"){option.position="0";}
    else { option.position = "1";}
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8">
          <caption className="row title">
            Показники ефективності основних засобів підприємств
          </caption>
          <table className="table table-bordered">
            <thead>
              <tr className="header">
                <th className="col-xs-1 text-center">#</th>
                <th className="col-xs-1 text-center">Назва підприємства</th>
                <th className="col-xs-1 text-center">Період</th>
                <th className="col-xs-1 text-center">Товарообіг</th>
                <th className="col-xs-1 text-center">Балансовий прибуток</th>
                <th className="col-xs-1 text-center">
                  Середньорічна вартість основних засобів
                </th>
                <th className="col-xs-1 text-center">Фондовіддача</th>
                <th className="col-xs-1 text-center">Фондомісткість</th>
                <th className="col-xs-1 text-center">Рентабільність</th>
              </tr>
            </thead>
            <tbody>
              <tr className="header">
                <th scope="row">
                  <button
                    type="button"
                    onClick={this.handleOnExpand.bind(this)}
                  >
                    <img
                      src="https://cdn2.iconfinder.com/data/icons/arrows-part-1/32/tiny-arrows-vertical-out-1-128.png"
                      height="15px"
                    />
                  </button>
                </th>
                <td>NAMEP</td>
                <td>PER</td>
                <td>TOO</td>
                <td>BR</td>
                <td>SVOZ</td>
                <td>FVD</td>
                <td>FMS</td>
                <td>REN</td>
              </tr>
              {this.props.companies.map((c, i) => {
                return (
                  <Company
                    search={this.props.search}
                    index={i + 1}
                    namep={c.namep}
                    per={c.per}
                    too={c.too}
                    br={c.br}
                    svoz={c.svoz}
                    fvd={c.fvd}
                    fms={c.fms}
                    ren={c.ren}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-md-2" />
      </div>
    );
  }
}

export default Table;
