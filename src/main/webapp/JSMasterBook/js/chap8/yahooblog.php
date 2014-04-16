<?php
header('Content-Type: text/xml;charset=UTF-8');
$params = array(
	'appid'  => '<Application ID>',
        'query'  => $_REQUEST['keywd'],
	'results'=> 10
);
$url = 'http://search.yahooapis.jp/BlogSearchService/V1/blogSearch?'.http_build_query($params);
print(file_get_contents($url));
