import React from 'react'
import './birthList.css'
import PropTypes from 'prop-types'

const style = {
  li: {
    margin: '0',
    marginBottom: '10px',
  },
}

function MonthListItem({ employ, name }) {
  return employ.status ? (
    <li style={style.li}>
      {name} - {employ.dob.year} year
    </li>
  ) : (
    <h6>No employees</h6>
  )
}

MonthListItem.propTypes = {
  name: PropTypes.string.isRequired,
  employ: PropTypes.object,
  year: PropTypes.number.isRequired,
  status: PropTypes.bool.isRequired,
}

export default MonthListItem
