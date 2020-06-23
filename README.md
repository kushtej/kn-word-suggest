# Kannada Word Suggester 

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)]()
![APM](https://img.shields.io/apm/l/vim-mode)

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

## Dataset :

**Step 1 :** The Dataset of the project can be downloaded here : [https://www.kaggle.com/kushtej/kannada-word-frequency/](https://www.kaggle.com/kushtej/kannada-word-frequency/)

**Step 2 :** Move the **kn-wordfreq.json** file to `/static/dataset/` .



## Shortcuts :

|Suggesstion No      |Shortcuts      |
|--------------------|---------------|
| Suggesstion **01** | `Ctrl+Shift+01` |
| Suggesstion **02** | `Ctrl+Shift+02` |
| Suggesstion **03** | `Ctrl+Shift+03` |
| Suggesstion **04** | `Ctrl+Shift+04` |
| Suggesstion **05** | `Ctrl+Shift+05` |
| Suggesstion **06** | `Ctrl+Shift+06` |
| Suggesstion **07** | `Ctrl+Shift+07` |
| Suggesstion **08** | `Ctrl+Shift+08` |


## To Do list :

- [x] ~~Set optional language english.~~
- [ ] Dark Mode

## License

This Project is licenced under [MIT License.](./LICENSE)
