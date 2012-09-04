var targetA : GameObject;
var targetB : GameObject;
var targetC : GameObject;
var targetD : GameObject;

var speed : float = 0.1;

/*
    Question: can this script be applied 4 times instead of 2?
    (PI/n)*2
    2PI(1)/n
*/
function FixedUpdate () {
	var weight = Mathf.Cos(Time.time * speed * 2 * Mathf.PI) * 0.5 + 0.5;
	transform.position = targetA.transform.position * (weight)
						+ targetB.transform.position * (.25-weight)
                        + targetC.transform.position * (.5-weight)
                        + targetD.transform.position * (1-weight);
}
