from flask import Flask, request, jsonify
from pytube import YouTube
import os

app = Flask(__name__)


@app.route('/', methods=['POST'])
def download_youtube():
    response = request.get_json()
    url = response.get('url', None)

    if request.method == 'POST' and url is not None:
        yt = YouTube(url)
        stream = yt.streams.filter(only_audio=True).first()
        name = yt.title
        stream.download('./download')
        new_name = name.strip().lower().replace(' ', '.')
        path = "./download/"
        os.rename(path+name+".mp4", path+new_name+".mp4")

        return jsonify(
            url=url,
            new_name=new_name
        )
    else:
        return jsonify(
            response="Youtube URL is required"
        )
