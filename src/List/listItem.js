import React, { useContext } from 'react'
import Context from './context'
import './alphabetListItem.css'
import PropTypes from 'prop-types'

function ListItem({ employ, name }) {
  const { toggleItem } = useContext(Context)
  const classes = []
  if (employ.status) {
    classes.push('active')
  }
  return (
    <li className="employItem">
      <h4 className={classes.join(' ')}>{name}</h4>
      <div>
        <span>
          <input
            type="radio"
            name={employ.firstName}
            checked={employ.status}
            onChange={() => toggleItem(employ.id)}
          />
          <label>Active</label>
        </span>
        <span>
          <input
            type="radio"
            name={employ.firstName}
            checked={!employ.status}
            onChange={() => toggleItem(employ.id)}
          />
          <label>Not active</label>
        </span>
      </div>
    </li>
  )
}

ListItem.propTypes = {
  name: PropTypes.string,
  employ: PropTypes.object,
  toggleItem: PropTypes.func.isRequired,
}

export default ListItem
