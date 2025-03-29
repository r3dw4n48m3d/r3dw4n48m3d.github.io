---
title: "Lab : Stored XSS into HTML context with nothing encoded"
author: r3dw4n
date: 2025-03-30 00:00:00 +0600
categories: [PortSwigger]
tags: [lab,labsolving,portswigger,xss]     # TAG names should always be lowercase
render_with_liquid: false
media_subpath: /images/portswigger-lab-stored-xss-into-html-context-with-nothing-encoded
image:
  path: portswigger-logo.png
---

This lab is about **Stored XSS**. This lab contain a simple **Stored Cross Site Scripting** Vulnerability in the comment functionality. We just need to pop up an `alert` and the lab will be solved. So let's get start it.

[![Portswigger Room Link](lab_description.png){: width="700" height="500" .shadow}](https://portswigger.net/web-security/cross-site-scripting/stored/lab-html-context-nothing-encoded){: .center }

## Opening the lab

Click on **Access the lab** and the lab will be open in a new tab.

## Solving the Lab

Because the Vulnerability is in the **Comment Functionality** so first let's visit a post.

![Go Download Page](where_the_vulnerability_locate.png){: width="700" height="300"}

There is a comment form. You can fill the form as a normal user. I put all the information as a normal user but not the comment. Instead put a normal comment I put **XSS Payload**. Below is the payload : 

```html
<img src=x onerror=alert(1)>
```

![Go Download Page](put_payload.png){: width="700" height="200"}

You will see a pop up.

![Go Download Page](pop_up_alert.png){: width="700" height="300"}

And **Congratulations!!** You solve the lab.

![Go Download Page](lab_solved.png){: width="700" height="300"}

## Conclusion

Thanks for reading. You have any query fill free to message me [Here](https://r3dw4n48m3d.github.io/portfolio/contact.html). Fill free to connect me on [LinkedIn](https://linkedin.com/in/r3dw4n-48m3d). 

*Allah Hafej* 

**Assalamu Alaikum**