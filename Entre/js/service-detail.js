window.addEventListener("load", loadServiceContent());

function loadServiceContent() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const src = urlParams.get("src");

    for(var i = 1; i <= 8; i++){
        $("#image-service-detail").attr("src", src)
    }
    
}