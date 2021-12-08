import React, { Component } from "react";
import photoprofile from "./image/253244823_234144432038366_423824725201113386_n.jpg";
class Header extends Component {
    render() {
        return (
            <div class="div-right">
                <div class="card-left">
                    <div class="card-header1">
                        <img class = "img" src={photoprofile}/>
                        <p>Ahmed Galal</p>
                    </div>
                    <div class="ul-right">
                        <ul>
                            <li class="work">Designer Web</li>
                            <li class="home">Alexandria, Egypt</li>
                            <li class="email">ahmed.galal226@yahoo.com</li>
                            <li class="phone">01280904213</li>
                        </ul>
                    </div>
                    <hr />
                    <div class="card-skills">
                        <ul>
                            <li class="skil">Skills</li>
                        </ul>
                        <p class="class-li">C#</p>
                        <meter class="class-li" value="95" max="100"></meter>
                        <p class="class-li">MYSQL</p>
                        <meter class="class-li" value="85" max="100"></meter>
                        <p class="class-li">SQLSERVER</p>
                        <meter class="class-li" value="75" max="100"> </meter>
                        <p class="class-li">Java</p>
                        <meter class="class-li" value="80" max="100"> </meter>
                        <p class="class-li">Backend</p>
                        <meter class="class-li" value="50" max="100"> </meter>
                    </div>
                    <div class="card-language">
                        <ul>
                            <li class="word">Language</li>
                        </ul>
                        <p class="class-li">Arabic</p>
                        <meter class="class-li" value="100" max="100"></meter>
                        <p class="class-li">English</p>
                        <meter class="class-li" value="75" max="100"></meter>
                    </div>
                </div>

            </div>
        )
    }
}

export default Header;