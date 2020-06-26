import React, { Component } from 'react';
import '../style/dataItem.css';


export default class Dataitem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="data-item">
        <div className="container-item container__massage">
          <div className="data-item--title">
            <p>2頭に1頭が</p>
            <p>加入後１年以内に保険を利用</p>
          </div>
          <div className="container__massage--main">
            <div className="container__massage--coments">
              <p>Animalの保険に新たに加入したペットが</p>
              <p>１年以内に保険金を請求する割合は約60%。</p>
              <p>元気いっぱいのワンちゃん、ネコちゃんでも怪我や病気に注意が必要です。</p>
              <p>大切なわが子の<span>”万が一”</span>に備えられるのが、ペット保険の大きなメリットです。</p>
            </div>
            <div className="container__massage--imgbox"></div>
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

        <div className="container-item container--product">
          <h1>我が子に合わせて選べる <span>2</span>つの商品</h1>
          <div className="product">
            <div className="product-item" id="product1">
              <p>幅広い補償で万全サポート</p>
              <h1>Animal</h1>
              <div className="plan">
                <span>手術</span>+<span>入院</span>+<span>通院</span>
              </div>
              <ul>
                <li>
                  <p><span>80%</span>と<span>50%</span>の選べる補償プラン！</p>
                </li>
                <li>
                  <p><span>ペットの種類</span>に関わらず月々2,200円〜</p>
                  <p>(補償割合50%の場合)</p>
                </li>
                <li>
                  <p>「保険証」提示で<span>簡単窓口清算</span></p>
                </li>
              </ul>
              <div className="list-btn">お見積もりはこちら</div>
            </div>
            <div className="product-item" id="product2">
              <p>高額な手術に備えて</p>
              <h1>Animal Light</h1>
              <div className="plan">
                <span>手術</span>+<span>入院</span>
              </div>
              <ul>
                <li>
                  <p>手術費用最大<span>90%</span>補償！</p>
                </li>
                <li>
                  <p><span>ペットの種類</span>に関わらず月々990円〜</p>
                </li>
                <li>
                  <p>Webからの申し込みで<span>10%割引</span></p>
                </li>
              </ul>
              <div className="list-btn">お見積もりはこちら</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}