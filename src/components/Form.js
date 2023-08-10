import React, { useEffect, useState } from "react"
// import Table from "./Table"

function Form() {
  const [tableContent, setTableContent] = useState([])
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [payment, setPayment] = useState("")
  const [date, setDate] = useState("")

  useEffect(() => {
    let storedItems = JSON.parse(localStorage.getItem("items"))
    console.log(storedItems)
    if (storedItems) {
      setTableContent([...tableContent, ...storedItems])
    }
  }, [])

  const tableData = {
    id: tableContent.length,
    name: name,
    amount: amount,
    payment: payment,
    date: date,
  }
  console.log(tableContent.length)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("i work")

    // more explicit way
    setTableContent((previousState) => [...previousState, tableData])
    // setTableContent((preventState) => preventState.push(formData)) // https://react.dev/learn/updating-arrays-in-state
    localStorage.setItem("items", JSON.stringify([...tableContent, tableData]))
    // setTableContent([...tableContent, formData]) // short hand
    console.log("this is triggered when clicked")
  }

  // console.log('this is storedItems ->', storedItems)
  console.log(tableContent)
  console.log("this is name -> ", name)
  console.log("this is amount -> ", amount)
  console.log("this is payment -> ", payment)
  console.log("this is date -> ", date)
  console.log("this is tableData -> ", tableData)
  console.log(localStorage)

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Expenses </h1><small>by Erick</small>
        <h3>Add a new item:</h3>
      </header>
      <div id="form-box">
        <form id="form" method="post" onSubmit={handleSubmit}>
          {/* should i use the commented out area because i wrote an anonymous function? */}
          {/* do you think i have too many divs? */}
          {/* <form method="post" onSubmit={(event) => handleSubmit(event)}> */}
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                onChange={(event) => setName(event.target.value)}
                placeholder="What did you spend on?"
              />
            </label>
          </div>

          <div>
            <label>
              Amount:
              <input
                type="number"
                name="amount"
                onChange={(event) => setAmount(event.target.value)}
                placeholder="How much?"
              />
            </label>
          </div>

          <div>
            <label>
              Payment:
              <select
                type="text"
                name="payment"
                onChange={(event) => setPayment(event.target.value)}
              >
                <option value="Credit">Credit</option>
                <option value="Debit">Debit</option>
                <option value="Cash">Cash</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Date:
              <input
                type="date"
                name="date"
                onChange={(event) => setDate(event.target.value)}
              />
            </label>
          </div>

          <button type="submit">Add New Expense</button>
          {/* can i add an onClick={() => {}} to add new items into the table?
          also how is this button working without an onClick?*/}
        </form>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Payment</th>
          <th>Date</th>
          <th></th>
        </tr>
        {tableContent.map((eachItem) => {
          return (
            <tr>
              <td>{eachItem.name}</td>
              <td>{eachItem.amount}</td>
              <td>{eachItem.payment}</td>
              <td>{eachItem.date}</td>
              <tr>
                <button
                  onClick={() => {
                    setTableContent(
                      tableContent.filter((a) => a.id !== eachItem.id)
                    )
                  }}
                >
                  Delete
                </button>
              </tr>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Form
