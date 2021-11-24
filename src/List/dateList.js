import React from 'react'
import DateListItem from './dateListItem'
import './birthList.css'
import PropTypes from 'prop-types'

function DateList(props) {
  const condition = props.employs.filter((element) => {
    return element.status
  }).length

  return condition ? (
    <ul className="monthList">
      {props.months.map((element, index) => {
        return (
          <DateListItem employs={props.employs} month={element}></DateListItem>
        )
      })}
    </ul>
  ) : (
    <p>Employees List is empty</p>
  )
}

DateList.propTypes = {
  month: PropTypes.string,
  employs: PropTypes.arrayOf(PropTypes.object),
}

export default DateList
