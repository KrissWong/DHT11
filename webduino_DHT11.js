var dht;
if(window.readyBoardLength){
  window.readyBoardLength = window.readyBoardLength + 1;
}else{
  window.readyBoardLength = 1;
}

boardReady('M7xo', async function (board) {
  board.systemReset();
  board.samplingInterval = 250;
  dht = getDht(board, 11);
  document.getElementById("demo-area-01-show").style.fontSize = 20+"px";
  document.getElementById("demo-area-01-show").style.lineHeight = 20+"px";
  dht.read(function(evt){
    document.getElementById("demo-area-01-show").innerHTML = (['溫度',dht.temperature,'度'].join(''));
  }, 1000);
  if(window.boardReadyNumber){
    window.boardReadyNumber = window.boardReadyNumber +1;
  }else{
    window.boardReadyNumber = 1;
  }
  allBoardReady(window.boardReadyNumber);
});