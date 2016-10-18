var FileType = Object.freeze({
    JAVASCRIPT : 'javascript',
    CSS : 'css'
});

var AutoVersion = function (filetype, fileLists) {
    'use strict';
    this.currIndex = 0;
    this.fileType = filetype;
    this.fileLists = fileLists;
};

var $$importJs = function (av) {
    'use strict';
    if (av.currIndex < av.fileLists.length) {
        var fileref = document.createElement("script");
        fileref.type = "text/javascript";
        if (fileref.readyState) {
            /*This is for IE*/
            fileref.onreadystatechange = function () {
                if (fileref.readyState === "loaded" || fileref.readyState === "complete") {
                    fileref.onreadystatechange = null;
                    window.console.info('Fetched ' + av.fileLists[av.currIndex]);
                    av.currIndex = av.currIndex + 1;
                    $$importJs(av);
                }
            };
        } else {
            /*Everything else*/
            fileref.onload = function () {
                window.console.info('Fetched ' + av.fileLists[av.currIndex]);
                av.currIndex = av.currIndex + 1;
                $$importJs(av);
            };
        }
        fileref.src = av.fileLists[av.currIndex] + '?timeStamp=' + new Date().getTime();
        document.getElementsByTagName("body")[0].appendChild(fileref);
    }
};

AutoVersion.prototype.$import = function () {
    'use strict';
    var index, fileref;
    if (this.fileLists.length > 0) {
        if (this.fileType.toLowerCase() === FileType.CSS) {
            for (index = 0; index < this.fileLists.length; index = index + 1) {
                fileref = document.createElement("link");
                fileref.setAttribute("rel", "stylesheet");
                fileref.setAttribute("type", "text/css");
                fileref.setAttribute("href", this.fileLists[index] + '?timeStamp=' + new Date().getTime());
                document.getElementsByTagName("head")[0].appendChild(fileref);
            }
        } else if (this.fileType.toLowerCase() === FileType.JAVASCRIPT) {
            $$importJs(this);
        }
    }
};
