#pragma strict
var DoorMaterial = Material;
var LeftSelect = false;
function Start () {

}

function Update () {

}
function OnMouseOver(){
  if (Input.GetMouseButtonDown(0))
      {
          LeftSelect = true;
          GlobalVariables.ClickProcessed = true;
      }
}