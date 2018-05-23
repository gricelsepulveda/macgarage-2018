<?php 
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $device = $_POST['device'];
  $user_message = $_POST['user_message'];
  $subject = "Nuevo contacto desde Macgarage.cl";
  $message =  "Nombre: " . $name . "\n\n" . 
              "Teléfono: " . $phone . "\n\n" .
              "Email Address: " . $email . "\n\n" .
              "Dispositivo: " . $device . "\n\n" .
              "Mensaje: " . $user_message ;

  $to = "contacto@macgarage.cl";
  $headers =  'From: ' . $name . '<' . $email . '>' .  "\n" .
              'Reply-To: ' . $email . "\n" .
              'X-Mailer: PHP/' . phpversion();
 
  mail($to, $subject, $message, $headers);
  echo 
    '<script type="text/javascript">
      alert("Mensaje enviado");
      location.replace("https://www.macgarage.cl/");

    </script>';
?>