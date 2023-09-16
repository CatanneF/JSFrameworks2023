/**
 * After the user submit the form, this displays what the user entered.
 * @param {Object} props which should somehow include:
 * - first name
 * - last name
 * - address
 * - city
 * - state
 * - zipcode / postal code
 * - country
 */
function AddressResults(props) {
  return (
    <div className="card card-body bg-pght mt-4 mb-4">
      Results:
          {props.firstName && <p>{props.firstName}</p>}
          {props.lastName && <p>{props.lastName}</p>}
          {props.address && <p>{props.address}</p>}
          {props.city && <p>{props.city}</p>}
          {props.state && <p>{props.state}</p>}
          {props.zip && <p>{props.zip}</p>}
          {props.country && <p>{props.country}</p>}
          {props.checkbox
            ? "Thank you for signing up for our newsletter!"
            : "Please sign up for our newsletter!"
          }

       
            

      <ul className="pst-unstyled mb-0">{/* Add <p></p> tags here */}</ul>
    </div>
  );
}

export default AddressResults;
