// var ENDPOINT_URL = 'http://localhost:5000/search/';
var ENDPOINT_URL = 'http://api.bitses.org/search/';

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(JSON.parse(xmlHttp.responseText));
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

function add_card(site) {
    var element = ''
    element += '<div class="col-12 mb-3"><div class="card bg-light"><div class="card-header">';
    element += '<strong>'+site['site-name']+'</strong>';
    element += '</div>';
    element += '<div class="card-body">';

    if (site.title) {
        element += '<a href="'+site.url+'" target="_blank">';
        element += '<span>'
        element += site.title;
        element += '</span>'
        element += '</a>'
        element += '<br>'
        element += '<span class="text-muted">'
        element += site.url;
        element += '</span>'
    } else {
        element += '<a href="'+site.url+'" target="_blank">';
        element += site.url;
        element += "</a>"
    }

    element += "</div>"
    element += "</div>"

    $("#portal-search-results").append(element);

    // switch(site.type) {
    // case "html":
    //     break;
    // case "pdf":
    //     break;
    // }

}

function setResults(json) {
    $("#portal-search-results").empty();

    for (var i=0; i < json.length; i++) {
        add_card(json[i])
        // console.log(json[i]);
    }
}

function portalSearch() {
    console.log('asdasd');
    var search_str = document.getElementById('portal-search-input').value;
    if (search_str === '') {
        return;
    }
    search_url = ENDPOINT_URL + search_str;
    httpGetAsync(search_url, setResults);

}

function handleKeypress(e) {
    if(e.keyCode === 13){
        e.preventDefault(); // Ensure it is only this code that runs
        portalSearch();
    }
}

