function validate()
{
    var name = document.getElementById("name").value;
    var gross = document.getElementById("gross").value;
    var genre = document.getElementById("genre").value;
    var letters = /^[A-Za-z]+$/;
    if(name.length!=0)
    {
        if(!name.match(letters))
        {
            alert("Only Alphabets allowed in Name");
            return false;
        }
    }
    if(gross.length!=0)
    {
        if(gross<=0)
        {
            alert("Enter a valid price");
            return false;
        }
    }
}