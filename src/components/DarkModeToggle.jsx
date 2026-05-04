// import React from 'react'

// const DarkModeToggle = () => {
//   // TODO: Implement dark mode toggle logic

//   return (
//     <button>Toggle Dark Mode {/* TODO: Update this text from Dark to Light dynamically */}</button>
//   )
// }

// export default DarkModeToggle

import React from 'react'

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode}>
      Toggle {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  )
}

export default DarkModeToggle