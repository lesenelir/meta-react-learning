import React from "react"
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {getInvoice, deleteInvoice} from "../data";

function Invoice() {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()
  const invoice = getInvoice(parseInt(params.invoiceId))
  console.log(window.location) // 类组件中window.location中可以获取params参数

  return (
    <div>
      <p>
        {invoice.name} : {invoice.number}
        <p>
          {/*编程式路由导航，由代码去修改URL，从而修改不同页面加载的显示*/}
          <button
              onClick={() => {
                deleteInvoice(invoice.number)
                navigate('/invoices' + location.search)
              }}
          >
            Delete
          </button>
        </p>
      </p>
    </div>
  )
}

export default Invoice
