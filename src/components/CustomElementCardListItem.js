import React from "react"
import PropTypes from "prop-types"
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

function CustomElementCardListItem({ customElement }) {
  return (
    <div className="card card--lg-2">
      <a
        href={customElement.readmeUrl}
        className="card__link-outer"
        target="_blank"
        rel="noopener noreferrer"
        onClick={e=>{
          trackCustomEvent({
            category: "CESG",
            action: "Click Detail",
            label: customElement.title
          })
        }}
      ></a>
      <div className="card__content">
        <div className="card__heading  card__heading--small">
          <h3>{customElement.title}</h3>
        </div>
        <div
          className="card__image card__image--no-bg"
          style={{
            padding: "24px 0",
            height: "auto",
          }}
        >
          <img src={customElement.thumbnailUrl.publicURL} alt="Screenshot of element in action" />
        </div>
        <div className="card__description">
          <p>{customElement.description}</p>
        </div>
        <div className="card__content-bottom">
          {customElement.categories &&
            customElement.categories.map((c, i) => (
              <span
                key={i}
                className="tag tag--orange"
                style={{
                  margin: "6px",
                }}
              >
                {c}
              </span>
            ))}
        </div>
      </div>
    </div>
  )
}

CustomElementCardListItem.propTypes = {
  customElement: PropTypes.object.isRequired,
}

export default CustomElementCardListItem
