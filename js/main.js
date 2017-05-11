var log = function() {
    console.log.apply(console, arguments)
}

var e = function(a){
    return document.querySelector(a)
}

var es = function(a){
    return document.querySelectorAll(a)
}

var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

var removeAll = function(selector, className){
    var se = '.' + selector
    var ele = document.querySelectorAll(se)
  for (var i = 0; i < ele.length; i++) {
      ele[i].classList.remove(className)
  }
}

var bindAll = function(element, eventName, callback){
    for (var i = 0; i < element.length; i++) {
        var tag = element[i]
        tag.addEventListener(eventName, callback)
    }
}

var tags = es('.change')

bindAll(tags, 'click', function(event){
    log('这个绑定点击事件了')
    //点击后判断自身是否有active，有就去掉，没有就加上
    var tag = e('.change')
    toggleClass(tag, 'active')
    //点击后可以对显示的内容进行改变
    var show_list = e('.shopClass_list')
    toggleClass(show_list, 'hide')
    var show_img = e('.banner')
    toggleClass(show_img, 'hide')
})



var bindAllLister = function(){
    var buts = es('.buto-slid')
    bindAll(buts, "click", function(event){
        log('绑定这个按钮事件了')
        //获取按键元素
        var button = event.target
        //找到现在的index
        var index = nextIndex(button)
        showImage(index)
        showIndi(index)
    })
}

var nextIndex = function(button){
    var slid = button.parentElement
    log('slid',slid)
    var numberOfImage = parseInt(slid.dataset.image)
    log(numberOfImage)
    var numberOfActive = parseInt(slid.dataset.active)
    log(numberOfActive)
    var next = parseInt(button.dataset.nid)
    log(next)
    var index = (numberOfImage + numberOfActive + next) % numberOfImage
    slid.dataset.active = index
    log('index',index)
    return index
}

var showImage = function(index){
  log('index',index)
    var sele = e(".imghide" + index)
    log('sele',sele)
    removeAll('imghide', 'imgshow')
    toggleClass(sele, 'imgshow')
}

var showIndi = function(index){
  var selector = e(".slidindi" + index)
  log('selector',selector)
  removeAll('slidindi', 'active')
  log(1)
  toggleClass(selector, 'active')
}

var autoactive = function(){
    var ele = e('.buto-slid-2')
    setInterval(function(){
        ele.click()
    },2000)
}

bindAllLister()
autoactive()
