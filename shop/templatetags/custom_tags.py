from django import template

register = template.Library()


@register.filter
def pagin_optimize(pagin, cur_idx):
    if cur_idx < 3:
        return pagin[:cur_idx + 2]
    else:
        return pagin[cur_idx - 3:cur_idx + 2]

    # return collection[idx1:idx2]