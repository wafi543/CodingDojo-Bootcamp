from django.shortcuts import render, redirect
from apps.books_authors_app.models import *

# Create your views here.
def index (request):
    books = Book.objects.all()
    context = {
        'books' : books
    }
    return render(request, 'index.html', context)

def addBook (request):
    Book.objects.create(title=request.POST['title'],desc=request.POST['desc'])
    return redirect('/')

def addAuthor (request):
    Author.objects.create(first_name=request.POST['fname'],last_name=request.POST['lname'],notes=request.POST['notes'])
    return redirect('/authors')

def viewBook (request, id):
    book = Book.objects.get(id=id)
    book_authors = book.authors.all()
    authors = Author.objects.all()
    context = {
        'book' : book,
        'book_authors' : book_authors,
        'authors' : authors,
    }
    return render(request, 'book.html', context)

def book_add_author (request, id):
    book = Book.objects.get(id=id)
    author_id = request.POST['author_id']
    if author_id == '':
        return redirect('/books/'+id)
    author = Author.objects.get(id=author_id)
    book.authors.add(author)
    book.save()
    return redirect('/books/'+id)

def authors(request):
    authors = Author.objects.all()
    context = {
        'authors' : authors
    }
    return render(request, 'authors.html', context)

def viewAuthor (request, id):
    author = Author.objects.get(id=id)
    author_books = author.books.all()
    books = Book.objects.all()
    context = {
        'author' : author,
        'author_books' : author_books,
        'books' : books,
    }
    return render(request, 'author.html', context)

def author_add_book (request, id):
    author = Author.objects.get(id=id)
    book_id = request.POST['book_id']
    if book_id == '':
        return redirect('/authors/'+id)
    book = Book.objects.get(id=book_id)
    author.books.add(book)
    author.save()
    return redirect('/authors/'+id)