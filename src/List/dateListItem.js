import React from 'react'
import MonthList from './monthList'
import PropTypes from 'prop-types'
const style = {
  li: {
    margin: '0',
    marginBottom: '3px',
    fontSize: '1.2rem',
  },
}

function DateListItem({ employs, month }) {
  const underList = employs
    .filter((element, index) => {
      return element.month === month && element.status
    })
    .sort((a, b) => a.lastName.localeCompare(b.lastName))

  return underList.length ? (
    <div>
      <li style={style.li}>{month}</li>
      <div>
        <MonthList employs={underList}></MonthList>
      </div>
    </div>
  ) : null
}

DateListItem.propTypes = {
  month: PropTypes.string,
  employs: PropTypes.arrayOf(PropTypes.object),
}

export default DateListItem
