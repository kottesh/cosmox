<!DOCTYPE html>
<html>
<head>
    <title>Astronaut Cards</title>
    <style>
	.card-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1.25rem;
	}
        .astronaut-card {
	    display: flex;
            background-color: #f2f2f2;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
	    gap: 1.25rem;
	    justify-contents: center;
	    align-items: center;
        }

        .astronaut-card img {
            width: 100%;
            max-height: 200px;
            object-fit: cover;
            border-radius: 5px;
        }

        .astronaut-card h2 {
            font-size: 20px;
        }

        .astronaut-card p {
            font-size: 16px;
        }
	
	.card-info {
	    display: flex;
	    flex-direction: column;
	}
	

    </style>
</head>
<body>
<div class="navbar-placeholder"></div>
<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "adb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM astronauts";
$result = $conn->query($sql);

echo '<div class="card-wrapper">';

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $name = $row["name"];
        $missions = $row["missions"];
        $tmins = $row["tmins"];
        $inspace = $row["inspace"];
        $lastLaunch = $row["lastLauch"];
        $image = $row["image"];

        echo '<div class="astronaut-card">';
		echo '<div class="img">';
        		echo '<img src="' . $image . '" alt="' . $name . '">';
		echo '</div>';
		echo '<div class="card-info">';
			echo '<div class="name">';
        			echo '<h2 style="background-color: #00AFDC">' . $name . '</h2>';
			echo '</div>';
			echo '<div class="other-info">';
        			echo '<p>Missions: ' . $missions . '</p>';
        			echo '<p>Total Minutes: ' . $tmins . '</p>';
        			echo '<p>In Space: ' . ($inspace ? 'Yes' : 'No') . '</p>';
        			echo '<p>Last Launch: ' . $lastLaunch . '</p>';
			echo '</div>';
		echo '</div>';
        echo '</div>';
    }
} else {
    echo "No records found.";
}
echo '</div>';

$conn->close();
?>
</body>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="/src/script/funcs.js"></script>
</html>

