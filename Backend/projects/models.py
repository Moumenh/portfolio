from django.db import models

# Create your models here.


class Project(models.Model):
    title = models.CharField(max_length=250)
    image = models.CharField(max_length=1000)
    link = models.CharField(max_length=1000)
    github = models.CharField(max_length=1000, default='1')

    def __str__(self):
        return self.title
    

class Technologies(models.Model):
    name = models.CharField(max_length=250)
    icon = models.CharField(max_length=1000, default='1')
    ProjectId = models.ForeignKey(Project, on_delete=models.CASCADE,related_name='tech')

    def __str__(self):
        return "%s %s" % (self.name, self.ProjectId.title)


class Blogs(models.Model):
    title = models.CharField(max_length=250)
    content = models.CharField(max_length=250)
    image = models.CharField(max_length=1000)

    def __str__(self):
        return self.title

    



