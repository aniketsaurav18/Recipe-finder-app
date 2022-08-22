import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDec from "./recipe_discription";
import style from "./Recipe.module.css";

const Recipe = ({ title, image, calories, cuisine }) => {
  //   console.log(title, image);
  return (
    <div className={style.recipe}>
      <img className={style.image} src={image} alt="" />
      <h1>{title}</h1>
      <p>{calories}</p>
      <p>{cuisine}</p>
      <Link to="/">
        <li>Read more</li>
      </Link>

      {/* <Link to="/invoices">Invoices</Link> */}
    </div>
  );
};
export default Recipe;
