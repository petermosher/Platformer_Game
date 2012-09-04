var target : Transform;
private var distance = 2.0;
var speed : float = 10.0;
var damp : float = 10.0;

function Update () 
{

    //transform.LookAt (target); //no lag following target
	
	if(target) //if target exists, gives lag to tracking target
	{
	
		var dist = Vector3.Distance(target.position, transform.position);
		if(dist <= distance)
		{//flee
			var controller : CharacterController = GetComponent(CharacterController);
			var rotate = Quaternion.LookRotation(target.position - transform.position); //difference between rotations
			
			transform.rotation = Quaternion.Slerp(transform.rotation, rotate, Time.deltaTime * damp); //3 variables: turn, 
			var forward = transform.TransformDirection(Vector3.forward);
			var curSpeed = speed;
			controller.SimpleMove(forward * curSpeed* Time.deltaTime);
			
			//var speedFactor = Vector3.Dot(waypointDirection.normalized, transform.forward);	
			//var speed = accel * speedFactor;	
			//var stuff = 
			//transform.Translate (0,0, forward* speed *Time.deltaTime);
			
			/*
			// Move the object forward along its z axis 1 unit/second.
    transform.Translate(Vector3.forward * Time.deltaTime);

    // Move the object upward in world space 1 unit/second.
    transform.Translate(Vector3.up * Time.deltaTime, Space.World);*/
			
			//transform.Translate (0,0,forward * curSpeed* Time.deltaTime);
			
		}
	}
}

//function LateUpdate () {
    //currentRotationAngle = transform.eulerAngles.y;

    //currentRotation = Quaternion.Euler (0, currentRotationAngle, 0);
	
	//distance between Here and There
	//Here is defined by my_x and my_y
	//There is defined by target_x and target_y
	
	//if (target) {
    //var dist = Vector3.Distance(target.position, transform.position);
    //print ("Distance to target: " + dist);
	//}
	

	//transform.position.x += speed * Time.deltaTime;
	//transform.position.y += speed * Time.deltaTime;
	//transform.position = target.position;
	//transform.position -= currentRotation * Vector3.forward * distance;
    
    //transform.LookAt (target); //no lag following target
    //}