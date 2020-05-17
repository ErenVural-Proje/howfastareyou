class target{
constructor() {
  this.r=random(100,140);
  let a=this.r;
  this.x=random(a,windowWidth-(a*2));
  this.y=random(a,windowHeight-(a*2));
}

//Doğru kareye doğru fotoğrafın Yanlış kareye yanlış fotoğrafın atılması
show(){
  if(karesec==1){
  image(dkfoto,this.x,this.y,this.r,this.r);
}else{
  image(ykfoto,this.x,this.y,this.r,this.r);
  }
}
show1(){
  if(karesec==2){
  image(dkfoto,this.x+this.r,this.y,this.r,this.r);
}else{
  image(ykfoto,this.x+this.r,this.y,this.r,this.r);
    }
  }
}
