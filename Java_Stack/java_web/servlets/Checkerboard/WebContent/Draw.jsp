<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Checkerboard</title>
<style type="text/css">
.b0 {
    width: 20px;
    height: 20px;
    background-color: blue;
    display: inline-block;
}
.b1 {
    width: 20px;
    height: 20px;
    background-color: red;
    display: inline-block;
}
</style>
</head>
<body>
<% int width = Integer.parseInt(request.getParameter("width")); %>
<% int height = Integer.parseInt(request.getParameter("height")); %>
<h1>Checkerboard: <%= request.getParameter("width") %>w X <%= request.getParameter("height") %>h</h1>
<% for (int i=0; i < width ; i++) { %>
	<% for (int j = 0; j < height; j++) { %>
	<div class="b<%= i%2 %>"></div>
	<% } %>
	<br>
<% } %>
</body>
</html>