import React from "react";
import { render } from "react-dom";
import Navbar from "./Navbar";
import Table from "./Table";

import _ from "lodash";
import { data } from "./table-data.js";
// https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultCompanies: data,
      companies: data,
      search: ""
    };
  }

  searchByPeriod(value) {
    if (value.length < 3) {
      this.setState({ companies: this.state.defaultCompanies });
      return;
    }

    let companies = _.concat([], this.state.defaultCompanies);
    companies = _.reject(
      companies,
      company => !_.includes(company.per.toLowerCase(), value.toLowerCase())
    );
    this.setState({ companies });
  }

  searchByDropdown(value) {
    let companies = _.concat([], this.state.defaultCompanies);
    if (value == "Всі компанії") {
      this.setState({ companies: this.state.defaultCompanies });
      return;
    }
    companies = _.reject(
      companies,
      company => !_.includes(company.namep.toLowerCase(), value.toLowerCase())
    );
    this.setState({ companies });
  }

  searchByValue(value) {
    if (value.length < 3) {
      this.setState({ search: "" });
      return;
    }
    this.setState({ search: value });
  }

  clearSelection() {
    this.setState({ companies: this.state.defaultCompanies });
  }

  render() {
    return (
      <div style={styles}>
        <Navbar
          searchPeriod={this.searchByPeriod.bind(this)}
          searchValue={this.searchByValue.bind(this)}
          searchDropdown={this.searchByDropdown.bind(this)}
          clearSelection={this.clearSelection.bind(this)}
        />
        <Table companies={this.state.companies} search={this.state.search} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
