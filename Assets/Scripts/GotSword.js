
function Update () {
}

private var playerTag = "Player";

function OnTriggerEnter (hit : Collider) {
    if(hit)
    {
        //Destroy(gameObject);

        if(hit.gameObject.tag == playerTag){
            print("You got the Sword of your Dreams");
            hit.gameObject.SendMessage("GotSword",true);
            //hit.gameObject.SendMessage("ApplyDamage",damage);
            //print("damage");
        }
    }
}