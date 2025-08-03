---
title: "DOM XSS in document.write sink using source location.search"
author: r3dw4n
date: 2025-08-03 00:00:00 +0600
categories: [PortSwigger]
tags: [xss,dxss,dom-xss,web-security-academy,portswigger,cross-site-scripting,dom,dom-based-xss]     # TAG names should always be lowercase
render_with_liquid: false
media_subpath: /images/2025-08-03-dom-xss-in-document-write-sink-using-source-location-search
image:
  path: portswigger_logo.png
---

> Web Security Academy **#3**
{: .prompt-warning }

## Lab: SDOM XSS in document.write sink using source location.search

### Lab Description

> Lab Level - *APPRENTICE*
{: .prompt-warning }

This lab contains a DOM-based cross-site scripting vulnerability in the **search query tracking functionality**. It uses the JavaScript `document.write` function, which writes data out to the page. The `document.write` function is called with data from `location.search`, which you can control using the website URL.

To solve this lab, perform a cross-site scripting attack that calls the `alert function`.

![01](1.png){: width="600" height="500" .rounded-10 }
_Lab Description_

---

### Step to Solve the Lab
- Access the lab by click on `ACCESS THE LAB`.
- After access the lab I saw a simple blog web page with a search functionality.
- As a normal user I visit the web page search for blogs or read any blog post by clicking **View Post** button.
- I can comment on a post but the lab description says that the vulnerability is in the search functionality.
- As a normal user I search for **R3DW4N** and see how the web server response with my injected text.
- I found that the page render our text in one place. But when I look at the source code there are two place where my Injected text apprise

![02](2.png){: width="600" height="500" .rounded-10 }
_Search Result_

- There are two place one is in the `<h1>` tag and the other is at the the source url inside a `<img>` tag.
- The `<h1>` have `'` quotation mark that means, It's hard to bypass.
- But when I look at the source code, I found in the `<img>` tag I can close the img tag `">` and inject our **xss** payload.

![03](3.png){: width="600" height="500" .rounded-10 }
_Reviewing the source code_


- So first I close the `<img>` tag and then Inject a simple HTML tag to confirm HTML Injection 

```html
"><i>R3DW4N</i>
```
![04](4.png){: width="600" height="500" .rounded-10 }
_Confirming HTML injection_

- I confirm that the web site is vulnerable for `HTML` Injection

<!-- ![05](5.png){: width="600" height="500" .rounded-10 }
_Confirming HTML injection_ -->

- After confirming HTML Injection, I inject a `xss` payload with the `<img>` closing part with an `alert()` function. The payload first close the `<img>` tag and then run my injected JavaScript code.

```html
"><script>alert("R3DW4N")</script>
```
> Congratulations, you solved the lab!
{: .prompt-tip }

![05](5.png){: width="600" height="500" .rounded-10 }
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
