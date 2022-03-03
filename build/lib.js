const _0x514f = [
    'name',
    'addEventListener',
    'enabled',
    'width',
    'toneMapping',
    'location',
    'glass',
    'Easing',
    'scale',
    'onComplete',
    'right',
    'includes',
    'setPixelRatio',
    'set',
    'shadowMap',
    'start',
    'position',
    'target',
    'material',
    'intersectObjects',
    '.glb',
    'add',
    'opacity',
    'gammaOutput',
    'shadow',
    'WebGLRenderer',
    'body',
    'clientX',
    'url(img/bg/',
    'querySelector',
    'length',
    '#cc',
    'left',
    'toneMappingExposure',
    'bottom',
    'Tween',
    'height',
    'Raycaster',
    'DirectionalLight',
    'InOut',
    'style',
    'Vector3',
    'minDistance',
    'OrbitControls',
    'clientY',
    'update',
    'traverse',
    'copy',
    'scene',
    'camera',
    'sub',
    'https://showjsonme.oss-cn-beijing.aliyuncs.com/Factory/model/',
    'gammaInput',
    'resize',
    'aspect',
    'Scene',
    'GLTFLoader',
    '.png)',
    'innerWidth',
    'easing',
    'hash',
    'innerHeight',
    'mapSize',
    'click',
    'Sinusoidal',
    'HemisphereLight',
    'backgroundImage',
    'log'
];
(function (_0x1c7d01, _0x351eec) {
    const _0x514f7 = function (_0x5d92b8) {
        while (--_0x5d92b8) {
            _0x1c7d01['push'](_0x1c7d01['shift']());
        }
    };
    _0x514f7(++_0x351eec);
}(_0x514f, 0x8f));
const _0x5d92 = function (_0x1c7d01, _0x351eec) {
    _0x1c7d01 = _0x1c7d01 - 0xb1;
    let _0x514f7 = _0x514f[_0x1c7d01];
    return _0x514f7;
};
const _0xfdff90 = _0x5d92;
let container, stats, controls;
let camera, scene, renderer, light;
let posArr = [];
let det = 0x1;
let pp;
let model;
let Bplace = [], titlePlane, isLook;
let type = window[_0xfdff90(0xf3)][_0xfdff90(0xe6)]['split']('=')[0x1];
document['querySelector'](_0xfdff90(0xc4))[_0xfdff90(0xd2)][_0xfdff90(0xec)] = _0xfdff90(0xc6) + type + _0xfdff90(0xe3);
init();
animate();
function init() {
    const _0x5234c7 = _0xfdff90;
    renderer = new THREE[(_0x5234c7(0xc3))]({
        'antialias': !![],
        'alpha': !![],
        'canvas': document[_0x5234c7(0xc7)](_0x5234c7(0xc9))
    });
    renderer[_0x5234c7(0xb6)](window['devicePixelRatio']);
    renderer['setSize'](window[_0x5234c7(0xe4)], window[_0x5234c7(0xe7)]);
    renderer[_0x5234c7(0xb8)][_0x5234c7(0xf0)] = !![];
    window['addEventListener'](_0x5234c7(0xdf), onWindowResize, ![]);
    camera = new THREE['PerspectiveCamera'](0x2d, window['innerWidth'] / window[_0x5234c7(0xe7)], 0x1, 0x4e20);
    camera['position'][_0x5234c7(0xb7)](0x2a, 0x62b, 0x681);
    controls = new THREE[(_0x5234c7(0xd5))](camera);
    controls[_0x5234c7(0xbb)][_0x5234c7(0xb7)](0x0, 0x0, 0x0);
    controls[_0x5234c7(0xd4)] = 0x3e8;
    scene = new THREE[(_0x5234c7(0xe1))]();
    light = new THREE[(_0x5234c7(0xeb))](0xffffff, 0x444444);
    light[_0x5234c7(0xba)][_0x5234c7(0xb7)](0x0, 0xc8, 0x0);
    scene[_0x5234c7(0xbf)](light);
    renderer['gammaInput'] = !![];
    renderer[_0x5234c7(0xc1)] = !![];
    renderer['toneMappingExposure'] = 1.5;
    renderer[_0x5234c7(0xf2)] = THREE['LinearToneMapping'];
    light = new THREE[(_0x5234c7(0xd0))](0xffffff, 2.5);
    light['position'][_0x5234c7(0xb7)](0x0, 0xc8, 0x64);
    light['castShadow'] = !![];
    light['shadow'][_0x5234c7(0xdb)]['top'] = 0xb4;
    light[_0x5234c7(0xc2)][_0x5234c7(0xdb)][_0x5234c7(0xcc)] = -0x64;
    light[_0x5234c7(0xc2)]['camera'][_0x5234c7(0xca)] = -0x78;
    light[_0x5234c7(0xc2)][_0x5234c7(0xdb)][_0x5234c7(0xb4)] = 0x78;
    light[_0x5234c7(0xc2)][_0x5234c7(0xe8)][_0x5234c7(0xf1)] = 0x1000;
    light['shadow'][_0x5234c7(0xe8)][_0x5234c7(0xce)] = 0x1000;
    scene['add'](light);
    loadModel();
}
function onWindowResize() {
    const _0x4a0315 = _0xfdff90;
    camera[_0x4a0315(0xe0)] = window[_0x4a0315(0xe4)] / window[_0x4a0315(0xe7)];
    camera['updateProjectionMatrix']();
    renderer['setSize'](window['innerWidth'], window[_0x4a0315(0xe7)]);
}
function animate() {
    const _0x3c9354 = _0xfdff90;
    requestAnimationFrame(animate);
    renderer['render'](scene, camera);
    light[_0x3c9354(0xba)][_0x3c9354(0xd9)](camera[_0x3c9354(0xba)]);
    TWEEN[_0x3c9354(0xd7)]();
    controls['update']();
}
function rayBreathing() {
    const _0x3b5697 = _0xfdff90;
    document[_0x3b5697(0xef)](_0x3b5697(0xe9), _0x3ce8c4);
    function _0x3ce8c4() {
        const _0x20d541 = _0x3b5697;
        var _0x4ddd66 = event[_0x20d541(0xc5)];
        var _0x264ccf = event[_0x20d541(0xd6)];
        var _0x58098d = _0x4ddd66 / window[_0x20d541(0xe4)] * 0x2 - 0x1;
        var _0x2793ec = -(_0x264ccf / window['innerHeight']) * 0x2 + 0x1;
        var _0x4a6bde = new THREE[(_0x20d541(0xd3))](_0x58098d, _0x2793ec, 0.5);
        var _0x1965f4 = _0x4a6bde['unproject'](camera);
        var _0x40d56b = _0x1965f4[_0x20d541(0xdc)](camera['position'])['normalize']();
        var _0x542a50 = new THREE[(_0x20d541(0xcf))](camera['position'], _0x40d56b);
        var _0x9adecc = _0x542a50[_0x20d541(0xbd)](Bplace);
        if (_0x9adecc[_0x20d541(0xc8)] > 0x0) {
        }
    }
}
let indexs = 0x0;
function runTime() {
    const _0x357422 = _0xfdff90;
    if (posArr[indexs]) {
        moveCamera(posArr[indexs][_0x357422(0xba)]);
        indexs++;
    }
}
function moveCamera(_0x1ebd10) {
    const _0x1b0be4 = _0xfdff90;
    if (!_0x1ebd10)
        return ![];
    let _0x456aba = 0x7d0;
    let _0x18c8a3 = _0x1ebd10;
    let _0x2832cf = new TWEEN[(_0x1b0be4(0xcd))](camera[_0x1b0be4(0xba)])['to']({
        'x': _0x18c8a3['x'] + _0x1ebd10['x'] * 0.1,
        'y': _0x18c8a3['y'] + _0x1ebd10['y'] * 0x3,
        'z': _0x18c8a3['z'] + 0x24
    }, _0x456aba)[_0x1b0be4(0xe5)](TWEEN[_0x1b0be4(0xb1)][_0x1b0be4(0xea)][_0x1b0be4(0xd1)])[_0x1b0be4(0xb9)]()[_0x1b0be4(0xb3)](() => {
        runTime();
    });
    let _0x247cce = new TWEEN[(_0x1b0be4(0xcd))](controls['target'])['to']({
        'x': _0x1ebd10['x'],
        'y': _0x1ebd10['y'],
        'z': _0x1ebd10['z']
    }, _0x456aba)[_0x1b0be4(0xe5)](TWEEN[_0x1b0be4(0xb1)][_0x1b0be4(0xea)][_0x1b0be4(0xd1)])[_0x1b0be4(0xb9)]()['onUpdate'](() => {
    });
}
var compare = function (_0x52996c) {
    return function (_0x1e9db3, _0x10c8f0) {
        var _0x260122 = Number(_0x1e9db3[_0x52996c]);
        var _0x5b4a24 = Number(_0x10c8f0[_0x52996c]);
        if (_0x260122 < _0x5b4a24) {
            return -0x1;
        } else if (_0x260122 > _0x5b4a24) {
            return 0x1;
        } else {
            return 0x0;
        }
    };
};
function loadModel() {
    const _0x345226 = _0xfdff90;
    let _0x54153f = new THREE[(_0x345226(0xe2))]()['load'](_0x345226(0xdd) + type + _0x345226(0xbe), _0x25572c => {
        const _0x250a8e = _0x345226;
        if (type == 'C1') {
            _0x25572c[_0x250a8e(0xda)][_0x250a8e(0xd8)](_0x261e1f => {
                const _0x44b88c = _0x250a8e;
                console[_0x44b88c(0xed)](_0x261e1f);
                if (_0x261e1f['isMesh']) {
                    if (_0x261e1f[_0x44b88c(0xee)][_0x44b88c(0xb5)](_0x44b88c(0xf4))) {
                        _0x261e1f[_0x44b88c(0xbc)]['transparent'] = !![];
                        _0x261e1f[_0x44b88c(0xbc)][_0x44b88c(0xc0)] = 0.5;
                    }
                }
            });
            renderer[_0x250a8e(0xde)] = ![];
            renderer[_0x250a8e(0xc1)] = ![];
            renderer[_0x250a8e(0xcb)] = 0x1;
        }
        _0x25572c[_0x250a8e(0xda)][_0x250a8e(0xb2)][_0x250a8e(0xb7)](0x64, 0x64, 0x64);
        scene[_0x250a8e(0xbf)](_0x25572c[_0x250a8e(0xda)]);
    });
}