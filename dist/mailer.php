require("class.phpmailer.php");
$mail = new PHPMailer();

$name = $_POST['name'];
$email = $_POST['email'];
$device = $_POST['device'];
$user_message = $_POST['message'];

//Luego tenemos que iniciar la validación por SMTP:
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Host = "smtp.gmail.com"; // SMTP a utilizar. Por ej. smtp.elserver.com
$mail->Username = "pablo@pyro.cl"; // Correo completo a utilizar
$mail->Password = "canela00"; // Contraseña
$mail->Port = 25; // Puerto a utilizar

//Con estas pocas líneas iniciamos una conexión con el SMTP. Lo que ahora deberíamos hacer, es configurar el mensaje a enviar, el //From, etc.
$mail->From = "pablo@pyro.cl"; // Desde donde enviamos (Para mostrar)
$mail->FromName = "Consulta Mac Garage";

//Estas dos líneas, cumplirían la función de encabezado (En mail() usado de esta forma: “From: Nombre <correo@dominio.com>”) de //correo.
$mail->AddAddress("nettox@gmail.com"); // Esta es la dirección a donde enviamos
$mail->IsHTML(false); // El correo se envía como HTML
$mail->Subject = Consulta Mac Garage; // Este es el titulo del email.
$body =  "Nombre: " . $name . "\n\n" .
  "Email Address: " . $email . "\n\n" .
  "Dispositivo: " . $device . "\n\n" .
  "Mensaje: " . $user_message ;
$mail->Body = $body; // Mensaje a enviar
$exito = $mail->Send(); // Envía el correo.
echo 
    '<script type="text/javascript">
      alert("Mensaje enviado");
      location.replace("https://www.macgarage.cl/");

    </script>';