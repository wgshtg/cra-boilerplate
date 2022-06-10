import React from 'react';
import ReactDOM from 'react-dom/client';

// React.Component<props type, state type>
// 測試 state 的時候要改成 <{}, {date: Date}>，和移除 Use props 下一列程式碼
class StatefulClock extends React.Component<{}, {date: Date}> {
  constructor(props: { date: Date }) {
    super(props);
    // 在每次呼叫時，抓取目前時間設定給 state
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        {/* Use props */}
        {/* <h2>It is {this.props.date.toLocaleTimeString()}.</h2> */}
        {/* Use state */}
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

function tick() {
  // Use props
  // root.render(<StatefulClock date={new Date()} />);
  // Use state
  root.render(<StatefulClock />);
}

setInterval(tick, 1000);

export default tick;