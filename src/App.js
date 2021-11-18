import React, { useState } from "react";

import Create from "./Create";
import List from "./List";
import "antd/dist/antd.css";
import { Button, Row, Col, Form, Input, Card } from "antd";

function App() {
  const [state, setstate] = useState([
    { content: "todo1", id: 1 },
    { content: "todo2", id: 2 },
    { content: "todo3", id: 3 },
  ]);

  return (
    <>
      <div>
        <Card>
          <Create state={state} setstate={setstate} />
        </Card>
        <Card>
          <List state={state} setstate={setstate} />
        </Card>
      </div>
    </>
  );
}

export default App;
