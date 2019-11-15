export default ($node, $target) => {
    $target.innerHTML = '';
    $target.appendChild($node);

    return $node;
};
