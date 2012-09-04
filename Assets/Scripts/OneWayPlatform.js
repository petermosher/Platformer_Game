
//var player: Transform;
private var platformHeight: float = 2;
private var state = 0;
//state 0 = above platform
//state 1 = below platform

function Update () {
//player.translate
    //var up = transform.TransformDirection (Vector3.up);
    //if (Physics.Raycast (transform.position, up, 1)) {
    //    print ("There is something in above of the object!");
    //}
    //else
    //{
    //    print (" ");
    //}
}

//if player collides with this move player above it
// transform.Translate

function OnControllerColliderHit(hit: ControllerColliderHit) 
{
    var up2 = transform.TransformDirection (Vector3.up);
    //transform.position+Vector3(0,1,0)
    if (Physics.Raycast (Vector3(transform.position.x,transform.position.y+1,transform.position.z), up2, 1) && hit.gameObject.tag == "platform") {
        print ("There is something in above of the object!");
        transform.Translate(0, platformHeight, 0);
    }
    else
    {
        print("nothing above");
    }
    
    //if (Physics.Raycast (transform.position, up2, 10)) {
    //    print ("There is something in front of the object!");
    //}

	//if(hit.gameObject.tag == "platform" && Physics.Raycast (transform.position, transform.TransformDirection (Vector3.up), 1))
	//{
        //warp to top of platform
    //    transform.Translate(0, platformHeight, 0);
    //}
}