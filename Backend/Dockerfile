FROM python:3

ENV PYTHONUNBUFFERED 1

WORKDIR /app/api

COPY requirements.txt ./

RUN pip install -r requirements.txt

COPY . ./

# FROM nginx 

EXPOSE 8000

# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# RUN python manage.py makemigrations

# RUN python manage.py migrate

# CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]