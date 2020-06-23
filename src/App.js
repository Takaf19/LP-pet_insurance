import React from 'react';
import './style/App.css';
import Dog from './image/dog.png'
import TopItem from './components/topItem';

// Appクラスを定義してください
class App extends React.Component {
  render() {
    return (
      <>
        <div className="background">
          <div className="background-massage">
            <p>我が子の笑顔のために</p>
            <p>ペット保険　<span>あにまる</span></p>
          </div>
          <img src={Dog} />
        </div>
        <div className="top-sp"></div>
        <TopItem title={"aaa"}></TopItem>
      </>
    );
  }
}

// Appクラスをエクスポートしてください
export default App;