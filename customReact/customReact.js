const reactElement = {
    type : 'a',
    attribute : {
        href : 'google.com',
        target : '_blank',
    },
    children : `Click me to visit google`,
}
function customRender (reactElement,container) {
    /*
    const newElement = document.createElement(reactElement.type)
    // console.log(newElement);
    newElement.innerHTML=reactElement.children;
    
    newElement.setAttribute('href',reactElement.attribute.href)
    newElement.setAttribute('target',reactElement.attribute.target)

    container.appendChild(newElement)
    */
    const newElement = document.createElement(reactElement.type)
    // console.log(newElement);
    newElement.innerHTML=reactElement.children;

    for (const key in reactElement.attribute) {
        if (key === 'children') {
            continue;
        }
        else{
            newElement.setAttribute(key,reactElement.attribute[key])
        }
    }
    container.appendChild(newElement)
}
const mainContainer = document.getElementById('root');
// console.log(mainContainer);
customRender(reactElement,mainContainer)