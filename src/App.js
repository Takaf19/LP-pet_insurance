import React from 'react';
import './style/App.css';
import Dog from './image/dog.png'
import TopItem from './components/topItem';
import DataItem from './components/dataItem';
import Like from './components/like';
import Footer from './components/footer';

// Appクラスを定義してください
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        animations: null,
        timeoutId: 0
    }
  }
  // 1度目のrenderが呼ばれた後に1度だけ呼ばれるメソッド
  componentDidMount() {
    let target = document.getElementsByClassName("animation");
    // HTMLCollectionを配列に変換
    this.state.animations = Array.from( target ) ;
    window.addEventListener('scroll', event => this.watchCurrentPosition(this.state.animations), true)
  }
  // コンポーネントを破棄する直前に呼ばれるメソッド
  // メモリの解放を行う。
  componentWillUnmount() {
    window.removeEventListener('scroll')
  }

  watchCurrentPosition(target) {
    // setTimeout()がセットされていたら処理を行わない
	  if ( this.state.timeoutId ) return ;
    
    // 指定した秒数ごとに処理を実施
    this.state.timeoutId = setTimeout( function () {
      this.state.timeoutId = 0;
      // 処理内容
      // ターゲットの高さ
      target.map(function( val ) {
        let t_height = val.offsetHeight
        // スクリーン上部からターゲットまでの距離
        let offsetY = val.getBoundingClientRect().top;
        // screen-height
        let screenHeight = window.outerHeight;
        // スクリーン下部からターゲットまでの距離
        let t_position = offsetY - screenHeight;
  
        /*
        * 1. -screenHeight <= (t_position + t_height ) : スクリーン上部とターゲットの下部までの距離
        *    ※マイナスなのは、スクリーン内に入るとt_positionはマイナスになるため
        *    
        * 2. t_position < 0 : スクリーン下部からターゲットまでの距離が、0未満 => スクリーン内に到達
        * 　
        */
        // 画面内の場合
        if(-screenHeight<=(t_position　+　t_height) && t_position<0) {
          val.classList.add(this.addClass(val));
          if(val.classList.contains("invisible")) {
            val.classList.remove('invisible');
          }
        } else { // 画面外
          console.log("No");
        }
      }.bind(this));
    }.bind(this), 300 );
  }

  addClass(target) {
    if(target.classList.contains("fadeIn")) {
      return "animate__fadeIn"
    } else if(target.classList.contains("slideInRight")) {
      return "animate__slideInRight"
    } else if(target.classList.contains("slideInLeft")) {
      return "animate__slideInLeft"
    } else {
      return "active"
    }
  }

  render() {
    return (
      <>
        <div className="background">
          <img src={Dog} />
        </div>
        <div className="top-sp">
          <div className="background-massage animate__animated animate__fadeInUp">
              <p>わが子の未来のために。</p>
              <p>ペット保険は</p>
              <p>AniLIFE</p>
          </div>
        </div>
        <div className="main">
          <TopItem></TopItem>
          <DataItem></DataItem>
          <Like></Like>
        </div>
        <Footer></Footer>
      </>
    );
  }
}

// Appクラスをエクスポートしてください
export default App;