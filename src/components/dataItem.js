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
        <div className="data-item--title">
          <p>2頭に1頭が</p>
          <p>加入後<span>1年以内</span>に保険を利用！！</p>
        </div>
        <div className="data-item--item data-item__massage">
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

        <div className="data-item--item data-item--rank">
          <h2> ＼ 保険金請求の多い傷病ランキング（手術）／</h2>
          <div className="rank-items">
            <div className="rank-item" id="rank1">
              <h2>ワンちゃん</h2>
              <ul>
                <li><p>腫瘍</p></li>
                <li><p>歯周病</p></li>
                <li><p>骨折</p></li>
              </ul>
            </div>
            <div className="data-item--item rank-item" id="rank2">
              <h2>ネコちゃん</h2>
              <ul>
                <li><p>異物誤飲</p></li>
                <li><p>腫瘍</p></li>
                <li><p>歯周病</p></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="data-item--item rank-item--list">
          <table>
            <tr>
              <th>傷病名</th><th>参考治療費</th>
            </tr>
            <tr>
              <td>腫瘍</td><td>90,400円</td>
            </tr>
            <tr>
              <td>歯周病</td><td>97,300円</td>
            </tr>
            <tr>
              <td>骨折</td><td>308,700円</td>
            </tr>
            <tr>
              <td>異物誤飲</td><td>77,760円</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}