import * as React from "react"
import "./layout.styles.css"

const Layout = ({ children }) => {
  return (
    <>
      <main className="lollymain">
        <h1 className="lolly-page__index-heading">BootCamp Virtual Lolly</h1>
        {children}
      </main>
    </>
  )
}

export default Layout
