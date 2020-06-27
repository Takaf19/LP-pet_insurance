import React, { Component } from 'react';
import '../style/dataItem.css';
import run from  '../image/run.png';


export default class Dataitem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="data-item">
        <div className="data-item-item data-item__massage">
          <div className="data-item--title">
            <p>2頭に1頭が</p>
            <p>加入後<span>1年以内</span>に保険を利用！！</p>
          </div>
          <div className="data-item__massage--main">
            <div className="data-item__massage--coments">
              <p>Animalの保険に新たに加入したペットが</p>
              <p>１年以内に保険金を請求する割合は約60%。</p>
              <p>元気いっぱいのワンちゃん、ネコちゃんでも怪我や病気に注意が必要です。</p>
              <img src= { run } />
            </div>
            <div className="data-item__massage--imgbox">
              <div className="back-graph"></div>
              <div className="pie"></div>
              <div className="pie-percent">
                  <span>65%</span>
              </div>
            </div>
          </div>
          <span className="border"></span>
        </div>

        <div className="data-item--product">
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