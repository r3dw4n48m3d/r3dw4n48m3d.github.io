---
title: "Reflected XSS into HTML context with nothing encoded"
author: r3dw4n
date: 2025-03-23 00:00:00 +0600
categories: [PortSwigger]
tags: [lab,labsolving,portswigger,xss]     # TAG names should always be lowercase
render_with_liquid: false
media_subpath: /images/reflected-xss-into-html-context-with-nothing-encoded
image:
  path: portswigger-logo.png
---

This lab is about **XSS** Also known as **Cross Site Scripting**. This lab contain a simple **RXSS** or **Reflected Cross Site Scripting** Vulnerability in the search functionality. We just need to pop up an `alert` and the lab will be solved. So let's get start it.

[![Portswigger Room Link](lab_preview.png){: width="700" height="500" .shadow}](https://portswigger.net/web-security/cross-site-scripting/reflected/lab-html-context-nothing-encoded){: .center }

## Opening the lab

Click on **Access the lab** and the lab will be open in a new tab.

## Solving the Lab

### Step : 01

Visit as a normal user and search for **Something** and find where it reflected.

![Go Download Page](normal_search.png){: width="700" height="300"}

### Step : 02

Put a simple **JavaScript** Payload in the search input field and Search.

```html
<script>alert(1)</script>
```

![Go Download Page](put_payload.png){: width="700" height="300"}

### Step : 03

You will see a pop up.

![Go Download Page](alert_pop_up.png){: width="700" height="300"}

And **Congratulations!!** You solve the lab.

![Go Download Page](solving_the_lab.png){: width="700" height="300"}

## Conclusion

Thanks for reading. You have any query fill free to message me [Here](https://r3dw4n48m3d.github.io/portfolio/contact.html). Fill free to connect me on [LinkedIn](https://linkedin.com/in/r3dw4n-48m3d). 

*Allah Hafej* 

**Assalamu Alaikum**