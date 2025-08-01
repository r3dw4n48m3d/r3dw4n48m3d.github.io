---
title: "Reflected XSS into HTML context with nothing encoded"
author: r3dw4n
date: 2025-07-29 00:00:00 +0600
categories: [PortSwigger]
tags: [xss,rxss,reflected-xss,web-security-academy,portswigger,cross-site-scripting]     # TAG names should always be lowercase
render_with_liquid: false
media_subpath: /images/2025_07_27_reflected_xss_into_html_context_with_nothing_encoded
image:
  path: portswigger_logo.png
---

> Web Security Academy **#1**
{: .prompt-warning }

## Lab: Reflected XSS into HTML context with nothing encoded

### Lab Description

> Lab Level - *APPRENTICE*
{: .prompt-warning }

This lab contains a simple reflected cross-site scripting vulnerability in the search functionality.

To solve the lab, perform a cross-site scripting attack that calls the `alert` function.

![01](1.png){: width="600" height="500" .rounded-10 }
_Lab Description_

### Step to Solve the Lab
- Access the lab by click on `ACCESS THE LAB`.
- After access the lab you will see a simple blog web page with a search functionality, also some posts
- As a normal user you can search for any blog post in the search bar.
- To solve the lab first inject some simple `HTML` and see if the `HTML` is reflected as a HTML tag or the web server sanitized the payload.
- I inject a simple `<i>` tag and it reflected as a `HTML` tag.

```html
<i>R3DW4N</i>
```
![02](2.png){: width="600" height="500" .rounded-10 }
_Confirming HTML Injection_

- I confirm that the website is not able to sanitized `HTML` codes.
- Now I inject a simple Cross Site Scripting Payload

```html
<script>alert("R3DW4N")</script>
```

![03](3.png){: width="600" height="500" .rounded-10 }
_Conforming Cross Site Scripting and Solve the lab_

> Congratulations, you solved the lab!.
{: .prompt-tip }

- Here is the source code

![04](4.png){: width="600" height="500" .rounded-10 }
_Source code_

And that's it for this write-ups. If you want to connect with me, here are my social media links

- [LinkedIn](https://www.linkedin.com/in/r3dw4n-48m3d)
- [Twitter](https://x.com/r3dw4n48m3d) 
- [Instagram](https://www.instagram.com/redwan_ahmed_ridoy)
- [Facebook](https://www.facebook.com/0xr3dw4n)
- [GitHub](https://github.com/r3dw4n48m3d)

I create a website where you can find more Bug Bounty Related Write-Ups. Here is the website link : [Hacker-Write-Ups](https://hacker-writeups.github.io)

Also I want to create a community where you can communicate with other hackers and much more fun stuff : [We-Are-Anonymous](https://t.me/weareanonymousbd)
 
> Assalamu alaikum wa rahmatullah.
{: .prompt-tip }
