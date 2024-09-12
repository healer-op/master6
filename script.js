(async () => {
    let cd = await (await fetch(`./data/GameList.json`)).json();
    const html = cd.map((d, i) => {
      return `<option value="${cd[i].link}">${cd[i].title}</option>`;
    }).join('');
    document.querySelector("#gameName").insertAdjacentHTML("afterbegin", html);

})();


async function renderGame(method){
  if(method === 1){
    if(!document.getElementById("gameName").value){
      alert("Please Choose a game to launch")
    }else{
      let url = document.getElementById("gameName").value
      window.location.href = url
    }
  }if(method === 2){
    if(!document.getElementById("url").value){
      alert("GAME JOIN URL CANT BE EMPTY")
    }else{
      let url = document.getElementById("url").value
        window.location.href = url
    }
  }
}