
function Update () {
	//attempt at creating triggers for the animations

	if (Input.GetAxis("Horizontal") > 0.2)
	{
		animation.CrossFade ("walk");
	}       
	//else if()
   else
   {
      animation.CrossFade ("idle");
   }
 

}