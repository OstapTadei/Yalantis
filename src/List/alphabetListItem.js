import React from 'react'
import AlphabetList from './alphabetList'
import List from './List'
import './alphabetListItem.css'
import PropTypes from 'prop-types'

function AlphabetListItem({ letter, employs }) {
  const underList = employs.filter((value, array) => {
    return value.firstName[0] === letter
  })
  return underList.length ? (
    <div className="alphTabs">
      <li>
        <h3>{letter}</h3>
        <List employs={underList}></List>
      </li>
    </div>
  ) : (
    <div className="noEmployees">
      <li>
        <h3>{letter}</h3>
        <h4>No employees</h4>
      </li>
    </div>
  )
}

AlphabetListItem.propTypes = {
  letter: PropTypes.string.isRequired,
  employs: PropTypes.arrayOf(PropTypes.object),
}

export default AlphabetListItem
