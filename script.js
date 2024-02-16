var rect=document.querySelector('#center');

rect.addEventListener("mousemove",function(details){
    
    var rectloc=rect.getBoundingClientRect(); 
    var insiderect=details.clientX- rectloc.left;

    if(insiderect<rectloc.width/2)
    {
        var redcolor=gsap.utils.mapRange(0,rectloc.width/2,255,0,insiderect);
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease:Power4
        });
    }
    else
    {
        var bulecolor=gsap.utils.mapRange(rectloc.width/2,rectloc.width,0,255,insiderect);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bulecolor})`,
            ease:Power4
        });
    }

    rect.addEventListener('mouseleave',function(){
        gsap.to(rect,{
            backgroundColor: 'white'
        })
    });
}); 

