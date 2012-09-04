/*
 * change "firstSpawnPoint" to:
    1- first spawn point
    2- just before the warp
 */

var firstSpawnPoint = 1;

var spawnPointA : Transform;
var spawnPointB : Transform;
var spawnPointC : Transform;
var Level_1_1 : Transform;
var spawnPointE : Transform;
var spawnPointF : Transform;
var Level1_1END : Transform;
var TestPoint : Transform;
var TestBlockLvl : Transform;
var FallingRocks : Transform;

function Update () {
    
}

function Awake()
{
    if(firstSpawnPoint == 1)
    {
        transform.position = spawnPointA.position;
    }
    else if(firstSpawnPoint == 2)
    {
        transform.position = spawnPointB.position;
    }
    else if(firstSpawnPoint == 3)
    {
        transform.position = spawnPointC.position;
    }
    else if(firstSpawnPoint == 4)
    {
        transform.position = Level_1_1.position;
    }
    else if(firstSpawnPoint == 5)
    {
        transform.position = spawnPointE.position;
    }    
    else if(firstSpawnPoint == 6)
    {
        transform.position = spawnPointF.position;
    }        
    else if(firstSpawnPoint == 7)
    {
        transform.position = Level1_1END.position;
    }
    else if(firstSpawnPoint == 8)
    {
        transform.position = TestPoint.position;
    }    
    else if(firstSpawnPoint == 9)
    {
        transform.position = TestBlockLvl.position;
    }
    else if(firstSpawnPoint == 10)
    {
        transform.position = FallingRocks.position;
    }
    else
    {
        transform.position = spawnPointA.position;
        print("not valid");
    }
}