function customRender(react_element, container) {
    const domElement = document.createElement(react_element.type) // create element

    domElement.innerHTML = react_element.children // set text/children
    domElement.setAttribute("href", react_element.props.href)
    domElement.setAttribute("target", react_element.props.target)

    container.appendChild(domElement) // append to container
}


const react_element = {
    type: "h1",
    props: {
        href: "https://reactjs.org",
        target: "_blank",
    },
    children: "Learn React"
}


const mainContainer = document.getElementById("root")
customRender(react_element, mainContainer)