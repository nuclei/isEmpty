(function(window, document){
    var _config = {
        class: 'is-empty'
    };
    var _nodeList;
    // toggle class
    var _toggleClass = function(element){
        if(element.value === ''){
            element.classList.add(_config.class);
        }else{
            element.classList.remove(_config.class);
        }
    }
    // main function
    var isempty = function(nodeList, userConfig){
        // manual check
        if(typeof nodeList != "undefined" && typeof userConfig != "undefined" && NodeList.prototype.isPrototypeOf(_nodeList) ){
            Array.prototype.forEach.call(_nodeList, function(el){
                _toggleClass(el);
            });
        }
        // merge user config
        if(!NodeList.prototype.isPrototypeOf(nodeList)){
            userConfig = nodeList || {};
            nodeList = document.querySelectorAll('textarea, input:not([type=hidden]):not([type="radio"]):not([type="checkbox"]):not([type="submit"]):not([type="button"])');
        }
        // store nodelist globally
        _nodeList = nodeList;
        // add config to global config
        for (var attrname in userConfig) {
            _config[attrname] = userConfig[attrname];
        }

        Array.prototype.forEach.call(_nodeList, function(el){
            // initial set class
            window.setTimeout(function(){
                _toggleClass(el);
            }, 100);
            // toggle on keyup
            el.addEventListener('keyup', function(){
                _toggleClass(el);
            });
            el.addEventListener('blur', function(){
                _toggleClass(el);
            });
        });

        return isempty;
    };
    // export isempty
    window.isempty = isempty;
}(window, document));
