var scene, camera, renderer;
var controls;

init();
setup();
lights();
draw();
animate();

function init(){
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.z = 25;
  camera.position.x = 10;
  camera.position.y = 5;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  controls = new THREE.OrbitControls( camera, renderer.domElement );
}

function setup(){
  window.addEventListener( 'resize', function(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
  }, false );
}

function lights(){
  var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
  directionalLight.position.set( 50, 15, 25 );
  directionalLight.castShadow = true;
	directionalLight.shadowCameraFar = 1000;
	directionalLight.shadowDarkness = 0.5;
	directionalLight.shadowMapWidth = 2048;
	directionalLight.shadowMapHeight = 2048;
  scene.add( directionalLight );
}

function draw(){
  var geometry = new THREE.BoxGeometry( 5, 5, 5 );
  var material = new THREE.MeshLambertMaterial( { color: 0xefaefa } );
  var cube = new THREE.Mesh( geometry, material );

  cube.castShadow = true;
  cube.receiveShadow = false;

  scene.add( cube );
}

function animate() {
	requestAnimationFrame( animate );
  renderer.render( scene, camera );
  controls.update();
}
