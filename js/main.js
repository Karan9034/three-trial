let scene, camera, renderer, cube, model
import * as THREE from './three.js'
import STLLoader from './STLloader.js'

const loader = new STLLoader()

const init = () => {
	scene = new THREE.Scene()
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );


	// const geometry = new THREE.BoxGeometry();
	const material = new THREE.MeshNormalMaterial();
	// cube = new THREE.Mesh( geometry, material );
	// scene.add(cube);

	loader.load('models/trial.STL', (stl) => {
		model = new THREE.Mesh(stl, material)
		scene.add(model)

		animate();
	}, undefined, (error) => console.log(error))

	camera.position.z = 500;
	camera.position.x = 50
	camera.position.y = 40
}

const animate = () => {
	requestAnimationFrame(animate);
	model.rotation.x += 0.01
	model.rotation.y += 0.01
	model.rotation.z += 0.01
	renderer.render(scene, camera);
}

const resized = () => {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize(window.innerWidth, window.innerHeight)
}


window.addEventListener('resize', resized, false)

init();
