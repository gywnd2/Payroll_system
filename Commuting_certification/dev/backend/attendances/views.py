from django.shortcuts import render
from rest_framework.views import APIView
from attendances.models import Attendance
from .serializers import ReadAttendanceSerializer, WriteAttendanceSerializer
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

# Create your views here.

# @method_decorator(csrf_exempt, name='dispatch')
class AttendancesView(APIView):
    def get(self, request):
        attendances = Attendance.objects.all()
        print(attendances)
        serializer = ReadAttendanceSerializer(attendances, many=True).data
        return Response(serializer)

    def post(self, request):
        if not request.user.is_authenticated:
            print(request.user)
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        serializer = WriteAttendanceSerializer(data=request.data)
        print(serializer.is_valid())
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class AttendanceView(APIView):
    def get_attendance(self, pk):
        try:
            attendance = Attendance.objects.get(pk=pk)
            return attendance
        except Attendance.DoesNotExist:
            return None

    def get(self, request, pk):
        attendance = self.get_attendance(pk)
        if attendance is not None:
            serializer = ReadAttendanceSerializer(attendance).data
            return Response(serializer)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        attendance = self.get_attendance(pk)
        if attendance is not None:
            if attendance.user != request.user:
                return Response(status=status.HTTP_403_FORBIDDEN)
            serializer = WriteAttendanceSerializer(attendance, data=request.data, partial=True)  # 내가 바꾸고 싶은 데이터만 보낸다
            if serializer.is_valid():
                attendance = serializer.save()
                return Response(ReadAttendanceSerializer(attendance).data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response()
