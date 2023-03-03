# !/bin/bash
echo '{"name": "Bob", "age": 22, "job": "Cloud Engineer"}' | http post http://localhost:3000/person
echo '{"name": "Nihil", "age": 22, "job": "Cloud Engineer"}' | http post http://localhost:3000/person
echo '{"name": "Nick", "age": 22, "job": "Cloud Engineer"}' | http post http://localhost:3000/person
echo '{"name": "Rick", "age": 22, "job": "Cloud Engineer Master"}' | http post http://localhost:3000/person
echo '{"name": "Macbook", "age": 22, "job": "Apple Property"}' | http post http://localhost:3000/person
http get http://localhost:3000/person