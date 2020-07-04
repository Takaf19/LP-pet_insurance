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
        currentPosition: 0,
        test: null
    }
  }
  // 1度目のrenderが呼ばれた後に1度だけ呼ばれるメソッド
  componentDidMount() {
    this.state.test = document.getElementById("a");
    window.addEventListener('scroll', event => this.watchCurrentPosition(this.state.test), true)
  }
  // コンポーネントを破棄する直前に呼ばれるメソッド
  // メモリの解放を行う。
  componentWillUnmount() {
    window.removeEventListener('scroll')
  }

  watchCurrentPosition(target) {
    // ターゲットの高さ
    let t_height = target.offsetHeight
    // スクリーン上部からターゲットまでの距離
    let offsetY = target.getBoundingClientRect().top;
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
　　   console.log("ok");
    } else { // 画面外
       console.log("No");
    }
    console.log(this.scrollTop());
  }

  scrollTop() {
    return Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
    )
  }
  render() {
    return (
      <>
        <div className="background">
          <img src={Dog} />
        </div>
        <div className="top-sp">
          <div className="background-massage animate__animated fadeInUp">
              <p>わが子の未来のために。</p>
              <p>ペット保険は</p>
              <p>AniLIFE</p>
          </div>
        </div>
        <div className="main">
          <TopItem></TopItem>
          <p id="a">Scroll Top: {this.state.currentPosition}</p>
          <DataItem></DataItem>
          <Like></Like>
        </div>
        <p className=".animate__animated fadeInUp">aa</p>
        <Footer></Footer>
      </>
    );
  }
}

// Appクラスをエクスポートしてください
export default App;