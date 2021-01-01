from django.contrib import admin
from projects.models import Blogs, Project, Technologies
from import_export.admin import ImportExportModelAdmin

# Register your models here.
# admin.site.register(Project)
# admin.site.register(Blogs)
# admin.site.register(Technologies)


@admin.register(Project)
class ProjectAdmin(ImportExportModelAdmin):
    pass


@admin.register(Technologies)
class TechnologieAdmin(ImportExportModelAdmin):
    pass


@admin.register(Blogs)
class BlogAdmin(ImportExportModelAdmin):
    pass
