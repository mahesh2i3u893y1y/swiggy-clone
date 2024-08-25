const parent = React.createElement("div",{id:"partent"},[
    React.createElement("div",{id:"chid"},[
        React.createElement("h1",{},"I am heading1"),
        React.createElement("h2",{},"I am heading2")
    ])
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);