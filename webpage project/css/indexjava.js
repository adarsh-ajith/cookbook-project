function myFunction()
{
    document.getElementById("myDropdown").classList.toggle("show") & document.getElementById("yourDropdown").classList.toggle("none");
}
window.onclick = function(event)
{
    if(!event.target.matches('.dropbtn'))
    {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for(i=0; i<dropdowns.length; i++)
        {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show'))
            {
                openDropdown.classList.remove('show');
            }
        }
    }
}
function myfunction()
{
    document.getElementById("myDropdown").classList.toggle("none") & document.getElementById("yourDropdown").classList.toggle("show");
}
window.onclick = function(event)
{
    if(!event.target.matches('.dropbtn'))
    {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var k;
        for(k=0; k<dropdowns.length; k++)
        {
            var openDropdown = dropdowns[k];
            if (openDropdown.classList.contains('show'))
            {
                openDropdown.classList.remove('show');
            }
        }
    }
}
