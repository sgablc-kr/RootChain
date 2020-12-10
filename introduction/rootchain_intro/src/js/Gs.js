import React, {Component} from 'react';


class Gs extends Component{
    render(){

        return (
            <>
                 <div className="row" data-aos="fade-down">
                    <div className="col-lg-6 gs-left">
                        <div className="gs-img bounce">
                            <img src={process.env.PUBLIC_URL + "/images/gs.png"} width="80%"/>
                        </div>
                        <div className="gs-frame py-5 justify-content-center shadow">
                            <div className="gs-test mx-auto mb-4 text-center">
                                <h3>SW Quality Test</h3>    
                            </div>
                            <table className="gs-table mx-auto">
                                <tr>
                                    <td className="gs-question">Functional suitability</td>
                                    <td className="gs-answer gs-pass text-center">O</td>
                                    <td className="gs-answer text-center">X</td>
                                </tr>
                                <tr>
                                    <td className="gs-question">Performance efficiency</td>
                                    <td className="gs-answer gs-pass text-center">O</td>
                                    <td className="gs-answer text-center">X</td>
                                </tr>
                                <tr>
                                    <td className="gs-question">Compatibility</td>
                                    <td className="gs-answer gs-pass text-center">O</td>
                                    <td className="gs-answer text-center">X</td>
                                </tr>
                                <tr>
                                    <td className="gs-question">Usability</td>
                                    <td className="gs-answer gs-pass text-center">O</td>
                                    <td className="gs-answer text-center">X</td>
                                </tr>
                                <tr>
                                    <td className="gs-question">Reliability</td>
                                    <td className="gs-answer gs-pass text-center">O</td>
                                    <td className="gs-answer text-center">X</td>
                                </tr>
                                <tr>
                                    <td className="gs-question">Security</td>
                                    <td className="gs-answer gs-pass text-center">O</td>
                                    <td className="gs-answer text-center">X</td>
                                </tr>
                                <tr>
                                    <td className="gs-question">Maintainability</td>
                                    <td className="gs-answer gs-pass text-center">O</td>
                                    <td className="gs-answer text-center">X</td>
                                </tr>
                                <tr>
                                    <td className="gs-question">Portability</td>
                                    <td className="gs-answer gs-pass text-center">O</td>
                                    <td className="gs-answer text-center">X</td>
                                </tr>
                                <tr>
                                    <td className="gs-question">General requirements </td>
                                    <td className="gs-answer gs-pass text-center">O</td>
                                    <td className="gs-answer text-center">X</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-6 p-5 gs-right">
                        <div className="summary mb-3">RootChain Has Obtained <br/>GS Certification 1 Level</div>
                        <div className="contents">
    The GS(Good Software) certification began in 2001<br/>
    in order to improve the quality of software products<br/> 
    and promote the spread of high-quality products<br/>
    <br/>
    GS certification tests and certifications are conducted<br/>
    by two organizations,<br/> 
    TTA(Telecommunications Technology Association)<br/> 
    and KTL(Korea Testing Laboratory)<br/>
    <br/>
    Based on ISO international standards,<br/>
    Functional suitability, Performance efficiency, Compatibility, Usability,<br/>  
    Reliability, Security, Maintainability, Portability, General requirements<br/> 
    to give certification<br/>
    <br/>       
                        </div>
                        <a className="btn btn-primary pulse" href="https://sw.tta.or.kr/eng/service/gsce_it.jsp" target="_blank">
                            &gt;&gt;&gt;&nbsp;&nbsp;more information
                        </a>
                    </div>

                </div>
            </>
        )
            
        
    }
}

export default Gs