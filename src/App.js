import "./App.css";
import { Button, Card } from "react-bootstrap";
import { BsChatSquareQuote } from "react-icons/bs";
import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("#642b73");

  const handleChangeBgColor = (e) => {
    setBgColor(bgColor === "#642b73" ? "#c6426e" : "#983770");
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <Card style={{ backgroundColor: "#fff", color: bgColor }}>
          <Card.Header>Quote For The Good Day</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {" "}
                <BsChatSquareQuote size={50} />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante. <br />
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
          <Card.Footer className="text-muted">
            <div className="d-grid gap-2">
              <Button
                size="lg"
                onClick={handleChangeBgColor}
                style={{ backgroundColor: bgColor }}
              >
                Generate New Quote
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </header>
    </div>
  );
}

export default App;
