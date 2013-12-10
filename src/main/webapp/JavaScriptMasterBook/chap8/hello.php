<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Hello, World!</title>
</head>
<body>
<form method="POST" action="hello.php">
이름：
<input type="text" name="name" size="15" />
<input type="submit" name="submit" value="송신" />
</form>
<?php
if($_REQUEST['submit'] != null) {
  sleep(3);
  print('안녕하세요,'.$_REQUEST['name'].'씨！');
}
?>
</body>
</html>