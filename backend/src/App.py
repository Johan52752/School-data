from flask import Flask, request, jsonify, Response
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from bson import json_util

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost/school-data'
mongo = PyMongo(app)
CORS(app)

#Collections
db_users=mongo.db.users
db_posts=mongo.db.posts
db_comments=mongo.db.comments
db_tareas=mongo.db.tareas


# Functions-Collection-Users
@app.route('/login', methods=['POST'])
def loginUser():
    email = request.json['email']
    password = request.json['password']

    if email and password:
        user = db_users.find_one({ "email": str(email) })

        if check_password_hash(user['password'], password):
            response = json_util.dumps(user)
            return Response(response, mimetype="application/json")

        else:
            message = not_found()
            return message
    else:
        message = not_found()
        return message


@app.route('/users', methods=['POST'])
def createUser():
    username = request.json['name']
    id_student = request.json['id_student']
    password = request.json['password']
    description = request.json['description']
    email = request.json['email']
    points = 0

    if username and id_student and password and description:
        hashed_password = generate_password_hash(password)
        id = db_users.insert({
            "name": username,
            "id_student": id_student,
            "password": hashed_password,
            "description": description,
            "points": points,
            "email": email
        })

        user = db_users.find_one({'_id': ObjectId(id)})
        response = json_util.dumps(user)
        return Response(response, mimetype="application/json")
    else:
        messag = not_found()
        return messag


@app.errorhandler(404)
def not_found(error=None):
    message = {
        "msg": "resource not found" + request.url,
        "error": "404"
    }
    return message


@app.route('/users', methods=['GET'])
def getUsers():
    users = db_users.find()
    response = json_util.dumps(users)
    return Response(response, mimetype="application/json")


@app.route('/user/<id>', methods=['GET'])
def getUser(id):
    user = db_users.find_one({'_id': ObjectId(id)})
    response = json_util.dumps(user)
    return Response(response, mimetype="application/json")


@app.route('/user/<id>', methods=['DELETE'])
def deleteUser(id):
    db_users.remove({"_id": ObjectId(id)})
    return jsonify({
        "user": "delete"
    })


@app.route('/user/<id>', methods=['PUT'])
def updateUser(id):
    db_users.update({"_id": ObjectId(id)}, {"$set": request.json})
    return jsonify({
        "user": "update"
    })



# Functions-Collection-Posts
@app.route('/posts/<id>', methods=['POST'])
def newPost(id):
    description = request.json['description']
    tittle = request.json['tittle']
    categorie = request.json['categorie']
    student = db_users.find_one({'_id': ObjectId(id)})
    if description and tittle and categorie:
        id_db = db_posts.insert({
            "id_student": student['id_student'],
            "description": description,
            "tittle": tittle,
            "categorie": categorie
        })
        post = db_posts.find_one({'_id': ObjectId(id_db)})
        response = json_util.dumps(post)
        return Response(response, mimetype="application/json")
    else:
        message = not_found()
        return message

@app.route('/post', methods=['POST'])
def getPostByCategory():
    category=request.json['category']
    if category:
        post_category=db_posts.find({"categorie":category})
        response=json_util.dumps(post_category)
        return Response(response, mimetype="application/json")
    else:
        message = not_found()
        return message



@app.route('/post/<id>', methods=['GET'])
def getPostsByUser(id):
    student = db_users.find_one({'_id': ObjectId(id)})
    app.logger.info(student)
    posts_user = db_posts.find({"id_student": student['id_student']})
    response = json_util.dumps(posts_user)
    return Response(response, mimetype="application/json")


@app.route('/posts', methods=['GET'])
def getPosts():
    posts = db_posts.find()
    response = json_util.dumps(posts)
    return Response(response, mimetype="application/json")


@app.route('/post/<id>', methods=['PUT'])
def updatePost(id):
    if request.json['tittle']:
        tittle = request.json['tittle']
        db_posts.update({"_id": ObjectId(id)}, {"$set": {
            "tittle": tittle
        }
        })
    if request.json['description']:
        description = request.json['description']
        db_posts.update({"_id": ObjectId(id)}, {"$set": {
            "description": description
        }
        })
    if request.json['categorie']:
        categorie = request.json['categorie']
        db_posts.update({"_id": ObjectId(id)}, {"$set": {
            "categorie": categorie
        }
        })
    up = db_posts.find({"_id": ObjectId(id)})
    response = json_util.dumps(up)
    return Response(response, mimetype="application/json")


@app.route('/post/<id>', methods=['DELETE'])
def deletePost(id):
    db_posts.remove({"_id": ObjectId(id)})
    return jsonify({
        "status": "sucess, delete post"
    })

#FUNCTIONS COMMENTS

@app.route('/comment', methods=['POST'])
def newComments():
    user=request.json['id_user']
    post=request.json['id_post']
    bodyComment=request.json['bodyComment']
    nuser=db_users.find_one({'_id':ObjectId(user)})
    npost=db_posts.find_one({'_id':ObjectId(post)})
    if user and post and bodyComment:
        id_comment=db_comments.insert({
            "user":nuser['name'],
            "post":post,
            "bodyComment":bodyComment
        })
        comment=db_comments.find({"_id":ObjectId(id_comment)})
        response=json_util.dumps(comment)
        return Response(response,mimetype="application/json")
    else:
        message=not_found()
        return message

@app.route('/comments/<id>', methods=['GET'])
def getCommentsByPost(id):
    comment_post=db_comments.find({"post":id})
    response=json_util.dumps(comment_post)
    return Response(response, mimetype="application/json")

@app.route('/comment/<id>' , methods=['DELETE'])
def deleteComment(id):
    db_comments.remove({"_id":ObjectId(id)})
    return jsonify({
        "comment":"delete"
    })

#FUNCTIONS HOME-WORKS 
@app.route('/tarea/<id>', methods=['POST'])
def createTarea(id):
    tittle=request.json['tittle']
    description=request.json['description']
    categorie=request.json['categorie']
    user=db_users.find_one({'_id': ObjectId(id)})
    if categorie and tittle and description and user:
        id_tareas=db_tareas.insert({
            "tittle":tittle,
            "description":description,
            "categorie":categorie,
            "id_student":id
        })
        tareas=db_tareas.find({'_id':ObjectId(id_tareas)})
        response=json_util.dumps(tareas)
        return Response(response, mimetype="application/json")
    else:
        message=not_found()
        return message

@app.route('/tareas/<id>', methods=['GET'])
def getTareasByUser(id):
    tareas_user=db_tareas.find({"id_student":id})
    response=json_util.dumps(tareas_user)
    return Response(response, mimetype="application/json")

@app.route('/tarea/<id>' , methods=['DELETE'])
def deleteTarea(id):
    db_tareas.remove({"_id":ObjectId(id)})
    return jsonify({
        "tarea":"delete"
    })

# inicio

if __name__ == "__main__":
    app.run(debug=True)
