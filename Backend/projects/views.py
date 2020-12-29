from django.shortcuts import render
from rest_framework import generics

from projects.models import Project, Technologies
from projects.serializers import TechSerializer, ProjectSerializer
# Create your views here.

class ProjectList(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
