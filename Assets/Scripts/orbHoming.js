//HM stands for Hybrid move
//this will hopefully combine the movement styles I want

//Rule 1) avoid the wall
//Rule 2) avoid the player
//	average direction if between 2 and three
//Rule 3) home towards closest orb

var target : Transform;
var orb: Transform;
var wall: Transform;
var npc: Transform;

var distance = 3.0;
var speed : double = 500.0;
var rotationspeed : double = 200.0;
var damp : float = 20.0;
//var rorl : int = 1;
var savedTime;


function Update () 
{
	var controller : CharacterController = GetComponent(CharacterController);
	if(GameObject.FindWithTag("Player"))
	{
		//var object	= GameObject.FindWithTag("orb");
		var object = GameObject.FindWithTag("Player");
		target = object.transform;
		
		var object2 = GameObject.FindWithTag("orb");//FindClosestOrb ();
		orb = object2.transform;		
		
		var object4 = FindClosestWall ();
		wall = object4.transform;				
		
		var object5 =FindClosestNPC();
		npc = object5.transform;
		
		//emergency rotate
		var rotate = Quaternion.LookRotation(-target.position + transform.position); //difference between rotations
		
		//cautious rotate (average of two)
		
		//var catrotate = Quaternion.LookRotation(-target.position -wall.position -npc.position + transform.position + orb.position);
		
		//avoid the orbs: lol
		//var catrotate = Quaternion.LookRotation(-orb.position+ transform.position);

		//home in on player
		//var catrotate = Quaternion.LookRotation(target.position- transform.position);
		
		var catrotate = Quaternion.LookRotation(-target.position+ transform.position);		

//var myTime = Time.deltaTime;

		
		
		
		
		var dist = Vector3.Distance(target.position, transform.position);
		//print ("Distance to target: " + dist);
					var forward = transform.TransformDirection(Vector3.forward);
			var curSpeed = speed;

		if(dist <= distance)
		{//flee
			

			//Slerp = arc
			//transform.rotation = my rotation
			//rotate = angle between target and me
			transform.rotation = Quaternion.Slerp(transform.rotation, catrotate, Time.deltaTime * damp); //3 variables: turn, 
			controller.SimpleMove(forward * curSpeed* Time.deltaTime);

		}
		else //home towards orb
		{
				//var object	= GameObject.FindWithTag("orb");
		var object3 = FindClosestOrb();
		target2 = object3.transform;
	
		//var controller : CharacterController = GetComponent(CharacterController);
		var rotate2 = Quaternion.LookRotation(target2.position - transform.position); //difference between rotations
		
		transform.rotation = Quaternion.Slerp(transform.rotation, rotate2, Time.deltaTime * damp); //3 variables: turn, 
		var forward2 = transform.TransformDirection(Vector3.forward);
		var curSpeed2 = speed;
		controller.SimpleMove(forward2 * curSpeed2* Time.deltaTime);
		}
		/*
		else
		{
					transform.rotation = Quaternion.Slerp(transform.rotation, rotate, Time.deltaTime * damp); //3 variables: turn, 

			controller.SimpleMove(-forward * curSpeed* Time.deltaTime);
		}
		*/
	}
}

function FindClosestOrb () : GameObject {
    // Find all game objects with tag Enemy
    var gos : GameObject[];
    gos = GameObject.FindGameObjectsWithTag("orb"); 
    var closest : GameObject; 
    var distance = Mathf.Infinity; 
    var position = transform.position; 
    // Iterate through them and find the closest one
    for (var go : GameObject in gos)  { 
        var diff = (go.transform.position - transform.position);
        var curDistance = diff.sqrMagnitude; 
        if (curDistance < distance) { 
            closest = go; 
            distance = curDistance; 
        } 
    } 
    return closest;    
}

function FindClosestWall () : GameObject {
    // Find all game objects with tag Enemy
    var gos : GameObject[];
    gos = GameObject.FindGameObjectsWithTag("wall"); 
    var closest : GameObject; 
    var distance = Mathf.Infinity; 
    var position = transform.position; 
    // Iterate through them and find the closest one
    for (var go : GameObject in gos)  { 
        var diff = (go.transform.position - transform.position);
        var curDistance = diff.sqrMagnitude; 
        if (curDistance < distance) { 
            closest = go; 
            distance = curDistance; 
        } 
    } 
    return closest;    
}

function FindClosestNPC () : GameObject {
    // Find all game objects with tag Enemy
    var gos : GameObject[];
    gos = GameObject.FindGameObjectsWithTag("npc"); 
    var closest : GameObject; 
    var distance = Mathf.Infinity; 
    var position = transform.position; 
    // Iterate through them and find the closest one
    for (var go : GameObject in gos)  { 
        var diff = (go.transform.position - transform.position);
        var curDistance = diff.sqrMagnitude; 
        if (curDistance < distance) { 
            closest = go; 
            distance = curDistance; 
        } 
    } 
    return closest;    
}
