<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="com.wafi.web.models.Person" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
</head>
<body>
	<% Person person = (Person) request.getAttribute("person"); %>
	<h1> <%= person.greeting() %> </h1>
	<c:out value="${person.greeting()}"/>
</body>
</html>