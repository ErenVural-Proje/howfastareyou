// butonun özelliklerini belirler
function b(){
  button1.size(80,50);
  button1.style('background-color', '#dfbdfa');
  button1.style('color', '#ffffff');
  button1.style('cursor','pointer');
  button1.style('font-size','15px');
  button1.style('border-radius','6px');
  button1.style('border','1px solid #ffffff');
  button1.style('text-shadow','0px 1px 0px #f50af5');
  button1.position(width/2-40,height/2-25);
  button1.mousePressed(btn);
}

//Oyun ekranını getirmek için kullanılır
function btn(){
  bolum=2;
}
