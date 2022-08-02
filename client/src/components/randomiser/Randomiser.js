import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  increment, decrement, random } from '../../redux/randomiser/randomiserSlice'

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
        <button onClick={() => dispatch(increment())} >increment</button>
        <button onClick={() => dispatch(random())} >Get magic number</button>
        <button onClick={() => dispatch(decrement())} >decrement</button>
        <button onClick={() => document.location.reload()} >Refresh</button>

      </div>
    </div>
  )
}