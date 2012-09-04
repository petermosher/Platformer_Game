//if no orbs exist, create one
var Spawn: Transform;
var array: Vector3[];

function Update () {

	array = new Vector3[17];
	//if no orbs exist
	//Spawn an orb at 0,-1,0
	
array[0] = Vector3(0,-1,0);
array[1] = Vector3(13,-1,13);
array[2] = Vector3(13,-1,-13);
array[3] = Vector3(-13,-1,13);
array[4] = Vector3(-13,-1,-13);

array[5] = Vector3(6,-1,6);
array[6] = Vector3(6,-1,-6);
array[7] = Vector3(-6,-1,6);
array[8] = Vector3(-6,-1,-6);

array[9] = Vector3(6,-1,13);
array[10] = Vector3(6,-1,-13);
array[11] = Vector3(-6,-1,13);
array[12] = Vector3(-6,-1,-13);

array[13] = Vector3(13,-1,6);
array[14] = Vector3(13,-1,-6);
array[15] = Vector3(-13,-1,6);
array[16] = Vector3(-13,-1,-6);
	/*
	Instantiate(Spawn, Vector3(13,-1,13), Quaternion.identity);
	Instantiate(Spawn, Vector3(13,-1,-13), Quaternion.identity);
	Instantiate(Spawn, Vector3(-13,-1,13), Quaternion.identity);
	Instantiate(Spawn, Vector3(-13,-1,-13), Quaternion.identity);
	*/
	
	
	//spawn orb if none or time has passed
	//destroy old orbs over time to prevent bugs
	if(!GameObject.FindWithTag("orb"))
	{
		Instantiate(Spawn, array[Random.Range(1,array.length-1)], Quaternion.identity);
		Instantiate(Spawn, array[Random.Range(1,array.length-1)], Quaternion.identity);
		Instantiate(Spawn, array[Random.Range(1,array.length-1)], Quaternion.identity);
		Instantiate(Spawn, array[Random.Range(1,array.length-1)], Quaternion.identity);
		
		/*
		Instantiate(Spawn, Vector3(0,-1,0), Quaternion.identity);
		Instantiate(Spawn, Vector3(13,-1,13), Quaternion.identity);
		Instantiate(Spawn, Vector3(13,-1,-13), Quaternion.identity);
		Instantiate(Spawn, Vector3(-13,-1,13), Quaternion.identity);
		Instantiate(Spawn, Vector3(-13,-1,-13), Quaternion.identity);		
		
		Instantiate(Spawn, Vector3(6,-1,6), Quaternion.identity);
		Instantiate(Spawn, Vector3(6,-1,-6), Quaternion.identity);
		Instantiate(Spawn, Vector3(-6,-1,6), Quaternion.identity);
		Instantiate(Spawn, Vector3(-6,-1,-6), Quaternion.identity);	

		Instantiate(Spawn, Vector3(6,-1,13), Quaternion.identity);
		Instantiate(Spawn, Vector3(6,-1,-13), Quaternion.identity);
		Instantiate(Spawn, Vector3(-6,-1,13), Quaternion.identity);
		Instantiate(Spawn, Vector3(-6,-1,-13), Quaternion.identity);
		
		Instantiate(Spawn, Vector3(13,-1,6), Quaternion.identity);
		Instantiate(Spawn, Vector3(13,-1,-6), Quaternion.identity);
		Instantiate(Spawn, Vector3(-13,-1,6), Quaternion.identity);
		Instantiate(Spawn, Vector3(-13,-1,-6), Quaternion.identity);	
		*/
	}
}