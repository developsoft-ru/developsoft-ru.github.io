Develop-Soft
=======
Архив полезного с форума будет здесь


<p><br></p><pre><code>procedure Form_Create;<br>begin<br> WS:=THTTPServer.Create;<br> WS.IOTimeout:=1000;<br> WS.OnRequest := @Request;<br> WS.Start;<br>end;  </code></pre>

<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Cras justo odio
    <span class="badge badge-primary badge-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Dapibus ac facilisis in
    <span class="badge badge-primary badge-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Morbi leo risus
    <span class="badge badge-primary badge-pill">1</span>
  </li>
</ul>
