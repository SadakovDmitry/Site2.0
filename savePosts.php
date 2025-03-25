<?php
// Файл для хранения постов
$filename = 'tg-posts.json';

// Чтение данных из файла
function getPosts() {
    global $filename;
    if (file_exists($filename)) {
        $data = file_get_contents($filename);
        return json_decode($data, true);
    }
    return [];
}

// Сохранение данных в файл
function savePosts($posts) {
    global $filename;
    file_put_contents($filename, json_encode($posts, JSON_PRETTY_PRINT));
}

// Проверка наличия новых постов
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $newPosts = json_decode(file_get_contents('php://input'), true);

    if ($newPosts) {
        // Получаем текущие посты
        $posts = getPosts();

        // Если есть новые посты, обновляем список
        foreach ($newPosts as $post) {
            $exists = false;
            // Проверяем, не добавлен ли этот пост
            foreach ($posts as $existingPost) {
                if ($existingPost['message_id'] == $post['message_id']) {
                    $exists = true;
                    break;
                }
            }

            // Если пост не найден, добавляем его
            if (!$exists) {
                if (count($posts) >= 4) {
                    // Удаляем первый элемент, если больше 4
                    array_shift($posts);
                }
                $posts[] = $post; // Добавляем новый пост
            }
        }

        // Сохраняем обновленные посты
        savePosts($posts);
    }
}
?>
