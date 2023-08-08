// Import useEffect here
import { useEffect, useState } from "react";
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
// import Axios (or use Fetch)
import axios from "axios";

function App() {
  /**
   * Set up your state
   */
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState("");

  /**
   * Make an AJAX call with the useEffect hook
   */
  useEffect(() => {
    setIsLoading(true);
    axios("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then(response => {
      setQuotes(response.data);
    })
    .catch(() => {
      setHasError(true)
    })
    .then(() => {
      setIsLoading(false)
    });
  }, []);

  return (
    <body class="bg-warning text-center">
      <img src={ronSwansonImage} alt="" width="450" height="423" class="mt-4" />
      <div class="container">
        {/* Display a loading message */}
        {isLoading && <p>Loading ...</p>}
        {/* Display an error message if the API fails */}
        {hasError && (
          <div className="error" role="alert">
            Sorry, an unexpected error has occured
          </div>
        )}
        <blockquote
          id="quote"
          class="blockquote bg-dark text-white border-0 mb-4"
        >
          {/* Complete me */}
          {quotes}
        </blockquote>
      </div>
    </body>
  );
}

export default App;
