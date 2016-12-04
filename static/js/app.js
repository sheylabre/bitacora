'use strcit';
(function () {
    var w = window,
        d = document,
        b = document.body;

    var Binnacle = Binnacle || {};

    Binnacle.test = "text";
    Binnacle.quote = "quote";
    Binnacle.picture = "picture";
    Binnacle.postTypes = [Binnacle.test, Binnacle.quote, Binnacle.picture];

    Binnacle.postFormTemplates = {
        text:
            "<div class=\"content\">" +
                "<input name=\"title\" type=\"text\" class=\"title\" placeholder=\"Title\"/>" +
                "<textarea name=\"text\" class=\"text\"></textarea>" +
            "</div>" +
            "<div class=\"action\">" +
                "<input type=\"button\" name=\"publish\" class=\"flat button\" value=\"Publicar\" />" +
                "<input type=\"button\" name=\"discard\" class=\"flat button\" value=\"Descartar\"/>" +
            "</div>",
        quote:
            "<div class=\"content\">" +
                "<input name=\"title\" type=\"text\" class=\"title\" placeholder=\"Title\"/>" +
                "<textarea name=\"text\" class=\"text\"></textarea>" +
                "<input name=\"author\" type=\"text\" class=\"author\" placeholder=\"Author\"/>" +
            "</div>" +
            "<div class=\"action\">" +
                "<input type=\"button\" name=\"publish\" class=\"flat button\" value=\"Publicar\" />" +
                "<input type=\"button\" name=\"discard\" class=\"flat button\" value=\"Descartar\"/>" +
            "</div>",
        picture:
            "<div class=\"content\">" +
                "<input name=\"title\" type=\"text\" class=\"title\" placeholder=\"Title\"/>" +
                "<div class=\"file-loader\">" +
                    "<input type=\"button\" name=\"fake-load-image-button\" class=\"file flat button\" value=\"Buscar...\" />" +
                    "<span name=\"fake-load-image-text\">" +
                        "No se ha selecionado ningun archivo" +
                    "<span>" +
                    "<input type=\"file\" name=\"picture\" class=\"hidden\" placeholder=\"Selecionar Archivo\"/>" +
                "</div>" +
                "<img class=\"picture\" src=\"\" alt=\"alternative text\"/>" +
            "</div>" +
            "<div class=\"action\">" +
                "<input type=\"button\" name=\"publish\" class=\"flat button\" value=\"Publicar\" />" +
                "<input type=\"button\" name=\"discard\" class=\"flat button\" value=\"Descartar\"/>" +
            "</div>",
    };

    Binnacle.postContentTemplates = {
        text:
            "<div class=\"content\">" +
                "<div name=\"delete\" class=\"ghost button\"><i class=\"material-icons\">close</i></div>" +
                "<h1 class=\"title\">::TITLE::</h1>" +
                "<small class=\"date\"><i class=\"material-icons\">access_time</i>Publicado el ::DATE::</small>" +
                "<p class=\"text\">::TEXT::</p>" +
            "</div>",
        quote:
            "<div class=\"content\">" +
                "<div name=\"delete\" class=\"ghost button\"><i class=\"material-icons\">close</i></div>" +
                "<h1 class=\"title\">::TITLE::</h1>" +
                "<small class=\"date\"><i class=\"material-icons\">access_time</i>Publicado el ::DATE::</small>" +
                "<p class=\"text\">::TEXT::</p>" +
                "<small class=\"author\">::AUTHOR::</small>" +
            "</div>",
        picture:
            "<div class=\"content\">" +
                "<div name=\"delete\" class=\"ghost button\"><i class=\"material-icons\">close</i></div>" +
                "<h1 class=\"title\">::TITLE::</h1>" +
                "<small class=\"date\"><i class=\"material-icons\">access_time</i>Publicado el ::DATE::</small>" +
                "<img class=\"picture\" src=\"::FILEPATH::\" alt=\"::TITLE::\">" +
            "</div>",
    };

    Binnacle.Post = function (type) {
        this.tag = "div";
        this.date = new Date();
        this.type = (Binnacle.postTypes.indexOf(type) != -1)?type:"";
        this.formTemplate = (Binnacle.postTypes.indexOf(type) != -1)?Binnacle.postFormTemplates[type]:"";
        this.contentTemplate = (Binnacle.postTypes.indexOf(type) != -1)?Binnacle.postContentTemplates[type]:"";
        this.picture = null;
        this.title = null;
        this.element = null;
        this.text = null;
        this.author = null;
        this.publisher = null;
        this.discarder = null;
        console.log(type);
        console.log(this.type);
    };

    Binnacle.Post.prototype.getType = function () {
        return this.type;
    };

    Binnacle.Post.prototype.getFormTemplate = function () {
        return this.formTemplate;
    };

    Binnacle.Post.prototype.getContentTemplate = function () {
        return this.contentTemplate;
    };

    Binnacle.Post.prototype.isUnpublished = function () {
        return (this.element === null)?true:this.element.classList.contains('unpublished');
    };

    Binnacle.Post.prototype.create = function () {
        this.element = document.createElement(this.tag)
        this.element.classList.add("unpublished", this.type, "post");
        this.element.innerHTML = this.formTemplate;
    };

    Binnacle.Post.prototype.push = function (target) {
        var targetIsEmpty = (target.children.length == 0);

        var existsUnpublishedPost = (target.querySelector('.unpublished.post') != null);

        if(existsUnpublishedPost) {
            var tooltip = d.createElement('div');
            tooltip.classList.add('tooltip', 'active')
            tooltip.innerText = "Existe una publicación pendiente";
        }
        else {
            if(targetIsEmpty){
                target.appendChild(this.element);
            }
            else {
                target.insertBefore(this.element, target.firstChild);
            }

            var post = this;

            this.publisher = this.element.querySelector('input[name="publish"]');
            this.publisher.addEventListener('click', function() {
                post.publish();
            }, true);

            this.discarder = this.element.querySelector('input[name="discard"]');
            this.discarder.addEventListener('click', function() {
                post.discard();
            }, true)
        }
    };

    Binnacle.Post.prototype.publish = function() {
        if(this.element.querySelector('input[name="title"]') != null){
            this.title = this.element.querySelector('input[name="title"]')
                .value
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        }

        if(this.element.querySelector('textarea[name="text"]')){
            this.text = this.element
                .querySelector('textarea[name="text"]')
                .value
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/\n/g, '<br/>')
                .replace(/<br\/>*$/, "");
        }

        if(this.element.querySelector('input[name="author"]')){
            this.author = this.element
                .querySelector('input[name="author"]')
                .value
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        }

        this.date = this.date.toString();

        var innerHTML = this.contentTemplate
            .replace("::TITLE::", this.title)
            .replace("::DATE::", this.date)
            .replace("::TEXT::", this.text)
            .replace("::AUTHOR::", this.author);
        this.element.innerHTML = innerHTML;

        this.element.classList.remove('unpublished');
    };

    Binnacle.Post.prototype.discard = function() {
        this.element.remove();
    };


    w.addEventListener('load', function () {
        var dashboard = d.getElementById('dashboard');
        var textPublisher = d.getElementById('text');
        var quotePublisher = d.getElementById('quote');
        var picturePublisher = d.getElementById('picture');

        textPublisher.addEventListener('click', function() {
            var newTextPost = new Binnacle.Post("text");
            newTextPost.create();
            newTextPost.push(dashboard);
        })

        quotePublisher.addEventListener('click', function() {
            var newQuotePost = new Binnacle.Post("quote");
            newQuotePost.create();
            newQuotePost.push(dashboard);
        })

        picturePublisher.addEventListener('click', function() {
            var newPicturePost = new Binnacle.Post("picture");
            newPicturePost.create();
            newPicturePost.push(dashboard);
        })
    });
})();
