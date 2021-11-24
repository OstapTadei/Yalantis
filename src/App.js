import React, { useEffect } from 'react'
import List from './List/List.js'
import AlphabetList from './List/alphabetList.js'
import Context from './List/context.js'
import DateList from './List/dateList.js'
import './index.css'

function App() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')

  const monthsList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  function toggleActualMonth() {
    const todayMonthNumber = new Date().getMonth()
    return monthsList
      .slice(todayMonthNumber)
      .concat(monthsList.slice(0, todayMonthNumber))
  }

  const actualMonthList = toggleActualMonth()

  const [employs, setEmploys] = React.useState([])

  useEffect(() => {
    fetch(
      'https://yalantis-react-school-api.yalantis.com/api/task0/users?_limit=5'
    )
      .then((response) => {
        if (response.ok) return response.json()
        throw response
      })
      .then((data) => {
        data.sort((a, b) => a.firstName.localeCompare(b.firstName))
        data.forEach((element, index) => {
          element.status = false
          element.month = actualMonthList[new Date(element.dob).getMonth()]
          element.dob = {
            month: actualMonthList[new Date(element.dob).getMonth()],
            year: new Date(element.dob).getFullYear(),
          }
          localStorage.setItem(index, JSON.stringify(element))
        })
        setEmploys(data)
      })
  }, [])

  function toggleItem(id) {
    setEmploys(
      employs.map((employ) => {
        if (employ.id === id) {
          employ.status = !employ.status
          console.log(employ.status)
        }
        return employ
      })
    )
  }

  return (
    <Context.Provider value={{ toggleItem }}>
      <div className="wrapper">
        <div>
          <AlphabetList alphabet={alphabet} employs={employs}></AlphabetList>
        </div>
        <div className="birthdayTab">
          <h2>Employees birthday</h2>
          <DateList employs={employs} months={actualMonthList}></DateList>
        </div>
      </div>
    </Context.Provider>
  )
}

export default App
