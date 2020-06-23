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
          <img src={Dog} />
        </div>
        <div className="top-sp">
          <div className="background-massage">
              <p>我が子の笑顔のために。</p>
              <p>ペット保険は</p>
              <p>AniLIFE</p>
          </div>
        </div>
        <div className="main">
          <TopItem title={"aaa"}></TopItem>
        </div>

      </>
    );
  }
}

// Appクラスをエクスポートしてください
export default App;