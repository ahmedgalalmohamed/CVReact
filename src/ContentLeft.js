import React, { Component } from "react";

class ContentLeft extends Component {
    render() {
        return (
            <div class="div-left">
                <div class="card-right">
                    <div class="card-header">
                        <div class="ul-right">
                            <ul>
                                <li class="word-main">Work Experience</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="card-work">Front End Developer/js,html,react,css</p>
                        <p class="m-l2">In Jun 2020-<button>Current</button></p>
                        <p class="parg">The goal of the Front End Web
                            Developer Nanodegree program is to equip learners with the unique skills they need to build and
                            develop a variety of websites and applications. Graduates of this Nanodegree program will be
                            able to construct responsive websites using CSS, Flexbox and CSS Grid, develop interactive
                            websites and UI (User Interface) applications using JavaScript and HTML, and connect a web
                            application to backend server data using JavaScript. Students will also build competency
                            automating application build and deployment using Webpack and improving offline performance of
                            websites using Service Worker.</p>
                    </div>
                    <hr />
                    <div class="card-body">
                        <p class="card-work">Back-end Development/node-js,php,c#</p>
                        <p class="m-l2">In Jun 2020-<button>Current</button></p>
                        <p class="parg">refers to the server-side
                            development. It focuses on databases, scripting, website architecture. It contains
                            behind-the-scene activities that occur when performing any action on a website. It can be an
                            account login or making a purchase from an online store. Code written by back-end developers
                            helps browsers to communicate with database information.</p>
                    </div>
                    <hr />
                    <div class="card-body">
                        <p class="card-work">Designer/UI,UX</p>
                        <p class="m-l2">In Jun 2020-<button>Current</button></p>
                        <p class="parg" >The UI/UX Design Specialization
                            brings a design-centric approach to user interface and user experience design, and offers
                            practical, skill-based instruction centered around a visual communications perspective, rather
                            than on one focused on marketing or programming alone. In this sequence of four courses, you
                            will summarize and demonstrate all stages of the UI/UX development process, from user research
                            to defining a project’s strategy, scope, and information architecture, to developing sitemaps
                            and wireframes. You’ll learn current best practices and conventions in UX design and apply them
                            to create effective and compelling screen-based experiences for websites or apps.</p>
                    </div>
                </div>
                <div class="card-right">
                    <div class="card-header">
                        <div class="ul-right">
                            <ul>
                                <li class="word-eduction">Eduction</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="card-work">School Primary</p>
                        <p class="m-l2" >From 2006 to 2012</p>
                    </div>
                    <hr />
                    <div class="card-body">
                        <p class="card-work">School Secondary</p>
                        <p class="m-l2">From 2016 to 2019</p>
                    </div>
                    <hr />
                    <div class="card-body">
                        <p class="card-work">Al-Manoufia University</p>
                        <p class="m-l2">In 2020 to 2023-<button>Current</button></p>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContentLeft;