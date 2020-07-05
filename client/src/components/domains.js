import React from 'react';
import one from '../architecture.png'
import blue from '../bluebook.png'
import digital from '../digital design.png'
import electric from '../electrizite.png'
import fun from '../fundaz.png'
import konst from '../konstruktion.png'
import machine from '../machination new.png'
import mag from '../maggifcie.png'
import on from '../online.png'
import present from '../praesentatio.png'
import robot from '../robogyan.png'
import viman from '../vimanas.png'
import zone from '../xzone.png'
import yudh from '../yudhamme.png'

export default function Domains(){
    return(
        <div className='subcontainer'>
        
        
        <div className='row'>

            <div className='column1'>
        <div className='heading'>
            <button className='Dom'>Domains</button>
            <h6><p>Teams relating to various academic spheres that organize events before, during and after Aaruush</p></h6>
            </div>
            <br></br>
            <div class="card">
                <img src={one}></img>
                <div class="text"><h4 id="para1">Architecture</h4>
                <h6 id="para2">Concept, designing, form follows functions and Digital Modeling</h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={blue}></img>
                <div class="text"><h4 id="para1">Bluebook</h4>
                <h6 id="para2">Bioengineering, Forensics, Life Sciences</h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={digital}></img>
                <div class="text"><h4 id="para1">Digital Design</h4>
                <h6 id="para2">Digital art, Graphic Visualization, Visual communication</h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={electric}></img>
                <div class="text"><h4 id="para1">Electrizite</h4>
                <h6 id="para2">&nbsp;&nbsp;Electrical and Electronics engineering, Integrated Circuitry, IoT,
                <br></br>&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;embedded and hybrid systems </h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={fun}></img>
                <div class="text"><h4 id="para1">fundaz</h4>
                <h6 id="para2">&nbsp;&nbsp;Logical Conundrums and Fundamentals of basic mathematics 
                <br></br>&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;and science. </h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={konst}></img>
                <div class="text"><h4 id="para1">Konstruktion</h4>
                <h6 id="para2">&nbsp;Civil Engineering, Infrastructure Design, Fabrication & Testing
                <br></br> &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;Design Elements</h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={machine}></img>
                <div class="text"><h4 id="para1">Machination</h4>
                <h6 id="para2">&nbsp;Mechanical and Automobile Engineering, Designing and 
                <br></br>&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;Implementation of Technological Components 
                </h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={mag}></img>
                <div class="text"><h4 id="para1">maggifcie</h4>
                <h6 id="para2">&nbsp;Management skills, planning, entrepreneurship & business 
                <br></br>&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;strategy</h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={on}></img>
                <div class="text"><h4 id="para1">Online</h4>
                <h6 id="para2">Virtual Competitions, Problem Solving Skills, Online Challenges</h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={present}></img>
                <div class="text"><h4 id="para1">Praesentatio</h4>
                <h6 id="para2">Communication Skills, Oratory Events, Presentation Scopes</h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={robot}></img>
                <div class="text"><h4 id="para1">Robogyan</h4>
                <h6 id="para2">Autonomous Robotic Systems, Machine Learning, Artificial Intelligence</h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={viman}></img>
                <div class="text"><h4 id="para1">Vimanaz</h4>
                <h6 id="para2">&nbsp;Aviation Technologies, Aerodynamic Analysis, Unmanned 
                <br></br>&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;Vehicle Design and Fabrication.
                </h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={zone}></img>
                <div class="text"><h4 id="para1">Xzone</h4>
                <h6 id="para2">Competitive gaming, game development, SRM roadies</h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={yudh}></img>
                <div class="text"><h4 id="para1">Yudhamme</h4>
                <h6 id="para2">Competitive Programming, Web Design, Networking, Application Development</h6>
                </div>

            </div>



            </div>
            






            <div className='column2'>
        <div className='heading'>
            <button className='com'>Committee</button>
            <h6 className='small'>Multifaceted management teams of Aaruush that organize and administer the fest.</h6>
            </div>
            <br></br>
            <div class="card">
                <img src={one}></img>
                <div class="text"><h4 id="para1">Public Relations</h4>
                <h6 id="para2">Content Creation, Emceeing, Documentation, Scripting</h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={blue}></img>
                <div class="text"><h4 id="para1">Quality Assurance</h4>
                <h6 id="para2">Data analysis, SWOT Reports, Accommodation of external participants</h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={digital}></img>
                <div class="text"><h4 id="para1">Finance</h4>
                <h6 id="para2">Fund Allocation, Management of Expenses and Income and Printing.</h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={electric}></img>
                <div class="text"><h4 id="para1">ORM</h4>
                <h6 id="para2">Resource Allocation, Permissions, crowd control, 
                 Event Management,crisis &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;management. </h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={fun}></img>
                <div class="text"><h4 id="para1">Corporate Strategy & Implementation</h4>
                <h6 id="para2">On-ground army of Aaruush, Sales and Publicity, crowd control, crisis management</h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={konst}></img>
                <div class="text"><h4 id="para1">Highlights</h4>
                <h6 id="para2">Arranging for Dignitaries, Guests, Expos and Aaruush Nights, Transportation and Hospitality. </h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={machine}></img>
                <div class="text"><h4 id="para1">Sponsorship & Marketing</h4>
                <h6 id="para2">Collaborating with brands for Sponsors and Partners, devising and executing marketing strategies.</h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={mag}></img>
                <div class="text"><h4 id="para1">Initiatives</h4>
                <h6 id="para2">Plans social initiatives and events which create a difference in society.</h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={on}></img>
                <div class="text"><h4 id="para1">Workshops</h4>
                <h6 id="para2">Planning and organizing Workshops, common registration</h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={present}></img>
                <div class="text"><h4 id="para1">Chalenges & Championships</h4>
                <h6 id="para2">Organizes extravaganza of interdisciplinary competitions based on Technology and Innovation</h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={robot}></img>
                <div class="text"><h4 id="para1">Creatives</h4>
                <h6 id="para2">The media production team, creating content in every possible digital art form</h6>
                </div>

            </div>
            <br></br>
            <div class="card">
                <img src={viman}></img>
                <div class="text"><h4 id="para1">Deco and Arts</h4>
                <h6 id="para2">Campus Decoration, Artwork and Structure making. </h6>
                </div>

            </div>
            
            
            </div>





            </div>
            
            
            </div>
    );
}