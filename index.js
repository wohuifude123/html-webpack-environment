function OperateEnvironmentPlugin(options) {
    // 使用配置（options）设置插件实例
}

OperateEnvironmentPlugin.prototype.apply = function(compiler) {
    var self = this;
    var body = [];
    var head = [];
    
    compiler.plugin('done', function() {
        console.log('where');
    });
};

module.exports = OperateEnvironmentPlugin;