import React from "react"
import ReactDOM from "react-dom"

import Myapp from "./Myapp.js"

ReactDOM.render(
       <Myapp /> , 
        document.getElementById("root")
    )

var myNewP = document.createElement("p")
myNewP.innerHTML = "This is a paragraph"