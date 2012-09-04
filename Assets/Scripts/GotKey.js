//var damage : int = 1;
private var playerTag = "Player";

//function OnCollisionEnter (hit : Collision) {
//if(hit.gameObject.tag == playerTag){
//hit.gameObject.SendMessage("ApplyDamage",damage);
//print("damage");
//}

//if(hit)
//{
//print("hit");
//}
//}

//this one works
function OnTriggerEnter (hit : Collider) {
    if(hit)
    {
        //Testing only
        //print("Got Teh Key");
        if(hit.gameObject.tag == playerTag){
            hit.gameObject.SendMessage("GotKey");
            //print("damage");
            Destroy(gameObject);
        }
    }
    }

function Update () {
}