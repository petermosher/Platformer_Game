function OnColliderEnter (other : Collider) {

   print("CharacterSide Collider Hit");
	//if other has tag 
	if(other.tag == "orb")
	{
		Destroy(other.gameObject);
	}
    
}

function OnControllerColliderHit (hit : ControllerColliderHit) {
  print("character collider hit");

}

function OnTriggerEnter (hit : Collider) {
    //if(hit)
    //{
    print("character hit trigger");
    //}
    //else
    //{print("");}

}

function OnCollisionEnter(collision : Collision){
        //if (collision == collisionObject){
        //    gameObject.FindWithTag("Player").SendMessage("ApplyDamage");
        print("Hit!");
        //}
    }

function Update () {
		//var controller : CharacterController = GetComponent(CharacterController);
}
