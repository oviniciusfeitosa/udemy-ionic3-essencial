# Starting a new project

### Steps to create a new project using ionic

```
  curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -                                                      
	sudo apt-get install -y build-essential

	ln -s /usr/bin/nodejs /usr/bin/node

	apt-get install -y nodejs npm

	sudo npm install n -g
	sudo n stable

	npm i -g ionic
	npm i -g cordova
```

### Creating a new Project
```
	ionic start myFirstApp {template}
	ionic start myFirstApp blank
	ionic start myFirstApp tabs
	ionic start myFirstApp sidemenu
```

### Testing your project
```
	ionic serve
```

### Testing your project as mobile view
```
  ionic serve --lab
```

### To generate ionic pages
```
  ionic g page test 
```


### References

https://ionicframework.com/docs/components