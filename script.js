function volume_sphere(e) {
	e.preventDefault();
    var radius = document.getElementById("radius").value;
	console.log(radius)
    if (isNaN(radius) || radius < 0) {
	    document.getElementById("volume").value = 'NaN';
        return;
    }
    var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById("volume").value = volume.toFixed(4);
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
