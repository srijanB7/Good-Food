import React from "react";
import "./styles.css";
import { useState } from "react";

const foodTypes = {
  Indian: [
    {
      name: "Chole Bhature",
      rating: "4.9/5"
    },
    {
      name: "Chicken Tikka",
      rating: "5/5"
    },
    {
      name: "Chicken Butter Masala",
      rating: "5/5"
    },
    {
      name: "Mutton Rogan Josh",
      rating: "5/5"
    }
  ],
  Italian: [
    {
      name: "Pepperoni Pizza",
      rating: "5/5"
    },
    {
      name: "Pasta",
      rating: "4.6/5"
    },
    {
      name: "Lasagna",
      rating: "4.9/5"
    }
  ],

  Japanese: [
    {
      name: "Sushi",
      rating: "5/5"
    },
    {
      name: "Ramen",
      rating: "5/5"
    },
    {
      name: "Udon Noodles",
      rating: "4.5/5"
    }
  ]
};

let type = Object.keys(foodTypes);

export default function App() {
  const [selectedFoodType, setselectedFoodType] = useState("Indian");
  function clickHandler(type) {
    setselectedFoodType(type);
  }

  return (
    <div className="App">
      <h1 className="heading"> Food Type </h1>
      {/* <hr /> */}
      <div>
        {type.map((type, index) => (
          <button
            onClick={() => {
              clickHandler(type);
            }}
          >
            {type}
          </button>
        ))}
      </div>
      <hr />

      <div className="container">
        <ul>
          {foodTypes[selectedFoodType].map((type, index) => (
            <li key={index}>
              <p className="name">{type.name} </p>
              <p className="rating">{type.rating} </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
