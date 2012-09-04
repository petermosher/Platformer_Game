var speed = 20.0;
private var rotateSpeed = 3.0;
// SHIP
// how much force we apply per frame to move up and down
var moveForce:float = 10.0;
// the extent of the tilt effect
var tilt:float = 1.0;
// reference to the prefab blueprint for shots 
var prefabShot:Transform;
var prefabShotUp:Transform;
var prefabShotDown:Transform;
// reference to the prefab blueprint for an explosion 
var prefabExplosion:Transform;

var sfxHit:AudioClip;

var myhealth:int = 5;

// our starting x position
private var originalX:float = 0.0;

function Awake()
{
	// set our starting x position
	originalX = transform.position.x;	
}

// this update function should be used for input and moving things -without- physics
function Update()
{

	
	
		// get the "Vertical" axis input (up/down arrow keys, or a joystick)
	// value should range from (-1.0, 1.0)
	//var moveY:float = Input.GetAxis("Vertical");
	//var moveX:float = Input.GetAxis("Horizontal");
    
    	var controller : CharacterController = GetComponent(CharacterController);
	
	//Rotate around y - axis
	//transform.Rotate(0, Input.GetAxis ("Horizontal") * rotateSpeed, 0);
	
	//Move forward / backward
	//var forward = transform.TransformDirection(Vector3.forward);
    //var up = transform.TransformDirection(Vector3.up);
	//var curSpeed = speed * Input.GetAxis ("Horizontal") * Input.GetAxis("Vertical");
    
    //transform.Translate(0, 0, 0);
    
 transform.Rotate(0, Input.GetAxis ("Horizontal") * rotateSpeed, 0);
    
    // Move forward / backward
    var forward : Vector3 = transform.TransformDirection(Vector3.forward);
    var curSpeed : float = speed * Input.GetAxis ("Vertical");
    controller.SimpleMove(forward * curSpeed);
    ////
    
	/*
	// apply force up or down depending on input, applying "moveForce" units of force per update
	rigidbody.AddForce(Vector3.up * moveY * moveForce * Time.deltaTime);
	// our tilt effect
	transform.eulerAngles.x = rigidbody.velocity.x * tilt;
	
	//No idea
	rigidbody.AddForce(Vector3.right * moveX * moveForce * Time.deltaTime);
	// our tilt effect
	transform.eulerAngles.z = rigidbody.velocity.y * tilt;
	// make sure our x value never changes
	//transform.position.x = originalX;
	
	//transform.position.y = 1.0;
	// make sure our z value never changes
	transform.position.z = 0.0;

	//Needs to be based on monitor
	//transform.position += Input.mousePosition;
*/

	

}