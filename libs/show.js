const _0x38f9 = [
    'update',
    'Sinusoidal',
    'odPos',
    'name',
    'addEventListener',
    'DirectionalLight',
    'visible',
    'None',
    'getWorldPosition',
    'WebGLRenderer',
    'InOut',
    'children',
    'show',
    'https://showjsonme.oss-cn-beijing.aliyuncs.com/Factory/model/Kt4.glb',
    'toneMapping',
    'object',
    'material',
    'camera',
    'target',
    'left',
    'length',
    'scale',
    'OrbitControls',
    'right',
    'Scene',
    '#back',
    'Vector3',
    'width',
    'sortObjects',
    './img/pointSprite.png',
    'position',
    'Raycaster',
    'castShadow',
    'innerWidth',
    'hash',
    'SpriteMaterial',
    'location',
    'HemisphereLight',
    'isMesh',
    'setPixelRatio',
    'PerspectiveCamera',
    'start',
    'shadowMap',
    'door',
    'Linear',
    'transparent',
    'add',
    'push',
    'url(img/bg/',
    'click',
    'Easing',
    'hide',
    'traverse',
    'Tween',
    'GLTFLoader',
    'split',
    'includes',
    'onComplete',
    'render',
    'setSize',
    'clientX',
    'door_glass',
    'load',
    'sprite_',
    'vec',
    'gammaInput',
    'copy',
    'clientY',
    'enabled',
    'css',
    'sprite_vec_door',
    'innerHeight',
    'body',
    'TextureLoader',
    'aspect',
    'set',
    'easing',
    'log',
    'normalize',
    'gammaOutput',
    'bottom',
    'mapSize',
    '.png)',
    'scene',
    'querySelector',
    'map',
    'shadow',
    'resize'
];
(function (_0x52ef2b, _0x59c017) {
    const _0x38f93c = function (_0x284c7f) {
        while (--_0x284c7f) {
            _0x52ef2b['push'](_0x52ef2b['shift']());
        }
    };
    _0x38f93c(++_0x59c017);
}(_0x38f9, 0x132));
const _0x284c = function (_0x52ef2b, _0x59c017) {
    _0x52ef2b = _0x52ef2b - 0x1a7;
    let _0x38f93c = _0x38f9[_0x52ef2b];
    return _0x38f93c;
};
const _0x54868b = _0x284c;
let container, stats, controls;
let camera, scene, renderer, light;
let posArr = [];
let det = 0x1;
let pp;
let model;
let spriteArr = [];
let Bplace = [], titlePlane, isLook;
let modelsArr = {
    'A': [],
    'B': [],
    'C': []
};
let type = window[_0x54868b(0x1f9)][_0x54868b(0x1f7)][_0x54868b(0x1b4)]('=')[0x1];
$(_0x54868b(0x1ee))[_0x54868b(0x1b0)]();
init();
animate();
function init() {
    const _0x22dd2f = _0x54868b;
    renderer = new THREE[(_0x22dd2f(0x1de))]({
        'antialias': !![],
        'alpha': !![],
        'canvas': document[_0x22dd2f(0x1d1)]('#cc')
    });
    renderer[_0x22dd2f(0x1fc)](window['devicePixelRatio']);
    renderer[_0x22dd2f(0x1b8)](window[_0x22dd2f(0x1f6)], window[_0x22dd2f(0x1c4)]);
    renderer[_0x22dd2f(0x1a7)][_0x22dd2f(0x1c1)] = !![];
    renderer[_0x22dd2f(0x1f1)] = ![];
    window[_0x22dd2f(0x1d9)](_0x22dd2f(0x1d4), onWindowResize, ![]);
    camera = new THREE[(_0x22dd2f(0x1fd))](0x2d, window[_0x22dd2f(0x1f6)] / window[_0x22dd2f(0x1c4)], 0x1, 0x4e20);
    camera[_0x22dd2f(0x1f3)][_0x22dd2f(0x1c8)](0x10, 0xef, 0xa05);
    controls = new THREE[(_0x22dd2f(0x1eb))](camera);
    controls[_0x22dd2f(0x1e7)]['set'](0x0, 0x0, 0x0);
    scene = new THREE[(_0x22dd2f(0x1ed))]();
    light = new THREE[(_0x22dd2f(0x1fa))](0xffffff, 0x444444);
    light[_0x22dd2f(0x1f3)][_0x22dd2f(0x1c8)](0x0, 0xc8, 0x0);
    scene['add'](light);
    renderer[_0x22dd2f(0x1be)] = !![];
    renderer[_0x22dd2f(0x1cc)] = !![];
    renderer['toneMappingExposure'] = 0x1;
    renderer[_0x22dd2f(0x1e3)] = THREE['LinearToneMapping'];
    light = new THREE[(_0x22dd2f(0x1da))](0xffffff, 2.5);
    light[_0x22dd2f(0x1f3)][_0x22dd2f(0x1c8)](0x0, 0xc8, 0x64);
    light[_0x22dd2f(0x1f5)] = !![];
    light[_0x22dd2f(0x1d3)][_0x22dd2f(0x1e6)]['top'] = 0xb4;
    light[_0x22dd2f(0x1d3)][_0x22dd2f(0x1e6)][_0x22dd2f(0x1cd)] = -0x64;
    light[_0x22dd2f(0x1d3)]['camera'][_0x22dd2f(0x1e8)] = -0x78;
    light[_0x22dd2f(0x1d3)][_0x22dd2f(0x1e6)][_0x22dd2f(0x1ec)] = 0x78;
    light[_0x22dd2f(0x1d3)][_0x22dd2f(0x1ce)][_0x22dd2f(0x1f0)] = 0x1000;
    light[_0x22dd2f(0x1d3)]['mapSize']['height'] = 0x1000;
    scene[_0x22dd2f(0x1ab)](light);
    loadModel();
}
function onWindowResize() {
    const _0x32e3af = _0x54868b;
    camera[_0x32e3af(0x1c7)] = window['innerWidth'] / window[_0x32e3af(0x1c4)];
    camera['updateProjectionMatrix']();
    renderer['setSize'](window[_0x32e3af(0x1f6)], window[_0x32e3af(0x1c4)]);
}
function animate() {
    const _0x4cd376 = _0x54868b;
    requestAnimationFrame(animate);
    renderer[_0x4cd376(0x1b7)](scene, camera);
    light[_0x4cd376(0x1f3)][_0x4cd376(0x1bf)](camera[_0x4cd376(0x1f3)]);
    TWEEN[_0x4cd376(0x1d5)]();
    controls[_0x4cd376(0x1d5)]();
}
$(_0x54868b(0x1ee))[_0x54868b(0x1ae)](() => {
    const _0x452ce2 = _0x54868b;
    toggleModele(![]);
    $(_0x452ce2(0x1c5))[_0x452ce2(0x1c2)]({ 'backgroundImage': 'url(img/bg3.png)' });
});
rayBreathing();
function rayBreathing() {
    document['addEventListener']('click', _0x3f2332);
    function _0x3f2332() {
        const _0x38afa9 = _0x284c;
        var _0x52a4c0 = event[_0x38afa9(0x1b9)];
        var _0x14d29c = event[_0x38afa9(0x1c0)];
        var _0x2da229 = _0x52a4c0 / window['innerWidth'] * 0x2 - 0x1;
        var _0x409569 = -(_0x14d29c / window[_0x38afa9(0x1c4)]) * 0x2 + 0x1;
        var _0x5c1be5 = new THREE['Vector3'](_0x2da229, _0x409569, 0.5);
        var _0x4cc1bb = _0x5c1be5['unproject'](camera);
        var _0x3f8783 = _0x4cc1bb['sub'](camera[_0x38afa9(0x1f3)])[_0x38afa9(0x1cb)]();
        var _0x568185 = new THREE[(_0x38afa9(0x1f4))](camera[_0x38afa9(0x1f3)], _0x3f8783);
        var _0x3aa3db = _0x568185['intersectObjects'](Bplace, !![]);
        var _0x29752e = [
            'A',
            'D',
            'F1',
            'G'
        ];
        if (_0x3aa3db[_0x38afa9(0x1e9)] > 0x0) {
            let _0x1b7bfb = _0x3aa3db[0x0][_0x38afa9(0x1e4)]['parent'][_0x38afa9(0x1d8)];
            let _0x4b91a2 = _0x3aa3db[0x0][_0x38afa9(0x1e4)][_0x38afa9(0x1d8)];
            console[_0x38afa9(0x1ca)](_0x3aa3db[0x0][_0x38afa9(0x1e4)]);
            if (_0x1b7bfb[_0x38afa9(0x1b5)]('door') || _0x4b91a2[_0x38afa9(0x1b5)](_0x38afa9(0x1a8))) {
                showModel();
                findMesh(_0x38afa9(0x1c3))['visible'] = ![];
            } else if (_0x29752e[_0x38afa9(0x1b5)](_0x1b7bfb)) {
                toggleModele(!![], _0x1b7bfb);
                $(_0x38afa9(0x1c5))[_0x38afa9(0x1c2)]({ 'backgroundImage': 'url(img/bg/' + _0x1b7bfb + _0x38afa9(0x1cf) });
                console[_0x38afa9(0x1ca)](_0x1b7bfb);
            } else if (_0x29752e[_0x38afa9(0x1b5)](_0x4b91a2)) {
                $(_0x38afa9(0x1c5))[_0x38afa9(0x1c2)]({ 'backgroundImage': _0x38afa9(0x1ad) + _0x4b91a2 + _0x38afa9(0x1cf) });
                toggleModele(!![], _0x4b91a2);
                console[_0x38afa9(0x1ca)](_0x4b91a2);
            }
        }
    }
}
function moveCamera(_0x2f0fb2) {
    const _0x573cb2 = _0x54868b;
    if (!_0x2f0fb2)
        return ![];
    let _0x4fc6c4 = 0x7d0;
    let _0x27cd13 = _0x2f0fb2;
    let _0x26bb96 = new TWEEN[(_0x573cb2(0x1b2))](camera[_0x573cb2(0x1f3)])['to']({
        'x': _0x27cd13['x'] + 0x12,
        'y': _0x27cd13['y'] + 0x190,
        'z': _0x27cd13['z'] + 0x320
    }, _0x4fc6c4)[_0x573cb2(0x1c9)](TWEEN[_0x573cb2(0x1af)][_0x573cb2(0x1d6)][_0x573cb2(0x1df)])['start']()[_0x573cb2(0x1b6)](() => {
    });
}
var compare = function (_0x318fb1) {
    return function (_0x2db3e0, _0x180375) {
        var _0x5c8e94 = Number(_0x2db3e0[_0x318fb1]);
        var _0x463f43 = Number(_0x180375[_0x318fb1]);
        if (_0x5c8e94 < _0x463f43) {
            return -0x1;
        } else if (_0x5c8e94 > _0x463f43) {
            return 0x1;
        } else {
            return 0x0;
        }
    };
};
function loadModel() {
    const _0x354b1c = _0x54868b;
    let _0x352d6a = new THREE[(_0x354b1c(0x1b3))]()[_0x354b1c(0x1bb)](_0x354b1c(0x1e2), _0x26a0ae => {
        const _0x147cf7 = _0x354b1c;
        _0x26a0ae[_0x147cf7(0x1d0)][_0x147cf7(0x1ea)][_0x147cf7(0x1c8)](0x3c, 0x3c, 0x3c);
        scene[_0x147cf7(0x1ab)](_0x26a0ae['scene']);
        console[_0x147cf7(0x1ca)](_0x26a0ae);
        _0x26a0ae[_0x147cf7(0x1d0)][_0x147cf7(0x1e0)][0x0]['children'][_0x147cf7(0x1d2)](_0x386a22 => {
            const _0x4db9de = _0x147cf7;
            let _0x345064 = new THREE[(_0x4db9de(0x1ef))]();
            _0x345064[_0x4db9de(0x1bf)](_0x386a22[_0x4db9de(0x1f3)]);
            _0x386a22['odPos'] = _0x345064;
            if (!_0x386a22[_0x4db9de(0x1d8)][_0x4db9de(0x1b5)](_0x4db9de(0x1a8))) {
                Bplace[_0x4db9de(0x1ac)](_0x386a22);
                modelsArr['C'][_0x4db9de(0x1ac)](_0x386a22);
            } else if (_0x386a22[_0x4db9de(0x1d8)][_0x4db9de(0x1b5)](_0x4db9de(0x1a8))) {
                Bplace[_0x4db9de(0x1ac)](_0x386a22);
                _0x386a22[_0x4db9de(0x1b1)](_0x4ca18b => {
                    const _0x42a270 = _0x4db9de;
                    if (_0x4ca18b[_0x42a270(0x1fb)]) {
                        modelsArr['A'][_0x42a270(0x1ac)](_0x4ca18b);
                        let _0x115e0a = _0x4ca18b['material']['clone']();
                        _0x4ca18b[_0x42a270(0x1e5)] = _0x115e0a;
                        _0x4ca18b[_0x42a270(0x1e5)][_0x42a270(0x1aa)] = !![];
                        if (_0x4ca18b[_0x42a270(0x1d8)][_0x42a270(0x1b5)]('glass')) {
                            _0x4ca18b[_0x42a270(0x1e5)][_0x42a270(0x1aa)] = !![];
                        }
                    }
                });
            }
        });
        let _0x30eda0 = new THREE[(_0x147cf7(0x1f8))]({
            'color': 0xffffff,
            'map': new THREE[(_0x147cf7(0x1c6))]()[_0x147cf7(0x1bb)](_0x147cf7(0x1f2)),
            'transparent': !![]
        });
        scene['traverse'](_0x4f76e2 => {
            const _0x1219f5 = _0x147cf7;
            if (_0x4f76e2[_0x1219f5(0x1d8)]['includes'](_0x1219f5(0x1bd))) {
                let _0x37c191 = new THREE['Sprite'](_0x30eda0);
                _0x37c191[_0x1219f5(0x1ea)]['set'](0x2d, 0x2d, 0x2d);
                _0x37c191[_0x1219f5(0x1d8)] = _0x1219f5(0x1bc) + _0x4f76e2[_0x1219f5(0x1d8)];
                if (!_0x37c191[_0x1219f5(0x1d8)][_0x1219f5(0x1b5)](_0x1219f5(0x1a8))) {
                    spriteArr[_0x1219f5(0x1ac)](_0x37c191);
                }
                _0x37c191['position'][_0x1219f5(0x1bf)](_0x4f76e2[_0x1219f5(0x1dd)](new THREE[(_0x1219f5(0x1ef))]()));
                _0x37c191[_0x1219f5(0x1f3)]['y'] *= 0x3c;
                _0x37c191[_0x1219f5(0x1f3)]['z'] *= 0x3c;
                scene[_0x1219f5(0x1ab)](_0x37c191);
                _0x4f76e2['visible'] = ![];
                console[_0x1219f5(0x1ca)](_0x4f76e2['position']);
            }
        });
    });
}
function findMesh(_0x50c2cb) {
    let _0x42afd9 = scene['getObjectByName'](_0x50c2cb);
    if (_0x42afd9) {
        return _0x42afd9;
    } else {
        return null;
    }
}
function anOpacity(_0x530255, _0xae4abb, _0x145dd2) {
    const _0x2a8474 = _0x54868b;
    let _0x6144b5 = new TWEEN[(_0x2a8474(0x1b2))](_0x530255)['to']({ 'opacity': _0xae4abb }, 0x352)[_0x2a8474(0x1c9)](TWEEN[_0x2a8474(0x1af)][_0x2a8474(0x1a9)][_0x2a8474(0x1dc)])[_0x2a8474(0x1fe)]()[_0x2a8474(0x1b6)](function () {
        const _0x4786c7 = _0x2a8474;
        _0x145dd2();
        findMesh(_0x4786c7(0x1a8))[_0x4786c7(0x1db)] = ![];
        findMesh(_0x4786c7(0x1ba))[_0x4786c7(0x1db)] = ![];
    });
}
function showModel() {
    const _0x4e3495 = _0x54868b;
    modelsArr['A'][_0x4e3495(0x1d2)](_0x527e22 => {
        const _0x498f1c = _0x4e3495;
        _0x527e22['material'][_0x498f1c(0x1aa)] = !![];
        anOpacity(_0x527e22[_0x498f1c(0x1e5)], 0x0, () => {
            const _0xad05ac = _0x498f1c;
            renderer[_0xad05ac(0x1be)] = !![];
            renderer[_0xad05ac(0x1cc)] = !![];
            renderer['toneMappingExposure'] = 1.5;
        });
    });
}
function toggleModele(_0x170b4e, _0x53999d) {
    const _0x21597f = _0x54868b;
    if (_0x170b4e) {
        $(_0x21597f(0x1ee))[_0x21597f(0x1e1)]();
        modelsArr['C'][_0x21597f(0x1d2)](_0x1eee0e => {
            const _0x244661 = _0x21597f;
            if (_0x1eee0e[_0x244661(0x1d8)] == _0x53999d) {
                _0x1eee0e['position'][_0x244661(0x1c8)](0x0, 0x0, 0x0);
            } else {
                _0x1eee0e[_0x244661(0x1db)] = ![];
            }
        });
        spriteArr[_0x21597f(0x1d2)](_0x22d48a => {
            _0x22d48a['visible'] = ![];
        });
    } else {
        spriteArr[_0x21597f(0x1d2)](_0x4f9376 => {
            const _0x3099a5 = _0x21597f;
            _0x4f9376[_0x3099a5(0x1db)] = !![];
        });
        $(_0x21597f(0x1ee))[_0x21597f(0x1b0)]();
        modelsArr['C']['map'](_0x5d6b89 => {
            const _0x2f8c04 = _0x21597f;
            _0x5d6b89[_0x2f8c04(0x1db)] = !![];
            _0x5d6b89[_0x2f8c04(0x1f3)][_0x2f8c04(0x1bf)](_0x5d6b89[_0x2f8c04(0x1d7)]);
        });
    }
}