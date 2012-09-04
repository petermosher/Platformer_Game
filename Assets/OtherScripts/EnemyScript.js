private var state = 0;
var waypoints : Transform[];
private var activeWaypoint : Transform;
var currentWaypoint = 0;

private var myPos : Transform;
private var currentSpeed = 50;
private var accel = 3;
private var rotationDamping = 6.0;

var wp1Obj : GameObject;
var wp2Obj : GameObject;
var wp3Obj : GameObject;
var wp4Obj : GameObject;
var wp5Obj : GameObject;
var wp6Obj : GameObject;
var wp7Obj : GameObject;
var wp8Obj : GameObject;
var wp9Obj : GameObject;

var dead = false;
var gameObj : GameObject;
var deathParticle : GameObject;

function Start ()
{
		//Debug.Log(currentWaypoint);
	
	state = 0; //starting state
	myPos = transform;
	wp1Obj = gameObject.Find("waypoint_01");
	wp2Obj = gameObject.Find("waypoint_02");
	wp3Obj = gameObject.Find("waypoint_03");
	wp4Obj = gameObject.Find("waypoint_04");
	wp5Obj = gameObject.Find("waypoint_05");
	wp6Obj = gameObject.Find("waypoint_06");
	wp7Obj = gameObject.Find("waypoint_07");
	wp8Obj = gameObject.Find("waypoint_08");
	wp9Obj = gameObject.Find("waypoint_09");
	
	waypoints[0] = wp1Obj.transform;
	waypoints[1] = wp2Obj.transform;
	waypoints[2] = wp3Obj.transform;
	waypoints[3] = wp4Obj.transform;
	waypoints[4] = wp5Obj.transform;
	waypoints[5] = wp6Obj.transform;
	waypoints[6] = wp7Obj.transform;
	waypoints[7] = wp8Obj.transform;
	waypoints[8] = wp9Obj.transform;
	//gameObj = gameObject.Find("game");
}

function Update () {	 
	 	
	if (state == 0)
	{
		if (currentWaypoint != 9){
			walk();
			activeWaypoint = waypoints[currentWaypoint];
		}
		/*
		else{
			var script1 =gameObj.transform.gameObject.GetComponent("Game");
	 		if (script1.baseHealth != 0)
			{
	 			script1.baseHealth -= 10;
				script1.enemiesLeft -= 1;
	 		}
	 		enemySacrafice();
	 		Destroy(this.gameObject);	
		}*/
	}
	
	var script = GetComponent("HealthBarScript");

/*
	if (dead != true)
	{
		if (script.currHealth <=0)
		{
			var script2 = gameObj.transform.gameObject.GetComponent("Game");
	 		script2.playersWood += 10;
	 		script2.playerScore += 1000;
	 		script2.enemiesLeft -= 1;
			playDeath();
			dead = true;
		}
	}
	*/

	Debug.DrawLine (myPos.position, activeWaypoint.position,Color.red);
}	

function walk()
{
		
	var rotation = Quaternion.LookRotation(waypoints[currentWaypoint].position - transform.position);
	transform.rotation =Quaternion.Slerp(transform.rotation,rotation, Time.deltaTime * rotationDamping);   	
	var waypointDirection : Vector3 =waypoints[currentWaypoint].position - transform.position;   	
	var speedFactor = Vector3.Dot(waypointDirection.normalized, transform.forward);	
	var speed = accel * speedFactor;	
	transform.Translate (0,0,Time.deltaTime * speed);
}

function playDeath()
{
	state=1;
	var animation2 = GetComponentInChildren(typeof(Animation)) 		as Animation;
	animation2.animation.Play("death");
	yield WaitForSeconds (1);
	Destroy(this.gameObject);
	/*
	var script = GetComponent("HealthBarScript");
	Destroy(script.healthBarObj);
	*/
		//Destroy(script);
}

function OnTriggerEnter ( col : Collider)
{
			Debug.Log(currentWaypoint);
	if (col.tag == "waypoint"){
   		currentWaypoint=(currentWaypoint+1)%9;

	}
}

function enemySacrafice()
{
	var deathSmoke = Instantiate (deathParticle, 						deathParticle.transform.position, 										deathParticle.transform.rotation);
	Destroy(this.gameObject);
}