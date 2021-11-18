import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button, Row, Col, Card } from "antd";

function List(props) {
  const { state, setstate } = props;
  return (
    <div>
      <Row>
        <Col span={24}>
          {state.map((item) => (
            <Card>
              <Row justify={"space-around"}>
                <Col span={12}>
                  <Card>{item.content}</Card>
                </Col>
                <Col>
                  <Button
                    onClick={() =>
                      setstate(state.filter((items) => items.id !== item.id))
                    }
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            </Card>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default List;
