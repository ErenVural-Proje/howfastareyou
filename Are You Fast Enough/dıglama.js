//Tıklanan yerin karelerin içinde olup olmadığını ve doğru kareye tıklanıp tıklanılmadığını kontrol etme
//Kazanma ve kaybetme seslerinin oynatılması
function mousePressed(){

if(karesec==1){
if(mouseX >= st1.targ.x && mouseX <=st1.targ.x +st1.targ.r && mouseY>=st1.targ.y && mouseY<=st1.targ.y+st1.targ.r ){
st1.targ.x=-1000;

if(sayac<0.40){
  st1.textSize(20);
  st1.textAlign(CENTER);
  st1.text('Refleksiniz İYİ',windowWidth/2, ((windowHeight-4)/2)-30);
  st1.text('Refleks Süreniz: '+sayac,windowWidth/2, (windowHeight-4)/2);
  st1.text('Yeniden Oynamak İçin Sayfayı Yenileyiniz',windowWidth/2, ((windowHeight-4)/2)+30);
  wsound.play();
  noLoop();
}else{
  st1.textSize(20);
  st1.textAlign(CENTER);
  st1.text('Refleksiniz ZAYIF',windowWidth/2, ((windowHeight-4)/2)-30);
  st1.text('Refleks Süreniz :'+sayac,windowWidth/2, (windowHeight-4)/2);
  st1.text('Yeniden Oynamak İçin Sayfayı Yenileyiniz',windowWidth/2, ((windowHeight-4)/2)+30);
  lsound.play();
  noLoop();
  }
}
if(mouseX >= st1.targ.x +st1.targ.r && mouseX <=st1.targ.x +st1.targ.r +st1.targ.r && mouseY>=st1.targ.y && mouseY<=st1.targ.y+st1.targ.r ){
st1.targ.x=-1000;
st1.textSize(20);
st1.textAlign(CENTER);
  st1.text('Yanlış Kareye Tıkladınız',windowWidth/2, ((windowHeight-4)/2)-30);
  st1.text('Refleks Süreniz :'+sayac,windowWidth/2, (windowHeight-4)/2);
  st1.text('Yeniden Oynamak İçin Sayfayı Yenileyiniz',windowWidth/2, ((windowHeight-4)/2)+30);
  lsound.play();
  noLoop();
  }
}
else{
  if(mouseX >= st1.targ.x +st1.targ.r && mouseX <=st1.targ.x +st1.targ.r +st1.targ.r && mouseY>=st1.targ.y && mouseY<=st1.targ.y+st1.targ.r ){
  st1.targ.x=-1000;

  if(sayac<0.40){
    st1.textSize(20);
    st1.textAlign(CENTER);
    st1.text('Refleksiniz İYİ',windowWidth/2, ((windowHeight-4)/2)-30);
    st1.text('Refleks Süreniz :'+sayac,windowWidth/2, (windowHeight-4)/2);
    st1.text('Yeniden Oynamak İçin Sayfayı Yenileyiniz',windowWidth/2, ((windowHeight-4)/2)+30);
    wsound.play();
    noLoop();
  }else{
    st1.textSize(20);
    st1.textAlign(CENTER);
    st1.text('Refleksiniz ZAYIF',windowWidth/2, ((windowHeight-4)/2)-30);
    st1.text('Refleks Süreniz :'+sayac,windowWidth/2, (windowHeight-4)/2);
    st1.text('Yeniden Oynamak İçin Sayfayı Yenileyiniz',windowWidth/2, ((windowHeight-4)/2)+30);
    lsound.play();
    noLoop();
    }
  }
  if(mouseX >= st1.targ.x  && mouseX <=st1.targ.x +st1.targ.r && mouseY>=st1.targ.y && mouseY<=st1.targ.y+st1.targ.r ){
  st1.targ.x=-1000;
    st1.textSize(20);
    st1.textAlign(CENTER);
    st1.text('Yanlış Kareye Tıkladınız',windowWidth/2, ((windowHeight-4)/2)-30);
    st1.text('Refleks Süreniz :'+sayac,windowWidth/2, (windowHeight-4)/2);
    st1.text('Yeniden Oynamak İçin Sayfayı Yenileyiniz',windowWidth/2, ((windowHeight-4)/2)+30);
    lsound.play();
    noLoop();
    }
  }
}
