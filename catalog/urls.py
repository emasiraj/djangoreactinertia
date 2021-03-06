from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static 

urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.book_list_view, name='books'),
    path('book/<int:pk>', views.book_detail_view, name='book-detail'),
    path('authors/', views.author_list_view, name='authors'),
    path('author/<int:pk>', views.author_detail_view, name='author-detail'),
    path('mybooks/', views.loaned_book_by_user_list_view, name='my-borrowed'),
    path('game/', views.react_game, name='react-game'),
    path('addbook/', views.add_book, name='add-book'),
    path('booksubmitted/', views.submit_book, name='submit_book')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)