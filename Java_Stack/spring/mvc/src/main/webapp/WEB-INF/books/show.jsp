<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<h1><c:out value="${book.title}"/></h1>
<p>Description: <c:out value="${book.getDescription()}"/></p>
<p>Language: <c:out value="${book.getLanguage()}"/></p>
<p>Number of pages: <c:out value="${book.getNumOfPages()}"/></p>
<a href="/books/${book.id}/edit">Edit Book</a>
<form action="/books/${book.id}" method="post">
    <input type="hidden" name="_method" value="delete">
    <input type="submit" value="Delete">
</form>