import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/topItem.css';
import cat from "../image/cat.jpg"


export default class TopItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="container-item container__massage">
          <h1>大切な家族の<span>"万が一"</span>に備える</h1>
          <div className="container__massage--main">
            <div className="container__massage--imgbox"></div>
            <div className="container__massage--coments">
              <p>私たち人間と同じように、動物にもケガや病気のリスクがあります。</p>
              <p>公的健康保険制度のないペットの診療費は"全額自己負担"となります。</p>
              <p>料金は動物病院によって決められているため、想定外に治療費が高額になるケースも少なくありません。</p>
              <p>大切なわが子の<span>”万が一”</span>に備えられるのが、ペット保険の大きなメリットです。</p>
            </div>
          </div>
        </div>

        <div className="container-item container--items">
          <h1>選ばれる <span>3</span>つのポイント!</h1>
          <div className="point">
            <div className="point--item">
              <div className="point-icon">

              </div>
              <p>１２歳まで新規加入OK!</p>
              <p>年齢が不明な場合は、獣医師による推定年齢で加入OK</p>
            </div>
            <div className="point--item">
              <div className="point-icon">

              </div>
              <p>手厚いサポート</p>
              <p>歯科治療・先進治療・先天性の病気も保証の対象</p>
            </div>
            <div className="point--item">
              <div className="point-icon">

              </div>
              <p>最短１ヶ月スタート</p>
              <p>ご契約から最短１ヶ月で補償スタート</p>
            </div>
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