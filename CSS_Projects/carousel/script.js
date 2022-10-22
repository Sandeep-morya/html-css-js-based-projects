let arr = [
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6451/1376451-h-66d561b15e4e",

  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6424/1356424-h-258e1813fce6",

  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7976/1317976-h-e672d8d911fe",

  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4835/1374835-h-b4b9bc8dfef6",

  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6395/1366395-h-e01c59603785",

  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7333/1317333-h-c4cd88bedeb7",

  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8/1310008-h-14af1d2c7500",
];
// let i=0;
// setInterval(function(){
//     if(i>arr.length-1) i=0;
//     document.querySelector('img').src=arr[i];
//     i++;
// },2000)

function show(arr,i,x) {
  let slider = document.createElement("div");
  slider.className = "slider";
  let img = document.createElement("img");
  img.src = arr[i];
  slider.append(img);
  document.querySelector(".carousel").append(slider);
  document.querySelector('.carousel').firstChild.style.marginLeft=x;
}

for(let i=0; i<1; i++){
    show(arr,i,"-75%")
}
 let i=1;
setInterval(function(){
    let x=`-${100*i}%`
     if(i>arr.length-1)i=1;
     show(arr,i,x)
     i++
 },3000)
