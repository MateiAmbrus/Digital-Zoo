const inputElement = document.getElementById('inputUsername'); // Select the <input> element
const typeAttributeNode = inputElement.attributes.getNamedItem('type'); // Get the type attribute node
const nameAttributeNode = inputElement.attributes.getNamedItem('name'); // Get the name attribute node
const idAttributeNode = inputElement.attributes.getNamedItem('id'); // Get the id attribute node

console.log(typeAttributeNode.nodeName); // Output: "type"
console.log(nameAttributeNode.nodeName); // Output: "name"
console.log(idAttributeNode.nodeName); // Output: "id"
