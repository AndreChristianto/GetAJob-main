window.addEventListener("load", loadServiceContent());

function loadServiceContent() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const category = urlParams.get("category");
    const title = urlParams.get("title");

    for(var i = 1; i <= 8; i++){
        var imgSrc = "../assets/" + category + "-" + i + ".png";
        $("#image" + i).attr("src", imgSrc)
        $("#connect-seller-href" + i).attr("href", "service-detail.html?src=" + imgSrc )
    }
    
    $("#service-title").text(title.toUpperCase())
    $("#page-title").text(title.toUpperCase())
    
}