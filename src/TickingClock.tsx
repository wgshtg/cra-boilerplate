import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// React element is immutable. You cannot change it's children or attributes.
function TickingClock() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

// Every seconds call root.render to render element.
// React DOM compares the element and its children to the previous one, only h2 node whose contents have changed gets updated
setInterval(TickingClock, 1000);

export default TickingClock;