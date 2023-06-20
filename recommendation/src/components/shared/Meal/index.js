import React from 'react';
import Proptypes from 'prop-types';
import Tag from '../Tag';
import './Meal.css';

const Meal = (props) => (
  <a className="Meal" href={props.url} target="_blank">
    <script></script>
    <div className="Meal__head">{props.type}</div>
    <div className="Meal__content">
      <div className="Meal__content__img">
        <img src={props.imgSrc} alt="Unavailable" />
      </div>
      <div className="Meal__content__desc">
        <h2 className="Meal__content__desc--heading">{props.heading}</h2>
        <h4 className="Meal__content__desc--source">{props.source}</h4>
      </div>
      <div className="Meal__content__labels">
        {props.ingredients.map((ingredient, i) => (
          <Tag
            icon={props.ingredient}
            name={ingredient}
            key={`Tag__${i}`}
          />
        ))}
      </div>
    </div>
  </a>
);
console.log(Meal);
Meal.propTypes = {
  url: Proptypes.string,
  type: Proptypes.string,
  imgSrc: Proptypes.string,
  heading: Proptypes.string,
  source: Proptypes.string,
  tags: Proptypes.array,
  ingredients:Proptypes.array
}
export default Meal;
