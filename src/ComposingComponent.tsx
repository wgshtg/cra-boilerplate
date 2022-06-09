function Welcome(props: any) {
  return <h1>Hello, {props.name}</h1>;
}

// 同時引入多個 React component
function ComposingComponent() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

export default ComposingComponent;