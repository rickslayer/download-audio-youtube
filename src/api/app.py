from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS
import boto3
from botocore.exceptions import ClientError
from botocore.client import Config
from pytube import YouTube
# os.environ["IMAGEIO_FFMPEG_EXE"] = "./bin/ffmpeg"
# from moviepy.editor import *
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
    new_name = name.strip().lower().replace(' ', '_')
    new_name = new_name.replace(':', '_')
    stream.download('./download', filename=new_name)
    path = "./download/"
    obj_name = new_name+".mp4"

    upload_file_repo(obj_name)

    '''
        This is for convert mp4 for mp3 but the server
        needs the lib ffmpeg instaled to work well.
    '''
    # mp4_file = path+obj_name
    # mp3_file = path+new_name+".mp3"
    # video_clip = VideoFileClip(mp4_file)
    # audio_clip = video_clip.audio()
    # audio_clip.write_audiofile(mp3_file)
    # audio_clip.close()
    # video_clip.close()

def upload_file_repo(file: str) -> str:
    '''
        You can choose another repo if you want.
        For the purpose of this example, I used AWS S3
    '''
    try:

        s3 = boto3.client(
            's3',
            aws_access_key_id=os.environ.get('AWS_ACCESS_KEY_ID'),
            aws_secret_access_key=os.environ.get('AWS_SECRET_ACCESS_KEY'),
            config=Config(signature_version='s3v4'))

        s3.upload_file(
            './download/'+file,
            os.environ.get('AWS_BUCKET'),
            file)

        os.remove(path+file)

        download_url = s3.generate_presigned_url(
            'get_object',
            Params={'Bucket': os.environ.get('AWS_BUCKET'), 'Key': file},
            ExpiresIn=3600)

        return download_url

    except ClientError as e:
        return jsonify(
            error=True,
            message=e
        )
