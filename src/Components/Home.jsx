import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    
    const textUtils = () =>{
        navigate('/texttools')
    } 
  return (
    <>
        <div className="container">
            <div className="row">

                <div className="col-md-3">
                    <div className="card my-5" onClick={textUtils} style={{width: "10rem", outline: "none", border: '', cursor:'pointer'}}>       {/*Mae it none */}
                        <img src="/Images/tt.png" className="card-img-top " alt="..."style={{ width: "100%"}}/>
                        {/* <div className="card-body">
                            <p className="card-text mx-4">Text Tools</p>
                        </div> */}
                        <h6 className='my-2'>Text Tools</h6>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card my-5" onClick={textUtils} style={{width: "10rem", outline: "none", border: '', cursor:'pointer'}}>       {/*Mae it none */}
                        <img src="/Images/tt.png" className="card-img-top " alt="..."style={{ width: "100%"}}/>
                        {/* <div className="card-body">
                            <p className="card-text mx-4">Text Tools</p>
                        </div> */}
                        <h6 className='my-2'>Calculation Tools</h6>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card my-5" onClick={textUtils} style={{width: "10rem", outline: "none", border: '', cursor:'pointer'}}>       {/*Mae it none */}
                        <img src="/Images/tt.png" className="card-img-top " alt="..."style={{ width: "100%"}}/>
                        {/* <div className="card-body">
                            <p className="card-text mx-4">Text Tools</p>
                        </div> */}
                        <h6 className='my-2'>Unit Converter</h6>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card my-5" onClick={textUtils} style={{width: "10rem", outline: "none", border: '', cursor:'pointer'}}>       {/*Mae it none */}
                        <img src="/Images/tt.png" className="card-img-top " alt="..."style={{ width: "100%"}}/>
                        {/* <div className="card-body">
                            <p className="card-text mx-4">Text Tools</p>
                        </div> */}
                        <h6 className='my-2'>Randomizer</h6>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card my-5" onClick={textUtils} style={{width: "10rem", outline: "none", border: '', cursor:'pointer'}}>       {/*Mae it none */}
                        <img src="/Images/tt.png" className="card-img-top " alt="..."style={{ width: "100%"}}/>
                        {/* <div className="card-body">
                            <p className="card-text mx-4">Text Tools</p>
                        </div> */}
                        <h6 className='my-2'>Other Tools</h6>
                    </div>
                </div>
                    

            </div>
        </div>
    </>
  )
}

export default Home