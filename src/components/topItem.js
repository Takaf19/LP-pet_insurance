import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class TopItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

// Props のバリデーション
TopItem.propTypes = {
  // 文字列（必須）
  title: PropTypes.string.isRequired,
};