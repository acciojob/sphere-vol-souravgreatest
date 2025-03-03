function volume_sphere() {
    //Write your code here
  let rad=document.getElementById('radius').value;
	if(radius<0 || isNaN(rad)){
		document.getElementById('volume').value='NaN';
		return;
	}
	let vol=(4/3)*(Math.PI)*(rad**3);
	document.getElementById('volume').value=
		vol.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
