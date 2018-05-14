const URL = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=parseQuote'
const imageURL = 'https://api.unsplash.com/photos/random/?client_id=b6f0ed4cca26cd97215c4dcee9b14f4a584bbf5d52aaf8cf6b78a302b90fadd1'
$(document).ready(() => {
    initialize()
    $("button.generate").on("click", () => {
        changeBackground()
        $.ajax({
            url: URL,
            type: "GET",
            dataType: "jsonp"
        })
    })
    $("i.fa-twitter").on('click', () => {
        let twitterLink = "https://twitter.com/intent/tweet?text="
        let quote = $("p.quoteText").text()
        let author = $("p.quoteAuthor").text()
        let data = quote + '  [' + author + ']'
        let encodedData = encodeURI(data)
        twitterLink = twitterLink + encodedData + "&hashtags=quotes,motivation"
        window.location.href = twitterLink;
    })
    $("i.fa-tumblr").on('click', () => {
        let quote = $("p.quoteText").text()
        let author = $("p.quoteAuthor").text()
        let tumblrLink = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes%2Cmotivation&caption=+" + author + "&content=" + quote + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
        window.location.href = tumblrLink;
    })

})

initialize = () => {
    $.ajax({
        url: URL,
        type: "GET",
        dataType: "jsonp"
    })
    changeBackground()
}
parseQuote = (quote) => {
    const { quoteText, quoteAuthor } = quote;
    updateUI(quoteText, quoteAuthor)
}

updateUI = (quote, author) => {
    $("p.quoteText").text(quote)
    if (author)
        $("p.quoteAuthor").text(author)
    else
        $("p.quoteAuthor").text('Anonymous')
}

changeBackground = () => {
    let height = $(window).height()
    let width = $(window).width()
    let URL = imageURL + '&w=' + width + '&h=' + height + '&collections=1020268'
    $.ajax({
        url: URL,
        type: "GET",
        dataType: "json",
        success: (data) => {
            const image = data.urls.regular
            $("body").css("background-image",'url(' + image + ')')
        }
    })
}