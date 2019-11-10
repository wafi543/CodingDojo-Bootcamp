<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
    <title>Dojo Survey Index</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style>
        form {
            padding: 20px;
        }
    </style>
</head>
<body>
<form action='/result' method='post' style="width: 600px;">
        <div class="form-group">
            <label for="name">Your Name: </label>
            <input class="form-control" type='text' name='name' id="name" placeholder="Enter your name">
        </div>
        <div class="form-group">
            <label for="location">Dojo Location:</label>
            <select class="form-control" name="location" id="location">
                <option value="san">San Jose</option>
                <option value="sa">Riyadh</option>
                <option value="ny">NewYork</option>
            </select>
        </div>
        <div class="form-group">
            <label for="language">Favourite Language:</label>
            <select class="form-control" name="language" id="language">
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C_Sharp">C#</option>
                <option value="Swift">Swift</option>
                <option value="Java Script">Java Script</option>
            </select>
        </div>
        <div class="form-group">
            <label for="comment">Comment (optional):</label>
            <br>
            <textarea class="form-control" name="comment" id="comment" cols="30" rows="10"></textarea>
        </div>
        <p>Favourite OS:</p>
        <div class="form-radio">
            <input type="radio" name="os" value="Windows" id="windows">
            <label for="windows">Windows OS</label>
        </div>
        <div class="form-radio">
            <input type="radio" name="os" value="Mac" id="mac">
            <label for="mac">Mac OS</label>

        </div>
        <div class="form-radio">
            <input type="radio" name="os" value="Linux" id="linux">
            <label for="linux">Linux OS</label>
        </div>
        <br><br>
        <p>Platforms:</p>
        <div class="form-check">
            <input type="checkbox" name="platforms" value="VS Code" id="vs">
            <label for="vs">VS Code</label>
        </div>
        <div class="form-check">
            <input type="checkbox" name="platforms" value="xCode" id="xcode">
            <label for="xcode">xCode</label>

        </div>
        <div class="form-check">
            <input type="checkbox" name="platforms" value="Android Studio" id="android">
            <label for="android">Android Studio</label>
        </div>
        <div class="form-check">
            <input type="checkbox" name="platforms" value="Brackets" id="brackets">
            <label for="brackets">Brackets</label>
        </div>
        <br>
        <input type='submit' value='Submit' class="btn btn-primary">
    </form>
</body>
</html>