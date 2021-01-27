# search-ipl

* Deployed link: https://searchipl.netlify.app/
* Stack Used: VueJS + Vuetify
* Non-optimized build: https://60118c1c28223f564b833d26--searchipl.netlify.app/

### Page Load time:
* Calculation method: Taken mean of running each build 5 times on https://gtmetrix.com/

| Version     | Onload Time | Fully Load Time | Page Size | Requests | Test Server Location |   
|-------------|-------------|----------------|-----------|----------| ----------|
| Optimum     |     1.08s     |   1.48 s       | 291.6 KB  | 18       |   Vancouver, Canada |
| Non-optimum |        1.14s       |    1.56 s      | 800.9 KB  | 31       |   Vancouver, Canada |
   


### Dataset used:
* The one provided (https://www.kaggle.com/ramjidoolla/ipl-data-set)

### Page Load Time Optmization methods used:
* Using Brotli compression technique 
* Compressing image assets
* Reduncing font variants which are not being used
* Enabling treeshaking of Icons being used with MdiSvg by including only necessary icons.




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
