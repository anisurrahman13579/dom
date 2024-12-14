

  const button = document.querySelector("#bt1");
  const p  = document.querySelector("#para");
  

  button.addEventListener("click",function(){
       
    //alert("click working");
     p.textContent="button is clicked";


    // p.style.color="red";
    // p.style.backgroundColor="black";


     // class add first ways
   
  // p.classList.add("p-color");


      // class add korar second aways


      //p.setAttribute("class","p-color");
      p.setAttribute("id","pc");

  })
  

     


 
 
      const a= document.querySelector("#abc");
      a.setAttribute("href","abc.com");
     const r= a.getAttribute("href");
     console.log(r);