class Game {
  constructor(){}
  
  play(){
form.hide();
text("game start",120,100);
Player.getPlayerInfo();
if(allPlayers !== undefined){
var display_position = 130;
for(var plr in allPlayers){
if(plr==="player"+player.index){
fill("red");
}
else{
fill("black");
}
display_position=display_position+20
textSize(15.0);
text(allplayers[plr].name +":"+allPlayers[plr].distance,120,display_position)
}
}
if(keyIsDown(UP_ARROW) && player.index !==null){
player.distance=player.distance+50
player.update();
}
  }
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
}
