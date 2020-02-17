var scores,gamePlaying, roundScore, activePlayer,previous,finalScore;
function init(){
scores = [0,0];
previous = [0,0];
roundScore=0;
gamePlaying=true;
activePlayer=0;
document.getElementById('dice-1').style.display='none';
document.getElementById('dice-2').style.display='none';
document.getElementById('score-0').innerHTML = 0;
document.getElementById('score-1').innerHTML = 0;
document.getElementById('current-0').innerHTML = 0;
document.getElementById('current-1').innerHTML = 0;
document.getElementById('name-0').innerHTML="Player 1";
document.getElementById('name-1').innerHTML="Player 2";
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
window.alert("GAME RULES:"+'\n'+"- The game has 2 players, playing in rounds."+'\n'+"-In each turn, a player rolls two dice as many times as he whishes.Each result gets added to his Current score."+'\n'+"- BUT, if the player rolls same number in both the dice, all his Current score gets lost. After that, it's the next player's turn."+'\n'+"- If a player rolls 6 in both the dice all his total score is lost and it goes to 0 . After that, it's the next player's turn."+'\n'+"- The player can choose to 'Hold', which means that his Current score gets added to his Total score. After that, it's the next player's turn."+'\n'+"The first player to reach 100 points wins the game.");
}
init();



 
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        finalScore=document.querySelector('.final-score').value;
        if(!finalScore){finalScore=100;}
        var dice1=Math.ceil(Math.random()*6);
        var dice2=Math.ceil(Math.random()*6);
        var diceDom = document.getElementById('dice-1');
        var diceDo = document.getElementById('dice-2');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-'+dice1 +'.png';
        diceDo.style.display = 'block';
        diceDo.src = 'dice-'+dice2 +'.png';
        if(dice1===6 && dice2===6)
        {
            scores[activePlayer]=0;
            document.querySelector('#current-'+activePlayer).innerHTML=0;
            nextPlayer();
        }
        else if(dice2!==dice1 ){
            roundScore +=dice1+dice2;
            document.querySelector('#current-'+activePlayer).innerHTML = roundScore;
        }
        else{
            nextPlayer();
        }
    }
    
    
}) ;
document.querySelector('.btn-hold').addEventListener('click',()=>{
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.getElementById('score-'+activePlayer).innerHTML= scores[activePlayer];
    
        if(scores[activePlayer]>=finalScore){
            gamePlaying=false;
            document.getElementById('name-'+activePlayer).innerHTML="Winner!";
            document.getElementById('dice-1').style.display='none';
            document.getElementById('dice-2').style.display='none';
            document.querySelector('.player-' +activePlayer+ '-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        }
        else{
            nextPlayer();
        }
    }
    
});
function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore=0;

        document.getElementById('current-0').innerHTML=0;
        document.getElementById('current-1').innerHTML=0;

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.getElementById('dice-1').style.display='none';
        document.getElementById('dice-2').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',()=>{
    init();
})