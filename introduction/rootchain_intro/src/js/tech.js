import React, {Component} from 'react';


class Tech extends Component{
    render(){
      
          
        return (
            <>
                <div className="top-summary" data-aos="fade-down">
                    Through blockchain technology, customers' assets are safely managed,<br/> 
                    and the complex structure for sharing and linking information is improved to enhance the business value of customers.
                </div>
                <div className="case-container p-5">
                    <div class="row">
                
                        <div class="col-lg-4 p-3" data-aos="fade-down">
                            <div class="col-lg-12 tech-img">
                                <img src={process.env.PUBLIC_URL + "/images/tech/tech_center.png"} width="100%" alt="tech-img"/>
                            </div>

                            <div class="col-lg-12 pt-4">
                                <p className="mb-2 tech-subject text-center">Traditional centralized system</p>
                                <p className="contents tech text-left">
                                    <ul className="list-style">
                                        <li>Information management on a central server</li>
                                        <li>Only the parties to the transaction and intermediaries can access</li>
                                        <li>A trusted third party (intermediary agency) records and manages the ledger</li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-4 p-3" data-aos="fade-down">
                            <div class="col-lg-12 tech-img">
                                <img src={process.env.PUBLIC_URL + "/images/tech/tech_public.png"} width="100%" alt="tech-img"/>
                            </div>

                            <div class="col-lg-12 pt-4">
                                <p className="mb-2 tech-subject text-center">public blockchain system</p>
                                <p className="contents tech text-left">
                                    <ul className="list-style">
                                        <li>Information management in distributed server</li>
                                        <li>Anyone can access</li>
                                        <li>All participants in the system record and manage the same ledger</li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-4 p-3" data-aos="fade-down">
                            <div class="col-lg-12 tech-img">
                                <img src={process.env.PUBLIC_URL + "/images/tech/tech_private.png"} width="100%" alt="tech-img"/>
                            </div>
                            <div class="col-lg-12 pt-4">
                                <p className="mb-2 tech-subject text-center">private blockchain system</p>
                                <p className="contents tech text-left">
                                    <ul className="list-style">
                                        <li>Information management in distributed server</li>
                                        <li>Only authorized institutions can access in advance</li>
                                        <li>Among institutions authorized in the system records and manages the same ledger</li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                    </div>
                    <hr/>
                    <div className="row col-lg-12 mt-5 pulse" data-aos="fade-down">
                        <div className="col-lg-6">
                            <img src={process.env.PUBLIC_URL + "/images/tech/tech_consortium.png"} width="100%" alt="tech-img"/>
                        </div>
                        <div className="col-lg-6 tech-main">
                            <p className="mb-2 tech-subject text-center">consortium blockchain system</p>
                            <p className="contents tech text-center">
                                RootChain guarantees stability and reliability based on the world-proven Hyperledger Fabric.<br/><br/>
                                Hyperledger Fabric is a consortium blockchain that only authorized users can participate in,
                                and companies and organizations with the same purpose or value form a consortium and share information within it.
                            </p>
                        </div>
                    </div>
                   
                </div>
            </>
        )
            
        
    }
}

export default Tech