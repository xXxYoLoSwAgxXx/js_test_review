var knight = arthur;
var maiden = jane;
var monster = dragon;

weaponChest ["mace", "sorcerer's stone", "Excalibur"];

hero = {wizard : merlin, weapon : mace, power : 25}

function swordInTheStone(worthy){
  if (worthy == arthur){
    console.log("we have found our king worthy")
}
  else {
    console.log("we must keep searching, for worthy is unworthy")
  }
}
swordInTheStone (knight)

function trueLove (king, queen){
  if (queen == guinevere, king == arthur){
    console.log("on this day, our king and queen shall rule happily ever after")
}
  else{
  console.log("We must keep searching, for true love must reign over camelot")
  }
}
trueLove (knight, maiden)

function epicBattle (wizard, enemy, power){
  if (power < 16){
    console.log("our wizard has fallen")
  }
  else if (power > 15, power < 41){
    console.log("wizard has almost slain the enemy")
  }
  else{
    console.log("our wizard has almost slain the enemy")
  }
}

epicBattle (0, monster, 2)