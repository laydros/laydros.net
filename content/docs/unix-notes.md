+++
title = "Unix Notes"
template = "page.html"
+++

# Random Unix/*nix Notes

There is a lot of stuff I end up wanting to refer to later. I'm putting some here.

**Related Pages:**
- [Firefox stuff](/docs/firefox/)
- [Thinkpad stuff](/docs/thinkpad/)
- [vi stuff](/docs/vi/)

## Set Caps as Ctrl

Doing it this way seems to work across the console and X:

Edit `/etc/default/keyboard` and set:
```
XKBOPTIONS=ctrl:nocaps
```

If you already have XKBOPTIONS set, append `ctrl:nocaps` to its existing value using a comma for separator, e.g.:
```
XKBOPTIONS="terminate:ctrl_alt_bksp,ctrl:nocaps"
```

Should be effective after next reboot or issuing the `setupcon` command.

## Debian

### Enable auto upgrades

Install unattended-upgrades package:
```bash
sudo apt install unattended-upgrades
```

To activate unattended-upgrades, you need the apt configuration stub `/etc/apt/apt.conf.d/20auto-upgrades` has the correct lines. This can be done automatically by running:
```bash
sudo dpkg-reconfigure -plow unattended-upgrades
```

Or to run it non-interactively:
```bash
echo unattended-upgrades unattended-upgrades/enable_auto_updates boolean true | debconf-set-selections
dpkg-reconfigure -f noninteractive unattended-upgrades
```

## Keychron F-Keys under Linux

- **Problem 1:** In wired mode the fn keys don't work correctly  
  Fix: Set `/sys/module/hid_apple/parameters/fnmode` to 0 or 2

- **Problem 2:** In bluetooth mode none of the keys work correctly  
  Fix: Set `/sys/module/hid_apple/parameters/fnmode` to 0

- **Command to use:**
  ```bash
  echo 0 | sudo tee /sys/modules/hid_apple/parameters/fnmode
  ```

### Making `/sys/module/hid_apple/parameters/fnmode` changes persistent

- Create a file `/etc/modprobe.d/hid_apple.conf` with content:
  ```
  options hid_apple fnmode=0
  ```

- After this run the following command:
  ```bash
  # Ubuntu:
  sudo update-initramfs -u
  
  # Arch:
  sudo mkinitcpio -P linux
  ```

## Merge or split PDF files

Install `poppler-tools` from package manager.

To concatenate first.pdf and second.pdf into full.pdf:
```bash
pdfunite first.pdf second.pdf full.pdf
```

To split a full.pdf into a pdf for each page:
```bash
pdfseparate full.pdf page-%d.pdf
```

## My tmux setup

Allows `mosh host -- tmux a`. Uses C-z
```bash
curl https://laydros.net/docs/conf/tmux.conf -o ~/.tmux.conf
```

## macOS

- OS X - pipe to `pbcopy` for clipboard
- OS X - sharing:  
  Create share points for afp, ftp and smb services.  
  A new utility on OS X Mountain Lion which lets you quickly share directories from the command line, e.g.:  
  `sudo sharing -a /Users/you/yourshare`

## Random Commands

```bash
# list directory sizes
$ du -sh *

# count all occurrences of a string in a directory
$ grep -roh lorem . | wc -w

# watch a remote log
$ ssh user@server "tail -f /var/log/apache2/error.log"

# Create directories a through z inside log/users/, creating any 
# parent directories that don't exist yet too.
$ mkdir -p log/users/{a..z}

# brace expansion example
$ mkdir -p drupal/sites/all/modules/{contrib,custom,patched,features}

# launch program and ditch so term can be closed
$ <command> & disown

# df with posix mode, don't make 80 columns wide
$ df -hP

cat <file> | tee output.txt | grep <term>

- grep -r -i somethingtosearchfor ./
- pgrep - search processes
- ngrep - monitor network activity
```

## Audio Conversion

### wav to flac

Create a flac with the same name:
```bash
$ flac inputfile.wav
```

Create an MP3:
```bash
$ ffmpeg -i inputfile.wav -acodec mp3 outputfile.mp3
```

Set bitrate with -ab:
```bash
$ ffmpeg -i inputfile.wav -acodec mp3 -ab 64k outputfile.mp3
```

## Splitting files

Split a file called largefile into 1 gigabyte pieces called split-xaa, split-xab, split-xac ...
```bash
$ split -b 1G verylargefile split
```

Join the splits back together:
```bash
$ cat split-xaa split-xab split-xac > rejoinedlargefile
```

Join the files together with brace expansion. Be mindful of filenames and order:
```bash
$ cat split-xa{a,b,c} > rejoinedlargefile
```

## Disable SSH access except for key

Update /etc/ssh/sshd_config with the following:
```
PermitRootLogin no
PasswordAuthentication no
ChallengeResponseAuthentication no
UsePAM no
```

Restart the service:
```bash
# debian, arch, other systemd
systemctl restart sshd

# OpenBSD
rcctl restart sshd
```

## OpenBSD

### Caps Lock as Control

```bash
# wsconsctl keyboard.map+="keysym Caps_Lock = Control_L"
```

