function HelloWorldPlugin(options) {
    // 使用配置（options）设置插件实例
}

HelloWorldPlugin.prototype.apply = function(compiler) {
    compiler.plugin('done', function() {
        console.log('你的实际风景是什么');
    });
};

module.exports = HelloWorldPlugin;