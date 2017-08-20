VideoCaption.prototype = {
      langTemplate: ['<div class="grouped-controls">', '<button class="control toggle-captions" aria-disabled="false">', '<span class="icon-fallback-img">', '<span class="icon fa fa-cc" aria-hidden="true"></span>', '<span class="sr control-text">', gettext("Turn on closed captioning"), "</span>", "</span>", "</button>", '<button class="control toggle-transcript" aria-disabled="false">', '<span class="icon-fallback-img">', '<span class="icon fa fa-quote-left" aria-hidden="true"></span>', '<span class="sr control-text">', gettext("Turn off transcript"), "</span>", "</span>", "</button>", '<div class="lang menu-container" role="application">', '<button class="control language-menu" aria-label="', gettext("Language: Press the UP arrow key to enter the language menu, then use UP and DOWN arrow keys to navigate language options. Press ENTER to change to the selected language."), '" aria-disabled="false">', '<span class="icon-fallback-img">', '<span class="icon fa fa-caret-left" aria-hidden="true"></span>', '<span class="sr control-text">', gettext("Open language menu"), "</span>", "</span>", "</button>", "</div>", "</div>"].join(""),
      template: ['<div class="subtitles" role="region" aria-label="', gettext("Activating an item in this group will spool the video to the corresponding time point. To skip transcript, go to previous item."), '">', '<ol id="transcript-captions" class="subtitles-menu">', "</ol>", "</div>"].join(""),
      destroy: function() {
        this.state.el.off({
          "caption:fetch": this.fetchCaption,
          "caption:resize": this.onResize,
          "caption:update": this.onCaptionUpdate,
          ended: this.pause,
          fullscreen: this.onResize,
          pause: this.pause,
          play: this.play,
          destroy: this.destroy
        }).removeClass("is-captions-rendered");
        if (this.fetchXHR && this.fetchXHR.abort) {
          this.fetchXHR.abort()
        }
        if (this.availableTranslationsXHR && this.availableTranslationsXHR.abort) {
          this.availableTranslationsXHR.abort()
        }
        this.subtitlesEl.remove();
        this.container.remove();
        delete this.state.videoCaption
      },
      renderElements: function() {
        var languages = this.state.config.transcriptLanguages;
        this.loaded = false;
        this.subtitlesEl = $(this.template);
        this.subtitlesMenuEl = this.subtitlesEl.find(".subtitles-menu");
        this.container = $(this.langTemplate);
        this.captionControlEl = this.container.find(".toggle-captions");
        this.captionDisplayEl = this.state.el.find(".closed-captions");
        this.transcriptControlEl = this.container.find(".toggle-transcript");
        this.languageChooserEl = this.container.find(".lang");
        this.menuChooserEl = this.languageChooserEl.parent();
        if (_.keys(languages).length) {
          this.renderLanguageMenu(languages);
          this.fetchCaption()
        }
      },
      bindHandlers: function() {
        var state = this.state,
        events = ["mouseover", "mouseout", "mousedown", "click", "focus", "blur", "keydown"].join(" ");
        this.captionControlEl.on({
          click: this.toggleClosedCaptions,
          keydown: this.handleCaptionToggle
        });
        this.transcriptControlEl.on({
          click: this.toggle,
          keydown: this.handleTranscriptToggle
        });
        this.subtitlesMenuEl.on({
          mouseenter: this.onMouseEnter,
          mouseleave: this.onMouseLeave,
          mousemove: this.onMovement,
          mousewheel: this.onMovement,
          DOMMouseScroll: this.onMovement
        }).on(events, "li[data-index]", this.onCaptionHandler);
        this.container.on({
          mouseenter: this.onContainerMouseEnter,
          mouseleave: this.onContainerMouseLeave
        });
        if (this.showLanguageMenu) {
          this.languageChooserEl.on({
            keydown: this.handleKeypress
          },
          ".language-menu");
          this.languageChooserEl.on({
            keydown: this.handleKeypressLink
          },
          ".control-lang")
        }
        state.el.on({
          "caption:fetch": this.fetchCaption,
          "caption:resize": this.onResize,
          "caption:update": this.onCaptionUpdate,
          ended: this.pause,
          fullscreen: this.onResize,
          pause: this.pause,
          play: this.play,
          destroy: this.destroy
        });
        if (state.videoType === "html5" && state.config.autohideHtml5) {
          this.subtitlesMenuEl.on("scroll", state.videoControl.showControls)
        }
      },
      onCaptionUpdate: function(event, time) {
        this.updatePlayTime(time)
      },
      handleCaptionToggle: function(event) {
        var KEY = $.ui.keyCode,
        keyCode = event.keyCode;
        switch (keyCode) {
        case KEY.SPACE:
        case KEY.ENTER:
          event.preventDefault();
          this.toggleClosedCaptions(event)
        }
      },
      handleTranscriptToggle: function(event) {
        var KEY = $.ui.keyCode,
        keyCode = event.keyCode;
        switch (keyCode) {
        case KEY.SPACE:
        case KEY.ENTER:
          event.preventDefault();
          this.toggle(event)
        }
      },
      handleKeypressLink: function(event) {
        var KEY = $.ui.keyCode,
        keyCode = event.keyCode,
        focused, index, total;
        switch (keyCode) {
        case KEY.UP:
          event.preventDefault();
          focused = $(":focus").parent();
          index = this.languageChooserEl.find("li").index(focused);
          total = this.languageChooserEl.find("li").size() - 1;
          this.previousLanguageMenuItem(event, index);
          break;
        case KEY.DOWN:
          event.preventDefault();
          focused = $(":focus").parent();
          index = this.languageChooserEl.find("li").index(focused);
          total = this.languageChooserEl.find("li").size() - 1;
          this.nextLanguageMenuItem(event, index, total);
          break;
        case KEY.ESCAPE:
          this.closeLanguageMenu(event);
          break;
        case KEY.ENTER:
        case KEY.SPACE:
          return true
        }
      },
      handleKeypress: function(event) {
        var KEY = $.ui.keyCode,
        keyCode = event.keyCode;
        switch (keyCode) {
        case KEY.ENTER:
        case KEY.SPACE:
        case KEY.UP:
          event.preventDefault();
          this.openLanguageMenu(event);
          break;
        case KEY.ESCAPE:
          this.closeLanguageMenu(event);
          break
        }
        return event.keyCode === KEY.TAB
      },
      nextLanguageMenuItem: function(event, index, total) {
        event.preventDefault();
        if (event.altKey || event.shiftKey) {
          return true
        }
        if (index === total) {
          this.languageChooserEl.find(".control-lang").first().focus()
        } else {
          this.languageChooserEl.find("li:eq(" + index + ")").next().find(".control-lang").focus()
        }
        return false
      },
      previousLanguageMenuItem: function(event, index) {
        event.preventDefault();
        if (event.altKey || event.shiftKey) {
          return true
        }
        if (index === 0) {
          this.languageChooserEl.find(".control-lang").last().focus()
        } else {
          this.languageChooserEl.find("li:eq(" + index + ")").prev().find(".control-lang").focus()
        }
        return false
      },
      openLanguageMenu: function(event) {
        event.preventDefault();
        var button = this.languageChooserEl,
        menu = button.parent().find(".menu");
        this.state.el.trigger("language_menu:show");
        button.addClass("is-opened");
        menu.find(".control-lang").last().focus()
      },
      closeLanguageMenu: function(event) {
        event.preventDefault();
        var button = this.languageChooserEl;
        this.state.el.trigger("language_menu:hide");
        button.removeClass("is-opened").find(".language-menu").focus()
      },
      onCaptionHandler: function(event) {
        switch (event.type) {
        case "mouseover":
        case "mouseout":
          this.captionMouseOverOut(event);
          break;
        case "mousedown":
          this.captionMouseDown(event);
          break;
        case "click":
          this.captionClick(event);
          break;
        case "focusin":
          this.captionFocus(event);
          break;
        case "focusout":
          this.captionBlur(event);
          break;
        case "keydown":
          this.captionKeyDown(event);
          break
        }
      },
      onContainerMouseEnter: function(event) {
        event.preventDefault();
        $(event.currentTarget).find(".lang").addClass("is-opened");
        this.state.el.trigger("language_menu:show")
      },
      onContainerMouseLeave: function(event) {
        event.preventDefault();
        $(event.currentTarget).find(".lang").removeClass("is-opened");
        this.state.el.trigger("language_menu:hide")
      },
      onMouseEnter: function() {
        if (this.frozen) {
          clearTimeout(this.frozen)
        }
        this.frozen = setTimeout(this.onMouseLeave, this.state.config.captionsFreezeTime)
      },
      onMouseLeave: function() {
        if (this.frozen) {
          clearTimeout(this.frozen)
        }
        this.frozen = null;
        if (this.playing) {
          this.scrollCaption()
        }
      },
      onMovement: function() {
        this.onMouseEnter()
      },
      getStartEndTimes: function() {
        var config = this.state.config;
        var startTime = config.startTime * 1e3;
        var endTime = config.endTime !== null ? config.endTime * 1e3: null;
        return [startTime, endTime]
      },
      getBoundedCaptions: function() {
        var times = this.getStartEndTimes();
        var results = this.sjson.filter.apply(this.sjson, times);
        var start = results.start;
        var captions = results.captions;
        return {
          start: start,
          captions: captions
        }
      },
      fetchCaption: function(fetchWithYoutubeId) {
        var self = this,
        state = this.state,
        language = state.getCurrentLanguage(),
        url = state.config.transcriptTranslationUrl.replace("__lang__", language),
        data,
        youtubeId;
        if (this.loaded) {
          this.hideCaptions(false)
        }
        if (this.fetchXHR && this.fetchXHR.abort) {
          this.fetchXHR.abort()
        }
        if (state.videoType === "youtube" || fetchWithYoutubeId) {
          try {
            youtubeId = state.youtubeId("1.0")
          } catch(err) {
            youtubeId = null
          }
          if (!youtubeId) {
            return false
          }
          data = {
            videoId: youtubeId
          }
        }
        state.el.removeClass("is-captions-rendered");
        this.fetchXHR = $.ajaxWithPrefix({
          url: url,
          notifyOnError: false,
          data: data,
          success: function(sjson) {
            self.sjson = new Sjson(sjson);
            var results = self.getBoundedCaptions();
            var start = results.start;
            var captions = results.captions;
            if (self.loaded) {
              if (self.rendered) {
                self.renderCaption(start, captions);
                self.updatePlayTime(state.videoPlayer.currentTime)
              }
            } else {
              if (state.isTouch) {
                self.subtitlesEl.find(".subtitles-menu").html(gettext("<li>Transcript will be displayed when " + "you start playing the video.</li>"))
              } else {
                self.renderCaption(start, captions)
              }
              self.hideCaptions(state.hide_captions, false);
              self.state.el.find(".video-wrapper").after(self.subtitlesEl);
              self.state.el.find(".secondary-controls").append(self.container);
              self.bindHandlers()
            }
            self.loaded = true
          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.log("[Video info]: ERROR while fetching captions.");
            console.log("[Video info]: STATUS:", textStatus + ", MESSAGE:", "" + errorThrown);
            if (_.keys(state.config.transcriptLanguages).length > 1) {
              self.fetchAvailableTranslations()
            } else if (!fetchWithYoutubeId && state.videoType === "html5") {
              console.log("[Video info]: Html5 mode fetching caption with youtubeId.");
              self.fetchCaption(true)
            } else {
              self.hideCaptions(true, false);
              self.state.el.find(".lang").hide();
              self.state.el.find(".transcript-control").hide();
              self.subtitlesEl.hide()
            }
          }
        });
        return true
      },
      fetchAvailableTranslations: function() {
        var self = this,
        state = this.state;
        this.availableTranslationsXHR = $.ajaxWithPrefix({
          url: state.config.transcriptAvailableTranslationsUrl,
          notifyOnError: false,
          success: function(response) {
            var currentLanguages = state.config.transcriptLanguages,
            newLanguages = _.pick(currentLanguages, response);
            state.config.transcriptLanguages = newLanguages;
            self.container.find(".langs-list").remove();
            if (_.keys(newLanguages).length) {
              self.fetchCaption();
              self.renderLanguageMenu(newLanguages)
            }
          },
          error: function() {
            self.hideCaptions(true, false);
            self.state.el.find(".lang").hide();
            self.state.el.find(".transcript-control").hide();
            self.subtitlesEl.hide()
          }
        });
        return this.availableTranslationsXHR
      },
      onResize: function() {
        this.subtitlesEl.find(".spacing").first().height(this.topSpacingHeight()).end().find(".spacing").last().height(this.bottomSpacingHeight());
        this.scrollCaption();
        this.setSubtitlesHeight()
      },
      renderLanguageMenu: function(languages) {
        var self = this,
        state = this.state,
        menu = $('<ol class="langs-list menu">'),
        currentLang = state.getCurrentLanguage();
        if (_.keys(languages).length < 2) {
          self.container.find(".lang").remove();
          return false
        }
        this.showLanguageMenu = true;
        $.each(languages,
        function(code, label) {
          var li = $('<li data-lang-code="' + code + '" />'),
          link = $('<button class="control control-lang">' + label + "</button>");
          if (currentLang === code) {
            li.addClass("is-active")
          }
          li.append(link);
          menu.append(li)
        });
        this.languageChooserEl.append(menu);
        menu.on("click", ".control-lang",
        function(e) {
          var el = $(e.currentTarget).parent(),
          state = self.state,
          langCode = el.data("lang-code");
          if (state.lang !== langCode) {
            state.lang = langCode;
            el.addClass("is-active").siblings("li").removeClass("is-active");
            state.el.trigger("language_menu:change", [langCode]);
            self.fetchCaption()
          }
        })
      },
      buildCaptions: function(container, start, captions) {
        var process = function(text, index) {
          var liEl = $("<li>", {
            role: "link",
            "data-index": index,
            "data-start": start[index],
            tabindex: 0
          }).html(text);
          return liEl[0]
        };
        return AsyncProcess.array(captions, process).done(function(list) {
          container.append(list)
        })
      },
      renderCaption: function(start, captions) {
        var self = this;
        var onRender = function() {
          self.addPaddings();
          self.autoScrolling = true;
          self.currentCaptionIndex = -1;
          self.isMouseFocus = false;
          self.rendered = true;
          self.state.el.addClass("is-captions-rendered")
        };
        this.rendered = false;
        this.subtitlesMenuEl.empty();
        this.setSubtitlesHeight();
        this.buildCaptions(this.subtitlesMenuEl, start, captions).done(onRender)
      },
      addPaddings: function() {
        this.subtitlesMenuEl.prepend($('<li class="spacing">').height(this.topSpacingHeight()).attr("tabindex", -1)).append($('<li class="spacing">').height(this.bottomSpacingHeight()).attr("tabindex", -1))
      },
      captionMouseOverOut: function(event) {
        var caption = $(event.target),
        captionIndex = parseInt(caption.attr("data-index"), 10);
        if (captionIndex === this.currentCaptionIndex) {
          if (event.type === "mouseover") {
            caption.removeClass("focused")
          } else {
            caption.addClass("focused")
          }
        }
      },
      captionMouseDown: function(event) {
        var caption = $(event.target);
        this.isMouseFocus = true;
        this.autoScrolling = true;
        caption.removeClass("focused");
        this.currentCaptionIndex = -1
      },
      captionClick: function(event) {
        this.seekPlayer(event)
      },
      captionFocus: function(event) {
        var caption = $(event.target),
        captionIndex = parseInt(caption.attr("data-index"), 10);
        if (this.isMouseFocus) {
          this.autoScrolling = true;
          caption.removeClass("focused");
          this.currentCaptionIndex = -1
        } else {
          this.currentCaptionIndex = captionIndex;
          caption.addClass("focused");
          if (captionIndex <= 1 || captionIndex >= this.sjson.getSize() - 2) {
            this.autoScrolling = false
          }
        }
      },
      captionBlur: function(event) {
        var caption = $(event.target),
        captionIndex = parseInt(caption.attr("data-index"), 10);
        caption.removeClass("focused");
        if (captionIndex === 0 || captionIndex === this.sjson.getSize() - 1) {
          this.autoScrolling = true
        }
      },
      captionKeyDown: function(event) {
        this.isMouseFocus = false;
        if (event.which === 13) {
          this.seekPlayer(event)
        }
      },
      scrollCaption: function() {
        var el = this.subtitlesEl.find(".current:first");
        if (!this.frozen && el.length && this.autoScrolling) {
          this.subtitlesEl.scrollTo(el, {
            offset: -1 * this.calculateOffset(el)
          })
        }
      },
      play: function() {
        var captions, startAndCaptions, start;
        if (this.loaded) {
          if (!this.rendered) {
            startAndCaptions = this.getBoundedCaptions();
            start = startAndCaptions.start;
            captions = startAndCaptions.captions;
            this.renderCaption(start, captions)
          }
          this.playing = true
        }
      },
      pause: function() {
        if (this.loaded) {
          this.playing = false
        }
      },
      updatePlayTime: function(time) {
        var state = this.state,
        params, newIndex;
        if (this.loaded) {
          if (state.isFlashMode()) {
            time = Time.convert(time, state.speed, "1.0")
          }
          time = Math.round(time * 1e3 + 100);
          var times = this.getStartEndTimes();
          params = [time].concat(times);
          newIndex = this.sjson.search.apply(this.sjson, params);
          if (typeof newIndex !== "undefined" && newIndex !== -1 && this.currentIndex !== newIndex) {
            if (typeof this.currentIndex !== "undefined") {
              this.subtitlesEl.find("li.current").removeClass("current")
            }
            this.subtitlesEl.find("li[data-index='" + newIndex + "']").addClass("current");
            this.currentIndex = newIndex;
            this.captionDisplayEl.text(this.subtitlesEl.find("li[data-index='" + newIndex + "']").text());
            this.scrollCaption()
          }
        }
      },
      seekPlayer: function(event) {
        var state = this.state,
        time = parseInt($(event.target).data("start"), 10);
        if (state.isFlashMode()) {
          time = Math.round(Time.convert(time, "1.0", state.speed))
        }
        state.trigger("videoPlayer.onCaptionSeek", {
          type: "onCaptionSeek",
          time: time / 1e3
        });
        event.preventDefault()
      },
      calculateOffset: function(element) {
        return this.captionHeight() / 2 - element.height() / 2
      },
      topSpacingHeight: function() {
        return this.calculateOffset(this.subtitlesEl.find("li:not(.spacing)").first())
      },
      bottomSpacingHeight: function() {
        return this.calculateOffset(this.subtitlesEl.find("li:not(.spacing)").last())
      },
      toggle: function(event) {
        event.preventDefault();
        if (this.state.el.hasClass("closed")) {
          this.hideCaptions(false, true, true)
        } else {
          this.hideCaptions(true, true, true)
        }
      },
      handleCaptioningCookie: function() {
        if ($.cookie("show_closed_captions") === "true") {
          this.state.showClosedCaptions = true;
          this.showClosedCaptions();
          $.cookie("show_closed_captions", "true", {
            expires: 3650,
            path: "/"
          })
        } else {
          this.hideClosedCaptions()
        }
      },
      toggleClosedCaptions: function(event) {
        event.preventDefault();
        if (this.state.el.hasClass("has-captions")) {
          this.state.showClosedCaptions = false;
          this.updateCaptioningCookie(false);
          this.hideClosedCaptions()
        } else {
          this.state.showClosedCaptions = true;
          this.updateCaptioningCookie(true);
          this.showClosedCaptions()
        }
      },
      showClosedCaptions: function() {
        this.state.el.addClass("has-captions");
        this.captionDisplayEl.show().addClass("is-visible");
        this.captionControlEl.addClass("is-active").find(".control-text").text(gettext("Hide closed captions"));
        if (this.subtitlesEl.find(".current").text()) {
          this.captionDisplayEl.text(this.subtitlesEl.find(".current").text())
        } else {
          this.captionDisplayEl.text(gettext("(Caption will be displayed when you start playing the video.)"))
        }
      },
      hideClosedCaptions: function() {
        this.state.el.removeClass("has-captions");
        this.captionDisplayEl.hide().removeClass("is-visible");
        this.captionControlEl.removeClass("is-active").find(".control-text").text(gettext("Turn on closed captioning"))
      },
      updateCaptioningCookie: function(method) {
        if (method) {
          $.cookie("show_closed_captions", "true", {
            expires: 3650,
            path: "/"
          })
        } else {
          $.cookie("show_closed_captions", null, {
            path: "/"
          })
        }
      },
      hideCaptions: function(hide_captions, update_cookie, trigger_event) {
        var transcriptControlEl = this.transcriptControlEl,
        state = this.state,
        text;
        if (typeof update_cookie === "undefined") {
          update_cookie = true
        }
        if (hide_captions) {
          state.captionsHidden = true;
          state.el.addClass("closed");
          text = gettext("Turn on transcripts");
          if (trigger_event) {
            this.state.el.trigger("captions:hide")
          }
          transcriptControlEl.removeClass("is-active").find(".control-text").text(gettext(text))
        } else {
          state.captionsHidden = false;
          state.el.removeClass("closed");
          this.scrollCaption();
          text = gettext("Turn off transcripts");
          if (trigger_event) {
            this.state.el.trigger("captions:show")
          }
          transcriptControlEl.addClass("is-active").find(".control-text").text(gettext(text))
        }
        if (state.resizer) {
          if (state.isFullScreen) {
            state.resizer.setMode("both")
          } else {
            state.resizer.alignByWidthOnly()
          }
        }
        this.setSubtitlesHeight();
        if (update_cookie) {
          $.cookie("hide_captions", hide_captions, {
            expires: 3650,
            path: "/"
          })
        }
      },
      captionHeight: function() {
        var state = this.state;
        if (state.isFullScreen) {
          return state.container.height() - state.videoFullScreen.height
        } else {
          return state.container.height()
        }
      },
      setSubtitlesHeight: function() {
        var height = 0,
        state = this.state;
        if (state.captionsHidden === undefined && state.hide_captions || state.captionsHidden === true) {
          height = state.el.find(".video-controls").height() + .5 * state.el.find(".slider").height()
        }
        this.subtitlesEl.css({
          maxHeight: this.captionHeight() - height
        })
      }
    };
    return VideoCaption
  })
})(RequireJS.define);



