<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "help@help-development.ru";
    $subject = "Новая заявка с формы";

    // Получаем данные из формы
    $fullname = htmlspecialchars($_POST["fullname"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $service = htmlspecialchars($_POST["service"]);
    $question = htmlspecialchars($_POST["question"]);

    // Создаем объект PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Настройки сервера
        $mail->isSMTP();
        $mail->Host       = 'smtp.help-development.ru'; // Укажите SMTP-сервер
        $mail->SMTPAuth   = true;
        $mail->Username   = 'help@help-development.ru'; // Укажите ваш email
        $mail->Password   = ''; // Укажите пароль
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // От кого
        $mail->setFrom($email, $fullname);
        $mail->addAddress($to);

        // Тело письма в формате HTML
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = "
            <html>
            <head>
                <title>$subject</title>
            </head>
            <body>
                <h2>Детали заявки:</h2>
                <p><strong>ФИО:</strong> $fullname</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Телефон:</strong> $phone</p>
                <p><strong>Выбранная услуга:</strong> $service</p>
                <p><strong>Вопрос:</strong> $question</p>
            </body>
            </html>
        ";

        // Проверяем наличие загруженного файла
        if (isset($_FILES['file']) && $_FILES['file']['error'] == 0) {
            $fileTmpPath = $_FILES['file']['tmp_name'];
            $fileName = $_FILES['file']['name'];

            // Добавляем файл в письмо
            $mail->addAttachment($fileTmpPath, $fileName);
        }

        // Отправка письма
        if ($mail->send()) {
            echo "Ваше сообщение отправлено!";
        } else {
            echo "Ошибка при отправке сообщения.";
        }
    } catch (Exception $e) {
        echo "Ошибка: {$mail->ErrorInfo}";
    }
} else {
    echo "Ошибка доступа.";
}
