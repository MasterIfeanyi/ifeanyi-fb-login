import React from 'react'

const Card = ({picture, name, email}) => {
  return (
    <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-6">
                <div className="cardStyle">
                    <div className="row">
                        <div className="col-lg-6 col-md-4 mx-auto">
                            <img src={picture} alt={name} className="person-img" />
                        </div>
                        <div className="col-12 d-flex px-3 my-2">
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
                        </div>
                        <div className="col-12 d-flex px-3 my-2">
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
    </div>
  )
}

export default Card