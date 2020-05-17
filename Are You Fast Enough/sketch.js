function setup() {
  createCanvas(windowWidth,windowHeight-4);
  st1= createGraphics(windowWidth,windowHeight-4);
      button1 = createButton('Shall We?');
      b();
  frameRate(60);
    st1.targ = new target();
    rnd=random(2.99,5.01);
    karesec= floor(random(1,3));
}


function preload(){
  dkfoto = loadImage('fotograflar/dogru.jpg');
  ykfoto = loadImage('fotograflar/yanlis.jpg');
  wsound = loadSound('sound/winsound.mp3');
  lsound = loadSound('sound/losesound.mp3');
}


function draw() {
  background(255);
//Oyunun giriş ve oynanış ekranının seçilmesi
//Ekrana Gelen text'in silinmesi
  switch (bolum) {
    case 1:
    textSize(50);
    textAlign(CENTER);
    txt= "Ekrana Gelen Karelerden Doğru Olana 0.40 Saniye İçerisinde Tıklayın.";
    text(txt,(windowWidth)*(1/5),(windowHeight/2)-150,(windowWidth)*(3/5),400);
    break;
    case 2:
    s1();
      break;
      default:
  }
}
