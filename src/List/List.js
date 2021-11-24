import React from 'react'
import ListItem from './listItem'
import PropTypes from 'prop-types'
function List(resp) {
  return (
    <ul className="empList">
      {resp.employs.map((employ, index) => {
        return (
          <ListItem
            employ={employ}
            name={employ.firstName + ' ' + employ.lastName}
          />
        )
      })}
    </ul>
  )
}

List.propTypes = {
  name: PropTypes.string,
  employ: PropTypes.object,
}

export default List
