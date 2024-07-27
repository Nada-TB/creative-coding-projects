document.getElementById('sun').addEventListener('click', function(){
  document.getElementById('firstCloud').style.display='none';
  if(screen.width>600){
    this.style.transform='scale(2)'; 
  }else{
    this.style.transform='scale(1.5)'; 
    document.getElementById('message').style.left="50%";
     document.getElementById('message').style.width="120px";
      document.getElementById('message').style.top="100%";
  }
  
  
  document.getElementById('face').style.display='block';
 
  document.querySelector('#message p').textContent='smile, tomorrow is a better day!';
});