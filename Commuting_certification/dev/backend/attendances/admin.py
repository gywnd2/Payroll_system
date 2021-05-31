from django.contrib import admin
from . import models
# Register your models here.
@admin.register(models.Attendance)
class AttendanceAdmin(admin.ModelAdmin):
    list_display = (
        "user",
        "date"
    )
