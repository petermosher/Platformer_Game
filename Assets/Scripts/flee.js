/*
	This script causes this object to flee from the "target Transform"
*/

var target : Transform;
var distance = 10.0;
var speed : double = 500.0;
var rotationspeed : double = 200.0;
var damp : float = 1.0;
//var rorl : int = 1;
var savedTime;

function Update () 
{
	if(GameObject.FindWithTag("Player"))
	{
		//var object	= GameObject.FindWithTag("orb");
		var object = GameObject.FindWithTag("Player");
		target = object.transform;

		//var myTime = Time.deltaTime;

		var controller : CharacterController = GetComponent(CharacterController);
		var rotate = Quaternion.LookRotation(-target.position + transform.position); //difference between rotations

		
		var dist = Vector3.Distance(target.position, transform.position);
		//print ("Distance to target: " + dist);
					var forward = transform.TransformDirection(Vector3.forward);
			var curSpeed = speed;

			
			//var modf = Time%2;
			var seconds : int = Time.time;
			var oddeven = (seconds % 10);
			var right = transform.TransformDirection(Vector3.right);
			
			//rotation speed
			var amount = right * rotationspeed* Time.deltaTime;
		if(dist <= distance)
		{//flee
			

			//Slerp = arc
			//transform.rotation = my rotation
			//rotate = angle between target and me
			transform.rotation = Quaternion.Slerp(transform.rotation, rotate, Time.deltaTime * damp); //3 variables: turn, 
			//transform.rotation = -transform.rotation;
			 //Quaternion.Inverse(target.rotation);
			controller.SimpleMove(forward * curSpeed* Time.deltaTime);
		
		/*
			if(oddeven <= 4)
			{
				MoveRight(amount, seconds, controller);
			}
			else
			{
				MoveLeft(amount, seconds, controller);
			}
			*/

		
			//if stuck move right
		}
		else
		{
					transform.rotation = Quaternion.Slerp(transform.rotation, rotate, Time.deltaTime * damp); //3 variables: turn, 

			controller.SimpleMove(-forward * curSpeed* Time.deltaTime);
		}
	}
}

function MoveRight(amount, seconds, controller)
{
	if(seconds != savedTime)
	{
		controller.SimpleMove(amount);
		savedTime = seconds;
	}
}

function MoveLeft(amount, seconds, controller)
{
	if(seconds != savedTime)
	{
		controller.SimpleMove(-amount);
		savedTime = seconds;
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