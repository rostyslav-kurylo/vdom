const renderElement = ({tagName, attrs, children}) => {
    const $element = document.createElement(tagName);

    // add attributes
    for (const [attributeName, value] of Object.entries(attrs)) {
        $element.setAttribute(attributeName, value);
    }

    // append children
    for (const child of children) {
        $element.appendChild(render(child));
    }

    return $element;
};

const render = (vNode) => {
    if (typeof vNode === 'string') {
        return document.createTextNode(vNode);
    }

    return renderElement(vNode);
};

export default render;
