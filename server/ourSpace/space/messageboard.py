from django.shortcuts import render
from django.http import HttpResponse
import json
from .models import MessageBoard as MessageBoardModel
from django.forms.models import model_to_dict
import uuid
from datetime import datetime
# Create your views here.

message_id = 500000;

def uuid_default():
    return uuid.uuid4()

def message_id_default():
    global message_id
    message_id = message_id + 1
    return message_id


def api(request):
    if request.method == 'GET':

        if MessageBoardModel.objects.filter(userName=request.GET['userName']).exists():
            query_user = MessageBoardModel.objects.filter(userName=request.GET['userName'])
            messageboard_arr = list(query_user.values('userName', 'avatar', 'author', 'datetime', 'text', 'replyId', 'parentReplyId'))
            # query_user_dict = model_to_dict(messageboard_arr)
            for one in messageboard_arr:
                one['datetime'] = one['datetime'].strftime('%a, %b %d %H:%M')

            data = {
                'status': '00000000',
                'result': messageboard_arr
            }
            return HttpResponse(json.dumps(data), content_type='application/json')
        else:
            data = {
                'status': '00000001',
                'message': '没有此用户的留言'
            }
            return HttpResponse(json.dumps(data), content_type='application/json')

    elif request.method == 'POST':
        
        body_unicode = request.body.decode('utf-8')
        postData = json.loads(body_unicode)

        create_messageboard = MessageBoardModel()
        create_messageboard.userName = postData['userName'] if 'userName' in postData else ''
        create_messageboard.avatar = postData['avatar'] if 'avatar' in postData else ''
        create_messageboard.author = postData['author'] if 'author' in postData else ''
        create_messageboard.datetime = postData['datetime'] if 'datetime' in postData else datetime.now()
        create_messageboard.text = postData['text'] if 'text' in postData else ''
        create_messageboard.replyId = postData['replyId'] if 'replyId' in postData else message_id_default()
        create_messageboard.parentReplyId = postData['parentReplyId'] if 'parentReplyId' in postData else ''
        create_messageboard.save()
        return HttpResponse(json.dumps({'status': '00000000', 'message': '留言成功。'}), content_type='application/json')

    elif request.method == 'PUT':
        data = {
            'type': 'PUT'
        }
        return HttpResponse(json.dumps(data), content_type='application/json')
    elif request.method == 'DELETE':
        data = {
            'type': 'DELETE'
        }
        return HttpResponse(json.dumps(data), content_type='application/json')
    else:
        data = {
            'type': 'options'
        }
        return HttpResponse(json.dumps(data), content_type='application/json')
