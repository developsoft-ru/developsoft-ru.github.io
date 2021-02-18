Develop-Soft
=======
Архив полезного с форума будет здесь


<p><br></p><pre><code>procedure Form_Create;<br>begin<br> WS:=THTTPServer.Create;<br> WS.IOTimeout:=1000;<br> WS.OnRequest := @Request;<br> WS.Start;<br>end;  </code></pre>

```javascript
var hello = function () {
    // say hello
    alert('Hello world!');
}
```
