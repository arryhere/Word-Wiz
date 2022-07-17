import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const [text, setText] = useState('')

  const handleOnChange = (event) => {
    // console.log('onchange');
    setText(event.target.value)

  }
  const reset = () => {
    setText('')

  }
  const uppercase = () => {
    // console.log('uppercase');
    setText(text.toUpperCase())
    props.showAlert1500('Text changed to uppercase', 'success')


  }
  const lowercase = () => {
    setText(text.toLowerCase())
    props.showAlert1500('Text changed to lowercase', 'success')

  }
  const copy = () => {
    let myBox = document.getElementById('myBox')
    myBox.select()                                                                     // for selection highlight
    navigator.clipboard.writeText(myBox.value)

    props.showAlert1500('Text has been copied', 'success')
  }
  const removeSpaces = () => {
    setText(text.split(/\s+/gi).join(' '))
    props.showAlert1500('Spaces has been removed', 'success')
  }

  return (
    <>
      <div className={`container my-3 p-3 border border-dark rounded-3 bg-${props.mode} text-${props.altMode}`}>
        <h1 className='fw-bold'>{props.heading}</h1>
        <textarea className={`form-control my-3 bg-${props.mode} text-${props.altMode}`} value={text} onChange={handleOnChange} id="myBox" rows="5" placeholder="...enter text here" spellCheck="false"></textarea>
        <button disabled={text.length === 0} className={`btn btn-${props.altMode} me-2 my-1`} onClick={reset}>Reset</button>
        <button disabled={text.length === 0} className={`btn btn-${props.altMode} me-2 my-1`} onClick={copy}>Copy</button>
        <button disabled={text.length === 0} className={`btn btn-${props.altMode} me-2 my-1`} onClick={uppercase}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className={`btn btn-${props.altMode} me-2 my-1`} onClick={lowercase}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className={`btn btn-${props.altMode} me-2 my-1`} onClick={removeSpaces}>Remove Extra Spaces</button>
      </div>

      <div className={`container my-3 p-3 border border-dark rounded-3 bg-${props.mode} text-${props.altMode}`}>
        <h5 className='fw-bold'>Your text summary</h5>
        <p>{text.replace(/\n/gi, ' ').split(' ').filter(value => value !== '').length} words, {text.trim().length} characters</p>
        <p>Time to read - {(text.split(/\s+/gi).filter(value => value !== '').length) * 0.08} min</p>
        <h5 className='fw-bold'>Preview</h5>
        <p>{text === '' ? 'Nothing to preview' : text}</p>
      </div>
    </>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired
}
TextForm.defaultProps = {
  heading: "set-heading-here"
}


