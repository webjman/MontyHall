#pragma strict
var DoorMaterial = Material;
var MidSelect = false;
function Start () {

}

function Update () {

}
function OnMouseOver(){
  if (Input.GetMouseButtonDown(0))
      {
          MidSelect = true;
          GlobalVariables.ClickProcessed =true;
      }
}