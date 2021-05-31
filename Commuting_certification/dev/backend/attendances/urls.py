from django.urls import path
from attendances import views

app_name = "attendances"

urlpatterns = [
    path("", views.AttendancesView.as_view()),
    path("<int:pk>/", views.AttendanceView.as_view())
]