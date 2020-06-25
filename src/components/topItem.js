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
        <div className="container__massage">
          <h1>大切な家族の<span>"万が一"</span>に備える</h1>
          <div className="container__massage--coments">
            <p>私たち人間と同じように、動物にもケガや病気のリスクがあります。</p>
            <p>公的健康保険制度のないペットの診療費は高額になるケースも少なくありません。</p>
            <p>大切なわが子の”万が一”に備えられるのが、ペット保険の大きなメリットです。</p>
          </div>
          <div className="container__massage--imgbox"></div>
        </div>

        <div className="container--items">
          <h1>選ばれる <span>3</span>つのポイント!</h1>

          <div className="point">
            <div className="point--item"></div>
            <div className="point--item"></div>
            <div className="point--item"></div>
          </div>
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