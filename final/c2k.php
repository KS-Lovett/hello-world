<!DOCTYPE html>
<html>
    <!-- This code was modified from  https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_temp_converter_celsius_to_kelvin  
-->
<meta name="Earnest T. Lovett" content="Calculator">
<title>C2K Converter</title>
<link rel="stylesheet" href="skeleton2.css">
<body>
<h2>Celsius to Kelvin</h2>
<p>Type a value in the Celsius field to convert the value to Kelvin:</p>

<?php
  if(isset($_GET["cel"])) {
    $celsius = $_GET["celsius"];
    $kelvin = $celsius + 273.15;
    
    if (is_nan($kelvin) == False) { //if Kelvin returns as NULL then we have a server issue
      echo $kelvin;
    } else {
      http_response_code(500);
    }
  
    if (is_nan($celsius) == TRUE){ // if anything besides a number is entered as Kelvin then it is a bad request
      http_response_code(400);
    }
  
  } else {
    echo "Temperature is not yet set.";
  }
?>


<p>
  <label>Celsius</label>
  <form action = "#" method = 'GET'>
    <!-- Original Code <input id="inputCelsius" type="number" placeholder="Celsius" oninput="temperatureConverter(this.value)" onchange="temperatureConverter(this.value)"> -->
    <input id="inputCelsius" type="number" placeholder="Celsius" name="celsius">
    <input type="submit" value="Submit" name="cel">
  </form>
</p>

<?php
  
?>

<!-- <p>Kelvin: <span id="outputKelvin"></span></p>   Original Output-->
<p>Kelvin: <?php echo $kelvin; ?></p>


<!-- <script>  The original JavaScript function
function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputKelvin").innerHTML=valNum+273.15;
}
</script> -->

</body>
</html>
