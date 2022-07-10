<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/phpmailer/src/Exception.php';
require '../vendor/phpmailer/src/PHPMailer.php';
require '../vendor/phpmailer/src/SMTP.php';


if(isset($_POST)){

	$mail = new PHPMailer;
	$mail->CharSet = 'UTF-8';

	// Настройки SMTP
	$mail->isSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail->AuthType = 'LOGIN';
	$mail->SMTPAuth = true;
	$mail->SMTPDebug = 0;
	$mail->Port = 587;
	$mail->Username = 'dmitrysurtsukov@gmail.com';
	$mail->Password = 'Stepen2020';	


	$mail->SMTPSecure = 'tls'; 

	// От кого
	$mail->setFrom('dmitrysurtsukov@gmail.com', 'Shrimp');		

	// Кому
	$mail->addAddress('info@shrimp.gg');

	// Тема письма
	$mail->Subject = 'Новая заявка с сайта';

	if(isset($_POST['name'])){
		$name = '<br><b>Имя: </b>' . $_POST['name'];
	}

	if(isset($_POST['name-company'])){
		$namec = '<br><b>Название компании: </b>' . $_POST['name-company'];
	}

	if(isset($_POST['city'])){
		$city = '<br><b>Город: </b>' . $_POST['city'];
	}

	if(isset($_POST['email'])){
		$email = '<br><b>Email: </b>' . $_POST['email'];
	}

	if(isset($_POST['tel'])){
		$tel = '<br><b>Телефон: </b>' . $_POST['tel'];
	}

	if(isset($_POST['website'])){
		$web = '<br><b>Сайт: </b>' . $_POST['website'];
	}

	if(isset($_POST['budget'])){
		$budget = '<br><b>Бюджет:</b>' . $_POST['budget'];
	}

	if(isset($_POST['phone'])){
		$phone = '<br><b>Телефон:</b>' . $_POST['phone'];
	}

	if(isset($_POST['solution'])){
		$solution = '<br><b>Готовое решение:</b>' . $_POST['solution'];
	}


	if(isset($_POST['checkbox'])){
		$checkboxes = $_POST['checkbox'];
		$control = '<br>Ручное управление: <br><ul>';

		foreach($checkboxes as $item){
			$control .= '<li>' . $item . '</li>';
		}

		$control .= '</ul>';
	}

	// Тело письма
	$message = $name . $email . $tel . $namec . $city . $web . $control . $solution;

	$mail->msgHTML($message);

	if(isset($_POST['short'])){
		$mail->Subject = 'Обратный звонок с сайта (футер)';
		$message = "Был заказан обратный звонок<br>Номер телефона: <b>{$_POST['tel']}</b>";	

		$mail->msgHTML($message);
	}

	if(isset($_POST['popup'])){
		$mail->Subject = 'Новая заявка с сайта (попап)';
		$message = "Новая заявка с сайта $name $email $phone";	

		$mail->msgHTML($message);
	}

	// Приложение
	//$mail->addAttachment(__DIR__ . '/image.jpg');
	
	if($mail->send()){
		echo 'Сообщение отправлено успешно';
	}
	
	else{
		echo 'Ошибка при отправке сообщения';
	}
}
