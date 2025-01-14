function getParent(path) {
    var fso = new ActiveXObject("Scripting.FileSystemObject")
    return fso.GetParentFolderName(path)
}

function CreateShortcut(app_name) {
    var wsh = new ActiveXObject('WScript.Shell');
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    system_folder = fso.GetSpecialFolder(1)
    target_path = '"' + system_folder + '\\wscript.exe"';
    xxnet_path = getParent(getParent(getParent(wsh.CurrentDirectory)));
    //var shell = new ActiveXObject("WScript.Shell");
    //shell.Popup(xxnet_path); // for debugging
    argument_file = '"' + xxnet_path + '\\start.vbs"';
    icon_path = wsh.CurrentDirectory + '\\web_ui\\favicon.ico';

    link = wsh.CreateShortcut(wsh.SpecialFolders("Desktop") + '\\' + app_name + '.lnk');
    link.TargetPath = target_path;
    link.Arguments = argument_file;
    link.WindowStyle = 7;
    link.IconLocation = icon_path;
    link.Description = app_name;
    link.WorkingDirectory = xxnet_path;
    link.Save();
}


function main() {
    var app_name = WScript.arguments(0);
    CreateShortcut(app_name);
}

main();
