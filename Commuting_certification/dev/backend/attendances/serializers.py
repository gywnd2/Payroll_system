from rest_framework import serializers
from users.serializers import UserSerializer

from .models import Attendance


class ReadAttendanceSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    # start_img = serializers.ImageField(use_url=True)
    # end_img = serializers.ImageField(use_url=True)

    class Meta:
        model = Attendance
        fields = ("id", "user", "date", "start_latitude", "start_longitude", "end_latitude", "end_longitude")


class WriteAttendanceSerializer(serializers.Serializer):
    date = serializers.DateField(default="00:00:00")
    start_latitude = serializers.CharField(max_length=255, default="")
    start_longitude = serializers.CharField(max_length=255, default="")
    end_latitude = serializers.CharField(max_length=255, default="")
    end_longitude = serializers.CharField(max_length=255, default="")

    def create(self, validated_data):
        return Attendance.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.end_latitude = validated_data.get("end_latitude", instance.end_latitude)
        instance.end_longitude = validated_data.get("end_longitude", instance.end_longitude)
        instance.save()
        return instance
