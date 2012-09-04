/*
Goal: 
Bot touches powerup
Bot gets the effect of powerup
powerup dies

powerup knows that if a player picks it up, to then die
if the powerup scipt were attached to the tagbot then how do we know which one?
(I think we need to use 'tags' here, no pun intended, our game just happens to be the game of tag)
*/

/*
Bot side:
if collide with orb tag: increase health

Orb side:
if collide with Bot: die
*/


/*if(hit.gameObject.tag == "orb")
	{
		//health back
//		gameObject.GetComponent(HealthBarScript).currHealth = 
//		gameObject.GetComponent(HealthBarScript).maxHealth;
		
		//destroy orb
		Destroy(hit.gameObject);
	}*/
	
	/*
	function OnTriggerEnter (other : Collider) {
    Destroy(other.gameObject);
}*/

function OnTriggerEnter (other : Collider) {

   // print("CharacterSide Trigger Hit");
	//if other has tag 
	if(other.tag == "orb")
	{
		Destroy(other.gameObject);
	}
}



function Update () {
		//var controller : CharacterController = GetComponent(CharacterController);
}
