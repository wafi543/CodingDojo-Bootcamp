<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/functions" prefix = "fn" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
	<title>Ninja Gold Game</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style>
        body {
            padding: 30px;
        }

        .building {
            outline: 2px solid black;
            margin-top: 30px;
            margin-left: 20px;
            width: 250px;
            height: 250px;
            display: inline-block;
        }

        .building h1,
        .building h5 {
            width: inherit;
            text-align: center;
            margin-top: 20px;
        }

        .building input {
            margin-left: 80px;
        }
        .activities {
            margin-top: 30px;
            outline: 1px solid black;
            height: 200px;
            overflow: scroll;
        }
        .activities h4 {
            margin-left: 10px;
        }
        ul {
            overflow: scroll;
        }
    </style>
</head>
<body>
<div style="display: block">
        <h3 style="display: inline-block">Your Gold:</h3>
        <input style="display: inline-block" type="text" name="gold">
    </div>
    <form class="building" action="/process_money" method="post">
        <h1>Farm</h1>
        <h5>(earns 10-20 golds)</h5>
        <br><br>
        <input type="hidden" name="building" value="farm" />
        <input type="submit" value="Find Gold!">
    </form>
    <form class="building" action="/process_money" method="post">
        <h1>Cave</h1>
        <h5>(earns 5-10 golds)</h5>
        <br><br>
        <input type="hidden" name="building" value="cave" />
        <input type="submit" value="Find Gold!">
    </form>
    <form class="building" action="/process_money" method="post">
        <h1>House</h1>
        <h5>(earns 2-5 golds)</h5>
        <br><br>
        <input type="hidden" name="building" value="house" />
        <input type="submit" value="Find Gold!">
    </form>
    <form class="building" action="/process_money" method="post">
        <h1>Casino</h1>
        <h5>(earns/takes 0-50 golds)</h5>
        <br><br>
        <input type="hidden" name="building" value="casino" />
        <input type="submit" value="Find Gold!">
    </form>
    <div class="activities">
        <h4>Activities:</h4>
        <ul>
			<c:forEach items="${activities}" var="item"> 
				<c:choose>
					<c:when test="${fn:contains(item, 'Earned')}">
						<li style="color: green"><c:out value="${item}"></c:out></li>
					</c:when>
					<c:otherwise>
						<li style="color: red"><c:out value="${item}"></c:out></li>
					</c:otherwise>
					
				</c:choose>
			</c:forEach>
        </ul>
    </div>
    <br>
    <a class="btn btn-primary" href="/clear">Reset</a>
</body>
</html>