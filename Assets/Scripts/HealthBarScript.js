var healthBarPrefab : GameObject;
var healthBarObj : GameObject;
var currHealth : float;
var maxHealth : float;
var healthBarWidth : int;

private var spawnTime : float;
private var spawnTimeLeft : float;
private var spawnTimeSeconds = 0.5;
var canMove : boolean = true;


//private var coolDownTime : float;
//private var coolDownTimeLeft : float;
//private var coolDownTimeSeconds = 5;

var coolDownTime : int = 5;

//my speed from another script
var SavedSpeed;
var MySpeed;

var SavedTime;

//name doesn't matter I have to attach the object in the editor
var mytimer : Transform;

function Start(){
	healthBarObj = Instantiate(healthBarPrefab, transform.position,transform.rotation);
}

function ReduceHealth(){

}

function Update () {


	
	


	healthBarObj.transform.position = Camera.main.WorldToViewportPoint(transform.position);
	
	//modify location with respect to character
	healthBarObj.transform.position.x -=0.017;
	healthBarObj.transform.position.y +=0.01;
	
	
	var healthPercent : float = currHealth/maxHealth;
	if(healthPercent <0)
	{
		healthPercent=0;
	}
	healthBarWidth = healthPercent *20;
	healthBarObj.guiTexture.pixelInset = 
    Rect(10,10,healthBarWidth,5);
}