import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Ireland", "India", "Bangladesh", "USA"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
