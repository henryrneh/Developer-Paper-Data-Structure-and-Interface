Perquisite: virtual environment. Unzip Django folder, in terminal cd django, and then run "python3 -m venv .". Run "source bin/activate" to activate virtual environment. And then run "pip install -r requirements.txt" to install the required software.


Open the project: If you have visual studio code, just double click on the django.code-workspace. Otherwise use terminal to cd to django directory and run "source bin/activate".

Change settings.py: After loading the database into pgAdmin, you need to change settings.py to connect to local database. In settings.py search DATABASE and change NAME and USER accordingly.

Run server: In visual studio toggle terminal and run "python manage.py runserver", the same for terminal.

Open the interface: After running the server, you can either go into the ui folder which is under django directory and then double click index.html. Or if you are using visual studio code search for "Live Server" extension of visual studio code made by "Ritwick Dey". After running server, open index.html with visual studio code and hit (alt+L, alt+O) to Open the Server and (alt+L, alt+C) to Stop the server. [On MAC, cmd+L, cmd+O and cmd+L, cmd+C]

 