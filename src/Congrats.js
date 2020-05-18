import React from 'react'

function Congrats({ success }) {
  return (
    <div data-test="component-congrats">
      {success && (
        <span data-test="congrats-message">Congrats! You are right!</span>
      )}
    </div>
  )
}

export default Congrats
