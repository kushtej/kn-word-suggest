# Kannada Word Suggester 

A statistical  kannada(**kn**) language word suggester which predicts the typed word based on word frequency consisting of more than **35k** words built on Django Framework with jquery-ajax.

**For Kannada :**

![Kannada Preview](preview/kannada.gif?raw=true " ")

**For English :**

![English Preview](preview/english.gif?raw=true " ")


# Installation

The given below commands can be used to set up the environment and start the Django server.

**Step 1:**  Open your Terminal/Powershell in the cloned directory and type-in the following commands:
```
$ pipenv shell
$ pip install -r requirements.txt
$ python manage.py runserver 8080
```
Optional Commands :
```
$ python manage.py migrate
$ python manage.py makemigrations
```
>The optional commands are for setting up sqlite database though its not used in the project to get rid of warnings.

**Step 2:**  Now open your Web-Browser and paste the following url :
```
http://127.0.0.1:8080/
```


## To Do list :

- [x] ~~Set optional language english.~~
- [ ] Dark Mode

## License

This Project is licenced under [MIT License.](./LICENSE)
