import React, { useReducer, useCallback } from 'react'
import Table from './Table'

const initialState = {
  winner: '',
  turn: 'O',
  data: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_WINNER':
      return {
        ...state,
        winner: action.winner
      }
  }
}

const Tictactoe = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  // const [winner, setWinner] = useState('')
  // const [turn, setTurn] = useState('')
  // const [data, setData] = useState([])
  const onClickTable = useCallback(() => {
    dispatch({ type: 'SET_WINNER', winner: 'O' })
  }, [])
  return (
    <>
      <Table onClick={onClickTable} />
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>
  )
}

export default Tictactoe
