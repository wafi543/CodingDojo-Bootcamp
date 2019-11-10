<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Dojo Survey Result</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <h1>Submitted Info</h1>
    <p>Name: <c:out value="${name}"></c:out></p>
    <p>Dojo Location: <c:out value="${location}"></c:out></p>
    <p>Favourite Language: <c:out value="${language}"></c:out></p>
    <p>Favourite OS: <c:out value="${os}"></c:out></p>
    <p>Platforms: <c:out value="${platforms}"></c:out></p>
    <p>Comment: <c:out value="${comment}"></c:out></p>
    <br><br>
    <a href="/" class="btn btn-primary">Go Back</a>
</body>
</html>