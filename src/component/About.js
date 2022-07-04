import React, { useState } from 'react'

export default function About() {
    const [mystyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btntext, setBtnText] = useState("Enable dark Mode")

    const toggleStyle = () => {
        if (mystyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtnText("Enable Light Mode")
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable dark Mode");
        }
    }
    return (
        <div className='container' style={mystyle}>
            <h1>About US</h1>
            <div className="accordion" id="accordionExample" style={mystyle}>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button class="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong> About Inspired Method Marketing</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            Most business coaches are solo-preneurs who offer to help you grow your business, but haven’t been able to grow their own team.
                            Many business coaches will discuss business strategies, but offer no help to implement those strategies.
                            Most marketing companies recommend vague, “feelings” based strategies. Unfortunately, you can’t deposit feelings at the bank.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>VALUES</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            • Bring professionalism, coach-ability, enthusiasm, & empathy. <hr />
                            • Create & stick to a schedule for work and fun activities worth sharing. <hr />
                            • Pursue excellence using proven strategies & continually improve.<hr />
                            • Communicate in-person or by phone first, then confirm details in writing.<hr />
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>HISTORY</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            • March 2016 – Trevor Samons began freelance digital marketing. <hr />
                            • June 2016 – Karen Samons joined the family business. <hr />
                            • November 2017 – Adopted the trade name Inspired Method. <hr />
                            • April 2018 – Hired Spurrell & Associates. <hr />
                            • May 2018 – Incorporated Inspired Method Inc <hr />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
            </div>
        </div>
    )
}
