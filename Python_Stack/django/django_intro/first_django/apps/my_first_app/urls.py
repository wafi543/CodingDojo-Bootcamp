from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^bears$', views.one_method),
    url(r'^bears/(?P<my_val>\d+)$', views.another_method),
    url(r'^bears/(?P<name>\w+)/poke$', views.yet_another),
    url(r'^new$', views.new),
    url(r'^create$', views.create),
	url(r'^(?P<number>[0-9]+)$', views.show),
	url(r'^(?P<number>[0-9]+)/edit$', views.edit),
	url(r'^(?P<number>[0-9]+)/delete$', views.destroy),
]