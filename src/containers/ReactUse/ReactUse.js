import React, { useState } from 'react'

const ReactUse = () => {
  const [click, setClick] = useState(0)

  return <button onClick={() => setClick(prev => prev + 1)}>Clicked {click} time</button>
}

export default ReactUse
