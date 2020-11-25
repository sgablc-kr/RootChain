import React, { Component, useState } from 'react';

class Case extends Component{
    render(){
        const cases = [
            { 
              img: process.env.PUBLIC_URL + "/images/case/case_apostille.png",
              subject: 'Financial power of attorney authentic verification service',
              summary: 'Applied to authentic verification service for financial power of attorney issued by overseas space',
              content: 'Provides a verification service on the issuance of notarized documents of financial power of attorney for overseas spaces based on blockchain. Through this, you can expect to simplify service processing, increase time and space constraints, and prevent forgery and tampering of documents.',
              information: 'http://www.mofa.go.kr/www/brd/m_4080/view.do?seq=369252&srchFr=&amp;srchTo=&amp;srchWord=&amp;srchTp=&amp;multi_itm_seq=0&amp;itm_seq_1=0&amp;itm_seq_2=0&amp;company_cd=&amp;company_nm='
            },
            {
              img: process.env.PUBLIC_URL + "/images/case/case_gas.png",
              subject: 'Carbon credit transaction history service',
              summary: 'The transaction history of carbon credits is managed through a block chain to ensure transparency in the transaction history',
              content: 'It is a system that manages the history of carbon credits for GHG reduction based on the high reliability and security of blockchain technology. Through this, it is possible to record and track the external business of GHG reduction and carbon credit transaction details in a blockchain, so that carbon credit management and transaction transparency can be secured.',
              information: 'http://www.sgasol.kr/kr/board/bbs/board.php?bo_table=bodo&wr_id=111'
            }
          ] 

          const caseList = cases.map(rcase => (
            <div className="case-container p-5 block">
              <div className="row fromLeftIn" data-scroll="toggle(.fromLeftIn, .fromLeftOut)">
                <div className="col-lg-6 img d-flex justify-content-center align-items-center container mb-5">
                  <img id="case-img" src={rcase.img} width="80%" alt="case-img"/>
                </div>
                <div className="col-lg-6 px-lg-5 text-left mb-5">
                  <p className="case-subject mb-2">{rcase.subject}</p>
                  <p className="case-summary mb-4">{rcase.summary}</p>
                  <p className="case-content">{rcase.content}</p>
                  <div className="text-center"><a className="btn btn-primary" target="_blank" href={rcase.information}>More Information</a></div>
                </div>
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