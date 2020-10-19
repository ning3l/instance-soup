import React from 'react'
import Mascot from '../images/jumbo_mr_e.png';
import eLove from '../images/jumbo_e_loves_it.png';

export default function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid" id="jumbo">
            <div className="container" >
                <div className="row jumbo-row" >
                    <div className="col-md-7 jumbo">
                        <h1 className="display-4">
                        <span className="firstPart">Insta</span>
                        <span className="secondPart">(nce)<br/></span>
                        <span className="firstPart">Soup</span></h1>
                        <p className="lead">Hungry for the next coding project? Instance Soup provides you with nourishing app-ideas you can get up and running in no time. Like the carbon based instance soup you know and love, it serves you all the ingredients conveniently. We call it <b>"The whole stack in one pack".</b></p>
                    </div>
                    <div className="col-md-5">
                        <div className="row" >
                            <div className="col-md-6">
                                <img src={Mascot} className="img-fluid" alt="Mr. E - The mascot"/>
                            </div>
                            <div className="col-md-6">
                                <img src={eLove} className="img-fluid" alt="Message saying: Mr. E. already loves it. And YOU can learn to love it too"/>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}