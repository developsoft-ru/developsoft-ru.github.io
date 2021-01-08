Heading
=======

SubHeading
----------

  * list item 1
  * list item 2
  
```const
  SM_CXFULLSCREEN = 16;
  SM_CYFULLSCREEN = 17;

function GetSystemMetrics(nIndex:longint):longint;
external 'GetSystemMetrics@user32 stdcall';

function FullScreenHeight:longint;
begin
 result := GetSystemMetrics(SM_CYFULLSCREEN);
end;

function FullScreenWidth:longint;
begin
 result := GetSystemMetrics(SM_CXFULLSCREEN);
end;


// Пример:

procedure Form_Create;
begin
   debug(FullScreenWidth); // максимальная ширина рабочей области экрана
   debug(FullScreenHeight) // максимальная высота рабочей области экрана (без панели задач)
end;   ```
  
```javascript
var hello = function () {
    // say hello
    alert('Hello world!');
}
```

  This is a hyperlink to [Google](http://google.com).

  Images are like hyperlinks, but with an exclamation mark in front of them:
  ![](http://placekitten.com/g/250/250)
