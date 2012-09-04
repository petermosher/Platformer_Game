var heart : Texture2D;
var key : Texture2D;
private var numHearts = 10;
var hasKey = false;

function OnGUI () {

        //Draw Hearts
        for(var i = 1; i<= numHearts; i++)
        {
            GUI.Label (Rect (10+i*heart.width,10, heart.width, heart.width), heart); 
        }
        
        //Draw Key
        if(hasKey)
        {
            GUI.Label (Rect (0,100, 50, 50), key); 
        }
            //if take damage lose one heart
        
        
            //print(heart.width);
        
        //Made these buttons for testing purposes
        if (GUI.Button (Rect (heart.width,heart.width +10, 100, 20), GUIContent ("take Damage"))) 
        {
            numHearts = numHearts - 1;
        }
        if (GUI.Button (Rect (heart.width,heart.width +30, 100, 20), GUIContent ("got the Key"))) 
        {
            hasKey = true;
        }
    }
function Update () {
}

//function OnTriggerEnter (hit : Collider) {
//    if(hit)
 //   {
 //       print("Player Side HIT");
 //   }
    //need a compare tag here
        //timerOn = true;    
//}

function ApplyDamage(damage : int){
    numHearts -= damage;
}

function GotKey()
{
    hasKey = true;
}

//if collide with spikes: make gui object that says OUCH, which a timer is created then goes away