import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/topItem.css';


export default class TopItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <h1>選ばれる <span>3</span>つのポイント</h1>

        <div className="point">
          <div className="point--items"></div>
          <div className="point--items"></div>
          <div className="point--items"></div>
        </div>
      </div>
    );
  }
}

// Props のバリデーション
TopItem.propTypes = {
  // 文字列（必須）
  title: PropTypes.string.isRequired,
};