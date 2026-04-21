from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

#  MySQL connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="news_app"
)

cursor = db.cursor()

#  Home route
@app.route("/")
def home():
    return "Backend running!"

#  NEWS API (YAHI ADD KARNA THA)
@app.route('/news')
def news():
    return {
        "message": "News API working"
    }



@app.route("/bookmark", methods=["POST"])
def bookmark():
    data = request.json

    title = data["title"]
    url = data["url"]
    image = data["image"]

    query = "INSERT INTO bookmarks (title, url, image) VALUES (%s, %s, %s)"
    cursor.execute(query, (title, url, image))
    db.commit()

    return jsonify({"message": "Bookmarked!"})

#  Get bookmarks
@app.route("/bookmarks", methods=["GET"])
def get_bookmarks():
    cursor.execute("SELECT * FROM bookmarks")
    result = cursor.fetchall()

    data = []
    for row in result:
        data.append({
            "id": row[0],
            "title": row[1],
            "url": row[2]
        })

    return jsonify(data)

#  Delete bookmark
@app.route("/delete/<int:id>", methods=["DELETE"])
def delete(id):
    cursor.execute("DELETE FROM bookmarks WHERE id=%s", (id,))
    db.commit()
    return jsonify({"message": "Deleted"})

if __name__ == "__main__":
    app.run(debug=True)