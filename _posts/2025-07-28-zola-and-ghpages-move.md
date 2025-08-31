---
layout: post
title: "Moving to Zola and GitHub Pages"
date: 2025-07-28
description: "Moving to a Zola-powered Site"
categories: meta
tags: [meta, zola, blogging, github, privacy, ai, vultr]
---

This site (laydros.net) has taken many forms over the years. It's been hosted on the wonderful [Super Dimensional Fortress](https://sdf.org), on a [Debian](https://www.debian.org) box at my house, on the sadly now-defunct devio.us, later on Linode, and eventually on [Vultr](https://www.vultr.com) when I was set on using OpenBSD again.

Now I'm trying something different—not because it's better, but because I'm lazy...

<!--more-->

I considered leaving Vultr back when they pulled [some nonsense][stupid-vultr], but they walked it back, and I didn't follow through. Lately though, for mostly unrelated reasons, I've finally decided to move the site.

I've been into open source my whole adult life, and my concern for privacy grew sharply after the Snowden revelations. That concern deepened in 2020 when I heard an [episode][podep] of the (now sadly defunct) [Privacy and Security Podcast][pod] that laid out just how much data Apple collects. I already knew it in theory, but hearing it spelled out like that was jarring.

That kicked off a deeper effort to reduce my online footprint and double down on open source and self-hosted tools. I still bounced between Mac and Linux, but avoided most of the big platforms.

## The AI Influence

Then came the recent wave of so-called "AI." There's plenty to criticize, but I haven't been this excited about new tools since smartphones settled into their current form. That excitement has softened my hard lines on privacy and hosting.

After flirting with self-hosting my git repos, I eventually settled on [sourcehut](https://sr.ht), which I still recommend. But now, the convenience of telling [ChatGPT Codex](https://chatgpt.com/codex) to tweak a repo on GitHub while I'm heading out the door—and having it done by the time I get home—is hard to beat.

So I moved my site to GitHub Pages and decided to finally use a site generator. I'm also done hand-editing HTML for the smallest change, so a static site generator made sense.

## Why Zola?

I spent about five minutes researching static site generators—by which I mean I asked ChatGPT and Claude what might work for me. Even though I've accepted Microsoft-run GitHub for now, I still want tools I can mostly understand. So I wanted something simple.

[Jekyll](https://jekyllrb.com/) is the GitHub Pages default. It's fine, but it's Ruby-based, and I never really got into Ruby. I respect the language, but it came along at a time when I wasn't chasing new tech. Now it feels like a dead end.

I also looked at [Hugo](https://gohugo.io/). I've played with it a bit and I like [Go](https://go.dev/). Hugo is powerful, but not quite the lightweight setup I was looking for.

Then I came across [Zola](https://www.getzola.org/). It's written in [Rust](https://www.rust-lang.org/), which I'm curious about, and it's designed to be a simple, single-binary tool. That appealed to me immediately.

After a few rounds of trial and error with the Claude and Gemini CLI tools, I had the site mostly converted. Zola itself is solid. It doesn't try to do too much but handles the basics well. The tricky part has been getting GitHub CI to build it consistently. I've changed my Codex environment setup three times already and still hit the occasional snag.

[pod]: https://inteltechniques.com/podcast.html
[podep]: https://inteltechniques.com/blog/2019/03/01/the-privacy-security-osint-show-episode-113/
[stupid-vultr]: https://arstechnica.com/tech-policy/2024/03/after-overreaching-tos-angers-users-cloud-provider-vultr-backs-off/