import React from 'react'

const Card = ({picture, name, email}) => {
  return (
      <>
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6 mt-5 box-effect">

                    <div className="card">
                        <img src={picture} className="card-img-top mx-auto my-3" alt={name} />
                        
                        <div className="card-body">
                        
                            <div className="input-group input-group-lg mb-3">
                                <label
                                    htmlFor=""
                                    className="input-group-text"
                                >
                                    Name
                                </label> 

                                <input
                                    className="form-control"
                                    type="text"
                                    readOnly
                                    value={name ?? ""}
                                />
                            </div>

                        
                            <div className="input-group input-group-lg mb-3">
                                <label
                                    htmlFor=""
                                    className="input-group-text"
                                >
                                    Email
                                </label> 

                                <input
                                    className="form-control"
                                    type="text"
                                    readOnly
                                    value={email ?? ""}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card