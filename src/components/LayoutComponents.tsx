import React from 'react'

function LayoutComponents({children}:Readonly<{children:React.ReactNode}>) {
  return (
    <>
    {children}
    </>
  )
}

export default LayoutComponents