//Override the default confirm dialog by rails
$.rails.allowAction = function(link){
  if (link.data("confirm") == undefined){
    return true;
  }
  $.rails.showConfirmationDialog(link);
  return false;
}
//User click confirm button
$.rails.confirmed = function(link){
  link.data("confirm", null);
  link.trigger("click.rails");
}
//Display the confirmation dialog
$.rails.showConfirmationDialog = function(link){
  var message = link.data("confirm");
  $("#dialog-confirm").dialog({
    resizable: false,
    height: "auto",
    width: 400,
    modal: true,
    buttons: {
      "确定": function() {
        $(this).dialog("close");
        $.rails.confirmed(link);
      },
      "取消": function() {
        $(this).dialog("close");
      }
    }
  });
  $("#dialog-confirm-content").html(message);
  $("#dialog-confirm").dialog("open");
}

jQuery(document).ready( function(){       
  jQuery("#myButton").click(showDialog);
  $myDialog = jQuery('#dialog-confirm');
  $myDialog.dialog({ 
    resizable: false,
    height: "auto",
    width: 400,
    modal: true,
    autoOpen: false,
    title:'Hello World',
    overlay: { opacity: 0.5, background: 'black'},
    buttons: {
      "确定": function() {
        $(this).dialog("close");
        //$.rails.confirmed(link);
      },
      "取消": function() {
        $(this).dialog("close");
      }
    }
    });
  }
);

var showDialog = function() {
  $myDialog.show(); 
  $myDialog.dialog("open");
}

var closeDialog = function() {
  $myDialog.dialog("close");
}


