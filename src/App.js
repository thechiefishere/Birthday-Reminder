import { useState } from "react";
import List from "./components/List";
import { Data } from "./data";

function App() {
  const [data, setData] = useState(Data);

  return (
    <div>
      <List data={data} setData={setData} />
    </div>
  );
}

export default App;
