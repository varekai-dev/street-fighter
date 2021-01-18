import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    const {PlayerOneAttack, PlayerOneBlock, PlayerTwoAttack, PlayerTwoBlock} = controls

    const healthBars = document.querySelectorAll('.arena___health-bar');

    const basicInfo ={
      block: false, 
      currentHealth: 100,
    }

    const playerOne = { 
      ...firstFighter, 
      ...basicInfo,
      healthBar: healthBars[0], 
    }

    const playerTwo = { 
      ...secondFighter,  
      ...basicInfo,
      healthBar: healthBars[1], 
    }


    function attackRelease(attacker, defender) {
      if(attacker.block) {
        return ;
      }

      if(defender.block) {
        return ;
      }

      const totalDamage = getDamage(attacker, defender);

     
      defender.currentHealth = defender.currentHealth - totalDamage / defender.health * 100;
      
      if(defender.currentHealth <= 0) {
    
        resolve(playerOne);
      }
      if(attacker.currentHealth <= 0) {
    
        resolve(playerTwo);
      }

      playerTwo.healthBar.style.width = `${defender.currentHealth}%`;
    }

  
    function onReleaseKey(e) {
    
      switch(e.code) {
        case controls.PlayerOneBlock: 
        playerOne.block = false;
         break;

        case controls.PlayerTwoBlock: 
        playerTwo.block = false; 
        break;
      }

   
    }

    function onPressKey(e) {
     
     
      switch(e.code) {
        case PlayerOneAttack: {
          attackRelease(playerOne, playerTwo);
          break;
        }

        case PlayerTwoAttack: {
          attackRelease(playerTwo, playerOne);
          break;
        }

        case PlayerOneBlock: {
          playerOne.block = true;
          break;
        }

        case PlayerTwoBlock: {
          playerTwo.block = true;
          break;
        }
      }   
  }

    document.addEventListener('keydown', onPressKey);
    document.addEventListener('keyup', onReleaseKey);
  });
}



function getDamage(playerOne, playerTwo) {
  const damage = getHitPower(playerOne) - getBlockPower(playerTwo);
  return damage
}

 function getHitPower(fighter) {
  const criticalHitChance = Math.random()+1
  const attack = fighter.attack
  return attack*criticalHitChance
}

 function getBlockPower(fighter) {
  const dodgeChance =  Math.random()+1
  const defense= fighter.defense
 return  defense * dodgeChance
 
}
