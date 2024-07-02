<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Principal - Memelandia</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #210A05;
            color: white;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
        }
        .container {
            max-width: 1200px;
            margin: 20px auto;
            padding: 0 20px;
        }
        .image-row {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
        }
        .image-item {
            width: 300px;
            height: 200px;
            overflow: hidden;
            position: relative;
            margin: 0 10px;
            cursor: pointer;
            transition: transform 0.5s ease;
        }
        .image-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        .image-item:hover {
            transform: scale(1.1);
        }
        .image-item:hover img {
            transform: scale(1.2) rotate(5deg);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 style="text-align: center;">Galería de Imágenes</h1>

        <div class="image-row">
            <div class="image-item">
                <img src="img/image1.jpg" alt="Imagen 1">
            </div>
            <div class="image-item">
                <img src="img/image2.jpg" alt="Imagen 2">
            </div>
            <div class="image-item">
                <img src="img/image3.jpg" alt="Imagen 3">
            </div>
        </div>

        <div class="image-row">
            <div class="image-item">
                <img src="img/image4.jpg" alt="Imagen 4">
            </div>
            <div class="image-item">
                <img src="img/image5.jpg" alt="Imagen 5">
            </div>
            <div class="image-item">
                <img src="img/image6.jpg" alt="Imagen 6">
            </div>
        </div>

        <div class="image-row">
            <div class="image-item">
                <img src="img/image7.jpg" alt="Imagen 7">
            </div>
            <div class="image-item">
                <img src="img/image8.jpg" alt="Imagen 8">
            </div>
            <div class="image-item">
                <img src="img/image9.jpg" alt="Imagen 9">
            </div>
        </div>
    </div>
</body>
</html>
