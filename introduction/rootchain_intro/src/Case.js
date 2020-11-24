import React, { Component, useState } from 'react';

class Case extends Component{
    render(){
        const cases = [
            { 
              img: process.env.PUBLIC_URL + "/images/case1.png",
              subject: 'Financial power of attorney authentic verification service',
              content: 'Applied to authentic verification service for financial power of attorney (notarized) issued by overseas space'
            },
            {
              img: '',
              subject: 'subject area...',
              content: 'blahblahblahblahblahblah'
            }
          ] 

          const caseList = cases.map(rcase => (
            <div className="case-container p-5">
              <div className="col-md-10 img d-flex justify-content-center align-items-center container mb-5">
                <img id="case-img" src={rcase.img} width="80%" alt="case-img"/>
              </div>
              <div className="col-md-12 px-md-5 text-center mb-5">
                <p className="case-subject mb-3">{rcase.subject}</p>
                <p className="case-content">{rcase.content}</p>
              </div>
              <hr/>
            </div> 
          ))
        return(
            <>
              {caseList}
            </>
        )
        
    }
}

export default Case;