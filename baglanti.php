<?php
$servername = "localhost";
$username = "root"; // Kullanıcı adınıza göre değiştirin
$password = "root"; // Şifrenizi belirtin
$dbname = "mekan_onerisi";

// Veritabanına bağlantı oluşturma
$conn = new mysqli("localhost", "root", "root", "mekan_onerisi");

// Bağlantıyı kontrol etme
if ($conn->connect_error) {
    die("Veritabanı bağlantısı başarısız: " . $conn->connect_error);
}

// POST verilerini alma
$soru1 = $_POST["soru1"];
$soru2 = $_POST["soru2"];
$soru3 = $_POST["soru3"];
$soru4 = $_POST["soru4"];

// SQL sorgusu oluşturma
$sql = "SELECT * FROM mekan_onerileri WHERE soru1 = '$soru1' AND soru2 = '$soru2' AND soru3 = '$soru3' AND soru4 = '$soru4'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // İlk satırı al
    $row = $result->fetch_assoc();
    $oneriMetni = $row["oneri_metni"];

    // Yanıtı JSON formatında döndür
    $response = array("oneri_metni" => $oneriMetni);
    echo json_encode($response);
} else {
    echo "Öneri bulunamadı.";
}

$conn->close();
?>
