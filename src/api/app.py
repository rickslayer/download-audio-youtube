from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS
import boto3
from botocore.exceptions import ClientError
from botocore.client import Config
from pytube import YouTube
import os

app = Flask(__name__)
CORS(app)
load_dotenv()


@app.route('/', methods=['POST'])
def download_yb() -> dict():
    '''
        Responsible for download video
    '''
    param = request.get_json()
    url = param.get('url')
    yt = YouTube(url)
    stream = yt.streams.filter(only_audio=True).first()
    name = yt.title
    thumbnail_url = yt.thumbnail_url
    stream.download('./download')
    new_name = name.strip().lower().replace(' ', '.')
    path = "./download/"
    os.rename(path+name+".mp4", path+new_name+".mp4")
    obj_name = new_name+".mp4"

    try:

        s3 = boto3.client(
            's3',
            aws_access_key_id=os.environ.get('AWS_ACCESS_KEY_ID'),
            aws_secret_access_key=os.environ.get('AWS_SECRET_ACCESS_KEY'),
            config=Config(signature_version='s3v4'))

        s3.upload_file(
            './download/'+obj_name,
            os.environ.get('AWS_BUCKET'),
            obj_name)

        os.remove(path+obj_name)

        download_url = s3.generate_presigned_url(
            'get_object',
            Params={'Bucket': os.environ.get('AWS_BUCKET'), 'Key': obj_name},
            ExpiresIn=3600)

        return jsonify(
            url=url,
            name=name,
            new_name=new_name,
            download_url=download_url,
            thumbnail_url=thumbnail_url
        )
    except ClientError as e:
        return jsonify(
            error=True,
            message=e
        )
