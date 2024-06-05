import React, { useState } from 'react'

const Texttools = () => {
    const [text, setText] = useState("")
    const [res, setRes] = useState("")
  return (
    <div className='container'>
        <h2 className='my-3'>Text Tools</h2>
            <div className="mb-4">
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={(e)=>setText(e.target.value)} rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={()=>{setRes(text.toUpperCase())}}>Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={()=>{setRes(text.toLowerCase())}}>Lowercase</button>
            <div className="card my-3">
              <div className="card-body">
                {res}
              </div>
            </div>
    </div>
  )
}

export default Texttools