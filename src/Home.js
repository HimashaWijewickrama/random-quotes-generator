import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { BsChatQuote } from "react-icons/bs";

export default function Home() {
  const [bgColor, setBgColor] = useState("#642b73");
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);

  const fetchQuote = () => {
    setQuote(null);
    setError(null);

    const category = "happiness";
    const apiKey = "Zkxq0JkjOF7CLixz3dLPrA==155oexel0hgd0wE5";

    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data[0]);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const colors = ["#642b73", "#c6426e", "#8C6495", "#983770", "#A33A70"];

  const handleChangeBgColor = () => {
    const currentColorIndex = colors.indexOf(bgColor);
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    setBgColor(colors[nextColorIndex]);

    fetchQuote();
  };

  return (
    <header className="App-header">
      <Card
        className="quote-card"
        style={{ color: bgColor, border: "5px solid #642b73" }}
      >
        <Card.Header className="quote-card-header" style={{ color: bgColor }}>
          Quote For A Good Day
        </Card.Header>
        <Card.Body className="card-body" style={{ opacity: 0.9 }}>
          <blockquote className="blockquote mb-0">
            {error ? (
              <span>Error: {error}</span>
            ) : quote ? (
              <>
                <BsChatQuote size={50} />
                <p className="quote-text">{quote.quote}</p>
                <footer
                  className="blockquote-footer"
                  style={{ color: bgColor }}
                >
                  <strong>{quote.author}</strong>{" "}
                  <cite title="Source Title">from API Ninjas</cite>
                </footer>
              </>
            ) : (
              <span>
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" size="lg" />
              </span>
            )}
          </blockquote>
        </Card.Body>
        <div className="center">
          <button
            className="generate-btn"
            onClick={handleChangeBgColor}
            style={{ backgroundColor: bgColor }}
          >
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 300 50"
              className="border"
            >
              <polyline
                points="299,1 299,49 1,49 1,1 299,1"
                className="bg-line"
              />
              <polyline
                points="299,1 299,49 1,49 1,1 299,1"
                className="hl-line"
              />
            </svg>

            <span>Generate New Quote</span>
          </button>
        </div>
      </Card>
    </header>
  );
}
