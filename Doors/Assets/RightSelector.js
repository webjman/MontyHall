#pragma strict
var DoorMaterial = Material;
var RightSelect = false;
function Start () {

}

function Update () {
	
}
function OnMouseOver(){
  if (Input.GetMouseButtonDown(0))
      {
         RightSelect = true;
         GlobalVariables.ClickProcessed = true;
      }
}