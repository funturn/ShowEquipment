	let container, stats, controls;

			let camera, scene, renderer, light;

			let posArr = [];

			let det = 1;
			let pp;
			let model;

			let Bplace = [],
			titlePlane, isLook;
			let type = window.location.hash.split("=")[1];
			document.querySelector('body').style.backgroundImage = 'url(img/bg/'+type+'.png)';
			// document.querySelector('body').style.backgroundSize = 'cover';
			// document.querySelector('body').style.backgroundColor = '#ffffff';
			init()

			animate()

			function init() {


				renderer = new THREE.WebGLRenderer({
					antialias: true,
					alpha:true,
					canvas:document.querySelector("#cc")
				});
				renderer.setPixelRatio(window.devicePixelRatio);
				renderer.setSize(window.innerWidth, window.innerHeight);
				renderer.shadowMap.enabled = true; //渲染器接收阴影渲染

				//	renderer.sortObjects = false
				window.addEventListener('resize', onWindowResize, false); //窗口大小变化后，针对当前窗口大小比例渲染
				
			

				camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 20000);
				camera.position.set(958, 821, 2874); //相机位置

				controls = new THREE.OrbitControls(camera); //添加控制器
				controls.target.set(0, 0, 0);
				controls.minDistance = 1500;
				scene = new THREE.Scene(); //创建场景
				//				scene.add(new THREE.AxesHelper(200))
				light = new THREE.HemisphereLight(0xffffff, 0x444444); //半球光源，颜色从天空颜色渐变为地面颜色。
				light.position.set(0, 200, 0);
				scene.add(light); //				这光不能用于投射阴影。

				renderer.gammaInput = true;
				renderer.gammaOutput = true
				renderer.toneMappingExposure = 1.5
				renderer.toneMapping = THREE.LinearToneMapping;
				
				

				light = new THREE.DirectionalLight(0xffffff, 2.5); //平行光,类似于太阳光
				light.position.set(0, 200, 100);
				light.castShadow = true; //投射动态阴影,默认false,比较耗性能

				light.shadow.camera.top = 180; //从光线的角度来看其他物体背后的物体将处于阴影之中（计算内部阴影）,平行光是平行的所以 相机为OrthographicCamera相机
				light.shadow.camera.bottom = -100;
				light.shadow.camera.left = -120;
				light.shadow.camera.right = 120;
				light.shadow.mapSize.width = 4096; // default
				light.shadow.mapSize.height = 4096; // default
				scene.add(light);


				

				
				

				loadModel()

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight; //相机视锥体的长宽比
				camera.updateProjectionMatrix(); //更新相机投影矩阵

				renderer.setSize(window.innerWidth, window.innerHeight); //渲染器大小

			}

			//

			function animate() {

				requestAnimationFrame(animate);

				renderer.render(scene, camera);

				light.position.copy(camera.position)
				TWEEN.update();
				controls.update();
			}

			
		
			
			

			function rayBreathing() {
				document.addEventListener('click', ray);

				function ray() {
					//					var Sx = event.touches[ 0 ].pageX; //鼠标单击位置横坐标//touchstart
					//					var Sy = event.touches[ 0 ].pageY; //鼠标单击位置纵坐标
					var Sx = event.clientX; //鼠标单击位置横坐标
					var Sy = event.clientY; //鼠标单击位置纵坐标
					//屏幕坐标转标准设备坐标
					var x = (Sx / window.innerWidth) * 2 - 1; //标准设备横坐标
					var y = -(Sy / window.innerHeight) * 2 + 1; //标准设备纵坐标
					var standardVector = new THREE.Vector3(x, y, 0.5); //标准设备坐标
					//标准设备坐标转世界坐标
					var worldVector = standardVector.unproject(camera);
					//射线投射方向单位向量(worldVector坐标减相机位置坐标)
					var ray = worldVector.sub(camera.position).normalize();
					//创建射线投射器对象
					var raycaster = new THREE.Raycaster(camera.position, ray);
					//返回射线选中的对象
					var intersects = raycaster.intersectObjects(Bplace); //Bplace

					if(intersects.length > 0) {

						

					}
				}
			}



			let indexs = 0
			function runTime(){
				if(posArr[indexs]){
					moveCamera(posArr[indexs].position)
					indexs++;
				}
					
				
					
			}
			

			function moveCamera(target) {
				if(!target)return false;
				let duration = 2000
				let pos = target;
					let tweenPos = new TWEEN.Tween(camera.position)
						.to({
							x: pos.x+target.x*.1,
							y: pos.y+target.y*3,
							z: pos.z+36
						}, duration)
						.easing(TWEEN.Easing.Sinusoidal.InOut)
						.start()
						.onComplete(()=>{
							runTime()
						});
					
					let tweenTar = new TWEEN.Tween(controls.target)
						.to({
							x: target.x,
							y: target.y,
							z: target.z
						}, duration)
						.easing(TWEEN.Easing.Sinusoidal.InOut)
						.start()
						.onUpdate(() => {
							
						});

			}
			var compare = function (prop) {
			    return function (obj1, obj2) {
			        var val1 = Number(obj1[prop]);
			        var val2 = Number(obj2[prop]);if (val1 < val2) {
			            return -1;
			        } else if (val1 > val2) {
			            return 1;
			        } else {
			            return 0;
			        }            
			    } 
			}
			
			function loadModel() {
						// let FBX = new THREE.FBXLoader().load('./model/mod.fbx',(f)=>{
						
						let FBX = new THREE.GLTFLoader().load('https://showjsonme.oss-cn-beijing.aliyuncs.com/Factory/model/'+type+'.glb',(f)=>{
							
							if(type=='C1'){
								f.scene.traverse((t)=>{
									console.log(t)
									if(t.isMesh){
										// t.material.alphaTest = .12
										if(t.name.includes('glass')){
											t.material.transparent = true;
											t.material.opacity = 0.5
											
										}
									// t.material.transparent = true;
									// t.material.depthTest = false;
									
									}
									
								})
								renderer.gammaInput = false;
								renderer.gammaOutput = false
								renderer.toneMappingExposure = 1.0
							}
							f.scene.scale.set(100,100,100)
							
							scene.add(f.scene)
						
						})
			}
			
			