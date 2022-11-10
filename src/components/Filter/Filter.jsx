import React from 'react';
import PropTypes from 'prop-types';

export class Filter extends React.Component {
  handleFilter = event => {
    this.props.filterList(event.target.value);
  };

  render() {
    return (
      <div>
        <h3>Find contact by Name</h3>
        <label>
          <input type="text" onChange={this.handleFilter}></input>
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  props: PropTypes.object,
};
