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
    props.showAlert1500('Text changed to Uppercase', 'success')
  }

  const lowercase = () => {
    setText(text.toLowerCase())
    props.showAlert1500('Text changed to Lowercase', 'success')
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

  const sentenceCase = () => {
    let textArr = text.split(/\./gi)
    let textMap = textArr.map((e, i, arr) => {
      let j = 0
      for (let i = 0; i < e.length; i++) {
        if (e.charAt(i) !== ' ') {
          break
        }
        ++j
      }
      if (i === arr.length - 1) {
        return e.slice(0, j) + e.charAt(j).toUpperCase() + e.slice(j + 1)
      }
      else {
        return e.slice(0, j) + e.charAt(j).toUpperCase() + e.slice(j + 1) + '.'
      }

    })
    setText(textMap.join(''))
    props.showAlert1500('Text changed to Sentence case', 'success')
  }

  const titleCase = () => {
    let newText = text.split(/\s{1}/gi).map((e) => {
      return e.charAt(0).toUpperCase() + e.slice(1)
    })
    setText(newText.join(' '))
    props.showAlert1500('Text changed to Title case', 'success')
  }

  return (
    <>
      <div className={`container my-3 p-3 border border-dark rounded-3 bg-${props.mode} text-${props.altMode}`}>
        <h1 className='fw-bold'>{props.heading}</h1>
        <textarea className={`form-control my-3 bg-${props.mode} text-${props.altMode}`} value={text} onChange={handleOnChange} id="myBox" rows="5" placeholder="...enter text here" spellCheck="false"></textarea>
        <button disabled={text.length === 0} className={`btn btn-sm btn-${props.altMode} me-2 my-1`} onClick={reset}>Reset</button>
        <button disabled={text.length === 0} className={`btn btn-sm btn-${props.altMode} me-2 my-1`} onClick={copy}>Copy</button>
        <button disabled={text.length === 0} className={`btn btn-sm btn-${props.altMode} me-2 my-1`} onClick={removeSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length === 0} className={`btn btn-sm btn-${props.altMode} me-2 my-1`} onClick={uppercase}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className={`btn btn-sm btn-${props.altMode} me-2 my-1`} onClick={lowercase}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className={`btn btn-sm btn-${props.altMode} me-2 my-1`} onClick={sentenceCase}>Sentence Case</button>
        <button disabled={text.length === 0} className={`btn btn-sm btn-${props.altMode} me-2 my-1`} onClick={titleCase}>Title Case</button>
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


