var  images=[
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fstock-photo%2Ffamily-cartoon.html&psig=AOvVaw09iZVizyt8o8tDAohSRcLK&ust=1628436759691000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjl-Oidn_ICFQAAAAAdAAAAABAD","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.today.com%2Fparents%2F15-best-gifts-brothers-t154064&psig=AOvVaw0RIzU97I9ioAbL_YHaDhaG&ust=1628437275089000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICoweKfn_ICFQAAAAAdAAAAABAD","https://www.google.com/url?sa=i&url=https%3A%2F%2Fmom.com%2Fbaby%2Fan-open-letter-to-that-new-mom&psig=AOvVaw0k33fUzTGoJXO7SNrykr3Q&ust=1628437355316000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCfqI6gn_ICFQAAAAAdAAAAABAE","https://www.google.com/url?sa=i&url=https%3A%2F%2Fraisingchildren.net.au%2Fgrown-ups%2Ffathers%2Fearly-days%2Fnew-dads-10-tips&psig=AOvVaw1-WjyvwF3iALaiyxxRyzuk&ust=1628437703621000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiY1amhn_ICFQAAAAAdAAAAABAD"];

var names=[
    "family book","Aarav Kamdar","Rashmi Kamdar","Vishal Kamdar"
]
var i=0;
function update(){

    i++;
    var numbersoffamilymembersin_array = 5 
    if (i >numbersoffamilymembersin_array)
}
i=0;
{
    var updatedimg = images[i];
    var updatedname = names[i];
    document.getElementById("family_name_member").innerHTML = updatedname
    document.getElementById("family_img_member").src = updatedimg;
}