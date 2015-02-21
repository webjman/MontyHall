#pragma strict

function Start () {

}

function Update () {

}
function OnMouseEnter()
{
	renderer.material.color = Color.blue;        	
}
function OnMouseExit(){
	if (renderer.material.color == Color.blue){
	renderer.material.color = Color.white;
	Debug.Log ("umm");
	}
}