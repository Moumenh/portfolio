from django.contrib import admin
from projects.models import Blogs,Project,Technologies

# Register your models here.
admin.site.register(Project)
admin.site.register(Blogs)
admin.site.register(Technologies)