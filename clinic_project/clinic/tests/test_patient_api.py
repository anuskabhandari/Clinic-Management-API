
import pytest
from rest_framework.test import APIClient
from django.urls import reverse


from accounts.models import User


@pytest.mark.django_db
def test_create_patient():
   client = APIClient()
   user = User.objects.create_user(username='jagriti',password='1234')
   client.force_authenticate(user=user)
   url = reverse('patient-list')
   data = {


       'user': user.id,
       'age': 22,
   }
   response = client.post(url, data,format='json')
   assert response.status_code == 201