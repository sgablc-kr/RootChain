import React from 'react';

const Title = (props) => {
  console.log(props)
  return (
    <div className="row justify-content-center pb-5">
      <div className="col-md-7 heading-section text-center">
        <span className="subheading">{props.sub}</span>
        <h2 className="mainheading">{props.main}</h2>
      </div>
    </div>
    )
}

export default Title