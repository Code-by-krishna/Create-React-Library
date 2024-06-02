

function CustomRander(Reactelement,sendvalue) {
   /* const domElement = document.createElement(Reactelement.type)
        domElement.innerHTML = Reactelement.Children
        domElement.setAttribute('href',Reactelement.props.href )
        domElement.setAttribute('target',Reactelement.props.target)

        sendvalue.appendChild(domElement)
        */
    const domElement = document.createElement(Reactelement.type)
    domElement.innerHTML = Reactelement.Children;
    for (const prop in Reactelement.props) {
        
        domElement.setAttribute(prop,Reactelement.props[prop])
    }
    sendvalue.appendChild(domElement)
}



const Reactelement = {
    type : 'a',
    props : {
        href: 'https://google.com',
        target: '_blank'
    },
    Children:'Click on Link'
}

const sendvalue = document.querySelector('#root');
CustomRander(Reactelement,sendvalue)


