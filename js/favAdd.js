function addToFavorite() {
    document.getElementById("favStatus").innerHTML="Movie added to favorite successfully"
    setTimeout(function(){ document.getElementById("favStatus").innerHTML="" }, 2500);
    return false;
}