import React from 'react'
import MonthListItem from './monthListItem'
import './birthList.css'
import PropTypes from 'prop-types'

function MonthList(props) {
  return (
    <ul className="birthdayList">
      {props.employs.map((employ, index) => {
        return (
          <MonthListItem
            employ={employ}
            name={employ.firstName + ' ' + employ.lastName}
          />
        )
      })}
    </ul>
  )
}

MonthList.propTypes = {
  name: PropTypes.string,
  employs: PropTypes.arrayOf(PropTypes.object),
}

export default MonthList
