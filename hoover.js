function mover () {
 if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf ("MSIE 7")!=-1) || (navigator.appVersion.indexOf ("MSIE 8")!=-1 )) {
  if (document.all)
  {
   document.all.sound.src = "windows98q.mp3";
  }
 }
 
 else {
 {
  var audio = document.getElementsByTagName("audio")[0];
  audio.play();
  }
  }
  }
