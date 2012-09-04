function OnControllerColliderHit(hit: ControllerColliderHit) 
{
	if(hit.gameObject.tag == "npc")
	{
		//Vampire mode
//		gameObject.GetComponent(HealthBarScript).currHealth = 
//		gameObject.GetComponent(HealthBarScript).maxHealth;
		
		//destroy orb
		//Destroy(hit.gameObject);
//		hit.gameObject.GetComponent(NPC_Stamina_script).currHealth = 0;		
		
	}
	

}


function Update () {
		//var controller : CharacterController = GetComponent(CharacterController);
}