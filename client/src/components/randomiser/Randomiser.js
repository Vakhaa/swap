import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { random } from '../../redux/randomiser/randomiserSlice'

export function Randomiser(props) {
  const number = useSelector(state => state.randomiser.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <h1>Your magic number is {number}</h1>
      </div>
      <div> 8D </div>
      <div>
        <button onClick={() => dispatch(random())} >Get magic number</button>
        <button onClick={() => document.location.reload()} >Refresh</button>
      </div>
    </div>
  )
}