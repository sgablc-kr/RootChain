import React, { Component } from 'react';

class Case extends Component{
    render(){
        const cases = [
            { 
              img: process.env.PUBLIC_URL + "/images/case/case_apostille.png",
              subject: 'Financial power of attorney authentic verification service',
              summary: 'Applied to authentic verification service for financial power of attorney issued by overseas space',
              content: 'Provides a verification service on the issuance of notarized documents of financial power of attorney for overseas spaces based on blockchain. Through this, you can expect to simplify service processing, increase time and space constraints, and prevent forgery and tampering of documents.',
            },
            {
              img: process.env.PUBLIC_URL + "/images/case/case_gas.png",
              subject: 'Carbon credit transaction history service',
              summary: 'The transaction history of carbon credits is managed through a block chain to ensure transparency in the transaction history',
              content: 'It is a system that manages the history of carbon credits for GHG reduction based on the high reliability and security of blockchain technology. Through this, it is possible to record and track the external business of GHG reduction and carbon credit transaction details in a blockchain, so that carbon credit management and transaction transparency can be secured.',
            },
            {
              img: process.env.PUBLIC_URL + "/images/case/case_medi.png",
              subject: 'Blockchain-based medical consultation system',
              summary: 'Medical image AI reading and transmission for telemedicine collaboration through encryption and sharing using blockchain and off-chain',
              content: "It is a system that utilizes blockchain and off-chain technology to read medical image taken at the patient's treatment site with AI in other regions, and use these AI read medical image again in the filming area. This allows you to check the authenticity of the original medical image, as well as systematically manage the original medical image and AI read medical image."
            },
            {
              img: process.env.PUBLIC_URL + "/images/case/case_id.png",
              subject: 'Distributed identity verification mobile identification service',
              summary: 'Blockchain and distributed identification(DID)-based mobile identification (mobile employee ID) issuance and verification for identification without personal information exposure',
              content: "DID is a technology that stores personal information in the user's terminal so that only necessary information is submitted for personal information authentication. The DID is recorded on the blockchain, so you can use it anytime, anywhere. This allows you to manage personal information yourself, not by others like your existing identification card, so you can solve personal information sovereignty and security issues."
            },
            {
              img: process.env.PUBLIC_URL + "/images/case/case_doc.png",
              subject: "Blockchain-based electronic document issuance and verification service",
              summary: "Issuing, verifying, and distributing electronic documents based on blockchain and distributed identification(DID) for self-sovereign electronic certificate and electronic document forgery verification and denial prevention",
              content: "DID is a technology that stores personal information in the user's terminal so that only necessary information is submitted for personal information authentication. The DID is recorded on the blockchain, so you can use it anytime, anywhere. Instead of being issued on paper and manually verifying several facts, it is issued as an electronic document on your own device and submitted electronically or printed out. The issuance history and verification history are stored in the blockchain, allowing forgery verification and non-repudiation."
            },
            {
              img: process.env.PUBLIC_URL + "/images/case/case_bus.png",
              subject: "City bus accounting sharing system",
              summary: "Guaranteed reliability and transparency of accounting data through blockchain-based city bus semi-public accounting sharing system(ERP)",
              content: "Using blockchain technology, the Busan City-Transportation Union-Bus transport company shares accounting data (information on all income and expenses) in real time. These data cannot be forged and can be verified in real time. This ensures the reliability of accounting data and transparency in financial execution."
            }
            
            /* 

            ,
            {
              img: process.env.PUBLIC_URL + "/images/case/ ",
              subject: "",
              summary: "",
              content: ""
            }

            */
          ] 

          const caseList = cases.map((rcase, index) => (

            <div className="case-container p-5" key="index">
              <div className="row" data-aos="fade-left">
                { index%2 == 0 ? 
                <>
                  <div className="col-md-6 img d-flex justify-content-center align-items-center container mb-5">
                    <img id="case-img" src={rcase.img} width="80%" alt="case-img"/>
                  </div>
                  <div className="col-md-6 px-lg-5 text-left mb-5">
                    <p className="subject mb-2">{rcase.subject}</p>
                    <p className="case-summary mb-4">{rcase.summary}</p>
                    <p className="contents">{rcase.content}</p>
                  </div>
                </> 
                :
                <>
                  <div className="col-md-6 px-lg-5 text-right mb-5">
                    <p className="subject mb-2">{rcase.subject}</p>
                    <p className="case-summary mb-4">{rcase.summary}</p>
                    <p className="contents">{rcase.content}</p>
                  </div>
                  <div className="col-md-6 img d-flex justify-content-center align-items-center container mb-5">
                    <img id="case-img" src={rcase.img} width="80%" alt="case-img"/>
                  </div>
                </>
              }
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

export default Case