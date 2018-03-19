<?php 
    Header('Content-Type: application/json;');

    $query = "access_token=6022023202.0f9b9fd.5310f007b81e4ee3a4ae6f842b245fa8";
    $url = "https://api.instagram.com/v1/users/self/media/recent?";
    $ch = curl_init($url.$query);

    curl_setopt(
        $ch,
        CURLOPT_HTTPHEADER,
        array('Content-Type: application/json')
    );

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");

    $response = curl_exec($ch);

    if($errno = curl_errno($ch)) {
        $error_message = curl_strerror($errno);
        echo "cURL error ({$errno}):\n {$error_message}";
    }
    
    curl_close($ch);    

    echo $response;
    die()
?>