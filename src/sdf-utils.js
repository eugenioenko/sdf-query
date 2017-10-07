function SdfUtils(){

}
SdfUtils.prototype.validateArgTypes = function(args, types){
    // the number of arguments passed should be the same as required ones
    if(args.length != (types.length)){
        return false;
    }
    /*
    function valideTypeInArray(item, type){
        var valid = false;
        for(var j = 0; j < type.length; ++j){
            if(item === type[j]){
                valid = true;
                break;
            } 
        }
        if(!valid){
            return false;
        }   
        return true;
    }*/

    for(var i = 0; i < args.length; ++i){
         if(types[i] == "any"){
             args[i] = (args[i]).toString();
         /*}else if(types[i].constructor === Array){
            if(!valideTypeInArray(args[i], types[i])){
                return false;
            }*/
         } else {
             if(typeof args[i] !== types[i]){
                 return false;
             } 
         }
    }
    return true;
};

SdfUtils.prototype.createClassList = function(classList){
    var classes = classList.split(' ');
    for (var i = 0; i < classes.length; ++i){
        classes[i] = classes[i].replace(' ', '');
    }
    return classes;
};

if(typeof window.sdf === "undefined"){
    window.sdf = {};
}
window.sdf.utils =  new SdfUtils();