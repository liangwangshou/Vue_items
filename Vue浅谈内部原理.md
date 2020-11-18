引入vue.js，new Vue()干了什么呢？

1. 初始化
    调用Vue原型上的`_init()`进行初始化，会初始化vue的生命周期,props,data,methods,computed,watch，最重要的是利用Object.definedPropty()对data对象里面的属性设置`setter`和`getter`函数，也就是来实现`响应式`和`依赖收集`
2. 挂载组件
    调用$mount挂载组件
3. 编译
    编译三部曲，`parse`（解析）、`optimize`（标记静态节点做优化）、`generate`（转成字符串）
    3.1 parse：利用正则将模板转换成抽象语法树（AST）；
    3.2 optimize： 标记静态节点，以后update的时候，diff算法可以跳过静态节点
    3.3 generate：将抽象语法树（AST）转成字符串，供render去渲染DOM

经过以上步骤，就可以得到render funciton

1. 响应式
    响应式是vue中我认为最核心的部分，利用`Object.definedPropty` 设置data所返回的对象后，在进行render function被渲染的时候，会对data对象进行数据读取，会触发`getter`函数，从而把data里面的属性进行`依赖收集`，`依赖收集`的目的是将这些属性放到观察者（Watcher）的观察队列中，一旦我们对data里面的属性进行修改时，就会触发`setter`函数，`setter`告诉观察者数据变化，需要重新渲染视图，观察者调用`update`来更新视图
2. 虚拟DOM
    render funtion 会被转换成虚拟DOM，虚拟DOM实际上就是一个js对象，从顶层DOM层层描述DOM，有tag, children, isStatic, isComment等等许多属性来做DOM描述
3. 更新视图
    当数据发生变化时候，会经历`setter` => `Watcher` => `update`这些步骤，那么最终是怎么更新视图的呢？
    在update的时候，会执行`patch`，将新旧VNode传进去，通过`diff`算法算出差异，局部更新视图，做到最优化。

最后上一张完整结构图

![img](https:////upload-images.jianshu.io/upload_images/7510511-c2ae527501cf39f7.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)



作者：feXiaojin
链接：https://www.jianshu.com/p/fd00e25ff146
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。