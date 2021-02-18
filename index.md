Develop-Soft
=======
Архив полезного с форума будет здесь


<table class="table table-bordered"><tbody><tr><td><pre><code>procedure Request(Sender: TObject; var ARequest: TFPHTTPConnectionRequest; var AResponse : TFPHTTPConnectionResponse);<br>begin<br>  if ARequest.URL = '/' then<br>  begin<br>  AResponse.Code := 302;<br>  if UserAuth then<br>  AResponse.Location := '/index' else<br>  AResponse.Location := '/login';<br>  end;<br>  UserAuth := true;<br><br><br>  AResponse.SendContent;<br>end;   </code></pre><br></td></tr><tr><td><br></td></tr><tr><td><br></td></tr><tr><td><br></td></tr></tbody></table><p><br></p>
