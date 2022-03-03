"use strict";
$(function() {
	function t() {
		s.aspect = window.innerWidth / window.innerHeight, s.updateProjectionMatrix(), d.setSize(window
			.innerWidth, window.innerHeight)
	}

	function e() {
		requestAnimationFrame(e), d.render(c, s), TWEEN.update()
	}

	function n(t) {
		function e() {
			s.lookAt(0, 100, 0)
		}
		new TWEEN.Tween(s.position).to({
			x: t.x,
			y: t.y,
			z: t.z
		}, 1500).easing(TWEEN.Easing.Sinusoidal.InOut).start().onUpdate(e)
	}

	function o() {
		h = (new THREE.CubeTextureLoader).load(["./vr/CubeMap_R_0001.jpg", "./vr/CubeMap_L_0001.jpg",
			"./vr/CubeMap_U_0001.jpg", "./vr/CubeMap_D_0001.jpg", "./vr/CubeMap_B_0001.jpg",
			"./vr/CubeMap_F_0001.jpg"
		]), h.format = THREE.RGBFormat, h.minFilter = THREE.LinearFilter
	}

	function i(t, e, n, o) {
		var i = document.createElement("canvas");
		i.width = 2048, i.height = 512;
		var r = i.getContext("2d");
		r.strokeStyle = "#F8F8FF", r.fillStyle = "#F8F8FF", 1 == o ? (r.beginPath(), r.arc(50, 462, 50, 0, 2 *
				Math.PI), r.closePath(), r.stroke(), r.fill(), r.beginPath(), r.strokeStyle = "#F8F8FF", r
			.lineWidth = "5", r.moveTo(50, 462), r.lineTo(200, 150), r.moveTo(200, 150), r.lineTo(350, 150),
			r.closePath(), r.stroke(), a(r, 350, 0, 1600, 400, 25, "#F8F8FF", "stroke"), a(r, 350, 0, 1600,
				400, 25, "rgba(0,0,0,0.5)", "fill"), r.font = e.size, r.fillStyle = "#ffffff", r.fillText(t,
				400, 240)) : 2 == o && (r.beginPath(), r.arc(1950, 462, 50, 0, 2 * Math.PI), r.closePath(),
			r.stroke(), r.fill(), r.beginPath(), r.strokeStyle = "#F8F8FF", r.lineWidth = "5", r.moveTo(
				1950, 462), r.lineTo(1800, 150), r.moveTo(1800, 150), r.lineTo(1650, 150), r.closePath(), r
			.stroke(), a(r, 50, 0, 1600, 400, 25, "#F8F8FF", "stroke"), a(r, 50, 0, 1600, 400, 25,
				"rgba(0,0,0,0.5)", "fill"), r.font = e.size, r.fillStyle = "#FFFFFF", r.fillText(t, 100,
				240));
		var s = new THREE.CanvasTexture(i),
			c = new THREE.SpriteMaterial({
				map: s,
				transparent: !0,
				opacity: 1
			}),
			d = new THREE.Sprite(c);
		return d.position.copy(n), d.scale.set(e.width, e.height, 1), d
	}

	function a(t, e, n, o, i, a, r, s) {
		t.beginPath(), t.moveTo(e, n + a), t.lineTo(e, n + i - a), t.quadraticCurveTo(e, n + i, e + a, n + i), t
			.lineTo(e + o - a, n + i), t.quadraticCurveTo(e + o, n + i, e + o, n + i - a), t.lineTo(e + o, n +
				a), t.quadraticCurveTo(e + o, n, e + o - a, n), t.lineTo(e + a, n), t.quadraticCurveTo(e, n, e,
				n + a), t[s + "Style"] = r || params.color, t.closePath(), t[s]()
	}
	$.ajax({
		type: "get",
		url: "json/test.json",
		async: !0,
		success: function(t) {
			$("#customers").append(
				'<tr>\n\t\t\t\t<th colspan="6" style="text-align: center;background-color:#3e4e64">主要设备材料表（仅供参考）</th>\n\t\t\t</tr>\n\n\t\t\t<tr style="background-color:#445872">\n\t\t\t\t<th>序号</th>\n\t\t\t\t<th>构建名称</th>\n\t\t\t\t<th>规格型号</th>\n\t\t\t\t<th>单位</th>\n\t\t\t\t<th>数量</th>\n\t\t\t\t<th>备注</th>\n\t\t\t</tr>'
				);
			for (var e = 0; e < t.data1.length; e++) $("#customers").append('<tr class="' + (e %
					2 == 0 ? "c1" : "c2") + '">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>' + (e + 1) +
				"</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>" + t.data1[e].name +
				"</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>" + t.data1[e].type +
				"</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>" + t.data1[e].range +
				"</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>" + t.data1[e].number +
				"</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>" + t.data1[e].other +
				"</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>")
		}
	}), $(".hide").hide(), $("canvas").hide(), $(".version").text(NProgress.version), NProgress.start();
	var r = void 0,
		s = void 0,
		c = void 0,
		d = void 0,
		l = void 0,
		h = void 0,
		p = [],
		u = (new THREE.Clock, null),
		w = new THREE.Group;
	! function() {
		d = new THREE.WebGLRenderer({
				canvas: document.querySelector("#cc"),
				antialias: !0
			}), d.setPixelRatio(window.devicePixelRatio), d.setSize(window.innerWidth, window.innerHeight), d
			.shadowMap.enabled = !0, d.gammaInput = !0, d.gammaOutput = !0, d.sortObjects = !1, window
			.addEventListener("resize", t, !1), s = new THREE.PerspectiveCamera(45, window.innerWidth / window
				.innerHeight, 1, 2e4), s.position.set(0, 262, 1997), r = new THREE.OrbitControls(s, document
				.querySelector("#cc")), r.target.set(0, 100, 0), r.update(), c = new THREE.Scene, c.background =
			new THREE.Color(14474460), l = new THREE.HemisphereLight(16777215, 4473924, 1.5), l.position.set(0,
				200, 0), c.add(l), l = new THREE.DirectionalLight(16777215, 1), l.position.set(0, 800, 500), l
			.castShadow = !0, l.shadow.camera.top = 1024, l.shadow.camera.bottom = -1024, l.shadow.camera
			.left = -1024, l.shadow.camera.right = 1024, l.shadow.mapSize.width = 512, l.shadow.mapSize.height =
			512, l.shadow.camera.near = .5, l.shadow.camera.far = 2048, c.add(l), NProgress.set(.4), o(), [{
				pos: new THREE.Vector3(-170, 183, 150),
				txt: "pvc弯管Φ25",
				type: 2
			}, {
				pos: new THREE.Vector3(-170, 337, 150),
				txt: "pvc管Φ25",
				type: 2
			}, {
				pos: new THREE.Vector3(-100, 16, 150),
				txt: "单相电能表",
				type: 2
			}, {
				pos: new THREE.Vector3(-220, -145, 200),
				txt: "聚氯乙烯绝缘电线BLVV-16m㎡",
				size: "114px",
				type: 2
			}, {
				pos: new THREE.Vector3(-170, -300, 150),
				txt: "塑料关卡Φ25",
				type: 2
			}, {
				pos: new THREE.Vector3(563, 40, 200),
				txt: "金属关卡",
				type: 1
			}, {
				pos: new THREE.Vector3(427, -65, 200),
				txt: "单相1位费控表箱",
				type: 1
			}, {
				pos: new THREE.Vector3(402, -250, 200),
				txt: "小型空气开关80A/2P",
				size: "150px",
				type: 1
			}].map(function(t) {
				var e = i(t.txt, {
					size: (t.size ? t.size : "200px") + " arial",
					width: t.txt.length < 12 ? 280 : 400,
					height: t.txt.length < 12 ? 70 : 100
				}, t.pos, t.type);
				w.add(e)
			}), c.add(w);
		var e = new THREE.FBXLoader;
		new Promise(function(t, n) {
			e.load("model/A1/e4.fbx", function(e) {
				e.traverse(function(t) {
					t.isMesh && (p.push(t), t.castShadow = !0, t.receiveShadow = !0,
						"cover" == t.name && (t.material = new THREE
							.MeshStandardMaterial({
								roughness: .5,
								metalness: .5,
								color: 16711422,
								opacity: .65,
								transparent: !0,
								envMap: h
							})))
				}), e.scale.set(1e3, 1e3, 1e3), e.position.y += 50, u = e, t(u)
			})
		}).then(function(t) {
			c.add(t), NProgress.inc(), NProgress.done(), $("canvas").show(), $(".hide").show()
		})
	}(), e(),
		function() {
			function t() {
				var t = event.clientX,
					e = event.clientY,
					n = t / window.innerWidth * 2 - 1,
					o = -e / window.innerHeight * 2 + 1,
					i = new THREE.Vector3(n, o, .5),
					a = i.unproject(s),
					r = a.sub(s.position).normalize(),
					c = new THREE.Raycaster(s.position, r),
					d = c.intersectObjects(p);
				if (d.length > 0) {
					var l = d[0].object;
					l.name, console.log(d[0].point), console.log(l.name)
				}
			}
			document.addEventListener("click", t)
		}(), document.querySelector("#reset").addEventListener("click", function() {
			n(new THREE.Vector3(0, 262, 1997))
		}), document.querySelector("#showInfo").addEventListener("click", function() {
			$("#customers").toggle()
		}), document.querySelector("#showTitles").addEventListener("click", function() {
			w.visible ? w.visible = !1 : w.visible = !0
		})
});
