---
title: "How to Install Go and Set Path for Global Accessibility in Linux"
author: r3dw4n
date: 2025-03-17 00:00:00 +0600
categories: [Blogs]
tags: [go,blogs,go-lan,installation]     # TAG names should always be lowercase
render_with_liquid: false
media_subpath: /images/how_to_install_go_language_and_set_path_for_tools_in_linux
image:
  path: go_logo.png
---

In this blog`/`Article I am going to show you how you can install Go language and set path for Global Accessibility.

---
## 1. Download and Install Go
### 1. Visit the official Go website: [Here](https://go.dev/dl/).
### 2. Download the installer for your operating system:
   - **Linux**: Download the `.tar.gz` file.
   - **Windows**: Download the `.msi` file.
   - **macOS**: Download the `.pkg` file.

![Go Download Page](go_download_page.png){: width="700" height="300"}

Or you can just use `wget` command.

```bash
wget go1.xx.x.linux-amd64.tar.gz
```

![Downloading Go Using Wget](downloading_go.png){: width="700" height="300"}

### 3. Install Go:
   - **Linux**: Extract the archive and move it to `/usr/local`:
     ```bash
     tar -xvf go1.xx.x.linux-amd64.tar.gz
     sudo mv go /usr/local
     ```
   - **Windows**: Run the `.msi` installer and follow the instructions.
   - **macOS**: Run the `.pkg` installer and follow the instructions.

![Extracting](Extracting_go_tar_file.png){: width="700" height="300"}

---

## 2. Configure PATH Environment Variable
### Linux/macOS
#### 1. Edit your shell configuration file (e.g., `.bashrc`, `.zshrc`, or `.bash_profile`):
```bash
nano ~/.bashrc
```

#### 2. Add the following lines to set the Go environment variables:
```bash
export PATH=$PATH:/usr/local/go/bin
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin
```
![Adding Path](add_path.png){: width="700" height="300"}

#### 3. Save using `Ctrl + O` and close `Ctrl + X` the file, then reload it:
```bash
source ~/.bashrc
```

### Windows
1. Open the **System Properties** → **Advanced** → **Environment Variables**.
2. Under **System Variables**, find `Path` and click **Edit**.
3. Add the following paths:
   - `C:\Go\bin` (or wherever Go is installed).
   - `%USERPROFILE%\go\bin` (for installed tools).
4. Click **OK** to save and apply changes.

---

## 3. Verify Go Installation

Run the following command to verify that Go is installed correctly:
```bash
go version
```
![Verify](confirming_go_installation.png){: width="700" height="300"}

---

## Tips

- Keep Go updated for the latest features and security patches.
- You can manage multiple Go versions with tools like [GVM](https://github.com/moovweb/gvm) for Linux/macOS or [GVM for Windows](https://github.com/coreybutler/nvm-windows).

If you have any Query fill free to ask me on linkedin. LinkedIn : [r3dw4n](https://linkedin.com/in/r3dw4n-48m3d)