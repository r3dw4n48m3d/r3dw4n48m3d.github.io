---
title: "How to Install Go and Set Path for Global Accessibility in Linux"
author: r3dw4n
date: 2025-07-15 00:00:00 +0600
categories: [Blogs]
tags: [go,blogs,go-lan,installation]     # TAG names should always be lowercase
render_with_liquid: false
media_subpath: /images/how_to_install_go_language_and_set_path_for_tools_in_linux
image:
  path: go_logo.png
---

To install **Go (Golang)** and set up the environment so that tools like `subfinder`,`nuclei` etc. work properly, follow these step-by-step instructions.

## ✅ 1. Download and Install Go
### 🔹 For Linux / WSL / Kali:

```bash
# Remove any existing Go installation
sudo rm -rf /usr/local/go

# Download the latest version of Go (change version if needed)
wget https://go.dev/dl/go1.22.2.linux-amd64.tar.gz

# Extract it to /usr/local
sudo tar -C /usr/local -xzf go1.22.2.linux-amd64.tar.gz
```

## ✅ 2. Set Up Go Environment Variables
### Edit your shell profile file:
If you use **bash**, edit:

```bash
nano ~/.bashrc
```
If you use **zsh**, edit:

```bash
nano ~/.zshrc
```
### Add the following at the bottom:
```bash
export PATH=$PATH:/usr/local/go/bin
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin
```
### Apply changes:
```bash
source ~/.bashrc  # or source ~/.zshrc
```

## You can find out which shell you're using with any of the following commands:
### ✅ Method 1: Check current shell in use

```bash
echo $SHELL
```
- This shows your default login shell (e.g., `/bin/bash`, `/bin/zsh`).

### ✅ Method 2: Check your active shell process

```bash
ps -p $$
```
- This shows the current shell process you’re actively using.
- Output example:
```css
PID TTY          TIME CMD
1234 pts/0    00:00:00 bash
```
### ✅ Method 3: Using echo $0
```bash
echo $0
```
- It may return:
    - `bash`
    - `zsh`
    - `sh` (for minimal POSIX shell)
    - `-bash` (if it's a login shell)

If you need to switch to bash or zsh, just run:
```bash
bash   # Switch to bash
zsh    # Switch to zsh (if installed)
```

## ✅ 3. Verify Installation
```bash
go version
```
### Expected output:
```bash
go version go1.22.2 linux/amd64
```
### It will be installed at:
```bash
~/go/bin/subfinder
```
### So now you can just run:
```bash
subfinder -h
```

## ✅ 5. (Optional) Check Go Paths
```bash
echo $GOPATH
echo $PATH
```
### You should see something like:
```ruby
/home/youruser/go
...:/usr/local/go/bin:/home/youruser/go/bin
```

And that's it for this article. Hope you like it. 

**Happy Learning and Keep Hacking.**