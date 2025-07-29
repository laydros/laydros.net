+++
title = "Setting up Zola blog"
date = "2025-07-28"
description = "Moving to a Zola-powered Site"
[taxonomies]
tags = ["meta", "zola", "blogging"]
+++

This site (laydros.net) has lived through a number of manifestations. Including at least being hosted at the wonderful [Super Dimensional Fortress](https://sdf.org), on a [Debian](https://www.debian.org) box at my house, I'm pretty sure for a while at the sadly defunct devio.us, later at linode, and then when I really wanted OpenBSD again, I moved to [vultr](https://www.vultr.com).

But now I'm trying something different, not because it's better, but because I'm lazy...

<!-- more -->

A while back vultr did some [stupid stuff][stupid-vultr], and I thought about leaving, but they walked back some of it, and I didn't make the effort. Now, for pretty much entirely different reasons, I am finally planning to pull my site from vultr.

For my entire adult life I have been interested in open source software, and increasingly concerned about privacy. After the Edward Snowdon revelations came out, I pulled back considerably. Then in 2020 I heard an [episode][podep] of the (now also sadly defunct) [Privacy And Security Podcast][pod] about how much data even Apple had about you. Even though I logically knew they could be keeping all that data, I didn't quite realize they still would.

This sent me down quite a path of trying to really reduce my online footprint, and stick even more heavily to truely open source and self hosted solutions. I would still swing between Mac and Linux for my personal computing, but I avoided a lot of things.

## The AI Influence

But then came along this recent batch of what they like to call "AI." There are lots of problems, but I'm more excited about the tools than I have been about anything in tech since smartphones settled into their current form. This has led my focus on privacy, open source, and self-hosting to slide quite a bit.

After fliring with self-hosting my git repos, I had mostly transitioned to using [sourcehut](https://sr.ht), which is an excellent service. But now I can just tell [ChatGPT Codex](https://chatgpt.com/codex) to make a change on a repo at Github before I leave the office to head home, and it's done by the time I get home.

So I've pulled my personal site to Github pages to take advantage of that. I was also interested in moving to a site generator because I was getting tired of hand-editing HTML.

## Why Zola?

So did 5 minutes of research on a static site generator. By which I mean asking ChatGPT or Claude about the options that would fit my case. Even if I'm accepting the Microsoft run GitHub, I still have a think for software I can mostly understand, so I wanted something simple.

The default for Github pages is the venerable [Jekyll](https://jekyllrb.com/). I don't think there is anything wrong with Jekyll, and I might find myself going back to it, but it's based in [Ruby](https://www.ruby-lang.org/en/). I have a lot of respect for the Ruby language, but it came along at a time I wasn't interested in keeping up with the new stuff, so I didn't catch the wave. And now it feel like a dead end.

I also considered [Hugo](https://gohugo.io/). I have messed with Hugo a little in the past, and while I haven't really learned [Go](https://go.dev/), I like it a lot. But Hugo is big and powerful and not quite the lightweight vibe I wanted.

So the next viable option that came to my attention was Zola. Zola is built in [Rust](https://www.rust-lang.org/), which I also haven't learned to a serious extent, but I'm very interested in. And Zola is designed to be a super-simple single-binary type tool. I like that a lot.

So after a few round with mostly Claude code CLI and Gemini CLI, I had my site largely converted to a Zola format, ready for Github pages. Zola itself seems pretty good so far. It doesn't do a ton, but it seems to handle the basics well. The downside has been Github CI and ChatGPT Codex aren't great with it. It took quite a bit of testing to make Github build it consistently, and changed my Codex environment setup 3 different ways so far, and I still occasionally get errors.

[pod]: https://inteltechniques.com/podcast.html
[podep]: https://inteltechniques.com/blog/2019/03/01/the-privacy-security-osint-show-episode-113/
[stupid-vultr]: https://arstechnica.com/tech-policy/2024/03/after-overreaching-tos-angers-users-cloud-provider-vultr-backs-off/
