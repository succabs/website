---
title: "How I Built a New Website in Just a Few Hours"
description: "A simple walkthrough of how I created a fast and cheap static website for my DJ project — from picking a domain to publishing it online."
pubDate: 2025-11-19
heroImage: "../../assets/viivis_project.png"
heroImageAlt: "Image with website and buzzwords"
author: "Arttu Nikkilä"
tags: ["development"]
excerpt: "A simple walkthrough of how I created a fast and cheap static website for my DJ project — from picking a domain to publishing it online."
url: "/blog/how-i-built-a-website-in-hours"
---

Building a small website doesn’t have to be slow or expensive. I recently put together a separate page for my DJ hobby (I wrote about the DJ side of things [in another post](https://arttu.net/blog/why-and-how-i-started-my-dj-career/)), and the whole thing took only a few hours spread over two evenings. It’s a good example of how fast a static setup can be when you want something simple.

## Why a static site works for projects like this

If your site doesn’t need features like logins, forms, dashboards or anything that updates on its own, a static site is enough. It’s cheap, fast, reliable and easy to host. My portfolio and blog run the same way, and for this kind of use it’s the quickest route from idea to a live page.

## Picking a domain that actually works

The domain is the part most people overthink. You want something short, easy to remember and tied to the identity of the site.  
For the DJ page, I first considered **djviivakoodi.com** and **dj-koodi.com**. Then I checked **viivis.com**, a nickname I use with the DJ project. Six letters. Clean. Somehow still available.

I bought it through Porkbun, which has become my go-to because it’s simple and the prices stay low. With a small discount I found through Google, the domain cost **10.08 USD** for the first year. Roughly ten euros to have my own address online.

## Making the page

The page itself is as simple as it gets: a nostalgic, Matrix-style one-pager. I asked ChatGPT to generate the initial layout and HTML/CSS, then tweaked the text and visuals by hand. Nothing heavy, nothing complicated.

If you want something more modern with built-in features (OpenGraph tags, routing, content collections), a tool like **Astro** would speed things up even more. For this one, I wanted to do it old-school with plain HTML and CSS.

![Screenshot of viivis.com](../../assets/viivis_screenshot.png)

<p class="image-text">Screenshot of the site.</p>

## Hosting on GitHub Pages

I hosted the site on GitHub Pages, the same way I host this main site. For static pages it’s a perfect match — free, stable and quick to deploy. The only tradeoff is that the repository is public on free accounts, which is totally fine for a hobby page. But if you want to also host files that are hidden from public, I'd consider VPS. But it is not as easy and straightforward as GitHub Pages.

Pointing a Porkbun domain to GitHub Pages is a short process. Add the DNS records Porkbun gives you, wait for them to settle, and GitHub will take care of the rest.

## Connecting to Google Search Console

After I had the site initially set up, first thing after DNS settings on Porkbun and initial site on GitHub Pages, I went to Google Search Console and added viivis.com there. This step also needed me to add google site verification to DNS settings, but it is also an easy one. This way you can see how many times you appear on Google Search. I, of course, am not waiting for a large amount of visitors because it is a niche hobby site, but it is still fun to see the search queries your site appears with.

## Total cost and time

For one year online: **10.08 USD** one-time payment. No monthly fees. Additional years are something around **11 USD**, so if you think about it monthly, it's under one dollar per month.

The setup time wasn’t long either. I spent about two hours after work on the first evening choosing the domain, making the first version of the site and pushing it to GitHub. On the second evening the SSL had finished setting up, so I enabled HTTPS on GitHub Pages, added OpenGraph details and cleaned up the layout. That was it.

## Final thoughts

If you want a simple site up and running without spending a lot of time or money, this approach works well. Static sites load fast, are easy to maintain and give you full control. Whether it’s a hobby project, portfolio, landing page or something small you just want to publish quickly, the setup is straightforward and doesn’t lock you into anything.

Oh, and a link to the site I've talked about in this post? If you insist. Here we go: [viivis.com](https://arttu.net/blog/why-and-how-i-started-my-dj-career/).
