// const wrapWithTag = (quote,film, tagname) => `<${tagname}>${quote} - ${film} </${tagname}>`;
// // search by film
// const Search = () => {

//     let searchName = document.getElementById("search").value
//     fetch('/quotes/' + searchName)
//            .then(response => response.json())
//         .then(json => searchByFilm(json))
//         console.log(json)
// }  
// const searchByFilm = (quotes) => {
//     let list = quotes;
//     let listText = [];
//     console.log(list);
//     for (let instance of list) {
//         let quote = instance.quote
//         let film = instance.film
//         let quoteText = wrapWithTag(quote, film, `li`)
//         console.log(quoteText)
//         listText += quoteText
//         document.getElementById(`searchList`).innerHTML = listText
//     }
// }
//random
document.querySelector('#random').addEventListener('click', function (e) {
    fetch('/quotes/random')
        .then(response => response.json())
        .then(json => getRandomQuote(json))

const getRandomQuote = (quote) => {

    console.log(quote);
    let randomQuote = quote.quote;

    let randomFilm = quote.film;
    document.getElementById(`randomQuote`).innerHTML = `${randomQuote} -${randomFilm}`;
   

}})
//add quote
document.querySelector('#add').addEventListener('click', function (e) {
    let quote = document.getElementById("addQuote").value;
    let film = document.getElementById("addFilm").value;

    const addQuote = {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "quote": `${quote}`,

            "film": `${film}`
        })
    }
    console.log(quote + name + film + "OK")
    fetch('/quotes', addQuote)
    document.getElementById(`addedQuote`).innerHTML = quote;
    document.getElementById(`addedFilm`).innerHTML = `- ${film}`;
})

const addClassStyle=()=>{
    let card= document.querySelectorAll("#card");
    console.log(card)
   card.className += ' additionalClass'
    // p.classList.add("card");
}