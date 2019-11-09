<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Secret Code</title>
</head>
<body>
	<% if ("error" != null) { %>
	<h2 style="color:red">You must train harder!</h2>
	<% } %>
	<p>What is the code?</p>
	<br>
	<form action ="/process" method="POST">
		<input type="text" name="code">
		<br>
		<input type="submit" value="Try Code">
	</form>
</body>
</html>