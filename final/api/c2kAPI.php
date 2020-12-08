
<?php
  #handling GET request
  if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $celsius = $_GET["celsius"];

    #calculation
    if ($celsius != NULL) {
      $celsius = floatval($celsius);
      $kelvin = $celsius + 273.15;
      
      if ($kelvin != NULL) { #if Kelvin somehow comes out an empty result then there is a server error
        echo $kelvin;
      } else {
        //http_response_code(500);
        exit();
      }

    } else { #if the input for celsius is not a number, then it will result in a bad request
        http_response_code(400);
    }
  }

  #these other requests are not allowed
  else {
    http_response_code(405);
  }
?>