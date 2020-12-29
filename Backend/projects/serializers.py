from projects.models import Project, Technologies, Blogs
from rest_framework import serializers


class TechSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technologies
        fields = ('name', 'icon', 'ProjectId')


class ProjectSerializer(serializers.ModelSerializer):
    tech = TechSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = ('title', 'desc', 'image', 'link', 'git', 'tech')
