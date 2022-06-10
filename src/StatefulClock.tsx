import React from 'react';
import ReactDOM from 'react-dom/client';

class StatefulClock extends React.Component<{ date: Date }> {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);


function tick() {
  root.render(<StatefulClock date={new Date()} />);
}

setInterval(tick, 1000);

export default tick;