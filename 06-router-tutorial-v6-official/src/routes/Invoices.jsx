import React from "react"
import {getInvoices} from "../data"
import {NavLink, Outlet} from "react-router-dom";

class Invoices extends React.Component {
  render() {
    let invoices = getInvoices()

    return (
        <div style={{ display: "flex" }}>
          <nav>
            {invoices.map((invoice) => (
                // NavLink 作用类似于Link 但是可以给样式
                <NavLink
                    style={(isActive) => {
                      return {
                        display: 'block',
                        margin: '1rem 0',
                        color: isActive ? "red" : ""
                      }
                    }}
                    to={`/invoices/${invoice.number}`}
                    key={invoice.number}
                >
                  {invoice.name}
                </NavLink>
            ))}
          </nav>
          {/*对于该组件的子组件进行渲染*/}
          <Outlet/>
        </div>
    )
  }
}

export default Invoices
