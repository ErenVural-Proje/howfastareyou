//Başlama butonunu gizler
//Objeleri gösterme,Objelere tıklama süresini ölçme
function s1(){
  button1.hide();
  y=y+1/60;
    if(y>rnd){
      st1.targ.show();
      st1.targ.show1();
      sayac=sayac+1/60;
    }
  image(st1,0,0);
}
