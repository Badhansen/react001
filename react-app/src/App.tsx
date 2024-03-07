import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  // let items = ["Ireland", "India", "Bangladesh", "USA"];

  // const handleSelectedItem = (item: string) => {
  //   console.log(item);
  // };
  const [alertVisible, setalertVisible] = useState(false);

  return (
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectedItem}
    //   />
    // </div>
    // <div>
    //   <Alert>
    //     Hello world! <span>Badhan Sen</span>
    //   </Alert>
    // </div>
    
    <div>
      {alertVisible && <Alert onClose={() => setalertVisible(false)}>Hello! Hello! man!!!</Alert>}
      <Button color="secondary" onClick={() => setalertVisible(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
