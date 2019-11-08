<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>First Template</title>
</head>
<body>
<h1>Hello First Template</h1>
<h2> <c:out value="${name}"/> </h2>
</body>
</html>