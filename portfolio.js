document.getElementById("openbtn").addEventListener("click", function() {
    document.getElementById("sidebar").style.display="block";
});
document.getElementById("closebtn").addEventListener("click", function() {
    document.getElementById("sidebar").style.display="none";
});

function Pro(){
    
    const Display =document.getElementById("project");
    Display.scrollIntoView({behavior:"smooth"});
    
};

function About(){
    
    const Display =document.getElementById("About");
    Display.scrollIntoView({behavior:"smooth"});
    
};
function Resume(){
    
    const Display =document.getElementById("Resume");
    Display.scrollIntoView({behavior:"smooth"});
    
};


function typeWriter(id,text,speed=100){
    let index=0;
  function writer()  {

      if(index < text.length){
    
     document.getElementById(id).innerHTML +=text.charAt(index);
     index++;
     setTimeout(writer,speed);
    } 
  }
  writer();
}

window.onload=function(){
    typeWriter("target" ,"i am Atobatele Marcus Adetoba");
    typeWriter("pretext", "I am a data driven tech specialist with excellent skills in web development and data analytics. i help business make better decision with my analytical excellence and help business grow their online presence with an exceptional web page");
};

const form=document.getElementById("contact-form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    emailjs.sendForm("service_6w14ive","template_tgtl7id",this).then(function(response){
        alert("Email sent successfully!");
    }, function(error){
        alert("failed to send email, error:" +JSON.stringify(error));
        reset
    });
    form.reset();


    
});

