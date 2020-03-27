from django.contrib.auth import login, authenticate, get_user_model
from django.core.mail import send_mail
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.shortcuts import render, redirect

from shop import models
from shop.forms import SignUpForm
from shop.models import EcoBag, Order


def index(request):
    # bags = EcoBag.objects.order_by('pk')
    page = request.GET.get('page', 1)
    bag_type = request.GET.get('selected_bag', 'all')

    if bag_type == 'all':
        bags = EcoBag.objects.all()
    else:
        bags = EcoBag.objects.filter(bag_type__iexact=bag_type)
    paginator = Paginator(bags, 6)
    try:
        bags = paginator.page(page)
    except PageNotAnInteger:
        bags = paginator.page(1)
    except EmptyPage:
        bags = paginator.page(paginator.num_pages)
    # bags = EcoBag.objects.all()[:6]
    context = {'ecobags': bags, }
    return render(request, 'shop/v2/index.html', context)


def about(request):
    User = get_user_model()
    try:
        # request.session.flush()
        user = User.objects.get(id=request.session['_auth_user_id'])
        print(user)
        print(request.session)
    except KeyError:
        pass
    stuff_for_frontend = {
        # 'bags': bags,
        # 'final_postings': final_postings,
    }

    return render(request, 'shop/v2/about.html', stuff_for_frontend)


def calc(request):
    stuff_for_frontend = {
        # 'bags': bags,
        # 'final_postings': final_postings,
    }

    return render(request, 'shop/v2/calculator.html', stuff_for_frontend)


def media(request):
    stuff_for_frontend = {
        # 'bags': bags,
        # 'final_postings': final_postings,
    }

    return render(request, 'shop/v2/media.html', stuff_for_frontend)


def new_search(request):
    search = request.POST.get('search')
    models.Search.objects.create(search=search)

    stuff_for_frontend = {
        'search': search,
        # 'final_postings': final_postings,
    }

    return render(request, 'shop/v1/search_results.html', stuff_for_frontend)


def order(request):
    order = request.POST.get('order')
    comment = request.POST.get('comment')
    print(order)
    print(comment)
    Order.objects.create(text=order, comment=comment, user=request.user)

    # send_mail(
    #     'Subject here',
    #     'Here is the message.',
    #     'from@example.com',
    #     ['reactionnnnn@gmail.com'],
    #     fail_silently=False,
    # )

    stuff_for_frontend = {
        # 'order': order,
    }

    return render(request, 'shop/v2/order.html', stuff_for_frontend)


def reg(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('email')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            # return reverse_lazy('about')
            return redirect('about')
    else:
        form = SignUpForm()
    return render(request, 'registration/reg.html', {'form': form})


def profile(request):
    User = get_user_model()
    print(request.session.items())
    usr_obj = User.objects.get(pk=request.session.get('_auth_user_id'))
    print(usr_obj.__dict__)
    stuff_for_frontend = {

        # 'final_postings': final_postings,
    }

    return render(request, 'shop/v2/profile.html', stuff_for_frontend)


def sub(request):
    sub = request.POST.get('sub')
    models.Sub.objects.create()

    stuff_for_frontend = {
        'sub': sub,
        # 'final_postings': final_postings,
    }

    return render(request, 'shop/v1/subscribe.html', stuff_for_frontend)


def goods(request):
    # goods_list = EcoBag.objects.all()
    #
    stuff_for_frontend = {}

    return render(request, 'shop/v1/products.html', stuff_for_frontend)