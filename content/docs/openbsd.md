+++
title = "OpenBSD Notes"
template = "page.html"
+++

# Notes on OpenBSD Setup and Usage

There are a few things I do on any OpenBSD desktop, I'm collecting many of them here. This is borrowed from several sources including:

- [rgz.ee](https://rgz.ee/openbsd/install.html)
- [c0ffee.net](https://www.c0ffee.net/blog/openbsd-on-a-laptop)

## Set Caps as Ctrl

```bash
# wsconsctl keyboard.map+="keysym Caps_Lock = Control_L"
```

To make this run at boot, add `keyboard.map+="keysym Caps_Lock = Control_L"` to /etc/wsconsctl.conf.

Still need to add the following to .xsession when you are using [xenocara](https://www.xenocara.org/):

```bash
setxkbmap -option 'ctrl:nocaps'
```

## ThinkPad TrackPoint Scrolling

Enable middle button scrolling with the trackpoint

Add the following to .xsession:

```bash
xinput set-prop "/dev/wsmouse" "WS Pointer Wheel Emulation" 1
xinput set-prop "/dev/wsmouse" "WS Pointer Wheel Emulation Button" 2
xinput set-prop "/dev/wsmouse" "WS Pointer Wheel Emulation Axes" 6 7 4 5
```

## Disable X Console

By default xconsole is on the xenocara login screen and stays into X11

```bash
sed -i 's/xconsole/#xconsole/' /etc/X11/xenodm/Xsetup_0
echo 'xset b off' >> /etc/X11/xenodm/Xsetup_0
```

## Update fstab to add noatime

Update [fstab(5)](https://man.openbsd.org/fstab.5) to add *noatime*:

```bash
# cp /etc/fstab /etc/fstab.bak
# sed -i 's/rw/rw,softdep,noatime/' /etc/fstab
```

## Enable apmd

Enable [apmd(8)](https://man.openbsd.org/apmd.8):

For a laptop enable power management.

```bash
# rcctl enable apmd
# rcctl set apmd flags -A -z 7
# rcctl start apmd
ampd (ok)
```

To check current battery life run [apm(8)](https://man.openbsd.org/apm.8)

## User Settings

### Add your username to /etc/doas.conf

```bash
# echo 'permit persist keepenv username' > /etc/doas.conf
```

### Add your user to staff group

Add your user to the staff group. This group has higher resource limits in login.conf. You'll need to log out and back in for this change to take effect.

```bash
usermod -G staff YOUR_USERNAME
```

## Fix Screen Tearing (Intel only)

Pasted from [c0ffee.net](https://www.c0ffee.net/blog/openbsd-on-a-laptop#x11)

The default modesetting driver doesn't use vsync, so you'll get a lot of tearing when scrolling webpages or watching videos. If you have an Intel-based video chipset, you can switch to the `intel` driver to get smooth video.

Create the `/etc/X11/xorg.conf.d` directory:

```bash
mkdir /etc/X11/xorg.conf.d
```

Then, create `intel.conf` with the following contents:

```
Section "Device"
  Identifier "drm"
  Driver "intel"
  Option "TearFree" "true"
EndSection
```

Restart `xenodm` to restart the X server:

```bash
rcctl restart xenodm
```

## My tmux setup

Allows `mosh host -- tmux a`. Uses C-z

```bash
curl https://laydros.net/docs/conf/tmux.conf -o ~/.tmux.conf
```

## Disable SSH access except for key

Update /etc/ssh/sshd_config with the following:

```
PermitRootLogin no
PasswordAuthentication no
ChallengeResponseAuthentication no
UsePAM no
```

Then run:

```bash
rcctl restart sshd
```

## Updating

### Update/Patch System

Update the base system with [syspatch(8)](https://man.openbsd.org/OpenBSD-7.4/syspatch.8):

```bash
# syspatch
```

### Update Packages

Update packages with [pkg_add(1)](https://man.openbsd.org/OpenBSD-7.4/pkg_add(1)) -u:

```bash
# pkg_add -u
```

### Upgrade OpenBSD Version

First check the upgrade guide for the version you are upgrading too. Sometimes there are manual changes that must be done.

Then simply run [sysupgrade(8)](https://man.openbsd.org/OpenBSD-7.4/sysupgrade.8):

```bash
# sysupgrade
```

After the upgrade is complete, make sure to run [sysmerge(8)](https://man.openbsd.org/OpenBSD-7.4/sysmerge.8) in case any config files have changed:

```bash
# sysmerge
```