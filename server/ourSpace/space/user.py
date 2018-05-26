from django.shortcuts import render
from django.http import HttpResponse
import json
from .models import User as UserModel
from django.forms.models import model_to_dict
# Create your views here.

def api(request):
    if request.method == 'GET':
        if UserModel.objects.filter(userName=request.GET['userName']).exists():
            query_user = UserModel.objects.filter(userName=request.GET['userName']).first()
            query_user_dict = model_to_dict(query_user)
            data = {
                'status': '00000000',
                'result': query_user_dict
            }
            return HttpResponse(json.dumps(data), content_type='application/json')
        else:
            data = {
                'status': '00000001',
                'message': '没有此用户'
            }
            return HttpResponse(json.dumps(data), content_type='application/json')
    elif request.method == 'POST':
        
        body_unicode = request.body.decode('utf-8')
        postData = json.loads(body_unicode)
        if UserModel.objects.filter(userName=postData['userName']).exists():
            return HttpResponse(json.dumps({'status': '00000001', 'message': '用户名已存在。'}), content_type='application/json')
        else:
            create_user = UserModel()
            create_user.userName = postData['userName'] if 'userName' in postData else ''
            create_user.userGender = postData['userGender'] if 'userGender' in postData else ''
            create_user.userAge = postData['userAge'] if 'userAge' in postData else 0
            create_user.userEmail = postData['userEmail'] if 'userEmail' in postData else ''
            create_user.userIcon = postData['userIcon'] if 'userIcon' in postData else ''
            create_user.userPassword = postData['userPassword'] if 'userPassword' in postData else ''
            create_user.save();

            return HttpResponse(json.dumps({'status': '00000000', 'result': postData}), content_type='application/json')
    elif request.method == 'PUT':
        data = {
            'name': 'lrh',
            'age': 18,
            'type': 'PUT'
        }
        return HttpResponse(json.dumps(data), content_type='application/json')
    elif request.method == 'DELETE':
        data = {
            'name': 'lrh',
            'age': 18,
            'type': 'DELETE'
        }
        return HttpResponse(json.dumps(data), content_type='application/json')