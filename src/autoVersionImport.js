var FileType = Object.freeze({
    JAVASCRIPT : 'javascript',
    CSS : 'css'
});

var AutoVersion = function (filetype, fileLists) {
    'use strict';
    this.fileType = filetype;
    this.fileLists = fileLists;
};

AutoVersion.prototype.importAll = function () {
    'use strict';
    var index, fileref;
    if (this.fileLists.length > 0) {
        for (index = 0; index < this.fileLists.length; index = index + 1) {
            if (this.fileType.toLowerCase() === FileType.JAVASCRIPT) {
                fileref = document.createElement('script');
                fileref.setAttribute("type", "text/javascript");
                fileref.setAttribute("src", this.fileLists[index] + '?timeStamp=' + new Date().getTime());
                document.getElementsByTagName("body")[0].appendChild(fileref);
            } else if (this.fileType.toLowerCase() === FileType.CSS) {
                fileref = document.createElement("link");
                fileref.setAttribute("rel", "stylesheet");
                fileref.setAttribute("type", "text/css");
                fileref.setAttribute("href", this.fileLists[index] + '?timeStamp=' + new Date().getTime());
                document.getElementsByTagName("head")[0].appendChild(fileref);
            }
        }
    }
};