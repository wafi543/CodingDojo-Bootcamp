<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Home</title>
</head>
<body>
	<form method="GET" action="Dogs">
		<h1>Create a Dog</h1>
		<label>Name</label><input name="name">
		<label>Breed</label><input name="breed">
		<label>Weight</label><input name="weight">
		<br><input type="submit" value="create a dog">
	</form>
	<br>
	<form method="GET" action="Cats">
		<h1>Create a Cat</h1>
		<label>Name</label><input name="name">
		<label>Breed</label><input name="breed">
		<label>Weight</label><input name="weight">
		<br><input type="submit" value="create a cat">
	</form>
</body>
</html>