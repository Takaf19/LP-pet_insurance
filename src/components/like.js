import React, { Component } from 'react';
import '../style/like.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift} from "@fortawesome/free-solid-svg-icons";
import CatIcon from '../image/cat-icon.jpg';
import DogIcon from '../image/dog-icon.jpg';
import Dog2Icon from '../image/dog2-icon.jpg';

export default class Dataitem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let message = [ false, false, false]
    function likeClick(messageId, e) {
      e.preventDefault();
      let exp = e.currentTarget.getElementsByClassName("like-item--exp");
      var counter = 0;
      var per = Math.abs(0 - 50) / (100 / 10);
      let math = 0;

      if( message[messageId] === false ) {
        // 開く処理
        exp[0].style.display = "block";
        let height = exp[0].clientHeight;
        exp[0].style.height = 0;
        var slideTimer = setInterval(function() {
          counter++;
          math = Math.abs(0 + per * counter);
          exp[0].style.height = math + 'px';
          if(math >= height) {
              clearInterval(slideTimer);
              exp[0].style.height = "";
              message[messageId] = !message[messageId];
              // exp[0].classList.add("active");
          }
        }, 10);
      } else {
        // 閉じる処理
        let height = exp[0].clientHeight;
        var slideTimer = setInterval(function() {
          counter++;
          math = height - per * counter;
          exp[0].style.height = math + 'px';
          if(math <= 0) {
              clearInterval(slideTimer);
              exp[0].style.display = "none";
              exp[0].style.height = "";
              message[messageId] = !message[messageId];
          }
        }, 10);
      }
    }
    return (
      <div className="like">
        <div className="like--title">
            <p>加入していてよかった！</p>
            <p className="invisible animation fadeInUp animate__animated">
              <FontAwesomeIcon icon={faGift} />
               ご契約社様の<span>喜びの声</span>
               <FontAwesomeIcon icon={faGift} />
            </p>
        </div>
        <div className="like__message">
          <div className="like__message--item"　onClick={likeClick.bind(this, 0)}>
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
                初めての手術で不安でしたが、AniLIFEの「AniLIFE Light」に加入していたおかげで本当に助かりました。</p>
              <p>半年後に再発をしてしまいましたが、その時も費用の心配はいりませんでした。
                AniLIFEは、治療目的であれば全身麻酔下の歯科治療も保証されるのがありがたいです。</p>
            </div>
          </div>
          <div className="like__message--item"　onClick={likeClick.bind(this, 1)}>
            <div className="like__message--title">
              <img src={DogIcon} className="like-item--icon"/>
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
              <p>いざという時のために、お守りのつもりでAniLIFE Lightに加入しました。
                ８歳になる頃、健康診断で肝臓辺りに巨大腫瘍が発見され、難しい手術を受けることになりました。</p>
              <p>とても不安でしたが、保険に加入していたことで費用の心配はしなくて済み、
                手術の成功をひたすら祈ることが出来ました。現在は元気に走り回っています！</p>
            </div>
          </div>
          <div className="like__message--item"　onClick={likeClick.bind(this, 2)}>
            <div className="like__message--title">
              <img src={Dog2Icon} className="like-item--icon"/>
              <div className="like-item--icon" id="likeIcon2"></div>
              <div className="like-item--message">
                <p>保険証で手軽に申請ができる！</p>
                <p>ダックスフンド　2歳　メス　はなちゃん</p>
              </div>
              <span className="like-item--btn">
                ▼
              </span>
            </div>
            <div className="like-item--exp">
              <div className="exp-text">
                <p>以前は別の保険に入っていましたが、申請するには領収証をいちいちまとめて送らなければならず、大変手間に感じておりました。</p>
                <p>そんな時にこちらのAniLIFE保険を知り、保険証を提示するだけで簡単に申請ができる点が魅力的で加入を決めました。
                  この先、頻繁に病院に通うことになっても、手軽に申請できるのは大変ありがたいと感じています。
                </p>
              </div>
            </div>
          </div>
          <div className="like__message--bottom">
            <p>他にもお客様からお喜びの声が続々届いております！</p>
            <p>大切な家族と幸せな生活を過ごすため、ペット保険の加入をぜひご検討ください。</p>
          </div>
        </div>
      </div>
    );
  }
}