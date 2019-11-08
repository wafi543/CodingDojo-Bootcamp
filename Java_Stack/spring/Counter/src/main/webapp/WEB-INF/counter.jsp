<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Current visit count!</title>
</head>
<body>
<p> You have visited us <c:out value="${count}"></c:out> Times </p>
<a href="/">Test another visit?</a>
</body>
</html>