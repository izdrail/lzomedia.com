---
title: HTML Tags You Might Not Know About
publishDate: 2024-05-24
img: https://i.imgur.com/98wN3R6.png
img_alt: How to structure a server-side application
description: |
Learn how to structure a server-side application for optimal performance and maintainability.
tags:
- Server-Side Application
- Laravel
- PHP
- Web Development
---
Hello Devs👋


In this post, I will share some new and helpful html tags which are added in HTML5 to write easy and fast code to create complex, dynamic, engaging, and effective websites. 


Lets get started🚀


## 


 dialog


➡ Now you can easily create dialog box or a popup window with `&lt;dialog&gt;` tag. It’s a great way to create custom modal dialogs without relying heavily on **JavaScript**.\





```
&lt;dialog

 id=

&quot;myDialog&quot;

&gt;


  &lt;p&gt;

This is a dialog box&lt;/p&gt;


  &lt;button

 onclick=

&quot;document.getElementById(&#039;myDialog&#039;).close()&quot;

&gt;

Close
  &lt;/button&gt;


&lt;/dialog&gt;


&lt;button

 onclick=

&quot;document.getElementById(&#039;myDialog&#039;).showModal()&quot;

&gt;

Open Dialog
&lt;/button&gt;



```


 Enter fullscreen mode
 


 Exit fullscreen mode
 





## 


 template


➡ The `&lt;template&gt;` tag is used as a container for holding client-side content that you don’t want to display when the page loads. This content can be cloned and inserted into the document using **JavaScript**.\





```
&lt;button

 onclick=

&quot;showContent()&quot;

&gt;

Show hidden content&lt;/button&gt;



&lt;template&gt;


  &lt;h2&gt;

Hello, This is Kiran&lt;/h2&gt;


  &lt;p&gt;

Thanks for reading this&lt;/p&gt;


&lt;/template&gt;



&lt;script&gt;


function

 showContent

()

 {


  let

 temp

 =

 document

.

getElementsByTagName

(

&quot;

template

&quot;

)[

0

];


  let

 clon

 =

 temp

.

content

.

cloneNode

(

true

);


  document

.

body

.

appendChild

(

clon

);


}


&lt;/script&gt;



```


 Enter fullscreen mode
 


 Exit fullscreen mode
 





## 


 picture


➡ By using `&lt;picture&gt;` tag you can define multiple sources for an image, now the browser choose the best one based on screen size, resolution. This is particularly useful for **responsive** design.\





```
&lt;picture&gt;


  &lt;source

 media=

&quot;(min-width:650px)&quot;

 srcset=

&quot;img\_pink\_flowers.jpg&quot;

&gt;


  &lt;source

 media=

&quot;(min-width:465px)&quot;

 srcset=

&quot;img\_white\_flower.jpg&quot;

&gt;


  &lt;img

 src=

&quot;img\_orange\_flowers.jpg&quot;

 alt=

&quot;Flowers&quot;

 style=

&quot;width:auto;&quot;

&gt;


&lt;/picture&gt;



```


 Enter fullscreen mode
 


 Exit fullscreen mode
 





## 


 meter


➡ The `&lt;meter&gt;` tag can be used for representing a scalar measurement within a known range, like disk usage or the relevance of a query result. It helps to **visually** display values within a range.\





```
&lt;label

 for=

&quot;diskUsage&quot;

&gt;

Disk Usage:&lt;/label&gt;


&lt;meter

 id=

&quot;diskUsage&quot;

 value=

&quot;0.6&quot;

&gt;

60%&lt;/meter&gt;



```


 Enter fullscreen mode
 


 Exit fullscreen mode
 





## 


 output


➡ The `&lt;output&gt;` tag represents the result of a calculation. It can be used with **JavaScript** to display the **result** of a calculation.\





```
&lt;form

 oninput=

&quot;result.value=parseInt(a.value)+parseInt(b.value)&quot;

&gt;


  &lt;input

 type=

&quot;number&quot;

 id=

&quot;a&quot;

 value=

&quot;50&quot;

&gt;

 +
  &lt;input

 type=

&quot;number&quot;

 id=

&quot;b&quot;

 value=

&quot;25&quot;

&gt;

 =
  &lt;output

 name=

&quot;result&quot;

 for=

&quot;a b&quot;

&gt;

75&lt;/output&gt;


&lt;/form&gt;



```


 Enter fullscreen mode
 


 Exit fullscreen mode
 





