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
        <div className="top-sp"></div>
        <TopItem title={"aaa"}></TopItem>
      </>
    );
  }
}

// Appクラスをエクスポートしてください
export default App;