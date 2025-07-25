+++
title = "ThinkPad Notes"
template = "page.html"
+++

# ThinkPad Specific

## Battery Threshold

In Windows use Lenovo Vantage to set maximum battery at 80% to preserve battery life.

In Linux write to `/sys/class/power_supply/BAT0/charge_stop_threshold` and `/sys/class/power_supply/BAT0/charge_start_threshold`

Can also use TLP with the tp-smapi kernel module (tp-smapi-dkms package in debian, for example)

---

You can let tlp take care of that for you like so:

```bash
~ ❯❯❯ egrep "BAT[0,1]" /etc/tlp.conf
# auto = mid on BAT, high on AC.
START_CHARGE_THRESH_BAT0=75
STOP_CHARGE_THRESH_BAT0=80
START_CHARGE_THRESH_BAT1=75
STOP_CHARGE_THRESH_BAT1=80

~ ❯❯❯ sudo systemctl restart tlp
   egrep "BAT[0,1]" /etc/tlp.conf
```

Works like a charm. I put the TLP config in /etc/tlp.d instead though.

## ThinkPad TrackPoint

Edit the file `/etc/tmpfiles.d/tpoint.conf`

Add the lines:

```
w /sys/devices/platform/i8042/serio1/speed - - - - 255
w /sys/devices/platform/i8042/serio1/sensitivity - - - - 255
w /sys/devices/platform/i8042/serio1/inertia - - - - 6
w /sys/devices/platform/i8042/serio1/press_to_select - - - - 0
```

May need to use `/sys/devices/platform/i8042/serio1/serio2` instead

To make changes take effect before next reboot:

```bash
sudo systemd-tmpfiles --prefix=/sys --create
```