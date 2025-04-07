---
title: "Potswigger Path traversal topic with All Labs"
author: r3dw4n
date: 2025-04-05 00:00:00 +0600
categories: [PortSwigger]
tags: [lab,labsolving,portswigger,path-traversal, path, traversal]     # TAG names should always be lowercase
render_with_liquid: false
media_subpath: /images/portswigger-file-path-traversal-all-lab
image:
  path: portswigger-logo.png
---

You can access the topic by clicking the image below.👇

[![Portswigger Lab Link](directory-traversal.svg){: width="700" height="500" .shadow}](https://portswigger.net/web-security/file-path-traversal){: .center }

First Read all the topic and then try to solve those lab by yourself. If you stuck then come back and get some help.

But Long in Sort, 

---

## Introduction

Path traversal or Directory traversal is a vulnerability that allow an attacker to access files that contain **Sensitive operating system files** or **Credentials for back-end systems** or **Application code and data** or other files that an attacker or any unauthorized user should not be able to access.

Here is one example

Suppose a website display an image using the following HTML Code : 

```html
<img src="/path?filename=image.jpg">
```

In the code 👆 the `path` URL take a parameter which is `filename` and the value is `image.jpg` which is an image. After sending the request to the server, the server returns with the contents of the specified file. That means the `filename` parameter take a **filename** and return the contant of the **file**. So if the website is vulnerable to **Path traversal or Directory traversal** then if we provide a filename that contain sensitive data, then the server return the contant of the specified file.

**This could leak sensitive files like:**

- `/etc/passwd` *(Linux user database)*

- `/etc/shadow` *(Linux password hashes)*

- `C:\Windows\win.ini` *(Windows system file)*

- Application configuration files (e.g., `config.yml`, `.env`).



For example we can request like this

```
https://vulnerable-domain/path?filename=../../../etc/passwd

```

Then the server return us `/etc/passwd` file's contant.

> Now Let's move to the labs.
{: .prompt-danger }

---

## Lab 01

**Name : Lab: File path traversal, simple case**

[![Portswigger Lab](lab-01-preview.png){: width="700" height="500" .shadow}](https://portswigger.net/web-security/file-path-traversal/lab-simple){: .center }


*Click on `ACCESS THE LAB` to access the lab*

### Lab Soving

In the lab, you can see some products. Click on one of the products's **View Details**. You will redirect to a page where you can see a picture. `Right Click` on the picture and open in a new tab.

![Portswigger Lab Step](lab-01-step-1.png){: width="500" height="500" .shadow}

After open the image in a new tab, the **URL** Should look like this

```
https://0a9e007d04355555555500e1003f.web-security-academy.net/image?filename=30.jpg
```

In the **URL** there is a `filename` parameter which contain a file name which is `30.jpg`. Replace the `30.jpg` to `/etc/passwd`. You will see *"No such file"*.

![Portswigger Lab Step](lab-01-step-2.png){: width="500" height="500" .shadow}

Now start to moveing level up in the directory structure untill you get you file's content. The final url should look like this 👇. This will be the path `../../../etc/passwd`

```
https://0a9e007d0433f02455555554cf00e1003f.web-security-academy.net/image?filename=../../../etc/passwd
```

After that you should see a image that is not load yet. 

![Portswigger Lab Step](lab-01-step-3.png){: width="500" height="500" .shadow}

But if you look at the lab's main page, You see that the lab is already solve. Then why the browser is not return the contant of `/etc/passwd` file??

![Portswigger Lab Solved](lab-01-solved.png){: width="500" height="500" .shadow}

> To see the file's contant, you need a proxy tool. I am using Burp-Suite. I request the same URL but I turn on my *intercept* and now I can see the content of `/etc/passwd` file.
{: .prompt-danger }

![Portswigger Lab Step](lab-01-step-4.png){: width="500" height="500" .shadow}

> And Congratulations you solve the lab. Now let's move on to the next lab.
{: .prompt-tip }

---

## Lab 02

**Name : Lab: File path traversal, traversal sequences blocked with absolute path bypass**

[![Portswigger Lab](lab-02-preview.png){: width="700" height="500" .shadow}](https://portswigger.net/web-security/file-path-traversal/lab-simple){: .center }


*Click on `ACCESS THE LAB` to access the lab*

### Lab Soving

In the lab, you can see some products. Click on one of the products's **View Details**. You will redirect to a page where you can see a picture. `Right Click` on the picture and open in a new tab. 

Again you wil see a `filename` parameter with a image name value. In the `filename` parameter's value change it to `/etc/passwd`. Final URL

```
https://0a9e007d0433f02455555554cf00e1003f.web-security-academy.net/image?filename=/etc/passwd
```

*This time we don't need any path traversal*

After that you should see a image that is not load yet. 

![Portswigger Lab Step](lab-02-step-3.png){: width="500" height="500" .shadow}

But if you look at the lab's main page, You see that the lab is already solve. Then why the browser is not return the contant of `/etc/passwd` file??

![Portswigger Lab Solved](lab-02-solved.png){: width="500" height="500" .shadow}

> To see the file's contant, you need a proxy tool. I am using Burp-Suite. I request the same URL but I turn on my *intercept* and now I can see the content of `/etc/passwd` file.
{: .prompt-danger }

![Portswigger Lab Step](lab-02-step-4.png){: width="700" height="500" .shadow}

> And Congratulations you solve the lab. Now let's move on to the next lab.
{: .prompt-tip }

---

## Lab 03

**Name : Lab: File path traversal, traversal sequences stripped non-recursively**

[![Portswigger Lab](lab-03-preview.png){: width="700" height="500" .shadow}](https://portswigger.net/web-security/file-path-traversal/lab-sequences-stripped-non-recursively){: .center }


*Click on `ACCESS THE LAB` to access the lab*

### Lab Soving

Again, In the lab, you can see some products. Click on one of the products's **View Details**. You will redirect to a page where you can see a picture.Before open the image this time open in your Burp-Suite and capture all request.Now `Right Click` on the picture and open in a new tab. 

Send that image loading request to repeter so that we can future play with it. 

![Portswigger Lab Step](lab-03-step-1.png){: width="500" height="500" .shadow}

Now change to file name to `/etc/passwd`. You will see **"No such file"**.

![Portswigger Lab Step](lab-03-step-2.png){: width="500" height="500" .shadow}

You can try path traversal like `../../../etc/passwd`. But I wouldn't work. Because the website sanitized user input. 

**So if the website sanitized `../` then we can use `....//` instade of `../`.**

If we use `....//`, what happend is, the website sanitized `../` but we still have `../` because there are 4 `.` and 2 `/`. So if the website sanitized 2 `.` and 1 `/` we still have 2 `.` and 1 `/`.

So let's try this.Here is the final path `....//....//....//etc/passwd`. The final URL should be look like this :

```
https://0a9e007d0433f02455555554cf00e1003f.web-security-academy.net/image?filename=....//....//....//etc/passwd
```

![Portswigger Lab Step](lab-03-step-2.png){: width="700" height="500" .shadow}

> And Congratulations you solve the lab. Now let's move on to the next lab.
{: .prompt-tip }

![Portswigger Lab Solved](lab-03-solved.png){: width="700" height="500" .shadow}

---

## Lab 04

**Name : Lab: File path traversal, traversal sequences stripped with superfluous URL-decode**

[![Portswigger Lab](lab-04-preview.png){: width="700" height="500" .shadow}](https://portswigger.net/web-security/file-path-traversal/lab-superfluous-url-decode){: .center }

*Click on `ACCESS THE LAB` to access the lab*

> Before start remember that sometimes there is some kind of sanitization. We can bypass this kind of sanitization by **URL encoding, or even double URL encoding**, the `../` characters.
{: .prompt-tip}

*New Let's move to the **Lab 04***

### Lab Solving

Do the same process. But why?? **Because we need a endpoint that fatch some data to ther server.** And if you look at the image url you will understand that the image is come to the server. That's why everytime we go with the image. You can go other endpoint that have a interaction with server and fatch some content from server.

---

Now back to the lab, capture the request when you access the image. Now try previous all method to retrieve `/etc/passwd` file. Like try `../../../etc/passwd` or try `....//....//....//etc/passwd`. I tried but nothing work. So let's **URL-encode** the path.

Here is before encoded path `../../../etc/passwd` and after encoded path `%2e%2e%2f%2e%2e%2f%2e%2e%2f%65%74%63%2f%70%61%73%73%77%64`. Let's try with this. If it work we don't need double encoding.

> I used Burp-Suite **Decoder** tab to encode 
{: .prompt-tip}

![Portswigger Lab Step](lab-04-step-1.png){: width="700" height="500" .shadow}

One time encode is not working. So let's double encode it. Here is the double encoded path value :

```
%25%32%65%25%32%65%25%32%66%25%32%65%25%32%65%25%32%66%25%32%65%25%32%65%25%32%66%25%36%35%25%37%34%25%36%33%25%32%66%25%37%30%25%36%31%25%37%33%25%37%33%25%37%37%25%36%34
```
![Portswigger Lab Step](lab-04-step-2.png){: width="700" height="500" .shadow}

> And Congratulations you solve the lab. Now let's move on to the next lab.
{: .prompt-tip }

![Portswigger Lab Solved](lab-03-solved.png){: width="700" height="500" .shadow}


---

## Lab 05

**Name : Lab: File path traversal, validation of start of path**

[![Portswigger Lab](lab-05-preview.png){: width="700" height="500" .shadow}](https://portswigger.net/web-security/file-path-traversal/lab-validate-start-of-path){: .center }

*Click on `ACCESS THE LAB` to access the lab*

### Lab Solving

Do the same thing. Access one of the image in a new tab. This time the URL is different. This time the url shows us full system path. Also that is a good indication that we don't need to bypass any security macanizum. So let's solve this lab.

> If you look carefully, the web server return the image contant, which is the last part of the URL
{: .prompt-tip}

Capture the request using Burp-Suite. Remove the image name and put path traversal payload. Here is the payload :

```
/var/www/images/../../../etc/passwd

```

Put the payload to `filename` parameter and send the request

![Portswigger Lab Solved](lab-05-step-1.png){: width="700" height="500" .shadow}

> And Congratulations you solve the lab. Now let's move on to the next lab.
{: .prompt-tip }

![Portswigger Lab Solved](lab-05-solved.png){: width="700" height="500" .shadow}

---

## Lab 06

**Name : Lab: File path traversal, validation of file extension with null byte bypass**

[![Portswigger Lab](lab-06-preview.png){: width="700" height="500" .shadow}](https://portswigger.net/web-security/file-path-traversal/lab-validate-file-extension-null-byte-bypass){: .center }

*Click on `ACCESS THE LAB` to access the lab*

### Lab Solving

> In this lab we are going to use [Null Byte](https://www.thehacker.recipes/web/inputs/null-byte-injection). 
{: .prompt-tip }

Again do the same thing. Find an endpoint that have a file parameter. I go with the previous method. `Right Click` on a image and open in a new tab. In the `filename` parameter put a normal payload `/etc/passwd` or `../../../etc/passwd` and see what happend. You will see `"No such file"`. 

To solve this lab I am going to use null byte at the end of the payload with a image extension. Thi is the final payload with null bytes : 

```
../../../etc/passwd%00.png
```

What happend in this payload is, the web server will terminate the path after null bytes. So the final request will look like this `../../../etc/passswd`. 

![Portswigger Lab](lab-06-step-1.png){: width="700" height="500" .shadow}

> And Congratulations you solve the lab. Now let's move on to the next lab.
{: .prompt-tip }

![Portswigger Lab Solved](lab-06-solved.png){: width="700" height="500" .shadow}

---

> That's it. Congratulations you have completed All the path traversal or directory traversal labs in Portswigger Academy. 
{: .prompt-tip }

---

## Summary

Here is a process to find path traversal vulnerability :

- Find an endpoint that have a file location or the endpoint interact with web server and fatch files or data from server. 
- Now try with some [Path Traversal Payloads](https://github.com/r3dw4n48m3d/WordLists/blob/main/Path%20Traversal/payloads.txt).
- First go with simpel payload like `/etc/passwd`.
- Then a little advance `../../../etc/passwd`.
- Then lettle more advance `....//....//....//etc/passwd`.
- Then try with encoding `%2e%2e%2f%2e%2e%2f%2e%2e%2f%65%74%63%2f%70%61%73%73%77%64`
- Then try double encoding `%25%32%65%25%32%65%25%32%66%25%32%65%25%32%65%25%32%66%25%32%65%25%32%65%25%32%66%25%36%35%25%37%34%25%36%33%25%32%66%25%37%30%25%36%31%25%37%33%25%37%33%25%37%37%25%36%34`
- Then try with null bytes `../../../etc/passwd%00.png`.

> Remember You have to be creative. Try something that no one ever tried.
{: .prompt-tip}

## Conclusion

Thanks for reading. You have any query fill free to message me [Here](https://r3dw4n48m3d.github.io/portfolio/contact.html). Fill free to connect me on [LinkedIn](https://linkedin.com/in/r3dw4n-48m3d). 

*Allah Hafej* 

> **Assalamu Alaikum**
{: .prompt-tip}
