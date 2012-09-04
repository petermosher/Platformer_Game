//THIS script requires a Rigidbody

private var size = 4;

var state = 1;
var waypoints : Transform[];
waypoints = new Transform[size];

private var activeWaypoint : Transform;
var currentWaypoint = 0;
var waypointDist = 0;

private var myPos : Transform;
var speedFactor = 1;
private var accel = 10;
private var rotationDamping = 0;

var minWay = 1;
//var maxWaypoint = 3;

var wp1Obj : GameObject;
var wp2Obj : GameObject;
var wp3Obj : GameObject;
var wp4Obj : GameObject;

var dead = false;
//var waypoints = Transform[4];
//var gameObj : GameObject;
//var deathParticle : GameObject;

function Start ()
{
    
	
    
	//state = 0; //starting state
	myPos = transform;
    
    var way = "1way";
    
    
    /* Can do this with a StringBuilder */
	wp1Obj = gameObject.Find(way+minWay);
	wp2Obj = gameObject.Find(way+(minWay+1));
	wp3Obj = gameObject.Find(way+(minWay+2));
    wp4Obj = gameObject.Find(way+(minWay+3));
    //always the same
	//wp4Obj = gameObject.Find("waypoint_4");
	
    
	waypoints[0] = wp1Obj.transform;
	waypoints[1] = wp2Obj.transform;
	waypoints[2] = wp3Obj.transform;
	waypoints[3] = wp4Obj.transform;
    //*/
    //*/
	//gameObj = gameObject.Find("game");
}

function Update () {	
    //Debug.Log(currentWaypoint);
	
    
	if (state == 1)
	{
        if (waypointDist == 4)
        {
            // Calls the function ApplyDamage with a value of 5
            //BroadcastMessage  vs SendMessage
            //BroadcastMessage  ("ApplyDamage", 5.0, SendMessageOptions.DontRequireReceiver);
            
            //gameObject.Find("GameCube").GetComponent("FailCount").ApplyDamage(1);

            // Every script attached to the game object 
            // that has a ApplyDamage function will be called.

            
            //Destroy(gameObject);
        }
		if (currentWaypoint != 4){
			walk();
			activeWaypoint = waypoints[currentWaypoint];
		}
	}
    
	
	//var script = GetComponent("HealthBarScript");



	//Debug.DrawLine (myPos.position, activeWaypoint.position,Color.red);
}	

function walk()
{
		
	//var rotation = Quaternion.LookRotation(waypoints[currentWaypoint].position - transform.position);
    
    //transform.rotation = 
    
    //Perfect Aiming
    transform.LookAt (waypoints[currentWaypoint]);
    
    //Intentionally Slowed Aiming
	//transform.rotation =Quaternion.Slerp(transform.rotation,rotation, Time.deltaTime* rotationDamping);  
 	
	var waypointDirection : Vector3 = waypoints[currentWaypoint].position - transform.position;   	
                //var speedFactor = Vector3.Dot(waypointDirection.normalized, transform.forward);	
	var speed = speedFactor;	
	transform.Translate (0,0,Time.deltaTime * speed);
    
}

/*
function playDeath()
{
	state=1;
	var animation2 = GetComponentInChildren(typeof(Animation)) 		as Animation;
	animation2.animation.Play("death");
	yield WaitForSeconds (1);
	Destroy(this.gameObject);
	
	var script = GetComponent("HealthBarScript");
	Destroy(script.healthBarObj);
	
		//Destroy(script);
}
*/

function OnTriggerEnter (col : Collider)
{
			//Debug.Log(currentWaypoint);
    if(col.tag == "jump")
    {
        state = 0;
    }
            
	if (col.tag == "waypoint"){
   		currentWaypoint=(currentWaypoint+1)%4;
        waypointDist++;

	}
}

/*
function enemySacrafice()
{
	var deathSmoke = Instantiate (deathParticle, 						deathParticle.transform.position, 										deathParticle.transform.rotation);
	Destroy(this.gameObject);
}
*/