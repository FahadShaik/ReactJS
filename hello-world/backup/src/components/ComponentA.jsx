import ComponentB from "./ComponentB";

const ComponentA = () => {
  var msg = "Learning props is easy";
  var person = "Amazing";
  return (
    <div>
      <h1>Component A</h1>
      <h3>
        Hi {msg} and {person}
      </h3>
      <ComponentB prop1={msg} prop2={person} />
    </div>
  );
};

export default ComponentA;
