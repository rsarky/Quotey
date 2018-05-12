const URL = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=parseQuote'
$(document).ready(() => {
    $.ajax({
        url: URL,
        type: "GET",
        dataType: "jsonp"
    })
    $("button.generate").on("click",() => {
        $.ajax({
            url: URL,
            type: "GET",
            dataType: "jsonp"
        })
    })
    
})
parseQuote = (quote) => {
    const {quoteText, quoteAuthor} = quote;
    updateUI(quoteText, quoteAuthor)
}

updateUI = (quote, author) => {
    $("p.quoteText").text(quote)
    $("p.quoteAuthor").text(author)
}