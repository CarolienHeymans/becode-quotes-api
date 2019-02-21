const wrapWithTag = (quote, name, book, tagname) => `<${tagname}>${quote} - ${name} - ${book}</${tagname}>`;

// const Search = () => {
//     //
//     let searchName = document.getElementById("search").value
//     fetch('/quotes/' + searchName)
//         .then(response => response.json())
//         .then(json => searchByName(json))
// }
// const searchByName = (quotes) => {
//     let list = quotes;
//     let listText = [];
//     console.log(list);
//     for (let instance of list) {
//         let quote = instance.quote
//         let name = instance.name
//         let book = instance.book
//         let quoteText = wrapWithTag(quote, name, book, `li`)
//         console.log(quoteText)
//         listText += quoteText
//         document.getElementById(`searchList`).innerHTML = listText
//     }

// }
const random = () => {
    fetch('/quotes/random')
        .then(response => response.json())
        .then(json => getRandomQuote(json))
}
const getRandomQuote = (quote) => { //random
      console.log(quote)
    document.getElementById(`randomQuote`).innerHTML = quote.quote}

  document.querySelector('#add').addEventListener('click', function(e){
        let quote = document.getElementById("addQuote").value;
        let name = document.getElementById("addName").value;
        let book = document.getElementById("addBook").value;
    
        const addQuote = {
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                "quote":`${quote}`,
                "name": `${name}`,
                "book": `${book}`
            })
        }
    
        console.log(quote+name+book + "OK" 
        )
    
        fetch('/quotes', addQuote)
    })