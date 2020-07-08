import React, { Component } from 'react';
import '../style/dataItem.css';
import run from  '../image/run.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from "@fortawesome/free-solid-svg-icons";



export default class Dataitem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="invisible data-item animation fadeIn animate__animated">
        <div className="data-item--title">
          <p>2頭に1頭がaa</p>
          <p>加入後<span>1年以内</span>に保険を利用！！</p>
        </div>
        <div className="data-item--item data-item__massage">
          <div className="data-item__massage--main">
            <div className="data-item__massage--coments">
              <p>AniLIFEの保険に新たに加入したペットが</p>
              <p>１年以内に保険金を請求する割合は約60%。</p>
              <p>元気いっぱいのワンちゃん、ネコちゃんでも怪我や病気に注意が必要です。</p>
              <img src= { run } />
            </div>
            <div className="data-item__massage--imgbox">
              <div className="back-graph"></div>
              <div className="pie animation"></div>
              <div className="pie-percent">
                  <span>65%</span>
              </div>
            </div>
          </div>
          <span className="border"></span>
        </div>

        <div className="data-item--item data-item--rank">
          <h2>＜ 保険金請求の多い傷病ランキング（手術）＞</h2>
          <div className="rank-items">
            <div className="rank-item" id="rank1">
              <h2>ワンちゃん</h2>
              <ul>
                <li>
                  <div>
                    <div><span>1</span><FontAwesomeIcon icon={faPaw} /></div>
                    <p>腫瘍</p>
                  </div>
                </li>
                <li>
                  <div>
                    <div><span>2</span><FontAwesomeIcon icon={faPaw} /></div>
                    <p>歯周病</p>
                  </div>
                </li>
                <li>
                  <div>
                    <div><span>3</span><FontAwesomeIcon icon={faPaw} /></div>
                    <p>骨折</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rank-item" id="rank2">
              <h2>ネコちゃん</h2>
              <ul>
                <li>
                  <div>
                    <div><span>1</span><FontAwesomeIcon icon={faPaw} /></div>
                    <p>異物誤飲</p>
                  </div>
                </li>
                <li>
                  <div>
                    <div><span>2</span><FontAwesomeIcon icon={faPaw} /></div>
                    <p>腫瘍</p>
                  </div>
                </li>
                <li>
                  <div>
                    <div><span>3</span><FontAwesomeIcon icon={faPaw} /></div>
                    <p>歯周病</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="data-item--item rank-item--list">
          <table>
            <thead>
              <tr><th>傷病名</th><th>参考治療費</th></tr>
              <tr>
                <td>腫瘍</td><td>90,400円</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>歯周病</td><td>97,300円</td>
              </tr>
              <tr>
                <td>骨折</td><td>308,700円</td>
              </tr>
              <tr>
                <td>異物誤飲</td><td>77,760円</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}