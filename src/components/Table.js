import { useState } from "react"

function Table(props) {
    const [name, setName] = useState(props.name)
    const [amount, setAmoutn] = useState(props.amount)
    const [payment, setPayment] = useState(props.payment)
    const [date, setDate] = useState(props.date)

  return (
    <>
     <table>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Payment</th>
          <th>Date</th>
        </tr>
       {/*  {tableContent.map((eachItem) => {
          return (
            <tr>
              <td>{eachItem.name}</td>
              <td>{eachItem.amount}</td>
              <td>{eachItem.payment}</td>
              <td>{eachItem.date}</td>
            </tr>
          )
        })} */}
      </table>
    </>
  )
}

export default Table
