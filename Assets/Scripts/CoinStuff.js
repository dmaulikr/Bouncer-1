#pragma strict

public var points : int = 5;

function OnTriggerEnter2D(other : Collider2D)
{
	Debug.Log("Triggered worth : " + points);

	Destroy(gameObject);
	// gameObject refers to the object to which the script is attached to 
}