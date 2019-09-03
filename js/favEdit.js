function favEdit(r) {
    var i = r.parentNode.parentNode.rowIndex;
    var n = document.getElementById("movieList").rows.length-1;
    var r = confirm("Are you sure you want to remove the movie from Favorites?");
    if(r==true)
    {
        document.getElementById("movieList").deleteRow(i);
        document.getElementById("favStatus").innerHTML = "Movie removed from Favorites successfully"
        setTimeout(function(){ document.getElementById("favStatus").innerHTML="" }, 1500);
        n = n-1;
        if(n>0)
        {
            document.getElementById("favCount").innerHTML = n;
        }
        else
        {
            document.getElementById("favCount").innerHTML = n;
            document.getElementById("movieList").deleteRow(0);
            document.getElementById("favEmpty").innerHTML = "No items in Favorites. Use 'Add to Favorites' option in <a href='MovieListCustomer.html'>Movies</a>";
        }
    }
}