To make this run at boot, add `keyboard.map+="keysym Caps_Lock = Control_L"` to /etc/wsconsctl.conf.

Still need to add the following to .xsession when you are using [xenocara](https://www.xenocara.org/):
```bash
setxkbmap -option 'ctrl:nocaps'
```

## fio - flexible io tester

fio is a tool for testing disk speed. It is probably easiest to use with the included job files in the [examples](https://github.com/axboe/fio/tree/master/examples) directory. You can also use `--showcmd=<jobfile>` to extract the commands from a job file. However here are a few sample commands:

```bash
# random write test
sudo fio --name=randwrite --ioengine=libaio --iodepth=1 --rw=randwrite --bs=4k --direct=0 --size=512M --numjobs=2 --runtime=240 --group_reporting

# random read test
sudo fio --name=randread --ioengine=libaio --iodepth=16 --rw=randread --bs=4k --direct=0 --size=512M --numjobs=4 --runtime=240 --group_reporting

# read write performance test
sudo fio --randrepeat=1 --ioengine=libaio --direct=1 --gtod_reduce=1 --name=test --filename=random_read_write.fio --bs=4k --iodepth=64 --size=4G --readwrite=randrw --rwmixread=75
```

The `ioengine` setting must be changed for different systems. The `libaio` engine is specific to Linux. On macOS you may want to use `psync` or `posixaio`.

Also consider hdparm, Bonnie++, and using dd to create a file with `if=/dev/zero`.

## rsync

```bash
/usr/local/bin/rsync --info=progress2 --modify-window=1 -rltvh --no-perms /var/run/importcopy/tmpdir/dev/da3p1/ /mnt/storpool/share
```

`rsync -essh -rtpvz` rocks. Really, there's nothing more to say. Learn it. Use it. Love it. Here's a good rsync anecdote: in my last job, I worked on a project that was doing daily (and sometimes more-than-once-per-day) builds of a 100 MB installer. Near the end of the release cycle, we were putting each daily build on a private web server for the client to download and test. Uploading the entire build took over a hour on my capped DSL line. It turns out that the fastest way to do this is to ssh into the server, duplicate yesterday's build to a file with today's date, then rsync today's build up to the server. rsync magically figures out which parts of the installer have changed (usually not more than a few KB) and synchronizes the build in under a minute. I have no idea how it does that. I read once that it was somebody's PhD project. Thank God for smart people.

## Gnome taskbar icon duplication

If Gnome doesn't recognize an application, it will spawn a new icon for every window instead of collapsing them into the app icon.

First find the window class by running:
```bash
xprop WM_CLASS
```

This creates a crosshair, click on the window and it will list a window class. In the .desktop file for the program add:
```
StartupWMClass=st-256-color
```
replacing 'st-256-color' with the class you got from xprop.

## Git

### Updating a fork from upstream

**From: [SO](https://stackoverflow.com/questions/7244321/how-do-i-update-a-github-forked-repository)**

In your local clone of your forked repository, you can add the original GitHub repository as a "remote". ("Remotes" are like nicknames for the URLs of repositories - `origin` is one, for example.) Then you can fetch all the branches from that upstream repository, and rebase your work to continue working on the upstream version. In terms of commands that might look like:

```bash
# Add the remote, call it "upstream":
git remote add upstream https://github.com/whoever/whatever.git

# Fetch all the branches of that remote into remote-tracking branches,
# such as upstream/master:
git fetch upstream

# Make sure that you're on your master branch:
git checkout master

# Rewrite your master branch so that any commits of yours that
# aren't already in upstream/master are replayed on top of that
# other branch:
git rebase upstream/master
```

If you don't want to rewrite the history of your master branch, (for example because other people may have cloned it) then you should replace the last command with `git merge upstream/master`. However, for making further pull requests that are as clean as possible, it's probably better to rebase.

---

If you've rebased your branch onto `upstream/master` you may need to force the push in order to push it to your own forked repository on GitHub. You'd do that with:

```bash
$ git push -f origin master
```

You only need to use the `-f` the first time after you've rebased.

### Shallow clone for large repo

With the depth parameter as:
```bash
$ git clone --depth=1 https://github.com/mozilla/gecko-dev
```

Once you have shallow clone, you can deepen it. To fetch 100 commits use:
```bash
$ git fetch --depth=100
```

or if you want to get all commits then simply use:
```bash
$ git fetch --unshallow
```

and that would fetch all the commits and make your repo similar to what you do in the initial place like using git clone simply.

## Emacs

### Directly launching emacs to a particular mode

Use the command:
```bash
$ emacsclient -c -a ' ' --eval '(ibuffer)'
```
replacing "ibuffer" with something like "mu4e," "elfeed", "eshell," or "dired nil"

## KVM and virsh

### Convert ova to use with KVM

From [here](https://wiki.hackzine.org/sysadmin/kvm-import-ova.html):

```bash
# untar the archive 
% tar xvf some-vm.ova

# check that qemu-img supports required image types
% qemu-img -h | tail -n1

# convert image to qcow2
% qemu-img convert -O qcow2 some-vm-disk1.vmdk some-vm.qcow2
```

Use the new file as the disk for your VM. Check some-vm.ovf for information on settings for the VM.