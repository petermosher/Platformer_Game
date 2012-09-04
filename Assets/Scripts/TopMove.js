

//Moves the Worm and spawns fireballs
private var speed = 1000.0;
//var rotateSpeed = 3.0;

//Shooting
//var bullitPrefab: Transform;

//Dying, Respawing
private var dead = false;

//Getting hit: spinning around
var tumbleSpeed = 1000;
var decreaseTime = 0.3;
var decayTime = 0.6;
static var gotHit = false;
private var backup = [tumbleSpeed, decreaseTime, decayTime];



function Update () {

	//attempt at creating triggers for the animations
/*
	if (Input.GetAxis("Vertical") > 0.2)
	{
		animation.CrossFade ("walk");
	}       
   else
   {
      animation.CrossFade ("idle");
   }
*/   

/*
var rigidbody : Rigidbody = GetComponent(Rigidbody);
   
    if(Input.GetAxis ("Horizontal") > 0)
        rigidbody.velocity.x = speed;

    if(Input.GetAxis ("Horizontal") < 0)
        rigidbody.velocity.x = -speed;
        
    if(Input.GetAxis ("Vertical") > 0)
        rigidbody.velocity.z = speed;

    if(Input.GetAxis ("Vertical") < 0)
        rigidbody.velocity.z = -speed;    

    //else
        //rigidbody.velocity.x = 0;
*/
        
	var controller : CharacterController = GetComponent(CharacterController);
	
	//Rotate around y - axis
	//transform.Rotate(0, Input.GetAxis ("Horizontal") * rotateSpeed, 0);
	
	//Move forward / backward
	var forward = transform.TransformDirection(Vector3.forward);
    var right = transform.TransformDirection(Vector3.right);
    var left = transform.TransformDirection(Vector3.left);
    
    //print(Input.GetAxis ("Vertical"));
    
    if(Input.GetButton("right"))//Input.GetAxis ("Vertical"))
    {
        controller.SimpleMove(right * speed * Time.deltaTime);
    }
    
    if(Input.GetButton("left"))//Input.GetAxis ("Vertical"))
    {
        controller.SimpleMove(left * speed * Time.deltaTime);
    }
    
        if(Input.GetButton("up"))//Input.GetAxis ("Vertical"))
    {
        controller.SimpleMove(forward * speed * Time.deltaTime);
    }
    
    if(Input.GetButton("down"))//Input.GetAxis ("Vertical"))
    {
        controller.SimpleMove(-forward * speed * Time.deltaTime);
    }
    
    //if(Input.GetAxis ("Horizontal"))
    //{
     //   controller.SimpleMove(forward * speed * Time.deltaTime);
    //}
    
	//var curSpeed = speed * Input.GetAxis ("Vertical");
    //var otherSpeed = speed * Input.GetAxis ("Horizontal");
	//controller.SimpleMove(forward * curSpeed * otherSpeed * Time.deltaTime);
	
	/*
	if(Input.GetButtonDown("Jump"))
	{
		//Prefab, position, angles
		var bullit = Instantiate(bullitPrefab, 
				GameObject.Find("FireBallSpawner").transform.position, 
				Quaternion.identity);
		bullit.rigidbody.AddForce(transform.forward * 2000);
	}*/
}



@script RequireComponent(CharacterController)