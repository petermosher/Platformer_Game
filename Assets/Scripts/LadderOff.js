//if player is touching a ladder tagged object, up controls are up, down controls are down
//trigger collision

private var damage : int = 1;
private var playerTag = "Player";
private var swordTag = "sword";

//var targetA : GameObject;
//var targetB : GameObject;

 //Vector3(0, 0, 0);
//private var start = gameObject.transform.position; 
//var monster : Transform;

//THIS DOES NOT MAKE SENSE
var start;//: Position; 
//start = monster.position;


//private var start = monster.position;

var targetA : GameObject;
var targetB : GameObject;

var speed : float = 0.1;
var rotspeed : float = 0.5;
var time : float;
var waviness : float;

function OnTriggerEnter (hit : Collider) {
    if(hit)
    {
        //Destroy(gameObject);

        if(hit.gameObject.tag == playerTag){
                print("not climbing ladder");
            //hit.gameObject.SendMessage("ApplyDamage",damage);
            //print("damage");
            hit.gameObject.SendMessage("Climbing",false);
        }
    }
}

function Update () {
}