# Url

一个对url进行操作的插件

### Method

##### .getHash([url])

获取hash，可以传入自定义url

##### .removeHash([url])

获取去除hash的Url，可以传入自定义url

##### .removeParams(params[, url])

删除指定参数，可以传入自定义url

    eg: Url.removeParams(['id']);

##### .addParams(params[, url])

添加指定参数，可以传入自定义url

    eg: Url.removeParams({
            id: 1
        });

##### .queryString(name)

获取指定参数

##### .getParams()

获取所有参数

##### .redirect(url)

跳转到指定url

## Author

[Travis](http://travisup.com/)
