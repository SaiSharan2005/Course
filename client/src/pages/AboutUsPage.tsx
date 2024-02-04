import * as React from 'react';
import programmingBoy from "../assets/programming-boy.png"
import Mission from "../assets/mission.png"
import vission from "../assets/vission.png"
export interface IAboutUSPageProps {
}

export default function AboutUSPage(props: IAboutUSPageProps) {

    return (
        <div style={{ backgroundColor: "#9400FF" }}>
            <div className="main-content" >
                <div className="main-words">
                    <div className="main-heading">
                        <p>Learn Programming with Our Educational Videos</p>
                    </div>
                    <div className="main-paragraph">
                        <p>Welcome to our website! We offer educational videos that are designed to help students learn programming. Our
                            videos are organized in a logical sequence, making it easy for you to find the information you need. We value
                            your time and want you to spend it on our website learning from our videos. Sign up today and start learning!
                        </p>
                    </div>
                </div>
                <div className="main-img">
                    <img src={programmingBoy} alt="" style={{ width: "60vw" }} />
                </div>
            </div>

            <div className="our-mission main-content">
                <div className="image-mission ">
                    <img src={Mission} style={{ width: "40vw" }} />
                </div>
                <div className="text main-words">
                    <div className="main-heading">
                        <p>Our Mission!</p>
                    </div>
                    <div className="main-paragraph">
                        <p>Our mission is to provide high-quality educational videos that help students learn programming in a fun and
                            engaging way. We aim to make learning programming accessible to everyone, regardless of their background or
                            experience. Our videos are designed to be easy to follow and understand, making it possible for anyone to
                            learn programming.</p>
                    </div>
                </div>
            </div>

            <div className="our-vission main-content">
                <div className="text main-words">

                    <div className="main-heading">
                        <p>Our Vision!</p>
                    </div>
                    <div className="main-paragraph">
                        <p> Our vision is to create a world where everyone has access to quality education in programming. We believe
                            that education is the key to unlocking human potential and creating a better future for all. By providing
                            educational videos that are accessible and engaging, we hope to inspire a love of learning in people of all
                            ages and backgrounds.
                            </p>
                    </div>
                </div>
                <div className="image-mission">
                    <img src={vission} style={{ width: "40vw" }} />
                </div>
            </div> 

            <div className="what-we-offer">
                <div className="main-heading">
                    <p>What we offer ?</p>

                </div>
                <div className="main-paragraph points">
                    <ul>
                        <li>
                            <div><img src="static/images/ml.png" alt="" />
                                <p>Machine Learning</p>
                            </div>
                        </li>
                        <li>
                            <div><img src="static/images/ml.png" alt="" />
                                <p>Web Development</p>
                            </div>
                        </li>
                        <li>
                            <div><img src="static/images/ml.png" alt="" />
                                <p>Deep Learning</p>
                            </div>
                        </li>
                        <li>
                            <div><img src="static/images/ml.png" alt="" />
                                <p>Game Development</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>



        </div>
    );
}
