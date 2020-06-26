import React from 'react';
import './style/App.css';
import Dog from './image/dog.png'
import TopItem from './components/topItem';
import DataItem from './components/dataItem';

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
              <p>わが子の未来のために。</p>
              <p>ペット保険は</p>
              <p>AniLIFE</p>
          </div>
        </div>
        <div className="main">
          <TopItem></TopItem>
          <DataItem></DataItem>
        </div>

      </>
    );
  }
}

// Appクラスをエクスポートしてください
export default App;