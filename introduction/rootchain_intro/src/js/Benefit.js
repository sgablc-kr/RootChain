import React, {Component} from 'react';


class Benefit extends Component{
    render(){
        
          
        return (
            <>
                <div className="row mt-5 justify-content-center" data-aos="fade-down">

                    <div className="col-lg-4 d-flex align-items-stretch benefit-container pulse">
                        <div className="text-center benefit-frame">
                            <div className="benefit-wrap">
                                <div className="d-flex align-items-center justify-content-center p-2 pt-4">
                                    <img src={process.env.PUBLIC_URL + "/images/benefit/benefit_doc.png"} width="40%" alt="benefit"/>
                                </div>
                            </div>
                            <div className="px-4 pb-3 benefit-text">
                                <h2 className="subject mb-3">Protect confidential data</h2>
                                <p className="contents">The information can be viewed only by the rules defined in advance or by the person with permission afterwards, thus protecting the personal or shared information of the participant.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 d-flex align-items-stretch benefit-container pulse">
                        <div className="text-center benefit-frame">
                            <div className="benefit-wrap">
                                <div className="d-flex align-items-center justify-content-center p-2 pt-4">
                                    <img src={process.env.PUBLIC_URL + "/images/benefit/benefit_tm.png"} width="40%" alt="benefit"/>
                                </div> 
                            </div>
                            <div className="px-4 pb-3 benefit-text">
                                <h2 className="subject mb-3">Saving time and money</h2>
                                <p className="contents">Since a few trusted people operate the blockchain, there is no need to go through multiple servers and there are no malicious participants, so there is no need for complex consensus and distrust costs</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 d-flex align-items-stretch benefit-container pulse">
                        <div className="text-center benefit-frame">
                            <div className="benefit-wrap">
                                <div className="d-flex align-items-center justify-content-center p-2 pt-4">
                                    <img src={process.env.PUBLIC_URL + "/images/benefit/benefit_track.png"} width="40%" alt="benefit"/>
                                </div>
                            </div>
                            <div className="px-4 pb-3 benefit-text">
                                <h2 className="subject mb-3">Easy transaction tracking</h2>
                                <p className="contents">All transactions are recorded, and all records are shared with the collaborators, so transactions can be transparently managed and tracked efficiently. You can also quickly identify the cause of a problem and take action.</p>
                            </div>
                        </div>
                    </div>
                
                </div>

            </>
        )
            
        
    }
}

export default Benefit