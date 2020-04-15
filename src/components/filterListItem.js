import React from "react"
import PropTypes from "prop-types"

function FilterListItem({ category, id, onToggleCategory}) {
  return (
    <li>
      <label htmlFor={id} className="checkbox">
        {category.title}
        <input
          id={id}
          checked={category.selected}
          name={id}
          type="checkbox"
          onChange={()=>onToggleCategory(category)}
        ></input>
        <span className="checkbox__indicator"></span>
      </label>
    </li>
  )
}

FilterListItem.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string,
    selected: PropTypes.bool
  }).isRequired,
  id: PropTypes.number,
  onToggleCategory: PropTypes.func
}

export default FilterListItem
