
private var x = 0.5;  //left and right
private var y = 0;  //up and down
private var z = 0;  //into out of the screen
var target : Transform; //Object in hand
//I could have a whole list of items here, with booleans of whether or not I own them yet
//items are selected from the menu
//Item action remains the same
var player : Transform;

var pobj ;

private var swordposx = 0;
private var swordposy = 180;
private var swordposz = 30;

private var mode = 2;

private var topview = true;

private var CanClimb = false;

var HasSword = false; //starts without the sword
private var itemVisible = false;

//obtaining the item
function GotSword (tehsword : boolean)
{
    HasSword = tehsword;
    itemVisible = tehsword;
}

//pulling the item out, menu item choice
//click menu, click sword
function SwordVisible (tehsword : boolean)
{
    itemVisible = tehsword;
}

function Climbing(climb : boolean)
{
    CanClimb = climb;
}

function Start()
{
    if(HasSword)
    {
        target.position.x = transform.position.x + x;
        target.position.y = transform.position.y + y;
        target.position.z = transform.position.z + z;
    }
}

function Update () { 
        //target.position.x = transform.position.x + x;
        //target.position.y = transform.position.y + y;
        //target.position.z = transform.position.z + z;
        
//print(player.position.x+" "+player.position.y+" "+player.position.z+" ");
//print(player.position.x+" "+player.position.y+" "+player.position.z+" ");

//print(player)

        //target.position

        //target.position = (player.forward + transform.position); //.position.x + x;
        //print(player.forward.x);
        if(HasSword)
        {
            if(player.forward.x >= 0)
            {
                target.position = (player.forward + transform.position);
                target.position.x = target.position.x - x;
                target.eulerAngles.z = swordposz;
            }
            else
            {
                target.position = (player.forward + transform.position);
                target.position.x = target.position.x + x;      
                //swordpos = -swordpos;
                target.eulerAngles.z = -swordposz;
            }
            //back to normal
            x=0.5;
            
    //                target.position = (player.forward + transform.position); //.position.x + x;

            //print(player.forward);
            
            
            //target.position.x = transform.position.x + x;
            //target.position.y = transform.position.y + y;
            //target.position.z = transform.position.z + z;
            
            //print(pobj.Vector3.x);
            //swordpos = euler
            
            target.eulerAngles.x = swordposx;
            target.eulerAngles.y = swordposy;
            

            //mode 1
            //vertical, should have range or something
            if(Input.GetKey (KeyCode.Alpha1))//Input.GetKey(KeyCode.DownArrow))
            {
                mode = 1;
          
                
            }
            
            //mode 2
            //slanted or horizontal
            if (Input.GetKey (KeyCode.Alpha2))//Input.GetKey (KeyCode.UpArrow))
            {
                mode = 2;

                //x=0.5;
                
            }
            
            if(mode == 1)
            {
                swordposx = 0;
                swordposy = 180;
                swordposz = 30;  
            }
            
            if(mode == 2)
            {
                swordposx = 60;
                swordposy = 180;
                swordposz = 0;
            }
           
        
    //if (Input.GetKeyDown ("LeftShift"))
            if (Input.GetKey (KeyCode.UpArrow) && !CanClimb)//Input.GetKey (KeyCode.LeftShift)) //|| Input.GetKey (KeyCode.UpArrow))
            {//
                //sets attack angle and distance
                if(mode == 1)
                {
                    if(player.forward.x >= 0)
                    {
                        target.eulerAngles.z = 110;
                        
                    }
                    else
                    {
                        target.eulerAngles.z = -110;
                    }
                }
            
                if(mode == 2)
                {
                    x=-0.2;

                    if(player.forward.x >= 0)
                    {
                        target.eulerAngles.z = 90;
                        
                    }
                    else
                    {
                        target.eulerAngles.z = -90;
                    }
                }
            }
        }     
    //movement controls
        if (Input.GetKey (KeyCode.UpArrow) && CanClimb)  
        {
            //move up
            transform.position.y = transform.position.y + 0.5;
        }

        //movement controls
        if (Input.GetKey (KeyCode.DownArrow) && CanClimb)  
        {
            //move down
            //var curSmooth = movement.speedSmoothing * Time.deltaTime;
            transform.position.y = transform.position.y - 0.5;
        }        
        
        //Forward horizontal Slash
        //target.eulerAngles.x = 90;
        //target.eulerAngles.y = 180;
        //target.eulerAngles.z = 0;
        //target.eulerAngles.z = 90;
        
        //Vertical Slash
        //target.eulerAngles.x = 90;
        //target.eulerAngles.y = 180;
        //target.eulerAngles.z = 0;
        
    
//transform.position.x = target.position.x + x; 
//transform.position.y = target.position.y + y;
//transform.position.z = target.position.z + z;

}