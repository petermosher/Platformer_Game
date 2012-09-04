//Two bugs: disabled camera having an effect on an enabled one when I change the height variable to zero
//Other bug: Shape deformation when it has a rotation (between 30 and 60 degrees) and is attached to another object, it deforms

//If collide with A
var targetA : GameObject;

//Warp to B
var targetB : GameObject;

var control : GameObject[]; 
control = new GameObject[2];

var player : GameObject;
player = gameObject.Find("Player1");

var sideMove : SideMove;
var topMove : TopMove;
var sideCam : SideCamera;
var topCam : TopCamera;
//var topView : TopView;



//control[0] = player.GetComponent("SideMove");
//control[1] = player.GetComponent("TopMove");


function OnTriggerEnter (other : Collider) {
    //Debug.Log(other.tag == "warp");
	//if other has tag 
    if(other.tag == "jump")
    {
        //attach waypoint script to Bear
        //gameObject.Find("TimedJumpPlatform").state = 0;
    }
    
    
    if(other.tag == "warp")
    {
        transform.position = targetB.transform.position;
        
        //player.GetComponent("SideMove").enabled = false;
        //player.GetComponent("TopMove").enabled = true;
        

        //sideMove.enabled = false;
        //topCam.setHeight(10);
        //topCam.setDist(0);
        sideCam.enabled = false;
        topCam.enabled = false;
        
        gameObject.Find("1Main Camera").transform.position = new Vector3(-500, -450, 0);
        
        
        //gameObject.Find("1Main Camera").transform.Translate(-500,-400,0);
        gameObject.Find("1Main Camera").transform.eulerAngles = new Vector3(90, 90, 0);
        
        theObject = GameObject.Find("TopView");
        
        
        //theObject.active = true;
        
        
        sideMove.enabled = false;
        
        
        topCam.enabled = true;
        topMove.enabled = true;
        
        //control[0].enabled = false;
        //control[1].enabled = true;
        
        //gameObject.Find("SideMove");
    }
    
	if(other == targetA)
	{
		transform.position = targetA.transform.position;
	}
    if(other == targetB)
    {
        transform.position = targetB.transform.position;
    }
}


//Hit 'space' to switch cameras 

//creates array of camera objects


//initial camera
var i : int = 0;




/*
function Update () {
	//print( cameras.length);
	
	SelectCamera(i);
	if(Input.GetKeyDown ("space"))
	{
		i = (i+1)%cameras.length;
	}
}

function SelectCamera (index : int) {
    for (var i : int=0 ;i<cameras.length; i++) {
		// Activate the selected camera
        if (i == index)
		{
            cameras[i].camera.active = true;
			// Deactivate all other cameras
        }else
		{
			cameras[i].camera.active = false;
		}
	}
}*/