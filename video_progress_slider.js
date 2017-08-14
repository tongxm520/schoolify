(function(requirejs, require, define){
  define("video/06_video_progress_slider.js", [],
  function() {
    var template = ['<div class="slider" title="', gettext("Video position"), '"></div>'].join("");
    return function(state) {
      var dfd = $.Deferred();
      state.videoProgressSlider = {};
      _makeFunctionsPublic(state);
      _renderElements(state);
      dfd.resolve();
      return dfd.promise()
    };
    function _makeFunctionsPublic(state) {
      var methodsDict = {
        destroy: destroy,
        buildSlider: buildSlider,
        getRangeParams: getRangeParams,
        onSlide: onSlide,
        onStop: onStop,
        updatePlayTime: updatePlayTime,
        updateStartEndTimeRegion: updateStartEndTimeRegion,
        notifyThroughHandleEnd: notifyThroughHandleEnd,
        getTimeDescription: getTimeDescription
      };
      state.bindTo(methodsDict, state.videoProgressSlider, state)
    }
    function destroy() {
      this.videoProgressSlider.el.removeAttr("tabindex").slider("destroy");
      this.el.off("destroy", this.videoProgressSlider.destroy);
      delete this.videoProgressSlider
    }
    function _renderElements(state) {
      state.videoProgressSlider.el = $(template);
      state.el.find(".video-controls").prepend(state.videoProgressSlider.el);
      state.videoProgressSlider.buildSlider();
      _buildHandle(state)
    }
    function _buildHandle(state) {
      state.videoProgressSlider.handle = state.videoProgressSlider.el.find(".ui-slider-handle");
      state.videoProgressSlider.el.attr("tabindex", -1);
      state.videoProgressSlider.handle.attr({
        role: "slider",
        title: gettext("Video position"),
        "aria-disabled": false,
        "aria-valuetext": getTimeDescription(state.videoProgressSlider.slider.slider("option", "value")),
        "aria-valuemax": state.videoPlayer.duration(),
        "aria-valuemin": "0",
        "aria-valuenow": state.videoPlayer.currentTime
      });
      state.el.on("destroy", state.videoProgressSlider.destroy)
    }
    function buildSlider() {
      this.videoProgressSlider.slider = this.videoProgressSlider.el.slider({
        range: "min",
        min: this.config.startTime,
        max: this.config.endTime,
        slide: this.videoProgressSlider.onSlide,
        stop: this.videoProgressSlider.onStop
      });
      this.videoProgressSlider.sliderProgress = this.videoProgressSlider.slider.find(".ui-slider-range.ui-widget-header.ui-slider-range-min")
    }
    function updateStartEndTimeRegion(params) {
      var start, end, duration, rangeParams;
      if (!params.duration) {
        return
      } else {
        duration = params.duration
      }
      start = this.config.startTime;
      end = this.config.endTime;
      if (start > duration) {
        start = 0
      } else if (this.isFlashMode()) {
        start /= Number(this.speed)
      }
      if (end === null || end > duration) {
        end = duration
      } else if (this.isFlashMode()) {
        end /= Number(this.speed)
      }
      if (start === 0 && end === duration) {
        return
      }
      rangeParams = getRangeParams(start, end, duration)
    }
    function getRangeParams(startTime, endTime, duration) {
      var step = 100 / duration,
      left = startTime * step,
      width = endTime * step - left;
      return {
        left: left + "%",
        width: width + "%"
      }
    }
    function onSlide(event, ui) {
      var time = ui.value,
      endTime = this.videoPlayer.duration();
      if (this.config.endTime) {
        endTime = Math.min(this.config.endTime, endTime)
      }
      this.videoProgressSlider.frozen = true;
      this.videoProgressSlider.lastSeekValue = time;
      this.trigger("videoControl.updateVcrVidTime", {
        time: time,
        duration: endTime
      });
      this.trigger("videoPlayer.onSlideSeek", {
        type: "onSlideSeek",
        time: time
      });
      this.videoProgressSlider.handle.attr("aria-valuetext", getTimeDescription(this.videoPlayer.currentTime))
    }
    function onStop(event, ui) {
      var _this = this;
      this.videoProgressSlider.frozen = true;
      if (this.videoProgressSlider.lastSeekValue !== ui.value) {
        this.trigger("videoPlayer.onSlideSeek", {
          type: "onSlideSeek",
          time: ui.value
        })
      }
      this.videoProgressSlider.handle.attr("aria-valuetext", getTimeDescription(this.videoPlayer.currentTime));
      setTimeout(function() {
        _this.videoProgressSlider.frozen = false
      },
      200)
    }
    function updatePlayTime(params) {
      var time = Math.floor(params.time);
      var endTime = Math.floor(params.duration);
      if (this.config.endTime !== null) {
        endTime = Math.min(this.config.endTime, endTime)
      }
      if (this.videoProgressSlider.slider && !this.videoProgressSlider.frozen) {
        this.videoProgressSlider.slider.slider("option", "max", endTime).slider("option", "value", time)
      }
      this.videoProgressSlider.handle.attr({
        "aria-valuemax": endTime,
        "aria-valuenow": time
      })
    }
    function notifyThroughHandleEnd(params) {
      if (params.end) {
        this.videoProgressSlider.handle.attr("title", gettext("Video ended")).focus()
      } else {
        this.videoProgressSlider.handle.attr("title", gettext("Video position"))
      }
    }
    function getTimeDescription(time) {
      var seconds = Math.floor(time),
      minutes = Math.floor(seconds / 60),
      hours = Math.floor(minutes / 60),
      i18n = function(value, word) {
        var msg;
        switch (word) {
        case "hour":
          msg = ngettext("%(value)s hour", "%(value)s hours", value);
          break;
        case "minute":
          msg = ngettext("%(value)s minute", "%(value)s minutes", value);
          break;
        case "second":
          msg = ngettext("%(value)s second", "%(value)s seconds", value);
          break
        }
        return interpolate(msg, {
          value: value
        },
        true)
      };
      seconds = seconds % 60;
      minutes = minutes % 60;
      if (hours) {
        return i18n(hours, "hour") + " " + i18n(minutes, "minute") + " " + i18n(seconds, "second")
      } else if (minutes) {
        return i18n(minutes, "minute") + " " + i18n(seconds, "second")
      }
      return i18n(seconds, "second")
    }
  })
})(RequireJS.define); 


/*
scrollCaption: function() {
  var el = this.subtitlesEl.find(".current:first");
  if (!this.frozen && el.length && this.autoScrolling) {
    this.subtitlesEl.scrollTo(el, {
      offset: -1 * this.calculateOffset(el)
    })
  }
}

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
}


calculateOffset: function(element) {
  return this.captionHeight() / 2 - element.height() / 2
}

captionHeight: function() {
	var state = this.state;
	if (state.isFullScreen) {
		return state.container.height() - state.videoFullScreen.height
	} else {
		return state.container.height()
	}
}

this.container = element.find(".video-player");






*/
