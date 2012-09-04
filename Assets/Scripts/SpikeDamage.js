private var damage : int = 1;
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
        print("Trigger hit, Object side, not player");
        if(hit.gameObject.tag == playerTag){
            hit.gameObject.SendMessage("ApplyDamage",damage);
            //print("damage");
        }
    }
    }

function Update () {
}