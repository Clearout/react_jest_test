import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TestTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  rows(data) {
    return data.map((element, index) => (
      <tr key={element + "-" + index}>
        <td>{element}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>
                <h1>{this.props.title}</h1>
              </td>
            </tr>
          </thead>
          <tbody>{this.rows(this.props.data)}</tbody>
        </table>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

TestTable.defaultProps = {
  title: "",
  data: []
};

TestTable.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array
};
