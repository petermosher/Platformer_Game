
var moveForce:float = 10.0;
var tilt:float = 1.0;
//Moves the Worm and spawns fireballs
var speed = 100.0;
var rotateSpeed = 3.0;

//Shooting
var bullitPrefab: Transform;

//Dying, Respawing
private var dead = false;

//Getting hit: spinning around
var tumbleSpeed = 1000;
var decreaseTime = 0.3;
var decayTime = 0.6;
static var gotHit = false;
private var backup = [tumbleSpeed, decreaseTime, decayTime];

function Start()
{
	transform.position.z = 2.0;
	transform.position.y =2.0;
}

function Update () {

    var moveY:float = Input.GetAxis("Vertical");
	var moveX:float = Input.GetAxis("Horizontal");
    
    if(Input.GetAxis("Vertical"))
    {
        rigidbody.AddForce(Vector3.up * moveY * moveForce * Time.deltaTime);
    }
    
    if(Input.GetAxis("Horizontal"))
    {
        rigidbody.AddForce(-Vector3.right * moveX * moveForce * Time.deltaTime);
    }
    
    /*
    
	// apply force up or down depending on input, applying "moveForce" units of force per update
	rigidbody.AddForce(Vector3.up * moveY * moveForce * Time.deltaTime);
	// our tilt effect
	transform.eulerAngles.x = rigidbody.velocity.x;
	
	//No idea
	rigidbody.AddForce(-Vector3.right * moveX * moveForce * Time.deltaTime);
	// our tilt effect
	//transform.eulerAngles.y = rigidbody.velocity.y;
	// make sure our x value never changes
	//transform.position.x = originalX;
	
	//transform.position.y = 1.0;
	// make sure our z value never changes
	transform.position.z = 2.0;
	transform.position.y =2.0;

	//Needs to be based on monitor
	//transform.position += Input.mousePosition;

	// if the user just pressed the "Shoot" button down (edit->project settings->input)
	
	/*if(Input.GetButton("Shoot") )
	{
	
	}
	*/
}



@script RequireComponent(CharacterController)