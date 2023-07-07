import React from 'react'

const color = {
  primary : "blue",
  secondary : "gray"
}
function Button({bg,...props}) {
  return (
    <button
    {...props}
    className={`bg-${color[bg]}-800 px-6 py-2 hover:bg-${bg == "primary" ? "blue" : "gray"}-600 font-semibold rounded-full`}>{props.children}</button>
  )
}

export default Button