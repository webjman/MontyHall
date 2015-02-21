#pragma strict
var Mid = gameObject;
var Left = gameObject;
var Right = gameObject;
var MidLast = false;
var LeftLast = false;
var RightLast = false;
function Start () {

}

function Update (){

	if (GlobalVariables.ClickProcessed == true){
	if (Mid.renderer.material.color != Color.blue){
		Mid.renderer.material.color = Color.white;
	}
	if (Right.renderer.material.color != Color.blue){
		Right.renderer.material.color = Color.white;
	}
	if (Left.renderer.material.color != Color.blue){
		Left.renderer.material.color = Color.white;
	}
	var MidSelector: MidSelector = Mid.GetComponent(MidSelector);
	var LeftSelector: LeftSelector = Left.GetComponent(LeftSelector);  
	var RightSelector: RightSelector = Right.GetComponent(RightSelector); 
	
     if (MidSelector.MidSelect == true){
     	Mid.renderer.material.color = Color.green;
     	MidLast = true;
     } 
     

     if (RightSelector.RightSelect == true){
     	Right.renderer.material.color = Color.green;
     	RightLast = true;
     } 
	
     if (LeftSelector.LeftSelect == true){
     	Left.renderer.material.color = Color.green;	
     	LeftLast = true;
     } 
     	
    if (RightLast){
 		RightLast = false;
 	}
 	if (LeftLast){
 		LeftLast = false;	
 	}
 	if (MidLast){
 		MidLast = false;
	}
	MidSelector.MidSelect = LeftSelector.LeftSelect = RightSelector.RightSelect = false;
	GlobalVariables.ClickProcessed = false;
	}
}

