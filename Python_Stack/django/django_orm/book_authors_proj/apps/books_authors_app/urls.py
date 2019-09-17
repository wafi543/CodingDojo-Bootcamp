from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^add_book$', views.addBook),
    url(r'^books/(?P<id>[0-9]+)$', views.viewBook),
    url(r'^books/(?P<id>[0-9]+)/add_author$', views.book_add_author),
    url(r'^authors$', views.authors),
    url(r'^add_author$', views.addAuthor),
    url(r'^authors/(?P<id>[0-9]+)$', views.viewAuthor),
    url(r'^authors/(?P<id>[0-9]+)/add_book$', views.author_add_book),
]