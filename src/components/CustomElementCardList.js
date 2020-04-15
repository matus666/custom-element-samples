import React from "react"
import PropTypes from "prop-types"

import CustomElementCardListItem from "./customElementCardListItem"

function CustomElementCardList({ customElements }) {

  return (
    <div className="cards">
      {customElements.map(customElement => (
        <CustomElementCardListItem key={customElement.id} customElement={customElement} />
      ))}
    </div>
  )
}

CustomElementCardList.propTypes = {
  customElements: PropTypes.arrayOf(PropTypes.object)
}

export default CustomElementCardList
