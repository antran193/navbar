function drocom()
{
    document.getElementById('listcom').classList.toggle('show');
    // var x =document.getElementById('drolistcom');
    // if(x.style.display==="none")
    // {
    //     x.style.display="block";
    // }
    // else{
    //     x.style.display="none";
    // }
    document.getElementById('drolistcom').style.height='100px';
}
window.onclick = function(event)
{
    if(!event.target.matches('.drocom1')){
        var drodowns=document.getElementsByClassName('listcomcl');
        var i;
        for( i=0;i<drodowns.length;i++)
        {
            var opendrodown = drodowns[i];
            if(opendrodown.classList.contains('show'))
            {
                opendrodown.classList.remove('show');
                document.getElementById('drolistcom').style.height='30px';
            }
        }
    }

}



