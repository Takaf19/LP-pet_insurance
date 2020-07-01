import React, { Component } from 'react';
import '../style/footerItem.css';
import paw from  '../image/paw.png';


export default class Footeritem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer-item">
        <img src={paw} />
　　　　 <div className="footer-title">
          <p>わが子の未来のために。</p> 
          <p>ペット保険は「AniLIFE」</p> 
        </div>
        <ul>
          <li>会社情報 </li>
          <li>勧誘方針 </li>
          <li>プライバシー・ポリシー </li>
          <li>お客さまお問合せ窓口</li>
        </ul>
        <small>Copyright © 2020 harumiya.</small>
      </div>
    );
  }
}