<?php try{
		//check to see if your table has the same fields & is spelled the same way
		$query1 = 'INSERT INTO logs (dateTime) VALUES (:date);';
		$statement1 = $myDBconnection -> prepare($query1);
		$statement1 -> bindValue(':date', date("l jS \of F Y h:i:s A"));
		$statement1 -> execute();
		echo "<p>Welcome to the Den!</p>";
	} catch (PDOException $e) {
		$error_message = $e->getMessage();
		echo "<p>An error occurred while trying to add data from the table: $error_message </p>";
	}?>