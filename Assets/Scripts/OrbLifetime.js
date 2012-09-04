var lifeTime = 5.0;

function Awake() {
    startTime = Time.time;
	Destroy (gameObject, lifeTime);
}