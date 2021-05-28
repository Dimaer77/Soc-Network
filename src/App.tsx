import React from 'react';
import './App.css';
import {Technologies} from "./components/Technoliges";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

function App() {
    return (
        <div className={"wrapper-content"}>
            <header className={"header"}>
                <img style={{width: "50px", height: "100%", marginLeft: "5px"}}
                     src="https://icon-library.net/images/icon-png-logos/icon-png-logos-9.jpg" alt=""/>
            </header>
            <nav className={"nav"}>
                <ul>
                    <li><a>Profile</a></li>
                    <li><a>Messages</a></li>
                    <li><a>News</a></li>
                    <li><a>Music</a></li>
                    <li><a>Setting</a></li>
                </ul>
            </nav>
            <div className={"content"}>
                <div>
                    <img src="https://i.ytimg.com/vi/xrdVMaUaaYQ/maxresdefault.jpg" alt="img"/>
                </div>
                <div>
                    <img style={{width: "80px", height: "80px", marginLeft: "5px"}}
                         src="https://s2.desu-usergeneratedcontent.xyz/g/image/1504/46/1504460092425.jpg" alt=""/>
                    description
                </div>
                <div>
                    My Pos ts
                    <div>
                        New Post
                    </div>
                    <div>
                        <div>
                            post1
                        </div>
                        <div>
                            post2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
