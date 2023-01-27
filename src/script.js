import { folders } from "./data.js";

setTimeout(() => {
  folders.sort((a,b)=>b.level-a.level);
  showFolders(folders);
}, 2000);

//---> Function for  appending all folders to the Main_page
function showFolders(array){
  grid.innerHTML=null;
  document.querySelector('#loader').style.display=`none`; 

  array.forEach(e => {
    let div = document.createElement("div");

      let icon = document.createElement("img");
      icon.src = "./src/images/folder.png";

      let name = document.createElement("h3");
      name.textContent = e.title;
      name.className='name';

      icon.onclick = () => {location.href = `${e.path}`};
      let download=document.createElement('i');
      download.className='fa-solid fa-download';
      download.onclick=() => {
        if(auth=='true'){
          window.location=e.url;
        }else{
          openLogin();
        }
      }

      div.append(name,icon, download); grid.append(div); 
  });
}


document.querySelector(`.search_bar`).addEventListener('input',e=>{
  document.querySelector('#loader').style.display=`block`;
  grid.innerHTML=null;
  let x=e.target.value;
  setTimeout(function(){
    if(x!="" || x!=" "){
      let res=folders.filter(el=>el.name.includes(x));
      showFolders(res);
    }
  },1000)
})







  