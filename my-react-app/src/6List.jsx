import PropTypes from "prop-types";
import { withPropTypesCheck } from "./withPropTypesCheck";

function List({items = [], category = "Category"}) {

  //const fruits = props.items;

  // fruits.sort((a,b) => a.name.localeCompare(b.name)); // ALPHABETICAL
  // fruits.sort((a,b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
  // fruits.sort((a,b) => a.calories-b.calories); // NUMERICAL 
  // fruits.sort((a,b) => b.calories - a.calories); // REVERSE NUMERICAL
  
  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
  // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

  const listItems = items.map(fruit => <li key={fruit.id}>
                                        {fruit.name}: &nbsp;
                                        <b>{fruit.calories}</b>
                                        </li>);

  return (
    <>
      <h2 className="list-category">{category}</h2>
      <ol className="list-item">{listItems}</ol>
    </>);
}

List.propTypes = {
  category : PropTypes.string,
  items : PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    calories: PropTypes.number,
  })),
}

export default withPropTypesCheck(List)