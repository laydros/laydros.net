+++
title = "Firefox Notes"
template = "page.html"
+++

# Firefox Tweaks and Notes

## Use WebRender on Linux

Via [omgubuntu](https://www.omgubuntu.co.uk/2020/07/firefox-enable-webrender-linux)

Firefox WebRender will offload some work to the GPU. Potentially improving performance and battery life. As of 2020-09 this is not enabled by default on linux.

- Go to `about:config` in a new tab
- Search for gfx.webrender.all
- Set the value to `true` to enable WebRender

## Round Corners in Ubuntu

Via [omgubuntu](https://www.omgubuntu.co.uk/2020/04/fix-firefox-rounded-corners-gnome)

With the menubar disabled in Ubuntu, Firefox will show white points in the top corners.

- Open `about:config` in a new tab
- Type `mozilla.widget.use-argb-visuals` in the search field
- Check that `boolean` is selected
- Click the "+" button to add the preference setting
- Restart Firefox