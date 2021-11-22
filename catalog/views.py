import json

from django.shortcuts import render, get_object_or_404
from .models import Book, Author, BookInstance, Genre
from django.views import generic
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core import serializers
from django.core.paginator import Paginator


from inertia.views import render_inertia


def index(request):
    """View function for home page of site."""

    num_books = Book.objects.all().count()
    num_instances = BookInstance.objects.all().count()

    num_instances_available = BookInstance.objects.filter(status__exact='a').count()

    num_authors = Author.objects.count()

    num_visits = request.session.get('num_visits', 0)
    request.session['num_visits'] = num_visits + 1

    props = {
        'num_books' : num_books,
        'num_instances' : num_instances,
        'num_instances_available' : num_instances_available,
        'num_authors' : num_authors,
        'num_visits': num_visits,
    }

    return render_inertia(request, 'Index', props=props)
    # return render(request, 'index.html', context=props)

# class BookListView(generic.ListView):
#     model = Book
#     paginate_by = 10

def book_list_view(request):
    all_books = Book.objects.all()
    book_list = serializers.serialize("json", all_books)
    book_list = json.loads(book_list)
    
    urls = [book.get_absolute_url() for book in all_books]

    return render_inertia(request, 'BookListView', props={'book_list': book_list, 'urls': urls})

# class BookDetailView(generic.DetailView):
#     model = Book

def book_detail_view(request, pk):
    book = get_object_or_404(Book, pk=pk)
    book = serializers.serialize("json", [book])
    book = json.loads(book)

    return render_inertia(request, 'BookDetailView', props={'book': book})


# class AuthorListView(generic.ListView):
#     model = Author
#     paginate_by = 10

def author_list_view(request):
    all_authors = Author.objects.all()
    author_list = serializers.serialize("json", all_authors)
    author_list = json.loads(author_list)

    urls = [author.get_absolute_url() for author in all_authors]

    return render_inertia(request, 'AuthorListView', props={'author_list': author_list, 'urls': urls})


# class AuthorDetailView(generic.DetailView):
#     model = Author

def author_detail_view(request, pk):
    author = get_object_or_404(Author, pk=pk)
    author = serializers.serialize("json", [author])
    author = json.loads(author)

    return render_inertia(request, 'AuthorDetailView', props={'author': author})

# class LoanedBooksByUserListView(LoginRequiredMixin,generic.ListView):
#     """Generic class-based view listing books on loan to current user."""
#     model = BookInstance
#     template_name ='catalog/bookinstance_list_borrowed_user.html'
#     paginate_by = 10

#     def get_queryset(self):
#         return BookInstance.objects.filter(borrower=self.request.user).filter(status__exact='o').order_by('due_back')

def loaned_book_by_user_list_view(request):
    book_list = BookInstance.objects.filter(borrower=request.user).filter(status__exact='o').order_by('due_back')
    paginator = Paginator(book_list, 1)

    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)    
    return render_inertia(request, 'LoanedBookByUserListView', props={'page_obj': page_obj})


def react_game(request):
    return render_inertia(request, 'Game')

def add_book(request):
    return render_inertia(request, 'AddBook')