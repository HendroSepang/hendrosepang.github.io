//fungsi read more pada kabasaran
function kabasaran(){
  var dots = document.getElementById("dots");
  var moretext = document.getElementById('more');
  var btn = document.getElementById('btn');

  if(dots.style.display === "none"){
    dots.style.display = "inline";
    btn.innerHTML = "Read More";
    moretext.style.display = 'none';
  }else{
    dots.style.display = "none";
    btn.innerHTML = "Read Less";
    moretext.style.display = 'inline';   
  }
}

//fungsi read more pada mapalus
function mapalus(){
  var dots = document.getElementById("dots2");
  var moretext = document.getElementById('more2');
  var btn = document.getElementById('btn2');

  if(dots.style.display === "none"){
    dots.style.display = "inline";
    btn.innerHTML = "Read More";
    moretext.style.display = 'none';
  }else{
    dots.style.display = "none";
    btn.innerHTML = "Read Less";
    moretext.style.display = 'inline';   
  }
}

//fungsi read more pada pengucapan
function pengucapan(){
  var dots = document.getElementById("dots3");
  var moretext = document.getElementById('more3');
  var btn = document.getElementById('btn3');

  if(dots.style.display === "none"){
    dots.style.display = "inline";
    btn.innerHTML = "Read More";
    moretext.style.display = 'none';
  }else{
    dots.style.display = "none";
    btn.innerHTML = "Read Less";
    moretext.style.display = 'inline';   
  }
}
//fungsi read more pada alat musik
function musik(){
  var dots = document.getElementById("dots4");
  var moretext = document.getElementById('more4');
  var btn = document.getElementById('btn4');

  if(dots.style.display === "none"){
    dots.style.display = "inline";
    btn.innerHTML = "Read More";
    moretext.style.display = 'none';
  }else{
    dots.style.display = "none";
    btn.innerHTML = "Read Less";
    moretext.style.display = 'inline';   
  }
}