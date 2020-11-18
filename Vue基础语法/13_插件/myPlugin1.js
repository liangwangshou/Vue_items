(function () {
  var MyPlugin = {};
  MyPlugin.install = function (Vue, options) {
    Vue.myGlobalMethods = function () {
      console.log("Vue函数对象的方法myGlobalMethods");
    };
    Vue.directive("my-directive", function (el, bindding) {
      el.textContent = bindding.value.toUpperCase();
    });
    Vue.prototype.$myMethod = function () {
      console.log("Vue的实例方法");
    };
  };
  window.MyPlugin = MyPlugin;
})();
