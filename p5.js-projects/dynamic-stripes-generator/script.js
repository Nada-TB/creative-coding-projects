function setup(){
    let img= createCanvas(200,200);
   }
   
   function draw(){
     background(0,255,0);
     for(let i=1; i*5<200; i++){
       if((i%2)===0){
         line(i*5,0,i*5,200);
         stroke(255,0,0);
       }else{
         line(i*5,0,i*5,200);
         stroke(0,0,0);
       }
       line(0, i*10, 200, i*5);
       stroke(0,0,255);
       
     }
   }
   