<?php

  function getUrlContent($params){
    $envfile = file_get_contents('./.env');
    parse_str($envfile, $env);  

    $url = "https://www.omdbapi.com/";
    $apikey = "?apikey=" . $env["OMDBAPI_KEY"];
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url.$apikey.$params);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322)');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
    curl_setopt($ch, CURLOPT_TIMEOUT, 5);
    $data = curl_exec($ch);
    $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    unset($apikey);
    unset($envfile);
    unset($env);
    return ($httpcode>=200 && $httpcode<300) ? $data : false;
  }

  $uri = $_SERVER["REQUEST_URI"];
  $url_components = parse_url($uri);

  if(isset($url_components["query"])) {
    echo getUrlContent("&".$url_components["query"]) . PHP_EOL;
  } else {
    echo getUrlContent("") . PHP_EOL;
  }
?>