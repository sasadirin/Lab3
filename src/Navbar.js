import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      period: "",
      search: "",
      option: { value: "Всі компанії" }
    };
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
    if (event.target.id == "search") {
      this.props.searchValue(event.target.value);
    } else {
      this.props.searchPeriod(event.target.value);
    }
  }

  handleDropdown(option) {
    this.props.searchDropdown(option.value);
    this.setState({ option });
  }

  handleOnXrestik() {
    this.props.clearSelection();
    this.setState({
      period: "",
      search: "",
      option: { value: "Всі компанії" }
    });
    this.props.searchValue("");
  }

  render() {
    const options = [
      "Днiпрянка",
      "Універсам 22",
      "Універсам 23",
      "Всі компанії"
    ];
    return (
      <div className="nay">
        <div className="row">
          <div className="control-panel col-md-3 pull-left">
            Контрольна панель
          </div>
        </div>
        <div className="row">
          <label htmlFor="search">Компанія:</label>
          <Dropdown
            className="dropdown col-md-3"
            onChange={this.handleDropdown.bind(this)}
            options={options}
            value={this.state.option.value}
          />

          <div className="inputy form-group col-md-3">
            <label htmlFor="search">Пошук:</label>
            <input
              className="form-control"
              id="search"
              onChange={this.handleChange.bind(this)}
              placeholder="не менше 3-х літер"
              type="search"
              value={this.state.search}
            />
          </div>
          <div className="form-group col-md-1">
            <button
              className="btn btn-sm btn-warning form-control"
              type="button"
              onClick={this.handleOnXrestik.bind(this)}
            >
              <span className="icon">X</span>
            </button>
          </div>
          <div className="inputy form-group col-md-3">
            <label htmlFor="period">Перiод:</label>
            <input
              className="form-control"
              id="period"
              onChange={this.handleChange.bind(this)}
              placeholder="не менше 3-х літер"
              value={this.state.period}
              type="search"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
