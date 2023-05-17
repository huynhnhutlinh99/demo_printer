# node-dada
NodeJS ElectronJS DADA Project

## 1. Working with CMD

Project is work via command line. Using CMD to start project.

Open Command Prompt in Start of Windows. Use `cd` command to go to folder that is contain `package.json` file of project.

Or can be open File Explorer to path of project contain `package.json` file. Type `cmd` on Address bar and press `Enter` to open CMD with specify path is current path.

## 2. Run live code

Type the follow command in CMD:

```sh
npm start
```

## 3. Build installer application

Build with EXE file, run the follow command in CMD:

```sh
.\node_modules\.bin\electron-builder build
```

In `package.json` file is contains builder information for Windows OS with 2 Architecture `x86` and `x64`.

```json
{
  ...
  "build": {
    ...
    "win": {
      "icon": "src/assets/icon-256x256.png",
      "target": [
        {
          "target": "nsis",
          "arch": [
            "x64",
            "ia32"
          ]
        }
      ]
    }
    ...
  }
  ...
}
```

On `win` property, `target[].arch` contains `x64` for Arch x64 and `ia32` for Arch x86. Remove the value that you want not to build.

## 4. Rebuild application

When building or running live code an error is related to electron problems, we should `rebuild` the electron packages to start again. Run the follow steps and commands to rebuild.

1. Delete `node_modules` folder.

2. Delete `package-lock.json` file.

3. Run the follow commands:

```sh
# Reinstall all package that project dependencies
npm install

# Rebuild packages
.\node_modules\.bin\electron-rebuild
```

## 5. Communicate with printer port

This project uses a module that communicates with the printer port.

This module is rewritten based on a module on github and it has removed features such as: print qrcode, print barcode, print images.

Link module github: https://github.com/song940/node-escpos

New features in this module:

- Fixed the width of the paper size when changing font size.
- Determining the number of bytes of letters with different types of letters prevents overflow on the line.
- Auto line break by space in table, auto line break for words with too long character count.
- Reconstructing table is simpler and won't break when changing character type and font size.

Folder of module: `src/app/Printers`

Primary file of module: `src/app/Printers/index.js`;

Libraries inside module:

- Class `Printer` - Make a printer driver to send data to device.
- Class `Printer.Serial` - Make a device via Serial port.
- Class `Printer.USB` - Make a device via USB port.
- Property `Printer.Chars` - Contains special characters of printer.

## 6. How to start project

### Requirement

For people running this project for the first time, your computer must be installed follow programs:

- NodeJS and npm
- VS Build Tools 2015
- Python 2.7.15

#### Install NodeJS

For NodeJS, you have to install it manually. Download the latest NodeJS at their homepage: https://nodejs.org/en/download/

After install NodeJS, open CMD and type follow commands:

```sh
node -v
# => v12.18.3

npm -v
# => 6.14.9
```

If the value received on CMD is the same as commented after the command, you have successfully installed NodeJS.

After install success NodeJS, the other programs can be install via `npm`

#### Install other programs

- Make new folder to contains the installer of programs. Example: `"D:\installer"`
- Download VS Build Tools 2015: https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=buildtools&rel=16
- Change the Build Tools installer name to `vs_buildtools.exe` and copy it to *D:\installer* folder you created
- Download Python 2.7.15: https://www.python.org/ftp/python/2.7.15/python-2.7.15.amd64.msi
- Copy Python installer to *D:\installer* folder

To install them, you must use **PowerShell** as `Administator privilege`.

Click to **Start** of Windows on Taskbar, type `PowerShell` and right-click to PowerShell App displayed, choose **Run as Administator**

When PowerShell opened, run the follow command:

```sh
npm install -g windows-build-tools --offline-installers="D:\installer"
```

`D:\installer` is the path to the directory containing the installation files you created earlier.

The installation process can take a while.

#### System Enviroment Variable

Execute path of Python must be added to `Path` variable in System Enviroment.

Normally, after install Python success, execute path of Python is `C:\Python27\python.exe`. To add this path to System Enviroment, to do follow steps:

- Right-click to computer shortcut (maybe `This PC` on Window Explorer) and click **Properties**
- The panel will be open, click to **Change settings** in *Computer name, domain, and workgroup settings* part.
- System properties panel open, choose **Advanced** tab and click **Enviroment Variables...** button.
- Enviroment Variables panel open, in the **System Variables** part, choose **Path** value in *Variable* column and click **Edit** button.
- Edit Enviroment Variable panel open, check on list path is contain Python path, if not, click **New** button and enter *Python Path* to new input, click **OK** to complete and close panel.
- You can also add it to the *User variables for &lt;USER&gt;* part.
- Click **OK** in other panels to complete.

### Start project

Open CMD at the folder that you want to contain this project. Run the follow commands: 

```sh
# Clone this project
git clone https://github.com/ngvcanh/node-dada

# Go to folder project
cd node-dada

# Install all packages that this project useing them
npm install

# Rebuild the packages that they are using other lanuages to handle: serialport, usb
# Or rebuild Node Module if package and in your PC are different
.\node_modules\.bin\electron-rebuild

# Start project after rebuild success
npm start
```

After completing the above steps, the packages under this project are installed:

- electron
- electron-builder
- electron-rebuild
- serialport
- usb
- mutable-buffer
- iconv-lite

To re-run this project later, read [section 1](https://github.com/ngvcanh/node-dada#1-working-with-cmd) and [section 2](https://github.com/ngvcanh/node-dada#2-run-live-code)
