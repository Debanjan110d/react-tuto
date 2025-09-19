// function customRender(react_element, container) {
//     const domElement = document.createElement(react_element.type) // create element

//     domElement.innerHTML = react_element.children // set text/children
//     domElement.setAttribute("href", react_element.props.href)
//     domElement.setAttribute("target", react_element.props.target)

//     container.appendChild(domElement) // append to container
// }
//Lets write some optimized version of the previous function

function customRender(react_element, container) {
    const domElement = document.createElement(react_element.type)
    domElement.innerHTML = react_element.children
    for (const key in react_element.props) {
        if (key === "children") {
            continue
        }
        domElement.setAttribute(key, react_element.props[key])
    }
    container.appendChild(domElement)

}

const react_element = {
    type: "a",
    props: {
        href: "https://reactjs.org",
        target: "_blank",
    },
    children: "Learn React"
}


const mainContainer = document.getElementById("root")
customRender(react_element, mainContainer)