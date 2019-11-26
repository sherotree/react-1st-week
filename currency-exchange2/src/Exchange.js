import React, { useState } from 'react'

export function Exchange() {
  const [money, setMoney] = useState(100)

  function handleChange(e) {
    setMoney(e.target.value)
  }
  return (
    <div>
      <RMB onChange={handleChange} />
      <Dollar onChange={handleChange} />
      <Yen onChange={handleChange} />
    </div>
  )
}

function RMB(props) {
  const { money } = props
  return (
    <div>
      <span>人民币</span>
      <input value={money} onChange={props.handleChange} />
    </div>
  )
}

function Dollar(props) {
  const { money } = props
  function dollarChange(e) {
    console.log(e)
    return e.target.value * 0.14
  }
  return (
    <div>
      <span>美元</span>
      <input value={dollarChange} disabled />
    </div>
  )
}

function Yen(props) {
  const { money } = props
  function yenChange(e) {
    return 15.5 * e.target.value
  }
  return (
    <div>
      <span>日元</span>
      <input value={yenChange} disabled />
    </div>
  )
}
