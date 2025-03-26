<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "help@plus7group.pro";
    $subject = "Новая заявка с формы";

    // Получаем данные из формы
    $fullname = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $question = htmlspecialchars($_POST["message"]);

    // Создаем текст письма
    $message = "
        <html>
        <head>
            <title>$subject</title>
        </head>
        <body>
            <h2>Детали заявки:</h2>
            <p><strong>ФИО:</strong> $fullname</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Телефон:</strong> $phone</p>
            <p><strong>Вопрос:</strong> $question</p>
        </body>
        </html>
    ";

    // Заголовки для HTML-письма
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: $email" . "\r\n";

    // Проверяем наличие загруженного файла
    if (isset($_FILES['file']) && $_FILES['file']['error'] == 0) {
        $fileTmpPath = $_FILES['file']['tmp_name'];
        $fileName = $_FILES['file']['name'];
        $fileSize = $_FILES['file']['size'];
        $fileType = $_FILES['file']['type'];

        // Папка для хранения файлов (укажите нужный путь)
        $uploadDir = 'uploads/';
        $uploadFile = $uploadDir . basename($fileName);

        // Перемещаем файл в папку
        if (move_uploaded_file($fileTmpPath, $uploadFile)) {
            // Чтение файла для вложения
            $fileContent = file_get_contents($uploadFile);
            $fileContent = chunk_split(base64_encode($fileContent));

            $boundary = md5(time());

            // Заголовки для многосоставного письма
            $headers = "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
            $headers .= "From: $email" . "\r\n";

            // Начало сообщения с файлом
            $message = "--$boundary\r\n";
            $message .= "Content-Type: text/html; charset=UTF-8\r\n";
            $message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
            $message .= "
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
                </html>\r\n";

            // Добавляем файл к письму
            $message .= "--$boundary\r\n";
            $message .= "Content-Type: $fileType; name=\"$fileName\"\r\n";
            $message .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n";
            $message .= "Content-Transfer-Encoding: base64\r\n\r\n";
            $message .= $fileContent . "\r\n";
            $message .= "--$boundary--";

            // Проверка отправки письма
            if (mail($to, $subject, $message, $headers)) {
                echo "Ваше сообщение с файлом отправлено!";
            } else {
                echo "Ошибка при отправке сообщения.";
            }
        } else {
            echo "Ошибка при загрузке файла.";
        }
    } else {
        // Отправка письма без файла
        if (mail($to, $subject, $message, $headers)) {
            echo "Ваше сообщение отправлено!";
        } else {
            echo "Ошибка при отправке сообщения.";
        }
    }
} else {
    echo "Ошибка доступа.";
}
?>
