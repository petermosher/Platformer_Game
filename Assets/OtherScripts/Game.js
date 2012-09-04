private var noOfEnemies = 0;
var tribeNormalPrefab : GameObject;
var tribeHeavyPrefab : GameObject;
private var startPos : Vector3;

private var spawnTime : float;
private var spawnTimeLeft : int;
private var spawnTimeSeconds = 2;
var i = 0;
var waveFormation = new Array(0,0,0,1,1,0,1,0);
private var playersWood = 200;
private var towerCost = 50;
private var totemCost = 100;
private var objectToPlaceNm : String;
private var hit : RaycastHit;
private var placementPos : Vector3;
var towerObj : GameObject;
var totemObj : GameObject;
var inc = 0;

var towerBtn : GUIStyle;
var totemBtn : GUIStyle;

var defenseWindow : Texture2D;
var scoreWindow : Texture2D;
var wood : Texture2D;
var health : Texture2D;

var baseHealth = 50;
private var playerScore = 0;
private var enemiesLeft : int;

function Awake()
{
	spawnTime = Time.time;
}


function Start ()
{
	startPos = Vector3(-2.6,0,-3.1);
	enemiesLeft = waveFormation.length;
}

function Update () 
{
	//Spawns the current wave
	spawnTimeLeft = Time.time - spawnTime; //timing mechanism is either 1 or 0
	print(spawnTimeLeft);
	if(spawnTimeLeft >= spawnTimeSeconds)
	{
		if (i != waveFormation.length){
			if (waveFormation[i] == 0){
				Instantiate (tribeNormalPrefab, startPos,Quaternion.identity);	
				spawnTime = Time.time;
				spawnTimeLeft = 0;
				i++;
			}else{
				Instantiate (tribeHeavyPrefab, startPos, Quaternion.identity);
				spawnTime = Time.time;
				spawnTimeLeft = 0;
				i++;
			}
		}
	}
	
	var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
  	
	//Mouse listener
	if (Input.GetMouseButtonDown (0))
	{
		if (Physics.Raycast (ray, hit, Mathf.Infinity))
		{
			//checks to make sure location of placement is valid, trees are not tagged locations
			if (hit.collider.tag != "ground" && hit.collider.tag != "enemyAim" && hit.collider.tag != "temple")
			{
				//is true after object has been placed
				if (objectToPlaceNm == "tower")
				{
					//subtracts from total
					playersWood = playersWood - towerCost;
					//raycast location = placement
					placementPos = hit.transform.position;
					//a generic tower object is created
					var arrTwr : GameObject = Instantiate(towerObj,placementPos,Quaternion.identity);
					//name of tower determines type of tower
					arrTwr.name = inc.ToString();
					//destroy existing tree
					Destroy(hit.collider.gameObject);
					//reset placement variable so tower is no longer selected
					objectToPlaceNm = "";
				}
				
				if (objectToPlaceNm == "totem"){
					playersWood = playersWood - totemCost;
					placementPos = hit.transform.position;
					var totem : GameObject = Instantiate (totemObj, placementPos, transform.rotation);	
					totem.transform.Rotate(0,180,0);
					totem.name = inc.ToString();
					Destroy(hit.collider.gameObject);
					objectToPlaceNm = "";
				}
			}
		}
	}
	
	if (enemiesLeft == 0){
		print ("You Won!");
	}
	
	if (baseHealth == 0){
		print ("You Lost!");	
	}
}


function OnGUI()
{
	GUI.Label (Rect (0,-3,103,317), defenseWindow);
	GUI.Label (Rect (105,-3,328,64), scoreWindow);
	GUI.Label (Rect (10, 23, 126, 98), wood);
	GUI.Label (Rect (115, 0, 82, 68), health);
	GUI.Label (Rect (85, 80, 100, 30), playersWood.ToString());
	
	//Base health starts at 50
	GUI.Label (Rect (160, 30, 100, 30), baseHealth.ToString());
	GUI.Label (Rect (265, 33, 100, 30), playerScore.ToString());
	
	
	//basic arrow slinging tower
	if (GUI.Button (Rect (10,135,126,98), "", towerBtn)) 
	{
		if (playersWood >= towerCost)
		{
			//makes it posible to select arrow tower
			objectToPlaceNm = "tower";
		}
	}
	GUI.Label (Rect (85, 190, 100, 30), "x50"); //price label for the arrow Tower
	
	//flame tower
	if (GUI.Button (Rect (10,225,126,98), "", totemBtn)) 
	{
		if (playersWood >= totemCost)
		{
			//makes it posible to select totem
			objectToPlaceNm = "totem"; 
		}
	}
	GUI.Label (Rect (85, 280, 100, 30), "x100"); //price label for flame tower
	

}