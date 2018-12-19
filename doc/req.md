1. Картинки для первой страницы сайта. Размер 2880 * 1800.

.htaccess

```
RedirectMatch permanent ^/$ http://meat.by/bmkk/new/
RedirectMatch permanent ^/index.php$ http://meat.by/bmkk/new/

#SecFilterCheckURLEncoding Off

#set max post size
php_value post_max_size 20M
```