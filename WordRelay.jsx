import React, { useRef, useState } from 'react'

const WordRelay = () => {
  const [word, setWord] = useState('기도우')
  const [value, setValue] = useState('')
  const [result, setResult] = useState('')
  const inputRef = useRef(null)
  const onSubmit = e => {
    e.preventDefault()
    if (word[word.length - 1] === value[0]) {
      setWord(value)
      setResult('딩동댕')
      setValue('')
    } else {
      setResult('땡')
      setValue('')
    }
    inputRef.current.focus()
  }
  const onChange = e => setValue(e.target.value)
  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <label htmlFor="wordInput">글자를 입력하세요.</label>
        <input
          id="wordInput"
          className="wordInput"
          ref={inputRef}
          value={value}
          onChange={onChange}
        />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  )
}

export default WordRelay