## 


 progress


➡ The `&lt;progress&gt;` tag represents the completion progress of a **task**, such as a download or file upload.\





```
&lt;label

 for=

&quot;fileProgress&quot;

&gt;

File upload progress:&lt;/label&gt;


&lt;progress

 id=

&quot;fileProgress&quot;

 value=

&quot;70&quot;

 max=

&quot;100&quot;

&gt;

70%&lt;/progress&gt;



```


 Enter fullscreen mode
 


 Exit fullscreen mode
 





## 


 mark


➡ The `&lt;mark&gt;` tag is used to highlight text. It’s particularly useful for search result pages where you want to **highlight** the matching text.\





```
&lt;p&gt;

The word &lt;mark&gt;

highlighted&lt;/mark&gt;

 is important.&lt;/p&gt;



```


 Enter fullscreen mode
 


 Exit fullscreen mode
 





## 


 abbr


➡ The `&lt;abbr&gt;` tag is used to define an abbreviation or acronym, providing a full **description** in the **title** attribute.\





```
&lt;p&gt;

I&#039;m a true&lt;abbr

 title=

&quot;Marvel Cinematic Universe&quot;

&gt;

MCU&lt;/abbr&gt;

fan.&lt;/p&gt;



```


 Enter fullscreen mode
 


 Exit fullscreen mode
 





## 


 time


➡ The `&lt;time&gt;` tag is used to represent dates, times, or durations. It’s useful for making your time-related data machine-readable.\





```
&lt;p&gt;

The concert starts at &lt;time

 datetime=

&quot;20:00&quot;

&gt;

8 PM&lt;/time&gt;

.&lt;/p&gt;



```


 Enter fullscreen mode
 


 Exit fullscreen mode
 





## 


 bdi


➡ The `&lt;bdi&gt;` tag is used to isolate a part of text that might be formatted in a different direction from other text outside it. It ensures that your web content remains **consistent** and readable, no matter what languages or text **directions** are involved.\





```
&lt;ul&gt;


  &lt;li&gt;

Product: &lt;bdi&gt;

ABC1234&lt;/bdi&gt;&lt;/li&gt;


  &lt;li&gt;

Product: &lt;bdi&gt;

مرحبا5678&lt;/bdi&gt;&lt;/li&gt;


&lt;/ul&gt;



```


 Enter fullscreen mode
 


 Exit fullscreen mode
 





## 


 wbr


➡ The `&lt;wbr&gt;` tag specifies where the text can break into a **new line**, if necessary. This is useful for long words or URLs.\





```
&lt;p&gt;

Thisisaverylongword&lt;wbr&gt;

thatmightneedbreaking.&lt;/p&gt;



```


 Enter fullscreen mode
 


 Exit fullscreen mode
 





## 


 main


➡ The `&lt;main&gt;` tag is used to specify the **main content** of the document. It should only be used once per page, and it excludes content that is repeated across documents like headers, footers, navigation, and sidebars.\





```
&lt;main&gt;


  &lt;h1&gt;

Welcome to my blog post&lt;/h1&gt;


  &lt;p&gt;

Today we will learn some new html tags&lt;/p&gt;


&lt;/main&gt;



```


 Enter fullscreen mode
 


 Exit fullscreen mode
 





## 


 figcaption


➡ The `&lt;figcaption&gt;` tag is used for providing a **caption** to the figure.\





```
&lt;figure&gt;


  &lt;img

 src=

&quot;Thanos.jpg&quot;

 alt=

&quot;Thanos image&quot;

&gt;


  &lt;figcaption&gt;

Thanos snapping his fingers&lt;/figcaption&gt;


&lt;/figure&gt;



```


 Enter fullscreen mode
 


 Exit fullscreen mode
 





That&#039;s it for this article.👍


Thank you for reading❤


Find Me on 👉 X
GitHub







