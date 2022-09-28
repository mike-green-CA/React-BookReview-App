import "./styles.css";
import BookDisplay from "./BookDisplay";
import DisplayTheBooks from "./DisplayTheBooks";
import { useState } from "react";

export default function App() {
  const [index, setIndex] = useState(0);

  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <div className="header">
            <h3>COMP 2913 Final</h3>
            <p>By: Michael Green, A01045801</p>
          </div>

          <DisplayTheBooks currentIndex={index} />

          <div className="sect-2">
            <h3>Select a Book</h3>
            <BookDisplay setIndex={setIndex} currentIndex={index} />
          </div>
        </div>
      </body>
    </html>
  );
}
