import React, { Component } from 'react';
import '../style/like.css';
import CatIcon from '../image/cat-icon.jpg';

export default class Dataitem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    function likeClick(e) {
      e.preventDefault();
      let exp = e.currentTarget.getElementsByClassName("like-item--exp");
      // exp[0].classList.add("active");

      var counter = 0;
      var per = Math.abs(0 - 50) / (1000 / 10);
      var slideTimer = setInterval(function() {
          counter++;
          exp[0].style.height = Math.abs(0 + per * counter) + '%';
          if(exp[0].style.height == "100%") {
              clearInterval(slideTimer);
          }
      }, 10);
    }
    return (
      <div className="like">
        <div className="like--title">
            <p>加入していてよかった！</p>
            <p>ご契約社様の<span>喜びの声</span></p>
        </div>
        <div className="like__message">
          <div className="like__message--item"　onClick={likeClick}>
            <div className="like__message--title">
              <img src={CatIcon} className="like-item--icon"/>
              <div className="like-item--message">
                <p>歯周病治療のため、高額な手術をしました。</p>
                <p>MIX猫　１歳　メス　ななちゃん</p>
              </div>
              <span className="like-item--btn">
                ▼
              </span>
            </div>
            <div className="like-item--exp">
              <p>加入後に歯周病を発症し、治療のため抜歯を含む高額手術をしました。
                初めての手術で不安でしたが、Animalの「Animal Light」に加入していたおかげで本当に助かりました。</p>
              <p>半年後に再発をしてしまいましたが、その時も費用の心配はいりませんでした。
                Animalは、治療目的であれば全身麻酔下の歯科治療も保証されるのがありがたいです。</p>
            </div>
          </div>
          <div className="like__message--item"　onClick={likeClick}>
            <div className="like__message--title">
              <div className="like-item--icon" id="likeIcon2"></div>
              <div className="like-item--message">
                <p>高度な医療を受ける事が出来ました。</p>
                <p>芝犬　8歳　オス　ふくまるくん</p>
              </div>
              <span className="like-item--btn">
                ▼
              </span>
            </div>
            <div className="like-item--exp">
              <p>いざという時のために、お守りのつもりでAnimal Lightに加入しました。
                ８歳になる頃、健康診断で肝臓辺りに巨大腫瘍が発見され、難しい手術を受けることになりました。</p>
              <p>とても不安でしたが、保険に加入していたことで費用の心配はしなくて済み、
                手術の成功をひたすら祈ることが出来ました。現在は元気に走り回っています！</p>
            </div>
          </div>
          <span className="border"></span>
        </div>

        <div className="data-item--rank">
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
            <div className="rank-item" id="rank2">
              <h2>ネコちゃん</h2>
              <ul>
                <li><p>異物誤飲</p></li>
                <li><p>腫瘍</p></li>
                <li><p>歯周病</p></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rank-item--list">
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