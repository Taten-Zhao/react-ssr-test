 // TODO代码还是有bug,想到的方案就是把promise.all.的请求分开去做，然后报错的接口的页面不去渲染


 方案：1/吧promise.all的请求方式改成迭代去获取，当接口报错的时候返回空，继续下一个接口数据的获取，这样就不会因为一个接口数据的返回异常，导致页面渲染不出来
 2/由于代码出现了一些bug还未解决，所以只能先提出解决方案，bug调通后继续写
 