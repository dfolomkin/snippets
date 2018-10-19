function bind(fn, ctx) {
  return function() {
    return fn.call(ctx);
  };
}

var obj = {
  param: "value",
  getParam: function() {
    console.log(this.param);
  }
};

//так работает и выдает "value"
obj.getParam();

//а так контекст теряется и выдает "undefined"
setTimeout(obj.getParam, 2000);

var bindedGetParam = bind(obj.getParam, obj);

//так по-прежнему работает
bindedGetParam();

//а теперь и так работает и не теряет контекст ( при вызове bindedGetParam() фактически вызывается obj.getParam.call(obj) )
setTimeout(bindedGetParam, 3000);
