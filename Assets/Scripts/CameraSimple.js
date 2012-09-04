
private var x = 0;  //left and right
private var y = 0;  //up and down
private var z = 10;  //into out of the screen
var target : Transform; 
var player : Transform;

private var topview = true;

function Update () { 
//print(player.position.x+" "+player.position.y+" "+player.position.z+" ");
//print(player.position.x+" "+player.position.y+" "+player.position.z+" ");


    if(player.position.y<=-400)
    {
        y = 10;
        z = 0;
        target.position.x = transform.position.x + x;
        target.position.y = transform.position.y + y;
        target.position.z = transform.position.z + z;

        target.eulerAngles.x =90;
        target.eulerAngles.y =180;
        target.eulerAngles.z =0;        
    }
    else
    {
        target.position.x = transform.position.x + x;
        target.position.y = transform.position.y + y;
        target.position.z = transform.position.z + z;

        target.eulerAngles.x =0;
        target.eulerAngles.y =180;
        target.eulerAngles.z =0;
    }

//transform.position.x = target.position.x + x; 
//transform.position.y = target.position.y + y;
//transform.position.z = target.position.z + z;

}