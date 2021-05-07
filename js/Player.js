class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
// to update player distance with name
    update(){
var playerIndex="players/player"+this.index
database.ref(playerIndex).set({
  name:this.name,
  distance:this.distance
})
  }
// to get player info in a single variable
    static getPlayerInfo(){
var playerInfoRef=database.ref("players")
playerInfoRef.on("value",(data)=>{
  allPlayers=data.val();
})
  }
}