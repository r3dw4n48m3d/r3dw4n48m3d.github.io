---
title: "Stored XSS into HTML context with nothing encoded"
author: r3dw4n
date: 2025-08-01 00:00:00 +0600
categories: [PortSwigger]
tags: [xss,sxss,stored-xss,web-security-academy,portswigger,cross-site-scripting]     # TAG names should always be lowercase
render_with_liquid: false
media_subpath: /images/2025-08-01-stored-xss-into-html-context-with-nothing-encoded
image:
  path: portswigger_logo.png
---

> Web Security Academy **#2**
{: .prompt-warning }

## Lab: Stored XSS into HTML context with nothing encoded

### Lab Description

> Lab Level - *APPRENTICE*
{: .prompt-warning }

This lab contains a stored cross-site scripting vulnerability in the comment functionality.

To solve this lab, submit a comment that calls the `alert` function when the blog post is viewed.

![01](1.png){: width="600" height="500" .rounded-10 }
_Lab Description_

---

### Step to Solve the Lab
- Access the lab by click on `ACCESS THE LAB`.
- After access the lab I saw a simple blog web page with some posts.
- As a normal user I visit one of the blog post and see there is a comment box.
- I post one comment and see how it take my input.

![02](2.png){: width="600" height="500" .rounded-10 }
_Submitting a comment_

- After that I saw the source code. I found there are two place where my injected text is reflected.

![03](3.png){: width="600" height="500" .rounded-10 }
_Reviewing the source code_


- After conforming two place I inject a simple `html` tag in the comment box. Here is the payload : 

```html
<i>R3DW4N</i>
```
![04](4.png){: width="600" height="500" .rounded-10 }
_Inject HTML Tag_

- I confirm `HTML` Injection

![05](5.png){: width="600" height="500" .rounded-10 }
_Confirming HTML injection_

- After confirming HTML Injection, I inject a simple `xss` payload in the comment box with an `alert` function.

```html
<script>alert("R3DW4N")</script>
```
> Congratulations, you solved the lab!
{: .prompt-tip }

- Now every time a user visit the blog post that have the xss payload injected they will saw an `alert` popup. To confirm this I visit the same page that I inject xss payload and saw an alert with `R3DW4N` text.

![06](6.png){: width="600" height="500" .rounded-10 }
_Confirming XSS_

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
