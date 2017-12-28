FROM php:7.0-fpm

MAINTAINER Vinicius Feitosa Da Silva <viniciusfesil@gmail.com>

VOLUME ["/usr/share/nginx/html/api"]

RUN apt-get update

RUN echo "[ ***** ***** ***** ] - Installing each item in new command to use cache and avoid download again ***** ***** ***** "
RUN apt-get install -y apt-utils
RUN apt-get install -y libfreetype6-dev
RUN apt-get install -y libjpeg62-turbo-dev
RUN apt-get install -y libcurl4-gnutls-dev
RUN apt-get install -y libxml2-dev
RUN apt-get install -y freetds-dev
RUN apt-get install -y git

RUN echo "[ ***** ***** ***** ] - Installing PHP Dependencies ***** ***** ***** "
RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/
RUN docker-php-ext-install gd
RUN docker-php-ext-install soap
RUN apt-get install -y libpq-dev
RUN docker-php-ext-install calendar

RUN docker-php-ext-install pdo_mysql
RUN docker-php-ext-install mysqli

#RUN docker-php-ext-configure pgsql --with-pgsql=/usr/local/pgsql
#RUN docker-php-ext-configure pdo_pgsql --with-pgsql
#RUN docker-php-ext-install pgsql pdo_pgsql


RUN usermod -u 1000 www-data

RUN chmod 0777 -R /var/www

WORKDIR /var/www/html


COPY ./docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]

#CMD ["php-fpm"]
#CMD ["apache2-foreground"]