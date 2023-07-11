import { useState } from "react";

import AddressForm from "../AddressForm/AddressForm";
import AddressResults from "../AddressResults/AddressResults";

function App() {
  const [displayResults, setDisplayResults] = useState(false);
  /**
   * You will need to call on useState here for form fields
   * e.g. firstName name, last name, etc.
   */
  const  [firstName, setFirstName] = useState("");
  const  [lastName, setLastName] = useState("");
  const  [address, setAddress] = useState("");
  const  [city, setCity] = useState("");
  const  [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [checkbox, setCheckbox] = useState(false);


  /**
   * You will need to pass props to <AddressResults /> and <AddressForm />
   */
  return <>{displayResults 
    ? <AddressResults 
      firstName={firstName}
      lastName={lastName}
      address={address}
      city={city}
      state={state}
      zip={zip}
      country={country}
      checkbox={checkbox}     
    /> 
    : <AddressForm 
      firstName={firstName}
      lastName={lastName}
      address={address}
      city={city}
      state={state}
      zip={zip}
      country={country}
      checkbox={checkbox}
      setFirstName={setFirstName}
      setLastName={setLastName}
      setAddress={setAddress}
      setCity={setCity}
      setState={setState}
      setZip={setZip}
      setCountry={setCountry}
      setCheckbox={setCheckbox}
      setDisplayResults={setDisplayResults}
      />}
    </>;
}

export default App;
