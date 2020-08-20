from flask import Flask, jsonify, request
from flask_cors import CORS
import boto3
from botocore.exceptions import ClientError
from botocore.client import Config
from pytube import YouTube
from moviepy.editor import *
import os

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def download_yb():
    param = request.get_json()
    url = param.get('url')
    yt = YouTube(url)
    stream = yt.streams.first()
    name = yt.title
    stream.download('./download')
    new_name = name.strip().lower().replace(' ', '.')
    path = "./download/"
    os.rename(path+name+".mp4", path+new_name+".mp4")
    obj_name = new_name+".mp4"
    obj_name_mp3 = new_name+".mp3"

    video = VideoFileClip(path+obj_name)
    audio = video.audio
    audio.write_audiofile(path+obj_name_mp3)
    audio.close()
    video.close()

    s3 = boto3.client('s3',aws_access_key_id='AKIAWLHG4IBYCERUB7PC', aws_secret_access_key='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', config=Config(signature_version='s3v4'))
    s3.upload_file('./download/'+obj_name_mp3,'prra-youtube-audio', obj_name_mp3)

    os.remove(path+obj_name_mp3)

    response = s3.generate_presigned_url('get_object',
                                                Params={'Bucket': 'prra-youtube-audio',
                                                        'Key': obj_name_mp3},
                                                ExpiresIn=3600)

    return jsonify(
        url=url,
        name=name,
        new_name=new_name,
        download_url=response
    )

