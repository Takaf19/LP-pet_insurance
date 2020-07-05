import React, { Component } from 'react';
import '../style/topItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedkit } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGrinSquint, faPaw } from "@fortawesome/free-solid-svg-icons";

export default class TopItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dataItem fadeInUp">
        <div className="container-item container__massage animation">
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
        <span className="border"></span>
        <div className="invisible container-item container--items  animation slideInRight animate__animated">
          <h1>選ばれる <span>3</span>つのポイント!</h1>
          <div className="point">
            <div className="point--item">
              <div className="point-icon" id="point-icon1">
                <FontAwesomeIcon icon={faMedkit} />
              </div>
              <p>１２歳まで新規加入OK!</p>
              <p>年齢が不明な場合は、獣医師による推定年齢で加入OK</p>
            </div>
            <div className="point--item" id="point-icon2">
              <div className="point-icon">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <p>手厚いサポート</p>
              <p>歯科治療・先進治療・先天性の病気も保証の対象</p>
            </div>
            <div className="point--item" id="point-icon3">
              <div className="point-icon">
                <FontAwesomeIcon icon={faGrinSquint} />
              </div>
              <p>最短１ヶ月スタート</p>
              <p>ご契約から最短１ヶ月で補償スタート</p>
            </div>
          </div>
        </div>

        <div className="invisible container-item container--product animation slideInLeft animate__animated">
          <h1>我が子に合わせて選べる <span>2</span>つの商品</h1>
          <div className="product">
            <div className="product-item" id="product1">
              <p>幅広い補償で万全サポート</p>
              <h1>AniLIFE</h1>
              <div className="plan">
                <span>手術</span>+<span>入院</span>+<span>通院</span>
              </div>
              <ul>
                <li>
                  <p><FontAwesomeIcon icon={faPaw} /><span>80%</span>と<span>50%</span>の選べる補償プラン！</p>
                </li>
                <li>
                  <p><FontAwesomeIcon icon={faPaw} /><span>ペットの種類</span>に関わらず月々2,200円〜</p>
                </li>
                <li>
                  <p><FontAwesomeIcon icon={faPaw} />「保険証」提示で<span>簡単窓口清算</span></p>
                </li>
              </ul>
              <div className="list-btn">お見積もりはこちら</div>
            </div>
            <div className="product-item" id="product2">
              <p>高額な手術に備えて</p>
              <h1>AniLIFE Light</h1>
              <div className="plan">
                <span>手術</span>+<span>入院</span>
              </div>
              <ul>
                <li>
                  <p><FontAwesomeIcon icon={faPaw} />手術費用最大<span>90%</span>補償！</p>
                </li>
                <li>
                  <p><FontAwesomeIcon icon={faPaw} /><span>ペットの種類</span>に関わらず月々990円〜</p>
                </li>
                <li>
                  <p><FontAwesomeIcon icon={faPaw} />Webからの申し込みで<span>10%割引</span></p>
                </li>
              </ul>
              <div className="list-btn">お見積もりはこちら</div>
            </div>
          </div>
        </div>
        <span className="border"></span>
      </div>
    );
  }
}