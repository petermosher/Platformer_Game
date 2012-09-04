private var damage : int = 1;
private var playerTag = "Player";
private var swordTag = "sword";

//var targetA : GameObject;
//var targetB : GameObject;

 //Vector3(0, 0, 0);
//private var start = gameObject.transform.position; 
var monster : Transform;

//THIS DOES NOT MAKE SENSE
var start;//: Position; 
start = monster.position;


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
        //print("Trigger hit, Object side, not player");
        if(hit.gameObject.tag == playerTag){
            hit.gameObject.SendMessage("ApplyDamage",damage);
            //print("damage");
        }
        if(hit.gameObject.tag == swordTag){
        Destroy(gameObject);
        }
    }
    }

function Rotate(angle, end)
{
    time += Time.deltaTime;
    var num = Mathf.Cos(time * rotspeed * 2 * Mathf.PI) * 0.5 + 0.5;
	monster.eulerAngles.y = (angle * num + end * (1-num));
}

function FixedUpdate () {
	var weight = Mathf.Cos(Time.time * speed * 2 * Mathf.PI) * 0.5 + 0.5;
	monster.position.x = targetA.transform.position.x * weight
						+ targetB.transform.position.x * (1-weight);
                        

    //print(  Mathf.Sin(Time.time * Mathf.PI)   );//);                    
    //monster.position.y += Mathf.Sin(Time.time * speed * Mathf.PI);                        
    monster.position.y = monster.position.y+0.05*Mathf.Sin(Time.time * Mathf.PI);
    //print(weight);
    if(weight > 0.8)
    {
        //start angle known, end angle = -90
        //monster.eulerAngles.y = -90;
        
        //if the angles is not near -90
        

        if(monster.eulerAngles.y < 250 || monster.eulerAngles.y > 290)
        //monster.eulerAngles.y < -100 || monster.eulerAngles.y > -80)
        {
            //print(monster.eulerAngles.y);
            Rotate(monster.eulerAngles.y, -90);     //, -90);
        }
        else
        {time = 0;}
    }
    if(weight < 0.2)
    {
        //start angle known, end angle = 90
        //monster.eulerAngles.y = 90;
        //Rotate(monster.eulerAngles.y, 90);
        if(monster.eulerAngles.y < 100 || monster.eulerAngles.y > 80)
        //monster.eulerAngles.y < -100 || monster.eulerAngles.y > -80)
        {
            //print(monster.eulerAngles.y);
            Rotate(monster.eulerAngles.y, 90);     //, -90);
        }
        else
        {time = 0;}
    }
                  //    monster.eulerAngles.z                    
}

function Update()
{
    //print(monster.forward.x); 
    //print(monster.forward);
    //start = monster.position;
    //print(start);
}
