import "./App.css";
import { useState } from 'react';

const states = require("./assets/states.json")
const countries = require("./assets/countries.json")



        
// Import here

function App() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [zip, setZip] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [signup, setSignup] = useState("Please sign up for our newsletter!");
  const [displayResult, setDisplayResult] = useState(false)
  const handleSubmit = e => {
    e.preventDefault();
    setDisplayResult(true);
  }

  return (
    <form className="container mt-4" method="POST" onSubmit={(handleSubmit)}>
      {/* You will need to handle form submission */}
      <div className="mb-3">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          value={firstName}
          onChange={e => setFirstname(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="control-label">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="form-control"
          value={lastName}
          onChange={e => setLastname(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="addressLine1" className="control-label">
          Address Line 1
        </label>
        <input
          id="addressLine1"
          name="addressLine1"
          type="text"
          className="form-control"
          value={address}
          onChange={e => setAddress(e.target.value)}
          required
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input 
          id="city" 
          name="city" 
          type="text" 
          className="form-control" 
          value={city}
          onChange={e => setCity(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        <select 
          id="state" 
          name="state" 
          className="form-control"
          value={region}
          onChange={e => setRegion(e.target.value)}
          required
        >
          {states.map((state) => (
              <option value={state}>{state}</option>
            ))};
            
          </select>
      </div>
      

      <div className="mb-3">
        <label htmlFor="postalCode" className="control-label">
          Zip / Postal Code
        </label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          className="form-control"
          value={zip}
          onChange={e => setZip(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        {/* Loop through the countries you imported here */}
        <select id="country" name="country" className="form-control" value={userCountry} onChange={e => setUserCountry(e.target.value)} required>
        {countries.map((country) => (
              <option value={country}>{country}</option>
            ))};
          </select>
      </div>
      <div className="mb-3 form-check">
        <input
          id="signUpForNewsLetter"
          name="signUpForNewsLetter"
          type="checkbox"
          className="form-check-input"
          value={signup}
          onChange={e => setSignup("Thank you for signing up for our newsletter!")}
          
        />
        <label htmlFor="signUpForNewsLetter" className="form-check-label">
          Sign Up For Newsletter
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {/*
       * Find a way to only display this once the form has been submitted.
       * Hint: You will need to change "false" below with something else
       */}
      {displayResult && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {/* Add <li></li> tags here */}
              <li>{firstName} {lastName}</li>
              <li>{address}</li>
              <li>{city}, {region} {zip}</li>
              <li>{userCountry}</li>
              <li>{signup}</li>    
          </ul>
        </div>
      )}
    </form>
  );
}

export default App;
