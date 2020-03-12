from django.shortcuts import render

# Create your views here.
from shop import models
from shop.models import Goods, EcoBag


def index(request):
    # live = Bags.objects.filter(=True)
    # latest_news = News.objects.order_by('-pub_date')[:3]
    # context = {'upcoming_matches': upcoming, 'live_matches': live, 'news': latest_news}
    # return render(request, 'shop/index.html', context)
    return render(request, 'shop/index.html')


def new_search(request):
    search = request.POST.get('search')
    models.Search.objects.create(search=search)
    # final_url = BASE_CRAIGSLIST_URL.format(quote_plus(search))
    # response = requests.get(final_url)
    # data = response.text
    # soup = BeautifulSoup(data, features='html.parser')

    # post_listings = soup.find_all('li', {'class': 'result-row'})

    # final_postings = []

    # for post in post_listings:
    #     post_title = post.find(class_='result-title').text
    #     post_url = post.find('a').get('href')
    #
    #     if post.find(class_='result-price'):
    #         post_price = post.find(class_='result-price').text
    #     else:
    #         post_price = 'N/A'
    #
    #     if post.find(class_='result-image').get('data-ids'):
    #         post_image_id = post.find(class_='result-image').get('data-ids').split(',')[0].split(':')[1]
    #         post_image_url = BASE_IMAGE_URL.format(post_image_id)
    #         print(post_image_url)
    #     else:
    #         post_image_url = 'https://craigslist.org/images/peace.jpg'
    #
    #     final_postings.append((post_title, post_url, post_price, post_image_url))

    stuff_for_frontend = {
        'search': search,
        # 'final_postings': final_postings,
    }

    return render(request, 'shop/search_results.html', stuff_for_frontend)


def sub(request):
    sub = request.POST.get('sub')
    models.Sub.objects.create()

    stuff_for_frontend = {
        'sub': sub,
        # 'final_postings': final_postings,
    }

    return render(request, 'shop/subscribe.html', stuff_for_frontend)


def goods(request):
    goods_list = EcoBag.objects.all()

    stuff_for_frontend = {
        'goods': goods_list,
        # 'final_postings': final_postings,
    }

    return render(request, 'shop/products.html', stuff_for_frontend)