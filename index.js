/**
 * Created by Pzyme on 14-3-15.
 * Author Pzy.me (justmepzy@gmail.com)
 * Link http://pzy.me
 */


(function(module) {
    "use strict";
    
    var Youku = {},
        embed = '<div class="video-container">' +
            '<iframe class="youku-plugin" src="http://player.youku.com/player.php/sid/$1==/v.swf" allowfullscreen></iframe>' +
            '</div>';

    Youku.parse = function(data, callback) {
        var	regularUrl = /<a href="(?:http?:\/\/)?(?:v\.)youku.com\/v_show\/id_([\w\-_]+)==\.html(\?.*)?"[^<]*?>.+<\/a>/;

        if (data.postData.content.match(regularUrl)) {
            data.postData.content = data.postData.content.replace(regularUrl, embed);
        }

        callback(null, data);
    };

    module.exports = Youku;
}(module));
