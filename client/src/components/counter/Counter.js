import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement} from '../../redux/counter/counterSlice'

export function Counter(props) {
  const number = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <h3>Number is {number}</h3>
      </div>
      <div>
        <button onClick={()=>dispatch(increment())} >increment</button>
        <button onClick={()=>dispatch(decrement())} >decrement</button>
      </div>
    </div>
  )
}