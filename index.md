Develop-Soft
=======
Архив полезного с форума будет здесь


<p><br></p><pre><code>procedure Form_Create;<br>begin<br> WS:=THTTPServer.Create;<br> WS.IOTimeout:=1000;<br> WS.OnRequest := @Request;<br> WS.Start;<br>end;  </code></pre>

```var WS:THTTPServer;

UserAuth:boolean;



procedure Request(Sender: TObject; var ARequest: TFPHTTPConnectionRequest; var AResponse : TFPHTTPConnectionResponse);
begin
  if ARequest.URL = '/' then
  begin
  AResponse.Code := 302;
  if UserAuth then
  AResponse.Location := '/index' else
  AResponse.Location := '/login';
  end;
  UserAuth := true;


  AResponse.SendContent;
end;


procedure Form_Create;
begin
 WS:=THTTPServer.Create;
 WS.IOTimeout:=1000;
 WS.OnRequest := @Request;
 WS.Start;
end;

procedure Form_Destroy;
begin
 WS.Free;
end;
```
