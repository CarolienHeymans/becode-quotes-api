const wrapWithTag = (quote, name, book, tagname) => `<${tagname}>${quote} - ${name} - ${book}</${tagname}>`;
const Search = () => {
    let searchByName = document.getElementById("search").value
    fetch('http://localhost:5000/quotes/' + searchByName)
        .then(response => response.json())
        .then(json => getQuote(json))
}
const getQuote = (json) => {
    let list = json;
    let listText =[] ;
    console.log(list);
    for (let instance of list) {
        let quote = instance.quote
        let name = instance.name
        let book = instance.book
        let quoteText = wrapWithTag(quote, name, book, `li`)
        console.log(quoteText)
        listText += quoteText
        document.getElementById(`searchList`).innerHTML = listText
    }
  
}