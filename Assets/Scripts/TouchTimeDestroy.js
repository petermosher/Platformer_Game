
private var endTime = 4;
private var timerOn = false;
private var totalTime = 0;
private var SpawnInterval = 4;
var savedTime;

//detect that player has touched this object
//timing mechanism
//destroy this when time runs out

var collisionObject : GameObject;

var pushPower = 2.0;
function OnControllerColliderHit (hit : ControllerColliderHit) {
    var body : Rigidbody = hit.collider.attachedRigidbody;
    // no rigidbody
    if (body == null || body.isKinematic)
        return;
        
    // We dont want to push objects below us
    if (hit.moveDirection.y < -0.3) 
        return;
    
    // Calculate push direction from move direction, 
    // we only push objects to the sides never up and down
    var pushDir : Vector3 = Vector3 (hit.moveDirection.x, 0, hit.moveDirection.z);

    // If you know how fast your character is trying to move,
    // then you can also multiply the push velocity by that.
    
    // Apply the push
    body.velocity = pushDir * pushPower;
    print("hit character");
}

//works properly
function OnTriggerEnter (hit : Collider) {
    if(hit)
    {
        print("Trigger hit, Object side, not player");
    }
        timerOn = true;    
}

function OnCollisionEnter(collision : Collision){
        if (collision == collisionObject){
            gameObject.FindWithTag("Player").SendMessage("ApplyDamage");
        print("Hit!");

        }
    }

//Works properly//
function Update () {

    if(timerOn)
    {
            var WaitTime : int = (Time.time*SpawnInterval);
            var binary = (WaitTime % 2);
            if(binary)
            {
                
                //Debug.Log(WaitTime);
                Spawn(WaitTime);
                //print(totalTime); //debug object
                if(totalTime == endTime)
                {
                    //print("times up"); //debug object
                    Destroy(gameObject);
                }
            }     
    }
}



function Spawn(seconds)
{
	if(seconds != savedTime)
	{
        savedTime = seconds;
        totalTime++;
	}
}