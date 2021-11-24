import React from 'react'
import AlphabetListItem from './alphabetListItem'
import './alphabetListItem.css'
import PropTypes from 'prop-types'

function AlphabetList(props) {
  return (
    <div className="leftContainer">
      <h1>Employees</h1>
      <ul className="alphList">
        {props.alphabet.map((letter, index) => {
          return (
            <AlphabetListItem
              letter={letter}
              employs={props.employs}
            ></AlphabetListItem>
          )
        })}
      </ul>
    </div>
  )
}

AlphabetList.propTypes = {
  alphabet: PropTypes.array.isRequired,
  letter: PropTypes.string.isRequired,
  employs: PropTypes.arrayOf(PropTypes.object),
}

export default AlphabetList
