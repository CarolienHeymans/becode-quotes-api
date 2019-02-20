const wrapWithTag = (quote, name, book, tagname) => `<${tagname}>${quote} - ${name} - ${book}</${tagname}>`;

const Search = () => {
    //
    let searchName = document.getElementById("search").value
    fetch('/quotes/' + searchName)
        .then(response => response.json())
        .then(json => searchByName(json))
}
const searchByName = (quotes) => {
    let list = quotes;
    let listText = [];
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
const random = () => {
    fetch("http://localhost:5000/quotes")
        .then(response => response.json())
        .then(json => getRandomQuote(json))
}
const getRandomQuote = (quotes) => { //random
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(randomQuote)
    document.getElementById(`randomQuote`).innerHTML = randomQuote.quote}