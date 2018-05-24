import React from "react";
import _ from "lodash";
import 'bootstrap/dist/css/bootstrap.css';
class Company extends React.PureComponent {
  render() {
    const { namep, per, too, br, svoz, fvd, fms, ren } = this.props;

    const evalClass = value => {
      if (this.props.search.lenght < 3) {return "";}
      else if (
        _.includes(value.toString(), this.props.search) &&
        !_.isEmpty(this.props.search)
      )
       
        return "high";
    };

    return (
      <tr>
        <th scope="row">{this.props.index}</th>

        <td className={evalClass(namep)}>{namep}</td>
        <td className={evalClass(per)}>{per}</td>
        <td className={evalClass(too)}>{too}</td>
        <td className={evalClass(br)}>{br}</td>
        <td className={evalClass(svoz)}>{svoz}</td>
        <td className={evalClass(fvd)}>{fvd}</td>
        <td className={evalClass(fms)}>{fms}</td>
        <td className={evalClass(ren)}>{ren}</td>
      </tr>
    );
  }
}

export default Company;
