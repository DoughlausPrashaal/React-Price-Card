import React, { useState, useEffect } from 'react'; 
import './App.css'

const App = () => {
  const [plans, setPlans] = useState(null);

  useEffect(() => {
    // Fetching JSON data from the file
    fetch('./src/assets/Data.json')
      .then(response => response.json())
      .then(data => setPlans(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!plans) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      {Object.keys(plans).map(plan => (
        <div key={plan} className="card">
          <h2>{plan}</h2>
          <p>{plans[plan].Description}</p>
          <p>Price: Rs {plans[plan].Price}</p>
          <ul>
            {Object.keys(plans[plan]).map(feature => (
              feature !== "Description" && feature !== "Price" && (
                <li key={feature}>
                  {plans[plan][feature] ? <span className="tick">&#10004;</span> : <span className="cross">&#10006;</span>} {feature}
                </li>
              )
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}


export default App
