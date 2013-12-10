<?php
header('Content-Type: application/json;charset=UTF-8');
$params = array(
  'appid'  => '<Application ID>',
  'query'  => $_REQUEST['keywd'],
  'results'=> 20
);
$url = 'http://search.yahooapis.jp/BlogSearchService/V1/blogSearch?'.http_build_query($params);
$doc = simplexml_load_string(file_get_contents($url));
print(json_encode($doc));
