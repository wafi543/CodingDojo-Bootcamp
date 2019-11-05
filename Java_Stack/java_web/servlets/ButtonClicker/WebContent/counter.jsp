<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Clicker</title>
</head>
<body>
	<form action="/ButtonClicker/Counter">
		<input type="submit" value="click me">
	</form>
	<h2>You have clicked this button <%= session.getAttribute("count") %> times</h2>
</body>
</html>

<script>
    </script>