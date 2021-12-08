import React, { Component } from "react";
import facebookimage from "./image/facebook.png";
import youtubeimage from "./image/yahoo.png";
import yahooimage from "./image/youtube-logotype.png";

class Footer extends Component {
    render() {
        return (
            <footer>
                <p class="center">Find Me On Facebook</p>
                <div>
                    <img src={facebookimage} />
                    <img src={youtubeimage} />
                    <img src={yahooimage} />
                </div>
                <p>Power By =<a target="_blank" href="https://www.facebook.com/profile.php?id=100010085434356">Fackbook:)</a>
                </p>
            </footer>
        )
    }
}
export default Footer;