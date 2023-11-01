import React from 'react'
import css from "./BlackButton.module.css"
const BlackButton = ({title}) => {
  return (
    <div className={css.container}>
        <h3>{title}</h3>
    </div>
  )
}

export default BlackButton