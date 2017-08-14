(function() {
  "use strict";
  var XModule = {};
  XModule.Descriptor = function() {
    var Descriptor = function(element) {
      this.element = element;
      this.update = _.bind(this.update, this)
    };
    Descriptor.prototype.onUpdate = function(callback) {
      if (!this.callbacks) {
        this.callbacks = []
      }
      this.callbacks.push(callback)
    };
    Descriptor.prototype.update = function() {
      var data, callbacks, i, length;
      data = this.save();
      callbacks = this.callbacks;
      length = callbacks.length;
      $.each(callbacks,
      function(index, callback) {
        callback(data)
      })
    };
    Descriptor.prototype.save = function() {
      return {}
    };
    return Descriptor
  } ();
  this.XBlockToXModuleShim = function(runtime, element, initArgs) {
    var moduleType, module;
    if (initArgs) {
      moduleType = initArgs["xmodule-type"]
    }
    if (!moduleType) {
      moduleType = $(element).data("type")
    }
    if (moduleType === "None") {
      return
    }
    try {
      module = new window[moduleType](element);
      if ($(element).hasClass("xmodule_edit")) {
        $(document).trigger("XModule.loaded.edit", [element, module])
      }
      if ($(element).hasClass("xmodule_display")) {
        $(document).trigger("XModule.loaded.display", [element, module])
      }
      return module
    } catch(error) {
      console.error("Unable to load " + moduleType + ": " + error.message)
    }
  };
  this.XModule = XModule
}).call(this); (function(undefined) {
  "use strict";
  this.Time = {
    format: format,
    formatFull: formatFull,
    convert: convert
  };
  return;
  function format(time, formatFull) {
    var hours, minutes, seconds;
    if (!_.isFinite(time) || time < 0) {
      time = 0
    }
    seconds = Math.floor(time);
    minutes = Math.floor(seconds / 60);
    hours = Math.floor(minutes / 60);
    seconds = seconds % 60;
    minutes = minutes % 60;
    if (formatFull) {
      return "" + _pad(hours) + ":" + _pad(minutes) + ":" + _pad(seconds % 60)
    } else if (hours) {
      return "" + hours + ":" + _pad(minutes) + ":" + _pad(seconds % 60)
    } else {
      return "" + minutes + ":" + _pad(seconds % 60)
    }
  }
  function formatFull(time) {
    return format(time, true)
  }
  function convert(time, oldSpeed, newSpeed) {
    return (time * oldSpeed / newSpeed).toFixed(3)
  }
  function _pad(number) {
    if (number < 10) {
      return "0" + number
    } else {
      return "" + number
    }
  }
}).call(this);
window.Poll = function(el) {
  RequireJS.require(["PollMain"],
  function(PollMain) {
    new PollMain(el)
  })
}; (function() {
  var _this = this,
  __indexOf = [].indexOf ||
  function(item) {
    for (var i = 0,
    l = this.length; i < l; i++) {
      if (i in this && this[i] === item) return i
    }
    return - 1
  };
  this.Problem = function() {
    var _this = this;
    function Problem(element) {
      var _this = this;
      this.hint_button = function() {
        return Problem.prototype.hint_button.apply(_this, arguments)
      };
      this.enableCheckButtonAfterTimeout = function() {
        return Problem.prototype.enableCheckButtonAfterTimeout.apply(_this, arguments)
      };
      this.enableCheckButtonAfterResponse = function() {
        return Problem.prototype.enableCheckButtonAfterResponse.apply(_this, arguments)
      };
      this.enableCheckButton = function(enable, changeText) {
        if (changeText == null) {
          changeText = true
        }
        return Problem.prototype.enableCheckButton.apply(_this, arguments)
      };
      this.enableAllButtons = function(enable, isFromCheckOperation) {
        return Problem.prototype.enableAllButtons.apply(_this, arguments)
      };
      this.disableAllButtonsWhileRunning = function(operationCallback, isFromCheckOperation) {
        return Problem.prototype.disableAllButtonsWhileRunning.apply(_this, arguments)
      };
      this.refreshAnswers = function() {
        return Problem.prototype.refreshAnswers.apply(_this, arguments)
      };
      this.updateMathML = function(jax, element) {
        return Problem.prototype.updateMathML.apply(_this, arguments)
      };
      this.refreshMath = function(event, element) {
        return Problem.prototype.refreshMath.apply(_this, arguments)
      };
      this.save_internal = function() {
        return Problem.prototype.save_internal.apply(_this, arguments)
      };
      this.save = function() {
        return Problem.prototype.save.apply(_this, arguments)
      };
      this.gentle_alert = function(msg) {
        return Problem.prototype.gentle_alert.apply(_this, arguments)
      };
      this.start = function() {
        return Problem.prototype.start.apply(_this, arguments)
      };
      this.show = function() {
        return Problem.prototype.show.apply(_this, arguments)
      };
      this.reset_internal = function() {
        return Problem.prototype.reset_internal.apply(_this, arguments)
      };
      this.reset = function() {
        return Problem.prototype.reset.apply(_this, arguments)
      };
      this.check_internal = function() {
        return Problem.prototype.check_internal.apply(_this, arguments)
      };
      this.check = function() {
        return Problem.prototype.check.apply(_this, arguments)
      };
      this.check_fd = function() {
        return Problem.prototype.check_fd.apply(_this, arguments)
      };
      this.check_save_waitfor = function(callback) {
        return Problem.prototype.check_save_waitfor.apply(_this, arguments)
      };
      this.setupInputTypes = function() {
        return Problem.prototype.setupInputTypes.apply(_this, arguments)
      };
      this.getDisplayText = function() {
        return Problem.prototype.getDisplayText.apply(_this, arguments)
      };
      this.showTimerWarning = function() {
        return Problem.prototype.showTimerWarning.apply(_this, arguments)
      };
      this.removeTimer = function() {
        return Problem.prototype.removeTimer.apply(_this, arguments)
      };
      this.syncTimer = function() {
        return Problem.prototype.syncTimer.apply(_this, arguments)
      };
      this.maybeSetupTimer = function() {
        return Problem.prototype.maybeSetupTimer.apply(_this, arguments)
      };
      this.getSecondsLeft = function() {
        return Problem.prototype.getSecondsLeft.apply(_this, arguments)
      };
      this.poll = function(prev_timeout) {
        return Problem.prototype.poll.apply(_this, arguments)
      };
      this.queueing = function() {
        return Problem.prototype.queueing.apply(_this, arguments)
      };
      this.forceUpdate = function(response) {
        return Problem.prototype.forceUpdate.apply(_this, arguments)
      };
      this.updateProgress = function(response) {
        return Problem.prototype.updateProgress.apply(_this, arguments)
      };
      this.renderProgressState = function() {
        return Problem.prototype.renderProgressState.apply(_this, arguments)
      };
      this.bind = function() {
        return Problem.prototype.bind.apply(_this, arguments)
      };
      this.el = $(element).find(".problems-wrapper");
      this.id = this.el.data("problem-id");
      this.element_id = this.el.attr("id");
      this.url = this.el.data("url");
      this.has_timed_out = false;
      this.has_response = false;
      this.render()
    }
    Problem.prototype.$ = function(selector) {
      return $(selector, this.el)
    };
    Problem.prototype.bind = function() {
      var problem_prefix, _this = this;
      if (typeof MathJax !== "undefined" && MathJax !== null) {
        this.el.find(".problem > div").each(function(index, element) {
          return MathJax.Hub.Queue(["Typeset", MathJax.Hub, element])
        })
      }
      window.update_schematics();
      problem_prefix = this.element_id.replace(/problem_/, "");
      this.inputs = this.$("[id^='input_" + problem_prefix + "_']");
      this.$("div.action button").click(this.refreshAnswers);
      this.checkButton = this.$("div.action button.check");
      this.checkButtonLabel = this.$("div.action button.check span.check-label");
      this.checkButtonCheckText = this.checkButtonLabel.text();
      this.checkButtonCheckingText = this.checkButton.data("checking");
      this.checkButton.click(this.check_fd);
      this.hintButton = this.$("div.action button.hint-button");
      this.hintButton.click(this.hint_button);
      this.resetButton = this.$("div.action button.reset");
      this.resetButton.click(this.reset);
      this.showButton = this.$("div.action button.show");
      this.showButton.click(this.show);
      this.saveButton = this.$("div.action button.save");
      this.saveButton.click(this.save);
      this.startInput = this.$("div.action input.start");
      this.startInput.click(this.start);
      this.$(".clarification").focus(function(ev) {
        var icon;
        icon = $(ev.target).children("i");
        return window.globalTooltipManager.openTooltip(icon)
      });
      this.$(".clarification").blur(function(ev) {
        return window.globalTooltipManager.hide()
      });
      this.bindResetCorrectness();
      Collapsible.setCollapsibles(this.el);
      this.$("input.math").keyup(this.refreshMath);
      if (typeof MathJax !== "undefined" && MathJax !== null) {
        return this.$("input.math").each(function(index, element) {
          return MathJax.Hub.Queue([_this.refreshMath, null, element])
        })
      }
    };
    Problem.prototype.renderProgressState = function() {
      var a, detail, earned, possible, progress, progress_template, status;
      detail = this.el.data("progress_detail");
      status = this.el.data("progress_status");
      if (status !== "none" && detail != null && detail.indexOf("/") > 0) {
        a = detail.split("/");
        earned = parseFloat(a[0]);
        possible = parseFloat(a[1]);
        progress_template = ngettext("(%(earned)s/%(possible)s point)", "(%(earned)s/%(possible)s points)", possible);
        progress = interpolate(progress_template, {
          earned: earned,
          possible: possible
        },
        true)
      }
      if (status === "none" && detail != null && detail.indexOf("/") > 0) {
        a = detail.split("/");
        possible = parseFloat(a[1]);
        progress_template = ngettext("(%(num_points)s point possible)", "(%(num_points)s points possible)", possible);
        progress = interpolate(progress_template, {
          num_points: possible
        },
        true)
      }
      return this.$(".problem-progress").html(progress)
    };
    Problem.prototype.updateProgress = function(response) {
      if (response.progress_changed) {
        this.el.data("progress_status", response.progress_status);
        this.el.data("progress_detail", response.progress_detail);
        this.el.trigger("progressChanged")
      }
      return this.renderProgressState()
    };
    Problem.prototype.forceUpdate = function(response) {
      this.el.data("progress_status", response.progress_status);
      this.el.data("progress_detail", response.progress_detail);
      this.el.trigger("progressChanged");
      return this.renderProgressState()
    };
    Problem.prototype.queueing = function() {
      var _this = this;
      this.queued_items = this.$(".xqueue");
      this.num_queued_items = this.queued_items.length;
      if (this.num_queued_items > 0) {
        if (window.queuePollerID) {
          window.clearTimeout(window.queuePollerID)
        }
        return window.queuePollerID = window.setTimeout(function() {
          return _this.poll(1e3)
        },
        1e3)
      }
    };
    Problem.prototype.poll = function(prev_timeout) {
      var _this = this;
      return $.postWithPrefix("" + this.url + "/problem_get",
      function(response) {
        var new_timeout;
        _this.new_queued_items = $(response.html).find(".xqueue");
        if (_this.new_queued_items.length !== _this.num_queued_items) {
          _this.el.html(response.html);
          JavascriptLoader.executeModuleScripts(_this.el,
          function() {
            _this.setupInputTypes();
            return _this.bind()
          })
        }
        _this.num_queued_items = _this.new_queued_items.length;
        if (_this.num_queued_items === 0) {
          _this.forceUpdate(response);
          return delete window.queuePollerID
        } else {
          new_timeout = prev_timeout * 2;
          if (new_timeout >= 6e4) {
            delete window.queuePollerID;
            return _this.gentle_alert(gettext("The grading process is still running. Refresh the page to see updates."))
          } else {
            return window.queuePollerID = window.setTimeout(function() {
              return _this.poll(new_timeout)
            },
            new_timeout)
          }
        }
      })
    };
    Problem.inputAjax = function(url, input_id, dispatch, data, callback) {
      data["dispatch"] = dispatch;
      data["input_id"] = input_id;
      return $.postWithPrefix("" + url + "/input_ajax", data, callback)
    };
    Problem.prototype.render = function(content) {
      var _this = this;
      if (content) {
        this.el.attr({
          "aria-busy": "true",
          "aria-live": "off",
          "aria-atomic": "false"
        });
        this.el.html(content);
        JavascriptLoader.executeModuleScripts(this.el,
        function() {
          _this.setupInputTypes();
          _this.bind();
          _this.queueing();
          return _this.maybeSetupTimer()
        });
        return this.el.attr("aria-busy", "false")
      } else {
        return $.postWithPrefix("" + this.url + "/problem_get",
        function(response) {
          _this.el.html(response.html);
          return JavascriptLoader.executeModuleScripts(_this.el,
          function() {
            _this.setupInputTypes();
            _this.bind();
            _this.queueing();
            _this.forceUpdate(response);
            if (response.progress_status !== "done") {
              return _this.maybeSetupTimer()
            }
          })
        })
      }
    };
    Problem.prototype.getSecondsLeft = function() {
      if (_.isUndefined(this.startTime) || _.isUndefined(this.totalSeconds)) {
        return - 1
      } else {
        return Math.floor(Math.max(this.totalSeconds - (new Date - this.startTime) / 1e3, 0))
      }
    };
    Problem.prototype.maybeSetupTimer = function() {
      if (this.el.find(".problem-timer").length) {
        this.$timer = this.el.find(".problem-timer");
        this.$display = this.el.find(".minutes-left");
        this.startTime = new Date;
        this.totalSeconds = parseInt(this.$timer.data("totalSecondsLeft"), 10);
        this.secondsBeforeWarning = parseInt(this.$timer.data("secondsBeforeWarning"), 10);
        this.submittedBeforeTimeExpired = false;
        this.$timer.show();
        if (this.timerId) {
          clearInterval(this.timerId)
        }
        this.timerId = setInterval(this.syncTimer, 1e3);
        return this.syncTimer()
      }
    };
    Problem.prototype.syncTimer = function() {
      this.secondsLeft = this.getSecondsLeft();
      if (this.secondsLeft === -1) {
        return this.removeTimer()
      } else {
        if (this.secondsLeft <= this.secondsBeforeWarning) {
          this.showTimerWarning()
        }
        if (this.submittedBeforeTimeExpired) {
          this.$timer.removeClass("danger").text(gettext("Submitted"))
        }
        if (this.secondsLeft <= 0) {
          if (!this.submittedBeforeTimeExpired) {
            this.$timer.addClass("danger").text(gettext("Timer has expired"));
            this.$timer.slice(1).remove()
          }
          return clearInterval(this.timerId)
        } else {
          return this.$display.text(this.getDisplayText())
        }
      }
    };
    Problem.prototype.removeTimer = function() {
      return this.$(".problem-timer").remove()
    };
    Problem.prototype.showTimerWarning = function() {
      var $clone;
      if (this.$timer.length < 2) {
        $clone = this.el.find(".problem-timer").clone();
        this.el.find(".problem").after($clone.get(0));
        this.$timer = this.el.find(".problem-timer");
        this.$display = this.el.find(".minutes-left");
        return this.$timer.addClass("danger")
      }
    };
    Problem.prototype.getDisplayText = function() {
      var min, sec, secLeft;
      secLeft = this.getSecondsLeft();
      min = Math.floor(secLeft / 60);
      sec = secLeft % 60;
      if (sec < 10) {
        sec = "0" + sec
      }
      return "" + min + ":" + sec
    };
    Problem.prototype.setupInputTypes = function() {
      var _this = this;
      this.inputtypeDisplays = {};
      return this.el.find(".capa_inputtype").each(function(index, inputtype) {
        var classes, cls, id, setupMethod, _i, _len, _results;
        classes = $(inputtype).attr("class").split(" ");
        id = $(inputtype).attr("id");
        _results = [];
        for (_i = 0, _len = classes.length; _i < _len; _i++) {
          cls = classes[_i];
          setupMethod = _this.inputtypeSetupMethods[cls];
          if (setupMethod != null) {
            _results.push(_this.inputtypeDisplays[id] = setupMethod(inputtype))
          } else {
            _results.push(void 0)
          }
        }
        return _results
      })
    };
    Problem.prototype.check_save_waitfor = function(callback) {
      var flag, inp, _i, _len, _ref, _this = this;
      flag = false;
      _ref = this.inputs;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        inp = _ref[_i];
        if ($(inp).is("input[waitfor]")) {
          try {
            $(inp).data("waitfor")(function() {
              _this.refreshAnswers();
              return callback()
            })
          } catch(e) {
            if (e.name === "Waitfor Exception") {
              alert(e.message)
            } else {
              alert("Could not grade your answer. The submission was aborted.")
            }
            throw e
          }
          flag = true
        } else {
          flag = false
        }
      }
      return flag
    };
    Problem.prototype.check_fd = function() {
      var abort_submission, error, error_html, errors, fd, file_not_selected, file_too_large, max_filesize, required_files_not_submitted, settings, timeout_id, unallowed_file_submitted, _i, _len, _this = this;
      if (this.el.find("input:file").length === 0) {
        this.check();
        return
      }
      this.enableCheckButton(false);
      if (!window.FormData) {
        alert("Submission aborted! Sorry, your browser does not support file uploads. If you can, please use Chrome or Safari which have been verified to support file uploads.");
        this.enableCheckButton(true);
        return
      }
      timeout_id = this.enableCheckButtonAfterTimeout();
      fd = new FormData;
      max_filesize = 4 * 1e3 * 1e3;
      file_too_large = false;
      file_not_selected = false;
      required_files_not_submitted = false;
      unallowed_file_submitted = false;
      errors = [];
      this.inputs.each(function(index, element) {
        var allowed_files, file, max_size, required_files, _i, _len, _ref, _ref1, _ref2;
        if (element.type === "file") {
          required_files = $(element).data("required_files");
          allowed_files = $(element).data("allowed_files");
          _ref = element.files;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            file = _ref[_i];
            if (allowed_files.length !== 0 && (_ref1 = file.name, __indexOf.call(allowed_files, _ref1) < 0)) {
              unallowed_file_submitted = true;
              errors.push("You submitted " + file.name + "; only " + allowed_files + " are allowed.")
            }
            if (_ref2 = file.name, __indexOf.call(required_files, _ref2) >= 0) {
              required_files.splice(required_files.indexOf(file.name), 1)
            }
            if (file.size > max_filesize) {
              file_too_large = true;
              max_size = max_filesize / (1e3 * 1e3);
              errors.push("Your file " + file.name + " is too large (max size: {max_size}MB)")
            }
            fd.append(element.id, file)
          }
          if (element.files.length === 0) {
            file_not_selected = true;
            fd.append(element.id, "")
          }
          if (required_files.length !== 0) {
            required_files_not_submitted = true;
            return errors.push("You did not submit the required files: " + required_files + ".")
          }
        } else {
          return fd.append(element.id, element.value)
        }
      });
      if (file_not_selected) {
        errors.push("You did not select any files to submit")
      }
      error_html = "<ul>\n";
      for (_i = 0, _len = errors.length; _i < _len; _i++) {
        error = errors[_i];
        error_html += "<li>" + error + "</li>\n"
      }
      error_html += "</ul>";
      this.gentle_alert(error_html);
      abort_submission = file_too_large || file_not_selected || unallowed_file_submitted || required_files_not_submitted;
      if (abort_submission) {
        window.clearTimeout(timeout_id);
        this.enableCheckButton(true);
        return
      }
      settings = {
        type: "POST",
        data: fd,
        processData: false,
        contentType: false,
        complete: this.enableCheckButtonAfterResponse,
        success: function(response) {
          switch (response.success) {
          case "incorrect":
          case "correct":
            _this.render(response.contents);
            _this.updateProgress(response);
            break;
          default:
            _this.gentle_alert(response.success)
          }
          Logger.log("problem_graded", [_this.answers, response.contents], _this.id);
          if (_this.getSecondsLeft() >= 0) {
            return _this.removeTimer()
          }
        }
      };
      return $.ajaxWithPrefix("" + this.url + "/problem_check", settings)
    };
    Problem.prototype.check = function() {
      if (!this.check_save_waitfor(this.check_internal)) {
        return this.disableAllButtonsWhileRunning(this.check_internal, true)
      }
    };
    Problem.prototype.check_internal = function() {
      var _this = this;
      Logger.log("problem_check", this.answers);
      return $.postWithPrefix("" + this.url + "/problem_check", this.answers,
      function(response) {
        switch (response.success) {
        case "incorrect":
        case "correct":
          window.SR.readElts($(response.contents).find(".status"));
          _this.render(response.contents);
          _this.updateProgress(response);
          if (_this.el.hasClass("showed")) {
            _this.el.removeClass("showed")
          }
          _this.$("div.action button.check").focus();
          break;
        default:
          _this.gentle_alert(response.success)
        }
        Logger.log("problem_graded", [_this.answers, response.contents], _this.id);
        if (_this.getSecondsLeft() >= 0) {
          return _this.removeTimer()
        }
      })
    };
    Problem.prototype.reset = function() {
      return this.disableAllButtonsWhileRunning(this.reset_internal, false)
    };
    Problem.prototype.reset_internal = function() {
      var _this = this;
      Logger.log("problem_reset", this.answers);
      return $.postWithPrefix("" + this.url + "/problem_reset", {
        id: this.id
      },
      function(response) {
        _this.render(response.html);
        return _this.updateProgress(response)
      })
    };
    Problem.prototype.show = function() {
      var answer_text, _this = this;
      if (!this.el.hasClass("showed")) {
        Logger.log("problem_show", {
          problem: this.id
        });
        answer_text = [];
        return $.postWithPrefix("" + this.url + "/problem_show",
        function(response) {
          var answers;
          answers = response.answers;
          $.each(answers,
          function(key, value) {
            var answer, choice, solution, _i, _len, _results;
            if ($.isArray(value)) {
              _results = [];
              for (_i = 0, _len = value.length; _i < _len; _i++) {
                choice = value[_i];
                _this.$("label[for='input_" + key + "_" + choice + "']").attr({
                  correct_answer: "true"
                });
                _results.push(answer_text.push("<p>" + gettext("Answer:") + " " + value + "</p>"))
              }
              return _results
            } else {
              answer = _this.$("#answer_" + key + ", #solution_" + key);
              answer.html(value);
              Collapsible.setCollapsibles(answer);
              try {
                solution = $(value).find(".detailed-solution")
              } catch(e) {
                solution = {}
              }
              if (solution.length) {
                return answer_text.push(solution)
              } else {
                return answer_text.push("<p>" + gettext("Answer:") + " " + value + "</p>")
              }
            }
          });
          _this.el.find(".capa_inputtype").each(function(index, inputtype) {
            var classes, cls, display, showMethod, _i, _len, _results;
            classes = $(inputtype).attr("class").split(" ");
            _results = [];
            for (_i = 0, _len = classes.length; _i < _len; _i++) {
              cls = classes[_i];
              display = _this.inputtypeDisplays[$(inputtype).attr("id")];
              showMethod = _this.inputtypeShowAnswerMethods[cls];
              if (showMethod != null) {
                _results.push(showMethod(inputtype, display, answers))
              } else {
                _results.push(void 0)
              }
            }
            return _results
          });
          if (typeof MathJax !== "undefined" && MathJax !== null) {
            _this.el.find(".problem > div").each(function(index, element) {
              return MathJax.Hub.Queue(["Typeset", MathJax.Hub, element])
            })
          }
          _this.$(".show-label").text(gettext("Hide Answer"));
          _this.el.addClass("showed");
          _this.updateProgress(response);
          return window.SR.readElts(answer_text)
        })
      } else {
        this.$("[id^=answer_], [id^=solution_]").text("");
        this.$("[correct_answer]").attr({
          correct_answer: null
        });
        this.el.removeClass("showed");
        this.$(".show-label").text(gettext("Show Answer"));
        window.SR.readText(gettext("Answer hidden"));
        return this.el.find(".capa_inputtype").each(function(index, inputtype) {
          var classes, cls, display, hideMethod, _i, _len, _results;
          display = _this.inputtypeDisplays[$(inputtype).attr("id")];
          classes = $(inputtype).attr("class").split(" ");
          _results = [];
          for (_i = 0, _len = classes.length; _i < _len; _i++) {
            cls = classes[_i];
            hideMethod = _this.inputtypeHideAnswerMethods[cls];
            if (hideMethod != null) {
              _results.push(hideMethod(inputtype, display))
            } else {
              _results.push(void 0)
            }
          }
          return _results
        })
      }
    };
    Problem.prototype.start = function() {
      var _this = this;
      Logger.log("problem_start", {
        id: this.id
      });
      return $.postWithPrefix("" + this.url + "/problem_start", {
        id: this.id
      },
      function(response) {
        return _this.render(response.html)
      })
    };
    Problem.prototype.gentle_alert = function(msg) {
      var alert_elem;
      if (this.el.find(".capa_alert").length) {
        this.el.find(".capa_alert").remove()
      }
      alert_elem = "<div class='capa_alert'>" + msg + "</div>";
      this.el.find(".action").after(alert_elem);
      this.el.find(".capa_alert").css({
        opacity: 0
      }).animate({
        opacity: 1
      },
      700);
      return window.SR.readElts(this.el.find(".capa_alert"))
    };
    Problem.prototype.save = function() {
      if (!this.check_save_waitfor(this.save_internal)) {
        return this.disableAllButtonsWhileRunning(this.save_internal, false)
      }
    };
    Problem.prototype.save_internal = function() {
      var _this = this;
      this.enableCheckButton(false);
      Logger.log("problem_save", this.answers);
      return $.postWithPrefix("" + this.url + "/problem_save", this.answers,
      function(response) {
        var saveMessage;
        saveMessage = response.msg;
        _this.gentle_alert(saveMessage);
        _this.updateProgress(response);
        return _this.enableCheckButton(true)
      })
    };
    Problem.prototype.refreshMath = function(event, element) {
      var elid, eqn, jax, mathjax_preprocessor, preprocessor_tag, target;
      if (!element) {
        element = event.target
      }
      elid = element.id.replace(/^input_/, "");
      target = "display_" + elid;
      preprocessor_tag = "inputtype_" + elid;
      mathjax_preprocessor = this.inputtypeDisplays[preprocessor_tag];
      if (typeof MathJax !== "undefined" && MathJax !== null && (jax = MathJax.Hub.getAllJax(target)[0])) {
        eqn = $(element).val();
        if (mathjax_preprocessor) {
          eqn = mathjax_preprocessor(eqn)
        }
        MathJax.Hub.Queue(["Text", jax, eqn], [this.updateMathML, jax, element])
      }
    };
    Problem.prototype.updateMathML = function(jax, element) {
      try {
        return $("#" + element.id + "_dynamath").val(jax.root.toMathML(""))
      } catch(exception) {
        if (!exception.restart) {
          throw exception
        }
        if (typeof MathJax !== "undefined" && MathJax !== null) {
          return MathJax.Callback.After([this.refreshMath, jax], exception.restart)
        }
      }
    };
    Problem.prototype.refreshAnswers = function() {
      this.$("input.schematic").each(function(index, element) {
        return element.schematic.update_value()
      });
      this.$(".CodeMirror").each(function(index, element) {
        if (element.CodeMirror.save) {
          return element.CodeMirror.save()
        }
      });
      return this.answers = this.inputs.serialize()
    };
    Problem.prototype.bindResetCorrectness = function() {
      var $inputtypes, _this = this;
      $inputtypes = this.el.find(".capa_inputtype").add(this.el.find(".inputtype"));
      return $inputtypes.each(function(index, inputtype) {
        var bindMethod, classes, cls, _i, _len, _results;
        classes = $(inputtype).attr("class").split(" ");
        _results = [];
        for (_i = 0, _len = classes.length; _i < _len; _i++) {
          cls = classes[_i];
          bindMethod = _this.bindResetCorrectnessByInputtype[cls];
          if (bindMethod != null) {
            _results.push(bindMethod(inputtype))
          } else {
            _results.push(void 0)
          }
        }
        return _results
      })
    };
    Problem.prototype.bindResetCorrectnessByInputtype = {
      formulaequationinput: function(element) {
        return $(element).find("input").on("input",
        function() {
          var $p;
          $p = $(element).find("span.status");
          return $p.parent().removeClass().addClass("unsubmitted")
        })
      },
      choicegroup: function(element) {
        var $element, id;
        $element = $(element);
        id = $element.attr("id").match(/^inputtype_(.*)$/)[1];
        return $element.find("input").on("change",
        function() {
          var $status;
          $status = $("#status_" + id);
          if ($status[0]) {
            $status.removeClass().addClass("unanswered");
            $status.empty().css("display", "inline-block")
          } else {
            $("<span>", {
              "class": "unanswered",
              style: "display: inline-block;",
              id: "status_" + id
            })
          }
          return $element.find("label").removeClass()
        })
      },
      "option-input": function(element) {
        var $select, id;
        $select = $(element).find("select");
        id = $select.attr("id").match(/^input_(.*)$/)[1];
        return $select.on("change",
        function() {
          var $status;
          return $status = $("#status_" + id).removeClass().addClass("unanswered").find("span").text(gettext("Status: unsubmitted"))
        })
      },
      textline: function(element) {
        return $(element).find("input").on("input",
        function() {
          var $p;
          $p = $(element).find("span.status");
          return $p.parent().removeClass("correct incorrect").addClass("unsubmitted")
        })
      }
    };
    Problem.prototype.inputtypeSetupMethods = {
      "text-input-dynamath": function(element) {
        var data, preprocessor, preprocessorClass, preprocessorClassName;
        data = $(element).find(".text-input-dynamath_data");
        preprocessorClassName = data.data("preprocessor");
        preprocessorClass = window[preprocessorClassName];
        if (preprocessorClass == null) {
          return false
        } else {
          preprocessor = new preprocessorClass;
          return preprocessor.fn
        }
      },
      javascriptinput: function(element) {
        var container, data, display, displayClass, evaluation, params, problemState, submission, submissionField;
        data = $(element).find(".javascriptinput_data");
        params = data.data("params");
        submission = data.data("submission");
        evaluation = data.data("evaluation");
        problemState = data.data("problem_state");
        displayClass = window[data.data("display_class")];
        if (evaluation === "") {
          evaluation = null
        }
        container = $(element).find(".javascriptinput_container");
        submissionField = $(element).find(".javascriptinput_input");
        display = new displayClass(problemState, submission, evaluation, container, submissionField, params);
        display.render();
        return display
      },
      cminput: function(container) {
        var element, linenumbers, mode, spaces, tabsize;
        element = $(container).find("textarea");
        tabsize = element.data("tabsize");
        mode = element.data("mode");
        linenumbers = element.data("linenums");
        spaces = Array(parseInt(tabsize) + 1).join(" ");
        return CodeMirror.fromTextArea(element[0], {
          lineNumbers: linenumbers,
          indentUnit: tabsize,
          tabSize: tabsize,
          mode: mode,
          matchBrackets: true,
          lineWrapping: true,
          indentWithTabs: false,
          smartIndent: false,
          extraKeys: {
            Esc: function(cm) {
              $(".grader-status").focus();
              return false
            },
            Tab: function(cm) {
              cm.replaceSelection(spaces, "end");
              return false
            }
          }
        })
      }
    };
    Problem.prototype.inputtypeShowAnswerMethods = {
      choicegroup: function(element, display, answers) {
        var answer, choice, input_id, _i, _len, _results;
        element = $(element);
        input_id = element.attr("id").replace(/inputtype_/, "");
        answer = answers[input_id];
        _results = [];
        for (_i = 0, _len = answer.length; _i < _len; _i++) {
          choice = answer[_i];
          _results.push(element.find("label[for='input_" + input_id + "_" + choice + "']").addClass("choicegroup_correct"))
        }
        return _results
      },
      javascriptinput: function(element, display, answers) {
        var answer, answer_id;
        answer_id = $(element).attr("id").split("_").slice(1).join("_");
        answer = JSON.parse(answers[answer_id]);
        return display.showAnswer(answer)
      },
      choicetextgroup: function(element, display, answers) {
        var answer, choice, input_id, _i, _len, _results;
        element = $(element);
        input_id = element.attr("id").replace(/inputtype_/, "");
        answer = answers[input_id];
        _results = [];
        for (_i = 0, _len = answer.length; _i < _len; _i++) {
          choice = answer[_i];
          _results.push(element.find("section#forinput" + choice).addClass("choicetextgroup_show_correct"))
        }
        return _results
      },
      imageinput: function(element, display, answers) {
        var canvas, container, ctx, id, types;
        types = {
          rectangle: function(ctx, coords) {
            var rects, reg;
            reg = /^\(([0-9]+),([0-9]+)\)-\(([0-9]+),([0-9]+)\)$/;
            rects = coords.replace(/\s*/g, "").split(/;/);
            $.each(rects,
            function(index, rect) {
              var abs, height, points, width;
              abs = Math.abs;
              points = reg.exec(rect);
              if (points) {
                width = abs(points[3] - points[1]);
                height = abs(points[4] - points[2]);
                return ctx.rect(points[1], points[2], width, height)
              }
            });
            ctx.stroke();
            return ctx.fill()
          },
          regions: function(ctx, coords) {
            var parseCoords;
            parseCoords = function(coords) {
              var reg;
              reg = JSON.parse(coords);
              if (typeof reg[0][0][0] === "undefined") {
                reg = [reg]
              }
              return reg
            };
            return $.each(parseCoords(coords),
            function(index, region) {
              ctx.beginPath();
              $.each(region,
              function(index, point) {
                if (index === 0) {
                  return ctx.moveTo(point[0], point[1])
                } else {
                  return ctx.lineTo(point[0], point[1])
                }
              });
              ctx.closePath();
              ctx.stroke();
              return ctx.fill()
            })
          }
        };
        element = $(element);
        id = element.attr("id").replace(/inputtype_/, "");
        container = element.find("#answer_" + id);
        canvas = document.createElement("canvas");
        canvas.width = container.data("width");
        canvas.height = container.data("height");
        if (canvas.getContext) {
          ctx = canvas.getContext("2d")
        } else {
          return console.log("Canvas is not supported.")
        }
        ctx.fillStyle = "rgba(255,255,255,.3)";
        ctx.strokeStyle = "#FF0000";
        ctx.lineWidth = "2";
        if (answers[id]) {
          $.each(answers[id],
          function(key, value) {
            if (types[key] != null && value) {
              return types[key](ctx, value)
            }
          });
          return container.html(canvas)
        } else {
          return console.log("Answer is absent for image input with id=" + id)
        }
      }
    };
    Problem.prototype.inputtypeHideAnswerMethods = {
      choicegroup: function(element, display) {
        element = $(element);
        return element.find("label").removeClass("choicegroup_correct")
      },
      javascriptinput: function(element, display) {
        return display.hideAnswer()
      },
      choicetextgroup: function(element, display) {
        element = $(element);
        return element.find("section[id^='forinput']").removeClass("choicetextgroup_show_correct")
      }
    };
    Problem.prototype.disableAllButtonsWhileRunning = function(operationCallback, isFromCheckOperation) {
      var _this = this;
      this.enableAllButtons(false, isFromCheckOperation);
      return operationCallback().always(function() {
        return _this.enableAllButtons(true, isFromCheckOperation)
      })
    };
    Problem.prototype.enableAllButtons = function(enable, isFromCheckOperation) {
      if (enable) {
        this.resetButton.add(this.saveButton).add(this.hintButton).add(this.showButton).removeClass("is-disabled").attr({
          "aria-disabled": "false"
        })
      } else {
        this.resetButton.add(this.saveButton).add(this.hintButton).add(this.showButton).addClass("is-disabled").attr({
          "aria-disabled": "true"
        })
      }
      return this.enableCheckButton(enable, isFromCheckOperation)
    };
    Problem.prototype.enableCheckButton = function(enable, changeText) {
      if (changeText == null) {
        changeText = true
      }
      if (enable) {
        this.checkButton.removeClass("is-disabled");
        this.checkButton.attr({
          "aria-disabled": "false"
        });
        if (changeText) {
          return this.checkButtonLabel.text(this.checkButtonCheckText)
        }
      } else {
        this.checkButton.addClass("is-disabled");
        this.checkButton.attr({
          "aria-disabled": "true"
        });
        if (changeText) {
          return this.checkButtonLabel.text(this.checkButtonCheckingText)
        }
      }
    };
    Problem.prototype.enableCheckButtonAfterResponse = function() {
      this.has_response = true;
      if (!this.has_timed_out) {
        return this.enableCheckButton(false)
      } else {
        return this.enableCheckButton(true)
      }
    };
    Problem.prototype.enableCheckButtonAfterTimeout = function() {
      var enableCheckButton, _this = this;
      this.has_timed_out = false;
      this.has_response = false;
      enableCheckButton = function() {
        _this.has_timed_out = true;
        if (_this.has_response) {
          return _this.enableCheckButton(true)
        }
      };
      return window.setTimeout(enableCheckButton, 750)
    };
    Problem.prototype.hint_button = function() {
      var hint_index, next_index, _this = this;
      hint_index = this.$(".problem-hint").attr("hint_index");
      if (hint_index === void 0) {
        next_index = 0
      } else {
        next_index = parseInt(hint_index) + 1
      }
      return $.postWithPrefix("" + this.url + "/hint_button", {
        hint_index: next_index,
        input_id: this.id
      },
      function(response) {
        var hint_container;
        hint_container = _this.$(".problem-hint");
        hint_container.html(response.contents);
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, hint_container[0]]);
        hint_container.attr("hint_index", response.hint_index);
        return _this.$(".hint-button").focus()
      })
    };
    return Problem
  }.call(this)
}).call(this);
var SequenceNav = function($element) {
  var _this = this;
  var $element = $element;
  var $wrapper = $element.find(".sequence-list-wrapper");
  var $list = $element.find("#sequence-list");
  var $arrows = $element.find(".sequence-nav-button");
  var maxScroll = $list.width() - $wrapper.width() + 20;
  var $leftShadow = $('<div class="left-shadow"></div>');
  var $rightShadow = $('<div class="right-shadow"></div>');
  var $body = $("body");
  var listOrigin;
  var mouseOrigin;
  var startDrag = function(e) {
    updateWidths();
    mouseOrigin = e.pageX;
    listOrigin = $list.position().left;
    $body.css("-webkit-user-select", "none");
    $body.bind("mousemove", moveDrag);
    $body.bind("mouseup", stopDrag)
  };
  var moveDrag = function(e) {
    var offset = e.pageX - mouseOrigin;
    var targetLeft = clamp(listOrigin + offset, -maxScroll, 0);
    updateHorizontalPosition(targetLeft);
    setShadows(targetLeft)
  };
  var stopDrag = function(e) {
    $body.css("-webkit-user-select", "auto");
    $body.unbind("mousemove", moveDrag);
    $body.unbind("mouseup", stopDrag)
  };
  var setShadows = function(left) {
    var left = left || $list.position().left;
    var padding = 30;
    var leftPercent = clamp( - left / padding, 0, 1);
    $leftShadow.css("opacity", leftPercent);
    var rightPercent = clamp((maxScroll + left) / padding, 0, 1);
    $rightShadow.css("opacity", rightPercent)
  };
  var clamp = function(val, min, max) {
    if (val > max) return max;
    if (val < min) return min;
    return val
  };
  var updateWidths = function(e) {
    maxScroll = $list.width() - $wrapper.width() + 20;
    var targetLeft = clamp($list.position().left, -maxScroll, 0);
    updateHorizontalPosition(targetLeft);
    setShadows(targetLeft)
  };
  var updateHorizontalPosition = function(left) {
    $list.css({
      left: left + "px"
    })
  };
  var checkPosition = function(e) {
    var $active = $element.find(".active");
    if (!$active[0]) {
      return
    }
    if ($active.position().left + $active.width() > $wrapper.width() - $list.position().left) {
      $list.animate({
        left: -$active.position().left + $wrapper.width() - $active.width() - 10 + "px"
      },
      {
        step: setShadows
      })
    } else if ($active.position().left < -$list.position().left) {
      $list.animate({
        left: -$active.position().left + 10 + "px"
      },
      {
        step: setShadows
      })
    }
  };
  $wrapper.append($leftShadow).append($rightShadow);
  setShadows(0);
  $wrapper.bind("mousedown", startDrag);
  $arrows.bind("click", checkPosition);
  $(window).bind("resize", updateWidths);
  setTimeout(function() {
    checkPosition()
  },
  200)
}; (function() {
  "use strict";
  this.LTI = function(element) {
    var dataAttrs = $(element).find(".lti").data(),
    askToSendUsername = dataAttrs.askToSendUsername === "True",
    askToSendEmail = dataAttrs.askToSendEmail === "True";
    $(element).on("click", ".link_lti_new_window",
    function() {
      if (askToSendUsername && askToSendEmail) {
        return confirm(gettext("Click OK to have your username and e-mail address sent to a 3rd party application.\n\nClick Cancel to return to this page without sending your information."))
      } else if (askToSendUsername) {
        return confirm(gettext("Click OK to have your username sent to a 3rd party application.\n\nClick Cancel to return to this page without sending your information."))
      } else if (askToSendEmail) {
        return confirm(gettext("Click OK to have your e-mail address sent to a 3rd party application.\n\nClick Cancel to return to this page without sending your information."))
      } else {
        return true
      }
    })
  }
}).call(this); (function() {
  var _this = this;
  this.Hinter = function() {
    function Hinter(element) {
      var _this = this;
      this.set_bottom_links = function() {
        return Hinter.prototype.set_bottom_links.apply(_this, arguments)
      };
      this.answer_choice_handle = function(eventObj) {
        return Hinter.prototype.answer_choice_handle.apply(_this, arguments)
      };
      this.wizard_link_handle = function(eventObj) {
        return Hinter.prototype.wizard_link_handle.apply(_this, arguments)
      };
      this.clear_default_text = function(eventObj) {
        return Hinter.prototype.clear_default_text.apply(_this, arguments)
      };
      this.submit_hint = function(eventObj) {
        return Hinter.prototype.submit_hint.apply(_this, arguments)
      };
      this.vote = function(eventObj) {
        return Hinter.prototype.vote.apply(_this, arguments)
      };
      this.expand = function(eventObj) {
        return Hinter.prototype.expand.apply(_this, arguments)
      };
      this.bind = function() {
        return Hinter.prototype.bind.apply(_this, arguments)
      };
      this.capture_problem = function(event_type, data, element) {
        return Hinter.prototype.capture_problem.apply(_this, arguments)
      };
      this.el = $(element).find(".crowdsource-wrapper");
      this.url = this.el.data("url");
      Logger.listen("problem_graded", this.el.data("child-id"), this.capture_problem);
      this.render()
    }
    Hinter.prototype.capture_problem = function(event_type, data, element) {
      var answers, response, _this = this;
      answers = data[0];
      response = data[1];
      if (response.search(/class="correct/) === -1) {
        return $.postWithPrefix("" + this.url + "/get_hint", answers,
        function(response) {
          return _this.render(response.contents)
        })
      } else {
        return $.postWithPrefix("" + this.url + "/get_feedback", answers,
        function(response) {
          return _this.render(response.contents)
        })
      }
    };
    Hinter.prototype.$ = function(selector) {
      return $(selector, this.el)
    };
    Hinter.prototype.bind = function() {
      this.$("input.vote").click(this.vote);
      this.$("input.submit-hint").click(this.submit_hint);
      this.$(".custom-hint").click(this.clear_default_text);
      this.$(".expand").click(this.expand);
      this.$(".wizard-link").click(this.wizard_link_handle);
      return this.$(".answer-choice").click(this.answer_choice_handle)
    };
    Hinter.prototype.expand = function(eventObj) {
      var target;
      target = this.$("#" + this.$(eventObj.currentTarget).data("target"));
      if (this.$(target).css("display") === "none") {
        this.$(target).css("display", "block")
      } else {
        this.$(target).css("display", "none")
      }
      return this.set_bottom_links()
    };
    Hinter.prototype.vote = function(eventObj) {
      var all_pks, post_json, target, _this = this;
      target = this.$(eventObj.currentTarget);
      all_pks = this.$("#pk-list").attr("data-pk-list");
      post_json = {
        answer: target.attr("data-answer"),
        hint: target.data("hintno"),
        pk_list: all_pks
      };
      return $.postWithPrefix("" + this.url + "/vote", post_json,
      function(response) {
        return _this.render(response.contents)
      })
    };
    Hinter.prototype.submit_hint = function(eventObj) {
      var post_json, textarea, _this = this;
      textarea = $(".custom-hint");
      if (this.answer === "") {
        return
      }
      post_json = {
        answer: this.answer,
        hint: textarea.val()
      };
      return $.postWithPrefix("" + this.url + "/submit_hint", post_json,
      function(response) {
        return _this.render(response.contents)
      })
    };
    Hinter.prototype.clear_default_text = function(eventObj) {
      var target;
      target = this.$(eventObj.currentTarget);
      if (target.data("cleared") === void 0) {
        target.val("");
        return target.data("cleared", true)
      }
    };
    Hinter.prototype.wizard_link_handle = function(eventObj) {
      var target;
      target = this.$(eventObj.currentTarget);
      return this.go_to(target.attr("dest"))
    };
    Hinter.prototype.answer_choice_handle = function(eventObj) {
      this.answer = this.$(eventObj.target).attr("value");
      this.$("#blank-answer").html(this.answer);
      return this.go_to("p3")
    };
    Hinter.prototype.set_bottom_links = function() {
      var viewbox_height;
      this.$(".bottom").css("margin-top", "0px");
      viewbox_height = parseInt(this.$(".wizard-viewbox").css("height"), 10);
      return this.$(".bottom").each(function(index, obj) {
        var view_height;
        view_height = parseInt($(obj).parent().css("height"), 10);
        return $(obj).css("margin-top", viewbox_height - view_height + "px")
      })
    };
    Hinter.prototype.render = function(content) {
      var hints_exist, styles, _this = this;
      if (content) {
        content = content.trim()
      }
      if (content) {
        this.el.html(content);
        this.el.show();
        JavascriptLoader.executeModuleScripts(this.el,
        function() {
          return _this.bind()
        });
        this.$("#previous-answer-0").css("display", "inline")
      } else {
        this.el.hide()
      }
      this.answer = "";
      styles = document.body.style;
      if (styles.WebkitTransform === "" || styles.transform === "") {
        this.go_to = this.transform_go_to
      } else {
        this.go_to = this.legacy_go_to
      }
      hints_exist = this.$("#hints-exist").html() === "True";
      if (hints_exist) {
        return this.go_to("p1")
      } else {
        return this.go_to("p2")
      }
    };
    Hinter.prototype.transform_go_to = function(view_id) {
      var id_to_index, translate_string;
      id_to_index = {
        p1: 0,
        p2: 1,
        p3: 2
      };
      translate_string = "translateX(" + id_to_index[view_id] * -1 * parseInt($("#" + view_id).css("width"), 10) + "px)";
      this.$(".wizard-container").css("transform", translate_string);
      this.$(".wizard-container").css("-webkit-transform", translate_string);
      return this.set_bottom_links()
    };
    Hinter.prototype.legacy_go_to = function(view_id) {
      this.$(".wizard-view").css("display", "none");
      this.$("#" + view_id).css("display", "block");
      return this.set_bottom_links()
    };
    return Hinter
  } ()
}).call(this); (function() {
  this.JavascriptLoader = function() {
    function JavascriptLoader() {}
    JavascriptLoader.executeModuleScripts = function(el, callback) {
      var callbackCalled, completed, completionHandlerGenerator, completionHandlerGeneratorIE, i, loaded, placeholders, _this = this;
      if (callback == null) {
        callback = null
      }
      placeholders = el.find(".script_placeholder");
      if (placeholders.length === 0) {
        if (callback != null) {
          callback()
        }
        return
      }
      completed = function() {
        var _i, _ref, _results;
        _results = [];
        for (i = _i = 1, _ref = placeholders.length; 1 <= _ref ? _i <= _ref: _i >= _ref; i = 1 <= _ref ? ++_i: --_i) {
          _results.push(false)
        }
        return _results
      } ();
      callbackCalled = false;
      completionHandlerGeneratorIE = function(index) {
        return function() {
          if (this.readyState === "complete" || this.readyState === "loaded") {
            return completionHandlerGenerator(index)()
          }
        }
      };
      completionHandlerGenerator = function(index) {
        return function() {
          var allComplete, flag, _i, _len;
          allComplete = true;
          completed[index] = true;
          for (_i = 0, _len = completed.length; _i < _len; _i++) {
            flag = completed[_i];
            if (!flag) {
              allComplete = false;
              break
            }
          }
          if (allComplete && !callbackCalled) {
            callbackCalled = true;
            if (callback != null) {
              return callback()
            }
          }
        }
      };
      loaded = {};
      return placeholders.each(function(index, placeholder) {
        var s, src;
        src = $(placeholder).attr("data-src");
        if (! (src in loaded)) {
          loaded[src] = true;
          s = document.createElement("script");
          s.setAttribute("src", src);
          s.setAttribute("type", "text/javascript");
          s.onload = completionHandlerGenerator(index);
          s.onreadystatechange = completionHandlerGeneratorIE(index);
          $("head")[0].appendChild(s)
        } else {
          completionHandlerGenerator(index)()
        }
        return $(placeholder).remove()
      })
    };
    return JavascriptLoader
  } ()
}).call(this); (function() {
  var _this = this;
  this.Sequence = function() {
    function Sequence(element) {
      var _this = this;
      this.removeBookmarkIconFromActiveNavItem = function(event) {
        return Sequence.prototype.removeBookmarkIconFromActiveNavItem.apply(_this, arguments)
      };
      this.addBookmarkIconToActiveNavItem = function(event) {
        return Sequence.prototype.addBookmarkIconToActiveNavItem.apply(_this, arguments)
      };
      this._change_sequential = function(direction, event) {
        return Sequence.prototype._change_sequential.apply(_this, arguments)
      };
      this.previous = function(event) {
        return Sequence.prototype.previous.apply(_this, arguments)
      };
      this.next = function(event) {
        return Sequence.prototype.next.apply(_this, arguments)
      };
      this.goto = function(event) {
        return Sequence.prototype.goto.apply(_this, arguments)
      };
      this.toggleArrows = function() {
        return Sequence.prototype.toggleArrows.apply(_this, arguments)
      };
      this.updateProgress = function() {
        return Sequence.prototype.updateProgress.apply(_this, arguments)
      };
      this.requestToken = $(element).data("request-token");
      this.el = $(element).find(".sequence");
      this.contents = this.$(".seq_contents");
      this.content_container = this.$("#seq_content");
      this.sr_container = this.$(".sr-is-focusable");
      this.num_contents = this.contents.length;
      this.id = this.el.data("id");
      this.ajaxUrl = this.el.data("ajax-url");
      this.base_page_title = " | " + document.title;
      this.initProgress();
      this.bind();
      this.render(parseInt(this.el.data("position")))
    }
    Sequence.prototype.$ = function(selector) {
      return $(selector, this.el)
    };
    Sequence.prototype.bind = function() {
      this.$("#sequence-list a").click(this.goto);
      this.el.on("bookmark:add", this.addBookmarkIconToActiveNavItem);
      return this.el.on("bookmark:remove", this.removeBookmarkIconFromActiveNavItem)
    };
    Sequence.prototype.initProgress = function() {
      return this.progressTable = {}
    };
    Sequence.prototype.updatePageTitle = function() {
      var position_link;
      position_link = this.link_for(this.position);
      if (position_link && position_link.data("page-title")) {
        return document.title = position_link.data("page-title") + this.base_page_title
      }
    };
    Sequence.prototype.hookUpProgressEvent = function() {
      return $(".problems-wrapper").bind("progressChanged", this.updateProgress)
    };
    Sequence.prototype.mergeProgress = function(p1, p2) {
      var w1, w2;
      if (p1 === "NA") {
        return p2
      }
      if (p2 === "NA") {
        return p1
      }
      if (p1 === "done" && p2 === "done") {
        return "done"
      }
      w1 = p1 === "done" || p1 === "in_progress";
      w2 = p2 === "done" || p2 === "in_progress";
      if (w1 || w2) {
        return "in_progress"
      }
      return "none"
    };
    Sequence.prototype.updateProgress = function() {
      var new_progress;
      new_progress = "NA";
      _this = this;
      $(".problems-wrapper").each(function(index) {
        var progress;
        progress = $(this).data("progress_status");
        return new_progress = _this.mergeProgress(progress, new_progress)
      });
      this.progressTable[this.position] = new_progress;
      return this.setProgress(new_progress, this.link_for(this.position))
    };
    Sequence.prototype.setProgress = function(progress, element) {
      element.removeClass("progress-none").removeClass("progress-some").removeClass("progress-done");
      switch (progress) {
      case "none":
        return element.addClass("progress-none");
      case "in_progress":
        return element.addClass("progress-some");
      case "done":
        return element.addClass("progress-done")
      }
    };
    Sequence.prototype.toggleArrows = function() {
      this.$(".sequence-nav-button").unbind("click");
      if (this.contents.length === 0) {
        this.$(".sequence-nav-button.button-previous").addClass("disabled").attr("disabled", true);
        this.$(".sequence-nav-button.button-next").addClass("disabled").attr("disabled", true);
        return
      }
      if (this.position === 1) {
        this.$(".sequence-nav-button.button-previous").addClass("disabled").attr("disabled", true)
      } else {
        this.$(".sequence-nav-button.button-previous").removeClass("disabled").removeAttr("disabled").click(this.previous)
      }
      if (this.position === this.contents.length) {
        return this.$(".sequence-nav-button.button-next").addClass("disabled").attr("disabled", true)
      } else {
        return this.$(".sequence-nav-button.button-next").removeClass("disabled").removeAttr("disabled").click(this.next)
      }
    };
    Sequence.prototype.render = function(new_position) {
      var bookmarked, current_tab, modx_full_url, sequence_links;
      if (this.position !== new_position) {
        if (this.position !== void 0) {
          this.mark_visited(this.position);
          modx_full_url = "" + this.ajaxUrl + "/goto_position";
          $.postWithPrefix(modx_full_url, {
            position: new_position
          })
        }
        this.el.trigger("sequence:change");
        this.mark_active(new_position);
        current_tab = this.contents.eq(new_position - 1);
        bookmarked = this.el.find(".active .bookmark-icon").hasClass("bookmarked") ? true: false;
        this.content_container.html(current_tab.text()).attr("aria-labelledby", current_tab.attr("aria-labelledby")).data("bookmarked", bookmarked);
        XBlock.initializeBlocks(this.content_container, this.requestToken);
        window.update_schematics();
        this.position = new_position;
        this.toggleArrows();
        this.hookUpProgressEvent();
        this.updatePageTitle();
        sequence_links = this.content_container.find("a.seqnav");
        sequence_links.click(this.goto);
        this.el.find(".path").text(this.el.find(".nav-item.active").data("path"));
        return this.sr_container.focus()
      }
    };
    Sequence.prototype.goto = function(event) {
      var alert_template, alert_text, new_position;
      event.preventDefault();
      if ($(event.currentTarget).hasClass("seqnav")) {
        new_position = $(event.currentTarget).attr("href")
      } else {
        new_position = $(event.currentTarget).data("element")
      }
      if (1 <= new_position && new_position <= this.num_contents) {
        Logger.log("seq_goto", {
          old: this.position,
          "new": new_position,
          id: this.id
        });
        if (window.queuePollerID) {
          window.clearTimeout(window.queuePollerID);
          delete window.queuePollerID
        }
        return this.render(new_position)
      } else {
        alert_template = gettext("Sequence error! Cannot navigate to %(tab_name)s in the current SequenceModule. Please contact the course staff.");
        alert_text = interpolate(alert_template, {
          tab_name: new_position
        },
        true);
        return alert(alert_text)
      }
    };
    Sequence.prototype.next = function(event) {
      return this._change_sequential("seq_next", event)
    };
    Sequence.prototype.previous = function(event) {
      return this._change_sequential("seq_prev", event)
    };
    Sequence.prototype._change_sequential = function(direction, event) {
      var new_position, offset;
      if (direction !== "seq_prev" && direction !== "seq_next") {
        return
      }
      event.preventDefault();
      offset = {
        seq_next: 1,
        seq_prev: -1
      };
      new_position = this.position + offset[direction];
      Logger.log(direction, {
        old: this.position,
        "new": new_position,
        id: this.id
      });
      if ($(event.target).closest('nav[class="sequence-bottom"]').length > 0) {
        $.scrollTo(0, 150)
      }
      return this.render(new_position)
    };
    Sequence.prototype.link_for = function(position) {
      return this.$("#sequence-list a[data-element=" + position + "]")
    };
    Sequence.prototype.mark_visited = function(position) {
      var element;
      element = this.link_for(position);
      return element.removeClass("inactive").removeClass("active").addClass("visited")
    };
    Sequence.prototype.mark_active = function(position) {
      var element;
      element = this.link_for(position);
      return element.removeClass("inactive").removeClass("visited").addClass("active")
    };
    Sequence.prototype.addBookmarkIconToActiveNavItem = function(event) {
      event.preventDefault();
      this.el.find(".nav-item.active .bookmark-icon").removeClass("is-hidden").addClass("bookmarked");
      return this.el.find(".nav-item.active .bookmark-icon-sr").text(gettext("Bookmarked"))
    };
    Sequence.prototype.removeBookmarkIconFromActiveNavItem = function(event) {
      event.preventDefault();
      this.el.find(".nav-item.active .bookmark-icon").removeClass("bookmarked").addClass("is-hidden");
      return this.el.find(".nav-item.active .bookmark-icon-sr").text("")
    };
    return Sequence
  } ()
}).call(this);
d3 = function() {
  function n(n) {
    return null != n && !isNaN(n)
  }
  function t(n) {
    return n.length
  }
  function e(n) {
    for (var t = 1; n * t % 1;) t *= 10;
    return t
  }
  function r(n, t) {
    try {
      for (var e in t) Object.defineProperty(n.prototype, e, {
        value: t[e],
        enumerable: !1
      })
    } catch(r) {
      n.prototype = t
    }
  }
  function u() {}
  function i() {}
  function a(n, t, e) {
    return function() {
      var r = e.apply(t, arguments);
      return r === t ? n: r
    }
  }
  function o() {}
  function c(n) {
    function t() {
      for (var t, r = e,
      u = -1,
      i = r.length; ++u < i;)(t = r[u].on) && t.apply(this, arguments);
      return n
    }
    var e = [],
    r = new u;
    return t.on = function(t, u) {
      var i, a = r.get(t);
      return arguments.length < 2 ? a && a.on: (a && (a.on = null, e = e.slice(0, i = e.indexOf(a)).concat(e.slice(i + 1)), r.remove(t)), u && e.push(r.set(t, {
        on: u
      })), n)
    },
    t
  }
  function l() {
    oa.event.stopPropagation(),
    oa.event.preventDefault()
  }
  function f() {
    for (var n, t = oa.event; n = t.sourceEvent;) t = n;
    return t
  }
  function s(n) {
    for (var t = new o,
    e = 0,
    r = arguments.length; ++e < r;) t[arguments[e]] = c(t);
    return t.of = function(e, r) {
      return function(u) {
        try {
          var i = u.sourceEvent = oa.event;
          u.target = n,
          oa.event = u,
          t[u.type].apply(e, r)
        } finally {
          oa.event = i
        }
      }
    },
    t
  }
  function h(n, t) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      if (0 > ma && (la.scrollX || la.scrollY)) {
        e = oa.select(ca.body).append("svg").style("position", "absolute").style("top", 0).style("left", 0);
        var u = e[0][0].getScreenCTM();
        ma = !(u.f || u.e),
        e.remove()
      }
      return ma ? (r.x = t.pageX, r.y = t.pageY) : (r.x = t.clientX, r.y = t.clientY),
      r = r.matrixTransform(n.getScreenCTM().inverse()),
      [r.x, r.y]
    }
    var i = n.getBoundingClientRect();
    return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop]
  }
  function g(n) {
    for (var t = -1,
    e = n.length,
    r = []; ++t < e;) r.push(n[t]);
    return r
  }
  function p(n) {
    return Array.prototype.slice.call(n)
  }
  function d(n) {
    return Ma(n, Ea),
    n
  }
  function m(n) {
    return function() {
      return xa(n, this)
    }
  }
  function v(n) {
    return function() {
      return ba(n, this)
    }
  }
  function y(n, t) {
    function e() {
      this.removeAttribute(n)
    }
    function r() {
      this.removeAttributeNS(n.space, n.local)
    }
    function u() {
      this.setAttribute(n, t)
    }
    function i() {
      this.setAttributeNS(n.space, n.local, t)
    }
    function a() {
      var e = t.apply(this, arguments);
      null == e ? this.removeAttribute(n) : this.setAttribute(n, e)
    }
    function o() {
      var e = t.apply(this, arguments);
      null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e)
    }
    return n = oa.ns.qualify(n),
    null == t ? n.local ? r: e: "function" == typeof t ? n.local ? o: a: n.local ? i: u
  }
  function M(n) {
    return n.trim().replace(/\s+/g, " ")
  }
  function x(n) {
    return RegExp("(?:^|\\s+)" + oa.requote(n) + "(?:\\s+|$)", "g")
  }
  function _(n, t) {
    function e() {
      for (var e = -1; ++e < u;) n[e](this, t)
    }
    function r() {
      for (var e = -1,
      r = t.apply(this, arguments); ++e < u;) n[e](this, r)
    }
    n = n.trim().split(/\s+/).map(w);
    var u = n.length;
    return "function" == typeof t ? r: e
  }
  function w(n) {
    var t = x(n);
    return function(e, r) {
      if (u = e.classList) return r ? u.add(n) : u.remove(n);
      var u = e.getAttribute("class") || "";
      r ? (t.lastIndex = 0, t.test(u) || e.setAttribute("class", M(u + " " + n))) : e.setAttribute("class", M(u.replace(t, " ")))
    }
  }
  function S(n, t, e) {
    function r() {
      this.style.removeProperty(n)
    }
    function u() {
      this.style.setProperty(n, t, e)
    }
    function i() {
      var r = t.apply(this, arguments);
      null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e)
    }
    return null == t ? r: "function" == typeof t ? i: u
  }
  function E(n, t) {
    function e() {
      delete this[n]
    }
    function r() {
      this[n] = t
    }
    function u() {
      var e = t.apply(this, arguments);
      null == e ? delete this[n] : this[n] = e
    }
    return null == t ? e: "function" == typeof t ? u: r
  }
  function k(n) {
    return {
      __data__: n
    }
  }
  function A(n) {
    return function() {
      return Sa(this, n)
    }
  }
  function q(n) {
    return arguments.length || (n = oa.ascending),
    function(t, e) {
      return ! t - !e || n(t.__data__, e.__data__)
    }
  }
  function N() {}
  function T(n, t, e) {
    function r() {
      var t = this[a];
      t && (this.removeEventListener(n, t, t.$), delete this[a])
    }
    function u() {
      var u = c(t, va(arguments));
      r.call(this),
      this.addEventListener(n, this[a] = u, u.$ = e),
      u._ = t
    }
    function i() {
      var t, e = RegExp("^__on([^.]+)" + oa.requote(n) + "$");
      for (var r in this) if (t = r.match(e)) {
        var u = this[r];
        this.removeEventListener(t[1], u, u.$),
        delete this[r]
      }
    }
    var a = "__on" + n,
    o = n.indexOf("."),
    c = C;
    o > 0 && (n = n.substring(0, o));
    var l = qa.get(n);
    return l && (n = l, c = z),
    o ? t ? u: r: t ? N: i
  }
  function C(n, t) {
    return function(e) {
      var r = oa.event;
      oa.event = e,
      t[0] = this.__data__;
      try {
        n.apply(this, t)
      } finally {
        oa.event = r
      }
    }
  }
  function z(n, t) {
    var e = C(n, t);
    return function(n) {
      var t = this,
      r = n.relatedTarget;
      r && (r === t || r.compareDocumentPosition(t) & 8) || e.call(t, n)
    }
  }
  function D(n, t) {
    for (var e = 0,
    r = n.length; r > e; e++) for (var u, i = n[e], a = 0, o = i.length; o > a; a++)(u = i[a]) && t(u, a, e);
    return n
  }
  function j(n) {
    return Ma(n, Na),
    n
  }
  function L() {}
  function F(n, t, e) {
    return new H(n, t, e)
  }
  function H(n, t, e) {
    this.h = n,
    this.s = t,
    this.l = e
  }
  function P(n, t, e) {
    function r(n) {
      return n > 360 ? n -= 360 : 0 > n && (n += 360),
      60 > n ? i + (a - i) * n / 60 : 180 > n ? a: 240 > n ? i + (a - i) * (240 - n) / 60 : i
    }
    function u(n) {
      return Math.round(r(n) * 255)
    }
    var i, a;
    return n %= 360,
    0 > n && (n += 360),
    t = 0 > t ? 0 : t > 1 ? 1 : t,
    e = 0 > e ? 0 : e > 1 ? 1 : e,
    a = .5 >= e ? e * (1 + t) : e + t - e * t,
    i = 2 * e - a,
    tt(u(n + 120), u(n), u(n - 120))
  }
  function R(n) {
    return n > 0 ? 1 : 0 > n ? -1 : 0
  }
  function O(n) {
    return Math.acos(Math.max( - 1, Math.min(1, n)))
  }
  function Y(n) {
    return n > 1 ? La / 2 : -1 > n ? -La / 2 : Math.asin(n)
  }
  function U(n) {
    return (Math.exp(n) - Math.exp( - n)) / 2
  }
  function I(n) {
    return (Math.exp(n) + Math.exp( - n)) / 2
  }
  function V(n) {
    return (n = Math.sin(n / 2)) * n
  }
  function X(n, t, e) {
    return new Z(n, t, e)
  }
  function Z(n, t, e) {
    this.h = n,
    this.c = t,
    this.l = e
  }
  function B(n, t, e) {
    return $(e, Math.cos(n *= Ha) * t, Math.sin(n) * t)
  }
  function $(n, t, e) {
    return new J(n, t, e)
  }
  function J(n, t, e) {
    this.l = n,
    this.a = t,
    this.b = e
  }
  function G(n, t, e) {
    var r = (n + 16) / 116,
    u = r + t / 500,
    i = r - e / 200;
    return u = W(u) * Ya,
    r = W(r) * Ua,
    i = W(i) * Ia,
    tt(nt(3.2404542 * u - 1.5371385 * r - .4985314 * i), nt( - .969266 * u + 1.8760108 * r + .041556 * i), nt(.0556434 * u - .2040259 * r + 1.0572252 * i))
  }
  function K(n, t, e) {
    return X(Math.atan2(e, t) * Pa, Math.sqrt(t * t + e * e), n)
  }
  function W(n) {
    return n > .206893034 ? n * n * n: (n - 4 / 29) / 7.787037
  }
  function Q(n) {
    return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29
  }
  function nt(n) {
    return Math.round(255 * (.00304 >= n ? 12.92 * n: 1.055 * Math.pow(n, 1 / 2.4) - .055))
  }
  function tt(n, t, e) {
    return new et(n, t, e)
  }
  function et(n, t, e) {
    this.r = n,
    this.g = t,
    this.b = e
  }
  function rt(n) {
    return 16 > n ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16)
  }
  function ut(n, t, e) {
    var r, u, i, a = 0,
    o = 0,
    c = 0;
    if (r = /([a-z]+)\((.*)\)/i.exec(n)) switch (u = r[2].split(","), r[1]) {
    case "hsl":
      return e(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
    case "rgb":
      return t(ct(u[0]), ct(u[1]), ct(u[2]))
    }
    return (i = Za.get(n)) ? t(i.r, i.g, i.b) : (null != n && n.charAt(0) === "#" && (n.length === 4 ? (a = n.charAt(1), a += a, o = n.charAt(2), o += o, c = n.charAt(3), c += c) : n.length === 7 && (a = n.substring(1, 3), o = n.substring(3, 5), c = n.substring(5, 7)), a = parseInt(a, 16), o = parseInt(o, 16), c = parseInt(c, 16)), t(a, o, c))
  }
  function it(n, t, e) {
    var r, u, i = Math.min(n /= 255, t /= 255, e /= 255),
    a = Math.max(n, t, e),
    o = a - i,
    c = (a + i) / 2;
    return o ? (u = .5 > c ? o / (a + i) : o / (2 - a - i), r = n == a ? (t - e) / o + (e > t ? 6 : 0) : t == a ? (e - n) / o + 2 : (n - t) / o + 4, r *= 60) : u = r = 0,
    F(r, u, c)
  }
  function at(n, t, e) {
    n = ot(n),
    t = ot(t),
    e = ot(e);
    var r = Q((.4124564 * n + .3575761 * t + .1804375 * e) / Ya),
    u = Q((.2126729 * n + .7151522 * t + .072175 * e) / Ua),
    i = Q((.0193339 * n + .119192 * t + .9503041 * e) / Ia);
    return $(116 * u - 16, 500 * (r - u), 200 * (u - i))
  }
  function ot(n) {
    return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
  }
  function ct(n) {
    var t = parseFloat(n);
    return n.charAt(n.length - 1) === "%" ? Math.round(2.55 * t) : t
  }
  function lt(n) {
    return "function" == typeof n ? n: function() {
      return n
    }
  }
  function ft(n) {
    return n
  }
  function st(n) {
    return n.length === 1 ?
    function(t, e) {
      n(null == t ? e: null)
    }: n
  }
  function ht(n, t) {
    function e(n, e, i) {
      arguments.length < 3 && (i = e, e = null);
      var a = oa.xhr(n, t, i);
      return a.row = function(n) {
        return arguments.length ? a.response((e = n) == null ? r: u(n)) : e
      },
      a.row(e)
    }
    function r(n) {
      return e.parse(n.responseText)
    }
    function u(n) {
      return function(t) {
        return e.parse(t.responseText, n)
      }
    }
    function a(t) {
      return t.map(o).join(n)
    }
    function o(n) {
      return c.test(n) ? '"' + n.replace(/\"/g, '""') + '"': n
    }
    var c = RegExp('["' + n + "\n]"),
    l = n.charCodeAt(0);
    return e.parse = function(n, t) {
      var r;
      return e.parseRows(n,
      function(n, e) {
        if (r) return r(n, e - 1);
        var u = Function("d", "return {" + n.map(function(n, t) {
          return JSON.stringify(n) + ": d[" + t + "]"
        }).join(",") + "}");
        r = t ?
        function(n, e) {
          return t(u(n), e)
        }: u
      })
    },
    e.parseRows = function(n, t) {
      function e() {
        if (f >= c) return a;
        if (u) return u = !1,
        i;
        var t = f;
        if (n.charCodeAt(t) === 34) {
          for (var e = t; e++<c;) if (n.charCodeAt(e) === 34) {
            if (n.charCodeAt(e + 1) !== 34) break; ++e
          }
          f = e + 2;
          var r = n.charCodeAt(e + 1);
          return 13 === r ? (u = !0, n.charCodeAt(e + 2) === 10 && ++f) : 10 === r && (u = !0),
          n.substring(t + 1, e).replace(/""/g, '"')
        }
        for (; c > f;) {
          var r = n.charCodeAt(f++),
          o = 1;
          if (10 === r) u = !0;
          else if (13 === r) u = !0,
          n.charCodeAt(f) === 10 && (++f, ++o);
          else if (r !== l) continue;
          return n.substring(t, f - o)
        }
        return n.substring(t)
      }
      for (var r, u, i = {},
      a = {},
      o = [], c = n.length, f = 0, s = 0; (r = e()) !== a;) {
        for (var h = []; r !== i && r !== a;) h.push(r),
        r = e(); (!t || (h = t(h, s++))) && o.push(h)
      }
      return o
    },
    e.format = function(t) {
      if (Array.isArray(t[0])) return e.formatRows(t);
      var r = new i,
      u = [];
      return t.forEach(function(n) {
        for (var t in n) r.has(t) || u.push(r.add(t))
      }),
      [u.map(o).join(n)].concat(t.map(function(t) {
        return u.map(function(n) {
          return o(t[n])
        }).join(n)
      })).join("\n")
    },
    e.formatRows = function(n) {
      return n.map(a).join("\n")
    },
    e
  }
  function gt() {
    for (var n, t = Date.now(), e = Ka; e;) n = t - e.then,
    n >= e.delay && (e.flush = e.callback(n)),
    e = e.next;
    var r = pt() - t;
    r > 24 ? (isFinite(r) && (clearTimeout($a), $a = setTimeout(gt, r)), Ba = 0) : (Ba = 1, Wa(gt))
  }
  function pt() {
    for (var n = null,
    t = Ka,
    e = 1 / 0; t;) t.flush ? (delete Ga[t.callback.id], t = n ? n.next = t.next: Ka = t.next) : (e = Math.min(e, t.then + t.delay), t = (n = t).next);
    return e
  }
  function dt(n, t) {
    var e = Math.pow(10, Math.abs(8 - t) * 3);
    return {
      scale: t > 8 ?
      function(n) {
        return n / e
      }: function(n) {
        return n * e
      },
      symbol: n
    }
  }
  function mt(n, t) {
    return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1)
  }
  function vt(n) {
    return n + ""
  }
  function yt(n, t) {
    co.hasOwnProperty(n.type) && co[n.type](n, t)
  }
  function Mt(n, t, e) {
    var r, u = -1,
    i = n.length - e;
    for (t.lineStart(); ++u < i;) r = n[u],
    t.point(r[0], r[1]);
    t.lineEnd()
  }
  function xt(n, t) {
    var e = -1,
    r = n.length;
    for (t.polygonStart(); ++e < r;) Mt(n[e], t, 1);
    t.polygonEnd()
  }
  function bt() {
    function n(n, t) {
      n *= Ha,
      t = t * Ha / 2 + La / 4;
      var e = n - r,
      a = Math.cos(t),
      o = Math.sin(t),
      c = i * o,
      l = fo,
      f = so,
      s = u * a + c * Math.cos(e),
      h = c * Math.sin(e);
      fo = l * s - f * h,
      so = f * s + l * h,
      r = n,
      u = a,
      i = o
    }
    var t, e, r, u, i;
    ho.point = function(a, o) {
      ho.point = n,
      r = (t = a) * Ha,
      u = Math.cos(o = (e = o) * Ha / 2 + La / 4),
      i = Math.sin(o)
    },
    ho.lineEnd = function() {
      n(t, e)
    }
  }
  function _t(n) {
    function t(n, t) {
      r > n && (r = n),
      n > i && (i = n),
      u > t && (u = t),
      t > a && (a = t)
    }
    function e() {
      o.point = o.lineEnd = N
    }
    var r, u, i, a, o = {
      point: t,
      lineStart: N,
      lineEnd: N,
      polygonStart: function() {
        o.lineEnd = e
      },
      polygonEnd: function() {
        o.point = t
      }
    };
    return function(t) {
      return a = i = -(r = u = 1 / 0),
      oa.geo.stream(t, n(o)),
      [[r, u], [i, a]]
    }
  }
  function wt(n, t) {
    if (!go) {++po,
      n *= Ha;
      var e = Math.cos(t *= Ha);
      mo += (e * Math.cos(n) - mo) / po,
      vo += (e * Math.sin(n) - vo) / po,
      yo += (Math.sin(t) - yo) / po
    }
  }
  function St() {
    var n, t;
    go = 1,
    Et(),
    go = 2;
    var e = Mo.point;
    Mo.point = function(r, u) {
      e(n = r, t = u)
    },
    Mo.lineEnd = function() {
      Mo.point(n, t),
      kt(),
      Mo.lineEnd = kt
    }
  }
  function Et() {
    function n(n, u) {
      n *= Ha;
      var i = Math.cos(u *= Ha),
      a = i * Math.cos(n),
      o = i * Math.sin(n),
      c = Math.sin(u),
      l = Math.atan2(Math.sqrt((l = e * c - r * o) * l + (l = r * a - t * c) * l + (l = t * o - e * a) * l), t * a + e * o + r * c);
      po += l,
      mo += l * (t + (t = a)),
      vo += l * (e + (e = o)),
      yo += l * (r + (r = c))
    }
    var t, e, r;
    go > 1 || (1 > go && (go = 1, po = mo = vo = yo = 0), Mo.point = function(u, i) {
      u *= Ha;
      var a = Math.cos(i *= Ha);
      t = a * Math.cos(u),
      e = a * Math.sin(u),
      r = Math.sin(i),
      Mo.point = n
    })
  }
  function kt() {
    Mo.point = wt
  }
  function At(n) {
    var t = n[0],
    e = n[1],
    r = Math.cos(e);
    return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)]
  }
  function qt(n, t) {
    return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
  }
  function Nt(n, t) {
    return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
  }
  function Tt(n, t) {
    n[0] += t[0],
    n[1] += t[1],
    n[2] += t[2]
  }
  function Ct(n, t) {
    return [n[0] * t, n[1] * t, n[2] * t]
  }
  function zt(n) {
    var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
    n[0] /= t,
    n[1] /= t,
    n[2] /= t
  }
  function Dt() {
    return ! 0
  }
  function jt(n) {
    return [Math.atan2(n[1], n[0]), Math.asin(Math.max( - 1, Math.min(1, n[2])))]
  }
  function Lt(n, t) {
    return Math.abs(n[0] - t[0]) < Fa && Math.abs(n[1] - t[1]) < Fa
  }
  function Ft(n, t, e, r, u) {
    var i = [],
    a = [];
    if (n.forEach(function(n) {
      if (! ((t = n.length - 1) <= 0)) {
        var t, e = n[0],
        r = n[t];
        if (Lt(e, r)) {
          u.lineStart();
          for (var o = 0; t > o; ++o) u.point((e = n[o])[0], e[1]);
          return u.lineEnd(),
          void 0
        }
        var c = {
          point: e,
          points: n,
          other: null,
          visited: !1,
          entry: !0,
          subject: !0
        },
        l = {
          point: e,
          points: [e],
          other: c,
          visited: !1,
          entry: !1,
          subject: !1
        };
        c.other = l,
        i.push(c),
        a.push(l),
        c = {
          point: r,
          points: [r],
          other: null,
          visited: !1,
          entry: !1,
          subject: !0
        },
        l = {
          point: r,
          points: [r],
          other: c,
          visited: !1,
          entry: !0,
          subject: !1
        },
        c.other = l,
        i.push(c),
        a.push(l)
      }
    }), a.sort(t), Ht(i), Ht(a), i.length) {
      if (e) for (var o = 1,
      c = !e(a[0].point), l = a.length; l > o; ++o) a[o].entry = c = !c;
      for (var f, s, h, g = i[0];;) {
        for (f = g; f.visited;) if ((f = f.next) === g) return;
        s = f.points,
        u.lineStart();
        do {
          if (f.visited = f.other.visited = !0, f.entry) {
            if (f.subject) for (var o = 0; o < s.length; o++) u.point((h = s[o])[0], h[1]);
            else r(f.point, f.next.point, 1, u);
            f = f.next
          } else {
            if (f.subject) {
              s = f.prev.points;
              for (var o = s.length; --o >= 0;) u.point((h = s[o])[0], h[1])
            } else r(f.point, f.prev.point, -1, u);
            f = f.prev
          }
          f = f.other, s = f.points
        } while (! f . visited );
        u.lineEnd()
      }
    }
  }
  function Ht(n) {
    if (t = n.length) {
      for (var t, e, r = 0,
      u = n[0]; ++r < t;) u.next = e = n[r],
      e.prev = u,
      u = e;
      u.next = e = n[0],
      e.prev = u
    }
  }
  function Pt(n, t, e) {
    return function(r) {
      function u(t, e) {
        n(t, e) && r.point(t, e)
      }
      function i(n, t) {
        m.point(n, t)
      }
      function a() {
        v.point = i,
        m.lineStart()
      }
      function o() {
        v.point = u,
        m.lineEnd()
      }
      function c(n, t) {
        M.point(n, t),
        d.push([n, t])
      }
      function l() {
        M.lineStart(),
        d = []
      }
      function f() {
        c(d[0][0], d[0][1]),
        M.lineEnd();
        var n, t = M.clean(),
        e = y.buffer(),
        u = e.length;
        if (!u) return p = !0,
        g += Yt(d, -1),
        d = null,
        void 0;
        if (d = null, 1 & t) {
          n = e[0],
          h += Yt(n, 1);
          var i, u = n.length - 1,
          a = -1;
          for (r.lineStart(); ++a < u;) r.point((i = n[a])[0], i[1]);
          return r.lineEnd(),
          void 0
        }
        u > 1 && 2 & t && e.push(e.pop().concat(e.shift())),
        s.push(e.filter(Rt))
      }
      var s, h, g, p, d, m = t(r),
      v = {
        point: u,
        lineStart: a,
        lineEnd: o,
        polygonStart: function() {
          v.point = c,
          v.lineStart = l,
          v.lineEnd = f,
          p = !1,
          g = h = 0,
          s = [],
          r.polygonStart()
        },
        polygonEnd: function() {
          v.point = u,
          v.lineStart = a,
          v.lineEnd = o,
          s = oa.merge(s),
          s.length ? Ft(s, Ut, null, e, r) : ( - Fa > h || p && -Fa > g) && (r.lineStart(), e(null, null, 1, r), r.lineEnd()),
          r.polygonEnd(),
          s = null
        },
        sphere: function() {
          r.polygonStart(),
          r.lineStart(),
          e(null, null, 1, r),
          r.lineEnd(),
          r.polygonEnd()
        }
      },
      y = Ot(),
      M = t(y);
      return v
    }
  }
  function Rt(n) {
    return n.length > 1
  }
  function Ot() {
    var n, t = [];
    return {
      lineStart: function() {
        t.push(n = [])
      },
      point: function(t, e) {
        n.push([t, e])
      },
      lineEnd: N,
      buffer: function() {
        var e = t;
        return t = [],
        n = null,
        e
      },
      rejoin: function() {
        t.length > 1 && t.push(t.pop().concat(t.shift()))
      }
    }
  }
  function Yt(n, t) {
    if (! (e = n.length)) return 0;
    for (var e, r, u, i = 0,
    a = 0,
    o = n[0], c = o[0], l = o[1], f = Math.cos(l), s = Math.atan2(t * Math.sin(c) * f, Math.sin(l)), h = 1 - t * Math.cos(c) * f, g = s; ++i < e;) o = n[i],
    f = Math.cos(l = o[1]),
    r = Math.atan2(t * Math.sin(c = o[0]) * f, Math.sin(l)),
    u = 1 - t * Math.cos(c) * f,
    Math.abs(h - 2) < Fa && Math.abs(u - 2) < Fa || (Math.abs(u) < Fa || Math.abs(h) < Fa || (Math.abs(Math.abs(r - s) - La) < Fa ? u + h > 2 && (a += 4 * (r - s)) : a += Math.abs(h - 2) < Fa ? 4 * (r - g) : ((3 * La + r - s) % (2 * La) - La) * (h + u)), g = s, s = r, h = u);
    return a
  }
  function Ut(n, t) {
    return ((n = n.point)[0] < 0 ? n[1] - La / 2 - Fa: La / 2 - n[1]) - ((t = t.point)[0] < 0 ? t[1] - La / 2 - Fa: La / 2 - t[1])
  }
  function It(n) {
    var t, e = 0 / 0,
    r = 0 / 0,
    u = 0 / 0;
    return {
      lineStart: function() {
        n.lineStart(),
        t = 1
      },
      point: function(i, a) {
        var o = i > 0 ? La: -La,
        c = Math.abs(i - e);
        Math.abs(c - La) < Fa ? (n.point(e, r = (r + a) / 2 > 0 ? La / 2 : -La / 2), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(o, r), n.point(i, r), t = 0) : u !== o && c >= La && (Math.abs(e - u) < Fa && (e -= u * Fa), Math.abs(i - o) < Fa && (i -= o * Fa), r = Vt(e, r, i, a), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(o, r), t = 0),
        n.point(e = i, r = a),
        u = o
      },
      lineEnd: function() {
        n.lineEnd(),
        e = r = 0 / 0
      },
      clean: function() {
        return 2 - t
      }
    }
  }
  function Vt(n, t, e, r) {
    var u, i, a = Math.sin(n - e);
    return Math.abs(a) > Fa ? Math.atan((Math.sin(t) * (i = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (u = Math.cos(t)) * Math.sin(n)) / (u * i * a)) : (t + r) / 2
  }
  function Xt(n, t, e, r) {
    var u;
    if (null == n) u = e * La / 2,
    r.point( - La, u),
    r.point(0, u),
    r.point(La, u),
    r.point(La, 0),
    r.point(La, -u),
    r.point(0, -u),
    r.point( - La, -u),
    r.point( - La, 0),
    r.point( - La, u);
    else if (Math.abs(n[0] - t[0]) > Fa) {
      var i = (n[0] < t[0] ? 1 : -1) * La;
      u = e * i / 2,
      r.point( - i, u),
      r.point(0, u),
      r.point(i, u)
    } else r.point(t[0], t[1])
  }
  function Zt(n) {
    function t(n, t) {
      return Math.cos(n) * Math.cos(t) > i
    }
    function e(n) {
      var e, i, c, l, f;
      return {
        lineStart: function() {
          l = c = !1,
          f = 1
        },
        point: function(s, h) {
          var g, p = [s, h],
          d = t(s, h),
          m = a ? d ? 0 : u(s, h) : d ? u(s + (0 > s ? La: -La), h) : 0;
          if (!e && (l = c = d) && n.lineStart(), d !== c && (g = r(e, p), (Lt(e, g) || Lt(p, g)) && (p[0] += Fa, p[1] += Fa, d = t(p[0], p[1]))), d !== c) f = 0,
          d ? (n.lineStart(), g = r(p, e), n.point(g[0], g[1])) : (g = r(e, p), n.point(g[0], g[1]), n.lineEnd()),
          e = g;
          else if (o && e && a ^ d) {
            var v;
            m & i || !(v = r(p, e, !0)) || (f = 0, a ? (n.lineStart(), n.point(v[0][0], v[0][1]), n.point(v[1][0], v[1][1]), n.lineEnd()) : (n.point(v[1][0], v[1][1]), n.lineEnd(), n.lineStart(), n.point(v[0][0], v[0][1])))
          } ! d || e && Lt(e, p) || n.point(p[0], p[1]),
          e = p,
          c = d,
          i = m
        },
        lineEnd: function() {
          c && n.lineEnd(),
          e = null
        },
        clean: function() {
          return f | (l && c) << 1
        }
      }
    }
    function r(n, t, e) {
      var r = At(n),
      u = At(t),
      a = [1, 0, 0],
      o = Nt(r, u),
      c = qt(o, o),
      l = o[0],
      f = c - l * l;
      if (!f) return ! e && n;
      var s = i * c / f,
      h = -i * l / f,
      g = Nt(a, o),
      p = Ct(a, s),
      d = Ct(o, h);
      Tt(p, d);
      var m = g,
      v = qt(p, m),
      y = qt(m, m),
      M = v * v - y * (qt(p, p) - 1);
      if (! (0 > M)) {
        var x = Math.sqrt(M),
        b = Ct(m, ( - v - x) / y);
        if (Tt(b, p), b = jt(b), !e) return b;
        var _, w = n[0],
        S = t[0],
        E = n[1],
        k = t[1];
        w > S && (_ = w, w = S, S = _);
        var A = S - w,
        q = Math.abs(A - La) < Fa,
        N = q || Fa > A;
        if (!q && E > k && (_ = E, E = k, k = _), N ? q ? E + k > 0 ^ b[1] < (Math.abs(b[0] - w) < Fa ? E: k) : E <= b[1] && b[1] <= k: A > La ^ (w <= b[0] && b[0] <= S)) {
          var T = Ct(m, ( - v + x) / y);
          return Tt(T, p),
          [b, jt(T)]
        }
      }
    }
    function u(t, e) {
      var r = a ? n: La - n,
      u = 0;
      return - r > t ? u |= 1 : t > r && (u |= 2),
      -r > e ? u |= 4 : e > r && (u |= 8),
      u
    }
    var i = Math.cos(n),
    a = i > 0,
    o = Math.abs(i) > Fa,
    c = ie(n, 6 * Ha);
    return Pt(t, e, c)
  }
  function Bt(n, t, e, r) {
    function u(r, u) {
      return Math.abs(r[0] - n) < Fa ? u > 0 ? 0 : 3 : Math.abs(r[0] - e) < Fa ? u > 0 ? 2 : 1 : Math.abs(r[1] - t) < Fa ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2
    }
    function i(n, t) {
      return a(n.point, t.point)
    }
    function a(n, t) {
      var e = u(n, 1),
      r = u(t, 1);
      return e !== r ? e - r: 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0]
    }
    function o(u, i) {
      var a = i[0] - u[0],
      o = i[1] - u[1],
      c = [0, 1];
      return Math.abs(a) < Fa && Math.abs(o) < Fa ? n <= u[0] && u[0] <= e && t <= u[1] && u[1] <= r: $t(n - u[0], a, c) && $t(u[0] - e, -a, c) && $t(t - u[1], o, c) && $t(u[1] - r, -o, c) ? (c[1] < 1 && (i[0] = u[0] + c[1] * a, i[1] = u[1] + c[1] * o), c[0] > 0 && (u[0] += c[0] * a, u[1] += c[0] * o), !0) : !1
    }
    return function(c) {
      function l(i) {
        var a = u(i, -1),
        o = f([0 === a || 3 === a ? n: e, a > 1 ? r: t]);
        return o
      }
      function f(n) {
        for (var t = 0,
        e = M.length,
        r = n[1], u = 0; e > u; ++u) for (var i = 1,
        a = M[u], o = a.length, c = a[0]; o > i; ++i) b = a[i],
        c[1] <= r ? b[1] > r && s(c, b, n) > 0 && ++t: b[1] <= r && s(c, b, n) < 0 && --t,
        c = b;
        return 0 !== t
      }
      function s(n, t, e) {
        return (t[0] - n[0]) * (e[1] - n[1]) - (e[0] - n[0]) * (t[1] - n[1])
      }
      function h(i, o, c, l) {
        var f = 0,
        s = 0;
        if (null == i || (f = u(i, c)) !== (s = u(o, c)) || a(i, o) < 0 ^ c > 0) {
          do l.point(0 === f || 3 === f ? n: e, f > 1 ? r: t);
          while ((f = (f + c + 4) % 4) !== s)
        } else l.point(o[0], o[1])
      }
      function g(u, i) {
        return u >= n && e >= u && i >= t && r >= i
      }
      function p(n, t) {
        g(n, t) && c.point(n, t)
      }
      function d() {
        C.point = v,
        M && M.push(x = []),
        q = !0,
        A = !1,
        E = k = 0 / 0
      }
      function m() {
        y && (v(_, w), S && A && T.rejoin(), y.push(T.buffer())),
        C.point = p,
        A && c.lineEnd()
      }
      function v(n, t) {
        n = Math.max( - bo, Math.min(bo, n)),
        t = Math.max( - bo, Math.min(bo, t));
        var e = g(n, t);
        if (M && x.push([n, t]), q) _ = n,
        w = t,
        S = e,
        q = !1,
        e && (c.lineStart(), c.point(n, t));
        else if (e && A) c.point(n, t);
        else {
          var r = [E, k],
          u = [n, t];
          o(r, u) ? (A || (c.lineStart(), c.point(r[0], r[1])), c.point(u[0], u[1]), e || c.lineEnd()) : (c.lineStart(), c.point(n, t))
        }
        E = n,
        k = t,
        A = e
      }
      var y, M, x, _, w, S, E, k, A, q, N = c,
      T = Ot(),
      C = {
        point: p,
        lineStart: d,
        lineEnd: m,
        polygonStart: function() {
          c = T,
          y = [],
          M = []
        },
        polygonEnd: function() {
          c = N,
          (y = oa.merge(y)).length ? (c.polygonStart(), Ft(y, i, l, h, c), c.polygonEnd()) : f([n, t]) && (c.polygonStart(), c.lineStart(), h(null, null, 1, c), c.lineEnd(), c.polygonEnd()),
          y = M = x = null
        }
      };
      return C
    }
  }
  function $t(n, t, e) {
    if (Math.abs(t) < Fa) return 0 >= n;
    var r = n / t;
    if (t > 0) {
      if (r > e[1]) return ! 1;
      r > e[0] && (e[0] = r)
    } else {
      if (r < e[0]) return ! 1;
      r < e[1] && (e[1] = r)
    }
    return ! 0
  }
  function Jt(n, t) {
    function e(e, r) {
      return e = n(e, r),
      t(e[0], e[1])
    }
    return n.invert && t.invert && (e.invert = function(e, r) {
      return e = t.invert(e, r),
      e && n.invert(e[0], e[1])
    }),
    e
  }
  function Gt(n) {
    function t(t) {
      function r(e, r) {
        e = n(e, r),
        t.point(e[0], e[1])
      }
      function i() {
        f = 0 / 0,
        d.point = a,
        t.lineStart()
      }
      function a(r, i) {
        var a = At([r, i]),
        o = n(r, i);
        e(f, s, l, h, g, p, f = o[0], s = o[1], l = r, h = a[0], g = a[1], p = a[2], u, t),
        t.point(f, s)
      }
      function o() {
        d.point = r,
        t.lineEnd()
      }
      function c() {
        var n, r, c, m, v, y, M;
        i(),
        d.point = function(t, e) {
          a(n = t, r = e),
          c = f,
          m = s,
          v = h,
          y = g,
          M = p,
          d.point = a
        },
        d.lineEnd = function() {
          e(f, s, l, h, g, p, c, m, n, v, y, M, u, t),
          d.lineEnd = o,
          o()
        }
      }
      var l, f, s, h, g, p, d = {
        point: r,
        lineStart: i,
        lineEnd: o,
        polygonStart: function() {
          t.polygonStart(),
          d.lineStart = c
        },
        polygonEnd: function() {
          t.polygonEnd(),
          d.lineStart = i
        }
      };
      return d
    }
    function e(t, u, i, a, o, c, l, f, s, h, g, p, d, m) {
      var v = l - t,
      y = f - u,
      M = v * v + y * y;
      if (M > 4 * r && d--) {
        var x = a + h,
        b = o + g,
        _ = c + p,
        w = Math.sqrt(x * x + b * b + _ * _),
        S = Math.asin(_ /= w),
        E = Math.abs(Math.abs(_) - 1) < Fa ? (i + s) / 2 : Math.atan2(b, x),
        k = n(E, S),
        A = k[0],
        q = k[1],
        N = A - t,
        T = q - u,
        C = y * N - v * T; (C * C / M > r || Math.abs((v * N + y * T) / M - .5) > .3) && (e(t, u, i, a, o, c, A, q, E, x /= w, b /= w, _, d, m), m.point(A, q), e(A, q, E, x, b, _, l, f, s, h, g, p, d, m))
      }
    }
    var r = .5,
    u = 16;
    return t.precision = function(n) {
      return arguments.length ? (u = (r = n * n) > 0 && 16, t) : Math.sqrt(r)
    },
    t
  }
  function Kt(n) {
    return Wt(function() {
      return n
    })()
  }
  function Wt(n) {
    function t(n) {
      return n = a(n[0] * Ha, n[1] * Ha),
      [n[0] * f + o, c - n[1] * f]
    }
    function e(n) {
      return n = a.invert((n[0] - o) / f, (c - n[1]) / f),
      n && [n[0] * Pa, n[1] * Pa]
    }
    function r() {
      a = Jt(i = te(d, m, v), u);
      var n = u(g, p);
      return o = s - n[0] * f,
      c = h + n[1] * f,
      t
    }
    var u, i, a, o, c, l = Gt(function(n, t) {
      return n = u(n, t),
      [n[0] * f + o, c - n[1] * f]
    }),
    f = 150,
    s = 480,
    h = 250,
    g = 0,
    p = 0,
    d = 0,
    m = 0,
    v = 0,
    y = xo,
    M = ft,
    x = null,
    b = null;
    return t.stream = function(n) {
      return Qt(i, y(l(M(n))))
    },
    t.clipAngle = function(n) {
      return arguments.length ? (y = null == n ? (x = n, xo) : Zt((x = +n) * Ha), t) : x
    },
    t.clipExtent = function(n) {
      return arguments.length ? (b = n, M = null == n ? ft: Bt(n[0][0], n[0][1], n[1][0], n[1][1]), t) : b
    },
    t.scale = function(n) {
      return arguments.length ? (f = +n, r()) : f
    },
    t.translate = function(n) {
      return arguments.length ? (s = +n[0], h = +n[1], r()) : [s, h]
    },
    t.center = function(n) {
      return arguments.length ? (g = n[0] % 360 * Ha, p = n[1] % 360 * Ha, r()) : [g * Pa, p * Pa]
    },
    t.rotate = function(n) {
      return arguments.length ? (d = n[0] % 360 * Ha, m = n[1] % 360 * Ha, v = n.length > 2 ? n[2] % 360 * Ha: 0, r()) : [d * Pa, m * Pa, v * Pa]
    },
    oa.rebind(t, l, "precision"),
    function() {
      return u = n.apply(this, arguments),
      t.invert = u.invert && e,
      r()
    }
  }
  function Qt(n, t) {
    return {
      point: function(e, r) {
        r = n(e * Ha, r * Ha),
        e = r[0],
        t.point(e > La ? e - 2 * La: -La > e ? e + 2 * La: e, r[1])
      },
      sphere: function() {
        t.sphere()
      },
      lineStart: function() {
        t.lineStart()
      },
      lineEnd: function() {
        t.lineEnd()
      },
      polygonStart: function() {
        t.polygonStart()
      },
      polygonEnd: function() {
        t.polygonEnd()
      }
    }
  }
  function ne(n, t) {
    return [n, t]
  }
  function te(n, t, e) {
    return n ? t || e ? Jt(re(n), ue(t, e)) : re(n) : t || e ? ue(t, e) : ne
  }
  function ee(n) {
    return function(t, e) {
      return t += n,
      [t > La ? t - 2 * La: -La > t ? t + 2 * La: t, e]
    }
  }
  function re(n) {
    var t = ee(n);
    return t.invert = ee( - n),
    t
  }
  function ue(n, t) {
    function e(n, t) {
      var e = Math.cos(t),
      o = Math.cos(n) * e,
      c = Math.sin(n) * e,
      l = Math.sin(t),
      f = l * r + o * u;
      return [Math.atan2(c * i - f * a, o * r - l * u), Math.asin(Math.max( - 1, Math.min(1, f * i + c * a)))]
    }
    var r = Math.cos(n),
    u = Math.sin(n),
    i = Math.cos(t),
    a = Math.sin(t);
    return e.invert = function(n, t) {
      var e = Math.cos(t),
      o = Math.cos(n) * e,
      c = Math.sin(n) * e,
      l = Math.sin(t),
      f = l * i - c * a;
      return [Math.atan2(c * i + l * a, o * r + f * u), Math.asin(Math.max( - 1, Math.min(1, f * r - o * u)))]
    },
    e
  }
  function ie(n, t) {
    var e = Math.cos(n),
    r = Math.sin(n);
    return function(u, i, a, o) {
      null != u ? (u = ae(e, u), i = ae(e, i), (a > 0 ? i > u: u > i) && (u += 2 * a * La)) : (u = n + 2 * a * La, i = n);
      for (var c, l = a * t,
      f = u; a > 0 ? f > i: i > f; f -= l) o.point((c = jt([e, -r * Math.cos(f), -r * Math.sin(f)]))[0], c[1])
    }
  }
  function ae(n, t) {
    var e = At(t);
    e[0] -= n,
    zt(e);
    var r = O( - e[1]);
    return (( - e[2] < 0 ? -r: r) + 2 * Math.PI - Fa) % (2 * Math.PI)
  }
  function oe(n, t, e) {
    var r = oa.range(n, t - Fa, e).concat(t);
    return function(n) {
      return r.map(function(t) {
        return [n, t]
      })
    }
  }
  function ce(n, t, e) {
    var r = oa.range(n, t - Fa, e).concat(t);
    return function(n) {
      return r.map(function(t) {
        return [t, n]
      })
    }
  }
  function le(n) {
    return n.source
  }
  function fe(n) {
    return n.target
  }
  function se(n, t, e, r) {
    var u = Math.cos(t),
    i = Math.sin(t),
    a = Math.cos(r),
    o = Math.sin(r),
    c = u * Math.cos(n),
    l = u * Math.sin(n),
    f = a * Math.cos(e),
    s = a * Math.sin(e),
    h = 2 * Math.asin(Math.sqrt(V(r - t) + u * a * V(e - n))),
    g = 1 / Math.sin(h),
    p = h ?
    function(n) {
      var t = Math.sin(n *= h) * g,
      e = Math.sin(h - n) * g,
      r = e * c + t * f,
      u = e * l + t * s,
      a = e * i + t * o;
      return [Math.atan2(u, r) * Pa, Math.atan2(a, Math.sqrt(r * r + u * u)) * Pa]
    }: function() {
      return [n * Pa, t * Pa]
    };
    return p.distance = h,
    p
  }
  function he() {
    function n(n, u) {
      var i = Math.sin(u *= Ha),
      a = Math.cos(u),
      o = Math.abs((n *= Ha) - t),
      c = Math.cos(o);
      _o += Math.atan2(Math.sqrt((o = a * Math.sin(o)) * o + (o = r * i - e * a * c) * o), e * i + r * a * c),
      t = n,
      e = i,
      r = a
    }
    var t, e, r;
    wo.point = function(u, i) {
      t = u * Ha,
      e = Math.sin(i *= Ha),
      r = Math.cos(i),
      wo.point = n
    },
    wo.lineEnd = function() {
      wo.point = wo.lineEnd = N
    }
  }
  function ge(n) {
    var t = 0,
    e = La / 3,
    r = Wt(n),
    u = r(t, e);
    return u.parallels = function(n) {
      return arguments.length ? r(t = n[0] * La / 180, e = n[1] * La / 180) : [180 * (t / La), 180 * (e / La)]
    },
    u
  }
  function pe(n, t) {
    function e(n, t) {
      var e = Math.sqrt(i - 2 * u * Math.sin(t)) / u;
      return [e * Math.sin(n *= u), a - e * Math.cos(n)]
    }
    var r = Math.sin(n),
    u = (r + Math.sin(t)) / 2,
    i = 1 + r * (2 * u - r),
    a = Math.sqrt(i) / u;
    return e.invert = function(n, t) {
      var e = a - t;
      return [Math.atan2(n, e) / u, Math.asin((i - (n * n + e * e) * u * u) / (2 * u))]
    },
    e
  }
  function de(n, t) {
    var e = n(t[0]),
    r = n([.5 * (t[0][0] + t[1][0]), t[0][1]]),
    u = n([t[1][0], t[0][1]]),
    i = n(t[1]),
    a = r[1] - e[1],
    o = r[0] - e[0],
    c = u[1] - r[1],
    l = u[0] - r[0],
    f = a / o,
    s = c / l,
    h = .5 * (f * s * (e[1] - u[1]) + s * (e[0] + r[0]) - f * (r[0] + u[0])) / (s - f),
    g = (.5 * (e[0] + r[0]) - h) / f + .5 * (e[1] + r[1]),
    p = i[0] - h,
    d = i[1] - g,
    m = e[0] - h,
    v = e[1] - g,
    y = p * p + d * d,
    M = m * m + v * v,
    x = Math.atan2(d, p),
    b = Math.atan2(v, m);
    return function(t) {
      var e = t[0] - h,
      r = t[1] - g,
      u = e * e + r * r,
      i = Math.atan2(r, e);
      return u > y && M > u && i > x && b > i ? n.invert(t) : void 0
    }
  }
  function me() {
    function n(n, t) {
      Eo += u * n - r * t,
      r = n,
      u = t
    }
    var t, e, r, u;
    ko.point = function(i, a) {
      ko.point = n,
      t = r = i,
      e = u = a
    },
    ko.lineEnd = function() {
      n(t, e)
    }
  }
  function ve() {
    function n(n, t) {
      a.push("M", n, ",", t, i)
    }
    function t(n, t) {
      a.push("M", n, ",", t),
      o.point = e
    }
    function e(n, t) {
      a.push("L", n, ",", t)
    }
    function r() {
      o.point = n
    }
    function u() {
      a.push("Z")
    }
    var i = we(4.5),
    a = [],
    o = {
      point: n,
      lineStart: function() {
        o.point = t
      },
      lineEnd: r,
      polygonStart: function() {
        o.lineEnd = u
      },
      polygonEnd: function() {
        o.lineEnd = r,
        o.point = n
      },
      pointRadius: function(n) {
        return i = we(n),
        o
      },
      result: function() {
        if (a.length) {
          var n = a.join("");
          return a = [],
          n
        }
      }
    };
    return o
  }
  function ye(n, t) {
    go || (mo += n, vo += t, ++yo)
  }
  function Me() {
    function n(n, r) {
      var u = n - t,
      i = r - e,
      a = Math.sqrt(u * u + i * i);
      mo += a * (t + n) / 2,
      vo += a * (e + r) / 2,
      yo += a,
      t = n,
      e = r
    }
    var t, e;
    if (1 !== go) {
      if (! (1 > go)) return;
      go = 1,
      mo = vo = yo = 0
    }
    Ao.point = function(r, u) {
      Ao.point = n,
      t = r,
      e = u
    }
  }
  function xe() {
    Ao.point = ye
  }
  function be() {
    function n(n, t) {
      var e = u * n - r * t;
      mo += e * (r + n),
      vo += e * (u + t),
      yo += 3 * e,
      r = n,
      u = t
    }
    var t, e, r, u;
    2 > go && (go = 2, mo = vo = yo = 0),
    Ao.point = function(i, a) {
      Ao.point = n,
      t = r = i,
      e = u = a
    },
    Ao.lineEnd = function() {
      n(t, e)
    }
  }
  function _e(n) {
    function t(t, e) {
      n.moveTo(t, e),
      n.arc(t, e, a, 0, 2 * La)
    }
    function e(t, e) {
      n.moveTo(t, e),
      o.point = r
    }
    function r(t, e) {
      n.lineTo(t, e)
    }
    function u() {
      o.point = t
    }
    function i() {
      n.closePath()
    }
    var a = 4.5,
    o = {
      point: t,
      lineStart: function() {
        o.point = e
      },
      lineEnd: u,
      polygonStart: function() {
        o.lineEnd = i
      },
      polygonEnd: function() {
        o.lineEnd = u,
        o.point = t
      },
      pointRadius: function(n) {
        return a = n,
        o
      },
      result: N
    };
    return o
  }
  function we(n) {
    return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"
  }
  function Se(n) {
    var t = Gt(function(t, e) {
      return n([t * Pa, e * Pa])
    });
    return function(n) {
      return n = t(n),
      {
        point: function(t, e) {
          n.point(t * Ha, e * Ha)
        },
        sphere: function() {
          n.sphere()
        },
        lineStart: function() {
          n.lineStart()
        },
        lineEnd: function() {
          n.lineEnd()
        },
        polygonStart: function() {
          n.polygonStart()
        },
        polygonEnd: function() {
          n.polygonEnd()
        }
      }
    }
  }
  function Ee(n, t) {
    function e(t, e) {
      var r = Math.cos(t),
      u = Math.cos(e),
      i = n(r * u);
      return [i * u * Math.sin(t), i * Math.sin(e)]
    }
    return e.invert = function(n, e) {
      var r = Math.sqrt(n * n + e * e),
      u = t(r),
      i = Math.sin(u),
      a = Math.cos(u);
      return [Math.atan2(n * i, r * a), Math.asin(r && e * i / r)]
    },
    e
  }
  function ke(n, t) {
    function e(n, t) {
      var e = Math.abs(Math.abs(t) - La / 2) < Fa ? 0 : a / Math.pow(u(t), i);
      return [e * Math.sin(i * n), a - e * Math.cos(i * n)]
    }
    var r = Math.cos(n),
    u = function(n) {
      return Math.tan(La / 4 + n / 2)
    },
    i = n === t ? Math.sin(n) : Math.log(r / Math.cos(t)) / Math.log(u(t) / u(n)),
    a = r * Math.pow(u(n), i) / i;
    return i ? (e.invert = function(n, t) {
      var e = a - t,
      r = R(i) * Math.sqrt(n * n + e * e);
      return [Math.atan2(n, e) / i, 2 * Math.atan(Math.pow(a / r, 1 / i)) - La / 2]
    },
    e) : qe
  }
  function Ae(n, t) {
    function e(n, t) {
      var e = i - t;
      return [e * Math.sin(u * n), i - e * Math.cos(u * n)]
    }
    var r = Math.cos(n),
    u = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n),
    i = r / u + n;
    return Math.abs(u) < Fa ? ne: (e.invert = function(n, t) {
      var e = i - t;
      return [Math.atan2(n, e) / u, i - R(u) * Math.sqrt(n * n + e * e)]
    },
    e)
  }
  function qe(n, t) {
    return [n, Math.log(Math.tan(La / 4 + t / 2))]
  }
  function Ne(n) {
    var t, e = Kt(n),
    r = e.scale,
    u = e.translate,
    i = e.clipExtent;
    return e.scale = function() {
      var n = r.apply(e, arguments);
      return n === e ? t ? e.clipExtent(null) : e: n
    },
    e.translate = function() {
      var n = u.apply(e, arguments);
      return n === e ? t ? e.clipExtent(null) : e: n
    },
    e.clipExtent = function(n) {
      var a = i.apply(e, arguments);
      if (a === e) {
        if (t = null == n) {
          var o = La * r(),
          c = u();
          i([[c[0] - o, c[1] - o], [c[0] + o, c[1] + o]])
        }
      } else t && (a = null);
      return a
    },
    e.clipExtent(null)
  }
  function Te(n, t) {
    var e = Math.cos(t) * Math.sin(n);
    return [Math.log((1 + e) / (1 - e)) / 2, Math.atan2(Math.tan(t), Math.cos(n))]
  }
  function Ce(n) {
    function t(t) {
      function a() {
        l.push("M", i(n(f), o))
      }
      for (var c, l = [], f = [], s = -1, h = t.length, g = lt(e), p = lt(r); ++s < h;) u.call(this, c = t[s], s) ? f.push([ + g.call(this, c, s), +p.call(this, c, s)]) : f.length && (a(), f = []);
      return f.length && a(),
      l.length ? l.join("") : null
    }
    var e = ze,
    r = De,
    u = Dt,
    i = je,
    a = i.key,
    o = .7;
    return t.x = function(n) {
      return arguments.length ? (e = n, t) : e
    },
    t.y = function(n) {
      return arguments.length ? (r = n, t) : r
    },
    t.defined = function(n) {
      return arguments.length ? (u = n, t) : u
    },
    t.interpolate = function(n) {
      return arguments.length ? (a = "function" == typeof n ? i = n: (i = Do.get(n) || je).key, t) : a
    },
    t.tension = function(n) {
      return arguments.length ? (o = n, t) : o
    },
    t
  }
  function ze(n) {
    return n[0]
  }
  function De(n) {
    return n[1]
  }
  function je(n) {
    return n.join("L")
  }
  function Le(n) {
    return je(n) + "Z"
  }
  function Fe(n) {
    for (var t = 0,
    e = n.length,
    r = n[0], u = [r[0], ",", r[1]]; ++t < e;) u.push("V", (r = n[t])[1], "H", r[0]);
    return u.join("")
  }
  function He(n) {
    for (var t = 0,
    e = n.length,
    r = n[0], u = [r[0], ",", r[1]]; ++t < e;) u.push("H", (r = n[t])[0], "V", r[1]);
    return u.join("")
  }
  function Pe(n, t) {
    return n.length < 4 ? je(n) : n[1] + Ye(n.slice(1, n.length - 1), Ue(n, t))
  }
  function Re(n, t) {
    return n.length < 3 ? je(n) : n[0] + Ye((n.push(n[0]), n), Ue([n[n.length - 2]].concat(n, [n[1]]), t))
  }
  function Oe(n, t) {
    return n.length < 3 ? je(n) : n[0] + Ye(n, Ue(n, t))
  }
  function Ye(n, t) {
    if (t.length < 1 || n.length != t.length && n.length != t.length + 2) return je(n);
    var e = n.length != t.length,
    r = "",
    u = n[0],
    i = n[1],
    a = t[0],
    o = a,
    c = 1;
    if (e && (r += "Q" + (i[0] - a[0] * 2 / 3) + "," + (i[1] - a[1] * 2 / 3) + "," + i[0] + "," + i[1], u = n[1], c = 2), t.length > 1) {
      o = t[1],
      i = n[c],
      c++,
      r += "C" + (u[0] + a[0]) + "," + (u[1] + a[1]) + "," + (i[0] - o[0]) + "," + (i[1] - o[1]) + "," + i[0] + "," + i[1];
      for (var l = 2; l < t.length; l++, c++) i = n[c],
      o = t[l],
      r += "S" + (i[0] - o[0]) + "," + (i[1] - o[1]) + "," + i[0] + "," + i[1]
    }
    if (e) {
      var f = n[c];
      r += "Q" + (i[0] + o[0] * 2 / 3) + "," + (i[1] + o[1] * 2 / 3) + "," + f[0] + "," + f[1]
    }
    return r
  }
  function Ue(n, t) {
    for (var e, r = [], u = (1 - t) / 2, i = n[0], a = n[1], o = 1, c = n.length; ++o < c;) e = i,
    i = a,
    a = n[o],
    r.push([u * (a[0] - e[0]), u * (a[1] - e[1])]);
    return r
  }
  function Ie(n) {
    if (n.length < 3) return je(n);
    var t = 1,
    e = n.length,
    r = n[0],
    u = r[0],
    i = r[1],
    a = [u, u, u, (r = n[1])[0]],
    o = [i, i, i, r[1]],
    c = [u, ",", i];
    for ($e(c, a, o); ++t < e;) r = n[t],
    a.shift(),
    a.push(r[0]),
    o.shift(),
    o.push(r[1]),
    $e(c, a, o);
    for (t = -1; ++t < 2;) a.shift(),
    a.push(r[0]),
    o.shift(),
    o.push(r[1]),
    $e(c, a, o);
    return c.join("")
  }
  function Ve(n) {
    if (n.length < 4) return je(n);
    for (var t, e = [], r = -1, u = n.length, i = [0], a = [0]; ++r < 3;) t = n[r],
    i.push(t[0]),
    a.push(t[1]);
    for (e.push(Be(Fo, i) + "," + Be(Fo, a)), --r; ++r < u;) t = n[r],
    i.shift(),
    i.push(t[0]),
    a.shift(),
    a.push(t[1]),
    $e(e, i, a);
    return e.join("")
  }
  function Xe(n) {
    for (var t, e, r = -1,
    u = n.length,
    i = u + 4,
    a = [], o = []; ++r < 4;) e = n[r % u],
    a.push(e[0]),
    o.push(e[1]);
    for (t = [Be(Fo, a), ",", Be(Fo, o)], --r; ++r < i;) e = n[r % u],
    a.shift(),
    a.push(e[0]),
    o.shift(),
    o.push(e[1]),
    $e(t, a, o);
    return t.join("")
  }
  function Ze(n, t) {
    var e = n.length - 1;
    if (e) for (var r, u, i = n[0][0], a = n[0][1], o = n[e][0] - i, c = n[e][1] - a, l = -1; ++l <= e;) r = n[l],
    u = l / e,
    r[0] = t * r[0] + (1 - t) * (i + u * o),
    r[1] = t * r[1] + (1 - t) * (a + u * c);
    return Ie(n)
  }
  function Be(n, t) {
    return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]
  }
  function $e(n, t, e) {
    n.push("C", Be(jo, t), ",", Be(jo, e), ",", Be(Lo, t), ",", Be(Lo, e), ",", Be(Fo, t), ",", Be(Fo, e))
  }
  function Je(n, t) {
    return (t[1] - n[1]) / (t[0] - n[0])
  }
  function Ge(n) {
    for (var t = 0,
    e = n.length - 1,
    r = [], u = n[0], i = n[1], a = r[0] = Je(u, i); ++t < e;) r[t] = (a + (a = Je(u = i, i = n[t + 1]))) / 2;
    return r[t] = a,
    r
  }
  function Ke(n) {
    for (var t, e, r, u, i = [], a = Ge(n), o = -1, c = n.length - 1; ++o < c;) t = Je(n[o], n[o + 1]),
    Math.abs(t) < 1e-6 ? a[o] = a[o + 1] = 0 : (e = a[o] / t, r = a[o + 1] / t, u = e * e + r * r, u > 9 && (u = 3 * t / Math.sqrt(u), a[o] = u * e, a[o + 1] = u * r));
    for (o = -1; ++o <= c;) u = (n[Math.min(c, o + 1)][0] - n[Math.max(0, o - 1)][0]) / (6 * (1 + a[o] * a[o])),
    i.push([u || 0, a[o] * u || 0]);
    return i
  }
  function We(n) {
    return n.length < 3 ? je(n) : n[0] + Ye(n, Ke(n))
  }
  function Qe(n, t, e, r) {
    var u, i, a, o, c, l, f;
    return u = r[n],
    i = u[0],
    a = u[1],
    u = r[t],
    o = u[0],
    c = u[1],
    u = r[e],
    l = u[0],
    f = u[1],
    (f - a) * (o - i) - (c - a) * (l - i) > 0
  }
  function nr(n, t, e) {
    return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0])
  }
  function tr(n, t, e, r) {
    var u = n[0],
    i = e[0],
    a = t[0] - u,
    o = r[0] - i,
    c = n[1],
    l = e[1],
    f = t[1] - c,
    s = r[1] - l,
    h = (o * (c - l) - s * (u - i)) / (s * a - o * f);
    return [u + h * a, c + h * f]
  }
  function er(n, t) {
    var e = {
      list: n.map(function(n, t) {
        return {
          index: t,
          x: n[0],
          y: n[1]
        }
      }).sort(function(n, t) {
        return n.y < t.y ? -1 : n.y > t.y ? 1 : n.x < t.x ? -1 : n.x > t.x ? 1 : 0
      }),
      bottomSite: null
    },
    r = {
      list: [],
      leftEnd: null,
      rightEnd: null,
      init: function() {
        r.leftEnd = r.createHalfEdge(null, "l"),
        r.rightEnd = r.createHalfEdge(null, "l"),
        r.leftEnd.r = r.rightEnd,
        r.rightEnd.l = r.leftEnd,
        r.list.unshift(r.leftEnd, r.rightEnd)
      },
      createHalfEdge: function(n, t) {
        return {
          edge: n,
          side: t,
          vertex: null,
          l: null,
          r: null
        }
      },
      insert: function(n, t) {
        t.l = n,
        t.r = n.r,
        n.r.l = t,
        n.r = t
      },
      leftBound: function(n) {
        var t = r.leftEnd;
        do t = t.r;
        while (t != r.rightEnd && u.rightOf(t, n));
        return t = t.l
      },
      del: function(n) {
        n.l.r = n.r,
        n.r.l = n.l,
        n.edge = null
      },
      right: function(n) {
        return n.r
      },
      left: function(n) {
        return n.l
      },
      leftRegion: function(n) {
        return n.edge == null ? e.bottomSite: n.edge.region[n.side]
      },
      rightRegion: function(n) {
        return n.edge == null ? e.bottomSite: n.edge.region[Ho[n.side]]
      }
    },
    u = {
      bisect: function(n, t) {
        var e = {
          region: {
            l: n,
            r: t
          },
          ep: {
            l: null,
            r: null
          }
        },
        r = t.x - n.x,
        u = t.y - n.y,
        i = r > 0 ? r: -r,
        a = u > 0 ? u: -u;
        return e.c = n.x * r + n.y * u + .5 * (r * r + u * u),
        i > a ? (e.a = 1, e.b = u / r, e.c /= r) : (e.b = 1, e.a = r / u, e.c /= u),
        e
      },
      intersect: function(n, t) {
        var e = n.edge,
        r = t.edge;
        if (!e || !r || e.region.r == r.region.r) return null;
        var u = e.a * r.b - e.b * r.a;
        if (Math.abs(u) < 1e-10) return null;
        var i, a, o = (e.c * r.b - r.c * e.b) / u,
        c = (r.c * e.a - e.c * r.a) / u,
        l = e.region.r,
        f = r.region.r;
        l.y < f.y || l.y == f.y && l.x < f.x ? (i = n, a = e) : (i = t, a = r);
        var s = o >= a.region.r.x;
        return s && i.side === "l" || !s && i.side === "r" ? null: {
          x: o,
          y: c
        }
      },
      rightOf: function(n, t) {
        var e = n.edge,
        r = e.region.r,
        u = t.x > r.x;
        if (u && n.side === "l") return 1;
        if (!u && n.side === "r") return 0;
        if (e.a === 1) {
          var i = t.y - r.y,
          a = t.x - r.x,
          o = 0,
          c = 0;
          if (!u && e.b < 0 || u && e.b >= 0 ? c = o = i >= e.b * a: (c = t.x + t.y * e.b > e.c, e.b < 0 && (c = !c), c || (o = 1)), !o) {
            var l = r.x - e.region.l.x;
            c = e.b * (a * a - i * i) < l * i * (1 + 2 * a / l + e.b * e.b),
            e.b < 0 && (c = !c)
          }
        } else {
          var f = e.c - e.a * t.x,
          s = t.y - f,
          h = t.x - r.x,
          g = f - r.y;
          c = s * s > h * h + g * g
        }
        return n.side === "l" ? c: !c
      },
      endPoint: function(n, e, r) {
        n.ep[e] = r,
        n.ep[Ho[e]] && t(n)
      },
      distance: function(n, t) {
        var e = n.x - t.x,
        r = n.y - t.y;
        return Math.sqrt(e * e + r * r)
      }
    },
    i = {
      list: [],
      insert: function(n, t, e) {
        n.vertex = t,
        n.ystar = t.y + e;
        for (var r = 0,
        u = i.list,
        a = u.length; a > r; r++) {
          var o = u[r];
          if (! (n.ystar > o.ystar || n.ystar == o.ystar && t.x > o.vertex.x)) break
        }
        u.splice(r, 0, n)
      },
      del: function(n) {
        for (var t = 0,
        e = i.list,
        r = e.length; r > t && e[t] != n; ++t);
        e.splice(t, 1)
      },
      empty: function() {
        return i.list.length === 0
      },
      nextEvent: function(n) {
        for (var t = 0,
        e = i.list,
        r = e.length; r > t; ++t) if (e[t] == n) return e[t + 1];
        return null
      },
      min: function() {
        var n = i.list[0];
        return {
          x: n.vertex.x,
          y: n.ystar
        }
      },
      extractMin: function() {
        return i.list.shift()
      }
    };
    r.init(),
    e.bottomSite = e.list.shift();
    for (var a, o, c, l, f, s, h, g, p, d, m, v, y, M = e.list.shift();;) if (i.empty() || (a = i.min()), M && (i.empty() || M.y < a.y || M.y == a.y && M.x < a.x)) o = r.leftBound(M),
    c = r.right(o),
    h = r.rightRegion(o),
    v = u.bisect(h, M),
    s = r.createHalfEdge(v, "l"),
    r.insert(o, s),
    d = u.intersect(o, s),
    d && (i.del(o), i.insert(o, d, u.distance(d, M))),
    o = s,
    s = r.createHalfEdge(v, "r"),
    r.insert(o, s),
    d = u.intersect(s, c),
    d && i.insert(s, d, u.distance(d, M)),
    M = e.list.shift();
    else {
      if (i.empty()) break;
      o = i.extractMin(),
      l = r.left(o),
      c = r.right(o),
      f = r.right(c),
      h = r.leftRegion(o),
      g = r.rightRegion(c),
      m = o.vertex,
      u.endPoint(o.edge, o.side, m),
      u.endPoint(c.edge, c.side, m),
      r.del(o),
      i.del(c),
      r.del(c),
      y = "l",
      h.y > g.y && (p = h, h = g, g = p, y = "r"),
      v = u.bisect(h, g),
      s = r.createHalfEdge(v, y),
      r.insert(l, s),
      u.endPoint(v, Ho[y], m),
      d = u.intersect(l, s),
      d && (i.del(l), i.insert(l, d, u.distance(d, h))),
      d = u.intersect(s, f),
      d && i.insert(s, d, u.distance(d, h))
    }
    for (o = r.right(r.leftEnd); o != r.rightEnd; o = r.right(o)) t(o.edge)
  }
  function rr(n) {
    return n.x
  }
  function ur(n) {
    return n.y
  }
  function ir() {
    return {
      leaf: !0,
      nodes: [],
      point: null,
      x: null,
      y: null
    }
  }
  function ar(n, t, e, r, u, i) {
    if (!n(t, e, r, u, i)) {
      var a = .5 * (e + u),
      o = .5 * (r + i),
      c = t.nodes;
      c[0] && ar(n, c[0], e, r, a, o),
      c[1] && ar(n, c[1], a, r, u, o),
      c[2] && ar(n, c[2], e, o, a, i),
      c[3] && ar(n, c[3], a, o, u, i)
    }
  }
  function or(n, t) {
    n = oa.rgb(n),
    t = oa.rgb(t);
    var e = n.r,
    r = n.g,
    u = n.b,
    i = t.r - e,
    a = t.g - r,
    o = t.b - u;
    return function(n) {
      return "#" + rt(Math.round(e + i * n)) + rt(Math.round(r + a * n)) + rt(Math.round(u + o * n))
    }
  }
  function cr(n) {
    var t = [n.a, n.b],
    e = [n.c, n.d],
    r = fr(t),
    u = lr(t, e),
    i = fr(sr(e, t, -u)) || 0;
    t[0] * e[1] < e[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, u *= -1),
    this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2( - e[0], e[1])) * Pa,
    this.translate = [n.e, n.f],
    this.scale = [r, i],
    this.skew = i ? Math.atan2(u, i) * Pa: 0
  }
  function lr(n, t) {
    return n[0] * t[0] + n[1] * t[1]
  }
  function fr(n) {
    var t = Math.sqrt(lr(n, n));
    return t && (n[0] /= t, n[1] /= t),
    t
  }
  function sr(n, t, e) {
    return n[0] += e * t[0],
    n[1] += e * t[1],
    n
  }
  function hr(n, t) {
    return t -= n,
    function(e) {
      return n + t * e
    }
  }
  function gr(n, t) {
    var e, r = [],
    u = [],
    i = oa.transform(n),
    a = oa.transform(t),
    o = i.translate,
    c = a.translate,
    l = i.rotate,
    f = a.rotate,
    s = i.skew,
    h = a.skew,
    g = i.scale,
    p = a.scale;
    return o[0] != c[0] || o[1] != c[1] ? (r.push("translate(", null, ",", null, ")"), u.push({
      i: 1,
      x: hr(o[0], c[0])
    },
    {
      i: 3,
      x: hr(o[1], c[1])
    })) : c[0] || c[1] ? r.push("translate(" + c + ")") : r.push(""),
    l != f ? (l - f > 180 ? f += 360 : f - l > 180 && (l += 360), u.push({
      i: r.push(r.pop() + "rotate(", null, ")") - 2,
      x: hr(l, f)
    })) : f && r.push(r.pop() + "rotate(" + f + ")"),
    s != h ? u.push({
      i: r.push(r.pop() + "skewX(", null, ")") - 2,
      x: hr(s, h)
    }) : h && r.push(r.pop() + "skewX(" + h + ")"),
    g[0] != p[0] || g[1] != p[1] ? (e = r.push(r.pop() + "scale(", null, ",", null, ")"), u.push({
      i: e - 4,
      x: hr(g[0], p[0])
    },
    {
      i: e - 2,
      x: hr(g[1], p[1])
    })) : (p[0] != 1 || p[1] != 1) && r.push(r.pop() + "scale(" + p + ")"),
    e = u.length,
    function(n) {
      for (var t, i = -1; ++i < e;) r[(t = u[i]).i] = t.x(n);
      return r.join("")
    }
  }
  function pr(n, t) {
    var e, r = {},
    u = {};
    for (e in n) e in t ? r[e] = vr(e)(n[e], t[e]) : u[e] = n[e];
    for (e in t) e in n || (u[e] = t[e]);
    return function(n) {
      for (e in r) u[e] = r[e](n);
      return u
    }
  }
  function dr(n, t) {
    var e, r, u, i, a, o = 0,
    c = 0,
    l = [],
    f = [];
    for (Ro.lastIndex = 0, r = 0; e = Ro.exec(t); ++r) e.index && l.push(t.substring(o, c = e.index)),
    f.push({
      i: l.length,
      x: e[0]
    }),
    l.push(null),
    o = Ro.lastIndex;
    for (o < t.length && l.push(t.substring(o)), r = 0, i = f.length; (e = Ro.exec(n)) && i > r; ++r) if (a = f[r], a.x == e[0]) {
      if (a.i) if (l[a.i + 1] == null) for (l[a.i - 1] += a.x, l.splice(a.i, 1), u = r + 1; i > u; ++u) f[u].i--;
      else for (l[a.i - 1] += a.x + l[a.i + 1], l.splice(a.i, 2), u = r + 1; i > u; ++u) f[u].i -= 2;
      else if (l[a.i + 1] == null) l[a.i] = a.x;
      else for (l[a.i] = a.x + l[a.i + 1], l.splice(a.i + 1, 1), u = r + 1; i > u; ++u) f[u].i--;
      f.splice(r, 1),
      i--,
      r--
    } else a.x = hr(parseFloat(e[0]), parseFloat(a.x));
    for (; i > r;) a = f.pop(),
    l[a.i + 1] == null ? l[a.i] = a.x: (l[a.i] = a.x + l[a.i + 1], l.splice(a.i + 1, 1)),
    i--;
    return l.length === 1 ? l[0] == null ? f[0].x: function() {
      return t
    }: function(n) {
      for (r = 0; i > r; ++r) l[(a = f[r]).i] = a.x(n);
      return l.join("")
    }
  }
  function mr(n, t) {
    for (var e, r = oa.interpolators.length; --r >= 0 && !(e = oa.interpolators[r](n, t)););
    return e
  }
  function vr(n) {
    return "transform" == n ? gr: mr
  }
  function yr(n, t) {
    var e, r = [],
    u = [],
    i = n.length,
    a = t.length,
    o = Math.min(n.length, t.length);
    for (e = 0; o > e; ++e) r.push(mr(n[e], t[e]));
    for (; i > e; ++e) u[e] = n[e];
    for (; a > e; ++e) u[e] = t[e];
    return function(n) {
      for (e = 0; o > e; ++e) u[e] = r[e](n);
      return u
    }
  }
  function Mr(n) {
    return function(t) {
      return 0 >= t ? 0 : t >= 1 ? 1 : n(t)
    }
  }
  function xr(n) {
    return function(t) {
      return 1 - n(1 - t)
    }
  }
  function br(n) {
    return function(t) {
      return.5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t))
    }
  }
  function _r(n) {
    return n * n
  }
  function wr(n) {
    return n * n * n
  }
  function Sr(n) {
    if (0 >= n) return 0;
    if (n >= 1) return 1;
    var t = n * n,
    e = t * n;
    return 4 * (.5 > n ? e: 3 * (n - t) + e - .75)
  }
  function Er(n) {
    return function(t) {
      return Math.pow(t, n)
    }
  }
  function kr(n) {
    return 1 - Math.cos(n * La / 2)
  }
  function Ar(n) {
    return Math.pow(2, 10 * (n - 1))
  }
  function qr(n) {
    return 1 - Math.sqrt(1 - n * n)
  }
  function Nr(n, t) {
    var e;
    return arguments.length < 2 && (t = .45),
    arguments.length ? e = t / (2 * La) * Math.asin(1 / n) : (n = 1, e = t / 4),
    function(r) {
      return 1 + n * Math.pow(2, 10 * -r) * Math.sin(2 * (r - e) * La / t)
    }
  }
  function Tr(n) {
    return n || (n = 1.70158),
    function(t) {
      return t * t * ((n + 1) * t - n)
    }
  }
  function Cr(n) {
    return 1 / 2.75 > n ? 7.5625 * n * n: 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
  }
  function zr(n, t) {
    n = oa.hcl(n),
    t = oa.hcl(t);
    var e = n.h,
    r = n.c,
    u = n.l,
    i = t.h - e,
    a = t.c - r,
    o = t.l - u;
    return i > 180 ? i -= 360 : -180 > i && (i += 360),
    function(n) {
      return B(e + i * n, r + a * n, u + o * n) + ""
    }
  }
  function Dr(n, t) {
    n = oa.hsl(n),
    t = oa.hsl(t);
    var e = n.h,
    r = n.s,
    u = n.l,
    i = t.h - e,
    a = t.s - r,
    o = t.l - u;
    return i > 180 ? i -= 360 : -180 > i && (i += 360),
    function(n) {
      return P(e + i * n, r + a * n, u + o * n) + ""
    }
  }
  function jr(n, t) {
    n = oa.lab(n),
    t = oa.lab(t);
    var e = n.l,
    r = n.a,
    u = n.b,
    i = t.l - e,
    a = t.a - r,
    o = t.b - u;
    return function(n) {
      return G(e + i * n, r + a * n, u + o * n) + ""
    }
  }
  function Lr(n, t) {
    return t -= n,
    function(e) {
      return Math.round(n + t * e)
    }
  }
  function Fr(n, t) {
    return t = t - (n = +n) ? 1 / (t - n) : 0,
    function(e) {
      return (e - n) * t
    }
  }
  function Hr(n, t) {
    return t = t - (n = +n) ? 1 / (t - n) : 0,
    function(e) {
      return Math.max(0, Math.min(1, (e - n) * t))
    }
  }
  function Pr(n) {
    for (var t = n.source,
    e = n.target,
    r = Or(t, e), u = [t]; t !== r;) t = t.parent,
    u.push(t);
    for (var i = u.length; e !== r;) u.splice(i, 0, e),
    e = e.parent;
    return u
  }
  function Rr(n) {
    for (var t = [], e = n.parent; null != e;) t.push(n),
    n = e,
    e = e.parent;
    return t.push(n),
    t
  }
  function Or(n, t) {
    if (n === t) return n;
    for (var e = Rr(n), r = Rr(t), u = e.pop(), i = r.pop(), a = null; u === i;) a = u,
    u = e.pop(),
    i = r.pop();
    return a
  }
  function Yr(n) {
    n.fixed |= 2
  }
  function Ur(n) {
    n.fixed &= -7
  }
  function Ir(n) {
    n.fixed |= 4,
    n.px = n.x,
    n.py = n.y
  }
  function Vr(n) {
    n.fixed &= -5
  }
  function Xr(n, t, e) {
    var r = 0,
    u = 0;
    if (n.charge = 0, !n.leaf) for (var i, a = n.nodes,
    o = a.length,
    c = -1; ++c < o;) i = a[c],
    null != i && (Xr(i, t, e), n.charge += i.charge, r += i.charge * i.cx, u += i.charge * i.cy);
    if (n.point) {
      n.leaf || (n.point.x += Math.random() - .5, n.point.y += Math.random() - .5);
      var l = t * e[n.point.index];
      n.charge += n.pointCharge = l,
      r += l * n.point.x,
      u += l * n.point.y
    }
    n.cx = r / n.charge,
    n.cy = u / n.charge
  }
  function Zr(n, t) {
    return oa.rebind(n, t, "sort", "children", "value"),
    n.nodes = n,
    n.links = Gr,
    n
  }
  function Br(n) {
    return n.children
  }
  function $r(n) {
    return n.value
  }
  function Jr(n, t) {
    return t.value - n.value
  }
  function Gr(n) {
    return oa.merge(n.map(function(n) {
      return (n.children || []).map(function(t) {
        return {
          source: n,
          target: t
        }
      })
    }))
  }
  function Kr(n) {
    return n.x
  }
  function Wr(n) {
    return n.y
  }
  function Qr(n, t, e) {
    n.y0 = t,
    n.y = e
  }
  function nu(n) {
    return oa.range(n.length)
  }
  function tu(n) {
    for (var t = -1,
    e = n[0].length, r = []; ++t < e;) r[t] = 0;
    return r
  }
  function eu(n) {
    for (var t, e = 1,
    r = 0,
    u = n[0][1], i = n.length; i > e; ++e)(t = n[e][1]) > u && (r = e, u = t);
    return r
  }
  function ru(n) {
    return n.reduce(uu, 0)
  }
  function uu(n, t) {
    return n + t[1]
  }
  function iu(n, t) {
    return au(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
  }
  function au(n, t) {
    for (var e = -1,
    r = +n[0], u = (n[1] - r) / t, i = []; ++e <= t;) i[e] = u * e + r;
    return i
  }
  function ou(n) {
    return [oa.min(n), oa.max(n)]
  }
  function cu(n, t) {
    return n.parent == t.parent ? 1 : 2
  }
  function lu(n) {
    var t = n.children;
    return t && t.length ? t[0] : n._tree.thread
  }
  function fu(n) {
    var t, e = n.children;
    return e && (t = e.length) ? e[t - 1] : n._tree.thread
  }
  function su(n, t) {
    var e = n.children;
    if (e && (u = e.length)) for (var r, u, i = -1; ++i < u;) t(r = su(e[i], t), n) > 0 && (n = r);
    return n
  }
  function hu(n, t) {
    return n.x - t.x
  }
  function gu(n, t) {
    return t.x - n.x
  }
  function pu(n, t) {
    return n.depth - t.depth
  }
  function du(n, t) {
    function e(n, r) {
      var u = n.children;
      if (u && (a = u.length)) for (var i, a, o = null,
      c = -1; ++c < a;) i = u[c],
      e(i, o),
      o = i;
      t(n, r)
    }
    e(n, null)
  }
  function mu(n) {
    for (var t, e = 0,
    r = 0,
    u = n.children,
    i = u.length; --i >= 0;) t = u[i]._tree,
    t.prelim += e,
    t.mod += e,
    e += t.shift + (r += t.change)
  }
  function vu(n, t, e) {
    n = n._tree,
    t = t._tree;
    var r = e / (t.number - n.number);
    n.change += r,
    t.change -= r,
    t.shift += e,
    t.prelim += e,
    t.mod += e
  }
  function yu(n, t, e) {
    return n._tree.ancestor.parent == t.parent ? n._tree.ancestor: e
  }
  function Mu(n, t) {
    return n.value - t.value
  }
  function xu(n, t) {
    var e = n._pack_next;
    n._pack_next = t,
    t._pack_prev = n,
    t._pack_next = e,
    e._pack_prev = t
  }
  function bu(n, t) {
    n._pack_next = t,
    t._pack_prev = n
  }
  function _u(n, t) {
    var e = t.x - n.x,
    r = t.y - n.y,
    u = n.r + t.r;
    return u * u - e * e - r * r > .001
  }
  function wu(n) {
    function t(n) {
      f = Math.min(n.x - n.r, f),
      s = Math.max(n.x + n.r, s),
      h = Math.min(n.y - n.r, h),
      g = Math.max(n.y + n.r, g)
    }
    if ((e = n.children) && (l = e.length)) {
      var e, r, u, i, a, o, c, l, f = 1 / 0,
      s = -1 / 0,
      h = 1 / 0,
      g = -1 / 0;
      if (e.forEach(Su), r = e[0], r.x = -r.r, r.y = 0, t(r), l > 1 && (u = e[1], u.x = u.r, u.y = 0, t(u), l > 2)) for (i = e[2], Au(r, u, i), t(i), xu(r, i), r._pack_prev = i, xu(i, u), u = r._pack_next, a = 3; l > a; a++) {
        Au(r, u, i = e[a]);
        var p = 0,
        d = 1,
        m = 1;
        for (o = u._pack_next; o !== u; o = o._pack_next, d++) if (_u(o, i)) {
          p = 1;
          break
        }
        if (1 == p) for (c = r._pack_prev; c !== o._pack_prev && !_u(c, i); c = c._pack_prev, m++);
        p ? (m > d || d == m && u.r < r.r ? bu(r, u = o) : bu(r = c, u), a--) : (xu(r, i), u = i, t(i))
      }
      var v = (f + s) / 2,
      y = (h + g) / 2,
      M = 0;
      for (a = 0; l > a; a++) i = e[a],
      i.x -= v,
      i.y -= y,
      M = Math.max(M, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
      n.r = M,
      e.forEach(Eu)
    }
  }
  function Su(n) {
    n._pack_next = n._pack_prev = n
  }
  function Eu(n) {
    delete n._pack_next,
    delete n._pack_prev
  }
  function ku(n, t, e, r) {
    var u = n.children;
    if (n.x = t += r * n.x, n.y = e += r * n.y, n.r *= r, u) for (var i = -1,
    a = u.length; ++i < a;) ku(u[i], t, e, r)
  }
  function Au(n, t, e) {
    var r = n.r + e.r,
    u = t.x - n.x,
    i = t.y - n.y;
    if (r && (u || i)) {
      var a = t.r + e.r,
      o = u * u + i * i;
      a *= a,
      r *= r;
      var c = .5 + (r - a) / (2 * o),
      l = Math.sqrt(Math.max(0, 2 * a * (r + o) - (r -= o) * r - a * a)) / (2 * o);
      e.x = n.x + c * u + l * i,
      e.y = n.y + c * i - l * u
    } else e.x = n.x + r,
    e.y = n.y
  }
  function qu(n) {
    return 1 + oa.max(n,
    function(n) {
      return n.y
    })
  }
  function Nu(n) {
    return n.reduce(function(n, t) {
      return n + t.x
    },
    0) / n.length
  }
  function Tu(n) {
    var t = n.children;
    return t && t.length ? Tu(t[0]) : n
  }
  function Cu(n) {
    var t, e = n.children;
    return e && (t = e.length) ? Cu(e[t - 1]) : n
  }
  function zu(n) {
    return {
      x: n.x,
      y: n.y,
      dx: n.dx,
      dy: n.dy
    }
  }
  function Du(n, t) {
    var e = n.x + t[3],
    r = n.y + t[0],
    u = n.dx - t[1] - t[3],
    i = n.dy - t[0] - t[2];
    return 0 > u && (e += u / 2, u = 0),
    0 > i && (r += i / 2, i = 0),
    {
      x: e,
      y: r,
      dx: u,
      dy: i
    }
  }
  function ju(n) {
    var t = n[0],
    e = n[n.length - 1];
    return e > t ? [t, e] : [e, t]
  }
  function Lu(n) {
    return n.rangeExtent ? n.rangeExtent() : ju(n.range())
  }
  function Fu(n, t, e, r) {
    var u = e(n[0], n[1]),
    i = r(t[0], t[1]);
    return function(n) {
      return i(u(n))
    }
  }
  function Hu(n, t) {
    var e, r = 0,
    u = n.length - 1,
    i = n[r],
    a = n[u];
    return i > a && (e = r, r = u, u = e, e = i, i = a, a = e),
    (t = t(a - i)) && (n[r] = t.floor(i), n[u] = t.ceil(a)),
    n
  }
  function Pu(n, t, e, r) {
    var u = [],
    i = [],
    a = 0,
    o = Math.min(n.length, t.length) - 1;
    for (n[o] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++a <= o;) u.push(e(n[a - 1], n[a])),
    i.push(r(t[a - 1], t[a]));
    return function(t) {
      var e = oa.bisect(n, t, 1, o) - 1;
      return i[e](u[e](t))
    }
  }
  function Ru(n, t, e, r) {
    function u() {
      var u = Math.min(n.length, t.length) > 2 ? Pu: Fu,
      c = r ? Hr: Fr;
      return a = u(n, t, c, e),
      o = u(t, n, c, mr),
      i
    }
    function i(n) {
      return a(n)
    }
    var a, o;
    return i.invert = function(n) {
      return o(n)
    },
    i.domain = function(t) {
      return arguments.length ? (n = t.map(Number), u()) : n
    },
    i.range = function(n) {
      return arguments.length ? (t = n, u()) : t
    },
    i.rangeRound = function(n) {
      return i.range(n).interpolate(Lr)
    },
    i.clamp = function(n) {
      return arguments.length ? (r = n, u()) : r
    },
    i.interpolate = function(n) {
      return arguments.length ? (e = n, u()) : e
    },
    i.ticks = function(t) {
      return Iu(n, t)
    },
    i.tickFormat = function(t, e) {
      return Vu(n, t, e)
    },
    i.nice = function() {
      return Hu(n, Yu),
      u()
    },
    i.copy = function() {
      return Ru(n, t, e, r)
    },
    u()
  }
  function Ou(n, t) {
    return oa.rebind(n, t, "range", "rangeRound", "interpolate", "clamp")
  }
  function Yu(n) {
    return n = Math.pow(10, Math.round(Math.log(n) / Math.LN10) - 1),
    n && {
      floor: function(t) {
        return Math.floor(t / n) * n
      },
      ceil: function(t) {
        return Math.ceil(t / n) * n
      }
    }
  }
  function Uu(n, t) {
    var e = ju(n),
    r = e[1] - e[0],
    u = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)),
    i = t / r * u;
    return.15 >= i ? u *= 10 : .35 >= i ? u *= 5 : .75 >= i && (u *= 2),
    e[0] = Math.ceil(e[0] / u) * u,
    e[1] = Math.floor(e[1] / u) * u + .5 * u,
    e[2] = u,
    e
  }
  function Iu(n, t) {
    return oa.range.apply(oa, Uu(n, t))
  }
  function Vu(n, t, e) {
    var r = -Math.floor(Math.log(Uu(n, t)[2]) / Math.LN10 + .01);
    return oa.format(e ? e.replace(ro,
    function(n, t, e, u, i, a, o, c, l, f) {
      return [t, e, u, i, a, o, c, l || "." + (r - 2 * ("%" === f)), f].join("")
    }) : ",." + r + "f")
  }
  function Xu(n, t, e, r) {
    function u(t) {
      return n(e(t))
    }
    return u.invert = function(t) {
      return r(n.invert(t))
    },
    u.domain = function(t) {
      return arguments.length ? (t[0] < 0 ? (e = $u, r = Ju) : (e = Zu, r = Bu), n.domain(t.map(e)), u) : n.domain().map(r)
    },
    u.base = function(n) {
      return arguments.length ? (t = +n, u) : t
    },
    u.nice = function() {
      return n.domain(Hu(n.domain(), Gu(t))),
      u
    },
    u.ticks = function() {
      var u = ju(n.domain()),
      i = [];
      if (u.every(isFinite)) {
        var a = Math.log(t),
        o = Math.floor(u[0] / a),
        c = Math.ceil(u[1] / a),
        l = r(u[0]),
        f = r(u[1]),
        s = t % 1 ? 2 : t;
        if (e === $u) for (i.push( - Math.pow(t, -o)); o++<c;) for (var h = s - 1; h > 0; h--) i.push( - Math.pow(t, -o) * h);
        else {
          for (; c > o; o++) for (var h = 1; s > h; h++) i.push(Math.pow(t, o) * h);
          i.push(Math.pow(t, o))
        }
        for (o = 0; i[o] < l; o++);
        for (c = i.length; i[c - 1] > f; c--);
        i = i.slice(o, c)
      }
      return i
    },
    u.tickFormat = function(n, i) {
      if (arguments.length < 2 && (i = $o), !arguments.length) return i;
      var a, o = Math.log(t),
      c = Math.max(.1, n / u.ticks().length),
      l = e === $u ? (a = -1e-12, Math.floor) : (a = 1e-12, Math.ceil);
      return function(n) {
        return n / r(o * l(e(n) / o + a)) <= c ? i(n) : ""
      }
    },
    u.copy = function() {
      return Xu(n.copy(), t, e, r)
    },
    Ou(u, n)
  }
  function Zu(n) {
    return Math.log(0 > n ? 0 : n)
  }
  function Bu(n) {
    return Math.exp(n)
  }
  function $u(n) {
    return - Math.log(n > 0 ? 0 : -n)
  }
  function Ju(n) {
    return - Math.exp( - n)
  }
  function Gu(n) {
    n = Math.log(n);
    var t = {
      floor: function(t) {
        return Math.floor(t / n) * n
      },
      ceil: function(t) {
        return Math.ceil(t / n) * n
      }
    };
    return function() {
      return t
    }
  }
  function Ku(n, t) {
    function e(t) {
      return n(r(t))
    }
    var r = Wu(t),
    u = Wu(1 / t);
    return e.invert = function(t) {
      return u(n.invert(t))
    },
    e.domain = function(t) {
      return arguments.length ? (n.domain(t.map(r)), e) : n.domain().map(u)
    },
    e.ticks = function(n) {
      return Iu(e.domain(), n)
    },
    e.tickFormat = function(n, t) {
      return Vu(e.domain(), n, t)
    },
    e.nice = function() {
      return e.domain(Hu(e.domain(), Yu))
    },
    e.exponent = function(n) {
      if (!arguments.length) return t;
      var i = e.domain();
      return r = Wu(t = n),
      u = Wu(1 / t),
      e.domain(i)
    },
    e.copy = function() {
      return Ku(n.copy(), t)
    },
    Ou(e, n)
  }
  function Wu(n) {
    return function(t) {
      return 0 > t ? -Math.pow( - t, n) : Math.pow(t, n)
    }
  }
  function Qu(n, t) {
    function e(t) {
      return a[((i.get(t) || i.set(t, n.push(t))) - 1) % a.length]
    }
    function r(t, e) {
      return oa.range(n.length).map(function(n) {
        return t + e * n
      })
    }
    var i, a, o;
    return e.domain = function(r) {
      if (!arguments.length) return n;
      n = [],
      i = new u;
      for (var a, o = -1,
      c = r.length; ++o < c;) i.has(a = r[o]) || i.set(a, n.push(a));
      return e[t.t].apply(e, t.a)
    },
    e.range = function(n) {
      return arguments.length ? (a = n, o = 0, t = {
        t: "range",
        a: arguments
      },
      e) : a
    },
    e.rangePoints = function(u, i) {
      arguments.length < 2 && (i = 0);
      var c = u[0],
      l = u[1],
      f = (l - c) / (Math.max(1, n.length - 1) + i);
      return a = r(n.length < 2 ? (c + l) / 2 : c + f * i / 2, f),
      o = 0,
      t = {
        t: "rangePoints",
        a: arguments
      },
      e
    },
    e.rangeBands = function(u, i, c) {
      arguments.length < 2 && (i = 0),
      arguments.length < 3 && (c = i);
      var l = u[1] < u[0],
      f = u[l - 0],
      s = u[1 - l],
      h = (s - f) / (n.length - i + 2 * c);
      return a = r(f + h * c, h),
      l && a.reverse(),
      o = h * (1 - i),
      t = {
        t: "rangeBands",
        a: arguments
      },
      e
    },
    e.rangeRoundBands = function(u, i, c) {
      arguments.length < 2 && (i = 0),
      arguments.length < 3 && (c = i);
      var l = u[1] < u[0],
      f = u[l - 0],
      s = u[1 - l],
      h = Math.floor((s - f) / (n.length - i + 2 * c)),
      g = s - f - (n.length - i) * h;
      return a = r(f + Math.round(g / 2), h),
      l && a.reverse(),
      o = Math.round(h * (1 - i)),
      t = {
        t: "rangeRoundBands",
        a: arguments
      },
      e
    },
    e.rangeBand = function() {
      return o
    },
    e.rangeExtent = function() {
      return ju(t.a[0])
    },
    e.copy = function() {
      return Qu(n, t)
    },
    e.domain(n)
  }
  function ni(n, t) {
    function e() {
      var e = 0,
      i = t.length;
      for (u = []; ++e < i;) u[e - 1] = oa.quantile(n, e / i);
      return r
    }
    function r(n) {
      return isNaN(n = +n) ? 0 / 0 : t[oa.bisect(u, n)]
    }
    var u;
    return r.domain = function(t) {
      return arguments.length ? (n = t.filter(function(n) {
        return ! isNaN(n)
      }).sort(oa.ascending), e()) : n
    },
    r.range = function(n) {
      return arguments.length ? (t = n, e()) : t
    },
    r.quantiles = function() {
      return u
    },
    r.copy = function() {
      return ni(n, t)
    },
    e()
  }
  function ti(n, t, e) {
    function r(t) {
      return e[Math.max(0, Math.min(a, Math.floor(i * (t - n))))]
    }
    function u() {
      return i = e.length / (t - n),
      a = e.length - 1,
      r
    }
    var i, a;
    return r.domain = function(e) {
      return arguments.length ? (n = +e[0], t = +e[e.length - 1], u()) : [n, t]
    },
    r.range = function(n) {
      return arguments.length ? (e = n, u()) : e
    },
    r.copy = function() {
      return ti(n, t, e)
    },
    u()
  }
  function ei(n, t) {
    function e(e) {
      return t[oa.bisect(n, e)]
    }
    return e.domain = function(t) {
      return arguments.length ? (n = t, e) : n
    },
    e.range = function(n) {
      return arguments.length ? (t = n, e) : t
    },
    e.copy = function() {
      return ei(n, t)
    },
    e
  }
  function ri(n) {
    function t(n) {
      return + n
    }
    return t.invert = t,
    t.domain = t.range = function(e) {
      return arguments.length ? (n = e.map(t), t) : n
    },
    t.ticks = function(t) {
      return Iu(n, t)
    },
    t.tickFormat = function(t, e) {
      return Vu(n, t, e)
    },
    t.copy = function() {
      return ri(n)
    },
    t
  }
  function ui(n) {
    return n.innerRadius
  }
  function ii(n) {
    return n.outerRadius
  }
  function ai(n) {
    return n.startAngle
  }
  function oi(n) {
    return n.endAngle
  }
  function ci(n) {
    for (var t, e, r, u = -1,
    i = n.length; ++u < i;) t = n[u],
    e = t[0],
    r = t[1] + Qo,
    t[0] = e * Math.cos(r),
    t[1] = e * Math.sin(r);
    return n
  }
  function li(n) {
    function t(t) {
      function c() {
        d.push("M", o(n(v), s), f, l(n(m.reverse()), s), "Z")
      }
      for (var h, g, p, d = [], m = [], v = [], y = -1, M = t.length, x = lt(e), b = lt(u), _ = e === r ?
      function() {
        return g
      }: lt(r), w = u === i ?
      function() {
        return p
      }: lt(i); ++y < M;) a.call(this, h = t[y], y) ? (m.push([g = +x.call(this, h, y), p = +b.call(this, h, y)]), v.push([ + _.call(this, h, y), +w.call(this, h, y)])) : m.length && (c(), m = [], v = []);
      return m.length && c(),
      d.length ? d.join("") : null
    }
    var e = ze,
    r = ze,
    u = 0,
    i = De,
    a = Dt,
    o = je,
    c = o.key,
    l = o,
    f = "L",
    s = .7;
    return t.x = function(n) {
      return arguments.length ? (e = r = n, t) : r
    },
    t.x0 = function(n) {
      return arguments.length ? (e = n, t) : e
    },
    t.x1 = function(n) {
      return arguments.length ? (r = n, t) : r
    },
    t.y = function(n) {
      return arguments.length ? (u = i = n, t) : i
    },
    t.y0 = function(n) {
      return arguments.length ? (u = n, t) : u
    },
    t.y1 = function(n) {
      return arguments.length ? (i = n, t) : i
    },
    t.defined = function(n) {
      return arguments.length ? (a = n, t) : a
    },
    t.interpolate = function(n) {
      return arguments.length ? (c = "function" == typeof n ? o = n: (o = Do.get(n) || je).key, l = o.reverse || o, f = o.closed ? "M": "L", t) : c
    },
    t.tension = function(n) {
      return arguments.length ? (s = n, t) : s
    },
    t
  }
  function fi(n) {
    return n.radius
  }
  function si(n) {
    return [n.x, n.y]
  }
  function hi(n) {
    return function() {
      var t = n.apply(this, arguments),
      e = t[0],
      r = t[1] + Qo;
      return [e * Math.cos(r), e * Math.sin(r)]
    }
  }
  function gi() {
    return 64
  }
  function pi() {
    return "circle"
  }
  function di(n) {
    var t = Math.sqrt(n / La);
    return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
  }
  function mi(n, t) {
    return Ma(n, ic),
    n.id = t,
    n
  }
  function vi(n, t, e, r) {
    var u = n.id;
    return D(n, "function" == typeof e ?
    function(n, i, a) {
      n.__transition__[u].tween.set(t, r(e.call(n, n.__data__, i, a)))
    }: (e = r(e),
    function(n) {
      n.__transition__[u].tween.set(t, e)
    }))
  }
  function yi(n) {
    return null == n && (n = ""),
    function() {
      this.textContent = n
    }
  }
  function Mi(n, t, e, r) {
    var i = n.__transition__ || (n.__transition__ = {
      active: 0,
      count: 0
    }),
    a = i[e];
    if (!a) {
      var o = r.time;
      return a = i[e] = {
        tween: new u,
        event: oa.dispatch("start", "end"),
        time: o,
        ease: r.ease,
        delay: r.delay,
        duration: r.duration
      },
      ++i.count,
      oa.timer(function(r) {
        function u(r) {
          return i.active > e ? l() : (i.active = e, h.start.call(n, f, t), a.tween.forEach(function(e, r) { (r = r.call(n, f, t)) && d.push(r)
          }), c(r) || oa.timer(c, 0, o), 1)
        }
        function c(r) {
          if (i.active !== e) return l();
          for (var u = (r - g) / p, a = s(u), o = d.length; o > 0;) d[--o].call(n, a);
          return u >= 1 ? (l(), h.end.call(n, f, t), 1) : void 0
        }
        function l() {
          return--i.count ? delete i[e] : delete n.__transition__,
          1
        }
        var f = n.__data__,
        s = a.ease,
        h = a.event,
        g = a.delay,
        p = a.duration,
        d = [];
        return r >= g ? u(r) : oa.timer(u, g, o),
        1
      },
      0, o),
      a
    }
  }
  function xi(n, t) {
    n.attr("transform",
    function(n) {
      return "translate(" + t(n) + ",0)"
    })
  }
  function bi(n, t) {
    n.attr("transform",
    function(n) {
      return "translate(0," + t(n) + ")"
    })
  }
  function _i(n, t, e) {
    if (r = [], e && t.length > 1) {
      for (var r, u, i, a = ju(n.domain()), o = -1, c = t.length, l = (t[1] - t[0]) / ++e; ++o < c;) for (u = e; --u > 0;)(i = +t[o] - u * l) >= a[0] && r.push(i);
      for (--o, u = 0; ++u < e && (i = +t[o] + u * l) < a[1];) r.push(i)
    }
    return r
  }
  function wi() {
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
  }
  function Si(n, t, e) {
    function r(t) {
      var e = n(t),
      r = i(e, 1);
      return r - t > t - e ? e: r
    }
    function u(e) {
      return t(e = n(new hc(e - 1)), 1),
      e
    }
    function i(n, e) {
      return t(n = new hc( + n), e),
      n
    }
    function a(n, r, i) {
      var a = u(n),
      o = [];
      if (i > 1) for (; r > a;) e(a) % i || o.push(new Date( + a)),
      t(a, 1);
      else for (; r > a;) o.push(new Date( + a)),
      t(a, 1);
      return o
    }
    function o(n, t, e) {
      try {
        hc = wi;
        var r = new wi;
        return r._ = n,
        a(r, t, e)
      } finally {
        hc = Date
      }
    }
    n.floor = n,
    n.round = r,
    n.ceil = u,
    n.offset = i,
    n.range = a;
    var c = n.utc = Ei(n);
    return c.floor = c,
    c.round = Ei(r),
    c.ceil = Ei(u),
    c.offset = Ei(i),
    c.range = o,
    n
  }
  function Ei(n) {
    return function(t, e) {
      try {
        hc = wi;
        var r = new wi;
        return r._ = t,
        n(r, e)._
      } finally {
        hc = Date
      }
    }
  }
  function ki(n, t, e, r) {
    for (var u, i, a = 0,
    o = t.length,
    c = e.length; o > a;) {
      if (r >= c) return - 1;
      if (u = t.charCodeAt(a++), 37 === u) {
        if (i = Tc[t.charAt(a++)], !i || (r = i(n, e, r)) < 0) return - 1
      } else if (u != e.charCodeAt(r++)) return - 1
    }
    return r
  }
  function Ai(n) {
    return RegExp("^(?:" + n.map(oa.requote).join("|") + ")", "i")
  }
  function qi(n) {
    for (var t = new u,
    e = -1,
    r = n.length; ++e < r;) t.set(n[e].toLowerCase(), e);
    return t
  }
  function Ni(n, t, e) {
    n += "";
    var r = n.length;
    return e > r ? Array(e - r + 1).join(t) + n: n
  }
  function Ti(n, t, e) {
    wc.lastIndex = 0;
    var r = wc.exec(t.substring(e));
    return r ? e += r[0].length: -1
  }
  function Ci(n, t, e) {
    _c.lastIndex = 0;
    var r = _c.exec(t.substring(e));
    return r ? e += r[0].length: -1
  }
  function zi(n, t, e) {
    kc.lastIndex = 0;
    var r = kc.exec(t.substring(e));
    return r ? (n.m = Ac.get(r[0].toLowerCase()), e += r[0].length) : -1
  }
  function Di(n, t, e) {
    Sc.lastIndex = 0;
    var r = Sc.exec(t.substring(e));
    return r ? (n.m = Ec.get(r[0].toLowerCase()), e += r[0].length) : -1
  }
  function ji(n, t, e) {
    return ki(n, "" + Nc.c, t, e)
  }
  function Li(n, t, e) {
    return ki(n, "" + Nc.x, t, e)
  }
  function Fi(n, t, e) {
    return ki(n, "" + Nc.X, t, e)
  }
  function Hi(n, t, e) {
    Cc.lastIndex = 0;
    var r = Cc.exec(t.substring(e, e + 4));
    return r ? (n.y = +r[0], e += r[0].length) : -1
  }
  function Pi(n, t, e) {
    Cc.lastIndex = 0;
    var r = Cc.exec(t.substring(e, e + 2));
    return r ? (n.y = Ri( + r[0]), e += r[0].length) : -1
  }
  function Ri(n) {
    return n + (n > 68 ? 1900 : 2e3)
  }
  function Oi(n, t, e) {
    Cc.lastIndex = 0;
    var r = Cc.exec(t.substring(e, e + 2));
    return r ? (n.m = r[0] - 1, e += r[0].length) : -1
  }
  function Yi(n, t, e) {
    Cc.lastIndex = 0;
    var r = Cc.exec(t.substring(e, e + 2));
    return r ? (n.d = +r[0], e += r[0].length) : -1
  }
  function Ui(n, t, e) {
    Cc.lastIndex = 0;
    var r = Cc.exec(t.substring(e, e + 2));
    return r ? (n.H = +r[0], e += r[0].length) : -1
  }
  function Ii(n, t, e) {
    Cc.lastIndex = 0;
    var r = Cc.exec(t.substring(e, e + 2));
    return r ? (n.M = +r[0], e += r[0].length) : -1
  }
  function Vi(n, t, e) {
    Cc.lastIndex = 0;
    var r = Cc.exec(t.substring(e, e + 2));
    return r ? (n.S = +r[0], e += r[0].length) : -1
  }
  function Xi(n, t, e) {
    Cc.lastIndex = 0;
    var r = Cc.exec(t.substring(e, e + 3));
    return r ? (n.L = +r[0], e += r[0].length) : -1
  }
  function Zi(n, t, e) {
    var r = zc.get(t.substring(e, e += 2).toLowerCase());
    return null == r ? -1 : (n.p = r, e)
  }
  function Bi(n) {
    var t = n.getTimezoneOffset(),
    e = t > 0 ? "-": "+",
    r = ~~ (Math.abs(t) / 60),
    u = Math.abs(t) % 60;
    return e + Ni(r, "0", 2) + Ni(u, "0", 2)
  }
  function $i(n) {
    return n.toISOString()
  }
  function Ji(n, t, e) {
    function r(t) {
      return n(t)
    }
    return r.invert = function(t) {
      return Ki(n.invert(t))
    },
    r.domain = function(t) {
      return arguments.length ? (n.domain(t), r) : n.domain().map(Ki)
    },
    r.nice = function(n) {
      return r.domain(Hu(r.domain(),
      function() {
        return n
      }))
    },
    r.ticks = function(e, u) {
      var i = Gi(r.domain());
      if ("function" != typeof e) {
        var a = i[1] - i[0],
        o = a / e,
        c = oa.bisect(jc, o);
        if (c == jc.length) return t.year(i, e);
        if (!c) return n.ticks(e).map(Ki);
        Math.log(o / jc[c - 1]) < Math.log(jc[c] / o) && --c,
        e = t[c],
        u = e[1],
        e = e[0].range
      }
      return e(i[0], new Date( + i[1] + 1), u)
    },
    r.tickFormat = function() {
      return e
    },
    r.copy = function() {
      return Ji(n.copy(), t, e)
    },
    oa.rebind(r, n, "range", "rangeRound", "interpolate", "clamp")
  }
  function Gi(n) {
    var t = n[0],
    e = n[n.length - 1];
    return e > t ? [t, e] : [e, t]
  }
  function Ki(n) {
    return new Date(n)
  }
  function Wi(n) {
    return function(t) {
      for (var e = n.length - 1,
      r = n[e]; ! r[1](t);) r = n[--e];
      return r[0](t)
    }
  }
  function Qi(n) {
    var t = new Date(n, 0, 1);
    return t.setFullYear(n),
    t
  }
  function na(n) {
    var t = n.getFullYear(),
    e = Qi(t),
    r = Qi(t + 1);
    return t + (n - e) / (r - e)
  }
  function ta(n) {
    var t = new Date(Date.UTC(n, 0, 1));
    return t.setUTCFullYear(n),
    t
  }
  function ea(n) {
    var t = n.getUTCFullYear(),
    e = ta(t),
    r = ta(t + 1);
    return t + (n - e) / (r - e)
  }
  function ra(n) {
    return n.responseText
  }
  function ua(n) {
    return JSON.parse(n.responseText)
  }
  function ia(n) {
    var t = ca.createRange();
    return t.selectNode(ca.body),
    t.createContextualFragment(n.responseText)
  }
  function aa(n) {
    return n.responseXML
  }
  var oa = {
    version: "3.1.4"
  };
  Date.now || (Date.now = function() {
    return + new Date
  });
  var ca = document,
  la = window;
  try {
    ca.createElement("div").style.setProperty("opacity", 0, "")
  } catch(fa) {
    var sa = la.CSSStyleDeclaration.prototype,
    ha = sa.setProperty;
    sa.setProperty = function(n, t, e) {
      ha.call(this, n, t + "", e)
    }
  }
  oa.ascending = function(n, t) {
    return t > n ? -1 : n > t ? 1 : n >= t ? 0 : 0 / 0
  },
  oa.descending = function(n, t) {
    return n > t ? -1 : t > n ? 1 : t >= n ? 0 : 0 / 0
  },
  oa.min = function(n, t) {
    var e, r, u = -1,
    i = n.length;
    if (arguments.length === 1) {
      for (; ++u < i && ((e = n[u]) == null || e != e);) e = void 0;
      for (; ++u < i;)(r = n[u]) != null && e > r && (e = r)
    } else {
      for (; ++u < i && ((e = t.call(n, n[u], u)) == null || e != e);) e = void 0;
      for (; ++u < i;)(r = t.call(n, n[u], u)) != null && e > r && (e = r)
    }
    return e
  },
  oa.max = function(n, t) {
    var e, r, u = -1,
    i = n.length;
    if (arguments.length === 1) {
      for (; ++u < i && ((e = n[u]) == null || e != e);) e = void 0;
      for (; ++u < i;)(r = n[u]) != null && r > e && (e = r)
    } else {
      for (; ++u < i && ((e = t.call(n, n[u], u)) == null || e != e);) e = void 0;
      for (; ++u < i;)(r = t.call(n, n[u], u)) != null && r > e && (e = r)
    }
    return e
  },
  oa.extent = function(n, t) {
    var e, r, u, i = -1,
    a = n.length;
    if (arguments.length === 1) {
      for (; ++i < a && ((e = u = n[i]) == null || e != e);) e = u = void 0;
      for (; ++i < a;)(r = n[i]) != null && (e > r && (e = r), r > u && (u = r))
    } else {
      for (; ++i < a && ((e = u = t.call(n, n[i], i)) == null || e != e);) e = void 0;
      for (; ++i < a;)(r = t.call(n, n[i], i)) != null && (e > r && (e = r), r > u && (u = r))
    }
    return [e, u]
  },
  oa.sum = function(n, t) {
    var e, r = 0,
    u = n.length,
    i = -1;
    if (arguments.length === 1) for (; ++i < u;) isNaN(e = +n[i]) || (r += e);
    else for (; ++i < u;) isNaN(e = +t.call(n, n[i], i)) || (r += e);
    return r
  },
  oa.mean = function(t, e) {
    var r, u = t.length,
    i = 0,
    a = -1,
    o = 0;
    if (arguments.length === 1) for (; ++a < u;) n(r = t[a]) && (i += (r - i) / ++o);
    else for (; ++a < u;) n(r = e.call(t, t[a], a)) && (i += (r - i) / ++o);
    return o ? i: void 0
  },
  oa.quantile = function(n, t) {
    var e = (n.length - 1) * t + 1,
    r = Math.floor(e),
    u = +n[r - 1],
    i = e - r;
    return i ? u + i * (n[r] - u) : u
  },
  oa.median = function(t, e) {
    return arguments.length > 1 && (t = t.map(e)),
    t = t.filter(n),
    t.length ? oa.quantile(t.sort(oa.ascending), .5) : void 0
  },
  oa.bisector = function(n) {
    return {
      left: function(t, e, r, u) {
        for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
          var i = r + u >>> 1;
          n.call(t, t[i], i) < e ? r = i + 1 : u = i
        }
        return r
      },
      right: function(t, e, r, u) {
        for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
          var i = r + u >>> 1;
          e < n.call(t, t[i], i) ? u = i: r = i + 1
        }
        return r
      }
    }
  };
  var ga = oa.bisector(function(n) {
    return n
  });
  oa.bisectLeft = ga.left,
  oa.bisect = oa.bisectRight = ga.right,
  oa.shuffle = function(n) {
    for (var t, e, r = n.length; r;) e = Math.random() * r--|0,
    t = n[r],
    n[r] = n[e],
    n[e] = t;
    return n
  },
  oa.permute = function(n, t) {
    for (var e = [], r = -1, u = t.length; ++r < u;) e[r] = n[t[r]];
    return e
  },
  oa.zip = function() {
    if (! (u = arguments.length)) return [];
    for (var n = -1,
    e = oa.min(arguments, t), r = Array(e); ++n < e;) for (var u, i = -1,
    a = r[n] = Array(u); ++i < u;) a[i] = arguments[i][n];
    return r
  },
  oa.transpose = function(n) {
    return oa.zip.apply(oa, n)
  },
  oa.keys = function(n) {
    var t = [];
    for (var e in n) t.push(e);
    return t
  },
  oa.values = function(n) {
    var t = [];
    for (var e in n) t.push(n[e]);
    return t
  },
  oa.entries = function(n) {
    var t = [];
    for (var e in n) t.push({
      key: e,
      value: n[e]
    });
    return t
  },
  oa.merge = function(n) {
    return Array.prototype.concat.apply([], n)
  },
  oa.range = function(n, t, r) {
    if (arguments.length < 3 && (r = 1, arguments.length < 2 && (t = n, n = 0)), 1 / 0 === (t - n) / r) throw Error("infinite range");
    var u, i = [],
    a = e(Math.abs(r)),
    o = -1;
    if (n *= a, t *= a, r *= a, 0 > r) for (; (u = n + r * ++o) > t;) i.push(u / a);
    else for (; (u = n + r * ++o) < t;) i.push(u / a);
    return i
  },
  oa.map = function(n) {
    var t = new u;
    for (var e in n) t.set(e, n[e]);
    return t
  },
  r(u, {
    has: function(n) {
      return pa + n in this
    },
    get: function(n) {
      return this[pa + n]
    },
    set: function(n, t) {
      return this[pa + n] = t
    },
    remove: function(n) {
      return n = pa + n,
      n in this && delete this[n]
    },
    keys: function() {
      var n = [];
      return this.forEach(function(t) {
        n.push(t)
      }),
      n
    },
    values: function() {
      var n = [];
      return this.forEach(function(t, e) {
        n.push(e)
      }),
      n
    },
    entries: function() {
      var n = [];
      return this.forEach(function(t, e) {
        n.push({
          key: t,
          value: e
        })
      }),
      n
    },
    forEach: function(n) {
      for (var t in this) t.charCodeAt(0) === da && n.call(this, t.substring(1), this[t])
    }
  });
  var pa = "\x00",
  da = pa.charCodeAt(0);
  oa.nest = function() {
    function n(t, o, c) {
      if (c >= a.length) return r ? r.call(i, o) : e ? o.sort(e) : o;
      for (var l, f, s, h, g = -1,
      p = o.length,
      d = a[c++], m = new u; ++g < p;)(h = m.get(l = d(f = o[g]))) ? h.push(f) : m.set(l, [f]);
      return t ? (f = t(), s = function(e, r) {
        f.set(e, n(t, r, c))
      }) : (f = {},
      s = function(e, r) {
        f[e] = n(t, r, c)
      }),
      m.forEach(s),
      f
    }
    function t(n, e) {
      if (e >= a.length) return n;
      var r = [],
      u = o[e++];
      return n.forEach(function(n, u) {
        r.push({
          key: n,
          values: t(u, e)
        })
      }),
      u ? r.sort(function(n, t) {
        return u(n.key, t.key)
      }) : r
    }
    var e, r, i = {},
    a = [],
    o = [];
    return i.map = function(t, e) {
      return n(e, t, 0)
    },
    i.entries = function(e) {
      return t(n(oa.map, e, 0), 0)
    },
    i.key = function(n) {
      return a.push(n),
      i
    },
    i.sortKeys = function(n) {
      return o[a.length - 1] = n,
      i
    },
    i.sortValues = function(n) {
      return e = n,
      i
    },
    i.rollup = function(n) {
      return r = n,
      i
    },
    i
  },
  oa.set = function(n) {
    var t = new i;
    if (n) for (var e = 0; e < n.length; e++) t.add(n[e]);
    return t
  },
  r(i, {
    has: function(n) {
      return pa + n in this
    },
    add: function(n) {
      return this[pa + n] = !0,
      n
    },
    remove: function(n) {
      return n = pa + n,
      n in this && delete this[n]
    },
    values: function() {
      var n = [];
      return this.forEach(function(t) {
        n.push(t)
      }),
      n
    },
    forEach: function(n) {
      for (var t in this) t.charCodeAt(0) === da && n.call(this, t.substring(1))
    }
  }),
  oa.behavior = {},
  oa.rebind = function(n, t) {
    for (var e, r = 1,
    u = arguments.length; ++r < u;) n[e = arguments[r]] = a(n, t, t[e]);
    return n
  },
  oa.dispatch = function() {
    for (var n = new o,
    t = -1,
    e = arguments.length; ++t < e;) n[arguments[t]] = c(n);
    return n
  },
  o.prototype.on = function(n, t) {
    var e = n.indexOf("."),
    r = "";
    if (e >= 0 && (r = n.substring(e + 1), n = n.substring(0, e)), n) return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);
    if (arguments.length === 2) {
      if (null == t) for (n in this) this.hasOwnProperty(n) && this[n].on(r, null);
      return this
    }
  },
  oa.event = null,
  oa.mouse = function(n) {
    return h(n, f())
  };
  var ma = /WebKit/.test(la.navigator.userAgent) ? -1 : 0,
  va = p;
  try {
    va(ca.documentElement.childNodes)[0].nodeType
  } catch(ya) {
    va = g
  }
  var Ma = [].__proto__ ?
  function(n, t) {
    n.__proto__ = t
  }: function(n, t) {
    for (var e in t) n[e] = t[e]
  };
  oa.touches = function(n, t) {
    return arguments.length < 2 && (t = f().touches),
    t ? va(t).map(function(t) {
      var e = h(n, t);
      return e.identifier = t.identifier,
      e
    }) : []
  },
  oa.behavior.drag = function() {
    function n() {
      this.on("mousedown.drag", t).on("touchstart.drag", t)
    }
    function t() {
      function n() {
        var n = o.parentNode;
        return null != s ? oa.touches(n).filter(function(n) {
          return n.identifier === s
        })[0] : oa.mouse(n)
      }
      function t() {
        if (!o.parentNode) return u();
        var t = n(),
        e = t[0] - h[0],
        r = t[1] - h[1];
        g |= e | r,
        h = t,
        l(),
        c({
          type: "drag",
          x: t[0] + a[0],
          y: t[1] + a[1],
          dx: e,
          dy: r
        })
      }
      function u() {
        c({
          type: "dragend"
        }),
        g && (l(), oa.event.target === f && p.on("click.drag", i, !0)),
        p.on(null != s ? "touchmove.drag-" + s: "mousemove.drag", null).on(null != s ? "touchend.drag-" + s: "mouseup.drag", null)
      }
      function i() {
        l(),
        p.on("click.drag", null)
      }
      var a, o = this,
      c = e.of(o, arguments),
      f = oa.event.target,
      s = oa.event.touches ? oa.event.changedTouches[0].identifier: null,
      h = n(),
      g = 0,
      p = oa.select(la).on(null != s ? "touchmove.drag-" + s: "mousemove.drag", t).on(null != s ? "touchend.drag-" + s: "mouseup.drag", u, !0);
      r ? (a = r.apply(o, arguments), a = [a.x - h[0], a.y - h[1]]) : a = [0, 0],
      null == s && l(),
      c({
        type: "dragstart"
      })
    }
    var e = s(n, "drag", "dragstart", "dragend"),
    r = null;
    return n.origin = function(t) {
      return arguments.length ? (r = t, n) : r
    },
    oa.rebind(n, e, "on")
  };
  var xa = function(n, t) {
    return t.querySelector(n)
  },
  ba = function(n, t) {
    return t.querySelectorAll(n)
  },
  _a = ca.documentElement,
  wa = _a.matchesSelector || _a.webkitMatchesSelector || _a.mozMatchesSelector || _a.msMatchesSelector || _a.oMatchesSelector,
  Sa = function(n, t) {
    return wa.call(n, t)
  };
  "function" == typeof Sizzle && (xa = function(n, t) {
    return Sizzle(n, t)[0] || null
  },
  ba = function(n, t) {
    return Sizzle.uniqueSort(Sizzle(n, t))
  },
  Sa = Sizzle.matchesSelector);
  var Ea = [];
  oa.selection = function() {
    return Ta
  },
  oa.selection.prototype = Ea,
  Ea.select = function(n) {
    var t, e, r, u, i = [];
    "function" != typeof n && (n = m(n));
    for (var a = -1,
    o = this.length; ++a < o;) {
      i.push(t = []),
      t.parentNode = (r = this[a]).parentNode;
      for (var c = -1,
      l = r.length; ++c < l;)(u = r[c]) ? (t.push(e = n.call(u, u.__data__, c)), e && "__data__" in u && (e.__data__ = u.__data__)) : t.push(null)
    }
    return d(i)
  },
  Ea.selectAll = function(n) {
    var t, e, r = [];
    "function" != typeof n && (n = v(n));
    for (var u = -1,
    i = this.length; ++u < i;) for (var a = this[u], o = -1, c = a.length; ++o < c;)(e = a[o]) && (r.push(t = va(n.call(e, e.__data__, o))), t.parentNode = e);
    return d(r)
  };
  var ka = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  oa.ns = {
    prefix: ka,
    qualify: function(n) {
      var t = n.indexOf(":"),
      e = n;
      return t >= 0 && (e = n.substring(0, t), n = n.substring(t + 1)),
      ka.hasOwnProperty(e) ? {
        space: ka[e],
        local: n
      }: n
    }
  },
  Ea.attr = function(n, t) {
    if (arguments.length < 2) {
      if ("string" == typeof n) {
        var e = this.node();
        return n = oa.ns.qualify(n),
        n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n)
      }
      for (t in n) this.each(y(t, n[t]));
      return this
    }
    return this.each(y(n, t))
  },
  oa.requote = function(n) {
    return n.replace(Aa, "\\$&")
  };
  var Aa = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
  Ea.classed = function(n, t) {
    if (arguments.length < 2) {
      if ("string" == typeof n) {
        var e = this.node(),
        r = (n = n.trim().split(/^|\s+/g)).length,
        u = -1;
        if (t = e.classList) {
          for (; ++u < r;) if (!t.contains(n[u])) return ! 1
        } else for (t = e.getAttribute("class"); ++u < r;) if (!x(n[u]).test(t)) return ! 1;
        return ! 0
      }
      for (t in n) this.each(_(t, n[t]));
      return this
    }
    return this.each(_(n, t))
  },
  Ea.style = function(n, t, e) {
    var r = arguments.length;
    if (3 > r) {
      if ("string" != typeof n) {
        2 > r && (t = "");
        for (e in n) this.each(S(e, n[e], t));
        return this
      }
      if (2 > r) return la.getComputedStyle(this.node(), null).getPropertyValue(n);
      e = ""
    }
    return this.each(S(n, t, e))
  },
  Ea.property = function(n, t) {
    if (arguments.length < 2) {
      if ("string" == typeof n) return this.node()[n];
      for (t in n) this.each(E(t, n[t]));
      return this
    }
    return this.each(E(n, t))
  },
  Ea.text = function(n) {
    return arguments.length ? this.each("function" == typeof n ?
    function() {
      var t = n.apply(this, arguments);
      this.textContent = null == t ? "": t
    }: null == n ?
    function() {
      this.textContent = ""
    }: function() {
      this.textContent = n
    }) : this.node().textContent
  },
  Ea.html = function(n) {
    return arguments.length ? this.each("function" == typeof n ?
    function() {
      var t = n.apply(this, arguments);
      this.innerHTML = null == t ? "": t
    }: null == n ?
    function() {
      this.innerHTML = ""
    }: function() {
      this.innerHTML = n
    }) : this.node().innerHTML
  },
  Ea.append = function(n) {
    function t() {
      return this.appendChild(ca.createElementNS(this.namespaceURI, n))
    }
    function e() {
      return this.appendChild(ca.createElementNS(n.space, n.local))
    }
    return n = oa.ns.qualify(n),
    this.select(n.local ? e: t)
  },
  Ea.insert = function(n, t) {
    function e(e, r) {
      return this.insertBefore(ca.createElementNS(this.namespaceURI, n), t.call(this, e, r))
    }
    function r(e, r) {
      return this.insertBefore(ca.createElementNS(n.space, n.local), t.call(this, e, r))
    }
    return n = oa.ns.qualify(n),
    "function" != typeof t && (t = m(t)),
    this.select(n.local ? r: e)
  },
  Ea.remove = function() {
    return this.each(function() {
      var n = this.parentNode;
      n && n.removeChild(this)
    })
  },
  Ea.data = function(n, t) {
    function e(n, e) {
      var r, i, a, o = n.length,
      s = e.length,
      h = Math.min(o, s),
      g = Array(s),
      p = Array(s),
      d = Array(o);
      if (t) {
        var m, v = new u,
        y = new u,
        M = [];
        for (r = -1; ++r < o;) m = t.call(i = n[r], i.__data__, r),
        v.has(m) ? d[r] = i: v.set(m, i),
        M.push(m);
        for (r = -1; ++r < s;) m = t.call(e, a = e[r], r),
        (i = v.get(m)) ? (g[r] = i, i.__data__ = a) : y.has(m) || (p[r] = k(a)),
        y.set(m, a),
        v.remove(m);
        for (r = -1; ++r < o;) v.has(M[r]) && (d[r] = n[r])
      } else {
        for (r = -1; ++r < h;) i = n[r],
        a = e[r],
        i ? (i.__data__ = a, g[r] = i) : p[r] = k(a);
        for (; s > r; ++r) p[r] = k(e[r]);
        for (; o > r; ++r) d[r] = n[r]
      }
      p.update = g,
      p.parentNode = g.parentNode = d.parentNode = n.parentNode,
      c.push(p),
      l.push(g),
      f.push(d)
    }
    var r, i, a = -1,
    o = this.length;
    if (!arguments.length) {
      for (n = Array(o = (r = this[0]).length); ++a < o;)(i = r[a]) && (n[a] = i.__data__);
      return n
    }
    var c = j([]),
    l = d([]),
    f = d([]);
    if ("function" == typeof n) for (; ++a < o;) e(r = this[a], n.call(r, r.parentNode.__data__, a));
    else for (; ++a < o;) e(r = this[a], n);
    return l.enter = function() {
      return c
    },
    l.exit = function() {
      return f
    },
    l
  },
  Ea.datum = function(n) {
    return arguments.length ? this.property("__data__", n) : this.property("__data__")
  },
  Ea.filter = function(n) {
    var t, e, r, u = [];
    "function" != typeof n && (n = A(n));
    for (var i = 0,
    a = this.length; a > i; i++) {
      u.push(t = []),
      t.parentNode = (e = this[i]).parentNode;
      for (var o = 0,
      c = e.length; c > o; o++)(r = e[o]) && n.call(r, r.__data__, o) && t.push(r)
    }
    return d(u)
  },
  Ea.order = function() {
    for (var n = -1,
    t = this.length; ++n < t;) for (var e, r = this[n], u = r.length - 1, i = r[u]; --u >= 0;)(e = r[u]) && (i && i !== e.nextSibling && i.parentNode.insertBefore(e, i), i = e);
    return this
  },
  Ea.sort = function(n) {
    n = q.apply(this, arguments);
    for (var t = -1,
    e = this.length; ++t < e;) this[t].sort(n);
    return this.order()
  },
  Ea.on = function(n, t, e) {
    var r = arguments.length;
    if (3 > r) {
      if ("string" != typeof n) {
        2 > r && (t = !1);
        for (e in n) this.each(T(e, n[e], t));
        return this
      }
      if (2 > r) return (r = this.node()["__on" + n]) && r._;
      e = !1
    }
    return this.each(T(n, t, e))
  };
  var qa = oa.map({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  });
  qa.forEach(function(n) {
    "on" + n in ca && qa.remove(n)
  }),
  Ea.each = function(n) {
    return D(this,
    function(t, e, r) {
      n.call(t, t.__data__, e, r)
    })
  },
  Ea.call = function(n) {
    var t = va(arguments);
    return n.apply(t[0] = this, t),
    this
  },
  Ea.empty = function() {
    return ! this.node()
  },
  Ea.node = function() {
    for (var n = 0,
    t = this.length; t > n; n++) for (var e = this[n], r = 0, u = e.length; u > r; r++) {
      var i = e[r];
      if (i) return i
    }
    return null
  };
  var Na = [];
  oa.selection.enter = j,
  oa.selection.enter.prototype = Na,
  Na.append = Ea.append,
  Na.insert = Ea.insert,
  Na.empty = Ea.empty,
  Na.node = Ea.node,
  Na.select = function(n) {
    for (var t, e, r, u, i, a = [], o = -1, c = this.length; ++o < c;) {
      r = (u = this[o]).update,
      a.push(t = []),
      t.parentNode = u.parentNode;
      for (var l = -1,
      f = u.length; ++l < f;)(i = u[l]) ? (t.push(r[l] = e = n.call(u.parentNode, i.__data__, l)), e.__data__ = i.__data__) : t.push(null)
    }
    return d(a)
  },
  Ea.transition = function() {
    var n, t, e = ec || ++ac,
    r = [],
    u = Object.create(oc);
    u.time = Date.now();
    for (var i = -1,
    a = this.length; ++i < a;) {
      r.push(n = []);
      for (var o = this[i], c = -1, l = o.length; ++c < l;)(t = o[c]) && Mi(t, c, e, u),
      n.push(t)
    }
    return mi(r, e)
  };
  var Ta = d([[ca]]);
  Ta[0].parentNode = _a,
  oa.select = function(n) {
    return "string" == typeof n ? Ta.select(n) : d([[n]])
  },
  oa.selectAll = function(n) {
    return "string" == typeof n ? Ta.selectAll(n) : d([va(n)])
  },
  oa.behavior.zoom = function() {
    function n() {
      this.on("mousedown.zoom", o).on("mousemove.zoom", f).on(Da + ".zoom", c).on("dblclick.zoom", h).on("touchstart.zoom", g).on("touchmove.zoom", p).on("touchend.zoom", g)
    }
    function t(n) {
      return [(n[0] - _[0]) / w, (n[1] - _[1]) / w]
    }
    function e(n) {
      return [n[0] * w + _[0], n[1] * w + _[1]]
    }
    function r(n) {
      w = Math.max(S[0], Math.min(S[1], n))
    }
    function u(n, t) {
      t = e(t),
      _[0] += n[0] - t[0],
      _[1] += n[1] - t[1]
    }
    function i() {
      y && y.domain(v.range().map(function(n) {
        return (n - _[0]) / w
      }).map(v.invert)),
      x && x.domain(M.range().map(function(n) {
        return (n - _[1]) / w
      }).map(M.invert))
    }
    function a(n) {
      i(),
      oa.event.preventDefault(),
      n({
        type: "zoom",
        scale: w,
        translate: _
      })
    }
    function o() {
      function n() {
        f = 1,
        u(oa.mouse(i), h),
        a(o)
      }
      function e() {
        f && l(),
        s.on("mousemove.zoom", null).on("mouseup.zoom", null),
        f && oa.event.target === c && s.on("click.zoom", r, !0)
      }
      function r() {
        l(),
        s.on("click.zoom", null)
      }
      var i = this,
      o = E.of(i, arguments),
      c = oa.event.target,
      f = 0,
      s = oa.select(la).on("mousemove.zoom", n).on("mouseup.zoom", e),
      h = t(oa.mouse(i));
      la.focus(),
      l()
    }
    function c() {
      d || (d = t(oa.mouse(this))),
      r(Math.pow(2, Ca() * .002) * w),
      u(oa.mouse(this), d),
      a(E.of(this, arguments))
    }
    function f() {
      d = null
    }
    function h() {
      var n = oa.mouse(this),
      e = t(n),
      i = Math.log(w) / Math.LN2;
      r(Math.pow(2, oa.event.shiftKey ? Math.ceil(i) - 1 : Math.floor(i) + 1)),
      u(n, e),
      a(E.of(this, arguments))
    }
    function g() {
      var n = oa.touches(this),
      e = Date.now();
      if (m = w, d = {},
      n.forEach(function(n) {
        d[n.identifier] = t(n)
      }), l(), n.length === 1) {
        if (500 > e - b) {
          var i = n[0],
          o = t(n[0]);
          r(2 * w),
          u(i, o),
          a(E.of(this, arguments))
        }
        b = e
      }
    }
    function p() {
      var n = oa.touches(this),
      t = n[0],
      e = d[t.identifier];
      if (i = n[1]) {
        var i, o = d[i.identifier];
        t = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2],
        e = [(e[0] + o[0]) / 2, (e[1] + o[1]) / 2],
        r(oa.event.scale * m)
      }
      u(t, e),
      b = null,
      a(E.of(this, arguments))
    }
    var d, m, v, y, M, x, b, _ = [0, 0],
    w = 1,
    S = za,
    E = s(n, "zoom");
    return n.translate = function(t) {
      return arguments.length ? (_ = t.map(Number), i(), n) : _
    },
    n.scale = function(t) {
      return arguments.length ? (w = +t, i(), n) : w
    },
    n.scaleExtent = function(t) {
      return arguments.length ? (S = null == t ? za: t.map(Number), n) : S
    },
    n.x = function(t) {
      return arguments.length ? (y = t, v = t.copy(), _ = [0, 0], w = 1, n) : y
    },
    n.y = function(t) {
      return arguments.length ? (x = t, M = t.copy(), _ = [0, 0], w = 1, n) : x
    },
    oa.rebind(n, E, "on")
  };
  var Ca, za = [0, 1 / 0],
  Da = "onwheel" in ca ? (Ca = function() {
    return - oa.event.deltaY * (oa.event.deltaMode ? 120 : 1)
  },
  "wheel") : "onmousewheel" in ca ? (Ca = function() {
    return oa.event.wheelDelta
  },
  "mousewheel") : (Ca = function() {
    return - oa.event.detail
  },
  "MozMousePixelScroll");
  L.prototype.toString = function() {
    return this.rgb() + ""
  },
  oa.hsl = function(n, t, e) {
    return arguments.length === 1 ? n instanceof H ? F(n.h, n.s, n.l) : ut("" + n, it, F) : F( + n, +t, +e)
  };
  var ja = H.prototype = new L;
  ja.brighter = function(n) {
    return n = Math.pow(.7, arguments.length ? n: 1),
    F(this.h, this.s, this.l / n)
  },
  ja.darker = function(n) {
    return n = Math.pow(.7, arguments.length ? n: 1),
    F(this.h, this.s, n * this.l)
  },
  ja.rgb = function() {
    return P(this.h, this.s, this.l)
  };
  var La = Math.PI,
  Fa = 1e-6,
  Ha = La / 180,
  Pa = 180 / La;
  oa.hcl = function(n, t, e) {
    return arguments.length === 1 ? n instanceof Z ? X(n.h, n.c, n.l) : n instanceof J ? K(n.l, n.a, n.b) : K((n = at((n = oa.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : X( + n, +t, +e)
  };
  var Ra = Z.prototype = new L;
  Ra.brighter = function(n) {
    return X(this.h, this.c, Math.min(100, this.l + Oa * (arguments.length ? n: 1)))
  },
  Ra.darker = function(n) {
    return X(this.h, this.c, Math.max(0, this.l - Oa * (arguments.length ? n: 1)))
  },
  Ra.rgb = function() {
    return B(this.h, this.c, this.l).rgb()
  },
  oa.lab = function(n, t, e) {
    return arguments.length === 1 ? n instanceof J ? $(n.l, n.a, n.b) : n instanceof Z ? B(n.l, n.c, n.h) : at((n = oa.rgb(n)).r, n.g, n.b) : $( + n, +t, +e)
  };
  var Oa = 18,
  Ya = .95047,
  Ua = 1,
  Ia = 1.08883,
  Va = J.prototype = new L;
  Va.brighter = function(n) {
    return $(Math.min(100, this.l + Oa * (arguments.length ? n: 1)), this.a, this.b)
  },
  Va.darker = function(n) {
    return $(Math.max(0, this.l - Oa * (arguments.length ? n: 1)), this.a, this.b)
  },
  Va.rgb = function() {
    return G(this.l, this.a, this.b)
  },
  oa.rgb = function(n, t, e) {
    return arguments.length === 1 ? n instanceof et ? tt(n.r, n.g, n.b) : ut("" + n, tt, P) : tt(~~n, ~~t, ~~e)
  };
  var Xa = et.prototype = new L;
  Xa.brighter = function(n) {
    n = Math.pow(.7, arguments.length ? n: 1);
    var t = this.r,
    e = this.g,
    r = this.b,
    u = 30;
    return t || e || r ? (t && u > t && (t = u), e && u > e && (e = u), r && u > r && (r = u), tt(Math.min(255, Math.floor(t / n)), Math.min(255, Math.floor(e / n)), Math.min(255, Math.floor(r / n)))) : tt(u, u, u)
  },
  Xa.darker = function(n) {
    return n = Math.pow(.7, arguments.length ? n: 1),
    tt(Math.floor(n * this.r), Math.floor(n * this.g), Math.floor(n * this.b))
  },
  Xa.hsl = function() {
    return it(this.r, this.g, this.b)
  },
  Xa.toString = function() {
    return "#" + rt(this.r) + rt(this.g) + rt(this.b)
  };
  var Za = oa.map({
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  });
  Za.forEach(function(n, t) {
    Za.set(n, ut(t, tt, P))
  }),
  oa.functor = lt,
  oa.xhr = function(n, t, e) {
    function r() {
      var n = c.status; ! n && c.responseText || n >= 200 && 300 > n || 304 === n ? i.load.call(u, o.call(u, c)) : i.error.call(u, c)
    }
    var u = {},
    i = oa.dispatch("progress", "load", "error"),
    a = {},
    o = ft,
    c = new(la.XDomainRequest && /^(http(s)?:)?\/\//.test(n) ? XDomainRequest: XMLHttpRequest);
    return "onload" in c ? c.onload = c.onerror = r: c.onreadystatechange = function() {
      c.readyState > 3 && r()
    },
    c.onprogress = function(n) {
      var t = oa.event;
      oa.event = n;
      try {
        i.progress.call(u, c)
      } finally {
        oa.event = t
      }
    },
    u.header = function(n, t) {
      return n = (n + "").toLowerCase(),
      arguments.length < 2 ? a[n] : (null == t ? delete a[n] : a[n] = t + "", u)
    },
    u.mimeType = function(n) {
      return arguments.length ? (t = null == n ? null: n + "", u) : t
    },
    u.response = function(n) {
      return o = n,
      u
    },
    ["get", "post"].forEach(function(n) {
      u[n] = function() {
        return u.send.apply(u, [n].concat(va(arguments)))
      }
    }),
    u.send = function(e, r, i) {
      if (arguments.length === 2 && "function" == typeof r && (i = r, r = null), c.open(e, n, !0), null == t || "accept" in a || (a.accept = t + ",*/*"), c.setRequestHeader) for (var o in a) c.setRequestHeader(o, a[o]);
      return null != t && c.overrideMimeType && c.overrideMimeType(t),
      null != i && u.on("error", i).on("load",
      function(n) {
        i(null, n)
      }),
      c.send(null == r ? null: r),
      u
    },
    u.abort = function() {
      return c.abort(),
      u
    },
    oa.rebind(u, i, "on"),
    arguments.length === 2 && "function" == typeof t && (e = t, t = null),
    null == e ? u: u.get(st(e))
  },
  oa.csv = ht(",", "text/csv"),
  oa.tsv = ht("	", "text/tab-separated-values");
  var Ba, $a, Ja = 0,
  Ga = {},
  Ka = null;
  oa.timer = function(n, t, e) {
    if (arguments.length < 3) {
      if (arguments.length < 2) t = 0;
      else if (!isFinite(t)) return;
      e = Date.now()
    }
    var r = Ga[n.id];
    r && r.callback === n ? (r.then = e, r.delay = t) : Ga[n.id = ++Ja] = Ka = {
      callback: n,
      then: e,
      delay: t,
      next: Ka
    },
    Ba || ($a = clearTimeout($a), Ba = 1, Wa(gt))
  },
  oa.timer.flush = function() {
    for (var n, t = Date.now(), e = Ka; e;) n = t - e.then,
    e.delay || (e.flush = e.callback(n)),
    e = e.next;
    pt()
  };
  var Wa = la.requestAnimationFrame || la.webkitRequestAnimationFrame || la.mozRequestAnimationFrame || la.oRequestAnimationFrame || la.msRequestAnimationFrame ||
  function(n) {
    setTimeout(n, 17)
  },
  Qa = ".",
  no = ",",
  to = [3, 3],
  eo = ["y", "z", "a", "f", "p", "n", "Âµ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(dt);
  oa.formatPrefix = function(n, t) {
    var e = 0;
    return n && (0 > n && (n *= -1), t && (n = oa.round(n, mt(n, t))), e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10), e = Math.max( - 24, Math.min(24, Math.floor((0 >= e ? e + 1 : e - 1) / 3) * 3))),
    eo[8 + e / 3]
  },
  oa.round = function(n, t) {
    return t ? Math.round(n * (t = Math.pow(10, t))) / t: Math.round(n)
  },
  oa.format = function(n) {
    var t = ro.exec(n),
    e = t[1] || " ",
    r = t[2] || ">",
    u = t[3] || "",
    i = t[4] || "",
    a = t[5],
    o = +t[6],
    c = t[7],
    l = t[8],
    f = t[9],
    s = 1,
    h = "",
    g = !1;
    switch (l && (l = +l.substring(1)), (a || "0" === e && "=" === r) && (a = e = "0", r = "=", c && (o -= Math.floor((o - 1) / 4))), f) {
    case "n":
      c = !0,
      f = "g";
      break;
    case "%":
      s = 100,
      h = "%",
      f = "f";
      break;
    case "p":
      s = 100,
      h = "%",
      f = "r";
      break;
    case "b":
    case "o":
    case "x":
    case "X":
      i && (i = "0" + f.toLowerCase());
    case "c":
    case "d":
      g = !0,
      l = 0;
      break;
    case "s":
      s = -1,
      f = "r"
    }
    "#" === i && (i = ""),
    "r" != f || l || (f = "g"),
    null != l && ("g" == f ? l = Math.max(1, Math.min(21, l)) : ("e" == f || "f" == f) && (l = Math.max(0, Math.min(20, l)))),
    f = uo.get(f) || vt;
    var p = a && c;
    return function(n) {
      if (g && n % 1) return "";
      var t = 0 > n || 0 === n && 0 > 1 / n ? (n = -n, "-") : u;
      if (0 > s) {
        var d = oa.formatPrefix(n, l);
        n = d.scale(n),
        h = d.symbol
      } else n *= s;
      n = f(n, l),
      !a && c && (n = io(n));
      var m = i.length + n.length + (p ? 0 : t.length),
      v = o > m ? Array(m = o - m + 1).join(e) : "";
      return p && (n = io(v + n)),
      Qa && n.replace(".", Qa),
      t += i,
      ("<" === r ? t + n + v: ">" === r ? v + t + n: "^" === r ? v.substring(0, m >>= 1) + t + n + v.substring(m) : t + (p ? n: v + n)) + h
    }
  };
  var ro = /(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
  uo = oa.map({
    b: function(n) {
      return n.toString(2)
    },
    c: function(n) {
      return String.fromCharCode(n)
    },
    o: function(n) {
      return n.toString(8)
    },
    x: function(n) {
      return n.toString(16)
    },
    X: function(n) {
      return n.toString(16).toUpperCase()
    },
    g: function(n, t) {
      return n.toPrecision(t)
    },
    e: function(n, t) {
      return n.toExponential(t)
    },
    f: function(n, t) {
      return n.toFixed(t)
    },
    r: function(n, t) {
      return (n = oa.round(n, mt(n, t))).toFixed(Math.max(0, Math.min(20, mt(n * (1 + 1e-15), t))))
    }
  }),
  io = ft;
  if (to) {
    var ao = to.length;
    io = function(n) {
      for (var t = n.lastIndexOf("."), e = t >= 0 ? "." + n.substring(t + 1) : (t = n.length, ""), r = [], u = 0, i = to[0]; t > 0 && i > 0;) r.push(n.substring(t -= i, t + i)),
      i = to[u = (u + 1) % ao];
      return r.reverse().join(no || "") + e
    }
  }
  oa.geo = {},
  oa.geo.stream = function(n, t) {
    oo.hasOwnProperty(n.type) ? oo[n.type](n, t) : yt(n, t)
  };
  var oo = {
    Feature: function(n, t) {
      yt(n.geometry, t)
    },
    FeatureCollection: function(n, t) {
      for (var e = n.features,
      r = -1,
      u = e.length; ++r < u;) yt(e[r].geometry, t)
    }
  },
  co = {
    Sphere: function(n, t) {
      t.sphere()
    },
    Point: function(n, t) {
      var e = n.coordinates;
      t.point(e[0], e[1])
    },
    MultiPoint: function(n, t) {
      for (var e, r = n.coordinates,
      u = -1,
      i = r.length; ++u < i;) e = r[u],
      t.point(e[0], e[1])
    },
    LineString: function(n, t) {
      Mt(n.coordinates, t, 0)
    },
    MultiLineString: function(n, t) {
      for (var e = n.coordinates,
      r = -1,
      u = e.length; ++r < u;) Mt(e[r], t, 0)
    },
    Polygon: function(n, t) {
      xt(n.coordinates, t)
    },
    MultiPolygon: function(n, t) {
      for (var e = n.coordinates,
      r = -1,
      u = e.length; ++r < u;) xt(e[r], t)
    },
    GeometryCollection: function(n, t) {
      for (var e = n.geometries,
      r = -1,
      u = e.length; ++r < u;) yt(e[r], t)
    }
  };
  oa.geo.area = function(n) {
    return lo = 0,
    oa.geo.stream(n, ho),
    lo
  };
  var lo, fo, so, ho = {
    sphere: function() {
      lo += 4 * La
    },
    point: N,
    lineStart: N,
    lineEnd: N,
    polygonStart: function() {
      fo = 1,
      so = 0,
      ho.lineStart = bt
    },
    polygonEnd: function() {
      var n = 2 * Math.atan2(so, fo);
      lo += 0 > n ? 4 * La + n: n,
      ho.lineStart = ho.lineEnd = ho.point = N
    }
  };
  oa.geo.bounds = _t(ft),
  oa.geo.centroid = function(n) {
    go = po = mo = vo = yo = 0,
    oa.geo.stream(n, Mo);
    var t;
    return po && Math.abs(t = Math.sqrt(mo * mo + vo * vo + yo * yo)) > Fa ? [Math.atan2(vo, mo) * Pa, Math.asin(Math.max( - 1, Math.min(1, yo / t))) * Pa] : void 0
  };
  var go, po, mo, vo, yo, Mo = {
    sphere: function() {
      2 > go && (go = 2, po = mo = vo = yo = 0)
    },
    point: wt,
    lineStart: Et,
    lineEnd: kt,
    polygonStart: function() {
      2 > go && (go = 2, po = mo = vo = yo = 0),
      Mo.lineStart = St
    },
    polygonEnd: function() {
      Mo.lineStart = Et
    }
  },
  xo = Pt(Dt, It, Xt),
  bo = 1e9;
  oa.geo.projection = Kt,
  oa.geo.projectionMutator = Wt,
  (oa.geo.equirectangular = function() {
    return Kt(ne)
  }).raw = ne.invert = ne,
  oa.geo.rotation = function(n) {
    function t(t) {
      return t = n(t[0] * Ha, t[1] * Ha),
      t[0] *= Pa,
      t[1] *= Pa,
      t
    }
    return n = te(n[0] % 360 * Ha, n[1] * Ha, n.length > 2 ? n[2] * Ha: 0),
    t.invert = function(t) {
      return t = n.invert(t[0] * Ha, t[1] * Ha),
      t[0] *= Pa,
      t[1] *= Pa,
      t
    },
    t
  },
  oa.geo.circle = function() {
    function n() {
      var n = "function" == typeof r ? r.apply(this, arguments) : r,
      t = te( - n[0] * Ha, -n[1] * Ha, 0).invert,
      u = [];
      return e(null, null, 1, {
        point: function(n, e) {
          u.push(n = t(n, e)),
          n[0] *= Pa,
          n[1] *= Pa
        }
      }),
      {
        type: "Polygon",
        coordinates: [u]
      }
    }
    var t, e, r = [0, 0],
    u = 6;
    return n.origin = function(t) {
      return arguments.length ? (r = t, n) : r
    },
    n.angle = function(r) {
      return arguments.length ? (e = ie((t = +r) * Ha, u * Ha), n) : t
    },
    n.precision = function(r) {
      return arguments.length ? (e = ie(t * Ha, (u = +r) * Ha), n) : u
    },
    n.angle(90)
  },
  oa.geo.distance = function(n, t) {
    var e, r = (t[0] - n[0]) * Ha,
    u = n[1] * Ha,
    i = t[1] * Ha,
    a = Math.sin(r),
    o = Math.cos(r),
    c = Math.sin(u),
    l = Math.cos(u),
    f = Math.sin(i),
    s = Math.cos(i);
    return Math.atan2(Math.sqrt((e = s * a) * e + (e = l * f - c * s * o) * e), c * f + l * s * o)
  },
  oa.geo.graticule = function() {
    function n() {
      return {
        type: "MultiLineString",
        coordinates: t()
      }
    }
    function t() {
      return oa.range(Math.ceil(i / m) * m, u, m).map(h).concat(oa.range(Math.ceil(l / v) * v, c, v).map(g)).concat(oa.range(Math.ceil(r / p) * p, e, p).filter(function(n) {
        return Math.abs(n % m) > Fa
      }).map(f)).concat(oa.range(Math.ceil(o / d) * d, a, d).filter(function(n) {
        return Math.abs(n % v) > Fa
      }).map(s))
    }
    var e, r, u, i, a, o, c, l, f, s, h, g, p = 10,
    d = p,
    m = 90,
    v = 360,
    y = 2.5;
    return n.lines = function() {
      return t().map(function(n) {
        return {
          type: "LineString",
          coordinates: n
        }
      })
    },
    n.outline = function() {
      return {
        type: "Polygon",
        coordinates: [h(i).concat(g(c).slice(1), h(u).reverse().slice(1), g(l).reverse().slice(1))]
      }
    },
    n.extent = function(t) {
      return arguments.length ? n.majorExtent(t).minorExtent(t) : n.minorExtent()
    },
    n.majorExtent = function(t) {
      return arguments.length ? (i = +t[0][0], u = +t[1][0], l = +t[0][1], c = +t[1][1], i > u && (t = i, i = u, u = t), l > c && (t = l, l = c, c = t), n.precision(y)) : [[i, l], [u, c]]
    },
    n.minorExtent = function(t) {
      return arguments.length ? (r = +t[0][0], e = +t[1][0], o = +t[0][1], a = +t[1][1], r > e && (t = r, r = e, e = t), o > a && (t = o, o = a, a = t), n.precision(y)) : [[r, o], [e, a]]
    },
    n.step = function(t) {
      return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep()
    },
    n.majorStep = function(t) {
      return arguments.length ? (m = +t[0], v = +t[1], n) : [m, v]
    },
    n.minorStep = function(t) {
      return arguments.length ? (p = +t[0], d = +t[1], n) : [p, d]
    },
    n.precision = function(t) {
      return arguments.length ? (y = +t, f = oe(o, a, 90), s = ce(r, e, y), h = oe(l, c, 90), g = ce(i, u, y), n) : y
    },
    n.majorExtent([[ - 180, -90 + Fa], [180, 90 - Fa]]).minorExtent([[ - 180, -80 - Fa], [180, 80 + Fa]])
  },
  oa.geo.greatArc = function() {
    function n() {
      return {
        type: "LineString",
        coordinates: [t || r.apply(this, arguments), e || u.apply(this, arguments)]
      }
    }
    var t, e, r = le,
    u = fe;
    return n.distance = function() {
      return oa.geo.distance(t || r.apply(this, arguments), e || u.apply(this, arguments))
    },
    n.source = function(e) {
      return arguments.length ? (r = e, t = "function" == typeof e ? null: e, n) : r
    },
    n.target = function(t) {
      return arguments.length ? (u = t, e = "function" == typeof t ? null: t, n) : u
    },
    n.precision = function() {
      return arguments.length ? n: 0
    },
    n
  },
  oa.geo.interpolate = function(n, t) {
    return se(n[0] * Ha, n[1] * Ha, t[0] * Ha, t[1] * Ha)
  },
  oa.geo.length = function(n) {
    return _o = 0,
    oa.geo.stream(n, wo),
    _o
  };
  var _o, wo = {
    sphere: N,
    point: N,
    lineStart: he,
    lineEnd: N,
    polygonStart: N,
    polygonEnd: N
  }; (oa.geo.conicEqualArea = function() {
    return ge(pe)
  }).raw = pe,
  oa.geo.albersUsa = function() {
    function n(n) {
      return t(n)(n)
    }
    function t(n) {
      var t = n[0],
      e = n[1];
      return e > 50 ? a: -140 > t ? o: 21 > e ? c: i
    }
    var e, r, u, i = oa.geo.conicEqualArea().rotate([98, 0]).center([0, 38]).parallels([29.5, 45.5]),
    a = oa.geo.conicEqualArea().rotate([160, 0]).center([0, 60]).parallels([55, 65]),
    o = oa.geo.conicEqualArea().rotate([160, 0]).center([0, 20]).parallels([8, 18]),
    c = oa.geo.conicEqualArea().rotate([60, 0]).center([0, 10]).parallels([8, 18]);
    return n.invert = function(n) {
      return e(n) || r(n) || u(n) || i.invert(n)
    },
    n.scale = function(t) {
      return arguments.length ? (i.scale(t), a.scale(.6 * t), o.scale(t), c.scale(1.5 * t), n.translate(i.translate())) : i.scale()
    },
    n.translate = function(t) {
      if (!arguments.length) return i.translate();
      var l = i.scale(),
      f = t[0],
      s = t[1];
      return i.translate(t),
      a.translate([f - .4 * l, s + .17 * l]),
      o.translate([f - .19 * l, s + .2 * l]),
      c.translate([f + .58 * l, s + .43 * l]),
      e = de(a, [[ - 180, 50], [ - 130, 72]]),
      r = de(o, [[ - 164, 18], [ - 154, 24]]),
      u = de(c, [[ - 67.5, 17.5], [ - 65, 19]]),
      n
    },
    n.scale(1e3)
  };
  var So, Eo, ko = {
    point: N,
    lineStart: N,
    lineEnd: N,
    polygonStart: function() {
      Eo = 0,
      ko.lineStart = me
    },
    polygonEnd: function() {
      ko.lineStart = ko.lineEnd = ko.point = N,
      So += Math.abs(Eo / 2)
    }
  },
  Ao = {
    point: ye,
    lineStart: Me,
    lineEnd: xe,
    polygonStart: function() {
      Ao.lineStart = be
    },
    polygonEnd: function() {
      Ao.point = ye,
      Ao.lineStart = Me,
      Ao.lineEnd = xe
    }
  };
  oa.geo.path = function() {
    function n(n) {
      return n && oa.geo.stream(n, r(u.pointRadius("function" == typeof i ? +i.apply(this, arguments) : i))),
      u.result()
    }
    var t, e, r, u, i = 4.5;
    return n.area = function(n) {
      return So = 0,
      oa.geo.stream(n, r(ko)),
      So
    },
    n.centroid = function(n) {
      return go = mo = vo = yo = 0,
      oa.geo.stream(n, r(Ao)),
      yo ? [mo / yo, vo / yo] : void 0
    },
    n.bounds = function(n) {
      return _t(r)(n)
    },
    n.projection = function(e) {
      return arguments.length ? (r = (t = e) ? e.stream || Se(e) : ft, n) : t
    },
    n.context = function(t) {
      return arguments.length ? (u = (e = t) == null ? new ve: new _e(t), n) : e
    },
    n.pointRadius = function(t) {
      return arguments.length ? (i = "function" == typeof t ? t: +t, n) : i
    },
    n.projection(oa.geo.albersUsa()).context(null)
  },
  oa.geo.albers = function() {
    return oa.geo.conicEqualArea().parallels([29.5, 45.5]).rotate([98, 0]).center([0, 38]).scale(1e3)
  };
  var qo = Ee(function(n) {
    return Math.sqrt(2 / (1 + n))
  },
  function(n) {
    return 2 * Math.asin(n / 2)
  }); (oa.geo.azimuthalEqualArea = function() {
    return Kt(qo)
  }).raw = qo;
  var No = Ee(function(n) {
    var t = Math.acos(n);
    return t && t / Math.sin(t)
  },
  ft); (oa.geo.azimuthalEquidistant = function() {
    return Kt(No)
  }).raw = No,
  (oa.geo.conicConformal = function() {
    return ge(ke)
  }).raw = ke,
  (oa.geo.conicEquidistant = function() {
    return ge(Ae)
  }).raw = Ae;
  var To = Ee(function(n) {
    return 1 / n
  },
  Math.atan); (oa.geo.gnomonic = function() {
    return Kt(To)
  }).raw = To,
  qe.invert = function(n, t) {
    return [n, 2 * Math.atan(Math.exp(t)) - La / 2]
  },
  (oa.geo.mercator = function() {
    return Ne(qe)
  }).raw = qe;
  var Co = Ee(function() {
    return 1
  },
  Math.asin); (oa.geo.orthographic = function() {
    return Kt(Co)
  }).raw = Co;
  var zo = Ee(function(n) {
    return 1 / (1 + n)
  },
  function(n) {
    return 2 * Math.atan(n)
  }); (oa.geo.stereographic = function() {
    return Kt(zo)
  }).raw = zo,
  Te.invert = function(n, t) {
    return [Math.atan2(U(n), Math.cos(t)), Y(Math.sin(t) / I(n))]
  },
  (oa.geo.transverseMercator = function() {
    return Ne(Te)
  }).raw = Te,
  oa.geom = {},
  oa.svg = {},
  oa.svg.line = function() {
    return Ce(ft)
  };
  var Do = oa.map({
    linear: je,
    "linear-closed": Le,
    "step-before": Fe,
    "step-after": He,
    basis: Ie,
    "basis-open": Ve,
    "basis-closed": Xe,
    bundle: Ze,
    cardinal: Oe,
    "cardinal-open": Pe,
    "cardinal-closed": Re,
    monotone: We
  });
  Do.forEach(function(n, t) {
    t.key = n,
    t.closed = /-closed$/.test(n)
  });
  var jo = [0, 2 / 3, 1 / 3, 0],
  Lo = [0, 1 / 3, 2 / 3, 0],
  Fo = [0, 1 / 6, 2 / 3, 1 / 6];
  oa.geom.hull = function(n) {
    function t(n) {
      if (n.length < 3) return [];
      var t, u, i, a, o, c, l, f, s, h, g, p, d = lt(e),
      m = lt(r),
      v = n.length,
      y = v - 1,
      M = [],
      x = [],
      b = 0;
      if (d === ze && r === De) t = n;
      else for (i = 0, t = []; v > i; ++i) t.push([ + d.call(this, u = n[i], i), +m.call(this, u, i)]);
      for (i = 1; v > i; ++i) t[i][1] < t[b][1] ? b = i: t[i][1] == t[b][1] && (b = t[i][0] < t[b][0] ? i: b);
      for (i = 0; v > i; ++i) i !== b && (c = t[i][1] - t[b][1], o = t[i][0] - t[b][0], M.push({
        angle: Math.atan2(c, o),
        index: i
      }));
      for (M.sort(function(n, t) {
        return n.angle - t.angle
      }), g = M[0].angle, h = M[0].index, s = 0, i = 1; y > i; ++i) a = M[i].index,
      g == M[i].angle ? (o = t[h][0] - t[b][0], c = t[h][1] - t[b][1], l = t[a][0] - t[b][0], f = t[a][1] - t[b][1], o * o + c * c >= l * l + f * f ? M[i].index = -1 : (M[s].index = -1, g = M[i].angle, s = i, h = a)) : (g = M[i].angle, s = i, h = a);
      for (x.push(b), i = 0, a = 0; 2 > i; ++a) M[a].index !== -1 && (x.push(M[a].index), i++);
      for (p = x.length; y > a; ++a) if (M[a].index !== -1) {
        for (; ! Qe(x[p - 2], x[p - 1], M[a].index, t);)--p;
        x[p++] = M[a].index
      }
      var _ = [];
      for (i = 0; p > i; ++i) _.push(n[x[i]]);
      return _
    }
    var e = ze,
    r = De;
    return arguments.length ? t(n) : (t.x = function(n) {
      return arguments.length ? (e = n, t) : e
    },
    t.y = function(n) {
      return arguments.length ? (r = n, t) : r
    },
    t)
  },
  oa.geom.polygon = function(n) {
    return n.area = function() {
      for (var t = 0,
      e = n.length,
      r = n[e - 1][1] * n[0][0] - n[e - 1][0] * n[0][1]; ++t < e;) r += n[t - 1][1] * n[t][0] - n[t - 1][0] * n[t][1];
      return.5 * r
    },
    n.centroid = function(t) {
      var e, r, u = -1,
      i = n.length,
      a = 0,
      o = 0,
      c = n[i - 1];
      for (arguments.length || (t = -1 / (6 * n.area())); ++u < i;) e = c,
      c = n[u],
      r = e[0] * c[1] - c[0] * e[1],
      a += (e[0] + c[0]) * r,
      o += (e[1] + c[1]) * r;
      return [a * t, o * t]
    },
    n.clip = function(t) {
      for (var e, r, u, i, a, o, c = -1,
      l = n.length,
      f = n[l - 1]; ++c < l;) {
        for (e = t.slice(), t.length = 0, i = n[c], a = e[(u = e.length) - 1], r = -1; ++r < u;) o = e[r],
        nr(o, f, i) ? (nr(a, f, i) || t.push(tr(a, o, f, i)), t.push(o)) : nr(a, f, i) && t.push(tr(a, o, f, i)),
        a = o;
        f = i
      }
      return t
    },
    n
  },
  oa.geom.delaunay = function(n) {
    var t = n.map(function() {
      return []
    }),
    e = [];
    return er(n,
    function(e) {
      t[e.region.l.index].push(n[e.region.r.index])
    }),
    t.forEach(function(t, r) {
      var u = n[r],
      i = u[0],
      a = u[1];
      t.forEach(function(n) {
        n.angle = Math.atan2(n[0] - i, n[1] - a)
      }),
      t.sort(function(n, t) {
        return n.angle - t.angle
      });
      for (var o = 0,
      c = t.length - 1; c > o; o++) e.push([u, t[o], t[o + 1]])
    }),
    e
  },
  oa.geom.voronoi = function(n) {
    function t(n) {
      var t, r, a, o = n.map(function() {
        return []
      }),
      c = lt(u),
      l = lt(i),
      f = n.length,
      s = 1e6;
      if (c === ze && l === De) t = n;
      else for (t = [], a = 0; f > a; ++a) t.push([ + c.call(this, r = n[a], a), +l.call(this, r, a)]);
      if (er(t,
      function(n) {
        var t, e, r, u, i, a;
        n.a === 1 && n.b >= 0 ? (t = n.ep.r, e = n.ep.l) : (t = n.ep.l, e = n.ep.r),
        n.a === 1 ? (i = t ? t.y: -s, r = n.c - n.b * i, a = e ? e.y: s, u = n.c - n.b * a) : (r = t ? t.x: -s, i = n.c - n.a * r, u = e ? e.x: s, a = n.c - n.a * u);
        var c = [r, i],
        l = [u, a];
        o[n.region.l.index].push(c, l),
        o[n.region.r.index].push(c, l)
      }), o = o.map(function(n, e) {
        var r = t[e][0],
        u = t[e][1],
        i = n.map(function(n) {
          return Math.atan2(n[0] - r, n[1] - u)
        }),
        a = oa.range(n.length).sort(function(n, t) {
          return i[n] - i[t]
        });
        return a.filter(function(n, t) {
          return ! t || i[n] - i[a[t - 1]] > Fa
        }).map(function(t) {
          return n[t]
        })
      }), o.forEach(function(n, e) {
        var r = n.length;
        if (!r) return n.push([ - s, -s], [ - s, s], [s, s], [s, -s]);
        if (! (r > 2)) {
          var u = t[e],
          i = n[0],
          a = n[1],
          o = u[0],
          c = u[1],
          l = i[0],
          f = i[1],
          h = a[0],
          g = a[1],
          p = Math.abs(h - l),
          d = g - f;
          if (Math.abs(d) < Fa) {
            var m = f > c ? -s: s;
            n.push([ - s, m], [s, m])
          } else if (Fa > p) {
            var v = l > o ? -s: s;
            n.push([v, -s], [v, s])
          } else {
            var m = (l - o) * (g - f) > (h - l) * (f - c) ? s: -s,
            y = Math.abs(d) - p;
            Math.abs(y) < Fa ? n.push([0 > d ? m: -m, m]) : (y > 0 && (m *= -1), n.push([ - s, m], [s, m]))
          }
        }
      }), e) for (a = 0; f > a; ++a) e(o[a]);
      for (a = 0; f > a; ++a) o[a].point = n[a];
      return o
    }
    var e, r = null,
    u = ze,
    i = De;
    return arguments.length ? t(n) : (t.x = function(n) {
      return arguments.length ? (u = n, t) : u
    },
    t.y = function(n) {
      return arguments.length ? (i = n, t) : i
    },
    t.size = function(n) {
      return arguments.length ? (null == n ? e = null: (r = [ + n[0], +n[1]], e = oa.geom.polygon([[0, 0], [0, r[1]], r, [r[0], 0]]).clip), t) : r
    },
    t.links = function(n) {
      var t, e, r, a = n.map(function() {
        return []
      }),
      o = [],
      c = lt(u),
      l = lt(i),
      f = n.length;
      if (c === ze && l === De) t = n;
      else for (r = 0; f > r; ++r) t.push([ + c.call(this, e = n[r], r), +l.call(this, e, r)]);
      return er(t,
      function(t) {
        var e = t.region.l.index,
        r = t.region.r.index;
        a[e][r] || (a[e][r] = a[r][e] = !0, o.push({
          source: n[e],
          target: n[r]
        }))
      }),
      o
    },
    t.triangles = function(n) {
      if (u === ze && i === De) return oa.geom.delaunay(n);
      var t, e, r, a, o, c = lt(u),
      l = lt(i);
      for (a = 0, t = [], o = n.length; o > a; ++a) e = [ + c.call(this, r = n[a], a), +l.call(this, r, a)],
      e.data = r,
      t.push(e);
      return oa.geom.delaunay(t).map(function(n) {
        return n.map(function(n) {
          return n.data
        })
      })
    },
    t)
  };
  var Ho = {
    l: "r",
    r: "l"
  };
  oa.geom.quadtree = function(n, t, e, r, u) {
    function i(n) {
      function i(n, t, e, r, u, i, a, o) {
        if (!isNaN(e) && !isNaN(r)) if (n.leaf) {
          var c = n.x,
          f = n.y;
          if (null != c) if (Math.abs(c - e) + Math.abs(f - r) < .01) l(n, t, e, r, u, i, a, o);
          else {
            var s = n.point;
            n.x = n.y = n.point = null,
            l(n, s, c, f, u, i, a, o),
            l(n, t, e, r, u, i, a, o)
          } else n.x = e,
          n.y = r,
          n.point = t
        } else l(n, t, e, r, u, i, a, o)
      }
      function l(n, t, e, r, u, a, o, c) {
        var l = .5 * (u + o),
        f = .5 * (a + c),
        s = e >= l,
        h = r >= f,
        g = (h << 1) + s;
        n.leaf = !1,
        n = n.nodes[g] || (n.nodes[g] = ir()),
        s ? u = l: o = l,
        h ? a = f: c = f,
        i(n, t, e, r, u, a, o, c)
      }
      var f, s, h, g, p, d, m, v, y, M = lt(o),
      x = lt(c);
      if (null != t) d = t,
      m = e,
      v = r,
      y = u;
      else if (v = y = -(d = m = 1 / 0), s = [], h = [], p = n.length, a) for (g = 0; p > g; ++g) f = n[g],
      f.x < d && (d = f.x),
      f.y < m && (m = f.y),
      f.x > v && (v = f.x),
      f.y > y && (y = f.y),
      s.push(f.x),
      h.push(f.y);
      else for (g = 0; p > g; ++g) {
        var b = +M(f = n[g], g),
        _ = +x(f, g);
        d > b && (d = b),
        m > _ && (m = _),
        b > v && (v = b),
        _ > y && (y = _),
        s.push(b),
        h.push(_)
      }
      var w = v - d,
      S = y - m;
      w > S ? y = m + w: v = d + S;
      var E = ir();
      if (E.add = function(n) {
        i(E, n, +M(n, ++g), +x(n, g), d, m, v, y)
      },
      E.visit = function(n) {
        ar(n, E, d, m, v, y)
      },
      g = -1, null == t) {
        for (; ++g < p;) i(E, n[g], s[g], h[g], d, m, v, y); --g
      } else n.forEach(E.add);
      return s = h = n = f = null,
      E
    }
    var a, o = ze,
    c = De;
    return (a = arguments.length) ? (o = rr, c = ur, 3 === a && (u = e, r = t, e = t = 0), i(n)) : (i.x = function(n) {
      return arguments.length ? (o = n, i) : o
    },
    i.y = function(n) {
      return arguments.length ? (c = n, i) : c
    },
    i.size = function(n) {
      return arguments.length ? (null == n ? t = e = r = u = null: (t = e = 0, r = +n[0], u = +n[1]), i) : null == t ? null: [r, u]
    },
    i)
  },
  oa.interpolateRgb = or,
  oa.transform = function(n) {
    var t = ca.createElementNS(oa.ns.prefix.svg, "g");
    return (oa.transform = function(n) {
      t.setAttribute("transform", n);
      var e = t.transform.baseVal.consolidate();
      return new cr(e ? e.matrix: Po)
    })(n)
  },
  cr.prototype.toString = function() {
    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
  };
  var Po = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
  };
  oa.interpolateNumber = hr,
  oa.interpolateTransform = gr,
  oa.interpolateObject = pr,
  oa.interpolateString = dr;
  var Ro = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  oa.interpolate = mr,
  oa.interpolators = [pr,
  function(n, t) {
    return Array.isArray(t) && yr(n, t)
  },
  function(n, t) {
    return ("string" == typeof n || "string" == typeof t) && dr(n + "", t + "")
  },
  function(n, t) {
    return ("string" == typeof t ? Za.has(t) || /^(#|rgb\(|hsl\()/.test(t) : t instanceof L) && or(n, t)
  },
  function(n, t) {
    return ! isNaN(n = +n) && !isNaN(t = +t) && hr(n, t)
  }],
  oa.interpolateArray = yr;
  var Oo = function() {
    return ft
  },
  Yo = oa.map({
    linear: Oo,
    poly: Er,
    quad: function() {
      return _r
    },
    cubic: function() {
      return wr
    },
    sin: function() {
      return kr
    },
    exp: function() {
      return Ar
    },
    circle: function() {
      return qr
    },
    elastic: Nr,
    back: Tr,
    bounce: function() {
      return Cr
    }
  }),
  Uo = oa.map({
    "in": ft,
    out: xr,
    "in-out": br,
    "out-in": function(n) {
      return br(xr(n))
    }
  });
  oa.ease = function(n) {
    var t = n.indexOf("-"),
    e = t >= 0 ? n.substring(0, t) : n,
    r = t >= 0 ? n.substring(t + 1) : "in";
    return e = Yo.get(e) || Oo,
    r = Uo.get(r) || ft,
    Mr(r(e.apply(null, Array.prototype.slice.call(arguments, 1))))
  },
  oa.interpolateHcl = zr,
  oa.interpolateHsl = Dr,
  oa.interpolateLab = jr,
  oa.interpolateRound = Lr,
  oa.layout = {},
  oa.layout.bundle = function() {
    return function(n) {
      for (var t = [], e = -1, r = n.length; ++e < r;) t.push(Pr(n[e]));
      return t
    }
  },
  oa.layout.chord = function() {
    function n() {
      var n, l, s, h, g, p = {},
      d = [],
      m = oa.range(i),
      v = [];
      for (e = [], r = [], n = 0, h = -1; ++h < i;) {
        for (l = 0, g = -1; ++g < i;) l += u[h][g];
        d.push(l),
        v.push(oa.range(i)),
        n += l
      }
      for (a && m.sort(function(n, t) {
        return a(d[n], d[t])
      }), o && v.forEach(function(n, t) {
        n.sort(function(n, e) {
          return o(u[t][n], u[t][e])
        })
      }), n = (2 * La - f * i) / n, l = 0, h = -1; ++h < i;) {
        for (s = l, g = -1; ++g < i;) {
          var y = m[h],
          M = v[y][g],
          x = u[y][M],
          b = l,
          _ = l += x * n;
          p[y + "-" + M] = {
            index: y,
            subindex: M,
            startAngle: b,
            endAngle: _,
            value: x
          }
        }
        r[y] = {
          index: y,
          startAngle: s,
          endAngle: l,
          value: (l - s) / n
        },
        l += f
      }
      for (h = -1; ++h < i;) for (g = h - 1; ++g < i;) {
        var w = p[h + "-" + g],
        S = p[g + "-" + h]; (w.value || S.value) && e.push(w.value < S.value ? {
          source: S,
          target: w
        }: {
          source: w,
          target: S
        })
      }
      c && t()
    }
    function t() {
      e.sort(function(n, t) {
        return c((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2)
      })
    }
    var e, r, u, i, a, o, c, l = {},
    f = 0;
    return l.matrix = function(n) {
      return arguments.length ? (i = (u = n) && u.length, e = r = null, l) : u
    },
    l.padding = function(n) {
      return arguments.length ? (f = n, e = r = null, l) : f
    },
    l.sortGroups = function(n) {
      return arguments.length ? (a = n, e = r = null, l) : a
    },
    l.sortSubgroups = function(n) {
      return arguments.length ? (o = n, e = null, l) : o
    },
    l.sortChords = function(n) {
      return arguments.length ? (c = n, e && t(), l) : c
    },
    l.chords = function() {
      return e || n(),
      e
    },
    l.groups = function() {
      return r || n(),
      r
    },
    l
  },
  oa.layout.force = function() {
    function n(n) {
      return function(t, e, r, u) {
        if (t.point !== n) {
          var i = t.cx - n.x,
          a = t.cy - n.y,
          o = 1 / Math.sqrt(i * i + a * a);
          if (d > (u - e) * o) {
            var c = t.charge * o * o;
            return n.px -= i * c,
            n.py -= a * c,
            !0
          }
          if (t.point && isFinite(o)) {
            var c = t.pointCharge * o * o;
            n.px -= i * c,
            n.py -= a * c
          }
        }
        return ! t.charge
      }
    }
    function t(n) {
      n.px = oa.event.x,
      n.py = oa.event.y,
      o.resume()
    }
    var e, r, u, i, a, o = {},
    c = oa.dispatch("start", "tick", "end"),
    l = [1, 1],
    f = .9,
    s = Io,
    h = Vo,
    g = -30,
    p = .1,
    d = .8,
    m = [],
    v = [];
    return o.tick = function() {
      if ((r *= .99) < .005) return c.end({
        type: "end",
        alpha: r = 0
      }),
      !0;
      var t, e, o, s, h, d, y, M, x, b = m.length,
      _ = v.length;
      for (e = 0; _ > e; ++e) o = v[e],
      s = o.source,
      h = o.target,
      M = h.x - s.x,
      x = h.y - s.y,
      (d = M * M + x * x) && (d = r * i[e] * ((d = Math.sqrt(d)) - u[e]) / d, M *= d, x *= d, h.x -= M * (y = s.weight / (h.weight + s.weight)), h.y -= x * y, s.x += M * (y = 1 - y), s.y += x * y);
      if ((y = r * p) && (M = l[0] / 2, x = l[1] / 2, e = -1, y)) for (; ++e < b;) o = m[e],
      o.x += (M - o.x) * y,
      o.y += (x - o.y) * y;
      if (g) for (Xr(t = oa.geom.quadtree(m), r, a), e = -1; ++e < b;)(o = m[e]).fixed || t.visit(n(o));
      for (e = -1; ++e < b;) o = m[e],
      o.fixed ? (o.x = o.px, o.y = o.py) : (o.x -= (o.px - (o.px = o.x)) * f, o.y -= (o.py - (o.py = o.y)) * f);
      c.tick({
        type: "tick",
        alpha: r
      })
    },
    o.nodes = function(n) {
      return arguments.length ? (m = n, o) : m
    },
    o.links = function(n) {
      return arguments.length ? (v = n, o) : v
    },
    o.size = function(n) {
      return arguments.length ? (l = n, o) : l
    },
    o.linkDistance = function(n) {
      return arguments.length ? (s = "function" == typeof n ? n: +n, o) : s
    },
    o.distance = o.linkDistance,
    o.linkStrength = function(n) {
      return arguments.length ? (h = "function" == typeof n ? n: +n, o) : h
    },
    o.friction = function(n) {
      return arguments.length ? (f = +n, o) : f
    },
    o.charge = function(n) {
      return arguments.length ? (g = "function" == typeof n ? n: +n, o) : g
    },
    o.gravity = function(n) {
      return arguments.length ? (p = +n, o) : p
    },
    o.theta = function(n) {
      return arguments.length ? (d = +n, o) : d
    },
    o.alpha = function(n) {
      return arguments.length ? (n = +n, r ? r = n > 0 ? n: 0 : n > 0 && (c.start({
        type: "start",
        alpha: r = n
      }), oa.timer(o.tick)), o) : r
    },
    o.start = function() {
      function n(n, r) {
        for (var u, i = t(e), a = -1, o = i.length; ++a < o;) if (!isNaN(u = i[a][n])) return u;
        return Math.random() * r
      }
      function t() {
        if (!c) {
          for (c = [], r = 0; p > r; ++r) c[r] = [];
          for (r = 0; d > r; ++r) {
            var n = v[r];
            c[n.source.index].push(n.target),
            c[n.target.index].push(n.source)
          }
        }
        return c[e]
      }
      var e, r, c, f, p = m.length,
      d = v.length,
      y = l[0],
      M = l[1];
      for (e = 0; p > e; ++e)(f = m[e]).index = e,
      f.weight = 0;
      for (e = 0; d > e; ++e) f = v[e],
      typeof f.source == "number" && (f.source = m[f.source]),
      typeof f.target == "number" && (f.target = m[f.target]),
      ++f.source.weight,
      ++f.target.weight;
      for (e = 0; p > e; ++e) f = m[e],
      isNaN(f.x) && (f.x = n("x", y)),
      isNaN(f.y) && (f.y = n("y", M)),
      isNaN(f.px) && (f.px = f.x),
      isNaN(f.py) && (f.py = f.y);
      if (u = [], "function" == typeof s) for (e = 0; d > e; ++e) u[e] = +s.call(this, v[e], e);
      else for (e = 0; d > e; ++e) u[e] = s;
      if (i = [], "function" == typeof h) for (e = 0; d > e; ++e) i[e] = +h.call(this, v[e], e);
      else for (e = 0; d > e; ++e) i[e] = h;
      if (a = [], "function" == typeof g) for (e = 0; p > e; ++e) a[e] = +g.call(this, m[e], e);
      else for (e = 0; p > e; ++e) a[e] = g;
      return o.resume()
    },
    o.resume = function() {
      return o.alpha(.1)
    },
    o.stop = function() {
      return o.alpha(0)
    },
    o.drag = function() {
      return e || (e = oa.behavior.drag().origin(ft).on("dragstart.force", Yr).on("drag.force", t).on("dragend.force", Ur)),
      arguments.length ? (this.on("mouseover.force", Ir).on("mouseout.force", Vr).call(e), void 0) : e
    },
    oa.rebind(o, c, "on")
  };
  var Io = 20,
  Vo = 1;
  oa.layout.hierarchy = function() {
    function n(t, a, o) {
      var c = u.call(e, t, a);
      if (t.depth = a, o.push(t), c && (l = c.length)) {
        for (var l, f, s = -1,
        h = t.children = [], g = 0, p = a + 1; ++s < l;) f = n(c[s], p, o),
        f.parent = t,
        h.push(f),
        g += f.value;
        r && h.sort(r),
        i && (t.value = g)
      } else i && (t.value = +i.call(e, t, a) || 0);
      return t
    }
    function t(n, r) {
      var u = n.children,
      a = 0;
      if (u && (o = u.length)) for (var o, c = -1,
      l = r + 1; ++c < o;) a += t(u[c], l);
      else i && (a = +i.call(e, n, r) || 0);
      return i && (n.value = a),
      a
    }
    function e(t) {
      var e = [];
      return n(t, 0, e),
      e
    }
    var r = Jr,
    u = Br,
    i = $r;
    return e.sort = function(n) {
      return arguments.length ? (r = n, e) : r
    },
    e.children = function(n) {
      return arguments.length ? (u = n, e) : u
    },
    e.value = function(n) {
      return arguments.length ? (i = n, e) : i
    },
    e.revalue = function(n) {
      return t(n, 0),
      n
    },
    e
  },
  oa.layout.partition = function() {
    function n(t, e, r, u) {
      var i = t.children;
      if (t.x = e, t.y = t.depth * u, t.dx = r, t.dy = u, i && (a = i.length)) {
        var a, o, c, l = -1;
        for (r = t.value ? r / t.value: 0; ++l < a;) n(o = i[l], e, c = o.value * r, u),
        e += c
      }
    }
    function t(n) {
      var e = n.children,
      r = 0;
      if (e && (u = e.length)) for (var u, i = -1; ++i < u;) r = Math.max(r, t(e[i]));
      return 1 + r
    }
    function e(e, i) {
      var a = r.call(this, e, i);
      return n(a[0], 0, u[0], u[1] / t(a[0])),
      a
    }
    var r = oa.layout.hierarchy(),
    u = [1, 1];
    return e.size = function(n) {
      return arguments.length ? (u = n, e) : u
    },
    Zr(e, r)
  },
  oa.layout.pie = function() {
    function n(i) {
      var a = i.map(function(e, r) {
        return + t.call(n, e, r)
      }),
      o = +("function" == typeof r ? r.apply(this, arguments) : r),
      c = (("function" == typeof u ? u.apply(this, arguments) : u) - o) / oa.sum(a),
      l = oa.range(i.length);
      null != e && l.sort(e === Xo ?
      function(n, t) {
        return a[t] - a[n]
      }: function(n, t) {
        return e(i[n], i[t])
      });
      var f = [];
      return l.forEach(function(n) {
        var t;
        f[n] = {
          data: i[n],
          value: t = a[n],
          startAngle: o,
          endAngle: o += t * c
        }
      }),
      f
    }
    var t = Number,
    e = Xo,
    r = 0,
    u = 2 * La;
    return n.value = function(e) {
      return arguments.length ? (t = e, n) : t
    },
    n.sort = function(t) {
      return arguments.length ? (e = t, n) : e
    },
    n.startAngle = function(t) {
      return arguments.length ? (r = t, n) : r
    },
    n.endAngle = function(t) {
      return arguments.length ? (u = t, n) : u
    },
    n
  };
  var Xo = {};
  oa.layout.stack = function() {
    function n(o, c) {
      var l = o.map(function(e, r) {
        return t.call(n, e, r)
      }),
      f = l.map(function(t) {
        return t.map(function(t, e) {
          return [i.call(n, t, e), a.call(n, t, e)]
        })
      }),
      s = e.call(n, f, c);
      l = oa.permute(l, s),
      f = oa.permute(f, s);
      var h, g, p, d = r.call(n, f, c),
      m = l.length,
      v = l[0].length;
      for (g = 0; v > g; ++g) for (u.call(n, l[0][g], p = d[g], f[0][g][1]), h = 1; m > h; ++h) u.call(n, l[h][g], p += f[h - 1][g][1], f[h][g][1]);
      return o
    }
    var t = ft,
    e = nu,
    r = tu,
    u = Qr,
    i = Kr,
    a = Wr;
    return n.values = function(e) {
      return arguments.length ? (t = e, n) : t
    },
    n.order = function(t) {
      return arguments.length ? (e = "function" == typeof t ? t: Zo.get(t) || nu, n) : e
    },
    n.offset = function(t) {
      return arguments.length ? (r = "function" == typeof t ? t: Bo.get(t) || tu, n) : r
    },
    n.x = function(t) {
      return arguments.length ? (i = t, n) : i
    },
    n.y = function(t) {
      return arguments.length ? (a = t, n) : a
    },
    n.out = function(t) {
      return arguments.length ? (u = t, n) : u
    },
    n
  };
  var Zo = oa.map({
    "inside-out": function(n) {
      var t, e, r = n.length,
      u = n.map(eu),
      i = n.map(ru),
      a = oa.range(r).sort(function(n, t) {
        return u[n] - u[t]
      }),
      o = 0,
      c = 0,
      l = [],
      f = [];
      for (t = 0; r > t; ++t) e = a[t],
      c > o ? (o += i[e], l.push(e)) : (c += i[e], f.push(e));
      return f.reverse().concat(l)
    },
    reverse: function(n) {
      return oa.range(n.length).reverse()
    },
    "default": nu
  }),
  Bo = oa.map({
    silhouette: function(n) {
      var t, e, r, u = n.length,
      i = n[0].length,
      a = [],
      o = 0,
      c = [];
      for (e = 0; i > e; ++e) {
        for (t = 0, r = 0; u > t; t++) r += n[t][e][1];
        r > o && (o = r),
        a.push(r)
      }
      for (e = 0; i > e; ++e) c[e] = (o - a[e]) / 2;
      return c
    },
    wiggle: function(n) {
      var t, e, r, u, i, a, o, c, l, f = n.length,
      s = n[0],
      h = s.length,
      g = [];
      for (g[0] = c = l = 0, e = 1; h > e; ++e) {
        for (t = 0, u = 0; f > t; ++t) u += n[t][e][1];
        for (t = 0, i = 0, o = s[e][0] - s[e - 1][0]; f > t; ++t) {
          for (r = 0, a = (n[t][e][1] - n[t][e - 1][1]) / (2 * o); t > r; ++r) a += (n[r][e][1] - n[r][e - 1][1]) / o;
          i += a * n[t][e][1]
        }
        g[e] = c -= u ? i / u * o: 0,
        l > c && (l = c)
      }
      for (e = 0; h > e; ++e) g[e] -= l;
      return g
    },
    expand: function(n) {
      var t, e, r, u = n.length,
      i = n[0].length,
      a = 1 / u,
      o = [];
      for (e = 0; i > e; ++e) {
        for (t = 0, r = 0; u > t; t++) r += n[t][e][1];
        if (r) for (t = 0; u > t; t++) n[t][e][1] /= r;
        else for (t = 0; u > t; t++) n[t][e][1] = a
      }
      for (e = 0; i > e; ++e) o[e] = 0;
      return o
    },
    zero: tu
  });
  oa.layout.histogram = function() {
    function n(n, i) {
      for (var a, o, c = [], l = n.map(e, this), f = r.call(this, l, i), s = u.call(this, f, l, i), i = -1, h = l.length, g = s.length - 1, p = t ? 1 : 1 / h; ++i < g;) a = c[i] = [],
      a.dx = s[i + 1] - (a.x = s[i]),
      a.y = 0;
      if (g > 0) for (i = -1; ++i < h;) o = l[i],
      o >= f[0] && o <= f[1] && (a = c[oa.bisect(s, o, 1, g) - 1], a.y += p, a.push(n[i]));
      return c
    }
    var t = !0,
    e = Number,
    r = ou,
    u = iu;
    return n.value = function(t) {
      return arguments.length ? (e = t, n) : e
    },
    n.range = function(t) {
      return arguments.length ? (r = lt(t), n) : r
    },
    n.bins = function(t) {
      return arguments.length ? (u = "number" == typeof t ?
      function(n) {
        return au(n, t)
      }: lt(t), n) : u
    },
    n.frequency = function(e) {
      return arguments.length ? (t = !!e, n) : t
    },
    n
  },
  oa.layout.tree = function() {
    function n(n, u) {
      function i(n, t) {
        var r = n.children,
        u = n._tree;
        if (r && (a = r.length)) {
          for (var a, c, l, f = r[0], s = f, h = -1; ++h < a;) l = r[h],
          i(l, c),
          s = o(l, c, s),
          c = l;
          mu(n);
          var g = .5 * (f._tree.prelim + l._tree.prelim);
          t ? (u.prelim = t._tree.prelim + e(n, t), u.mod = u.prelim - g) : u.prelim = g
        } else t && (u.prelim = t._tree.prelim + e(n, t))
      }
      function a(n, t) {
        n.x = n._tree.prelim + t;
        var e = n.children;
        if (e && (r = e.length)) {
          var r, u = -1;
          for (t += n._tree.mod; ++u < r;) a(e[u], t)
        }
      }
      function o(n, t, r) {
        if (t) {
          for (var u, i = n,
          a = n,
          o = t,
          c = n.parent.children[0], l = i._tree.mod, f = a._tree.mod, s = o._tree.mod, h = c._tree.mod; o = fu(o), i = lu(i), o && i;) c = lu(c),
          a = fu(a),
          a._tree.ancestor = n,
          u = o._tree.prelim + s - i._tree.prelim - l + e(o, i),
          u > 0 && (vu(yu(o, n, r), n, u), l += u, f += u),
          s += o._tree.mod,
          l += i._tree.mod,
          h += c._tree.mod,
          f += a._tree.mod;
          o && !fu(a) && (a._tree.thread = o, a._tree.mod += s - f),
          i && !lu(c) && (c._tree.thread = i, c._tree.mod += l - h, r = n)
        }
        return r
      }
      var c = t.call(this, n, u),
      l = c[0];
      du(l,
      function(n, t) {
        n._tree = {
          ancestor: n,
          prelim: 0,
          mod: 0,
          change: 0,
          shift: 0,
          number: t ? t._tree.number + 1 : 0
        }
      }),
      i(l),
      a(l, -l._tree.prelim);
      var f = su(l, gu),
      s = su(l, hu),
      h = su(l, pu),
      g = f.x - e(f, s) / 2,
      p = s.x + e(s, f) / 2,
      d = h.depth || 1;
      return du(l,
      function(n) {
        n.x = (n.x - g) / (p - g) * r[0],
        n.y = n.depth / d * r[1],
        delete n._tree
      }),
      c
    }
    var t = oa.layout.hierarchy().sort(null).value(null),
    e = cu,
    r = [1, 1];
    return n.separation = function(t) {
      return arguments.length ? (e = t, n) : e
    },
    n.size = function(t) {
      return arguments.length ? (r = t, n) : r
    },
    Zr(n, t)
  },
  oa.layout.pack = function() {
    function n(n, u) {
      var i = t.call(this, n, u),
      a = i[0];
      a.x = 0,
      a.y = 0,
      du(a,
      function(n) {
        n.r = Math.sqrt(n.value)
      }),
      du(a, wu);
      var o = r[0],
      c = r[1],
      l = Math.max(2 * a.r / o, 2 * a.r / c);
      if (e > 0) {
        var f = e * l / 2;
        du(a,
        function(n) {
          n.r += f
        }),
        du(a, wu),
        du(a,
        function(n) {
          n.r -= f
        }),
        l = Math.max(2 * a.r / o, 2 * a.r / c)
      }
      return ku(a, o / 2, c / 2, 1 / l),
      i
    }
    var t = oa.layout.hierarchy().sort(Mu),
    e = 0,
    r = [1, 1];
    return n.size = function(t) {
      return arguments.length ? (r = t, n) : r
    },
    n.padding = function(t) {
      return arguments.length ? (e = +t, n) : e
    },
    Zr(n, t)
  },
  oa.layout.cluster = function() {
    function n(n, u) {
      var i, a = t.call(this, n, u),
      o = a[0],
      c = 0;
      du(o,
      function(n) {
        var t = n.children;
        t && t.length ? (n.x = Nu(t), n.y = qu(t)) : (n.x = i ? c += e(n, i) : 0, n.y = 0, i = n)
      });
      var l = Tu(o),
      f = Cu(o),
      s = l.x - e(l, f) / 2,
      h = f.x + e(f, l) / 2;
      return du(o,
      function(n) {
        n.x = (n.x - s) / (h - s) * r[0],
        n.y = (1 - (o.y ? n.y / o.y: 1)) * r[1]
      }),
      a
    }
    var t = oa.layout.hierarchy().sort(null).value(null),
    e = cu,
    r = [1, 1];
    return n.separation = function(t) {
      return arguments.length ? (e = t, n) : e
    },
    n.size = function(t) {
      return arguments.length ? (r = t, n) : r
    },
    Zr(n, t)
  },
  oa.layout.treemap = function() {
    function n(n, t) {
      for (var e, r, u = -1,
      i = n.length; ++u < i;) r = (e = n[u]).value * (0 > t ? 0 : t),
      e.area = isNaN(r) || 0 >= r ? 0 : r
    }
    function t(e) {
      var i = e.children;
      if (i && i.length) {
        var a, o, c, l = s(e),
        f = [],
        h = i.slice(),
        p = 1 / 0,
        d = "slice" === g ? l.dx: "dice" === g ? l.dy: "slice-dice" === g ? e.depth & 1 ? l.dy: l.dx: Math.min(l.dx, l.dy);
        for (n(h, l.dx * l.dy / e.value), f.area = 0; (c = h.length) > 0;) f.push(a = h[c - 1]),
        f.area += a.area,
        "squarify" !== g || (o = r(f, d)) <= p ? (h.pop(), p = o) : (f.area -= f.pop().area, u(f, d, l, !1), d = Math.min(l.dx, l.dy), f.length = f.area = 0, p = 1 / 0);
        f.length && (u(f, d, l, !0), f.length = f.area = 0),
        i.forEach(t)
      }
    }
    function e(t) {
      var r = t.children;
      if (r && r.length) {
        var i, a = s(t),
        o = r.slice(),
        c = [];
        for (n(o, a.dx * a.dy / t.value), c.area = 0; i = o.pop();) c.push(i),
        c.area += i.area,
        i.z != null && (u(c, i.z ? a.dx: a.dy, a, !o.length), c.length = c.area = 0);
        r.forEach(e)
      }
    }
    function r(n, t) {
      for (var e, r = n.area,
      u = 0,
      i = 1 / 0,
      a = -1,
      o = n.length; ++a < o;)(e = n[a].area) && (i > e && (i = e), e > u && (u = e));
      return r *= r,
      t *= t,
      r ? Math.max(t * u * p / r, r / (t * i * p)) : 1 / 0
    }
    function u(n, t, e, r) {
      var u, i = -1,
      a = n.length,
      o = e.x,
      l = e.y,
      f = t ? c(n.area / t) : 0;
      if (t == e.dx) {
        for ((r || f > e.dy) && (f = e.dy); ++i < a;) u = n[i],
        u.x = o,
        u.y = l,
        u.dy = f,
        o += u.dx = Math.min(e.x + e.dx - o, f ? c(u.area / f) : 0);
        u.z = !0,
        u.dx += e.x + e.dx - o,
        e.y += f,
        e.dy -= f
      } else {
        for ((r || f > e.dx) && (f = e.dx); ++i < a;) u = n[i],
        u.x = o,
        u.y = l,
        u.dx = f,
        l += u.dy = Math.min(e.y + e.dy - l, f ? c(u.area / f) : 0);
        u.z = !1,
        u.dy += e.y + e.dy - l,
        e.x += f,
        e.dx -= f
      }
    }
    function i(r) {
      var u = a || o(r),
      i = u[0];
      return i.x = 0,
      i.y = 0,
      i.dx = l[0],
      i.dy = l[1],
      a && o.revalue(i),
      n([i], i.dx * i.dy / i.value),
      (a ? e: t)(i),
      h && (a = u),
      u
    }
    var a, o = oa.layout.hierarchy(),
    c = Math.round,
    l = [1, 1],
    f = null,
    s = zu,
    h = !1,
    g = "squarify",
    p = .5 * (1 + Math.sqrt(5));
    return i.size = function(n) {
      return arguments.length ? (l = n, i) : l
    },
    i.padding = function(n) {
      function t(t) {
        var e = n.call(i, t, t.depth);
        return null == e ? zu(t) : Du(t, "number" == typeof e ? [e, e, e, e] : e)
      }
      function e(t) {
        return Du(t, n)
      }
      if (!arguments.length) return f;
      var r;
      return s = (f = n) == null ? zu: (r = typeof n) == "function" ? t: "number" === r ? (n = [n, n, n, n], e) : e,
      i
    },
    i.round = function(n) {
      return arguments.length ? (c = n ? Math.round: Number, i) : c != Number
    },
    i.sticky = function(n) {
      return arguments.length ? (h = n, a = null, i) : h
    },
    i.ratio = function(n) {
      return arguments.length ? (p = n, i) : p
    },
    i.mode = function(n) {
      return arguments.length ? (g = n + "", i) : g
    },
    Zr(i, o)
  },
  oa.random = {
    normal: function(n, t) {
      var e = arguments.length;
      return 2 > e && (t = 1),
      1 > e && (n = 0),
      function() {
        var e, r, u;
        do e = Math.random() * 2 - 1,
        r = Math.random() * 2 - 1,
        u = e * e + r * r;
        while (!u || u > 1);
        return n + t * e * Math.sqrt( - 2 * Math.log(u) / u)
      }
    },
    logNormal: function() {
      var n = oa.random.normal.apply(oa, arguments);
      return function() {
        return Math.exp(n())
      }
    },
    irwinHall: function(n) {
      return function() {
        for (var t = 0,
        e = 0; n > e; e++) t += Math.random();
        return t / n
      }
    }
  },
  oa.scale = {},
  oa.scale.linear = function() {
    return Ru([0, 1], [0, 1], mr, !1)
  },
  oa.scale.log = function() {
    return Xu(oa.scale.linear().domain([0, Math.LN10]), 10, Zu, Bu)
  };
  var $o = oa.format(".0e");
  oa.scale.pow = function() {
    return Ku(oa.scale.linear(), 1)
  },
  oa.scale.sqrt = function() {
    return oa.scale.pow().exponent(.5)
  },
  oa.scale.ordinal = function() {
    return Qu([], {
      t: "range",
      a: [[]]
    })
  },
  oa.scale.category10 = function() {
    return oa.scale.ordinal().range(Jo)
  },
  oa.scale.category20 = function() {
    return oa.scale.ordinal().range(Go)
  },
  oa.scale.category20b = function() {
    return oa.scale.ordinal().range(Ko)
  },
  oa.scale.category20c = function() {
    return oa.scale.ordinal().range(Wo)
  };
  var Jo = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"],
  Go = ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"],
  Ko = ["#393b79", "#5254a3", "#6b6ecf", "#9c9ede", "#637939", "#8ca252", "#b5cf6b", "#cedb9c", "#8c6d31", "#bd9e39", "#e7ba52", "#e7cb94", "#843c39", "#ad494a", "#d6616b", "#e7969c", "#7b4173", "#a55194", "#ce6dbd", "#de9ed6"],
  Wo = ["#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2", "#31a354", "#74c476", "#a1d99b", "#c7e9c0", "#756bb1", "#9e9ac8", "#bcbddc", "#dadaeb", "#636363", "#969696", "#bdbdbd", "#d9d9d9"];
  oa.scale.quantile = function() {
    return ni([], [])
  },
  oa.scale.quantize = function() {
    return ti(0, 1, [0, 1])
  },
  oa.scale.threshold = function() {
    return ei([.5], [0, 1])
  },
  oa.scale.identity = function() {
    return ri([0, 1])
  },
  oa.svg.arc = function() {
    function n() {
      var n = t.apply(this, arguments),
      i = e.apply(this, arguments),
      a = r.apply(this, arguments) + Qo,
      o = u.apply(this, arguments) + Qo,
      c = (a > o && (c = a, a = o, o = c), o - a),
      l = La > c ? "0": "1",
      f = Math.cos(a),
      s = Math.sin(a),
      h = Math.cos(o),
      g = Math.sin(o);
      return c >= nc ? n ? "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "M0," + n + "A" + n + "," + n + " 0 1,0 0," + -n + "A" + n + "," + n + " 0 1,0 0," + n + "Z": "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "Z": n ? "M" + i * f + "," + i * s + "A" + i + "," + i + " 0 " + l + ",1 " + i * h + "," + i * g + "L" + n * h + "," + n * g + "A" + n + "," + n + " 0 " + l + ",0 " + n * f + "," + n * s + "Z": "M" + i * f + "," + i * s + "A" + i + "," + i + " 0 " + l + ",1 " + i * h + "," + i * g + "L0,0" + "Z"
    }
    var t = ui,
    e = ii,
    r = ai,
    u = oi;
    return n.innerRadius = function(e) {
      return arguments.length ? (t = lt(e), n) : t
    },
    n.outerRadius = function(t) {
      return arguments.length ? (e = lt(t), n) : e
    },
    n.startAngle = function(t) {
      return arguments.length ? (r = lt(t), n) : r
    },
    n.endAngle = function(t) {
      return arguments.length ? (u = lt(t), n) : u
    },
    n.centroid = function() {
      var n = (t.apply(this, arguments) + e.apply(this, arguments)) / 2,
      i = (r.apply(this, arguments) + u.apply(this, arguments)) / 2 + Qo;
      return [Math.cos(i) * n, Math.sin(i) * n]
    },
    n
  };
  var Qo = -La / 2,
  nc = 2 * La - 1e-6;
  oa.svg.line.radial = function() {
    var n = Ce(ci);
    return n.radius = n.x,
    delete n.x,
    n.angle = n.y,
    delete n.y,
    n
  },
  Fe.reverse = He,
  He.reverse = Fe,
  oa.svg.area = function() {
    return li(ft)
  },
  oa.svg.area.radial = function() {
    var n = li(ci);
    return n.radius = n.x,
    delete n.x,
    n.innerRadius = n.x0,
    delete n.x0,
    n.outerRadius = n.x1,
    delete n.x1,
    n.angle = n.y,
    delete n.y,
    n.startAngle = n.y0,
    delete n.y0,
    n.endAngle = n.y1,
    delete n.y1,
    n
  },
  oa.svg.chord = function() {
    function n(n, o) {
      var c = t(this, i, n, o),
      l = t(this, a, n, o);
      return "M" + c.p0 + r(c.r, c.p1, c.a1 - c.a0) + (e(c, l) ? u(c.r, c.p1, c.r, c.p0) : u(c.r, c.p1, l.r, l.p0) + r(l.r, l.p1, l.a1 - l.a0) + u(l.r, l.p1, c.r, c.p0)) + "Z"
    }
    function t(n, t, e, r) {
      var u = t.call(n, e, r),
      i = o.call(n, u, r),
      a = c.call(n, u, r) + Qo,
      f = l.call(n, u, r) + Qo;
      return {
        r: i,
        a0: a,
        a1: f,
        p0: [i * Math.cos(a), i * Math.sin(a)],
        p1: [i * Math.cos(f), i * Math.sin(f)]
      }
    }
    function e(n, t) {
      return n.a0 == t.a0 && n.a1 == t.a1
    }
    function r(n, t, e) {
      return "A" + n + "," + n + " 0 " + +(e > La) + ",1 " + t
    }
    function u(n, t, e, r) {
      return "Q 0,0 " + r
    }
    var i = le,
    a = fe,
    o = fi,
    c = ai,
    l = oi;
    return n.radius = function(t) {
      return arguments.length ? (o = lt(t), n) : o
    },
    n.source = function(t) {
      return arguments.length ? (i = lt(t), n) : i
    },
    n.target = function(t) {
      return arguments.length ? (a = lt(t), n) : a
    },
    n.startAngle = function(t) {
      return arguments.length ? (c = lt(t), n) : c
    },
    n.endAngle = function(t) {
      return arguments.length ? (l = lt(t), n) : l
    },
    n
  },
  oa.svg.diagonal = function() {
    function n(n, u) {
      var i = t.call(this, n, u),
      a = e.call(this, n, u),
      o = (i.y + a.y) / 2,
      c = [i, {
        x: i.x,
        y: o
      },
      {
        x: a.x,
        y: o
      },
      a];
      return c = c.map(r),
      "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3]
    }
    var t = le,
    e = fe,
    r = si;
    return n.source = function(e) {
      return arguments.length ? (t = lt(e), n) : t
    },
    n.target = function(t) {
      return arguments.length ? (e = lt(t), n) : e
    },
    n.projection = function(t) {
      return arguments.length ? (r = t, n) : r
    },
    n
  },
  oa.svg.diagonal.radial = function() {
    var n = oa.svg.diagonal(),
    t = si,
    e = n.projection;
    return n.projection = function(n) {
      return arguments.length ? e(hi(t = n)) : t
    },
    n
  },
  oa.svg.symbol = function() {
    function n(n, r) {
      return (tc.get(t.call(this, n, r)) || di)(e.call(this, n, r))
    }
    var t = pi,
    e = gi;
    return n.type = function(e) {
      return arguments.length ? (t = lt(e), n) : t
    },
    n.size = function(t) {
      return arguments.length ? (e = lt(t), n) : e
    },
    n
  };
  var tc = oa.map({
    circle: di,
    cross: function(n) {
      var t = Math.sqrt(n / 5) / 2;
      return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
    },
    diamond: function(n) {
      var t = Math.sqrt(n / (2 * uc)),
      e = t * uc;
      return "M0," + -t + "L" + e + ",0" + " 0," + t + " " + -e + ",0" + "Z"
    },
    square: function(n) {
      var t = Math.sqrt(n) / 2;
      return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
    },
    "triangle-down": function(n) {
      var t = Math.sqrt(n / rc),
      e = t * rc / 2;
      return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z"
    },
    "triangle-up": function(n) {
      var t = Math.sqrt(n / rc),
      e = t * rc / 2;
      return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z"
    }
  });
  oa.svg.symbolTypes = tc.keys();
  var ec, rc = Math.sqrt(3),
  uc = Math.tan(30 * Ha),
  ic = [],
  ac = 0,
  oc = {
    ease: Sr,
    delay: 0,
    duration: 250
  };
  ic.call = Ea.call,
  ic.empty = Ea.empty,
  ic.node = Ea.node,
  oa.transition = function(n) {
    return arguments.length ? ec ? n.transition() : n: Ta.transition()
  },
  oa.transition.prototype = ic,
  ic.select = function(n) {
    var t, e, r, u = this.id,
    i = [];
    "function" != typeof n && (n = m(n));
    for (var a = -1,
    o = this.length; ++a < o;) {
      i.push(t = []);
      for (var c = this[a], l = -1, f = c.length; ++l < f;)(r = c[l]) && (e = n.call(r, r.__data__, l)) ? ("__data__" in r && (e.__data__ = r.__data__), Mi(e, l, u, r.__transition__[u]), t.push(e)) : t.push(null)
    }
    return mi(i, u)
  },
  ic.selectAll = function(n) {
    var t, e, r, u, i, a = this.id,
    o = [];
    "function" != typeof n && (n = v(n));
    for (var c = -1,
    l = this.length; ++c < l;) for (var f = this[c], s = -1, h = f.length; ++s < h;) if (r = f[s]) {
      i = r.__transition__[a],
      e = n.call(r, r.__data__, s),
      o.push(t = []);
      for (var g = -1,
      p = e.length; ++g < p;) Mi(u = e[g], g, a, i),
      t.push(u)
    }
    return mi(o, a)
  },
  ic.filter = function(n) {
    var t, e, r, u = [];
    "function" != typeof n && (n = A(n));
    for (var i = 0,
    a = this.length; a > i; i++) {
      u.push(t = []);
      for (var e = this[i], o = 0, c = e.length; c > o; o++)(r = e[o]) && n.call(r, r.__data__, o) && t.push(r)
    }
    return mi(u, this.id, this.time).ease(this.ease())
  },
  ic.tween = function(n, t) {
    var e = this.id;
    return arguments.length < 2 ? this.node().__transition__[e].tween.get(n) : D(this, null == t ?
    function(t) {
      t.__transition__[e].tween.remove(n)
    }: function(r) {
      r.__transition__[e].tween.set(n, t)
    })
  },
  ic.attr = function(n, t) {
    function e() {
      this.removeAttribute(i)
    }
    function r() {
      this.removeAttributeNS(i.space, i.local)
    }
    if (arguments.length < 2) {
      for (t in n) this.attr(t, n[t]);
      return this
    }
    var u = vr(n),
    i = oa.ns.qualify(n);
    return vi(this, "attr." + n, t,
    function(n) {
      function t() {
        var t, e = this.getAttribute(i);
        return e !== n && (t = u(e, n),
        function(n) {
          this.setAttribute(i, t(n))
        })
      }
      function a() {
        var t, e = this.getAttributeNS(i.space, i.local);
        return e !== n && (t = u(e, n),
        function(n) {
          this.setAttributeNS(i.space, i.local, t(n))
        })
      }
      return null == n ? i.local ? r: e: (n += "", i.local ? a: t)
    })
  },
  ic.attrTween = function(n, t) {
    function e(n, e) {
      var r = t.call(this, n, e, this.getAttribute(u));
      return r &&
      function(n) {
        this.setAttribute(u, r(n))
      }
    }
    function r(n, e) {
      var r = t.call(this, n, e, this.getAttributeNS(u.space, u.local));
      return r &&
      function(n) {
        this.setAttributeNS(u.space, u.local, r(n))
      }
    }
    var u = oa.ns.qualify(n);
    return this.tween("attr." + n, u.local ? r: e)
  },
  ic.style = function(n, t, e) {
    function r() {
      this.style.removeProperty(n)
    }
    var u = arguments.length;
    if (3 > u) {
      if ("string" != typeof n) {
        2 > u && (t = "");
        for (e in n) this.style(e, n[e], t);
        return this
      }
      e = ""
    }
    var i = vr(n);
    return vi(this, "style." + n, t,
    function(t) {
      function u() {
        var r, u = la.getComputedStyle(this, null).getPropertyValue(n);
        return u !== t && (r = i(u, t),
        function(t) {
          this.style.setProperty(n, r(t), e)
        })
      }
      return null == t ? r: (t += "", u)
    })
  },
  ic.styleTween = function(n, t, e) {
    return arguments.length < 3 && (e = ""),
    this.tween("style." + n,
    function(r, u) {
      var i = t.call(this, r, u, la.getComputedStyle(this, null).getPropertyValue(n));
      return i &&
      function(t) {
        this.style.setProperty(n, i(t), e)
      }
    })
  },
  ic.text = function(n) {
    return vi(this, "text", n, yi)
  },
  ic.remove = function() {
    return this.each("end.transition",
    function() {
      var n; ! this.__transition__ && (n = this.parentNode) && n.removeChild(this)
    })
  },
  ic.ease = function(n) {
    var t = this.id;
    return arguments.length < 1 ? this.node().__transition__[t].ease: ("function" != typeof n && (n = oa.ease.apply(oa, arguments)), D(this,
    function(e) {
      e.__transition__[t].ease = n
    }))
  },
  ic.delay = function(n) {
    var t = this.id;
    return D(this, "function" == typeof n ?
    function(e, r, u) {
      e.__transition__[t].delay = n.call(e, e.__data__, r, u) | 0
    }: (n |= 0,
    function(e) {
      e.__transition__[t].delay = n
    }))
  },
  ic.duration = function(n) {
    var t = this.id;
    return D(this, "function" == typeof n ?
    function(e, r, u) {
      e.__transition__[t].duration = Math.max(1, n.call(e, e.__data__, r, u) | 0)
    }: (n = Math.max(1, 0 | n),
    function(e) {
      e.__transition__[t].duration = n
    }))
  },
  ic.each = function(n, t) {
    var e = this.id;
    if (arguments.length < 2) {
      var r = oc,
      u = ec;
      ec = e,
      D(this,
      function(t, r, u) {
        oc = t.__transition__[e],
        n.call(t, t.__data__, r, u)
      }),
      oc = r,
      ec = u
    } else D(this,
    function(r) {
      r.__transition__[e].event.on(n, t)
    });
    return this
  },
  ic.transition = function() {
    for (var n, t, e, r, u = this.id,
    i = ++ac,
    a = [], o = 0, c = this.length; c > o; o++) {
      a.push(n = []);
      for (var t = this[o], l = 0, f = t.length; f > l; l++)(e = t[l]) && (r = Object.create(e.__transition__[u]), r.delay += r.duration, Mi(e, l, i, r)),
      n.push(e)
    }
    return mi(a, i)
  },
  oa.svg.axis = function() {
    function n(n) {
      n.each(function() {
        var n, s = oa.select(this),
        h = null == l ? e.ticks ? e.ticks.apply(e, c) : e.domain() : l,
        g = null == t ? e.tickFormat ? e.tickFormat.apply(e, c) : String: t,
        p = _i(e, h, f),
        d = s.selectAll(".tick.minor").data(p, String),
        m = d.enter().insert("line", ".tick").attr("class", "tick minor").style("opacity", 1e-6),
        v = oa.transition(d.exit()).style("opacity", 1e-6).remove(),
        y = oa.transition(d).style("opacity", 1),
        M = s.selectAll(".tick.major").data(h, String),
        x = M.enter().insert("g", "path").attr("class", "tick major").style("opacity", 1e-6),
        b = oa.transition(M.exit()).style("opacity", 1e-6).remove(),
        _ = oa.transition(M).style("opacity", 1),
        w = Lu(e),
        S = s.selectAll(".domain").data([0]),
        E = (S.enter().append("path").attr("class", "domain"), oa.transition(S)),
        k = e.copy(),
        A = this.__chart__ || k;
        this.__chart__ = k,
        x.append("line"),
        x.append("text");
        var q = x.select("line"),
        N = _.select("line"),
        T = M.select("text").text(g),
        C = x.select("text"),
        z = _.select("text");
        switch (r) {
        case "bottom":
          n = xi,
          m.attr("y2", i),
          y.attr("x2", 0).attr("y2", i),
          q.attr("y2", u),
          C.attr("y", Math.max(u, 0) + o),
          N.attr("x2", 0).attr("y2", u),
          z.attr("x", 0).attr("y", Math.max(u, 0) + o),
          T.attr("dy", ".71em").style("text-anchor", "middle"),
          E.attr("d", "M" + w[0] + "," + a + "V0H" + w[1] + "V" + a);
          break;
        case "top":
          n = xi,
          m.attr("y2", -i),
          y.attr("x2", 0).attr("y2", -i),
          q.attr("y2", -u),
          C.attr("y", -(Math.max(u, 0) + o)),
          N.attr("x2", 0).attr("y2", -u),
          z.attr("x", 0).attr("y", -(Math.max(u, 0) + o)),
          T.attr("dy", "0em").style("text-anchor", "middle"),
          E.attr("d", "M" + w[0] + "," + -a + "V0H" + w[1] + "V" + -a);
          break;
        case "left":
          n = bi,
          m.attr("x2", -i),
          y.attr("x2", -i).attr("y2", 0),
          q.attr("x2", -u),
          C.attr("x", -(Math.max(u, 0) + o)),
          N.attr("x2", -u).attr("y2", 0),
          z.attr("x", -(Math.max(u, 0) + o)).attr("y", 0),
          T.attr("dy", ".32em").style("text-anchor", "end"),
          E.attr("d", "M" + -a + "," + w[0] + "H0V" + w[1] + "H" + -a);
          break;
        case "right":
          n = bi,
          m.attr("x2", i),
          y.attr("x2", i).attr("y2", 0),
          q.attr("x2", u),
          C.attr("x", Math.max(u, 0) + o),
          N.attr("x2", u).attr("y2", 0),
          z.attr("x", Math.max(u, 0) + o).attr("y", 0),
          T.attr("dy", ".32em").style("text-anchor", "start"),
          E.attr("d", "M" + a + "," + w[0] + "H0V" + w[1] + "H" + a)
        }
        if (e.ticks) x.call(n, A),
        _.call(n, k),
        b.call(n, k),
        m.call(n, A),
        y.call(n, k),
        v.call(n, k);
        else {
          var D = k.rangeBand() / 2,
          j = function(n) {
            return k(n) + D
          };
          x.call(n, j),
          _.call(n, j)
        }
      })
    }
    var t, e = oa.scale.linear(),
    r = cc,
    u = 6,
    i = 6,
    a = 6,
    o = 3,
    c = [10],
    l = null,
    f = 0;
    return n.scale = function(t) {
      return arguments.length ? (e = t, n) : e
    },
    n.orient = function(t) {
      return arguments.length ? (r = t in lc ? t + "": cc, n) : r
    },
    n.ticks = function() {
      return arguments.length ? (c = arguments, n) : c
    },
    n.tickValues = function(t) {
      return arguments.length ? (l = t, n) : l
    },
    n.tickFormat = function(e) {
      return arguments.length ? (t = e, n) : t
    },
    n.tickSize = function(t, e) {
      if (!arguments.length) return u;
      var r = arguments.length - 1;
      return u = +t,
      i = r > 1 ? +e: u,
      a = r > 0 ? +arguments[r] : u,
      n
    },
    n.tickPadding = function(t) {
      return arguments.length ? (o = +t, n) : o
    },
    n.tickSubdivide = function(t) {
      return arguments.length ? (f = +t, n) : f
    },
    n
  };
  var cc = "bottom",
  lc = {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  };
  oa.svg.brush = function() {
    function n(i) {
      i.each(function() {
        var i, a = oa.select(this),
        l = a.selectAll(".background").data([0]),
        s = a.selectAll(".extent").data([0]),
        h = a.selectAll(".resize").data(f, String);
        a.style("pointer-events", "all").on("mousedown.brush", u).on("touchstart.brush", u),
        l.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"),
        s.enter().append("rect").attr("class", "extent").style("cursor", "move"),
        h.enter().append("g").attr("class",
        function(n) {
          return "resize " + n
        }).style("cursor",
        function(n) {
          return fc[n]
        }).append("rect").attr("x",
        function(n) {
          return /[ew]$/.test(n) ? -3 : null
        }).attr("y",
        function(n) {
          return /^[ns]/.test(n) ? -3 : null
        }).attr("width", 6).attr("height", 6).style("visibility", "hidden"),
        h.style("display", n.empty() ? "none": null),
        h.exit().remove(),
        o && (i = Lu(o), l.attr("x", i[0]).attr("width", i[1] - i[0]), e(a)),
        c && (i = Lu(c), l.attr("y", i[0]).attr("height", i[1] - i[0]), r(a)),
        t(a)
      })
    }
    function t(n) {
      n.selectAll(".resize").attr("transform",
      function(n) {
        return "translate(" + h[ + /e$/.test(n)][0] + "," + h[ + /^s/.test(n)][1] + ")"
      })
    }
    function e(n) {
      n.select(".extent").attr("x", h[0][0]),
      n.selectAll(".extent,.n>rect,.s>rect").attr("width", h[1][0] - h[0][0])
    }
    function r(n) {
      n.select(".extent").attr("y", h[0][1]),
      n.selectAll(".extent,.e>rect,.w>rect").attr("height", h[1][1] - h[0][1])
    }
    function u() {
      function u() {
        var n = oa.event.changedTouches;
        return n ? oa.touches(y, n)[0] : oa.mouse(y)
      }
      function f() {
        oa.event.keyCode == 32 && (E || (m = null, k[0] -= h[1][0], k[1] -= h[1][1], E = 2), l())
      }
      function s() {
        oa.event.keyCode == 32 && 2 == E && (k[0] += h[1][0], k[1] += h[1][1], E = 0, l())
      }
      function g() {
        var n = u(),
        i = !1;
        v && (n[0] += v[0], n[1] += v[1]),
        E || (oa.event.altKey ? (m || (m = [(h[0][0] + h[1][0]) / 2, (h[0][1] + h[1][1]) / 2]), k[0] = h[ + (n[0] < m[0])][0], k[1] = h[ + (n[1] < m[1])][1]) : m = null),
        w && p(n, o, 0) && (e(b), i = !0),
        S && p(n, c, 1) && (r(b), i = !0),
        i && (t(b), x({
          type: "brush",
          mode: E ? "move": "resize"
        }))
      }
      function p(n, t, e) {
        var r, u, a = Lu(t),
        o = a[0],
        c = a[1],
        l = k[e],
        f = h[1][e] - h[0][e];
        return E && (o -= l, c -= f + l),
        r = Math.max(o, Math.min(c, n[e])),
        E ? u = (r += l) + f: (m && (l = Math.max(o, Math.min(c, 2 * m[e] - r))), r > l ? (u = r, r = l) : u = l),
        h[0][e] !== r || h[1][e] !== u ? (i = null, h[0][e] = r, h[1][e] = u, !0) : void 0
      }
      function d() {
        g(),
        b.style("pointer-events", "all").selectAll(".resize").style("display", n.empty() ? "none": null),
        oa.select("body").style("cursor", null),
        A.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null),
        x({
          type: "brushend"
        }),
        l()
      }
      var m, v, y = this,
      M = oa.select(oa.event.target),
      x = a.of(y, arguments),
      b = oa.select(y),
      _ = M.datum(),
      w = !/^(n|s)$/.test(_) && o,
      S = !/^(e|w)$/.test(_) && c,
      E = M.classed("extent"),
      k = u(),
      A = oa.select(la).on("mousemove.brush", g).on("mouseup.brush", d).on("touchmove.brush", g).on("touchend.brush", d).on("keydown.brush", f).on("keyup.brush", s);
      if (E) k[0] = h[0][0] - k[0],
      k[1] = h[0][1] - k[1];
      else if (_) {
        var q = +/w$/.test(_),
        N = +/^n/.test(_);
        v = [h[1 - q][0] - k[0], h[1 - N][1] - k[1]],
        k[0] = h[q][0],
        k[1] = h[N][1]
      } else oa.event.altKey && (m = k.slice());
      b.style("pointer-events", "none").selectAll(".resize").style("display", null),
      oa.select("body").style("cursor", M.style("cursor")),
      x({
        type: "brushstart"
      }),
      g(),
      l()
    }
    var i, a = s(n, "brushstart", "brush", "brushend"),
    o = null,
    c = null,
    f = sc[0],
    h = [[0, 0], [0, 0]];
    return n.x = function(t) {
      return arguments.length ? (o = t, f = sc[!o << 1 | !c], n) : o
    },
    n.y = function(t) {
      return arguments.length ? (c = t, f = sc[!o << 1 | !c], n) : c
    },
    n.extent = function(t) {
      var e, r, u, a, l;
      return arguments.length ? (i = [[0, 0], [0, 0]], o && (e = t[0], r = t[1], c && (e = e[0], r = r[0]), i[0][0] = e, i[1][0] = r, o.invert && (e = o(e), r = o(r)), e > r && (l = e, e = r, r = l), h[0][0] = 0 | e, h[1][0] = 0 | r), c && (u = t[0], a = t[1], o && (u = u[1], a = a[1]), i[0][1] = u, i[1][1] = a, c.invert && (u = c(u), a = c(a)), u > a && (l = u, u = a, a = l), h[0][1] = 0 | u, h[1][1] = 0 | a), n) : (t = i || h, o && (e = t[0][0], r = t[1][0], i || (e = h[0][0], r = h[1][0], o.invert && (e = o.invert(e), r = o.invert(r)), e > r && (l = e, e = r, r = l))), c && (u = t[0][1], a = t[1][1], i || (u = h[0][1], a = h[1][1], c.invert && (u = c.invert(u), a = c.invert(a)), u > a && (l = u, u = a, a = l))), o && c ? [[e, u], [r, a]] : o ? [e, r] : c && [u, a])
    },
    n.clear = function() {
      return i = null,
      h[0][0] = h[0][1] = h[1][0] = h[1][1] = 0,
      n
    },
    n.empty = function() {
      return o && h[0][0] === h[1][0] || c && h[0][1] === h[1][1]
    },
    oa.rebind(n, a, "on")
  };
  var fc = {
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  },
  sc = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []];
  oa.time = {};
  var hc = Date,
  gc = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  wi.prototype = {
    getDate: function() {
      return this._.getUTCDate()
    },
    getDay: function() {
      return this._.getUTCDay()
    },
    getFullYear: function() {
      return this._.getUTCFullYear()
    },
    getHours: function() {
      return this._.getUTCHours()
    },
    getMilliseconds: function() {
      return this._.getUTCMilliseconds()
    },
    getMinutes: function() {
      return this._.getUTCMinutes()
    },
    getMonth: function() {
      return this._.getUTCMonth()
    },
    getSeconds: function() {
      return this._.getUTCSeconds()
    },
    getTime: function() {
      return this._.getTime()
    },
    getTimezoneOffset: function() {
      return 0
    },
    valueOf: function() {
      return this._.valueOf()
    },
    setDate: function() {
      pc.setUTCDate.apply(this._, arguments)
    },
    setDay: function() {
      pc.setUTCDay.apply(this._, arguments)
    },
    setFullYear: function() {
      pc.setUTCFullYear.apply(this._, arguments)
    },
    setHours: function() {
      pc.setUTCHours.apply(this._, arguments)
    },
    setMilliseconds: function() {
      pc.setUTCMilliseconds.apply(this._, arguments)
    },
    setMinutes: function() {
      pc.setUTCMinutes.apply(this._, arguments)
    },
    setMonth: function() {
      pc.setUTCMonth.apply(this._, arguments)
    },
    setSeconds: function() {
      pc.setUTCSeconds.apply(this._, arguments)
    },
    setTime: function() {
      pc.setTime.apply(this._, arguments)
    }
  };
  var pc = Date.prototype,
  dc = "%a %b %e %X %Y",
  mc = "%m/%d/%Y",
  vc = "%H:%M:%S",
  yc = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  Mc = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  xc = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  bc = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  oa.time.year = Si(function(n) {
    return n = oa.time.day(n),
    n.setMonth(0, 1),
    n
  },
  function(n, t) {
    n.setFullYear(n.getFullYear() + t)
  },
  function(n) {
    return n.getFullYear()
  }),
  oa.time.years = oa.time.year.range,
  oa.time.years.utc = oa.time.year.utc.range,
  oa.time.day = Si(function(n) {
    var t = new hc(1970, 0);
    return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()),
    t
  },
  function(n, t) {
    n.setDate(n.getDate() + t)
  },
  function(n) {
    return n.getDate() - 1
  }),
  oa.time.days = oa.time.day.range,
  oa.time.days.utc = oa.time.day.utc.range,
  oa.time.dayOfYear = function(n) {
    var t = oa.time.year(n);
    return Math.floor((n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 864e5)
  },
  gc.forEach(function(n, t) {
    n = n.toLowerCase(),
    t = 7 - t;
    var e = oa.time[n] = Si(function(n) {
      return (n = oa.time.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7),
      n
    },
    function(n, t) {
      n.setDate(n.getDate() + Math.floor(t) * 7)
    },
    function(n) {
      var e = oa.time.year(n).getDay();
      return Math.floor((oa.time.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t)
    });
    oa.time[n + "s"] = e.range,
    oa.time[n + "s"].utc = e.utc.range,
    oa.time[n + "OfYear"] = function(n) {
      var e = oa.time.year(n).getDay();
      return Math.floor((oa.time.dayOfYear(n) + (e + t) % 7) / 7)
    }
  }),
  oa.time.week = oa.time.sunday,
  oa.time.weeks = oa.time.sunday.range,
  oa.time.weeks.utc = oa.time.sunday.utc.range,
  oa.time.weekOfYear = oa.time.sundayOfYear,
  oa.time.format = function(n) {
    function t(t) {
      for (var r, u, i, a = [], o = -1, c = 0; ++o < e;) n.charCodeAt(o) === 37 && (a.push(n.substring(c, o)), (u = qc[r = n.charAt(++o)]) != null && (r = n.charAt(++o)), (i = Nc[r]) && (r = i(t, null == u ? "e" === r ? " ": "0": u)), a.push(r), c = o + 1);
      return a.push(n.substring(c, o)),
      a.join("")
    }
    var e = n.length;
    return t.parse = function(t) {
      var e = {
        y: 1900,
        m: 0,
        d: 1,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      },
      r = ki(e, n, t, 0);
      if (r != t.length) return null;
      "p" in e && (e.H = e.H % 12 + e.p * 12);
      var u = new hc;
      return u.setFullYear(e.y, e.m, e.d),
      u.setHours(e.H, e.M, e.S, e.L),
      u
    },
    t.toString = function() {
      return n
    },
    t
  };
  var _c = Ai(yc),
  wc = Ai(Mc),
  Sc = Ai(xc),
  Ec = qi(xc),
  kc = Ai(bc),
  Ac = qi(bc),
  qc = {
    "-": "",
    _: " ",
    0 : "0"
  },
  Nc = {
    a: function(n) {
      return Mc[n.getDay()]
    },
    A: function(n) {
      return yc[n.getDay()]
    },
    b: function(n) {
      return bc[n.getMonth()]
    },
    B: function(n) {
      return xc[n.getMonth()]
    },
    c: oa.time.format(dc),
    d: function(n, t) {
      return Ni(n.getDate(), t, 2)
    },
    e: function(n, t) {
      return Ni(n.getDate(), t, 2)
    },
    H: function(n, t) {
      return Ni(n.getHours(), t, 2)
    },
    I: function(n, t) {
      return Ni(n.getHours() % 12 || 12, t, 2)
    },
    j: function(n, t) {
      return Ni(1 + oa.time.dayOfYear(n), t, 3)
    },
    L: function(n, t) {
      return Ni(n.getMilliseconds(), t, 3)
    },
    m: function(n, t) {
      return Ni(n.getMonth() + 1, t, 2)
    },
    M: function(n, t) {
      return Ni(n.getMinutes(), t, 2)
    },
    p: function(n) {
      return n.getHours() >= 12 ? "PM": "AM"
    },
    S: function(n, t) {
      return Ni(n.getSeconds(), t, 2)
    },
    U: function(n, t) {
      return Ni(oa.time.sundayOfYear(n), t, 2)
    },
    w: function(n) {
      return n.getDay()
    },
    W: function(n, t) {
      return Ni(oa.time.mondayOfYear(n), t, 2)
    },
    x: oa.time.format(mc),
    X: oa.time.format(vc),
    y: function(n, t) {
      return Ni(n.getFullYear() % 100, t, 2)
    },
    Y: function(n, t) {
      return Ni(n.getFullYear() % 1e4, t, 4)
    },
    Z: Bi,
    "%": function() {
      return "%"
    }
  },
  Tc = {
    a: Ti,
    A: Ci,
    b: zi,
    B: Di,
    c: ji,
    d: Yi,
    e: Yi,
    H: Ui,
    I: Ui,
    L: Xi,
    m: Oi,
    M: Ii,
    p: Zi,
    S: Vi,
    x: Li,
    X: Fi,
    y: Pi,
    Y: Hi
  },
  Cc = /^\s*\d+/,
  zc = oa.map({
    am: 0,
    pm: 1
  });
  oa.time.format.utc = function(n) {
    function t(n) {
      try {
        hc = wi;
        var t = new hc;
        return t._ = n,
        e(t)
      } finally {
        hc = Date
      }
    }
    var e = oa.time.format(n);
    return t.parse = function(n) {
      try {
        hc = wi;
        var t = e.parse(n);
        return t && t._
      } finally {
        hc = Date
      }
    },
    t.toString = e.toString,
    t
  };
  var Dc = oa.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");
  oa.time.format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? $i: Dc,
  $i.parse = function(n) {
    var t = new Date(n);
    return isNaN(t) ? null: t
  },
  $i.toString = Dc.toString,
  oa.time.second = Si(function(n) {
    return new hc(Math.floor(n / 1e3) * 1e3)
  },
  function(n, t) {
    n.setTime(n.getTime() + Math.floor(t) * 1e3)
  },
  function(n) {
    return n.getSeconds()
  }),
  oa.time.seconds = oa.time.second.range,
  oa.time.seconds.utc = oa.time.second.utc.range,
  oa.time.minute = Si(function(n) {
    return new hc(Math.floor(n / 6e4) * 6e4)
  },
  function(n, t) {
    n.setTime(n.getTime() + Math.floor(t) * 6e4)
  },
  function(n) {
    return n.getMinutes()
  }),
  oa.time.minutes = oa.time.minute.range,
  oa.time.minutes.utc = oa.time.minute.utc.range,
  oa.time.hour = Si(function(n) {
    var t = n.getTimezoneOffset() / 60;
    return new hc((Math.floor(n / 36e5 - t) + t) * 36e5)
  },
  function(n, t) {
    n.setTime(n.getTime() + Math.floor(t) * 36e5)
  },
  function(n) {
    return n.getHours()
  }),
  oa.time.hours = oa.time.hour.range,
  oa.time.hours.utc = oa.time.hour.utc.range,
  oa.time.month = Si(function(n) {
    return n = oa.time.day(n),
    n.setDate(1),
    n
  },
  function(n, t) {
    n.setMonth(n.getMonth() + t)
  },
  function(n) {
    return n.getMonth()
  }),
  oa.time.months = oa.time.month.range,
  oa.time.months.utc = oa.time.month.utc.range;
  var jc = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
  Lc = [[oa.time.second, 1], [oa.time.second, 5], [oa.time.second, 15], [oa.time.second, 30], [oa.time.minute, 1], [oa.time.minute, 5], [oa.time.minute, 15], [oa.time.minute, 30], [oa.time.hour, 1], [oa.time.hour, 3], [oa.time.hour, 6], [oa.time.hour, 12], [oa.time.day, 1], [oa.time.day, 2], [oa.time.week, 1], [oa.time.month, 1], [oa.time.month, 3], [oa.time.year, 1]],
  Fc = [[oa.time.format("%Y"), Dt], [oa.time.format("%B"),
  function(n) {
    return n.getMonth()
  }], [oa.time.format("%b %d"),
  function(n) {
    return n.getDate() != 1
  }], [oa.time.format("%a %d"),
  function(n) {
    return n.getDay() && n.getDate() != 1
  }], [oa.time.format("%I %p"),
  function(n) {
    return n.getHours()
  }], [oa.time.format("%I:%M"),
  function(n) {
    return n.getMinutes()
  }], [oa.time.format(":%S"),
  function(n) {
    return n.getSeconds()
  }], [oa.time.format(".%L"),
  function(n) {
    return n.getMilliseconds()
  }]],
  Hc = oa.scale.linear(),
  Pc = Wi(Fc);
  Lc.year = function(n, t) {
    return Hc.domain(n.map(na)).ticks(t).map(Qi)
  },
  oa.time.scale = function() {
    return Ji(oa.scale.linear(), Lc, Pc)
  };
  var Rc = Lc.map(function(n) {
    return [n[0].utc, n[1]]
  }),
  Oc = [[oa.time.format.utc("%Y"), Dt], [oa.time.format.utc("%B"),
  function(n) {
    return n.getUTCMonth()
  }], [oa.time.format.utc("%b %d"),
  function(n) {
    return n.getUTCDate() != 1
  }], [oa.time.format.utc("%a %d"),
  function(n) {
    return n.getUTCDay() && n.getUTCDate() != 1
  }], [oa.time.format.utc("%I %p"),
  function(n) {
    return n.getUTCHours()
  }], [oa.time.format.utc("%I:%M"),
  function(n) {
    return n.getUTCMinutes()
  }], [oa.time.format.utc(":%S"),
  function(n) {
    return n.getUTCSeconds()
  }], [oa.time.format.utc(".%L"),
  function(n) {
    return n.getUTCMilliseconds()
  }]],
  Yc = Wi(Oc);
  return Rc.year = function(n, t) {
    return Hc.domain(n.map(ea)).ticks(t).map(ta)
  },
  oa.time.scale.utc = function() {
    return Ji(oa.scale.linear(), Rc, Yc)
  },
  oa.text = function() {
    return oa.xhr.apply(oa, arguments).response(ra)
  },
  oa.json = function(n, t) {
    return oa.xhr(n, "application/json", t).response(ua)
  },
  oa.html = function(n, t) {
    return oa.xhr(n, "text/html", t).response(ia)
  },
  oa.xml = function() {
    return oa.xhr.apply(oa, arguments).response(aa)
  },
  oa
} (); (function() {
  var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) {
    for (var key in parent) {
      if (__hasProp.call(parent, key)) child[key] = parent[key]
    }
    function ctor() {
      this.constructor = child
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child
  };
  this.InlineDiscussion = function(_super) {
    __extends(InlineDiscussion, _super);
    function InlineDiscussion(element) {
      this.el = $(element).find(".discussion-module");
      this.view = new DiscussionModuleView({
        el: this.el
      })
    }
    return InlineDiscussion
  } (XModule.Descriptor)
}).call(this); (function(undefined) {
  "use strict";
  this.Collapsible = {
    setCollapsibles: setCollapsibles,
    toggleFull: toggleFull,
    toggleHint: toggleHint
  };
  return;
  function setCollapsibles(el) {
    var linkBottom, linkTop, short_custom;
    linkTop = '<a href="#" class="full full-top">See full output</a>';
    linkBottom = '<a href="#" class="full full-bottom">See full output</a>';
    el.find(".longform").hide();
    el.find(".shortform").append(linkTop, linkBottom);
    short_custom = el.find(".shortform-custom");
    short_custom.each(function(index, elt) {
      var close_text, open_text;
      open_text = $(elt).data("open-text");
      close_text = $(elt).data("close-text");
      $(elt).append("<a href='#' class='full-custom'>" + open_text + "</a>");
      $(elt).find(".full-custom").click(function(event) {
        Collapsible.toggleFull(event, open_text, close_text)
      })
    });
    el.find(".collapsible header + section").hide();
    el.find(".full").click(function(event) {
      Collapsible.toggleFull(event, "See full output", "Hide output")
    });
    el.find(".collapsible header a").click(Collapsible.toggleHint)
  }
  function toggleFull(event, open_text, close_text) {
    var el, new_text, parent;
    event.preventDefault();
    parent = $(event.target).parent();
    parent.siblings().slideToggle();
    parent.parent().toggleClass("open");
    if ($(event.target).text() === open_text) {
      new_text = close_text
    } else {
      new_text = open_text
    }
    if ($(event.target).hasClass("full")) {
      el = parent.find(".full")
    } else {
      el = $(event.target)
    }
    el.text(new_text)
  }
  function toggleHint(event) {
    event.preventDefault();
    $(event.target).parent().siblings().slideToggle();
    $(event.target).parent().parent().toggleClass("open")
  }
}).call(this); (function(define) {
  "use strict";
  define("video/00_component.js", [],
  function() {
    var inherit = Object.create ||
    function() {
      var F = function() {};
      return function(o) {
        if (arguments.length > 1) {
          throw Error("Second argument not supported")
        }
        if (_.isNull(o) || _.isUndefined(o)) {
          throw Error("Cannot set a null [[Prototype]]")
        }
        if (!_.isObject(o)) {
          throw TypeError("Argument must be an object")
        }
        F.prototype = o;
        return new F
      }
    } ();
    var Component = function() {
      if ($.isFunction(this.initialize)) {
        return this.initialize.apply(this, arguments)
      }
    };
    Component.extend = function(protoProps, staticProps) {
      var Parent = this,
      Child = function() {
        if ($.isFunction(this.initialize)) {
          return this.initialize.apply(this, arguments)
        }
      };
      Child.prototype = inherit(Parent.prototype);
      Child.constructor = Parent;
      Child.__super__ = Parent.prototype;
      if (protoProps) {
        $.extend(Child.prototype, protoProps)
      }
      $.extend(Child, Parent, staticProps);
      return Child
    };
    return Component
  })
})(RequireJS.define); (function() {
  this.JavascriptLoader = function() {
    function JavascriptLoader() {}
    JavascriptLoader.executeModuleScripts = function(el, callback) {
      var callbackCalled, completed, completionHandlerGenerator, completionHandlerGeneratorIE, i, loaded, placeholders, _this = this;
      if (callback == null) {
        callback = null
      }
      placeholders = el.find(".script_placeholder");
      if (placeholders.length === 0) {
        if (callback != null) {
          callback()
        }
        return
      }
      completed = function() {
        var _i, _ref, _results;
        _results = [];
        for (i = _i = 1, _ref = placeholders.length; 1 <= _ref ? _i <= _ref: _i >= _ref; i = 1 <= _ref ? ++_i: --_i) {
          _results.push(false)
        }
        return _results
      } ();
      callbackCalled = false;
      completionHandlerGeneratorIE = function(index) {
        return function() {
          if (this.readyState === "complete" || this.readyState === "loaded") {
            return completionHandlerGenerator(index)()
          }
        }
      };
      completionHandlerGenerator = function(index) {
        return function() {
          var allComplete, flag, _i, _len;
          allComplete = true;
          completed[index] = true;
          for (_i = 0, _len = completed.length; _i < _len; _i++) {
            flag = completed[_i];
            if (!flag) {
              allComplete = false;
              break
            }
          }
          if (allComplete && !callbackCalled) {
            callbackCalled = true;
            if (callback != null) {
              return callback()
            }
          }
        }
      };
      loaded = {};
      return placeholders.each(function(index, placeholder) {
        var s, src;
        src = $(placeholder).attr("data-src");
        if (! (src in loaded)) {
          loaded[src] = true;
          s = document.createElement("script");
          s.setAttribute("src", src);
          s.setAttribute("type", "text/javascript");
          s.onload = completionHandlerGenerator(index);
          s.onreadystatechange = completionHandlerGeneratorIE(index);
          $("head")[0].appendChild(s)
        } else {
          completionHandlerGenerator(index)()
        }
        return $(placeholder).remove()
      })
    };
    return JavascriptLoader
  } ()
}).call(this);
var setupFullScreenModal = function() {
  $("a.modal-content").each(function() {
    var smallImageObject = $(this).children();
    var largeImageSRC = $(this).attr("href");
    if (smallImageObject.is("img") && largeImageSRC) {
      var data = {
        smallHTML: $(this).html(),
        largeALT: smallImageObject.attr("alt"),
        largeSRC: largeImageSRC
      };
      var html = _.template($("#image-modal-tpl").text(), data);
      $(this).replaceWith(html)
    }
  });
  $(".wrapper-modal-image .image-wrapper img").each(function() {
    var draggie = new Draggabilly(this, {
      containment: true
    });
    draggie.disable();
    $(this).closest(".image-modal").data("draggie", draggie)
  });
  $(".wrapper-modal-image .image-link").click(function() {
    $(this).siblings(".image-modal").addClass("image-is-fit-to-screen");
    $("body").css("overflow", "hidden")
  });
  var imageModalImageHover = false;
  $(".wrapper-modal-image .image-content img, .wrapper-modal-image .image-content .image-controls").hover(function() {
    imageModalImageHover = true
  },
  function() {
    imageModalImageHover = false
  });
  $(".modal-ui-icon").click(function(event) {
    event.preventDefault()
  });
  function closeModal(imageModal) {
    imageModal.removeClass("image-is-fit-to-screen").removeClass("image-is-zoomed");
    $(".wrapper-modal-image .image-content .image-controls .modal-ui-icon.action-zoom-in").removeClass("is-disabled").attr("aria-disabled", false);
    $(".wrapper-modal-image .image-content .image-controls .modal-ui-icon.action-zoom-out").addClass("is-disabled").attr("aria-disabled", true);
    var currentDraggie = imageModal.data("draggie");
    currentDraggie.disable();
    $("body").css("overflow", "auto")
  }
  $(".wrapper-modal-image .image-modal").click(function() {
    if (!imageModalImageHover) {
      closeModal($(this))
    }
  });
  $(".wrapper-modal-image .image-content .action-remove").click(function() {
    closeModal($(this).closest(".image-modal"))
  });
  $(".wrapper-modal-image .image-content .image-controls .modal-ui-icon").click(function() {
    if (!$(this).hasClass("is-disabled")) {
      var mask = $(this).closest(".image-content");
      var imageModal = $(this).closest(".image-modal");
      var img = imageModal.find("img");
      var currentDraggie = imageModal.data("draggie");
      if ($(this).hasClass("action-zoom-in")) {
        imageModal.removeClass("image-is-fit-to-screen").addClass("image-is-zoomed");
        var imgWidth = img.width();
        var imgHeight = img.height();
        var imgContainerOffsetLeft = imgWidth - mask.width();
        var imgContainerOffsetTop = imgHeight - mask.height();
        var imgContainerWidth = imgWidth + imgContainerOffsetLeft;
        var imgContainerHeight = imgHeight + imgContainerOffsetTop;
        img.parent().css({
          left: -imgContainerOffsetLeft,
          top: -imgContainerOffsetTop,
          width: imgContainerWidth,
          height: imgContainerHeight
        });
        img.css({
          top: imgContainerOffsetTop / 2,
          left: imgContainerOffsetLeft / 2
        });
        currentDraggie.enable()
      } else if ($(this).hasClass("action-zoom-out")) {
        imageModal.removeClass("image-is-zoomed").addClass("image-is-fit-to-screen");
        currentDraggie.disable()
      }
      $(".wrapper-modal-image .image-content .image-controls .modal-ui-icon").toggleClass("is-disabled").attr("aria-disabled", $(this).hasClass("is-disabled"))
    }
  })
}; (function() {
  this.Conditional = function() {
    function Conditional(element, callerElId) {
      var dependencies;
      this.el = $(element).find(".conditional-wrapper");
      this.callerElId = callerElId;
      if (callerElId !== void 0) {
        dependencies = this.el.data("depends");
        if (typeof dependencies === "string" && dependencies.length > 0 && dependencies.indexOf(callerElId) === -1) {
          return
        }
      }
      this.url = this.el.data("url");
      this.render(element)
    }
    Conditional.prototype.render = function(element) {
      var _this = this;
      return $.postWithPrefix("" + this.url + "/conditional_get",
      function(response) {
        var i, parentEl, parentId, _i, _len, _ref;
        _this.el.html("");
        _ref = response.html;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          i = _ref[_i];
          _this.el.append(i)
        }
        parentEl = $(element).parent();
        parentId = parentEl.attr("id");
        if (response.message === false) {
          if (parentEl.hasClass("vert")) {
            parentEl.hide()
          } else {
            $(element).hide()
          }
        } else {
          if (parentEl.hasClass("vert")) {
            parentEl.show()
          } else {
            $(element).show()
          }
        }
        return XBlock.initializeBlocks(_this.el)
      })
    };
    return Conditional
  } ()
}).call(this); (function(requirejs, require, define) {
  define("video/00_video_storage.js", [],
  function() {
    "use strict";
    var VideoStorage = function(namespace, id) {
      var setItem = function(name, value, instanceSpecific) {
        if (name) {
          if (instanceSpecific) {
            window[namespace][id][name] = value
          } else {
            window[namespace][name] = value
          }
        }
      };
      var getItem = function(name, instanceSpecific) {
        if (instanceSpecific) {
          return window[namespace][id][name]
        } else {
          return window[namespace][name]
        }
      };
      var removeItem = function(name, instanceSpecific) {
        if (instanceSpecific) {
          delete window[namespace][id][name]
        } else {
          delete window[namespace][name]
        }
      };
      var clear = function() {
        window[namespace] = {};
        window[namespace][id] = {}
      }; (function initialize() {
        if (!namespace) {
          namespace = "VideoStorage"
        }
        if (!id) {
          id = Math.random().toString(36).slice(2)
        }
        window[namespace] = window[namespace] || {};
        window[namespace][id] = window[namespace][id] || {}
      })();
      return {
        clear: clear,
        getItem: getItem,
        removeItem: removeItem,
        setItem: setItem
      }
    };
    return VideoStorage
  })
})(RequireJS.requirejs, RequireJS.require, RequireJS.define); (function() {
  this.HTMLModule = function() {
    function HTMLModule(element) {
      this.element = element;
      this.el = $(this.element);
      JavascriptLoader.executeModuleScripts(this.el);
      Collapsible.setCollapsibles(this.el);
      if (typeof MathJax !== "undefined" && MathJax !== null) {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.el[0]])
      }
      if (typeof setupFullScreenModal !== "undefined" && setupFullScreenModal !== null) {
        setupFullScreenModal()
      }
    }
    HTMLModule.prototype.$ = function(selector) {
      return $(selector, this.el)
    };
    return HTMLModule
  } ()
}).call(this); (function(exports) {
  function cloud() {
    var size = [256, 256],
    text = cloudText,
    font = cloudFont,
    fontSize = cloudFontSize,
    fontStyle = cloudFontNormal,
    fontWeight = cloudFontNormal,
    rotate = cloudRotate,
    padding = cloudPadding,
    spiral = archimedeanSpiral,
    words = [],
    timeInterval = Infinity,
    event = d3.dispatch("word", "end"),
    timer = null,
    cloud = {};
    cloud.start = function() {
      var board = zeroArray((size[0] >> 5) * size[1]),
      bounds = null,
      n = words.length,
      i = -1,
      tags = [],
      data = words.map(function(d, i) {
        d.text = text.call(this, d, i);
        d.font = font.call(this, d, i);
        d.style = fontStyle.call(this, d, i);
        d.weight = fontWeight.call(this, d, i);
        d.rotate = rotate.call(this, d, i);
        d.size = ~~fontSize.call(this, d, i);
        d.padding = cloudPadding.call(this, d, i);
        return d
      }).sort(function(a, b) {
        return b.size - a.size
      });
      if (timer) clearInterval(timer);
      timer = setInterval(step, 0);
      step();
      return cloud;
      function step() {
        var start = +new Date,
        d;
        while ( + new Date - start < timeInterval && ++i < n && timer) {
          d = data[i];
          d.x = size[0] * (Math.random() + .5) >> 1;
          d.y = size[1] * (Math.random() + .5) >> 1;
          cloudSprite(d, data, i);
          if (place(board, d, bounds)) {
            tags.push(d);
            event.word(d);
            if (bounds) cloudBounds(bounds, d);
            else bounds = [{
              x: d.x + d.x0,
              y: d.y + d.y0
            },
            {
              x: d.x + d.x1,
              y: d.y + d.y1
            }];
            d.x -= size[0] >> 1;
            d.y -= size[1] >> 1
          }
        }
        if (i >= n) {
          cloud.stop();
          event.end(tags, bounds)
        }
      }
    };
    cloud.stop = function() {
      if (timer) {
        clearInterval(timer);
        timer = null
      }
      return cloud
    };
    cloud.timeInterval = function(x) {
      if (!arguments.length) return timeInterval;
      timeInterval = x == null ? Infinity: x;
      return cloud
    };
    function place(board, tag, bounds) {
      var perimeter = [{
        x: 0,
        y: 0
      },
      {
        x: size[0],
        y: size[1]
      }],
      startX = tag.x,
      startY = tag.y,
      maxDelta = Math.sqrt(size[0] * size[0] + size[1] * size[1]),
      s = spiral(size),
      dt = Math.random() < .5 ? 1 : -1,
      t = -dt,
      dxdy,
      dx,
      dy;
      while (dxdy = s(t += dt)) {
        dx = ~~dxdy[0];
        dy = ~~dxdy[1];
        if (Math.min(dx, dy) > maxDelta) break;
        tag.x = startX + dx;
        tag.y = startY + dy;
        if (tag.x + tag.x0 < 0 || tag.y + tag.y0 < 0 || tag.x + tag.x1 > size[0] || tag.y + tag.y1 > size[1]) continue;
        if (!bounds || !cloudCollide(tag, board, size[0])) {
          if (!bounds || collideRects(tag, bounds)) {
            var sprite = tag.sprite,
            w = tag.width >> 5,
            sw = size[0] >> 5,
            lx = tag.x - (w << 4),
            sx = lx & 127,
            msx = 32 - sx,
            h = tag.y1 - tag.y0,
            x = (tag.y + tag.y0) * sw + (lx >> 5),
            last;
            for (var j = 0; j < h; j++) {
              last = 0;
              for (var i = 0; i <= w; i++) {
                board[x + i] |= last << msx | (i < w ? (last = sprite[j * w + i]) >>> sx: 0)
              }
              x += sw
            }
            delete tag.sprite;
            return true
          }
        }
      }
      return false
    }
    cloud.words = function(x) {
      if (!arguments.length) return words;
      words = x;
      return cloud
    };
    cloud.size = function(x) {
      if (!arguments.length) return size;
      size = [ + x[0], +x[1]];
      return cloud
    };
    cloud.font = function(x) {
      if (!arguments.length) return font;
      font = d3.functor(x);
      return cloud
    };
    cloud.fontStyle = function(x) {
      if (!arguments.length) return fontStyle;
      fontStyle = d3.functor(x);
      return cloud
    };
    cloud.fontWeight = function(x) {
      if (!arguments.length) return fontWeight;
      fontWeight = d3.functor(x);
      return cloud
    };
    cloud.rotate = function(x) {
      if (!arguments.length) return rotate;
      rotate = d3.functor(x);
      return cloud
    };
    cloud.text = function(x) {
      if (!arguments.length) return text;
      text = d3.functor(x);
      return cloud
    };
    cloud.spiral = function(x) {
      if (!arguments.length) return spiral;
      spiral = spirals[x + ""] || x;
      return cloud
    };
    cloud.fontSize = function(x) {
      if (!arguments.length) return fontSize;
      fontSize = d3.functor(x);
      return cloud
    };
    cloud.padding = function(x) {
      if (!arguments.length) return padding;
      padding = d3.functor(x);
      return cloud
    };
    return d3.rebind(cloud, event, "on")
  }
  function cloudText(d) {
    return d.text
  }
  function cloudFont() {
    return "serif"
  }
  function cloudFontNormal() {
    return "normal"
  }
  function cloudFontSize(d) {
    return Math.sqrt(d.value)
  }
  function cloudRotate() {
    return (~~ (Math.random() * 6) - 3) * 30
  }
  function cloudPadding() {
    return 1
  }
  function cloudSprite(d, data, di) {
    if (d.sprite) return;
    c.clearRect(0, 0, (cw << 5) / ratio, ch / ratio);
    var x = 0,
    y = 0,
    maxh = 0,
    n = data.length;
    di--;
    while (++di < n) {
      d = data[di];
      c.save();
      c.font = d.style + " " + d.weight + " " + ~~ ((d.size + 1) / ratio) + "px " + d.font;
      var w = c.measureText(d.text + "m").width * ratio,
      h = d.size << 1;
      if (d.rotate) {
        var sr = Math.sin(d.rotate * cloudRadians),
        cr = Math.cos(d.rotate * cloudRadians),
        wcr = w * cr,
        wsr = w * sr,
        hcr = h * cr,
        hsr = h * sr;
        w = Math.max(Math.abs(wcr + hsr), Math.abs(wcr - hsr)) + 31 >> 5 << 5;
        h = ~~Math.max(Math.abs(wsr + hcr), Math.abs(wsr - hcr))
      } else {
        w = w + 31 >> 5 << 5
      }
      if (h > maxh) maxh = h;
      if (x + w >= cw << 5) {
        x = 0;
        y += maxh;
        maxh = 0
      }
      if (y + h >= ch) break;
      c.translate((x + (w >> 1)) / ratio, (y + (h >> 1)) / ratio);
      if (d.rotate) c.rotate(d.rotate * cloudRadians);
      c.fillText(d.text, 0, 0);
      c.restore();
      d.width = w;
      d.height = h;
      d.xoff = x;
      d.yoff = y;
      d.x1 = w >> 1;
      d.y1 = h >> 1;
      d.x0 = -d.x1;
      d.y0 = -d.y1;
      x += w
    }
    var pixels = c.getImageData(0, 0, (cw << 5) / ratio, ch / ratio).data,
    sprite = [];
    while (--di >= 0) {
      d = data[di];
      var w = d.width,
      w32 = w >> 5,
      h = d.y1 - d.y0,
      p = d.padding;
      for (var i = 0; i < h * w32; i++) sprite[i] = 0;
      x = d.xoff;
      if (x == null) return;
      y = d.yoff;
      var seen = 0,
      seenRow = -1;
      for (var j = 0; j < h; j++) {
        for (var i = 0; i < w; i++) {
          var k = w32 * j + (i >> 5),
          m = pixels[(y + j) * (cw << 5) + (x + i) << 2] ? 1 << 31 - i % 32 : 0;
          if (p) {
            if (j) sprite[k - w32] |= m;
            if (j < w - 1) sprite[k + w32] |= m;
            m |= m << 1 | m >> 1
          }
          sprite[k] |= m;
          seen |= m
        }
        if (seen) seenRow = j;
        else {
          d.y0++;
          h--;
          j--;
          y++
        }
      }
      d.y1 = d.y0 + seenRow;
      d.sprite = sprite.slice(0, (d.y1 - d.y0) * w32)
    }
  }
  function cloudCollide(tag, board, sw) {
    sw >>= 5;
    var sprite = tag.sprite,
    w = tag.width >> 5,
    lx = tag.x - (w << 4),
    sx = lx & 127,
    msx = 32 - sx,
    h = tag.y1 - tag.y0,
    x = (tag.y + tag.y0) * sw + (lx >> 5),
    last;
    for (var j = 0; j < h; j++) {
      last = 0;
      for (var i = 0; i <= w; i++) {
        if ((last << msx | (i < w ? (last = sprite[j * w + i]) >>> sx: 0)) & board[x + i]) return true
      }
      x += sw
    }
    return false
  }
  function cloudBounds(bounds, d) {
    var b0 = bounds[0],
    b1 = bounds[1];
    if (d.x + d.x0 < b0.x) b0.x = d.x + d.x0;
    if (d.y + d.y0 < b0.y) b0.y = d.y + d.y0;
    if (d.x + d.x1 > b1.x) b1.x = d.x + d.x1;
    if (d.y + d.y1 > b1.y) b1.y = d.y + d.y1
  }
  function collideRects(a, b) {
    return a.x + a.x1 > b[0].x && a.x + a.x0 < b[1].x && a.y + a.y1 > b[0].y && a.y + a.y0 < b[1].y
  }
  function archimedeanSpiral(size) {
    var e = size[0] / size[1];
    return function(t) {
      return [e * (t *= .1) * Math.cos(t), t * Math.sin(t)]
    }
  }
  function rectangularSpiral(size) {
    var dy = 4,
    dx = dy * size[0] / size[1],
    x = 0,
    y = 0;
    return function(t) {
      var sign = t < 0 ? -1 : 1;
      switch (Math.sqrt(1 + 4 * sign * t) - sign & 3) {
      case 0:
        x += dx;
        break;
      case 1:
        y += dy;
        break;
      case 2:
        x -= dx;
        break;
      default:
        y -= dy;
        break
      }
      return [x, y]
    }
  }
  function zeroArray(n) {
    var a = [],
    i = -1;
    while (++i < n) a[i] = 0;
    return a
  }
  var cloudRadians = Math.PI / 180,
  cw = 1 << 11 >> 5,
  ch = 1 << 11,
  canvas, ratio = 1;
  if (typeof document !== "undefined") {
    canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    ratio = Math.sqrt(canvas.getContext("2d").getImageData(0, 0, 1, 1).data.length >> 2);
    canvas.width = (cw << 5) / ratio;
    canvas.height = ch / ratio
  } else {
    var Canvas = require("canvas");
    canvas = new Canvas(cw << 5, ch)
  }
  var c = canvas.getContext("2d"),
  spirals = {
    archimedean: archimedeanSpiral,
    rectangular: rectangularSpiral
  };
  c.fillStyle = "red";
  c.textAlign = "center";
  exports.cloud = cloud
})(typeof exports === "undefined" ? d3.layout || (d3.layout = {}) : exports); (function(requirejs, require, define) {
  define("PollMain", [],
  function() {
    PollMain.prototype = {
      showAnswerGraph: function(poll_answers, total) {
        var _this, totalValue;
        totalValue = parseFloat(total);
        if (isFinite(totalValue) === false) {
          return
        }
        _this = this;
        $.each(poll_answers,
        function(index, value) {
          var numValue, percentValue;
          numValue = parseFloat(value);
          if (isFinite(numValue) === false) {
            return
          }
          percentValue = numValue / totalValue * 100;
          _this.answersObj[index].statsEl.show();
          _this.answersObj[index].numberEl.html("" + value + " (" + percentValue.toFixed(1) + "%)");
          _this.answersObj[index].percentEl.css({
            width: "" + percentValue.toFixed(1) + "%"
          })
        })
      },
      submitAnswer: function(answer, answerObj) {
        var _this;
        if (this.questionAnswered === true) {
          return
        }
        this.questionAnswered = true;
        _this = this;
        console.log("submit answer");
        answerObj.buttonEl.addClass("answered");
        $.postWithPrefix(_this.ajax_url + "/" + answer, {},
        function(response) {
          console.log("success! response = ");
          console.log(response);
          _this.showAnswerGraph(response.poll_answers, response.total);
          if (_this.canReset === true) {
            _this.resetButton.show()
          }
          if (_this.wrapperSectionEl !== null) {
            $(_this.wrapperSectionEl).find(".xmodule_ConditionalModule").each(function(index, value) {
              new window.Conditional(value, _this.id.replace(/^poll_/, ""))
            })
          }
        })
      },
      submitReset: function() {
        var _this;
        _this = this;
        console.log("submit reset");
        $.postWithPrefix(this.ajax_url + "/" + "reset_poll", {},
        function(response) {
          console.log("success! response = ");
          console.log(response);
          if (response.hasOwnProperty("status") !== true || typeof response.status !== "string" || response.status.toLowerCase() !== "success") {
            return
          }
          _this.questionAnswered = false;
          _this.questionEl.find(".button.answered").removeClass("answered");
          _this.questionEl.find(".stats").hide();
          _this.resetButton.hide();
          if (_this.wrapperSectionEl !== null) {
            $(_this.wrapperSectionEl).find(".xmodule_ConditionalModule").each(function(index, value) {
              new window.Conditional(value, _this.id.replace(/^poll_/, ""))
            })
          }
        })
      },
      postInit: function() {
        var _this;
        _this = this;
        if (this.jsonConfig.poll_answer.length > 0 && this.jsonConfig.answers.hasOwnProperty(this.jsonConfig.poll_answer) === false) {
          this.questionEl.append("<h3>Error!</h3>" + "<p>XML data format changed. List of answers was modified, but poll data was not updated.</p>");
          return
        }
        this.id = this.questionEl.attr("id");
        this.ajax_url = this.questionEl.data("ajax-url");
        this.questionHtmlMarkup = $("<div />").html(this.jsonConfig.question).text();
        this.questionEl.append(this.questionHtmlMarkup);
        this.questionAnswered = false;
        this.answersObj = {};
        this.shortVersion = true;
        $.each(this.jsonConfig.answers,
        function(index, value) {
          if (value.length >= 18) {
            _this.shortVersion = false
          }
        });
        $.each(this.jsonConfig.answers,
        function(index, value) {
          var answer;
          answer = {};
          _this.answersObj[index] = answer;
          answer.el = $('<div class="poll_answer"></div>');
          answer.questionEl = $('<div class="question"></div>');
          answer.buttonEl = $('<div class="button"></div>');
          answer.textEl = $('<div class="text"></div>');
          answer.questionEl.append(answer.buttonEl);
          answer.questionEl.append(answer.textEl);
          answer.el.append(answer.questionEl);
          answer.statsEl = $('<div class="stats"></div>');
          answer.barEl = $('<div class="bar"></div>');
          answer.percentEl = $('<div class="percent"></div>');
          answer.barEl.append(answer.percentEl);
          answer.numberEl = $('<div class="number"></div>');
          answer.statsEl.append(answer.barEl);
          answer.statsEl.append(answer.numberEl);
          answer.statsEl.hide();
          answer.el.append(answer.statsEl);
          answer.textEl.html(value);
          if (_this.shortVersion === true) {
            $.each(answer,
            function(index, value) {
              if (value instanceof jQuery) {
                value.addClass("short")
              }
            })
          }
          answer.el.appendTo(_this.questionEl);
          answer.textEl.on("click",
          function() {
            _this.submitAnswer(index, answer)
          });
          answer.buttonEl.on("click",
          function() {
            _this.submitAnswer(index, answer)
          });
          if (index === _this.jsonConfig.poll_answer) {
            answer.buttonEl.addClass("answered");
            _this.questionAnswered = true
          }
        });
        console.log(this.jsonConfig.reset);
        if (typeof this.jsonConfig.reset === "string" && this.jsonConfig.reset.toLowerCase() === "true") {
          this.canReset = true;
          this.resetButton = $('<div class="button reset-button">Change your vote</div>');
          if (this.questionAnswered === false) {
            this.resetButton.hide()
          }
          this.resetButton.appendTo(this.questionEl);
          this.resetButton.on("click",
          function() {
            _this.submitReset()
          })
        } else {
          this.canReset = false
        }
        if (this.questionAnswered === true) {
          this.showAnswerGraph(this.jsonConfig.poll_answers, this.jsonConfig.total)
        }
      }
    };
    return PollMain;
    function PollMain(el) {
      var _this;
      this.questionEl = $(el).find(".poll_question");
      if (this.questionEl.length !== 1) {
        console.log("ERROR: PollMain constructor requires one question DOM element.");
        return
      }
      if (this.questionEl.attr("poll_main_processed") === "true") {
        console.log("ERROR: PolMain JS constructor was called on a DOM element that has already been processed once.");
        return
      }
      this.questionEl.attr("poll_main_processed", "true");
      _this = this;
      this.wrapperSectionEl = null; (function(tempEl, c1) {
        while (tempEl.tagName.toLowerCase() !== "body") {
          tempEl = $(tempEl).parent()[0];
          c1 += 1;
          if (tempEl.tagName.toLowerCase() === "div" && $(tempEl).data("block-type") === "wrapper") {
            _this.wrapperSectionEl = tempEl;
            break
          } else if (c1 > 50) {
            break
          }
        }
      })($(el)[0], 0);
      try {
        this.jsonConfig = JSON.parse(this.questionEl.children(".poll_question_div").html());
        $.postWithPrefix("" + this.questionEl.data("ajax-url") + "/" + "get_state", {},
        function(response) {
          _this.jsonConfig.poll_answer = response.poll_answer;
          _this.jsonConfig.total = response.total;
          $.each(response.poll_answers,
          function(index, value) {
            _this.jsonConfig.poll_answers[index] = value
          });
          _this.questionEl.children(".poll_question_div").html(JSON.stringify(_this.jsonConfig));
          _this.postInit()
        });
        return
      } catch(err) {
        console.log('ERROR: Invalid JSON config for poll ID "' + this.id + '".', 'Error messsage: "' + err.message + '".');
        return
      }
    }
  })
})(RequireJS.requirejs, RequireJS.require, RequireJS.define);
window.ImageInput = function($, undefined) {
  var ImageInput = ImageInputConstructor;
  ImageInput.prototype = {
    constructor: ImageInputConstructor,
    clickHandler: clickHandler
  };
  return ImageInput;
  function ImageInputConstructor(elementId) {
    this.el = $("#imageinput_" + elementId);
    this.crossEl = $("#cross_" + elementId);
    this.inputEl = $("#input_" + elementId);
    this.el.on("click", this.clickHandler.bind(this))
  }
  function clickHandler(event) {
    var offset = this.el.offset(),
    posX = event.offsetX ? event.offsetX: event.pageX - offset.left,
    posY = event.offsetY ? event.offsetY: event.pageY - offset.top,
    result = "[" + Math.round(posX) + "," + Math.round(posY) + "]";
    this.crossEl.css({
      left: posX - 15,
      top: posY - 15,
      visibility: "visible"
    });
    this.inputEl.val(result)
  }
}.call(this, window.jQuery); (function(window) {
  var slice = Array.prototype.slice;
  function noop() {}
  function defineBridget($) {
    if (!$) {
      return
    }
    function addOptionMethod(PluginClass) {
      if (PluginClass.prototype.option) {
        return
      }
      PluginClass.prototype.option = function(opts) {
        if (!$.isPlainObject(opts)) {
          return
        }
        this.options = $.extend(true, this.options, opts)
      }
    }
    var logError = typeof console === "undefined" ? noop: function(message) {
      console.error(message)
    };
    function bridge(namespace, PluginClass) {
      $.fn[namespace] = function(options) {
        if (typeof options === "string") {
          var args = slice.call(arguments, 1);
          for (var i = 0,
          len = this.length; i < len; i++) {
            var elem = this[i];
            var instance = $.data(elem, namespace);
            if (!instance) {
              logError("cannot call methods on " + namespace + " prior to initialization; " + "attempted to call '" + options + "'");
              continue
            }
            if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
              logError("no such method '" + options + "' for " + namespace + " instance");
              continue
            }
            var returnValue = instance[options].apply(instance, args);
            if (returnValue !== undefined) {
              return returnValue
            }
          }
          return this
        } else {
          return this.each(function() {
            var instance = $.data(this, namespace);
            if (instance) {
              instance.option(options);
              instance._init()
            } else {
              instance = new PluginClass(this, options);
              $.data(this, namespace, instance)
            }
          })
        }
      }
    }
    $.bridget = function(namespace, PluginClass) {
      addOptionMethod(PluginClass);
      bridge(namespace, PluginClass)
    };
    return $.bridget
  }
  if (typeof define === "function" && define.amd) {
    define("jquery-bridget/jquery.bridget", ["jquery"], defineBridget)
  } else if (typeof exports === "object") {
    defineBridget(require("jquery"))
  } else {
    defineBridget(window.jQuery)
  }
})(window); (function(window) {
  function classReg(className) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)")
  }
  var hasClass, addClass, removeClass;
  if ("classList" in document.documentElement) {
    hasClass = function(elem, c) {
      return elem.classList.contains(c)
    };
    addClass = function(elem, c) {
      elem.classList.add(c)
    };
    removeClass = function(elem, c) {
      elem.classList.remove(c)
    }
  } else {
    hasClass = function(elem, c) {
      return classReg(c).test(elem.className)
    };
    addClass = function(elem, c) {
      if (!hasClass(elem, c)) {
        elem.className = elem.className + " " + c
      }
    };
    removeClass = function(elem, c) {
      elem.className = elem.className.replace(classReg(c), " ")
    }
  }
  function toggleClass(elem, c) {
    var fn = hasClass(elem, c) ? removeClass: addClass;
    fn(elem, c)
  }
  var classie = {
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };
  if (typeof define === "function" && define.amd) {
    define("classie/classie", classie)
  } else if (typeof exports === "object") {
    module.exports = classie
  } else {
    window.classie = classie
  }
})(window); (function(window) {
  var prefixes = "Webkit Moz ms Ms O".split(" ");
  var docElemStyle = document.documentElement.style;
  function getStyleProperty(propName) {
    if (!propName) {
      return
    }
    if (typeof docElemStyle[propName] === "string") {
      return propName
    }
    propName = propName.charAt(0).toUpperCase() + propName.slice(1);
    var prefixed;
    for (var i = 0,
    len = prefixes.length; i < len; i++) {
      prefixed = prefixes[i] + propName;
      if (typeof docElemStyle[prefixed] === "string") {
        return prefixed
      }
    }
  }
  if (typeof define === "function" && define.amd) {
    define("get-style-property/get-style-property", [],
    function() {
      return getStyleProperty
    })
  } else if (typeof exports === "object") {
    module.exports = getStyleProperty
  } else {
    window.getStyleProperty = getStyleProperty
  }
})(window); (function(window, undefined) {
  function getStyleSize(value) {
    var num = parseFloat(value);
    var isValid = value.indexOf("%") === -1 && !isNaN(num);
    return isValid && num
  }
  function noop() {}
  var logError = typeof console === "undefined" ? noop: function(message) {
    console.error(message)
  };
  var measurements = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
  function getZeroSize() {
    var size = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    };
    for (var i = 0,
    len = measurements.length; i < len; i++) {
      var measurement = measurements[i];
      size[measurement] = 0
    }
    return size
  }
  function defineGetSize(getStyleProperty) {
    var isSetup = false;
    var getStyle, boxSizingProp, isBoxSizeOuter;
    function setup() {
      if (isSetup) {
        return
      }
      isSetup = true;
      var getComputedStyle = window.getComputedStyle;
      getStyle = function() {
        var getStyleFn = getComputedStyle ?
        function(elem) {
          return getComputedStyle(elem, null)
        }: function(elem) {
          return elem.currentStyle
        };
        return function getStyle(elem) {
          var style = getStyleFn(elem);
          if (!style) {
            logError("Style returned " + style + ". Are you running this code in a hidden iframe on Firefox? " + "See http://bit.ly/getsizebug1")
          }
          return style
        }
      } ();
      boxSizingProp = getStyleProperty("boxSizing");
      if (boxSizingProp) {
        var div = document.createElement("div");
        div.style.width = "200px";
        div.style.padding = "1px 2px 3px 4px";
        div.style.borderStyle = "solid";
        div.style.borderWidth = "1px 2px 3px 4px";
        div.style[boxSizingProp] = "border-box";
        var body = document.body || document.documentElement;
        body.appendChild(div);
        var style = getStyle(div);
        isBoxSizeOuter = getStyleSize(style.width) === 200;
        body.removeChild(div)
      }
    }
    function getSize(elem) {
      setup();
      if (typeof elem === "string") {
        elem = document.querySelector(elem)
      }
      if (!elem || typeof elem !== "object" || !elem.nodeType) {
        return
      }
      var style = getStyle(elem);
      if (style.display === "none") {
        return getZeroSize()
      }
      var size = {};
      size.width = elem.offsetWidth;
      size.height = elem.offsetHeight;
      var isBorderBox = size.isBorderBox = !!(boxSizingProp && style[boxSizingProp] && style[boxSizingProp] === "border-box");
      for (var i = 0,
      len = measurements.length; i < len; i++) {
        var measurement = measurements[i];
        var value = style[measurement];
        value = mungeNonPixel(elem, value);
        var num = parseFloat(value);
        size[measurement] = !isNaN(num) ? num: 0
      }
      var paddingWidth = size.paddingLeft + size.paddingRight;
      var paddingHeight = size.paddingTop + size.paddingBottom;
      var marginWidth = size.marginLeft + size.marginRight;
      var marginHeight = size.marginTop + size.marginBottom;
      var borderWidth = size.borderLeftWidth + size.borderRightWidth;
      var borderHeight = size.borderTopWidth + size.borderBottomWidth;
      var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
      var styleWidth = getStyleSize(style.width);
      if (styleWidth !== false) {
        size.width = styleWidth + (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth)
      }
      var styleHeight = getStyleSize(style.height);
      if (styleHeight !== false) {
        size.height = styleHeight + (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight)
      }
      size.innerWidth = size.width - (paddingWidth + borderWidth);
      size.innerHeight = size.height - (paddingHeight + borderHeight);
      size.outerWidth = size.width + marginWidth;
      size.outerHeight = size.height + marginHeight;
      return size
    }
    function mungeNonPixel(elem, value) {
      if (window.getComputedStyle || value.indexOf("%") === -1) {
        return value
      }
      var style = elem.style;
      var left = style.left;
      var rs = elem.runtimeStyle;
      var rsLeft = rs && rs.left;
      if (rsLeft) {
        rs.left = elem.currentStyle.left
      }
      style.left = value;
      value = style.pixelLeft;
      style.left = left;
      if (rsLeft) {
        rs.left = rsLeft
      }
      return value
    }
    return getSize
  }
  if (typeof define === "function" && define.amd) {
    define("get-size/get-size", ["get-style-property/get-style-property"], defineGetSize)
  } else if (typeof exports === "object") {
    module.exports = defineGetSize(require("desandro-get-style-property"))
  } else {
    window.getSize = defineGetSize(window.getStyleProperty)
  }
})(window); (function(window) {
  var docElem = document.documentElement;
  var bind = function() {};
  function getIEEvent(obj) {
    var event = window.event;
    event.target = event.target || event.srcElement || obj;
    return event
  }
  if (docElem.addEventListener) {
    bind = function(obj, type, fn) {
      obj.addEventListener(type, fn, false)
    }
  } else if (docElem.attachEvent) {
    bind = function(obj, type, fn) {
      obj[type + fn] = fn.handleEvent ?
      function() {
        var event = getIEEvent(obj);
        fn.handleEvent.call(fn, event)
      }: function() {
        var event = getIEEvent(obj);
        fn.call(obj, event)
      };
      obj.attachEvent("on" + type, obj[type + fn])
    }
  }
  var unbind = function() {};
  if (docElem.removeEventListener) {
    unbind = function(obj, type, fn) {
      obj.removeEventListener(type, fn, false)
    }
  } else if (docElem.detachEvent) {
    unbind = function(obj, type, fn) {
      obj.detachEvent("on" + type, obj[type + fn]);
      try {
        delete obj[type + fn]
      } catch(err) {
        obj[type + fn] = undefined
      }
    }
  }
  var eventie = {
    bind: bind,
    unbind: unbind
  };
  if (typeof define === "function" && define.amd) {
    define("eventie/eventie", eventie)
  } else if (typeof exports === "object") {
    module.exports = eventie
  } else {
    window.eventie = eventie
  }
})(window); (function() {
  function EventEmitter() {}
  var proto = EventEmitter.prototype;
  var exports = this;
  var originalGlobalValue = exports.EventEmitter;
  function indexOfListener(listeners, listener) {
    var i = listeners.length;
    while (i--) {
      if (listeners[i].listener === listener) {
        return i
      }
    }
    return - 1
  }
  function alias(name) {
    return function aliasClosure() {
      return this[name].apply(this, arguments)
    }
  }
  proto.getListeners = function getListeners(evt) {
    var events = this._getEvents();
    var response;
    var key;
    if (evt instanceof RegExp) {
      response = {};
      for (key in events) {
        if (events.hasOwnProperty(key) && evt.test(key)) {
          response[key] = events[key]
        }
      }
    } else {
      response = events[evt] || (events[evt] = [])
    }
    return response
  };
  proto.flattenListeners = function flattenListeners(listeners) {
    var flatListeners = [];
    var i;
    for (i = 0; i < listeners.length; i += 1) {
      flatListeners.push(listeners[i].listener)
    }
    return flatListeners
  };
  proto.getListenersAsObject = function getListenersAsObject(evt) {
    var listeners = this.getListeners(evt);
    var response;
    if (listeners instanceof Array) {
      response = {};
      response[evt] = listeners
    }
    return response || listeners
  };
  proto.addListener = function addListener(evt, listener) {
    var listeners = this.getListenersAsObject(evt);
    var listenerIsWrapped = typeof listener === "object";
    var key;
    for (key in listeners) {
      if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
        listeners[key].push(listenerIsWrapped ? listener: {
          listener: listener,
          once: false
        })
      }
    }
    return this
  };
  proto.on = alias("addListener");
  proto.addOnceListener = function addOnceListener(evt, listener) {
    return this.addListener(evt, {
      listener: listener,
      once: true
    })
  };
  proto.once = alias("addOnceListener");
  proto.defineEvent = function defineEvent(evt) {
    this.getListeners(evt);
    return this
  };
  proto.defineEvents = function defineEvents(evts) {
    for (var i = 0; i < evts.length; i += 1) {
      this.defineEvent(evts[i])
    }
    return this
  };
  proto.removeListener = function removeListener(evt, listener) {
    var listeners = this.getListenersAsObject(evt);
    var index;
    var key;
    for (key in listeners) {
      if (listeners.hasOwnProperty(key)) {
        index = indexOfListener(listeners[key], listener);
        if (index !== -1) {
          listeners[key].splice(index, 1)
        }
      }
    }
    return this
  };
  proto.off = alias("removeListener");
  proto.addListeners = function addListeners(evt, listeners) {
    return this.manipulateListeners(false, evt, listeners)
  };
  proto.removeListeners = function removeListeners(evt, listeners) {
    return this.manipulateListeners(true, evt, listeners)
  };
  proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
    var i;
    var value;
    var single = remove ? this.removeListener: this.addListener;
    var multiple = remove ? this.removeListeners: this.addListeners;
    if (typeof evt === "object" && !(evt instanceof RegExp)) {
      for (i in evt) {
        if (evt.hasOwnProperty(i) && (value = evt[i])) {
          if (typeof value === "function") {
            single.call(this, i, value)
          } else {
            multiple.call(this, i, value)
          }
        }
      }
    } else {
      i = listeners.length;
      while (i--) {
        single.call(this, evt, listeners[i])
      }
    }
    return this
  };
  proto.removeEvent = function removeEvent(evt) {
    var type = typeof evt;
    var events = this._getEvents();
    var key;
    if (type === "string") {
      delete events[evt]
    } else if (evt instanceof RegExp) {
      for (key in events) {
        if (events.hasOwnProperty(key) && evt.test(key)) {
          delete events[key]
        }
      }
    } else {
      delete this._events
    }
    return this
  };
  proto.removeAllListeners = alias("removeEvent");
  proto.emitEvent = function emitEvent(evt, args) {
    var listeners = this.getListenersAsObject(evt);
    var listener;
    var i;
    var key;
    var response;
    for (key in listeners) {
      if (listeners.hasOwnProperty(key)) {
        i = listeners[key].length;
        while (i--) {
          listener = listeners[key][i];
          if (listener.once === true) {
            this.removeListener(evt, listener.listener)
          }
          response = listener.listener.apply(this, args || []);
          if (response === this._getOnceReturnValue()) {
            this.removeListener(evt, listener.listener)
          }
        }
      }
    }
    return this
  };
  proto.trigger = alias("emitEvent");
  proto.emit = function emit(evt) {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(evt, args)
  };
  proto.setOnceReturnValue = function setOnceReturnValue(value) {
    this._onceReturnValue = value;
    return this
  };
  proto._getOnceReturnValue = function _getOnceReturnValue() {
    if (this.hasOwnProperty("_onceReturnValue")) {
      return this._onceReturnValue
    } else {
      return true
    }
  };
  proto._getEvents = function _getEvents() {
    return this._events || (this._events = {})
  };
  EventEmitter.noConflict = function noConflict() {
    exports.EventEmitter = originalGlobalValue;
    return EventEmitter
  };
  if (typeof define === "function" && define.amd) {
    define("eventEmitter/EventEmitter", [],
    function() {
      return EventEmitter
    })
  } else if (typeof module === "object" && module.exports) {
    module.exports = EventEmitter
  } else {
    exports.EventEmitter = EventEmitter
  }
}).call(this); (function(window, factory) {
  if (typeof define == "function" && define.amd) {
    define("unipointer/unipointer", ["eventEmitter/EventEmitter", "eventie/eventie"],
    function(EventEmitter, eventie) {
      return factory(window, EventEmitter, eventie)
    })
  } else if (typeof exports == "object") {
    module.exports = factory(window, require("wolfy87-eventemitter"), require("eventie"))
  } else {
    window.Unipointer = factory(window, window.EventEmitter, window.eventie)
  }
})(window,
function factory(window, EventEmitter, eventie) {
  function noop() {}
  function Unipointer() {}
  Unipointer.prototype = new EventEmitter;
  Unipointer.prototype.bindStartEvent = function(elem) {
    this._bindStartEvent(elem, true)
  };
  Unipointer.prototype.unbindStartEvent = function(elem) {
    this._bindStartEvent(elem, false)
  };
  Unipointer.prototype._bindStartEvent = function(elem, isBind) {
    isBind = isBind === undefined ? true: !!isBind;
    var bindMethod = isBind ? "bind": "unbind";
    if (window.navigator.pointerEnabled) {
      eventie[bindMethod](elem, "pointerdown", this)
    } else if (window.navigator.msPointerEnabled) {
      eventie[bindMethod](elem, "MSPointerDown", this)
    } else {
      eventie[bindMethod](elem, "mousedown", this);
      eventie[bindMethod](elem, "touchstart", this)
    }
  };
  Unipointer.prototype.handleEvent = function(event) {
    var method = "on" + event.type;
    if (this[method]) {
      this[method](event)
    }
  };
  Unipointer.prototype.getTouch = function(touches) {
    for (var i = 0,
    len = touches.length; i < len; i++) {
      var touch = touches[i];
      if (touch.identifier == this.pointerIdentifier) {
        return touch
      }
    }
  };
  Unipointer.prototype.onmousedown = function(event) {
    var button = event.button;
    if (button && (button !== 0 && button !== 1)) {
      return
    }
    this._pointerDown(event, event)
  };
  Unipointer.prototype.ontouchstart = function(event) {
    this._pointerDown(event, event.changedTouches[0])
  };
  Unipointer.prototype.onMSPointerDown = Unipointer.prototype.onpointerdown = function(event) {
    this._pointerDown(event, event)
  };
  Unipointer.prototype._pointerDown = function(event, pointer) {
    if (this.isPointerDown) {
      return
    }
    this.isPointerDown = true;
    this.pointerIdentifier = pointer.pointerId !== undefined ? pointer.pointerId: pointer.identifier;
    this.pointerDown(event, pointer)
  };
  Unipointer.prototype.pointerDown = function(event, pointer) {
    this._bindPostStartEvents(event);
    this.emitEvent("pointerDown", [event, pointer])
  };
  var postStartEvents = {
    mousedown: ["mousemove", "mouseup"],
    touchstart: ["touchmove", "touchend", "touchcancel"],
    pointerdown: ["pointermove", "pointerup", "pointercancel"],
    MSPointerDown: ["MSPointerMove", "MSPointerUp", "MSPointerCancel"]
  };
  Unipointer.prototype._bindPostStartEvents = function(event) {
    if (!event) {
      return
    }
    var events = postStartEvents[event.type];
    var node = event.preventDefault ? window: document;
    for (var i = 0,
    len = events.length; i < len; i++) {
      var evnt = events[i];
      eventie.bind(node, evnt, this)
    }
    this._boundPointerEvents = {
      events: events,
      node: node
    }
  };
  Unipointer.prototype._unbindPostStartEvents = function() {
    var args = this._boundPointerEvents;
    if (!args || !args.events) {
      return
    }
    for (var i = 0,
    len = args.events.length; i < len; i++) {
      var event = args.events[i];
      eventie.unbind(args.node, event, this)
    }
    delete this._boundPointerEvents
  };
  Unipointer.prototype.onmousemove = function(event) {
    this._pointerMove(event, event)
  };
  Unipointer.prototype.onMSPointerMove = Unipointer.prototype.onpointermove = function(event) {
    if (event.pointerId == this.pointerIdentifier) {
      this._pointerMove(event, event)
    }
  };
  Unipointer.prototype.ontouchmove = function(event) {
    var touch = this.getTouch(event.changedTouches);
    if (touch) {
      this._pointerMove(event, touch)
    }
  };
  Unipointer.prototype._pointerMove = function(event, pointer) {
    this.pointerMove(event, pointer)
  };
  Unipointer.prototype.pointerMove = function(event, pointer) {
    this.emitEvent("pointerMove", [event, pointer])
  };
  Unipointer.prototype.onmouseup = function(event) {
    this._pointerUp(event, event)
  };
  Unipointer.prototype.onMSPointerUp = Unipointer.prototype.onpointerup = function(event) {
    if (event.pointerId == this.pointerIdentifier) {
      this._pointerUp(event, event)
    }
  };
  Unipointer.prototype.ontouchend = function(event) {
    var touch = this.getTouch(event.changedTouches);
    if (touch) {
      this._pointerUp(event, touch)
    }
  };
  Unipointer.prototype._pointerUp = function(event, pointer) {
    this._pointerDone();
    this.pointerUp(event, pointer)
  };
  Unipointer.prototype.pointerUp = function(event, pointer) {
    this.emitEvent("pointerUp", [event, pointer])
  };
  Unipointer.prototype._pointerDone = function() {
    this.isPointerDown = false;
    delete this.pointerIdentifier;
    this._unbindPostStartEvents();
    this.pointerDone()
  };
  Unipointer.prototype.pointerDone = noop;
  Unipointer.prototype.onMSPointerCancel = Unipointer.prototype.onpointercancel = function(event) {
    if (event.pointerId == this.pointerIdentifier) {
      this._pointerCancel(event, event)
    }
  };
  Unipointer.prototype.ontouchcancel = function(event) {
    var touch = this.getTouch(event.changedTouches);
    if (touch) {
      this._pointerCancel(event, touch)
    }
  };
  Unipointer.prototype._pointerCancel = function(event, pointer) {
    this._pointerDone();
    this.pointerCancel(event, pointer)
  };
  Unipointer.prototype.pointerCancel = function(event, pointer) {
    this.emitEvent("pointerCancel", [event, pointer])
  };
  Unipointer.getPointerPoint = function(pointer) {
    return {
      x: pointer.pageX !== undefined ? pointer.pageX: pointer.clientX,
      y: pointer.pageY !== undefined ? pointer.pageY: pointer.clientY
    }
  };
  return Unipointer
}); (function(window, factory) {
  if (typeof define == "function" && define.amd) {
    define("unidragger/unidragger", ["eventie/eventie", "unipointer/unipointer"],
    function(eventie, Unipointer) {
      return factory(window, eventie, Unipointer)
    })
  } else if (typeof exports == "object") {
    module.exports = factory(window, require("eventie"), require("unipointer"))
  } else {
    window.Unidragger = factory(window, window.eventie, window.Unipointer)
  }
})(window,
function factory(window, eventie, Unipointer) {
  function noop() {}
  function preventDefaultEvent(event) {
    if (event.preventDefault) {
      event.preventDefault()
    } else {
      event.returnValue = false
    }
  }
  function getParentLink(elem) {
    while (elem != document.body) {
      elem = elem.parentNode;
      if (elem.nodeName == "A") {
        return elem
      }
    }
  }
  function Unidragger() {}
  Unidragger.prototype = new Unipointer;
  Unidragger.prototype.bindHandles = function() {
    this._bindHandles(true)
  };
  Unidragger.prototype.unbindHandles = function() {
    this._bindHandles(false)
  };
  var navigator = window.navigator;
  Unidragger.prototype._bindHandles = function(isBind) {
    isBind = isBind === undefined ? true: !!isBind;
    var binderExtra;
    if (navigator.pointerEnabled) {
      binderExtra = function(handle) {
        handle.style.touchAction = isBind ? "none": ""
      }
    } else if (navigator.msPointerEnabled) {
      binderExtra = function(handle) {
        handle.style.msTouchAction = isBind ? "none": ""
      }
    } else {
      binderExtra = function() {
        if (isBind) {
          disableImgOndragstart(handle)
        }
      }
    }
    var bindMethod = isBind ? "bind": "unbind";
    for (var i = 0,
    len = this.handles.length; i < len; i++) {
      var handle = this.handles[i];
      this._bindStartEvent(handle, isBind);
      binderExtra(handle);
      eventie[bindMethod](handle, "click", this)
    }
  };
  function noDragStart() {
    return false
  }
  var isIE8 = "attachEvent" in document.documentElement;
  var disableImgOndragstart = !isIE8 ? noop: function(handle) {
    if (handle.nodeName == "IMG") {
      handle.ondragstart = noDragStart
    }
    var images = handle.querySelectorAll("img");
    for (var i = 0,
    len = images.length; i < len; i++) {
      var img = images[i];
      img.ondragstart = noDragStart
    }
  };
  var allowTouchstartNodes = Unidragger.allowTouchstartNodes = {
    INPUT: true,
    A: true,
    BUTTON: true,
    SELECT: true
  };
  Unidragger.prototype.pointerDown = function(event, pointer) {
    this._dragPointerDown(event, pointer);
    var focused = document.activeElement;
    if (focused && focused.blur) {
      focused.blur()
    }
    this._bindPostStartEvents(event);
    this.emitEvent("pointerDown", [event, pointer])
  };
  Unidragger.prototype._dragPointerDown = function(event, pointer) {
    this.pointerDownPoint = Unipointer.getPointerPoint(pointer);
    var targetNodeName = event.target.nodeName;
    var isTouchstartNode = event.type == "touchstart" && (allowTouchstartNodes[targetNodeName] || getParentLink(event.target));
    if (!isTouchstartNode && targetNodeName != "SELECT") {
      preventDefaultEvent(event)
    }
  };
  Unidragger.prototype.pointerMove = function(event, pointer) {
    var moveVector = this._dragPointerMove(event, pointer);
    this.emitEvent("pointerMove", [event, pointer, moveVector]);
    this._dragMove(event, pointer, moveVector)
  };
  Unidragger.prototype._dragPointerMove = function(event, pointer) {
    var movePoint = Unipointer.getPointerPoint(pointer);
    var moveVector = {
      x: movePoint.x - this.pointerDownPoint.x,
      y: movePoint.y - this.pointerDownPoint.y
    };
    if (!this.isDragging && this.hasDragStarted(moveVector)) {
      this._dragStart(event, pointer)
    }
    return moveVector
  };
  Unidragger.prototype.hasDragStarted = function(moveVector) {
    return Math.abs(moveVector.x) > 3 || Math.abs(moveVector.y) > 3
  };
  Unidragger.prototype.pointerUp = function(event, pointer) {
    this.emitEvent("pointerUp", [event, pointer]);
    this._dragPointerUp(event, pointer)
  };
  Unidragger.prototype._dragPointerUp = function(event, pointer) {
    if (this.isDragging) {
      this._dragEnd(event, pointer)
    } else {
      this._staticClick(event, pointer)
    }
  };
  Unidragger.prototype._dragStart = function(event, pointer) {
    this.isDragging = true;
    this.dragStartPoint = Unidragger.getPointerPoint(pointer);
    this.isPreventingClicks = true;
    this.dragStart(event, pointer)
  };
  Unidragger.prototype.dragStart = function(event, pointer) {
    this.emitEvent("dragStart", [event, pointer])
  };
  Unidragger.prototype._dragMove = function(event, pointer, moveVector) {
    if (!this.isDragging) {
      return
    }
    this.dragMove(event, pointer, moveVector)
  };
  Unidragger.prototype.dragMove = function(event, pointer, moveVector) {
    this.emitEvent("dragMove", [event, pointer, moveVector])
  };
  Unidragger.prototype._dragEnd = function(event, pointer) {
    this.isDragging = false;
    var _this = this;
    setTimeout(function() {
      delete _this.isPreventingClicks
    });
    this.dragEnd(event, pointer)
  };
  Unidragger.prototype.dragEnd = function(event, pointer) {
    this.emitEvent("dragEnd", [event, pointer])
  };
  Unidragger.prototype.onclick = function(event) {
    if (this.isPreventingClicks) {
      preventDefaultEvent(event)
    }
  };
  Unidragger.prototype._staticClick = function(event, pointer) {
    if (event.target.nodeName == "INPUT" && event.target.type == "text") {
      event.target.focus()
    }
    this.staticClick(event, pointer)
  };
  Unidragger.prototype.staticClick = function(event, pointer) {
    this.emitEvent("staticClick", [event, pointer])
  };
  Unidragger.getPointerPoint = function(pointer) {
    return {
      x: pointer.pageX !== undefined ? pointer.pageX: pointer.clientX,
      y: pointer.pageY !== undefined ? pointer.pageY: pointer.clientY
    }
  };
  Unidragger.getPointerPoint = Unipointer.getPointerPoint;
  return Unidragger
}); (function(window, factory) {
  if (typeof define == "function" && define.amd) {
    define("draggabilly", ["classie/classie", "get-style-property/get-style-property", "get-size/get-size", "unidragger/unidragger"],
    function(classie, getStyleProperty, getSize, Unidragger) {
      return factory(window, classie, getStyleProperty, getSize, Unidragger)
    })
  } else if (typeof exports == "object") {
    module.exports = factory(window, require("desandro-classie"), require("desandro-get-style-property"), require("get-size"), require("unidragger"))
  } else {
    window.Draggabilly = factory(window, window.classie, window.getStyleProperty, window.getSize, window.Unidragger)
  }
})(window,
function factory(window, classie, getStyleProperty, getSize, Unidragger) {
  var document = window.document;
  function noop() {}
  function extend(a, b) {
    for (var prop in b) {
      a[prop] = b[prop]
    }
    return a
  }
  var defView = document.defaultView;
  var getStyle = defView && defView.getComputedStyle ?
  function(elem) {
    return defView.getComputedStyle(elem, null)
  }: function(elem) {
    return elem.currentStyle
  };
  var isElement = typeof HTMLElement == "object" ?
  function isElementDOM2(obj) {
    return obj instanceof HTMLElement
  }: function isElementQuirky(obj) {
    return obj && typeof obj == "object" && obj.nodeType == 1 && typeof obj.nodeName == "string"
  };
  var lastTime = 0;
  var prefixes = "webkit moz ms o".split(" ");
  var requestAnimationFrame = window.requestAnimationFrame;
  var cancelAnimationFrame = window.cancelAnimationFrame;
  var prefix;
  for (var i = 0; i < prefixes.length; i++) {
    if (requestAnimationFrame && cancelAnimationFrame) {
      break
    }
    prefix = prefixes[i];
    requestAnimationFrame = requestAnimationFrame || window[prefix + "RequestAnimationFrame"];
    cancelAnimationFrame = cancelAnimationFrame || window[prefix + "CancelAnimationFrame"] || window[prefix + "CancelRequestAnimationFrame"]
  }
  if (!requestAnimationFrame || !cancelAnimationFrame) {
    requestAnimationFrame = function(callback) {
      var currTime = (new Date).getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() {
        callback(currTime + timeToCall)
      },
      timeToCall);
      lastTime = currTime + timeToCall;
      return id
    };
    cancelAnimationFrame = function(id) {
      window.clearTimeout(id)
    }
  }
  var transformProperty = getStyleProperty("transform");
  var is3d = !!getStyleProperty("perspective");
  var jQuery = window.jQuery;
  function Draggabilly(element, options) {
    this.element = typeof element == "string" ? document.querySelector(element) : element;
    if (jQuery) {
      this.$element = jQuery(this.element)
    }
    this.options = extend({},
    this.constructor.defaults);
    this.option(options);
    this._create()
  }
  extend(Draggabilly.prototype, Unidragger.prototype);
  Draggabilly.defaults = {};
  Draggabilly.prototype.option = function(opts) {
    extend(this.options, opts)
  };
  Draggabilly.prototype._create = function() {
    this.position = {};
    this._getPosition();
    this.startPoint = {
      x: 0,
      y: 0
    };
    this.dragPoint = {
      x: 0,
      y: 0
    };
    this.startPosition = extend({},
    this.position);
    var style = getStyle(this.element);
    if (style.position != "relative" && style.position != "absolute") {
      this.element.style.position = "relative"
    }
    this.enable();
    this.setHandles()
  };
  Draggabilly.prototype.setHandles = function() {
    this.handles = this.options.handle ? this.element.querySelectorAll(this.options.handle) : [this.element];
    this.bindHandles()
  };
  Draggabilly.prototype.dispatchEvent = function(type, event, args) {
    var emitArgs = [event].concat(args);
    this.emitEvent(type, emitArgs);
    var jQuery = window.jQuery;
    if (jQuery && this.$element) {
      if (event) {
        var $event = jQuery.Event(event);
        $event.type = type;
        this.$element.trigger($event, args)
      } else {
        this.$element.trigger(type, args)
      }
    }
  };
  Draggabilly.prototype._getPosition = function() {
    var style = getStyle(this.element);
    var x = parseInt(style.left, 10);
    var y = parseInt(style.top, 10);
    this.position.x = isNaN(x) ? 0 : x;
    this.position.y = isNaN(y) ? 0 : y;
    this._addTransformPosition(style)
  };
  Draggabilly.prototype._addTransformPosition = function(style) {
    if (!transformProperty) {
      return
    }
    var transform = style[transformProperty];
    if (transform.indexOf("matrix") !== 0) {
      return
    }
    var matrixValues = transform.split(",");
    var xIndex = transform.indexOf("matrix3d") === 0 ? 12 : 4;
    var translateX = parseInt(matrixValues[xIndex], 10);
    var translateY = parseInt(matrixValues[xIndex + 1], 10);
    this.position.x += translateX;
    this.position.y += translateY
  };
  Draggabilly.prototype.pointerDown = function(event, pointer) {
    this._dragPointerDown(event, pointer);
    var focused = document.activeElement;
    if (focused && focused.blur) {
      focused.blur()
    }
    this._bindPostStartEvents(event);
    classie.add(this.element, "is-pointer-down");
    this.dispatchEvent("pointerDown", event, [pointer])
  };
  Draggabilly.prototype.pointerMove = function(event, pointer) {
    var moveVector = this._dragPointerMove(event, pointer);
    this.dispatchEvent("pointerMove", event, [pointer, moveVector]);
    this._dragMove(event, pointer, moveVector)
  };
  Draggabilly.prototype.dragStart = function(event, pointer) {
    if (!this.isEnabled) {
      return
    }
    this._getPosition();
    this.measureContainment();
    this.startPosition.x = this.position.x;
    this.startPosition.y = this.position.y;
    this.setLeftTop();
    this.dragPoint.x = 0;
    this.dragPoint.y = 0;
    this.isDragging = true;
    classie.add(this.element, "is-dragging");
    this.dispatchEvent("dragStart", event, [pointer]);
    this.animate()
  };
  Draggabilly.prototype.measureContainment = function() {
    var containment = this.options.containment;
    if (!containment) {
      return
    }
    this.size = getSize(this.element);
    var elemRect = this.element.getBoundingClientRect();
    var container = isElement(containment) ? containment: typeof containment == "string" ? document.querySelector(containment) : this.element.parentNode;
    this.containerSize = getSize(container);
    var containerRect = container.getBoundingClientRect();
    this.relativeStartPosition = {
      x: elemRect.left - containerRect.left,
      y: elemRect.top - containerRect.top
    }
  };
  Draggabilly.prototype.dragMove = function(event, pointer, moveVector) {
    if (!this.isEnabled) {
      return
    }
    var dragX = moveVector.x;
    var dragY = moveVector.y;
    var grid = this.options.grid;
    var gridX = grid && grid[0];
    var gridY = grid && grid[1];
    dragX = applyGrid(dragX, gridX);
    dragY = applyGrid(dragY, gridY);
    dragX = this.containDrag("x", dragX, gridX);
    dragY = this.containDrag("y", dragY, gridY);
    dragX = this.options.axis == "y" ? 0 : dragX;
    dragY = this.options.axis == "x" ? 0 : dragY;
    this.position.x = this.startPosition.x + dragX;
    this.position.y = this.startPosition.y + dragY;
    this.dragPoint.x = dragX;
    this.dragPoint.y = dragY;
    this.dispatchEvent("dragMove", event, [pointer, moveVector])
  };
  function applyGrid(value, grid, method) {
    method = method || "round";
    return grid ? Math[method](value / grid) * grid: value
  }
  Draggabilly.prototype.containDrag = function(axis, drag, grid) {
    if (!this.options.containment) {
      return drag
    }
    var measure = axis == "x" ? "width": "height";
    var rel = this.relativeStartPosition[axis];
    var min = applyGrid( - rel, grid, "ceil");
    var max = this.containerSize[measure] - rel - this.size[measure];
    max = applyGrid(max, grid, "floor");
    return Math.min(max, Math.max(min, drag))
  };
  Draggabilly.prototype.pointerUp = function(event, pointer) {
    classie.remove(this.element, "is-pointer-down");
    this.dispatchEvent("pointerUp", event, [pointer]);
    this._dragPointerUp(event, pointer)
  };
  Draggabilly.prototype.dragEnd = function(event, pointer) {
    if (!this.isEnabled) {
      return
    }
    this.isDragging = false;
    if (transformProperty) {
      this.element.style[transformProperty] = "";
      this.setLeftTop()
    }
    classie.remove(this.element, "is-dragging");
    this.dispatchEvent("dragEnd", event, [pointer])
  };
  Draggabilly.prototype.animate = function() {
    if (!this.isDragging) {
      return
    }
    this.positionDrag();
    var _this = this;
    requestAnimationFrame(function animateFrame() {
      _this.animate()
    })
  };
  var translate = is3d ?
  function(x, y) {
    return "translate3d( " + x + "px, " + y + "px, 0)"
  }: function(x, y) {
    return "translate( " + x + "px, " + y + "px)"
  };
  Draggabilly.prototype.setLeftTop = function() {
    this.element.style.left = this.position.x + "px";
    this.element.style.top = this.position.y + "px"
  };
  Draggabilly.prototype.positionDrag = transformProperty ?
  function() {
    this.element.style[transformProperty] = translate(this.dragPoint.x, this.dragPoint.y)
  }: Draggabilly.prototype.setLeftTop;
  Draggabilly.prototype.staticClick = function(event, pointer) {
    this.dispatchEvent("staticClick", event, [pointer])
  };
  Draggabilly.prototype.enable = function() {
    this.isEnabled = true
  };
  Draggabilly.prototype.disable = function() {
    this.isEnabled = false;
    if (this.isDragging) {
      this.dragEnd()
    }
  };
  Draggabilly.prototype.destroy = function() {
    this.disable();
    if (transformProperty) {
      this.element.style[transformProperty] = ""
    }
    this.element.style.left = "";
    this.element.style.top = "";
    this.element.style.position = "";
    this.unbindHandles();
    if (this.$element) {
      this.$element.removeData("draggabilly")
    }
  };
  Draggabilly.prototype._init = noop;
  if (jQuery && jQuery.bridget) {
    jQuery.bridget("draggabilly", Draggabilly)
  }
  return Draggabilly
}); (function() {
  var _this = this;
  this.Annotatable = function() {
    Annotatable.prototype._debug = false;
    Annotatable.prototype.wrapperSelector = ".annotatable-wrapper";
    Annotatable.prototype.toggleAnnotationsSelector = ".annotatable-toggle-annotations";
    Annotatable.prototype.toggleInstructionsSelector = ".annotatable-toggle-instructions";
    Annotatable.prototype.instructionsSelector = ".annotatable-instructions";
    Annotatable.prototype.sectionSelector = ".annotatable-section";
    Annotatable.prototype.spanSelector = ".annotatable-span";
    Annotatable.prototype.replySelector = ".annotatable-reply";
    Annotatable.prototype.problemXModuleSelector = ".xmodule_CapaModule";
    Annotatable.prototype.problemSelector = "div.problem";
    Annotatable.prototype.problemInputSelector = "div.problem .annotation-input";
    Annotatable.prototype.problemReturnSelector = "div.problem .annotation-return";
    function Annotatable(el) {
      var _this = this;
      this.onMoveTip = function(event, api, position) {
        return Annotatable.prototype.onMoveTip.apply(_this, arguments)
      };
      this.onShowTip = function(event, api) {
        return Annotatable.prototype.onShowTip.apply(_this, arguments)
      };
      this.onClickReturn = function(e) {
        return Annotatable.prototype.onClickReturn.apply(_this, arguments)
      };
      this.onClickReply = function(e) {
        return Annotatable.prototype.onClickReply.apply(_this, arguments)
      };
      this.onClickToggleInstructions = function(e) {
        return Annotatable.prototype.onClickToggleInstructions.apply(_this, arguments)
      };
      this.onClickToggleAnnotations = function(e) {
        return Annotatable.prototype.onClickToggleAnnotations.apply(_this, arguments)
      };
      if (this._debug) {
        console.log("loaded Annotatable")
      }
      this.el = el;
      this.$el = $(el);
      this.init()
    }
    Annotatable.prototype.$ = function(selector) {
      return $(selector, this.el)
    };
    Annotatable.prototype.init = function() {
      this.initEvents();
      return this.initTips()
    };
    Annotatable.prototype.initEvents = function() {
      var _ref;
      _ref = [false, false],
      this.annotationsHidden = _ref[0],
      this.instructionsHidden = _ref[1];
      this.$(this.toggleAnnotationsSelector).bind("click", this.onClickToggleAnnotations);
      this.$(this.toggleInstructionsSelector).bind("click", this.onClickToggleInstructions);
      this.$el.delegate(this.replySelector, "click", this.onClickReply);
      return $("body").delegate(this.problemReturnSelector, "click", this.onClickReturn)
    };
    Annotatable.prototype.initTips = function() {
      var _this = this;
      return this.$(this.spanSelector).each(function(index, el) {
        return $(el).qtip(_this.getSpanTipOptions(el))
      })
    };
    Annotatable.prototype.getSpanTipOptions = function(el) {
      return {
        content: {
          title: {
            text: this.makeTipTitle(el)
          },
          text: this.makeTipContent(el)
        },
        position: {
          my: "bottom center",
          at: "top center",
          target: $(el),
          container: this.$(this.wrapperSelector),
          adjust: {
            y: -5
          }
        },
        show: {
          event: "click mouseenter",
          solo: true
        },
        hide: {
          event: "click mouseleave",
          delay: 500,
          fixed: true
        },
        style: {
          classes: "ui-tooltip-annotatable"
        },
        events: {
          show: this.onShowTip,
          move: this.onMoveTip
        }
      }
    };
    Annotatable.prototype.onClickToggleAnnotations = function(e) {
      return this.toggleAnnotations()
    };
    Annotatable.prototype.onClickToggleInstructions = function(e) {
      return this.toggleInstructions()
    };
    Annotatable.prototype.onClickReply = function(e) {
      return this.replyTo(e.currentTarget)
    };
    Annotatable.prototype.onClickReturn = function(e) {
      return this.returnFrom(e.currentTarget)
    };
    Annotatable.prototype.onShowTip = function(event, api) {
      if (this.annotationsHidden) {
        return event.preventDefault()
      }
    };
    Annotatable.prototype.onMoveTip = function(event, api, position) {
      var adjust_y, container, container_offset, focus_rect, is_non_overlapping, offset_left, offset_top, rect_center, rect_top, rects, target, tip, tip_height, tip_left, tip_top, tip_width, win_width, _ref, _ref1, _ref2;
      tip = api.elements.tooltip;
      adjust_y = ((_ref = api.options.position) != null ? (_ref1 = _ref.adjust) != null ? _ref1.y: void 0 : void 0) || 0;
      container = ((_ref2 = api.options.position) != null ? _ref2.container: void 0) || $("body");
      target = api.elements.target;
      rects = $(target).get(0).getClientRects();
      is_non_overlapping = (rects != null ? rects.length: void 0) === 2 && rects[0].left > rects[1].right;
      if (is_non_overlapping) {
        focus_rect = rects[0].width > rects[1].width ? rects[0] : rects[1];
        rect_center = focus_rect.left + focus_rect.width / 2;
        rect_top = focus_rect.top;
        tip_width = $(tip).width();
        tip_height = $(tip).height();
        container_offset = $(container).offset();
        offset_left = -container_offset.left;
        offset_top = $(document).scrollTop() - container_offset.top;
        tip_left = offset_left + rect_center - tip_width / 2;
        tip_top = offset_top + rect_top - tip_height + adjust_y;
        win_width = $(window).width();
        if (tip_left < offset_left) {
          tip_left = offset_left
        } else if (tip_left + tip_width > win_width + offset_left) {
          tip_left = win_width + offset_left - tip_width
        }
        return $.extend(position, {
          left: tip_left,
          top: tip_top
        })
      }
    };
    Annotatable.prototype.getSpanForProblemReturn = function(el) {
      var problem_id;
      problem_id = $(this.problemReturnSelector).index(el);
      return this.$(this.spanSelector).filter("[data-problem-id='" + problem_id + "']")
    };
    Annotatable.prototype.getProblem = function(el) {
      var problem_id;
      problem_id = this.getProblemId(el);
      return $(this.problemSelector).has(this.problemInputSelector).eq(problem_id)
    };
    Annotatable.prototype.getProblemId = function(el) {
      return $(el).data("problem-id")
    };
    Annotatable.prototype.toggleAnnotations = function() {
      var hide;
      hide = this.annotationsHidden = !this.annotationsHidden;
      this.toggleAnnotationButtonText(hide);
      this.toggleSpans(hide);
      return this.toggleTips(hide)
    };
    Annotatable.prototype.toggleTips = function(hide) {
      var visible;
      visible = this.findVisibleTips();
      return this.hideTips(visible)
    };
    Annotatable.prototype.toggleAnnotationButtonText = function(hide) {
      var buttonText;
      if (hide) {
        buttonText = gettext("Show Annotations")
      } else {
        buttonText = gettext("Hide Annotations")
      }
      return this.$(this.toggleAnnotationsSelector).text(buttonText)
    };
    Annotatable.prototype.toggleInstructions = function() {
      var hide;
      hide = this.instructionsHidden = !this.instructionsHidden;
      this.toggleInstructionsButton(hide);
      return this.toggleInstructionsText(hide)
    };
    Annotatable.prototype.toggleInstructionsButton = function(hide) {
      var cls, txt;
      if (hide) {
        txt = gettext("Expand Instructions")
      } else {
        txt = gettext("Collapse Instructions")
      }
      cls = hide ? ["expanded", "collapsed"] : ["collapsed", "expanded"];
      return this.$(this.toggleInstructionsSelector).text(txt).removeClass(cls[0]).addClass(cls[1])
    };
    Annotatable.prototype.toggleInstructionsText = function(hide) {
      var slideMethod;
      slideMethod = hide ? "slideUp": "slideDown";
      return this.$(this.instructionsSelector)[slideMethod]()
    };
    Annotatable.prototype.toggleSpans = function(hide) {
      return this.$(this.spanSelector).toggleClass("hide", hide, 250)
    };
    Annotatable.prototype.replyTo = function(buttonEl) {
      var el, offset;
      offset = -20;
      el = this.getProblem(buttonEl);
      if (el.length > 0) {
        return this.scrollTo(el, this.afterScrollToProblem, offset)
      } else {
        if (this._debug) {
          return console.log("problem not found. event: ", e)
        }
      }
    };
    Annotatable.prototype.returnFrom = function(buttonEl) {
      var el, offset;
      offset = -200;
      el = this.getSpanForProblemReturn(buttonEl);
      if (el.length > 0) {
        return this.scrollTo(el, this.afterScrollToSpan, offset)
      } else {
        if (this._debug) {
          return console.log("span not found. event:", e)
        }
      }
    };
    Annotatable.prototype.scrollTo = function(el, after, offset) {
      var _this = this;
      if (offset == null) {
        offset = -20
      }
      if ($(el).length > 0) {
        return $("html,body").scrollTo(el, {
          duration: 500,
          onAfter: this._once(function() {
            return after != null ? after.call(_this, el) : void 0
          }),
          offset: offset
        })
      }
    };
    Annotatable.prototype.afterScrollToProblem = function(problem_el) {
      return problem_el.effect("highlight", {},
      500)
    };
    Annotatable.prototype.afterScrollToSpan = function(span_el) {
      return span_el.addClass("selected", 400, "swing",
      function() {
        return span_el.removeClass("selected", 400, "swing")
      })
    };
    Annotatable.prototype.makeTipContent = function(el) {
      var _this = this;
      return function(api) {
        var comment, problem_id, reply, text;
        text = $(el).data("comment-body");
        comment = _this.createComment(text);
        problem_id = _this.getProblemId(el);
        reply = _this.createReplyLink(problem_id);
        return $(comment).add(reply)
      }
    };
    Annotatable.prototype.makeTipTitle = function(el) {
      var _this = this;
      return function(api) {
        var title;
        title = $(el).data("comment-title");
        if (title) {
          return title
        } else {
          return gettext("Commentary")
        }
      }
    };
    Annotatable.prototype.createComment = function(text) {
      return $('<div class="annotatable-comment">' + text + "</div>")
    };
    Annotatable.prototype.createReplyLink = function(problem_id) {
      var linktxt;
      linktxt = gettext("Reply to Annotation");
      return $('<a class="annotatable-reply" href="javascript:void(0);" data-problem-id="' + problem_id + '">' + linktxt + "</a>")
    };
    Annotatable.prototype.findVisibleTips = function() {
      var visible;
      visible = [];
      this.$(this.spanSelector).each(function(index, el) {
        var api, tip;
        api = $(el).qtip("api");
        tip = $(api != null ? api.elements.tooltip: void 0);
        if (tip.is(":visible")) {
          return visible.push(el)
        }
      });
      return visible
    };
    Annotatable.prototype.hideTips = function(elements) {
      return $(elements).qtip("hide")
    };
    Annotatable.prototype._once = function(fn) {
      var done, _this = this;
      done = false;
      return function() {
        if (!done) {
          fn.call(_this)
        }
        return done = true
      }
    };
    return Annotatable
  } ()
}).call(this);
var cktsim = function() {
  var T_VOLTAGE = 0;
  var T_CURRENT = 1;
  var v_newt_lim = .3;
  var v_abstol = 1e-6;
  var i_abstol = 1e-12;
  var eps = 1e-12;
  var dc_max_iters = 1e3;
  var max_tran_iters = 20;
  var time_step_increase_factor = 2;
  var lte_step_decrease_factor = 8;
  var nr_step_decrease_factor = 4;
  var reltol = 1e-4;
  var lterel = 10;
  var res_check_abs = Math.sqrt(i_abstol);
  var res_check_rel = Math.sqrt(reltol);
  function Circuit() {
    this.node_map = [];
    this.ntypes = [];
    this.initial_conditions = [];
    this.devices = [];
    this.device_map = [];
    this.voltage_sources = [];
    this.current_sources = [];
    this.finalized = false;
    this.diddc = false;
    this.node_index = -1;
    this.periods = 1
  }
  Circuit.prototype.gnd_node = function() {
    return - 1
  };
  Circuit.prototype.node = function(name, ntype, ic) {
    this.node_index += 1;
    if (name) this.node_map[name] = this.node_index;
    this.ntypes.push(ntype);
    this.initial_conditions.push(ic);
    return this.node_index
  };
  Circuit.prototype.finalize = function() {
    if (!this.finalized) {
      this.finalized = true;
      this.N = this.node_index + 1;
      for (var i = this.devices.length - 1; i >= 0; --i) this.devices[i].finalize(this);
      this.matrix = mat_make(this.N, this.N + 1);
      this.Gl = mat_make(this.N, this.N);
      this.G = mat_make(this.N, this.N);
      this.C = mat_make(this.N, this.N);
      this.soln_max = new Array(this.N);
      this.abstol = new Array(this.N);
      this.solution = new Array(this.N);
      this.rhs = new Array(this.N);
      for (var i = this.N - 1; i >= 0; --i) {
        this.soln_max[i] = 0;
        this.abstol[i] = this.ntypes[i] == T_VOLTAGE ? v_abstol: i_abstol;
        this.solution[i] = 0;
        this.rhs[i] = 0
      }
      for (var i = this.devices.length - 1; i >= 0; --i) {
        this.devices[i].load_linear(this)
      }
      var n_vsrc = this.voltage_sources.length;
      if (n_vsrc > 0) {
        var GV = mat_make(n_vsrc, this.N);
        for (var i = n_vsrc - 1; i >= 0; --i) {
          var branch = this.voltage_sources[i].branch;
          for (var j = this.N - 1; j >= 0; j--) GV[i][j] = this.Gl[branch][j]
        }
        var rGV = mat_rank(GV);
        if (rGV < n_vsrc) {
          alert("Warning!!! Circuit has a voltage source loop or a source or current probe shorted by a wire, please remove the source or the wire causing the short.");
          alert("Warning!!! Simulator might produce meaningless results or no result with illegal circuits.");
          return false
        }
      }
    }
    return true
  };
  Circuit.prototype.load_netlist = function(netlist) {
    for (var i = netlist.length - 1; i >= 0; --i) {
      var component = netlist[i];
      var type = component[0];
      if (type == "g") {
        var connections = component[3];
        this.node_map[connections[0]] = this.gnd_node()
      }
    }
    var found_ground = false;
    for (var i = netlist.length - 1; i >= 0; --i) {
      var component = netlist[i];
      var type = component[0];
      if (type == "view" || type == "w" || type == "g" || type == "s" || type == "L") {
        continue
      }
      var properties = component[2];
      var name = properties["name"];
      if (name == undefined || name == "") name = "_" + properties["_json_"].toString();
      var connections = component[3];
      for (var j = connections.length - 1; j >= 0; --j) {
        var node = connections[j];
        var index = this.node_map[node];
        if (index == undefined) index = this.node(node, T_VOLTAGE);
        else if (index == this.gnd_node()) found_ground = true;
        connections[j] = index
      }
      if (type == "r") this.r(connections[0], connections[1], properties["r"], name);
      else if (type == "d") this.d(connections[0], connections[1], properties["area"], properties["type"], name);
      else if (type == "c") this.c(connections[0], connections[1], properties["c"], name);
      else if (type == "l") this.l(connections[0], connections[1], properties["l"], name);
      else if (type == "v") this.v(connections[0], connections[1], properties["value"], name);
      else if (type == "i") this.i(connections[0], connections[1], properties["value"], name);
      else if (type == "o") this.opamp(connections[0], connections[1], connections[2], connections[3], properties["A"], name);
      else if (type == "n") this.n(connections[0], connections[1], connections[2], properties["W/L"], name);
      else if (type == "p") this.p(connections[0], connections[1], connections[2], properties["W/L"], name);
      else if (type == "a") this.v(connections[0], connections[1], "0", name)
    }
    if (!found_ground) {
      alert("Please make at least one connection to ground  (inverted T symbol)");
      return false
    }
    return true
  };
  Circuit.prototype.find_solution = function(load, maxiters) {
    var soln = this.solution;
    var rhs = this.rhs;
    var d_sol = [];
    var abssum_compare;
    var converged, abssum_old = 0,
    abssum_rhs;
    var use_limiting = false;
    var down_count = 0;
    var thresh;
    for (var iter = 0; iter < maxiters; iter++) {
      load(this, soln, rhs);
      abssum_rhs = 0;
      for (var i = this.N - 1; i >= 0; --i) if (this.ntypes[i] == T_VOLTAGE) abssum_rhs += Math.abs(rhs[i]);
      if (iter > 0 && use_limiting == false && abssum_old < abssum_rhs) {
        for (var i = this.N - 1; i >= 0; --i) soln[i] -= d_sol[i];
        iter -= 1;
        use_limiting = true
      } else {
        d_sol = mat_solve_rq(this.matrix, rhs);
        if (abssum_rhs < abssum_old) down_count += 1;
        else down_count = 0;
        if (down_count > 10) {
          use_limiting = false;
          down_count = 0
        }
        abssum_old = abssum_rhs
      }
      if (iter == 0 || abssum_rhs > abssum_compare) abssum_compare = abssum_rhs;
      if (iter < maxiters - 1 && abssum_rhs > res_check_abs + res_check_rel * abssum_compare) converged = false;
      else converged = true;
      for (var i = this.N - 1; i >= 0; --i) {
        if (use_limiting) {
          if (this.ntypes[i] == T_VOLTAGE) {
            d_sol[i] = d_sol[i] > v_newt_lim ? v_newt_lim: d_sol[i];
            d_sol[i] = d_sol[i] < -v_newt_lim ? -v_newt_lim: d_sol[i]
          }
        }
        soln[i] += d_sol[i];
        thresh = this.abstol[i] + reltol * this.soln_max[i];
        if (Math.abs(d_sol[i]) > thresh) {
          converged = false;
          this.problem_node = i
        }
      }
      if (converged == true) {
        for (var i = this.N - 1; i >= 0; --i) if (Math.abs(soln[i]) > this.soln_max[i]) this.soln_max[i] = Math.abs(soln[i]);
        return iter + 1
      }
    }
    return undefined
  };
  Circuit.prototype.dc = function() {
    if (this.finalize() == false) return undefined;
    function load_dc(ckt, soln, rhs) {
      mat_v_mult(ckt.Gl, soln, rhs, -1);
      mat_copy(ckt.Gl, ckt.G);
      for (var i = ckt.devices.length - 1; i >= 0; --i) ckt.devices[i].load_dc(ckt, soln, rhs);
      mat_copy(ckt.G, ckt.matrix)
    }
    var iterations = this.find_solution(load_dc, dc_max_iters);
    if (typeof iterations == "undefined") {
      if (this.current_sources.length > 0) {
        alert("Newton Method Failed, do your current sources have a conductive path to ground?")
      } else {
        alert("Newton Method Failed, it may be your circuit or it may be our simulator.")
      }
      return undefined
    } else {
      this.diddc = true;
      var result = [];
      for (var name in this.node_map) {
        var index = this.node_map[name];
        result[name] = index == -1 ? 0 : this.solution[index]
      }
      for (var i = this.voltage_sources.length - 1; i >= 0; --i) {
        var v = this.voltage_sources[i];
        result["I(" + v.name + ")"] = this.solution[v.branch]
      }
      return result
    }
  };
  Circuit.prototype.tran = function(ntpts, tstart, tstop, probenames, no_dc) {
    function load_tran(ckt, soln, rhs) {
      mat_v_mult(ckt.Gl, soln, ckt.c, -1);
      mat_copy(ckt.Gl, ckt.G);
      for (var i = ckt.devices.length - 1; i >= 0; --i) ckt.devices[i].load_tran(ckt, soln, ckt.c, ckt.time);
      mat_v_mult(ckt.C, soln, ckt.q, 1);
      for (var i = ckt.N - 1; i >= 0; --i) {
        var dqdt = ckt.alpha0 * ckt.q[i] + ckt.alpha1 * ckt.oldq[i] + ckt.alpha2 * ckt.old2q[i];
        rhs[i] = ckt.beta0[i] * ckt.c[i] + ckt.beta1[i] * ckt.oldc[i] - dqdt
      }
      mat_scale_add(ckt.G, ckt.C, ckt.beta0, ckt.alpha0, ckt.matrix)
    }
    var p = new Array(3);
    function interp_coeffs(t, t0, t1, t2) {
      var dtt0 = t - t0;
      var dtt1 = t - t1;
      var dtt2 = t - t2;
      var dt0dt1 = t0 - t1;
      var dt0dt2 = t0 - t2;
      var dt1dt2 = t1 - t2;
      p[0] = dtt1 * dtt2 / (dt0dt1 * dt0dt2);
      p[1] = dtt0 * dtt2 / ( - dt0dt1 * dt1dt2);
      p[2] = dtt0 * dtt1 / (dt0dt2 * dt1dt2);
      return p
    }
    function pick_step(ckt, step_index) {
      var min_shrink_factor = 1 / lte_step_decrease_factor;
      var max_growth_factor = time_step_increase_factor;
      var N = ckt.N;
      var p = interp_coeffs(ckt.time, ckt.oldt, ckt.old2t, ckt.old3t);
      var trapcoeff = .5 * (ckt.time - ckt.oldt) / (ckt.time - ckt.old3t);
      var maxlteratio = 0;
      for (var i = ckt.N - 1; i >= 0; --i) {
        if (ckt.ltecheck[i]) {
          var pred = p[0] * ckt.oldsol[i] + p[1] * ckt.old2sol[i] + p[2] * ckt.old3sol[i];
          var lte = Math.abs(ckt.solution[i] - pred) * trapcoeff;
          var lteratio = lte / (lterel * (ckt.abstol[i] + reltol * ckt.soln_max[i]));
          maxlteratio = Math.max(maxlteratio, lteratio)
        }
      }
      var new_step;
      var lte_step_ratio = 1 / Math.pow(maxlteratio, 1 / 3);
      if (lte_step_ratio < 1) {
        lte_step_ratio = Math.max(lte_step_ratio, min_shrink_factor);
        new_step = (ckt.time - ckt.oldt) * .75 * lte_step_ratio;
        new_step = Math.max(new_step, ckt.min_step)
      } else {
        lte_step_ratio = Math.min(lte_step_ratio, max_growth_factor);
        if (lte_step_ratio > 1.2) new_step = (ckt.time - ckt.oldt) * lte_step_ratio / 1.2;
        else new_step = ckt.time - ckt.oldt;
        new_step = Math.min(new_step, ckt.max_step)
      }
      return new_step
    }
    no_dc = false;
    if (this.diddc == false && no_dc == false) {
      if (this.dc() == undefined) {
        alert("DC failed, trying transient analysis from zero.");
        this.finalized = false;
        if (this.finalize() == false) return undefined
      }
    } else {
      if (this.finalize() == false) return undefined
    }
    var N = this.N;
    var response = new Array(N + 1);
    for (var i = N; i >= 0; --i) response[i] = [];
    this.old3sol = new Array(this.N);
    this.old3q = new Array(this.N);
    this.old2sol = new Array(this.N);
    this.old2q = new Array(this.N);
    this.oldsol = new Array(this.N);
    this.oldq = new Array(this.N);
    this.q = new Array(this.N);
    this.oldc = new Array(this.N);
    this.c = new Array(this.N);
    this.alpha0 = 1;
    this.alpha1 = 0;
    this.alpha2 = 0;
    this.beta0 = new Array(this.N);
    this.beta1 = new Array(this.N);
    this.ar = this.algebraic(this.C);
    this.ltecheck = new Array(this.N);
    for (var i = N; i >= 0; --i) this.ltecheck[i] = this.ar[i] == 0;
    for (var name in this.node_map) {
      var index = this.node_map[name];
      for (var i = probenames.length; i >= 0; --i) {
        if (name == probenames[i]) {
          this.ltecheck[index] = true;
          break
        }
      }
    }
    var period = tstop - tstart;
    for (var i = this.voltage_sources.length - 1; i >= 0; --i) {
      var per = this.voltage_sources[i].src.period;
      if (per > 0) period = Math.min(period, per)
    }
    for (var i = this.current_sources.length - 1; i >= 0; --i) {
      var per = this.current_sources[i].src.period;
      if (per > 0) period = Math.min(period, per)
    }
    this.periods = Math.ceil((tstop - tstart) / period);
    this.time = tstart;
    this.max_step = (tstop - tstart) / (this.periods * ntpts);
    this.min_step = this.max_step / 1e8;
    var new_step = this.max_step / 1e6;
    this.oldt = this.time - new_step;
    load_tran(this, this.solution, this.rhs);
    for (var i = N - 1; i >= 0; --i) {
      this.old3sol[i] = this.solution[i];
      this.old2sol[i] = this.solution[i];
      this.oldsol[i] = this.solution[i];
      this.old3q[i] = this.q[i];
      this.old2q[i] = this.q[i];
      this.oldq[i] = this.q[i];
      this.oldc[i] = this.c[i]
    }
    var beta0, beta1;
    var max_nsteps = this.periods * 5e4;
    for (var step_index = -3; step_index < max_nsteps; step_index++) {
      for (var i = this.N - 1; i >= 0; --i) {
        if (step_index >= 0) response[i].push(this.solution[i]);
        this.oldc[i] = this.c[i];
        this.old3sol[i] = this.old2sol[i];
        this.old2sol[i] = this.oldsol[i];
        this.oldsol[i] = this.solution[i];
        this.old3q[i] = this.oldq[i];
        this.old2q[i] = this.oldq[i];
        this.oldq[i] = this.q[i]
      }
      if (step_index < 0) {
        this.old3t = this.old2t - (this.oldt - this.old2t);
        this.old2t = this.oldt - (tstart - this.oldt);
        this.oldt = tstart - (this.time - this.oldt);
        this.time = tstart;
        beta0 = 1;
        beta1 = 0
      } else {
        response[this.N].push(this.time);
        this.old3t = this.old2t;
        this.old2t = this.oldt;
        this.oldt = this.time;
        if (this.time >= tstop) break;
        else if (this.time + new_step > tstop) this.time = tstop;
        else if (this.time + 1.5 * new_step > tstop) this.time += 2 / 3 * (tstop - this.time);
        else this.time += new_step;
        beta0 = .5;
        beta1 = .5
      }
      for (var i = this.N - 1; i >= 0; --i) {
        this.beta0[i] = beta0 + this.ar[i] * beta1;
        this.beta1[i] = (1 - this.ar[i]) * beta1
      }
      while (true) {
        this.alpha0 = 1 / (this.time - this.oldt);
        this.alpha1 = -this.alpha0;
        this.alpha2 = 0;
        if (this.time - this.oldt < 1e-4 * tstop) {
          for (var i = this.N - 1; i >= 0; --i) {
            this.beta0[i] = 1;
            this.beta1[i] = 0
          }
        }
        var iterations = this.find_solution(load_tran, max_tran_iters);
        if (iterations != undefined && (step_index <= 0 || this.time - this.oldt < (1 + reltol) * this.min_step)) {
          if (step_index > 0) new_step = time_step_increase_factor * this.min_step;
          break
        } else if (iterations == undefined) {
          this.time = this.oldt + (this.time - this.oldt) / nr_step_decrease_factor
        } else {
          new_step = pick_step(this, step_index);
          if (new_step < (1 - reltol) * (this.time - this.oldt)) {
            this.time = this.oldt + new_step
          } else break
        }
      }
    }
    var result = [];
    for (var name in this.node_map) {
      var index = this.node_map[name];
      result[name] = index == -1 ? 0 : response[index]
    }
    for (var i = this.voltage_sources.length - 1; i >= 0; --i) {
      var v = this.voltage_sources[i];
      result["I(" + v.name + ")"] = response[v.branch]
    }
    result["_time_"] = response[this.N];
    return result
  };
  Circuit.prototype.ac = function(npts, fstart, fstop, source_name) {
    if (this.dc() == undefined) {
      return undefined
    }
    var N = this.N;
    var G = this.G;
    var C = this.C;
    var matrixac = mat_make(2 * N, 2 * N + 1);
    if (this.device_map[source_name] === undefined) {
      alert("AC analysis refers to unknown source " + source_name);
      return "AC analysis failed, unknown source"
    }
    this.device_map[source_name].load_ac(this, this.rhs);
    var response = new Array(2 * N + 1);
    for (var i = 2 * N; i >= 0; --i) response[i] = [];
    var delta_f = Math.exp(Math.LN10 / npts);
    var phase_offset = new Array(N);
    for (var i = N - 1; i >= 0; --i) phase_offset[i] = 0;
    var f = fstart;
    fstop *= 1.0001;
    while (f <= fstop) {
      var omega = 2 * Math.PI * f;
      response[2 * N].push(f);
      for (var i = N - 1; i >= 0; --i) {
        matrixac[i][2 * N] = this.rhs[i];
        matrixac[i + N][2 * N] = 0;
        for (var j = N - 1; j >= 0; --j) {
          matrixac[i][j] = G[i][j];
          matrixac[i + N][j + N] = G[i][j];
          matrixac[i][j + N] = -omega * C[i][j];
          matrixac[i + N][j] = omega * C[i][j]
        }
      }
      var solac = mat_solve(matrixac);
      for (var i = N - 1; i >= 0; --i) {
        var mag = Math.sqrt(solac[i] * solac[i] + solac[i + N] * solac[i + N]);
        response[i].push(mag);
        var phase = 180 * (Math.atan2(solac[i + N], solac[i]) / Math.PI);
        var phasei = response[i + N];
        var L = phasei.length;
        if (L > 1) {
          var phase_jump = phase + phase_offset[i] - phasei[L - 1];
          if (phase_jump > 90) {
            phase_offset[i] -= 360
          } else if (phase_jump < -90) {
            phase_offset[i] += 360
          }
        }
        response[i + N].push(phase + phase_offset[i])
      }
      f *= delta_f
    }
    var result = [];
    for (var name in this.node_map) {
      var index = this.node_map[name];
      result[name] = index == -1 ? 0 : response[index];
      result[name + "_phase"] = index == -1 ? 0 : response[index + N]
    }
    result["_frequencies_"] = response[2 * N];
    return result
  };
  Circuit.prototype.add_device = function(d, name) {
    this.devices.push(d);
    d.name = name;
    if (name) {
      if (this.device_map[name] === undefined) this.device_map[name] = d;
      else {
        alert("Warning: two circuit elements share the same name " + name);
        this.device_map[name] = d
      }
    }
    return d
  };
  Circuit.prototype.r = function(n1, n2, v, name) {
    if (typeof v == "string") {
      v = parse_number(v, undefined);
      if (v === undefined) return undefined
    }
    if (v != 0) {
      var d = new Resistor(n1, n2, v);
      return this.add_device(d, name)
    } else return this.v(n1, n2, "0", name)
  };
  Circuit.prototype.d = function(n1, n2, area, type, name) {
    if (typeof area == "string") {
      area = parse_number(area, undefined);
      if (area === undefined) return undefined
    }
    if (area != 0) {
      var d = new Diode(n1, n2, area, type);
      return this.add_device(d, name)
    }
  };
  Circuit.prototype.c = function(n1, n2, v, name) {
    if (typeof v == "string") {
      v = parse_number(v, undefined);
      if (v === undefined) return undefined
    }
    var d = new Capacitor(n1, n2, v);
    return this.add_device(d, name)
  };
  Circuit.prototype.l = function(n1, n2, v, name) {
    if (typeof v == "string") {
      v = parse_number(v, undefined);
      if (v === undefined) return undefined
    }
    var branch = this.node(undefined, T_CURRENT);
    var d = new Inductor(n1, n2, branch, v);
    return this.add_device(d, name)
  };
  Circuit.prototype.v = function(n1, n2, v, name) {
    var branch = this.node(undefined, T_CURRENT);
    var d = new VSource(n1, n2, branch, v);
    this.voltage_sources.push(d);
    return this.add_device(d, name)
  };
  Circuit.prototype.i = function(n1, n2, v, name) {
    var d = new ISource(n1, n2, v);
    this.current_sources.push(d);
    return this.add_device(d, name)
  };
  Circuit.prototype.opamp = function(np, nn, no, ng, A, name) {
    var ratio;
    if (typeof A == "string") {
      ratio = parse_number(A, undefined);
      if (A === undefined) return undefined
    }
    var branch = this.node(undefined, T_CURRENT);
    var d = new Opamp(np, nn, no, ng, branch, A, name);
    return this.add_device(d, name)
  };
  Circuit.prototype.n = function(d, g, s, ratio, name) {
    if (typeof ratio == "string") {
      ratio = parse_number(ratio, undefined);
      if (ratio === undefined) return undefined
    }
    var d = new Fet(d, g, s, ratio, name, "n");
    return this.add_device(d, name)
  };
  Circuit.prototype.p = function(d, g, s, ratio, name) {
    if (typeof ratio == "string") {
      ratio = parse_number(ratio, undefined);
      if (ratio === undefined) return undefined
    }
    var d = new Fet(d, g, s, ratio, name, "p");
    return this.add_device(d, name)
  };
  Circuit.prototype.add_two_terminal = function(i, j, g, M) {
    if (i >= 0) {
      M[i][i] += g;
      if (j >= 0) {
        M[i][j] -= g;
        M[j][i] -= g;
        M[j][j] += g
      }
    } else if (j >= 0) M[j][j] += g
  };
  Circuit.prototype.get_two_terminal = function(i, j, x) {
    var xi_minus_xj = 0;
    if (i >= 0) xi_minus_xj = x[i];
    if (j >= 0) xi_minus_xj -= x[j];
    return xi_minus_xj
  };
  Circuit.prototype.add_conductance_l = function(i, j, g) {
    this.add_two_terminal(i, j, g, this.Gl)
  };
  Circuit.prototype.add_conductance = function(i, j, g) {
    this.add_two_terminal(i, j, g, this.G)
  };
  Circuit.prototype.add_capacitance = function(i, j, c) {
    this.add_two_terminal(i, j, c, this.C)
  };
  Circuit.prototype.add_to_Gl = function(i, j, g) {
    if (i >= 0 && j >= 0) this.Gl[i][j] += g
  };
  Circuit.prototype.add_to_G = function(i, j, g) {
    if (i >= 0 && j >= 0) this.G[i][j] += g
  };
  Circuit.prototype.add_to_C = function(i, j, c) {
    if (i >= 0 && j >= 0) this.C[i][j] += c
  };
  Circuit.prototype.add_to_rhs = function(i, v, rhs) {
    if (i >= 0) rhs[i] += v
  };
  function mat_make(N, M) {
    var mat = new Array(N);
    for (var i = N - 1; i >= 0; --i) {
      mat[i] = new Array(M);
      for (var j = M - 1; j >= 0; --j) {
        mat[i][j] = 0
      }
    }
    return mat
  }
  function mat_v_mult(M, x, b, scale) {
    var n = M.length;
    var m = M[0].length;
    if (n != b.length || m != x.length) throw "Rows of M mismatched to b or cols mismatch to x.";
    for (var i = 0; i < n; i++) {
      var temp = 0;
      for (var j = 0; j < m; j++) temp += M[i][j] * x[j];
      b[i] = scale * temp
    }
  }
  function mat_scale_add(A, B, scalea, scaleb, C) {
    var n = A.length;
    var m = A[0].length;
    if (n > B.length || m > B[0].length) throw "Row or columns of A to large for B";
    if (n > C.length || m > C[0].length) throw "Row or columns of A to large for C";
    if (typeof scalea == "number" && typeof scaleb == "number") for (var i = 0; i < n; i++) for (var j = 0; j < m; j++) C[i][j] = scalea * A[i][j] + scaleb * B[i][j];
    else if (typeof scaleb == "number" && scalea instanceof Array) for (var i = 0; i < n; i++) for (var j = 0; j < m; j++) C[i][j] = scalea[i] * A[i][j] + scaleb * B[i][j];
    else if (typeof scaleb instanceof Array && scalea instanceof Array) for (var i = 0; i < n; i++) for (var j = 0; j < m; j++) C[i][j] = scalea[i] * A[i][j] + scaleb[i] * B[i][j];
    else throw "scalea and scaleb must be scalars or Arrays"
  }
  Circuit.prototype.algebraic = function(M) {
    var Nr = M.length;
    var Mc = mat_make(Nr, Nr);
    mat_copy(M, Mc);
    var R = mat_rank(Mc);
    var one_if_alg = new Array(Nr);
    for (var row = 0; row < Nr; row++) {
      for (var col = Nr - 1; col >= 0; --col) Mc[row][col] = 0;
      if (mat_rank(Mc) == R) one_if_alg[row] = 1;
      else {
        for (var col = Nr - 1; col >= 0; --col) Mc[row][col] = M[row][col];
        one_if_alg[row] = 0
      }
    }
    return one_if_alg
  };
  function mat_copy(src, dest) {
    var n = src.length;
    var m = src[0].length;
    if (n > dest.length || m > dest[0].length) throw "Rows or cols > rows or cols of dest";
    for (var i = 0; i < n; i++) for (var j = 0; j < m; j++) dest[i][j] = src[i][j]
  }
  function mat_copy_transposed(src, dest) {
    var n = src.length;
    var m = src[0].length;
    if (n > dest[0].length || m > dest.length) throw "Rows or cols > cols or rows of dest";
    for (var i = 0; i < n; i++) for (var j = 0; j < m; j++) dest[j][i] = src[i][j]
  }
  function mat_rank(Mo) {
    var Nr = Mo.length;
    var Nc = Mo[0].length;
    var temp, i, j;
    var M = mat_make(Nr, Nc);
    mat_copy(Mo, M);
    var max_abs_entry = 0;
    for (var row = Nr - 1; row >= 0; --row) {
      for (var col = Nr - 1; col >= 0; --col) {
        if (Math.abs(M[row][col]) > max_abs_entry) max_abs_entry = Math.abs(M[row][col])
      }
    }
    var the_rank = 0;
    var start_col = 0;
    for (var row = 0; row < Nr; row++) {
      for (var col = start_col; col < Nc; col++) {
        var max_v = Math.abs(M[row][col]);
        var max_row = row;
        for (var i = row + 1; i < Nr; i++) {
          temp = Math.abs(M[i][col]);
          if (temp > max_v) {
            max_v = temp;
            max_row = i
          }
        }
        if (Math.abs(max_v) > eps * max_abs_entry) {
          start_col = col + 1;
          the_rank += 1;
          temp = M[row];
          M[row] = M[max_row];
          M[max_row] = temp;
          for (var i = row + 1; i < Nr; i++) {
            temp = M[i][col] / M[row][col];
            if (temp != 0) for (var j = col; j < Nc; j++) M[i][j] -= M[row][j] * temp
          }
          break
        }
      }
    }
    return the_rank
  }
  function mat_solve_rq(M, rhs) {
    var scale;
    var Nr = M.length;
    var Nc = M[0].length;
    if (rhs != null) {
      for (var row = Nr - 1; row >= 0; --row) M[row][Nc - 1] = rhs[row]
    }
    var mat_scale = 0;
    var max_nonzero_row = Nr - 1;
    for (var row = 0; row < Nr; row++) {
      var max_row = row;
      var maxsumsq = 0;
      for (var rowp = row; rowp < Nr; rowp++) {
        var Mr = M[rowp];
        var sumsq = 0;
        for (var col = Nc - 2; col >= 0; --col) sumsq += Mr[col] * Mr[col];
        if (row == rowp || sumsq > maxsumsq) {
          max_row = rowp;
          maxsumsq = sumsq
        }
      }
      if (max_row > row) {
        var temp = M[row];
        M[row] = M[max_row];
        M[max_row] = temp
      }
      var row_norm = Math.sqrt(maxsumsq);
      if (row == 0) mat_scale = row_norm;
      if (row_norm > mat_scale * eps) scale = 1 / row_norm;
      else {
        max_nonzero_row = row - 1;
        break
      }
      var Mr = M[row];
      for (var col = Nc - 1; col >= 0; --col) Mr[col] *= scale;
      for (var rowp = row + 1; rowp < Nr; rowp++) {
        var Mrp = M[rowp];
        var inner = 0;
        for (var col = Nc - 2; col >= 0; --col) inner += Mr[col] * Mrp[col];
        for (var col = Nc - 1; col >= 0; --col) Mrp[col] -= inner * Mr[col]
      }
    }
    var x = new Array(Nc - 1);
    for (var col = Nc - 2; col >= 0; --col) x[col] = 0;
    for (var row = max_nonzero_row; row >= 0; --row) {
      Mr = M[row];
      for (var col = Nc - 2; col >= 0; --col) {
        x[col] += Mr[col] * Mr[Nc - 1]
      }
    }
    return x
  }
  function mat_solve(M, rhs) {
    var N = M.length;
    var temp, i, j;
    if (rhs != null) {
      for (var row = 0; row < N; row++) M[row][N] = rhs[row]
    }
    for (var col = 0; col < N; col++) {
      var max_v = Math.abs(M[col][col]);
      var max_col = col;
      for (i = col + 1; i < N; i++) {
        temp = Math.abs(M[i][col]);
        if (temp > max_v) {
          max_v = temp;
          max_col = i
        }
      }
      if (max_v == 0) M[col][col] = eps;
      else {
        temp = M[col];
        M[col] = M[max_col];
        M[max_col] = temp
      }
      for (i = col + 1; i < N; i++) {
        temp = M[i][col] / M[col][col];
        if (temp != 0) for (j = col; j <= N; j++) M[i][j] -= M[col][j] * temp
      }
    }
    var x = new Array(N);
    for (i = N - 1; i >= 0; --i) {
      temp = M[i][N];
      for (j = N - 1; j > i; --j) temp -= M[i][j] * x[j];
      x[i] = temp / M[i][i]
    }
    return x
  }
  function Device() {}
  Device.prototype.finalize = function() {};
  Device.prototype.load_linear = function(ckt) {};
  Device.prototype.load_dc = function(ckt, soln, rhs) {};
  Device.prototype.load_tran = function(ckt, soln) {};
  Device.prototype.load_ac = function(ckt, rhs) {};
  Device.prototype.breakpoint = function(time) {
    return undefined
  };
  function ord(ch) {
    return ch.charCodeAt(0)
  }
  function parse_number(s, default_v) {
    var slen = s.length;
    var multiplier = 1;
    var result = 0;
    var index = 0;
    while (index < slen && s.charAt(index) <= " ") index += 1;
    if (index == slen) return default_v;
    if (s.charAt(index) == "-") {
      multiplier = -1;
      index += 1
    } else if (s.charAt(index) == "+") index += 1;
    var start = index;
    if (index >= slen) return default_v;
    else if (s.charAt(index) == "0") {
      index += 1;
      if (index >= slen) return 0;
      if (s.charAt(index) == "x" || s.charAt(index) == "X") {
        while (true) {
          index += 1;
          if (index >= slen) break;
          if (s.charAt(index) >= "0" && s.charAt(index) <= "9") result = result * 16 + ord(s.charAt(index)) - ord("0");
          else if (s.charAt(index) >= "A" && s.charAt(index) <= "F") result = result * 16 + ord(s.charAt(index)) - ord("A") + 10;
          else if (s.charAt(index) >= "a" && s.charAt(index) <= "f") result = result * 16 + ord(s.charAt(index)) - ord("a") + 10;
          else break
        }
        return result * multiplier
      } else if (s.charAt(index) == "b" || s.charAt(index) == "B") {
        while (true) {
          index += 1;
          if (index >= slen) break;
          if (s.charAt(index) >= "0" && s.charAt(index) <= "1") result = result * 2 + ord(s.charAt(index)) - ord("0");
          else break
        }
        return result * multiplier
      } else if (s.charAt(index) != ".") {
        while (true) {
          if (s.charAt(index) >= "0" && s.charAt(index) <= "7") result = result * 8 + ord(s.charAt(index)) - ord("0");
          else break;
          index += 1;
          if (index >= slen) break
        }
        return result * multiplier
      }
    }
    while (true) {
      if (s.charAt(index) >= "0" && s.charAt(index) <= "9") result = result * 10 + ord(s.charAt(index)) - ord("0");
      else break;
      index += 1;
      if (index >= slen) break
    }
    if (index < slen && s.charAt(index) == ".") {
      while (true) {
        index += 1;
        if (index >= slen) break;
        if (s.charAt(index) >= "0" && s.charAt(index) <= "9") {
          result = result * 10 + ord(s.charAt(index)) - ord("0");
          multiplier *= .1
        } else break
      }
    }
    if (index == start) return default_v;
    result *= multiplier;
    if (index < slen) {
      var scale = s.charAt(index);
      index += 1;
      if (scale == "e" || scale == "E") {
        var exponent = 0;
        multiplier = 10;
        if (index < slen) {
          if (s.charAt(index) == "+") index += 1;
          else if (s.charAt(index) == "-") {
            index += 1;
            multiplier = .1
          }
        }
        while (index < slen) {
          if (s.charAt(index) >= "0" && s.charAt(index) <= "9") {
            exponent = exponent * 10 + ord(s.charAt(index)) - ord("0");
            index += 1
          } else break
        }
        while (exponent > 0) {
          exponent -= 1;
          result *= multiplier
        }
      } else if (scale == "t" || scale == "T") result *= 1e12;
      else if (scale == "g" || scale == "G") result *= 1e9;
      else if (scale == "M") result *= 1e6;
      else if (scale == "k" || scale == "K") result *= 1e3;
      else if (scale == "m") result *= .001;
      else if (scale == "u" || scale == "U") result *= 1e-6;
      else if (scale == "n" || scale == "N") result *= 1e-9;
      else if (scale == "p" || scale == "P") result *= 1e-12;
      else if (scale == "f" || scale == "F") result *= 1e-15
    }
    return result
  }
  Circuit.prototype.parse_number = parse_number;
  function parse_source(v) {
    var src = {};
    src.period = 0;
    src.value = function(t) {
      return 0
    };
    src.inflection_point = function(t) {
      return undefined
    };
    var index = v.indexOf("(");
    var ch;
    if (index >= 0) {
      src.fun = v.slice(0, index);
      src.args = [];
      var end = v.indexOf(")", index);
      if (end == -1) end = v.length;
      index += 1;
      while (index < end) {
        ch = v.charAt(index);
        if (ch <= " ") {
          index++;
          continue
        }
        var arg_end = v.indexOf(",", index);
        if (arg_end == -1) arg_end = end;
        src.args.push(parse_number(v.slice(index, arg_end), undefined));
        index = arg_end + 1
      }
    } else {
      src.fun = "dc";
      src.args = [parse_number(v, 0)]
    }
    if (src.fun == "dc") {
      var v = arg_value(src.args, 0, 0);
      src.args = [v];
      src.value = function(t) {
        return v
      }
    } else if (src.fun == "impulse") {
      var h = arg_value(src.args, 0, 1);
      var w = Math.abs(arg_value(src.args, 2, 1e-9));
      src.args = [h, w];
      pwl_source(src, [0, 0, w / 2, h, w, 0], false)
    } else if (src.fun == "step") {
      var v1 = arg_value(src.args, 0, 0);
      var v2 = arg_value(src.args, 1, 1);
      var td = Math.max(0, arg_value(src.args, 2, 0));
      var tr = Math.abs(arg_value(src.args, 3, 1e-9));
      src.args = [v1, v2, td, tr];
      pwl_source(src, [td, v1, td + tr, v2], false)
    } else if (src.fun == "square") {
      var v1 = arg_value(src.args, 0, 0);
      var v2 = arg_value(src.args, 1, 1);
      var freq = Math.abs(arg_value(src.args, 2, 1));
      var duty_cycle = Math.min(100, Math.abs(arg_value(src.args, 3, 50)));
      src.args = [v1, v2, freq, duty_cycle];
      var per = freq == 0 ? Infinity: 1 / freq;
      var t_change = .01 * per;
      var t_pw = .01 * duty_cycle * .98 * per;
      pwl_source(src, [0, v1, t_change, v2, t_change + t_pw, v2, t_change + t_pw + t_change, v1, per, v1], true)
    } else if (src.fun == "triangle") {
      var v1 = arg_value(src.args, 0, 0);
      var v2 = arg_value(src.args, 1, 1);
      var freq = Math.abs(arg_value(src.args, 2, 1));
      src.args = [v1, v2, freq];
      var per = freq == 0 ? Infinity: 1 / freq;
      pwl_source(src, [0, v1, per / 2, v2, per, v1], true)
    } else if (src.fun == "pwl" || src.fun == "pwl_repeating") {
      pwl_source(src, src.args, src.fun == "pwl_repeating")
    } else if (src.fun == "pulse") {
      var v1 = arg_value(src.args, 0, 0);
      var v2 = arg_value(src.args, 1, 1);
      var td = Math.max(0, arg_value(src.args, 2, 0));
      var tr = Math.abs(arg_value(src.args, 3, 1e-9));
      var tf = Math.abs(arg_value(src.args, 4, 1e-9));
      var pw = Math.abs(arg_value(src.args, 5, 1e9));
      var per = Math.abs(arg_value(src.args, 6, 1e9));
      src.args = [v1, v2, td, tr, tf, pw, per];
      var t1 = td;
      var t2 = t1 + tr;
      var t3 = t2 + pw;
      var t4 = t3 + tf;
      pwl_source(src, [t1, v1, t2, v2, t3, v2, t4, v1, per, v1], true)
    } else if (src.fun == "sin") {
      var voffset = arg_value(src.args, 0, 0);
      var va = arg_value(src.args, 1, 1);
      var freq = Math.abs(arg_value(src.args, 2, 1));
      src.period = 1 / freq;
      var td = Math.max(0, arg_value(src.args, 3, 0));
      var phase = arg_value(src.args, 4, 0);
      src.args = [voffset, va, freq, td, phase];
      phase /= 360;
      src.value = function(t) {
        if (t < td) return voffset + va * Math.sin(2 * Math.PI * phase);
        else return voffset + va * Math.sin(2 * Math.PI * (freq * (t - td) + phase))
      };
      src.inflection_point = function(t) {
        if (t < td) return td;
        else return undefined
      }
    }
    src.dc = src.value(0);
    return src
  }
  function pwl_source(src, tv_pairs, repeat) {
    var nvals = tv_pairs.length;
    if (repeat) src.period = tv_pairs[nvals - 2];
    if (nvals % 2 == 1) npts -= 1;
    if (nvals <= 2) {
      src.value = function(t) {
        return nvals == 2 ? tv_pairs[1] : 0
      };
      src.inflection_point = function(t) {
        return undefined
      }
    } else {
      src.value = function(t) {
        if (repeat) t = Math.fmod(t, tv_pairs[nvals - 2]);
        var last_t = tv_pairs[0];
        var last_v = tv_pairs[1];
        if (t > last_t) {
          var next_t, next_v;
          for (var i = 2; i < nvals; i += 2) {
            next_t = tv_pairs[i];
            next_v = tv_pairs[i + 1];
            if (next_t > last_t) if (t < next_t) return last_v + (next_v - last_v) * (t - last_t) / (next_t - last_t);
            last_t = next_t;
            last_v = next_v
          }
        }
        return last_v
      };
      src.inflection_point = function(t) {
        if (repeat) t = Math.fmod(t, tv_pairs[nvals - 2]);
        for (var i = 0; i < nvals; i += 2) {
          var next_t = tv_pairs[i];
          if (t < next_t) return next_t
        }
        return undefined
      }
    }
  }
  function arg_value(args, index, default_v) {
    if (index < args.length) {
      var result = args[index];
      if (result === undefined) result = default_v;
      return result
    } else return default_v
  }
  Math.fmod = function(numerator, denominator) {
    var quotient = Math.floor(numerator / denominator);
    return numerator - quotient * denominator
  };
  function VSource(npos, nneg, branch, v) {
    Device.call(this);
    this.src = parse_source(v);
    this.npos = npos;
    this.nneg = nneg;
    this.branch = branch
  }
  VSource.prototype = new Device;
  VSource.prototype.constructor = VSource;
  VSource.prototype.load_linear = function(ckt) {
    ckt.add_to_Gl(this.branch, this.npos, 1);
    ckt.add_to_Gl(this.branch, this.nneg, -1);
    ckt.add_to_Gl(this.npos, this.branch, 1);
    ckt.add_to_Gl(this.nneg, this.branch, -1)
  };
  VSource.prototype.load_dc = function(ckt, soln, rhs) {
    ckt.add_to_rhs(this.branch, this.src.dc, rhs)
  };
  VSource.prototype.load_tran = function(ckt, soln, rhs, time) {
    ckt.add_to_rhs(this.branch, this.src.value(time), rhs)
  };
  VSource.prototype.breakpoint = function(time) {
    return this.src.inflection_point(time)
  };
  VSource.prototype.load_ac = function(ckt, rhs) {
    ckt.add_to_rhs(this.branch, 1, rhs)
  };
  function ISource(npos, nneg, v) {
    Device.call(this);
    this.src = parse_source(v);
    this.npos = npos;
    this.nneg = nneg
  }
  ISource.prototype = new Device;
  ISource.prototype.constructor = ISource;
  ISource.prototype.load_linear = function(ckt) {};
  ISource.prototype.load_dc = function(ckt, soln, rhs) {
    var is = this.src.dc;
    ckt.add_to_rhs(this.npos, -is, rhs);
    ckt.add_to_rhs(this.nneg, is, rhs)
  };
  ISource.prototype.load_tran = function(ckt, soln, rhs, time) {
    var is = this.src.value(time);
    ckt.add_to_rhs(this.npos, -is, rhs);
    ckt.add_to_rhs(this.nneg, is, rhs)
  };
  ISource.prototype.breakpoint = function(time) {
    return this.src.inflection_point(time)
  };
  ISource.prototype.load_ac = function(ckt, rhs) {
    ckt.add_to_rhs(this.npos, -1, rhs);
    ckt.add_to_rhs(this.nneg, 1, rhs)
  };
  function Resistor(n1, n2, v) {
    Device.call(this);
    this.n1 = n1;
    this.n2 = n2;
    this.g = 1 / v
  }
  Resistor.prototype = new Device;
  Resistor.prototype.constructor = Resistor;
  Resistor.prototype.load_linear = function(ckt) {
    ckt.add_conductance_l(this.n1, this.n2, this.g)
  };
  Resistor.prototype.load_dc = function(ckt) {};
  Resistor.prototype.load_tran = function(ckt, soln) {};
  Resistor.prototype.load_ac = function(ckt) {};
  function Diode(n1, n2, v, type) {
    Device.call(this);
    this.anode = n1;
    this.cathode = n2;
    this.area = v;
    this.type = type;
    this.is = 1e-14;
    this.ais = this.area * this.is;
    this.vt = type == "normal" ? .0258 : 1e-4;
    this.exp_arg_max = 50;
    this.exp_max = Math.exp(this.exp_arg_max)
  }
  Diode.prototype = new Device;
  Diode.prototype.constructor = Diode;
  Diode.prototype.load_linear = function(ckt) {};
  Diode.prototype.load_dc = function(ckt, soln, rhs) {
    var vd = ckt.get_two_terminal(this.anode, this.cathode, soln);
    var exp_arg = vd / this.vt;
    var temp1, temp2;
    var abs_exp_arg = Math.abs(exp_arg);
    var d_arg = abs_exp_arg - this.exp_arg_max;
    if (d_arg > 0) {
      var quad = 1 + d_arg + .5 * d_arg * d_arg;
      temp1 = this.exp_max * quad;
      temp2 = this.exp_max * (1 + d_arg)
    } else {
      temp1 = Math.exp(abs_exp_arg);
      temp2 = temp1
    }
    if (exp_arg < 0) {
      temp1 = 1 / temp1;
      temp2 = temp1 * temp2 * temp1
    }
    var id = this.ais * (temp1 - 1);
    var gd = this.ais * (temp2 / this.vt);
    ckt.add_to_rhs(this.anode, -id, rhs);
    ckt.add_to_rhs(this.cathode, id, rhs);
    ckt.add_conductance(this.anode, this.cathode, gd)
  };
  Diode.prototype.load_tran = function(ckt, soln, rhs, time) {
    this.load_dc(ckt, soln, rhs)
  };
  Diode.prototype.load_ac = function(ckt) {};
  function Capacitor(n1, n2, v) {
    Device.call(this);
    this.n1 = n1;
    this.n2 = n2;
    this.value = v
  }
  Capacitor.prototype = new Device;
  Capacitor.prototype.constructor = Capacitor;
  Capacitor.prototype.load_linear = function(ckt) {
    ckt.add_capacitance(this.n1, this.n2, this.value)
  };
  Capacitor.prototype.load_dc = function(ckt, soln, rhs) {};
  Capacitor.prototype.load_ac = function(ckt) {};
  Capacitor.prototype.load_tran = function(ckt) {};
  function Inductor(n1, n2, branch, v) {
    Device.call(this);
    this.n1 = n1;
    this.n2 = n2;
    this.branch = branch;
    this.value = v
  }
  Inductor.prototype = new Device;
  Inductor.prototype.constructor = Inductor;
  Inductor.prototype.load_linear = function(ckt) {
    ckt.add_to_Gl(this.n1, this.branch, 1);
    ckt.add_to_Gl(this.n2, this.branch, -1);
    ckt.add_to_Gl(this.branch, this.n1, -1);
    ckt.add_to_Gl(this.branch, this.n2, 1);
    ckt.add_to_C(this.branch, this.branch, this.value)
  };
  Inductor.prototype.load_dc = function(ckt, soln, rhs) {};
  Inductor.prototype.load_ac = function(ckt) {};
  Inductor.prototype.load_tran = function(ckt) {};
  function Opamp(np, nn, no, ng, branch, A, name) {
    Device.call(this);
    this.np = np;
    this.nn = nn;
    this.no = no;
    this.ng = ng;
    this.branch = branch;
    this.gain = A;
    this.name = name
  }
  Opamp.prototype = new Device;
  Opamp.prototype.constructor = Opamp;
  Opamp.prototype.load_linear = function(ckt) {
    var invA = 1 / this.gain;
    ckt.add_to_Gl(this.no, this.branch, 1);
    ckt.add_to_Gl(this.ng, this.branch, -1);
    ckt.add_to_Gl(this.branch, this.no, invA);
    ckt.add_to_Gl(this.branch, this.ng, -invA);
    ckt.add_to_Gl(this.branch, this.np, -1);
    ckt.add_to_Gl(this.branch, this.nn, 1)
  };
  Opamp.prototype.load_dc = function(ckt, soln, rhs) {};
  Opamp.prototype.load_ac = function(ckt) {};
  Opamp.prototype.load_tran = function(ckt) {};
  function Fet(d, g, s, ratio, name, type) {
    Device.call(this);
    this.d = d;
    this.g = g;
    this.s = s;
    this.name = name;
    this.ratio = ratio;
    if (type != "n" && type != "p") {
      throw "fet type is not n or p"
    }
    this.type_sign = type == "n" ? 1 : -1;
    this.vt = .5;
    this.kp = 2e-5;
    this.beta = this.kp * this.ratio;
    this.lambda = .05
  }
  Fet.prototype = new Device;
  Fet.prototype.constructor = Fet;
  Fet.prototype.load_linear = function(ckt) {};
  Fet.prototype.load_dc = function(ckt, soln, rhs) {
    var vds = this.type_sign * ckt.get_two_terminal(this.d, this.s, soln);
    if (vds < 0) {
      var temp = this.d;
      this.d = this.s;
      this.s = temp;
      vds = this.type_sign * ckt.get_two_terminal(this.d, this.s, soln)
    }
    var vgs = this.type_sign * ckt.get_two_terminal(this.g, this.s, soln);
    var vgst = vgs - this.vt;
    with(this) {
      var gmgs, ids, gds;
      if (vgst > 0) {
        if (vgst < vds) {
          gmgs = beta * (1 + lambda * vds) * vgst;
          ids = type_sign * .5 * gmgs * vgst;
          gds = .5 * beta * vgst * vgst * lambda
        } else {
          gmgs = beta * (1 + lambda * vds);
          ids = type_sign * gmgs * vds * (vgst - .5 * vds);
          gds = gmgs * (vgst - vds) + beta * lambda * vds * (vgst - .5 * vds);
          gmgs *= vds
        }
        ckt.add_to_rhs(d, -ids, rhs);
        ckt.add_to_rhs(s, ids, rhs);
        ckt.add_conductance(d, s, gds);
        ckt.add_to_G(s, s, gmgs);
        ckt.add_to_G(d, s, -gmgs);
        ckt.add_to_G(d, g, gmgs);
        ckt.add_to_G(s, g, -gmgs)
      }
    }
  };
  Fet.prototype.load_tran = function(ckt, soln, rhs) {
    this.load_dc(ckt, soln, rhs)
  };
  Fet.prototype.load_ac = function(ckt) {};
  var module = {
    Circuit: Circuit,
    parse_number: parse_number,
    parse_source: parse_source
  };
  return module
} ();
function update_schematics() {
  var schematics = $(".schematic");
  for (var i = 0; i < schematics.length; ++i) if (schematics[i].getAttribute("loaded") != "true") {
    try {
      new schematic.Schematic(schematics[i])
    } catch(err) {
      var msgdiv = document.createElement("div");
      msgdiv.style.border = "thick solid #FF0000";
      msgdiv.style.margins = "20px";
      msgdiv.style.padding = "20px";
      var msg = document.createTextNode("Sorry, there a browser error in starting the schematic tool.  The tool is known to be compatible with the latest versions of Firefox and Chrome, which we recommend you use.");
      msgdiv.appendChild(msg);
      schematics[i].parentNode.insertBefore(msgdiv, schematics[i])
    }
    schematics[i].setAttribute("loaded", "true")
  }
}
window.update_schematics = update_schematics;
schematic = function() {
  var background_style = "rgb(220,220,220)";
  var element_style = "rgb(255,255,255)";
  var thumb_style = "rgb(128,128,128)";
  var normal_style = "rgb(0,0,0)";
  var component_style = "rgb(64,64,255)";
  var selected_style = "rgb(64,255,64)";
  var grid_style = "rgb(128,128,128)";
  var annotation_style = "rgb(255,64,64)";
  var property_size = 5;
  var annotation_size = 6;
  var parts_map = {
    g: [Ground, "Ground connection"],
    L: [Label, "Node label"],
    v: [VSource, "Voltage source"],
    i: [ISource, "Current source"],
    r: [Resistor, "Resistor"],
    c: [Capacitor, "Capacitor"],
    l: [Inductor, "Inductor"],
    o: [OpAmp, "Op Amp"],
    d: [Diode, "Diode"],
    n: [NFet, "NFet"],
    p: [PFet, "PFet"],
    s: [Probe, "Voltage Probe"],
    a: [Ammeter, "Current Probe"]
  };
  if (typeof sch_clipboard == "undefined") sch_clipboard = [];
  function Schematic(input) {
    this.show_grid = true;
    this.grid = 8;
    this.scale = 2;
    this.origin_x = input.getAttribute("origin_x");
    if (this.origin_x == undefined) this.origin_x = 0;
    this.origin_y = input.getAttribute("origin_y");
    if (this.origin_y == undefined) this.origin_y = 0;
    this.cursor_x = 0;
    this.cursor_y = 0;
    this.window_list = [];
    this.edits_allowed = true;
    var parts = input.getAttribute("parts");
    if (parts == undefined || parts == "None") {
      parts = [];
      for (var p in parts_map) parts.push(p)
    } else if (parts == "") {
      this.edits_allowed = false;
      parts = []
    } else parts = parts.split(",");
    this.parts_bin = [];
    for (var i = 0; i < parts.length; i++) {
      var part = new Part(this);
      var pm = parts_map[parts[i]];
      part.set_component(new pm[0](0, 0, 0), pm[1]);
      this.parts_bin.push(part)
    }
    var analyses = input.getAttribute("analyses");
    if (analyses == undefined || analyses == "None") analyses = ["dc", "ac", "tran"];
    else if (analyses == "") analyses = [];
    else analyses = analyses.split(",");
    if (parts.length == 0 && analyses.length == 0) this.diagram_only = true;
    else this.diagram_only = false;
    var submit = input.getAttribute("submit_analyses");
    if (submit && submit.indexOf("{") != -1) this.submit_analyses = JSON.parse(submit);
    else this.submit_analyses = undefined;
    this.tools = [];
    this.toolbar = [];
    if (this.edits_allowed) {
      this.tools["grid"] = this.add_tool(grid_icon, "Grid: toggle grid display", this.toggle_grid);
      this.enable_tool("grid", true);
      this.tools["cut"] = this.add_tool(cut_icon, "Cut: move selected components from diagram to the clipboard", this.cut);
      this.tools["copy"] = this.add_tool(copy_icon, "Copy: copy selected components into the clipboard", this.copy);
      this.tools["paste"] = this.add_tool(paste_icon, "Paste: copy clipboard into the diagram", this.paste);
      this.toolbar.push(null)
    }
    if (typeof cktsim != "undefined") {
      if (analyses.indexOf("dc") != -1) {
        this.tools["dc"] = this.add_tool("DC", "DC Analysis", this.dc_analysis);
        this.enable_tool("dc", true);
        this.dc_max_iters = "1000"
      }
      if (analyses.indexOf("ac") != -1) {
        this.tools["ac"] = this.add_tool("AC", "AC Small-Signal Analysis", this.setup_ac_analysis);
        this.enable_tool("ac", true);
        this.ac_npts = "50";
        this.ac_fstart = "10";
        this.ac_fstop = "1G";
        this.ac_source_name = undefined
      }
      if (analyses.indexOf("tran") != -1) {
        this.tools["tran"] = this.add_tool("TRAN", "Transient Analysis", this.transient_analysis);
        this.enable_tool("tran", true);
        this.tran_npts = "100";
        this.tran_tstop = "1"
      }
    }
    this.canvas = document.createElement("canvas");
    this.width = input.getAttribute("width");
    this.width = parseInt(this.width == undefined ? "400": this.width);
    this.canvas.width = this.width;
    this.height = input.getAttribute("height");
    this.height = parseInt(this.height == undefined ? "300": this.height);
    this.canvas.height = this.height;
    this.sctl_r = 16;
    this.sctl_x = this.sctl_r + 8;
    this.sctl_y = this.sctl_r + 8;
    this.zctl_left = this.sctl_x - 8;
    this.zctl_top = this.sctl_y + this.sctl_r + 8;
    this.bg_image = document.createElement("canvas");
    this.bg_image.width = this.width;
    this.bg_image.height = this.height;
    if (!this.diagram_only) {
      this.canvas.tabIndex = 1;
      this.canvas.style.borderStyle = "solid";
      this.canvas.style.borderWidth = "1px";
      this.canvas.style.borderColor = grid_style;
      this.canvas.style.outline = "none"
    }
    this.canvas.schematic = this;
    if (this.edits_allowed) {
      this.canvas.addEventListener("mousemove", schematic_mouse_move, false);
      this.canvas.addEventListener("mouseover", schematic_mouse_enter, false);
      this.canvas.addEventListener("mouseout", schematic_mouse_leave, false);
      this.canvas.addEventListener("mousedown", schematic_mouse_down, false);
      this.canvas.addEventListener("mouseup", schematic_mouse_up, false);
      this.canvas.addEventListener("mousewheel", schematic_mouse_wheel, false);
      this.canvas.addEventListener("DOMMouseScroll", schematic_mouse_wheel, false);
      this.canvas.addEventListener("dblclick", schematic_double_click, false);
      this.canvas.addEventListener("keydown", schematic_key_down, false);
      this.canvas.addEventListener("keyup", schematic_key_up, false)
    }
    if (!this.diagram_only) {
      this.status_div = document.createElement("div");
      this.status = document.createTextNode("");
      this.status_div.appendChild(this.status);
      this.status_div.style.height = status_height + "px"
    } else this.status_div = undefined;
    this.connection_points = [];
    this.components = [];
    this.dragging = false;
    this.select_rect = undefined;
    this.wire = undefined;
    this.operating_point = undefined;
    this.dc_results = undefined;
    this.ac_results = undefined;
    this.transient_results = undefined;
    this.ctrlKey = false;
    this.shiftKey = false;
    this.altKey = false;
    this.cmdKey = false;
    input.schematic = this;
    this.input = input;
    var table, tr, td;
    table = document.createElement("table");
    table.rules = "none";
    if (!this.diagram_only) {
      table.frame = "box";
      table.style.borderStyle = "solid";
      table.style.borderWidth = "2px";
      table.style.borderColor = normal_style;
      table.style.backgroundColor = background_style
    }
    if (this.toolbar.length > 0) {
      tr = document.createElement("tr");
      table.appendChild(tr);
      td = document.createElement("td");
      td.style.verticalAlign = "top";
      td.colSpan = 2;
      tr.appendChild(td);
      for (var i = 0; i < this.toolbar.length; ++i) {
        var tool = this.toolbar[i];
        if (tool != null) td.appendChild(tool)
      }
    }
    tr = document.createElement("tr");
    table.appendChild(tr);
    td = document.createElement("td");
    tr.appendChild(td);
    var wrapper = document.createElement("div");
    td.appendChild(wrapper);
    wrapper.style.position = "relative";
    wrapper.appendChild(this.canvas);
    td = document.createElement("td");
    td.style.verticalAlign = "top";
    tr.appendChild(td);
    var parts_table = document.createElement("table");
    td.appendChild(parts_table);
    parts_table.rules = "none";
    parts_table.frame = "void";
    parts_table.cellPadding = "0";
    parts_table.cellSpacing = "0";
    var parts_per_column = Math.floor(this.height / (part_h + 5));
    for (var i = 0; i < parts_per_column; ++i) {
      tr = document.createElement("tr");
      parts_table.appendChild(tr);
      for (var j = i; j < this.parts_bin.length; j += parts_per_column) {
        td = document.createElement("td");
        tr.appendChild(td);
        td.appendChild(this.parts_bin[j].canvas)
      }
    }
    if (this.status_div != undefined) {
      tr = document.createElement("tr");
      table.appendChild(tr);
      td = document.createElement("td");
      tr.appendChild(td);
      td.colSpan = 2;
      td.appendChild(this.status_div)
    }
    var toplevel = document.createElement("div");
    toplevel.onselectstart = function() {
      return false
    };
    toplevel.appendChild(table);
    this.input.parentNode.insertBefore(toplevel, this.input.nextSibling);
    this.load_schematic(this.input.getAttribute("value"), this.input.getAttribute("initial_value"));
    this.zoomall()
  }
  var part_w = 42;
  var part_h = 42;
  var status_height = 18;
  Schematic.prototype.add_component = function(new_c) {
    this.components.push(new_c)
  };
  Schematic.prototype.remove_component = function(c) {
    var index = this.components.indexOf(c);
    if (index != -1) this.components.splice(index, 1)
  };
  Schematic.prototype.find_connections = function(cp) {
    return this.connection_points[cp.location]
  };
  Schematic.prototype.add_connection_point = function(cp) {
    var cplist = this.connection_points[cp.location];
    if (cplist) cplist.push(cp);
    else {
      cplist = [cp];
      this.connection_points[cp.location] = cplist
    }
    return cplist
  };
  Schematic.prototype.remove_connection_point = function(cp, old_location) {
    var cplist = this.connection_points[old_location];
    if (cplist) {
      var index = cplist.indexOf(cp);
      if (index != -1) {
        cplist.splice(index, 1);
        if (cplist.length == 0) delete this.connection_points[old_location]
      }
    }
  };
  Schematic.prototype.update_connection_point = function(cp, old_location) {
    this.remove_connection_point(cp, old_location);
    return this.add_connection_point(cp)
  };
  Schematic.prototype.add_wire = function(x1, y1, x2, y2) {
    var new_wire = new Wire(x1, y1, x2, y2);
    new_wire.add(this);
    new_wire.move_end();
    return new_wire
  };
  Schematic.prototype.split_wire = function(w, cp) {
    w.remove();
    this.add_wire(w.x, w.y, cp.x, cp.y);
    this.add_wire(w.x + w.dx, w.y + w.dy, cp.x, cp.y);
  };
  Schematic.prototype.check_wires = function(c) {
    for (var i = 0; i < this.components.length; i++) {
      var cc = this.components[i];
      if (cc != c) {
        var cp = cc.bisect(c);
        if (cp) {
          this.split_wire(cc, cp);
          this.redraw_background()
        }
      }
    }
  };
  Schematic.prototype.check_connection_points = function(w) {
    for (var locn in this.connection_points) {
      var cplist = this.connection_points[locn];
      if (cplist && w.bisect_cp(cplist[0])) {
        this.split_wire(w, cplist[0]);
        this.redraw_background();
        return
      }
    }
  };
  Schematic.prototype.clean_up_wires = function() {
    for (var locn in this.connection_points) {
      var cplist = this.connection_points[locn];
      if (cplist && cplist.length == 2) {
        var c1 = cplist[0].parent;
        var c2 = cplist[1].parent;
        if (c1.type == "w" && c2.type == "w") {
          var e1 = c1.other_end(cplist[0]);
          var e2 = c2.other_end(cplist[1]);
          var e3 = cplist[0];
          if (collinear(e1, e2, e3)) {
            c1.remove();
            c2.remove();
            this.add_wire(e1.x, e1.y, e2.x, e2.y)
          }
        }
      }
    }
  };
  Schematic.prototype.unselect_all = function(which) {
    this.operating_point = undefined;
    for (var i = this.components.length - 1; i >= 0; --i) if (i != which) this.components[i].set_select(false)
  };
  Schematic.prototype.drag_begin = function() {
    for (var i = this.components.length - 1; i >= 0; --i) {
      var component = this.components[i];
      if (component.selected) component.move_begin()
    }
    this.drag_x = this.cursor_x;
    this.drag_y = this.cursor_y;
    this.dragging = true
  };
  Schematic.prototype.drag_end = function() {
    for (var i = this.components.length - 1; i >= 0; --i) {
      var component = this.components[i];
      if (component.selected) component.move_end()
    }
    this.dragging = false;
    this.clean_up_wires();
    this.redraw_background()
  };
  Schematic.prototype.help = function() {
    window.open("/static/handouts/schematic_tutorial.pdf")
  };
  Schematic.prototype.rescale = function(nscale, cx, cy) {
    if (cx == undefined) {
      cx = this.origin_x + this.width / (2 * this.scale);
      cy = this.origin_y + this.height / (2 * this.scale)
    }
    this.origin_x += cx * (this.scale - nscale);
    this.origin_y += cy * (this.scale - nscale);
    this.scale = nscale;
    this.redraw_background()
  };
  Schematic.prototype.toggle_grid = function() {
    this.show_grid = !this.show_grid;
    this.redraw_background()
  };
  var zoom_factor = 1.25;
  var zoom_min = .5;
  var zoom_max = 4;
  var origin_min = -200;
  var origin_max = 200;
  Schematic.prototype.zoomin = function() {
    var nscale = this.scale * zoom_factor;
    if (nscale < zoom_max) {
      this.origin_x += this.width / 2 * (1 / this.scale - 1 / nscale);
      this.origin_y += this.height / 2 * (1 / this.scale - 1 / nscale);
      this.scale = nscale;
      this.redraw_background()
    }
  };
  Schematic.prototype.zoomout = function() {
    var nscale = this.scale / zoom_factor;
    if (nscale > zoom_min) {
      this.origin_x += this.width / 2 * (1 / this.scale - 1 / nscale);
      this.origin_y += this.height / 2 * (1 / this.scale - 1 / nscale);
      this.scale = nscale;
      this.redraw_background()
    }
  };
  Schematic.prototype.zoomall = function() {
    var sch_w = 1.5 * (this.bbox[2] - this.bbox[0]);
    var sch_h = 1.5 * (this.bbox[3] - this.bbox[1]);
    if (sch_w == 0 && sch_h == 0) {
      this.origin_x = 0;
      this.origin_y = 0;
      this.scale = 2
    } else {
      var scale_x = this.width / sch_w;
      var scale_y = this.height / sch_h;
      this.scale = Math.pow(zoom_factor, Math.ceil(Math.log(Math.min(scale_x, scale_y)) / Math.log(zoom_factor)));
      if (this.scale < zoom_min) this.scale = zoom_min;
      else if (this.scale > zoom_max) this.scale = zoom_max;
      this.origin_x = (this.bbox[2] + this.bbox[0]) / 2 - this.width / (2 * this.scale);
      this.origin_y = (this.bbox[3] + this.bbox[1]) / 2 - this.height / (2 * this.scale)
    }
    this.redraw_background()
  };
  Schematic.prototype.cut = function() {
    sch_clipboard = [];
    for (var i = this.components.length - 1; i >= 0; --i) {
      var c = this.components[i];
      if (c.selected) {
        c.remove();
        sch_clipboard.push(c)
      }
    }
    this.redraw()
  };
  Schematic.prototype.copy = function() {
    sch_clipboard = [];
    for (var i = this.components.length - 1; i >= 0; --i) {
      var c = this.components[i];
      if (c.selected) sch_clipboard.push(c.clone(c.x, c.y))
    }
  };
  Schematic.prototype.paste = function() {
    var left = undefined;
    var top = undefined;
    for (var i = sch_clipboard.length - 1; i >= 0; --i) {
      var c = sch_clipboard[i];
      left = left ? Math.min(left, c.x) : c.x;
      top = top ? Math.min(top, c.y) : c.y
    }
    this.message("cursor " + this.cursor_x + "," + this.cursor_y);
    this.unselect_all( - 1);
    this.redraw_background();
    for (var i = sch_clipboard.length - 1; i >= 0; --i) {
      var c = sch_clipboard[i];
      var new_c = c.clone(this.cursor_x + (c.x - left), this.cursor_y + (c.y - top));
      new_c.set_select(true);
      new_c.add(this)
    }
    this.redraw()
  };
  Schematic.prototype.load_schematic = function(value, initial_value) {
    if (value == undefined || value.indexOf("[") == -1) value = initial_value;
    if (value && value.indexOf("[") != -1) {
      var json = JSON.parse(value);
      for (var i = json.length - 1; i >= 0; --i) {
        var c = json[i];
        if (c[0] == "view") {
          this.ac_fstart = c[5];
          this.ac_fstop = c[6];
          this.ac_source_name = c[7];
          this.tran_npts = c[8];
          this.tran_tstop = c[9];
          this.dc_max_iters = c[10]
        } else if (c[0] == "w") {
          this.add_wire(c[1][0], c[1][1], c[1][2], c[1][3])
        } else if (c[0] == "dc") {
          this.dc_results = c[1]
        } else if (c[0] == "transient") {
          this.transient_results = c[1]
        } else if (c[0] == "ac") {
          this.ac_results = c[1]
        } else {
          var type = c[0];
          var coords = c[1];
          var properties = c[2];
          var part = new parts_map[type][0](coords[0], coords[1], coords[2]);
          for (var name in properties) part.properties[name] = properties[name];
          part.add(this)
        }
      }
    }
    this.redraw_background()
  };
  Schematic.prototype.label_connection_points = function() {
    for (var i = this.components.length - 1; i >= 0; --i) this.components[i].clear_labels();
    for (var i = this.components.length - 1; i >= 0; --i) this.components[i].add_default_labels();
    this.next_label = 0;
    for (var i = this.components.length - 1; i >= 0; --i) this.components[i].label_connections()
  };
  Schematic.prototype.get_next_label = function() {
    this.next_label += 1;
    return this.next_label.toString()
  };
  Schematic.prototype.propagate_label = function(label, location) {
    var cplist = this.connection_points[location];
    for (var i = cplist.length - 1; i >= 0; --i) cplist[i].propagate_label(label)
  };
  Schematic.prototype.update_value = function() {
    this.label_connection_points();
    this.input.value = JSON.stringify(this.json_with_analyses())
  };
  Schematic.prototype.json = function() {
    var json = [];
    var n = this.components.length;
    for (var i = 0; i < n; i++) json.push(this.components[i].json(i));
    json.push(["view", this.origin_x, this.origin_y, this.scale, this.ac_npts, this.ac_fstart, this.ac_fstop, this.ac_source_name, this.tran_npts, this.tran_tstop, this.dc_max_iters]);
    return json
  };
  Schematic.prototype.json_with_analyses = function() {
    var json = this.json();
    if (this.dc_results != undefined) json.push(["dc", this.dc_results]);
    if (this.ac_results != undefined) json.push(["ac", this.ac_results]);
    if (this.transient_results != undefined) json.push(["transient", this.transient_results]);
    return json
  };
  Schematic.prototype.extract_circuit = function() {
    this.label_connection_points();
    var netlist = this.json();
    this.input.value = JSON.stringify(netlist);
    var ckt = new cktsim.Circuit;
    if (ckt.load_netlist(netlist)) return ckt;
    else return null
  };
  Schematic.prototype.dc_analysis = function() {
    this.unselect_all( - 1);
    this.redraw_background();
    var ckt = this.extract_circuit();
    if (ckt === null) return;
    this.operating_point = ckt.dc();
    if (this.operating_point != undefined) {
      this.dc_results = {};
      for (var i in this.operating_point) this.dc_results[i] = this.operating_point[i];
      this.redraw()
    }
  };
  Schematic.prototype.find_probes = function() {
    var result = [];
    var result = [];
    for (var i = this.components.length - 1; i >= 0; --i) {
      var c = this.components[i];
      var info = c.probe_info();
      if (info != undefined) result.push(c.probe_info())
    }
    return result
  };
  Schematic.prototype.setup_ac_analysis = function() {
    this.unselect_all( - 1);
    this.redraw_background();
    var npts_lbl = "Number of points/decade";
    var fstart_lbl = "Starting frequency (Hz)";
    var fstop_lbl = "Ending frequency (Hz)";
    var source_name_lbl = "Name of V or I source for ac";
    if (this.find_probes().length == 0) {
      alert("AC Analysis: there are no voltage probes in the diagram!");
      return
    }
    var fields = [];
    fields[fstart_lbl] = build_input("text", 10, this.ac_fstart);
    fields[fstop_lbl] = build_input("text", 10, this.ac_fstop);
    fields[source_name_lbl] = build_input("text", 10, this.ac_source_name);
    var content = build_table(fields);
    content.fields = fields;
    content.sch = this;
    this.dialog("AC Analysis", content,
    function(content) {
      var sch = content.sch;
      sch.ac_fstart = content.fields[fstart_lbl].value;
      sch.ac_fstop = content.fields[fstop_lbl].value;
      sch.ac_source_name = content.fields[source_name_lbl].value;
      sch.ac_analysis(cktsim.parse_number(sch.ac_npts), cktsim.parse_number(sch.ac_fstart), cktsim.parse_number(sch.ac_fstop), sch.ac_source_name)
    })
  };
  Schematic.prototype.ac_analysis = function(npts, fstart, fstop, ac_source_name) {
    var ckt = this.extract_circuit();
    if (ckt === null) return;
    var results = ckt.ac(npts, fstart, fstop, ac_source_name);
    if (typeof results == "string") this.message(results);
    else {
      var x_values = results["_frequencies_"];
      for (var i = x_values.length - 1; i >= 0; --i) x_values[i] = Math.log(x_values[i]) / Math.LN10;
      if (this.submit_analyses != undefined) {
        var submit = this.submit_analyses["ac"];
        if (submit != undefined) {
          this.ac_results = {};
          for (var j = 0; j < submit.length; j++) {
            var flist = submit[j];
            var node = flist[0];
            var values = results[node];
            var fvlist = [];
            for (var k = 1; k < flist.length; k++) {
              var f = flist[k];
              var v = interpolate(f, x_values, values);
              fvlist.push([f, v == undefined ? "undefined": 20 * Math.log(v) / Math.LN10])
            }
            this.ac_results[node] = fvlist
          }
        }
      }
      var y_values = [];
      var z_values = [];
      var probes = this.find_probes();
      var probe_maxv = [];
      var probe_color = [];
      for (var i = probes.length - 1; i >= 0; --i) {
        if (probes[i][3] != "voltage") continue;
        probe_color[i] = probes[i][0];
        var label = probes[i][1];
        var v = results[label];
        probe_maxv[i] = array_max(v)
      }
      var all_max = array_max(probe_maxv);
      if (all_max < 1e-16) {
        alert("Zero ac response, -infinity on DB scale.")
      } else {
        for (var i = probes.length - 1; i >= 0; --i) {
          if (probes[i][3] != "voltage") continue;
          if (probe_maxv[i] / all_max < 1e-10) {
            alert("Near zero ac response, remove " + probe_color[i] + " probe");
            return
          }
        }
      }
      for (var i = probes.length - 1; i >= 0; --i) {
        if (probes[i][3] != "voltage") continue;
        var color = probes[i][0];
        var label = probes[i][1];
        var offset = cktsim.parse_number(probes[i][2]);
        var v = results[label];
        var v_max = 1;
        for (var j = v.length - 1; j >= 0; --j) v[j] = 20 * Math.log(v[j] / v_max) / Math.LN10;
        y_values.push([color, offset, v]);
        var v = results[label + "_phase"];
        z_values.push([color, 0, v])
      }
      var graph2 = this.graph(x_values, "log(Frequency in Hz)", z_values, "degrees");
      this.window("AC Analysis - Phase", graph2);
      var graph1 = this.graph(x_values, "log(Frequency in Hz)", y_values, "dB");
      this.window("AC Analysis - Magnitude", graph1, 50)
    }
  };
  Schematic.prototype.transient_analysis = function() {
    this.unselect_all( - 1);
    this.redraw_background();
    var npts_lbl = "Minimum number of timepoints";
    var tstop_lbl = "Stop Time (seconds)";
    var probes = this.find_probes();
    if (probes.length == 0) {
      alert("Transient Analysis: there are no probes in the diagram!");
      return
    }
    var fields = [];
    fields[tstop_lbl] = build_input("text", 10, this.tran_tstop);
    var content = build_table(fields);
    content.fields = fields;
    content.sch = this;
    this.dialog("Transient Analysis", content,
    function(content) {
      var sch = content.sch;
      var ckt = sch.extract_circuit();
      if (ckt === null) return;
      sch.tran_tstop = content.fields[tstop_lbl].value;
      var probe_list = sch.find_probes();
      var probe_names = new Array(probe_list.length);
      for (var i = probe_list.length - 1; i >= 0; --i) probe_names[i] = probe_list[i][1];
      var results = ckt.tran(ckt.parse_number(sch.tran_npts), 0, ckt.parse_number(sch.tran_tstop), probe_names, false);
      if (typeof results == "string") sch.message(results);
      else {
        if (sch.submit_analyses != undefined) {
          var submit = sch.submit_analyses["tran"];
          if (submit != undefined) {
            sch.transient_results = {};
            var times = results["_time_"];
            for (var j = 0; j < submit.length; j++) {
              var tlist = submit[j];
              var node = tlist[0];
              var values = results[node];
              var tvlist = [];
              for (var k = 1; k < tlist.length; k++) {
                var t = tlist[k];
                var v = interpolate(t, times, values);
                tvlist.push([t, v == undefined ? "undefined": v])
              }
              sch.transient_results[node] = tvlist
            }
          }
        }
        var x_values = results["_time_"];
        var x_legend = "Time";
        var v_values = [];
        var i_values = [];
        var probes = sch.find_probes();
        for (var i = probes.length - 1; i >= 0; --i) {
          var color = probes[i][0];
          var label = probes[i][1];
          var offset = cktsim.parse_number(probes[i][2]);
          var v = results[label];
          if (v == undefined) {
            alert("The " + color + " probe is connected to node " + '"' + label + '"' + " which is not an actual circuit node")
          } else if (probes[i][3] == "voltage") {
            if (color == "x-axis") {
              x_values = v;
              x_legend = "Voltage"
            } else v_values.push([color, offset, v])
          } else {
            if (color == "x-axis") {
              x_values = v;
              x_legend = "Current"
            } else i_values.push([color, offset, v])
          }
        }
        var graph = sch.graph(x_values, x_legend, v_values, "Voltage", i_values, "Current");
        sch.window("Results of Transient Analysis", graph)
      }
    })
  };
  function interpolate(t, times, values) {
    if (values == undefined) return undefined;
    for (var i = 0; i < times.length; i++) if (t < times[i]) {
      var t1 = i == 0 ? times[0] : times[i - 1];
      var t2 = times[i];
      if (t2 == undefined) return undefined;
      var v1 = i == 0 ? values[0] : values[i - 1];
      var v2 = values[i];
      var v = v1;
      if (t != t1) v += (t - t1) * (v2 - v1) / (t2 - t1);
      return v
    }
  }
  Schematic.prototype.set_property = function(component_name, property, value) {
    this.unselect_all( - 1);
    for (var i = this.components.length - 1; i >= 0; --i) {
      var component = this.components[i];
      if (component.properties["name"] == component_name) {
        component.properties[property] = value.toString();
        break
      }
    }
    this.redraw_background()
  };
  Schematic.prototype.redraw_background = function() {
    var c = this.bg_image.getContext("2d");
    c.lineCap = "round";
    c.fillStyle = element_style;
    c.fillRect(0, 0, this.width, this.height);
    if (!this.diagram_only && this.show_grid) {
      c.strokeStyle = grid_style;
      var first_x = this.origin_x;
      var last_x = first_x + this.width / this.scale;
      var first_y = this.origin_y;
      var last_y = first_y + this.height / this.scale;
      for (var i = this.grid * Math.ceil(first_x / this.grid); i < last_x; i += this.grid) this.draw_line(c, i, first_y, i, last_y, .1);
      for (var i = this.grid * Math.ceil(first_y / this.grid); i < last_y; i += this.grid) this.draw_line(c, first_x, i, last_x, i, .1)
    }
    var min_x = Infinity;
    var max_x = -Infinity;
    var min_y = Infinity;
    var max_y = -Infinity;
    for (var i = this.components.length - 1; i >= 0; --i) {
      var component = this.components[i];
      if (!component.selected) {
        component.draw(c);
        min_x = Math.min(component.bbox[0], min_x);
        max_x = Math.max(component.bbox[2], max_x);
        min_y = Math.min(component.bbox[1], min_y);
        max_y = Math.max(component.bbox[3], max_y)
      }
    }
    this.unsel_bbox = [min_x, min_y, max_x, max_y];
    this.redraw()
  };
  Schematic.prototype.redraw = function() {
    var c = this.canvas.getContext("2d");
    c.drawImage(this.bg_image, 0, 0);
    var min_x = this.unsel_bbox[0];
    var max_x = this.unsel_bbox[2];
    var min_y = this.unsel_bbox[1];
    var max_y = this.unsel_bbox[3];
    var selections = false;
    for (var i = this.components.length - 1; i >= 0; --i) {
      var component = this.components[i];
      if (component.selected) {
        component.draw(c);
        selections = true;
        min_x = Math.min(component.bbox[0], min_x);
        max_x = Math.max(component.bbox[2], max_x);
        min_y = Math.min(component.bbox[1], min_y);
        max_y = Math.max(component.bbox[3], max_y)
      }
    }
    if (min_x == Infinity) this.bbox = [0, 0, 0, 0];
    else this.bbox = [min_x, min_y, max_x, max_y];
    this.enable_tool("cut", selections);
    this.enable_tool("copy", selections);
    this.enable_tool("paste", sch_clipboard.length > 0);
    for (var location in this.connection_points) {
      var cplist = this.connection_points[location];
      cplist[0].draw(c, cplist.length)
    }
    if (this.wire) {
      var r = this.wire;
      c.strokeStyle = selected_style;
      this.draw_line(c, r[0], r[1], r[2], r[3], 1)
    }
    if (this.select_rect) {
      var r = this.select_rect;
      c.lineWidth = 1;
      c.strokeStyle = selected_style;
      c.beginPath();
      c.moveTo(r[0], r[1]);
      c.lineTo(r[0], r[3]);
      c.lineTo(r[2], r[3]);
      c.lineTo(r[2], r[1]);
      c.lineTo(r[0], r[1]);
      c.stroke()
    }
    if (this.operating_point) {
      if (typeof this.operating_point == "string") this.message(this.operating_point);
      else {
        var temp = [];
        for (var i in this.operating_point) temp[i] = this.operating_point[i];
        for (var location in this.connection_points) this.connection_points[location][0].display_voltage(c, temp);
        for (var i = this.components.length - 1; i >= 0; --i) this.components[i].display_current(c, temp)
      }
    }
    if (!this.diagram_only) {
      var r = this.sctl_r;
      var x = this.sctl_x;
      var y = this.sctl_y;
      c.fillStyle = element_style;
      c.beginPath();
      c.arc(x, y, r, 0, 2 * Math.PI);
      c.fill();
      c.strokeStyle = grid_style;
      c.lineWidth = .5;
      c.beginPath();
      c.arc(x, y, r, 0, 2 * Math.PI);
      c.stroke();
      c.lineWidth = 3;
      c.beginPath();
      c.moveTo(x + 4, y - r + 8);
      c.lineTo(x, y - r + 4);
      c.lineTo(x - 4, y - r + 8);
      c.moveTo(x + r - 8, y + 4);
      c.lineTo(x + r - 4, y);
      c.lineTo(x + r - 8, y - 4);
      c.moveTo(x + 4, y + r - 8);
      c.lineTo(x, y + r - 4);
      c.lineTo(x - 4, y + r - 8);
      c.moveTo(x - r + 8, y + 4);
      c.lineTo(x - r + 4, y);
      c.lineTo(x - r + 8, y - 4);
      c.stroke();
      x = this.zctl_left;
      y = this.zctl_top;
      c.lineWidth = .5;
      c.fillStyle = element_style;
      c.fillRect(x, y, 16, 48);
      c.strokeStyle = grid_style;
      c.strokeRect(x, y, 16, 48);
      c.lineWidth = 1;
      c.beginPath();
      c.moveTo(x + 4, y + 8);
      c.lineTo(x + 12, y + 8);
      c.moveTo(x + 8, y + 4);
      c.lineTo(x + 8, y + 12);
      c.moveTo(x + 4, y + 24);
      c.lineTo(x + 12, y + 24);
      c.strokeRect(x + 4, y + 36, 8, 8);
      c.stroke()
    }
  };
  Schematic.prototype.cross_cursor = function(c, x, y) {
    this.draw_line(c, x - this.grid, y, x + this.grid, y, 1);
    this.draw_line(c, x, y - this.grid, x, y + this.grid, 1)
  };
  Schematic.prototype.moveTo = function(c, x, y) {
    c.moveTo((x - this.origin_x) * this.scale, (y - this.origin_y) * this.scale)
  };
  Schematic.prototype.lineTo = function(c, x, y) {
    c.lineTo((x - this.origin_x) * this.scale, (y - this.origin_y) * this.scale)
  };
  Schematic.prototype.draw_line = function(c, x1, y1, x2, y2, width) {
    c.lineWidth = width * this.scale;
    c.beginPath();
    c.moveTo((x1 - this.origin_x) * this.scale, (y1 - this.origin_y) * this.scale);
    c.lineTo((x2 - this.origin_x) * this.scale, (y2 - this.origin_y) * this.scale);
    c.stroke()
  };
  Schematic.prototype.draw_arc = function(c, x, y, radius, start_radians, end_radians, anticlockwise, width, filled) {
    c.lineWidth = width * this.scale;
    c.beginPath();
    c.arc((x - this.origin_x) * this.scale, (y - this.origin_y) * this.scale, radius * this.scale, start_radians, end_radians, anticlockwise);
    if (filled) c.fill();
    else c.stroke()
  };
  Schematic.prototype.draw_text = function(c, text, x, y, size) {
    c.font = size * this.scale + "pt sans-serif";
    c.fillText(text, (x - this.origin_x) * this.scale, (y - this.origin_y) * this.scale)
  };
  try {
    if (HTMLCanvasElement) HTMLCanvasElement.prototype.relMouseCoords = function(event) {
      var totalOffsetX = 0;
      var totalOffsetY = 0;
      var currentElement = this;
      do {
        totalOffsetX += currentElement.offsetLeft;
        totalOffsetY += currentElement.offsetTop
      } while ( currentElement = currentElement . offsetParent );
      this.mouse_x = event.pageX - totalOffsetX;
      this.mouse_y = event.pageY - totalOffsetY;
      this.page_x = event.pageX;
      this.page_y = event.pageY
    }
  } catch(err) {}
  function schematic_key_down(event) {
    if (!event) event = window.event;
    var sch = window.event ? event.srcElement.schematic: event.target.schematic;
    var code = event.keyCode;
    if (code == 16) sch.shiftKey = true;
    else if (code == 17) sch.ctrlKey = true;
    else if (code == 18) sch.altKey = true;
    else if (code == 91) sch.cmdKey = true;
    else if (code == 8 || code == 46) {
      for (var i = sch.components.length - 1; i >= 0; --i) {
        var component = sch.components[i];
        if (component.selected) component.remove()
      }
      sch.clean_up_wires();
      sch.redraw_background();
      event.preventDefault();
      return false
    } else if ((sch.ctrlKey || sch.cmdKey) && code == 88) {
      sch.cut();
      event.preventDefault();
      return false
    } else if ((sch.ctrlKey || sch.cmdKey) && code == 67) {
      sch.copy();
      event.preventDefault();
      return false
    } else if ((sch.ctrlKey || sch.cmdKey) && code == 86) {
      sch.paste();
      event.preventDefault();
      return false
    } else if (!sch.ctrlKey && !sch.altKey && !sch.cmdKey && code == 82) {
      for (var i = sch.components.length - 1; i >= 0; --i) {
        var component = sch.components[i];
        if (component.selected) {
          component.rotate(1);
          sch.check_wires(component)
        }
      }
      sch.clean_up_wires();
      sch.redraw_background();
      event.preventDefault();
      return false
    } else return true;
    sch.redraw();
    event.preventDefault();
    return false
  }
  function schematic_key_up(event) {
    if (!event) event = window.event;
    var sch = window.event ? event.srcElement.schematic: event.target.schematic;
    var code = event.keyCode;
    if (code == 16) sch.shiftKey = false;
    else if (code == 17) sch.ctrlKey = false;
    else if (code == 18) sch.altKey = false;
    else if (code == 91) sch.cmdKey = false
  }
  function schematic_mouse_enter(event) {
    if (!event) event = window.event;
    var sch = window.event ? event.srcElement.schematic: event.target.schematic;
    if (sch.new_part) {
      var part = sch.new_part;
      sch.new_part = undefined;
      part.select(false);
      sch.unselect_all( - 1);
      sch.redraw_background();
      part = part.component.clone(sch.cursor_x, sch.cursor_y);
      part.add(sch);
      part.set_select(true);
      sch.drag_begin()
    }
    sch.drawCursor = true;
    sch.redraw();
    sch.canvas.focus();
    return false
  }
  function schematic_mouse_leave(event) {
    if (!event) event = window.event;
    var sch = window.event ? event.srcElement.schematic: event.target.schematic;
    sch.drawCursor = false;
    sch.redraw();
    return false
  }
  function schematic_mouse_down(event) {
    if (!event) event = window.event;
    else event.preventDefault();
    var sch = window.event ? event.srcElement.schematic: event.target.schematic;
    sch.canvas.relMouseCoords(event);
    var mx = sch.canvas.mouse_x;
    var my = sch.canvas.mouse_y;
    var sx = mx - sch.sctl_x;
    var sy = my - sch.sctl_y;
    var zx = mx - sch.zctl_left;
    var zy = my - sch.zctl_top;
    if (sx * sx + sy * sy <= sch.sctl_r * sch.sctl_r) {
      if (Math.abs(sy) > Math.abs(sx)) {
        var delta = this.height / 8;
        if (sy > 0) delta = -delta;
        var temp = sch.origin_y - delta;
        if (temp > origin_min * sch.grid && temp < origin_max * sch.grid) sch.origin_y = temp
      } else {
        var delta = this.width / 8;
        if (sx < 0) delta = -delta;
        var temp = sch.origin_x + delta;
        if (temp > origin_min * sch.grid && temp < origin_max * sch.grid) sch.origin_x = temp
      }
    } else if (zx >= 0 && zx < 16 && zy >= 0 && zy < 48) {
      if (zy < 16) sch.zoomin();
      else if (zy < 32) sch.zoomout();
      else sch.zoomall()
    } else {
      var x = mx / sch.scale + sch.origin_x;
      var y = my / sch.scale + sch.origin_y;
      sch.cursor_x = Math.round(x / sch.grid) * sch.grid;
      sch.cursor_y = Math.round(y / sch.grid) * sch.grid;
      var cplist = sch.connection_points[sch.cursor_x + "," + sch.cursor_y];
      if (cplist && !event.shiftKey) {
        sch.unselect_all( - 1);
        sch.wire = [sch.cursor_x, sch.cursor_y, sch.cursor_x, sch.cursor_y]
      } else {
        var which = -1;
        for (var i = sch.components.length - 1; i >= 0; --i) if (sch.components[i].select(x, y, event.shiftKey)) {
          if (sch.components[i].selected) {
            sch.drag_begin();
            which = i
          }
          break
        }
        var reselect = which != -1 && sch.components[which].was_previously_selected;
        if (!event.shiftKey) {
          if (!reselect) sch.unselect_all(which);
          if (!sch.dragging) sch.select_rect = [sch.canvas.mouse_x, sch.canvas.mouse_y, sch.canvas.mouse_x, sch.canvas.mouse_y]
        }
      }
    }
    sch.redraw_background();
    return false
  }
  function schematic_mouse_move(event) {
    if (!event) event = window.event;
    var sch = window.event ? event.srcElement.schematic: event.target.schematic;
    sch.canvas.relMouseCoords(event);
    var x = sch.canvas.mouse_x / sch.scale + sch.origin_x;
    var y = sch.canvas.mouse_y / sch.scale + sch.origin_y;
    sch.cursor_x = Math.round(x / sch.grid) * sch.grid;
    sch.cursor_y = Math.round(y / sch.grid) * sch.grid;
    if (sch.wire) {
      sch.wire[2] = sch.cursor_x;
      sch.wire[3] = sch.cursor_y
    } else if (sch.dragging) {
      var dx = sch.cursor_x - sch.drag_x;
      var dy = sch.cursor_y - sch.drag_y;
      if (dx != 0 || dy != 0) {
        sch.drag_x = sch.cursor_x;
        sch.drag_y = sch.cursor_y;
        for (var i = sch.components.length - 1; i >= 0; --i) {
          var component = sch.components[i];
          if (component.selected) component.move(dx, dy)
        }
      }
    } else if (sch.select_rect) {
      sch.select_rect[2] = sch.canvas.mouse_x;
      sch.select_rect[3] = sch.canvas.mouse_y
    }
    sch.redraw();
    return false
  }
  function schematic_mouse_up(event) {
    if (!event) event = window.event;
    else event.preventDefault();
    var sch = window.event ? event.srcElement.schematic: event.target.schematic;
    if (sch.wire) {
      var r = sch.wire;
      sch.wire = undefined;
      if (r[0] != r[2] || r[1] != r[3]) {
        sch.add_wire(r[0], r[1], r[2], r[3]);
        sch.clean_up_wires();
        sch.redraw_background()
      } else sch.redraw()
    }
    if (sch.dragging) sch.drag_end();
    if (sch.select_rect) {
      var r = sch.select_rect;
      if (r[0] != r[2] || r[1] != r[3]) {
        var s = [r[0] / sch.scale + sch.origin_x, r[1] / sch.scale + sch.origin_y, r[2] / sch.scale + sch.origin_x, r[3] / sch.scale + sch.origin_y];
        canonicalize(s);
        if (!event.shiftKey) sch.unselect_all();
        for (var i = sch.components.length - 1; i >= 0; --i) sch.components[i].select_rect(s, event.shiftKey)
      }
      sch.select_rect = undefined;
      sch.redraw_background()
    }
    return false
  }
  function schematic_mouse_wheel(event) {
    if (!event) event = window.event;
    else event.preventDefault();
    var sch = window.event ? event.srcElement.schematic: event.target.schematic;
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta;
    else if (event.detail) delta = -event.detail;
    if (delta) {
      var nscale = delta > 0 ? sch.scale * zoom_factor: sch.scale / zoom_factor;
      if (nscale > zoom_min && nscale < zoom_max) {
        sch.canvas.relMouseCoords(event);
        var s = 1 / sch.scale - 1 / nscale;
        sch.origin_x += sch.canvas.mouse_x * s;
        sch.origin_y += sch.canvas.mouse_y * s;
        sch.scale = nscale;
        sch.redraw_background()
      }
    }
  }
  function schematic_double_click(event) {
    if (!event) event = window.event;
    else event.preventDefault();
    var sch = window.event ? event.srcElement.schematic: event.target.schematic;
    sch.canvas.relMouseCoords(event);
    var x = sch.canvas.mouse_x / sch.scale + sch.origin_x;
    var y = sch.canvas.mouse_y / sch.scale + sch.origin_y;
    sch.cursor_x = Math.round(x / sch.grid) * sch.grid;
    sch.cursor_y = Math.round(y / sch.grid) * sch.grid;
    for (var i = sch.components.length - 1; i >= 0; --i) if (sch.components[i].edit_properties(x, y)) break;
    return false
  }
  Schematic.prototype.message = function(message) {
    this.status.nodeValue = message
  };
  Schematic.prototype.append_message = function(message) {
    this.status.nodeValue += " / " + message
  };
  Schematic.prototype.dialog = function(title, content, callback) {
    var dialog = document.createElement("div");
    dialog.sch = this;
    dialog.content = content;
    dialog.callback = callback;
    var plist = content.getElementsByClassName("property");
    for (var i = plist.length - 1; i >= 0; --i) {
      var field = plist[i];
      field.dialog = dialog;
      field.addEventListener("keypress", dialog_check_for_ENTER, false)
    }
    var body = document.createElement("div");
    content.style.marginBotton = "5px";
    body.appendChild(content);
    body.style.padding = "5px";
    dialog.appendChild(body);
    var ok_button = document.createElement("span");
    ok_button.appendChild(document.createTextNode("OK"));
    ok_button.dialog = dialog;
    ok_button.addEventListener("click", dialog_okay, false);
    ok_button.style.display = "inline";
    ok_button.style.border = "1px solid";
    ok_button.style.padding = "5px";
    ok_button.style.margin = "10px";
    var cancel_button = document.createElement("span");
    cancel_button.appendChild(document.createTextNode("Cancel"));
    cancel_button.dialog = dialog;
    cancel_button.addEventListener("click", dialog_cancel, false);
    cancel_button.style.display = "inline";
    cancel_button.style.border = "1px solid";
    cancel_button.style.padding = "5px";
    cancel_button.style.margin = "10px";
    var buttons = document.createElement("div");
    buttons.style.textAlign = "center";
    buttons.appendChild(ok_button);
    buttons.appendChild(cancel_button);
    buttons.style.padding = "5px";
    buttons.style.margin = "10px";
    dialog.appendChild(buttons);
    this.window(title, dialog)
  };
  function dialog_cancel(event) {
    if (!event) event = window.event;
    var dialog = window.event ? event.srcElement.dialog: event.target.dialog;
    window_close(dialog.win)
  }
  function dialog_okay(event) {
    if (!event) event = window.event;
    var dialog = window.event ? event.srcElement.dialog: event.target.dialog;
    window_close(dialog.win);
    if (dialog.callback) dialog.callback(dialog.content)
  }
  function dialog_check_for_ENTER(event) {
    var key = window.event ? window.event.keyCode: event.keyCode;
    if (key == 13) dialog_okay(event)
  }
  function build_table(a) {
    var tbl = document.createElement("table");
    for (var i in a) {
      var label = document.createTextNode(i + ": ");
      var col1 = document.createElement("td");
      col1.appendChild(label);
      var col2 = document.createElement("td");
      col2.appendChild(a[i]);
      var row = document.createElement("tr");
      row.appendChild(col1);
      row.appendChild(col2);
      row.style.verticalAlign = "center";
      tbl.appendChild(row)
    }
    return tbl
  }
  function build_input(type, size, value) {
    var input = document.createElement("input");
    input.type = type;
    input.size = size;
    input.className = "property";
    if (value == undefined) input.value = "";
    else input.value = value.toString();
    return input
  }
  function build_select(options, selected) {
    var select = document.createElement("select");
    for (var i = 0; i < options.length; i++) {
      var option = document.createElement("option");
      option.text = options[i];
      select.add(option);
      if (options[i] == selected) select.selectedIndex = i
    }
    return select
  }
  Schematic.prototype.window = function(title, content, offset) {
    var win = document.createElement("div");
    win.sch = this;
    win.content = content;
    win.drag_x = undefined;
    win.draw_y = undefined;
    var head = document.createElement("div");
    head.style.backgroundColor = "black";
    head.style.color = "white";
    head.style.textAlign = "center";
    head.style.padding = "5px";
    head.appendChild(document.createTextNode(title));
    head.win = win;
    win.head = head;
    var close_button = new Image;
    close_button.src = close_icon;
    close_button.style.cssFloat = "right";
    close_button.addEventListener("click", window_close_button, false);
    close_button.win = win;
    head.appendChild(close_button);
    win.appendChild(head);
    head.addEventListener("mousedown", window_mouse_down, false);
    win.appendChild(content);
    content.win = win;
    if (offset == undefined) offset = 0;
    win.left = this.canvas.mouse_x + offset;
    win.top = this.canvas.mouse_y + offset;
    win.style.background = "white";
    win.style.position = "absolute";
    win.style.left = win.left + "px";
    win.style.top = win.top + "px";
    win.style.border = "2px solid";
    this.canvas.parentNode.insertBefore(win, this.canvas);
    bring_to_front(win, true)
  };
  function bring_to_front(win, insert) {
    var wlist = win.sch.window_list;
    var i = wlist.indexOf(win);
    if (i != -1) wlist.splice(i, 1);
    if (insert) wlist.push(win);
    for (i = 0; i < wlist.length; i += 1) wlist[i].style.zIndex = 1e3 + i
  }
  function window_close(win) {
    win.parentNode.removeChild(win);
    bring_to_front(win, false)
  }
  function window_close_button(event) {
    if (!event) event = window.event;
    var src = window.event ? event.srcElement: event.target;
    window_close(src.win)
  }
  function window_mouse_down(event) {
    if (!event) event = window.event;
    var src = window.event ? event.srcElement: event.target;
    var win = src.win;
    bring_to_front(win, true);
    document.addEventListener("mousemove", window_mouse_move, false);
    document.addEventListener("mouseup", window_mouse_up, false);
    document.tracking_window = win;
    win.drag_x = event.pageX;
    win.drag_y = event.pageY;
    return false
  }
  function window_mouse_up(event) {
    var win = document.tracking_window;
    document.removeEventListener("mousemove", window_mouse_move, false);
    document.removeEventListener("mouseup", window_mouse_up, false);
    document.tracking_window = undefined;
    win.drag_x = undefined;
    win.drag_y = undefined;
    return true
  }
  function window_mouse_move(event) {
    var win = document.tracking_window;
    if (win.drag_x) {
      var dx = event.pageX - win.drag_x;
      var dy = event.pageY - win.drag_y;
      win.left += dx;
      win.top += dy;
      win.style.left = win.left + "px";
      win.style.top = win.top + "px";
      win.drag_x += dx;
      win.drag_y += dy;
      return true
    }
  }
  Schematic.prototype.add_tool = function(icon, tip, callback) {
    var tool;
    if (icon.search("data:image") != -1) {
      tool = document.createElement("img");
      tool.src = icon
    } else {
      tool = document.createElement("span");
      tool.style.font = "small-caps small sans-serif";
      var label = document.createTextNode(icon);
      tool.appendChild(label)
    }
    tool.style.borderWidth = "1px";
    tool.style.borderStyle = "solid";
    tool.style.borderColor = background_style;
    tool.style.padding = "2px";
    tool.style.verticalAlign = "middle";
    tool.style.cursor = "default";
    tool.addEventListener("mouseover", tool_enter, false);
    tool.addEventListener("mouseout", tool_leave, false);
    tool.addEventListener("click", tool_click, false);
    tool.sch = this;
    tool.tip = tip;
    tool.callback = callback;
    this.toolbar.push(tool);
    tool.enabled = false;
    tool.style.opacity = .2;
    return tool
  };
  Schematic.prototype.enable_tool = function(tname, which) {
    var tool = this.tools[tname];
    if (tool != undefined) {
      tool.style.opacity = which ? 1 : .2;
      tool.enabled = which;
      if (!which) {
        tool.style.borderColor = background_style;
        tool.sch.message("")
      }
    }
  };
  function tool_enter(event) {
    if (!event) event = window.event;
    var tool = window.event ? event.srcElement: event.target;
    if (tool.enabled) {
      tool.style.borderColor = normal_style;
      tool.sch.message(tool.tip);
      tool.opacity = 1
    }
  }
  function tool_leave(event) {
    if (!event) event = window.event;
    var tool = window.event ? event.srcElement: event.target;
    if (tool.enabled) {
      tool.style.borderColor = background_style;
      tool.sch.message("")
    }
  }
  function tool_click(event) {
    if (!event) event = window.event;
    var tool = window.event ? event.srcElement: event.target;
    if (tool.enabled) {
      tool.sch.canvas.relMouseCoords(event);
      tool.callback.call(tool.sch)
    }
  }
  var help_icon = "data:image/gif;base64,R0lGODlhEAAQAJEAAAAAAP///wAAAAAAACH5BAkAAAIAIf8LSUNDUkdCRzEwMTL/AAAHqGFwcGwCIAAAbW50clJHQiBYWVogB9kAAgAZAAsAGgALYWNzcEFQUEwAAAAAYXBwbAAAAAAAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1hcHBsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALZGVzYwAAAQgAAABvZHNjbQAAAXgAAAVsY3BydAAABuQAAAA4d3RwdAAABxwAAAAUclhZWgAABzAAAAAUZ1hZWgAAB0QAAAAUYlhZWgAAB1gAAAAUclRSQwAAB2wAAAAOY2hhZAAAB3wAAAAsYlRSQwAAB2wAAAAOZ1RS/0MAAAdsAAAADmRlc2MAAAAAAAAAFEdlbmVyaWMgUkdCIFByb2ZpbGUAAAAAAAAAAAAAABRHZW5lcmljIFJHQiBQcm9maWxlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABtbHVjAAAAAAAAAB4AAAAMc2tTSwAAACgAAAF4aHJIUgAAACgAAAGgY2FFUwAAACQAAAHIcHRCUgAAACYAAAHsdWtVQQAAACoAAAISZnJGVQAAACgAAAI8emhUVwAAABYAAAJkaXRJVAAAACgAAAJ6bmJOTwAAACYAAAKia29LUgAAABYAAP8CyGNzQ1oAAAAiAAAC3mhlSUwAAAAeAAADAGRlREUAAAAsAAADHmh1SFUAAAAoAAADSnN2U0UAAAAmAAAConpoQ04AAAAWAAADcmphSlAAAAAaAAADiHJvUk8AAAAkAAADomVsR1IAAAAiAAADxnB0UE8AAAAmAAAD6G5sTkwAAAAoAAAEDmVzRVMAAAAmAAAD6HRoVEgAAAAkAAAENnRyVFIAAAAiAAAEWmZpRkkAAAAoAAAEfHBsUEwAAAAsAAAEpHJ1UlUAAAAiAAAE0GFyRUcAAAAmAAAE8mVuVVMAAAAmAAAFGGRhREsAAAAuAAAFPgBWAWEAZQBvAGIAZQD/YwBuAP0AIABSAEcAQgAgAHAAcgBvAGYAaQBsAEcAZQBuAGUAcgBpAQ0AawBpACAAUgBHAEIAIABwAHIAbwBmAGkAbABQAGUAcgBmAGkAbAAgAFIARwBCACAAZwBlAG4A6AByAGkAYwBQAGUAcgBmAGkAbAAgAFIARwBCACAARwBlAG4A6QByAGkAYwBvBBcEMAQzBDAEOwRMBD0EOAQ5ACAEPwRABD4ERAQwBDkEOwAgAFIARwBCAFAAcgBvAGYAaQBsACAAZwDpAG4A6QByAGkAcQB1AGUAIABSAFYAQpAadSgAIABSAEcAQgAggnJfaWPPj/AAUAByAG8AZgBp/wBsAG8AIABSAEcAQgAgAGcAZQBuAGUAcgBpAGMAbwBHAGUAbgBlAHIAaQBzAGsAIABSAEcAQgAtAHAAcgBvAGYAaQBsx3y8GAAgAFIARwBCACDVBLhc0wzHfABPAGIAZQBjAG4A/QAgAFIARwBCACAAcAByAG8AZgBpAGwF5AXoBdUF5AXZBdwAIABSAEcAQgAgBdsF3AXcBdkAQQBsAGwAZwBlAG0AZQBpAG4AZQBzACAAUgBHAEIALQBQAHIAbwBmAGkAbADBAGwAdABhAGwA4QBuAG8AcwAgAFIARwBCACAAcAByAG8AZgBpAGxmbpAaACAAUgBHAEIAIGPPj//wZYdO9k4AgiwAIABSAEcAQgAgMNcw7TDVMKEwpDDrAFAAcgBvAGYAaQBsACAAUgBHAEIAIABnAGUAbgBlAHIAaQBjA5MDtQO9A7kDugPMACADwAPBA78DxgOvA7sAIABSAEcAQgBQAGUAcgBmAGkAbAAgAFIARwBCACAAZwBlAG4A6QByAGkAYwBvAEEAbABnAGUAbQBlAGUAbgAgAFIARwBCAC0AcAByAG8AZgBpAGUAbA5CDhsOIw5EDh8OJQ5MACAAUgBHAEIAIA4XDjEOSA4nDkQOGwBHAGUAbgBlAGwAIABSAEcAQgAgAFAAcgBvAGYAaQBsAGkAWQBsAGX/AGkAbgBlAG4AIABSAEcAQgAtAHAAcgBvAGYAaQBpAGwAaQBVAG4AaQB3AGUAcgBzAGEAbABuAHkAIABwAHIAbwBmAGkAbAAgAFIARwBCBB4EMQRJBDgEOQAgBD8EQAQ+BEQEOAQ7BEwAIABSAEcAQgZFBkQGQQAgBioGOQYxBkoGQQAgAFIARwBCACAGJwZEBjkGJwZFAEcAZQBuAGUAcgBpAGMAIABSAEcAQgAgAFAAcgBvAGYAaQBsAGUARwBlAG4AZQByAGUAbAAgAFIARwBCAC0AYgBlAHMAawByAGkAdgBlAGwAcwBldGV4dAAAAABDb3B5cmlnaHQgMjAwrzcgQXBwbGUgSW5jLiwgYWxsIHJpZ2h0cyByZXNlcnZlZC4AWFlaIAAAAAAAAPNSAAEAAAABFs9YWVogAAAAAAAAdE0AAD3uAAAD0FhZWiAAAAAAAABadQAArHMAABc0WFlaIAAAAAAAACgaAAAVnwAAuDZjdXJ2AAAAAAAAAAEBzQAAc2YzMgAAAAAAAQxCAAAF3v//8yYAAAeSAAD9kf//+6L///2jAAAD3AAAwGwALAAAAAAQABAAAAIglI+pwK3XInhSLoZc0oa/7lHRB4bXRJZoaqau+o6ujBQAOw==";
  var cut_icon = "data:image/gif;base64,R0lGODlhEAAQALMAAAAAAIAAAACAAICAAAAAgIAAgACAgMDAwICAgP8AAAD/AP//AAAA//8A/wD//////yH5BAEAAAcALAAAAAAQABAAAAQu8MhJqz1g5qs7lxv2gRkQfuWomarXEgDRHjJhf3YtyRav0xcfcFgR0nhB5OwTAQA7";
  var copy_icon = "data:image/gif;base64,R0lGODlhEAAQALMAAAAAAIAAAACAAICAAAAAgIAAgACAgMDAwICAgP8AAAD/AP//AAAA//8A/wD//////yH5BAEAAAcALAAAAAAQABAAAAQ+8MhJ6wE4Wwqef9gmdV8HiKZJrCz3ecS7TikWfzExvk+M9a0a4MbTkXCgTMeoHPJgG5+yF31SLazsTMTtViIAOw==";
  var paste_icon = "data:image/gif;base64,R0lGODlhEAAQALMAAAAAAIAAAACAAICAAAAAgIAAgACAgMDAwICAgP8AAAD/AP//AAAA//8A/wD//////yH5BAEAAAcALAAAAAAQABAAAARL8MhJqwUYWJnxWp3GDcgAgCdQIqLKXmVLhhnyHiqpr7rME8AgocVDEB5IJHD0SyofBFzxGIQGAbvB0ZkcTq1CKK6z5YorwnR0w44AADs=";
  var close_icon = "data:image/gif;base64,R0lGODlhEAAQAMQAAGtra/f3/62tre/v9+bm787O1pycnHNzc6WlpcXFxd7e3tbW1nt7e7W1te/v74SEhMXFzmNjY+bm5v///87OzgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAQABAAAAVt4DRMZGmSwRQQBUS9MAwRIyQ5Uq7neEFSDtxOF4T8cobIQaE4RAQ5yjHHiCCSD510QtFGvoCFdppDfBu7bYzy+D7WP5ggAgA8Y3FKwi5IAhIweW1vbBGEWy5rilsFi2tGAwSJixAFBCkpJ5ojIQA7";
  var grid_icon = "data:image/gif;base64,R0lGODlhEAAQAMQAAAAAAP///zAwYT09bpGRqZ6et5iYsKWlvbi40MzM5cXF3czM5OHh5tTU2fDw84uMom49DbWKcfLy8g0NDcDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABQALAAAAAAQABAAAAUtICWOZGmeKDCqIlu68AvMdO2ueHvGuslTN6Bt6MsBd8Zg77hsDW3FpRJFrYpCADs=";
  try {
    if (CanvasRenderingContext2D) CanvasRenderingContext2D.prototype.dashedLineTo = function(fromX, fromY, toX, toY, pattern) {
      var lt = function(a, b) {
        return a <= b
      };
      var gt = function(a, b) {
        return a >= b
      };
      var capmin = function(a, b) {
        return Math.min(a, b)
      };
      var capmax = function(a, b) {
        return Math.max(a, b)
      };
      var checkX = {
        thereYet: gt,
        cap: capmin
      };
      var checkY = {
        thereYet: gt,
        cap: capmin
      };
      if (fromY - toY > 0) {
        checkY.thereYet = lt;
        checkY.cap = capmax
      }
      if (fromX - toX > 0) {
        checkX.thereYet = lt;
        checkX.cap = capmax
      }
      this.moveTo(fromX, fromY);
      var offsetX = fromX;
      var offsetY = fromY;
      var idx = 0,
      dash = true;
      while (! (checkX.thereYet(offsetX, toX) && checkY.thereYet(offsetY, toY))) {
        var ang = Math.atan2(toY - fromY, toX - fromX);
        var len = pattern[idx];
        offsetX = checkX.cap(toX, offsetX + Math.cos(ang) * len);
        offsetY = checkY.cap(toY, offsetY + Math.sin(ang) * len);
        if (dash) this.lineTo(offsetX, offsetY);
        else this.moveTo(offsetX, offsetY);
        idx = (idx + 1) % pattern.length;
        dash = !dash
      }
    }
  } catch(err) {}
  function view_limits(vmin, vmax) {
    if (vmin == vmax) {
      if (vmin == 0) {
        vmin = -.5;
        vmax = .5
      } else {
        vmin = vmin > 0 ? .9 * vmin: 1.1 * vmin;
        vmax = vmax > 0 ? 1.1 * vmax: .9 * vmax
      }
    }
    var log_range = Math.log(vmax - vmin) / Math.LN10;
    var exponent = Math.floor(log_range);
    var scale = Math.pow(10, -exponent);
    vmin = Math.floor(scale * vmin) / scale;
    vmax = Math.ceil(scale * vmax) / scale;
    return [vmin, vmax, 1 / scale]
  }
  function engineering_notation(n, nplaces, trim) {
    if (n == 0) return "0";
    if (n == undefined) return "undefined";
    if (trim == undefined) trim = true;
    var sign = n < 0 ? -1 : 1;
    var log10 = Math.log(sign * n) / Math.LN10;
    var exp = Math.floor(log10 / 3);
    var mantissa = sign * Math.pow(10, log10 - 3 * exp);
    var mstring = (mantissa + sign * .5 * Math.pow(10, -nplaces)).toString();
    var mlen = mstring.length;
    var endindex = mstring.indexOf(".");
    if (endindex != -1) {
      if (nplaces > 0) {
        endindex += nplaces + 1;
        if (endindex > mlen) endindex = mlen;
        if (trim) {
          while (mstring.charAt(endindex - 1) == "0") endindex -= 1;
          if (mstring.charAt(endindex - 1) == ".") endindex -= 1
        }
      }
      if (endindex < mlen) mstring = mstring.substring(0, endindex)
    }
    switch (exp) {
    case - 5 : return mstring + "f";
    case - 4 : return mstring + "p";
    case - 3 : return mstring + "n";
    case - 2 : return mstring + "u";
    case - 1 : return mstring + "m";
    case 0:
      return mstring;
    case 1:
      return mstring + "K";
    case 2:
      return mstring + "M";
    case 3:
      return mstring + "G"
    }
    return n.toString()
  }
  var grid_pattern = [1, 2];
  var cursor_pattern = [5, 5];
  Schematic.prototype.graph = function(x_values, x_legend, y_values, y_legend, z_values, z_legend) {
    var pwidth = 400;
    var pheight = 300;
    var left_margin = y_values != undefined && y_values.length > 0 ? 55 : 25;
    var top_margin = 25;
    var right_margin = z_values != undefined && z_values.length > 0 ? 55 : 25;
    var bottom_margin = 45;
    var tick_length = 5;
    var w = pwidth + left_margin + right_margin;
    var h = pheight + top_margin + bottom_margin;
    var canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    var bg_image = document.createElement("canvas");
    bg_image.width = w;
    bg_image.height = h;
    canvas.bg_image = bg_image;
    var c = bg_image.getContext("2d");
    c.fillStyle = background_style;
    c.fillRect(0, 0, w, h);
    c.fillStyle = element_style;
    c.fillRect(left_margin, top_margin, pwidth, pheight);
    var x_min = array_min(x_values);
    var x_max = array_max(x_values);
    var x_limits = view_limits(x_min, x_max);
    x_min = x_limits[0];
    x_max = x_limits[1];
    var x_scale = pwidth / (x_max - x_min);
    function plot_x(x) {
      return (x - x_min) * x_scale + left_margin
    }
    c.strokeStyle = grid_style;
    c.lineWidth = 1;
    c.fillStyle = normal_style;
    c.font = "10pt sans-serif";
    c.textAlign = "center";
    c.textBaseline = "top";
    var end = top_margin + pheight;
    for (var x = x_min; x <= x_max; x += x_limits[2]) {
      var temp = plot_x(x) + .5;
      c.beginPath();
      if (x == x_min) {
        c.moveTo(temp, top_margin);
        c.lineTo(temp, end)
      } else c.dashedLineTo(temp, top_margin, temp, end, grid_pattern);
      c.stroke();
      c.beginPath();
      c.moveTo(temp, end);
      c.lineTo(temp, end + tick_length);
      c.stroke();
      c.fillText(engineering_notation(x, 2), temp, end + tick_length)
    }
    if (y_values != undefined && y_values.length > 0) {
      var y_min = Infinity;
      var y_max = -Infinity;
      var plot;
      for (plot = y_values.length - 1; plot >= 0; --plot) {
        var values = y_values[plot][2];
        if (values == undefined) continue;
        var offset = y_values[plot][1];
        var temp = array_min(values) + offset;
        if (temp < y_min) y_min = temp;
        temp = array_max(values) + offset;
        if (temp > y_max) y_max = temp
      }
      var y_limits = view_limits(y_min, y_max);
      y_min = y_limits[0];
      y_max = y_limits[1];
      var y_scale = pheight / (y_max - y_min);
      function plot_y(y) {
        return (y_max - y) * y_scale + top_margin
      }
      c.textAlign = "right";
      c.textBaseline = "middle";
      for (var y = y_min; y <= y_max; y += y_limits[2]) {
        if (Math.abs(y / y_max) < .001) y = 0;
        var temp = plot_y(y) + .5;
        c.beginPath();
        if (y == y_min) {
          c.moveTo(left_margin, temp);
          c.lineTo(left_margin + pwidth, temp)
        } else c.dashedLineTo(left_margin, temp, left_margin + pwidth, temp, grid_pattern);
        c.stroke();
        c.beginPath();
        c.moveTo(left_margin - tick_length, temp);
        c.lineTo(left_margin, temp);
        c.stroke();
        c.fillText(engineering_notation(y, 2), left_margin - tick_length - 2, temp)
      }
      var x, y;
      var nx, ny;
      c.lineWidth = 3;
      c.lineCap = "round";
      for (plot = y_values.length - 1; plot >= 0; --plot) {
        var color = probe_colors_rgb[y_values[plot][0]];
        if (color == undefined) continue;
        c.strokeStyle = color;
        var values = y_values[plot][2];
        if (values == undefined) continue;
        var offset = y_values[plot][1];
        x = plot_x(x_values[0]);
        y = plot_y(values[0] + offset);
        c.beginPath();
        c.moveTo(x, y);
        for (var i = 1; i < x_values.length; i++) {
          nx = plot_x(x_values[i]);
          ny = plot_y(values[i] + offset);
          c.lineTo(nx, ny);
          x = nx;
          y = ny;
          if (i % 100 == 99) {
            c.stroke();
            c.beginPath();
            c.moveTo(x, y)
          }
        }
        c.stroke()
      }
    }
    if (z_values != undefined && z_values.length > 0) {
      var z_min = Infinity;
      var z_max = -Infinity;
      for (plot = z_values.length - 1; plot >= 0; --plot) {
        var values = z_values[plot][2];
        if (values == undefined) continue;
        var offset = z_values[plot][1];
        var temp = array_min(values) + offset;
        if (temp < z_min) z_min = temp;
        temp = array_max(values) + offset;
        if (temp > z_max) z_max = temp
      }
      var z_limits = view_limits(z_min, z_max);
      z_min = z_limits[0];
      z_max = z_limits[1];
      var z_scale = pheight / (z_max - z_min);
      function plot_z(z) {
        return (z_max - z) * z_scale + top_margin
      }
      c.textAlign = "left";
      c.textBaseline = "middle";
      c.lineWidth = 1;
      c.strokeStyle = normal_style;
      var tick_length_half = Math.floor(tick_length / 2);
      var tick_delta = tick_length - tick_length_half;
      for (var z = z_min; z <= z_max; z += z_limits[2]) {
        if (Math.abs(z / z_max) < .001) z = 0;
        var temp = plot_z(z) + .5;
        c.beginPath();
        c.moveTo(left_margin + pwidth - tick_length_half, temp);
        c.lineTo(left_margin + pwidth + tick_delta, temp);
        c.stroke();
        c.fillText(engineering_notation(z, 2), left_margin + pwidth + tick_length + 2, temp)
      }
      var z;
      var nz;
      c.lineWidth = 3;
      for (plot = z_values.length - 1; plot >= 0; --plot) {
        var color = probe_colors_rgb[z_values[plot][0]];
        if (color == undefined) continue;
        c.strokeStyle = color;
        var values = z_values[plot][2];
        if (values == undefined) continue;
        var offset = z_values[plot][1];
        x = plot_x(x_values[0]);
        z = plot_z(values[0] + offset);
        c.beginPath();
        c.moveTo(x, z);
        for (var i = 1; i < x_values.length; i++) {
          nx = plot_x(x_values[i]);
          nz = plot_z(values[i] + offset);
          c.lineTo(nx, nz);
          x = nx;
          z = nz;
          if (i % 100 == 99) {
            c.stroke();
            c.beginPath();
            c.moveTo(x, z)
          }
        }
        c.stroke()
      }
    }
    c.font = "12pt sans-serif";
    c.textAlign = "center";
    c.textBaseline = "bottom";
    c.fillText(x_legend, left_margin + pwidth / 2, h - 5);
    if (y_values != undefined && y_values.length > 0) {
      c.textBaseline = "top";
      c.save();
      c.translate(5, top_margin + pheight / 2);
      c.rotate( - Math.PI / 2);
      c.fillText(y_legend, 0, 0);
      c.restore()
    }
    if (z_values != undefined && z_values.length > 0) {
      c.textBaseline = "bottom";
      c.save();
      c.translate(w - 5, top_margin + pheight / 2);
      c.rotate( - Math.PI / 2);
      c.fillText(z_legend, 0, 0);
      c.restore()
    }
    canvas.x_values = x_values;
    canvas.y_values = y_values;
    canvas.z_values = z_values;
    canvas.x_legend = x_legend;
    canvas.y_legend = y_legend;
    canvas.z_legend = y_legend;
    canvas.x_min = x_min;
    canvas.x_scale = x_scale;
    canvas.y_min = y_min;
    canvas.y_scale = y_scale;
    canvas.z_min = z_min;
    canvas.z_scale = z_scale;
    canvas.left_margin = left_margin;
    canvas.top_margin = top_margin;
    canvas.pwidth = pwidth;
    canvas.pheight = pheight;
    canvas.tick_length = tick_length;
    canvas.cursor1_x = undefined;
    canvas.cursor2_x = undefined;
    canvas.sch = this;
    canvas.addEventListener("mousemove", graph_mouse_move, false);
    redraw_plot(canvas);
    return canvas
  };
  function array_max(a) {
    var max = -Infinity;
    for (var i = a.length - 1; i >= 0; --i) if (a[i] > max) max = a[i];
    return max
  }
  function array_min(a) {
    var min = Infinity;
    for (var i = a.length - 1; i >= 0; --i) if (a[i] < min) min = a[i];
    return min
  }
  function plot_cursor(c, graph, cursor_x, left_margin) {
    var x = graph.left_margin + cursor_x;
    var end_y = graph.top_margin + graph.pheight + graph.tick_length;
    c.strokeStyle = grid_style;
    c.lineWidth = 1;
    c.beginPath();
    c.dashedLineTo(x, graph.top_margin, x, end_y, cursor_pattern);
    c.stroke();
    var graph_x = cursor_x / graph.x_scale + graph.x_min;
    c.font = "10pt sans-serif";
    c.textAlign = "center";
    c.textBaseline = "top";
    c.fillStyle = background_style;
    c.fillText("â–ˆâ–ˆâ–ˆâ–ˆâ–ˆ", x, end_y);
    c.fillStyle = normal_style;
    c.fillText(engineering_notation(graph_x, 3, false), x, end_y);
    var x_values = graph.x_values;
    var len = x_values.length;
    var index = 0;
    while (index < len && graph_x >= x_values[index]) index += 1;
    var x1 = index == 0 ? x_values[0] : x_values[index - 1];
    var x2 = x_values[index];
    if (x2 != undefined) {
      c.textAlign = "left";
      var tx = graph.left_margin + left_margin;
      var ty = graph.top_margin;
      if (graph.y_values != undefined) {
        for (var plot = 0; plot < graph.y_values.length; plot++) {
          var values = graph.y_values[plot][2];
          var color = probe_colors_rgb[graph.y_values[plot][0]];
          if (values == undefined || color == undefined) continue;
          var y1 = index == 0 ? values[0] : values[index - 1];
          var y2 = values[index];
          var y = y1;
          if (graph_x != x1) y += (graph_x - x1) * (y2 - y1) / (x2 - x1);
          c.fillStyle = element_style;
          c.fillText("â–ˆâ–ˆâ–ˆâ–ˆâ–ˆ", tx - 3, ty);
          c.fillStyle = color;
          c.fillText(engineering_notation(y, 3, false), tx, ty);
          ty += 14
        }
      }
      c.textAlign = "right";
      if (graph.z_values != undefined) {
        var tx = graph.left_margin + graph.pwidth - left_margin;
        var ty = graph.top_margin;
        for (var plot = 0; plot < graph.z_values.length; plot++) {
          var values = graph.z_values[plot][2];
          var color = probe_colors_rgb[graph.z_values[plot][0]];
          if (values == undefined || color == undefined) continue;
          var z1 = index == 0 ? values[0] : values[index - 1];
          var z2 = values[index];
          var z = z1;
          if (graph_x != x1) z += (graph_x - x1) * (z2 - z1) / (x2 - x1);
          c.fillStyle = element_style;
          c.fillText("â–ˆâ–ˆâ–ˆâ–ˆâ–ˆ", tx + 3, ty);
          c.fillStyle = color;
          c.fillText(engineering_notation(z, 3, false), tx, ty);
          ty += 14
        }
      }
    }
  }
  function redraw_plot(graph) {
    var c = graph.getContext("2d");
    c.drawImage(graph.bg_image, 0, 0);
    if (graph.cursor1_x != undefined) plot_cursor(c, graph, graph.cursor1_x, 4);
    if (graph.cursor2_x != undefined) plot_cursor(c, graph, graph.cursor2_x, 30)
  }
  function graph_mouse_move(event) {
    if (!event) event = window.event;
    var g = window.event ? event.srcElement: event.target;
    g.relMouseCoords(event);
    var gx = g.mouse_x - g.left_margin - 3;
    var gy = g.pheight - (g.mouse_y - g.top_margin) + 3;
    if (gx >= 0 && gx <= g.pwidth && gy >= 0 && gy <= g.pheight) {
      g.cursor1_x = gx
    } else {
      g.cursor1_x = undefined;
      g.cursor2_x = undefined
    }
    redraw_plot(g)
  }
  function Part(sch) {
    this.sch = sch;
    this.component = undefined;
    this.selected = false;
    this.canvas = document.createElement("canvas");
    this.canvas.style.borderStyle = "solid";
    this.canvas.style.borderWidth = "1px";
    this.canvas.style.borderColor = background_style;
    this.canvas.style.cursor = "default";
    this.canvas.height = part_w;
    this.canvas.width = part_h;
    this.canvas.part = this;
    this.canvas.addEventListener("mouseover", part_enter, false);
    this.canvas.addEventListener("mouseout", part_leave, false);
    this.canvas.addEventListener("mousedown", part_mouse_down, false);
    this.canvas.addEventListener("mouseup", part_mouse_up, false);
    this.canvas.addEventListener("click",
    function() {},
    false)
  }
  Part.prototype.set_location = function(left, top) {
    this.canvas.style.left = left + "px";
    this.canvas.style.top = top + "px"
  };
  Part.prototype.right = function() {
    return this.canvas.offsetLeft + this.canvas.offsetWidth
  };
  Part.prototype.bottom = function() {
    return this.canvas.offsetTop + this.canvas.offsetHeight
  };
  Part.prototype.set_component = function(component, tip) {
    component.sch = this;
    this.component = component;
    this.tip = tip;
    var b = component.bounding_box;
    var dx = b[2] - b[0];
    var dy = b[3] - b[1];
    this.scale = .8;
    this.origin_x = b[0] + dx / 2 - part_w / (2 * this.scale);
    this.origin_y = b[1] + dy / 2 - part_h / (2 * this.scale);
    this.redraw()
  };
  Part.prototype.redraw = function(part) {
    var c = this.canvas.getContext("2d");
    c.fillStyle = this.selected ? selected_style: background_style;
    c.fillRect(0, 0, part_w, part_h);
    if (this.component) this.component.draw(c)
  };
  Part.prototype.select = function(which) {
    this.selected = which;
    this.redraw()
  };
  Part.prototype.update_connection_point = function(cp, old_location) {};
  Part.prototype.moveTo = function(c, x, y) {
    c.moveTo((x - this.origin_x) * this.scale, (y - this.origin_y) * this.scale)
  };
  Part.prototype.lineTo = function(c, x, y) {
    c.lineTo((x - this.origin_x) * this.scale, (y - this.origin_y) * this.scale)
  };
  Part.prototype.draw_line = function(c, x1, y1, x2, y2, width) {
    c.lineWidth = width * this.scale;
    c.beginPath();
    c.moveTo((x1 - this.origin_x) * this.scale, (y1 - this.origin_y) * this.scale);
    c.lineTo((x2 - this.origin_x) * this.scale, (y2 - this.origin_y) * this.scale);
    c.stroke()
  };
  Part.prototype.draw_arc = function(c, x, y, radius, start_radians, end_radians, anticlockwise, width, filled) {
    c.lineWidth = width * this.scale;
    c.beginPath();
    c.arc((x - this.origin_x) * this.scale, (y - this.origin_y) * this.scale, radius * this.scale, start_radians, end_radians, anticlockwise);
    if (filled) c.fill();
    else c.stroke()
  };
  Part.prototype.draw_text = function(c, text, x, y, size) {};
  function part_enter(event) {
    if (!event) event = window.event;
    var canvas = window.event ? event.srcElement: event.target;
    var part = canvas.part;
    canvas.style.borderColor = normal_style;
    part.sch.message(part.tip + ": drag onto diagram to insert");
    return false
  }
  function part_leave(event) {
    if (!event) event = window.event;
    var canvas = window.event ? event.srcElement: event.target;
    var part = canvas.part;
    if (typeof part.sch.new_part == "undefined") {}
    canvas.style.borderColor = background_style;
    part.sch.message("");
    return false
  }
  function part_mouse_down(event) {
    if (!event) event = window.event;
    var part = window.event ? event.srcElement.part: event.target.part;
    part.select(true);
    part.sch.new_part = part;
    return false
  }
  function part_mouse_up(event) {
    if (!event) event = window.event;
    var part = window.event ? event.srcElement.part: event.target.part;
    part.select(false);
    part.sch.new_part = undefined;
    return false
  }
  function canonicalize(r) {
    var temp;
    if (r[0] > r[2]) {
      temp = r[0];
      r[0] = r[2];
      r[2] = temp
    }
    if (r[1] > r[3]) {
      temp = r[1];
      r[1] = r[3];
      r[3] = temp
    }
  }
  function between(x, x1, x2) {
    return x1 <= x && x <= x2
  }
  function inside(rect, x, y) {
    return between(x, rect[0], rect[2]) && between(y, rect[1], rect[3])
  }
  function intersect(r1, r2) {
    var result = !(r2[0] > r1[2] || r2[2] < r1[0] || r2[1] > r1[3] || r2[3] < r1[1]);
    return result
  }
  function Component(type, x, y, rotation) {
    this.sch = undefined;
    this.type = type;
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.selected = false;
    this.properties = [];
    this.bounding_box = [0, 0, 0, 0];
    this.bbox = this.bounding_box;
    this.connections = []
  }
  Component.prototype.json = function(index) {
    this.properties["_json_"] = index;
    var props = {};
    for (var p in this.properties) props[p] = this.properties[p];
    var conns = [];
    for (var i = 0; i < this.connections.length; i++) conns.push(this.connections[i].json());
    var json = [this.type, [this.x, this.y, this.rotation], props, conns];
    return json
  };
  Component.prototype.add_connection = function(offset_x, offset_y) {
    this.connections.push(new ConnectionPoint(this, offset_x, offset_y))
  };
  Component.prototype.update_coords = function() {
    var x = this.x;
    var y = this.y;
    var b = this.bounding_box;
    this.bbox[0] = this.transform_x(b[0], b[1]) + x;
    this.bbox[1] = this.transform_y(b[0], b[1]) + y;
    this.bbox[2] = this.transform_x(b[2], b[3]) + x;
    this.bbox[3] = this.transform_y(b[2], b[3]) + y;
    canonicalize(this.bbox);
    for (var i = this.connections.length - 1; i >= 0; --i) this.connections[i].update_location()
  };
  Component.prototype.rotate = function(amount) {
    var old_rotation = this.rotation;
    this.rotation = (this.rotation + amount) % 8;
    this.update_coords()
  };
  Component.prototype.move_begin = function() {
    this.move_x = this.x;
    this.move_y = this.y
  };
  Component.prototype.move = function(dx, dy) {
    this.x += dx;
    this.y += dy;
    this.update_coords()
  };
  Component.prototype.move_end = function() {
    var dx = this.x - this.move_x;
    var dy = this.y - this.move_y;
    if (dx != 0 || dy != 0) {
      this.sch.check_wires(this)
    }
  };
  Component.prototype.add = function(sch) {
    this.sch = sch;
    sch.add_component(this);
    this.update_coords()
  };
  Component.prototype.remove = function() {
    for (var i = this.connections.length - 1; i >= 0; --i) {
      var cp = this.connections[i];
      this.sch.remove_connection_point(cp, cp.location)
    }
    this.sch.remove_component(this);
    this.sch = undefined
  };
  Component.prototype.transform_x = function(x, y) {
    var rot = this.rotation;
    if (rot == 0 || rot == 6) return x;
    else if (rot == 1 || rot == 5) return - y;
    else if (rot == 2 || rot == 4) return - x;
    else return y
  };
  Component.prototype.transform_y = function(x, y) {
    var rot = this.rotation;
    if (rot == 1 || rot == 7) return x;
    else if (rot == 2 || rot == 6) return - y;
    else if (rot == 3 || rot == 5) return - x;
    else return y
  };
  Component.prototype.moveTo = function(c, x, y) {
    var nx = this.transform_x(x, y) + this.x;
    var ny = this.transform_y(x, y) + this.y;
    this.sch.moveTo(c, nx, ny)
  };
  Component.prototype.lineTo = function(c, x, y) {
    var nx = this.transform_x(x, y) + this.x;
    var ny = this.transform_y(x, y) + this.y;
    this.sch.lineTo(c, nx, ny)
  };
  Component.prototype.draw_line = function(c, x1, y1, x2, y2) {
    c.strokeStyle = this.selected ? selected_style: this.type == "w" ? normal_style: component_style;
    var nx1 = this.transform_x(x1, y1) + this.x;
    var ny1 = this.transform_y(x1, y1) + this.y;
    var nx2 = this.transform_x(x2, y2) + this.x;
    var ny2 = this.transform_y(x2, y2) + this.y;
    this.sch.draw_line(c, nx1, ny1, nx2, ny2, 1)
  };
  Component.prototype.draw_circle = function(c, x, y, radius, filled) {
    if (filled) c.fillStyle = this.selected ? selected_style: normal_style;
    else c.strokeStyle = this.selected ? selected_style: this.type == "w" ? normal_style: component_style;
    var nx = this.transform_x(x, y) + this.x;
    var ny = this.transform_y(x, y) + this.y;
    this.sch.draw_arc(c, nx, ny, radius, 0, 2 * Math.PI, false, 1, filled)
  };
  var rot_angle = [0, Math.PI / 2, Math.PI, 3 * Math.PI / 2, 0, Math.PI / 2, Math.PI, 3 * Math.PI / 2];
  Component.prototype.draw_arc = function(c, x, y, radius, start_radians, end_radians) {
    c.strokeStyle = this.selected ? selected_style: this.type == "w" ? normal_style: component_style;
    var nx = this.transform_x(x, y) + this.x;
    var ny = this.transform_y(x, y) + this.y;
    this.sch.draw_arc(c, nx, ny, radius, start_radians + rot_angle[this.rotation], end_radians + rot_angle[this.rotation], false, 1, false)
  };
  Component.prototype.draw = function(c) {};
  var aOrient = [0, 1, 2, 3, 4, 5, 6, 7, 8, 2, 5, 8, 1, 4, 7, 0, 3, 6, 8, 7, 6, 5, 4, 3, 2, 1, 0, 6, 3, 0, 7, 4, 1, 8, 5, 3, 2, 1, 0, 5, 4, 3, 8, 7, 6, 8, 5, 2, 7, 4, 1, 6, 3, 0, 6, 7, 8, 3, 4, 5, 0, 1, 2, 0, 3, 6, 1, 4, 7, 2, 5, 8];
  var textAlign = ["left", "center", "right", "left", "center", "right", "left", "center", "right"];
  var textBaseline = ["top", "top", "top", "middle", "middle", "middle", "bottom", "bottom", "bottom"];
  Component.prototype.draw_text = function(c, text, x, y, alignment, size, fill) {
    var a = aOrient[this.rotation * 9 + alignment];
    c.textAlign = textAlign[a];
    c.textBaseline = textBaseline[a];
    if (fill == undefined) c.fillStyle = this.selected ? selected_style: normal_style;
    else c.fillStyle = fill;
    this.sch.draw_text(c, text, this.transform_x(x, y) + this.x, this.transform_y(x, y) + this.y, size)
  };
  Component.prototype.set_select = function(which) {
    if (which != this.selected) {
      this.selected = which
    }
  };
  Component.prototype.select = function(x, y, shiftKey) {
    this.was_previously_selected = this.selected;
    if (this.near(x, y)) {
      this.set_select(shiftKey ? !this.selected: true);
      return true
    } else return false
  };
  Component.prototype.select_rect = function(s) {
    this.was_previously_selected = this.selected;
    if (intersect(this.bbox, s)) this.set_select(true)
  };
  Component.prototype.bisect = function(c) {
    return null
  };
  Component.prototype.near = function(x, y) {
    return inside(this.bbox, x, y)
  };
  Component.prototype.edit_properties = function(x, y) {
    if (this.near(x, y)) {
      var fields = [];
      for (var i in this.properties) if (i.charAt(0) != "_") fields[i] = build_input("text", 10, this.properties[i]);
      var content = build_table(fields);
      content.fields = fields;
      content.component = this;
      this.sch.dialog("Edit Properties", content,
      function(content) {
        for (var i in content.fields) content.component.properties[i] = content.fields[i].value;
        content.component.sch.redraw_background()
      });
      return true
    } else return false
  };
  Component.prototype.clear_labels = function() {
    for (var i = this.connections.length - 1; i >= 0; --i) {
      this.connections[i].clear_label()
    }
  };
  Component.prototype.propagate_label = function(label) {};
  Component.prototype.add_default_labels = function() {};
  Component.prototype.label_connections = function() {
    for (var i = this.connections.length - 1; i >= 0; --i) {
      var cp = this.connections[i];
      if (!cp.label) cp.propagate_label(this.sch.get_next_label())
    }
  };
  Component.prototype.probe_info = function() {
    return undefined
  };
  Component.prototype.display_current = function(c, vmap) {};
  var connection_point_radius = 2;
  function ConnectionPoint(parent, x, y) {
    this.parent = parent;
    this.offset_x = x;
    this.offset_y = y;
    this.location = "";
    this.update_location();
    this.label = undefined
  }
  ConnectionPoint.prototype.toString = function() {
    return "<ConnectionPoint (" + this.offset_x + "," + this.offset_y + ") " + this.parent.toString() + ">"
  };
  ConnectionPoint.prototype.json = function() {
    return this.label
  };
  ConnectionPoint.prototype.clear_label = function() {
    this.label = undefined
  };
  ConnectionPoint.prototype.propagate_label = function(label) {
    if (this.label === undefined) {
      this.label = label;
      this.parent.sch.propagate_label(label, this.location);
      this.parent.propagate_label(label)
    } else if (this.label != "0" && label != "0" && this.label != label) alert("Node has two conflicting labels: " + this.label + ", " + label)
  };
  ConnectionPoint.prototype.update_location = function() {
    var old_location = this.location;
    var parent = this.parent;
    var nx = parent.transform_x(this.offset_x, this.offset_y) + parent.x;
    var ny = parent.transform_y(this.offset_x, this.offset_y) + parent.y;
    this.x = nx;
    this.y = ny;
    this.location = nx + "," + ny;
    if (parent.sch) parent.sch.update_connection_point(this, old_location)
  };
  ConnectionPoint.prototype.coincident = function(x, y) {
    return this.x == x && this.y == y
  };
  ConnectionPoint.prototype.draw = function(c, n) {
    if (n != 2) this.parent.draw_circle(c, this.offset_x, this.offset_y, connection_point_radius, n > 2)
  };
  ConnectionPoint.prototype.draw_x = function(c) {
    this.parent.draw_line(c, this.offset_x - 2, this.offset_y - 2, this.offset_x + 2, this.offset_y + 2, grid_style);
    this.parent.draw_line(c, this.offset_x + 2, this.offset_y - 2, this.offset_x - 2, this.offset_y + 2, grid_style)
  };
  ConnectionPoint.prototype.display_voltage = function(c, vmap) {
    var v = vmap[this.label];
    if (v != undefined) {
      var label = v.toFixed(2) + "V";
      c.globalAlpha = .85;
      this.parent.draw_text(c, "â–ˆâ–ˆâ–ˆ", this.offset_x, this.offset_y, 4, annotation_size, element_style);
      c.globalAlpha = 1;
      this.parent.draw_text(c, label, this.offset_x, this.offset_y, 4, annotation_size, annotation_style);
      delete vmap[this.label]
    }
  };
  function collinear(p1, p2, p3) {
    var area = p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y);
    return area == 0
  }
  var near_distance = 2;
  function Wire(x1, y1, x2, y2) {
    Component.call(this, "w", x1, y1, 0);
    this.dx = x2 - x1;
    this.dy = y2 - y1;
    this.add_connection(0, 0);
    this.add_connection(this.dx, this.dy);
    var r = [0, 0, this.dx, this.dy];
    canonicalize(r);
    r[0] -= near_distance;
    r[1] -= near_distance;
    r[2] += near_distance;
    r[3] += near_distance;
    this.bounding_box = r;
    this.update_coords();
    this.len = Math.sqrt(this.dx * this.dx + this.dy * this.dy)
  }
  Wire.prototype = new Component;
  Wire.prototype.constructor = Wire;
  Wire.prototype.toString = function() {
    return "<Wire (" + this.x + "," + this.y + ") (" + (this.x + this.dx) + "," + (this.y + this.dy) + ")>"
  };
  Wire.prototype.other_end = function(cp) {
    if (cp == this.connections[0]) return this.connections[1];
    else if (cp == this.connections[1]) return this.connections[0];
    else return undefined
  };
  Wire.prototype.json = function(index) {
    var json = ["w", [this.x, this.y, this.x + this.dx, this.y + this.dy]];
    return json
  };
  Wire.prototype.draw = function(c) {
    this.draw_line(c, 0, 0, this.dx, this.dy)
  };
  Wire.prototype.clone = function(x, y) {
    return new Wire(x, y, x + this.dx, y + this.dy)
  };
  Wire.prototype.near = function(x, y) {
    if (inside(this.bbox, x, y)) {
      var D = Math.abs((x - this.x) * this.dy - (y - this.y) * this.dx) / this.len;
      if (D <= near_distance) return true
    }
    return false
  };
  Wire.prototype.select_rect = function(s) {
    this.was_previously_selected = this.selected;
    if (inside(s, this.x, this.y) || inside(s, this.x + this.dx, this.y + this.dy)) this.set_select(true)
  };
  Wire.prototype.bisect_cp = function(cp) {
    var x = cp.x;
    var y = cp.y;
    if (inside(this.bbox, x, y)) {
      var D = Math.abs((x - this.x) * this.dy - (y - this.y) * this.dx) / this.len;
      if (D < 1 && !this.connections[0].coincident(x, y) && !this.connections[1].coincident(x, y)) return true
    }
    return false
  };
  Wire.prototype.bisect = function(c) {
    if (c == undefined) return;
    for (var i = c.connections.length - 1; i >= 0; --i) {
      var cp = c.connections[i];
      if (this.bisect_cp(cp)) return cp
    }
    return null
  };
  Wire.prototype.move_end = function() {
    this.sch.check_wires(this);
    this.sch.check_connection_points(this)
  };
  Wire.prototype.propagate_label = function(label) {
    this.connections[0].propagate_label(label);
    this.connections[1].propagate_label(label)
  };
  Wire.prototype.edit_properties = function(x, y) {
    return false
  };
  Wire.prototype.label_connections = function() {};
  function Ground(x, y, rotation) {
    Component.call(this, "g", x, y, rotation);
    this.add_connection(0, 0);
    this.bounding_box = [ - 6, 0, 6, 8];
    this.update_coords()
  }
  Ground.prototype = new Component;
  Ground.prototype.constructor = Ground;
  Ground.prototype.toString = function() {
    return "<Ground (" + this.x + "," + this.y + ")>"
  };
  Ground.prototype.draw = function(c) {
    Component.prototype.draw.call(this, c);
    this.draw_line(c, 0, 0, 0, 8);
    this.draw_line(c, -6, 8, 6, 8)
  };
  Ground.prototype.clone = function(x, y) {
    return new Ground(x, y, this.rotation)
  };
  Ground.prototype.edit_properties = function(x, y) {
    return false
  };
  Ground.prototype.add_default_labels = function() {
    this.connections[0].propagate_label("0")
  };
  function Label(x, y, rotation, label) {
    Component.call(this, "L", x, y, rotation);
    this.properties["label"] = label ? label: "???";
    this.add_connection(0, 0);
    this.bounding_box = [ - 2, 0, 2, 8];
    this.update_coords()
  }
  Label.prototype = new Component;
  Label.prototype.constructor = Label;
  Label.prototype.toString = function() {
    return "<Label" + " (" + this.x + "," + this.y + ")>"
  };
  Label.prototype.draw = function(c) {
    Component.prototype.draw.call(this, c);
    this.draw_line(c, 0, 0, 0, 8);
    this.draw_text(c, this.properties["label"], 0, 9, 1, property_size)
  };
  Label.prototype.clone = function(x, y) {
    return new Label(x, y, this.rotation, this.properties["label"])
  };
  Label.prototype.add_default_labels = function() {
    this.connections[0].propagate_label(this.properties["label"])
  };
  var probe_colors = ["red", "green", "blue", "cyan", "magenta", "yellow", "black", "x-axis"];
  var probe_colors_rgb = {
    red: "rgb(255,64,64)",
    green: "rgb(64,255,64)",
    blue: "rgb(64,64,255)",
    cyan: "rgb(64,255,255)",
    magenta: "rgb(255,64,255)",
    yellow: "rgb(255,255,64)",
    black: "rgb(0,0,0)",
    "x-axis": undefined
  };
  function Probe(x, y, rotation, color, offset) {
    Component.call(this, "s", x, y, rotation);
    this.add_connection(0, 0);
    this.properties["color"] = color ? color: "cyan";
    this.properties["offset"] = offset == undefined || offset == "" ? "0": offset;
    this.bounding_box = [0, 0, 27, -21];
    this.update_coords()
  }
  Probe.prototype = new Component;
  Probe.prototype.constructor = Probe;
  Probe.prototype.toString = function() {
    return "<Probe (" + this.x + "," + this.y + ")>"
  };
  Probe.prototype.draw = function(c) {
    this.draw_line(c, 0, 0, 4, -4);
    this.draw_line(c, 2, -6, 6, -2);
    this.draw_line(c, 2, -6, 17, -21);
    this.draw_line(c, 6, -2, 21, -17);
    this.draw_line(c, 17, -21, 21, -17);
    this.draw_arc(c, 19, -11, 8, 3 * Math.PI / 2, 0);
    var color = probe_colors_rgb[this.properties["color"]];
    if (color != undefined) {
      c.fillStyle = color;
      c.beginPath();
      this.moveTo(c, 2, -6);
      this.lineTo(c, 6, -2);
      this.lineTo(c, 21, -17);
      this.lineTo(c, 17, -21);
      this.lineTo(c, 2, -6);
      c.fill()
    } else {
      this.draw_text(c, this.properties["color"], 27, -11, 1, property_size)
    }
  };
  Probe.prototype.clone = function(x, y) {
    return new Probe(x, y, this.rotation, this.properties["color"], this.properties["offset"])
  };
  Probe.prototype.edit_properties = function(x, y) {
    if (inside(this.bbox, x, y)) {
      var fields = [];
      fields["Plot color"] = build_select(probe_colors, this.properties["color"]);
      fields["Plot offset"] = build_input("text", 10, this.properties["offset"]);
      var content = build_table(fields);
      content.fields = fields;
      content.component = this;
      this.sch.dialog("Edit Properties", content,
      function(content) {
        var color_choice = content.fields["Plot color"];
        content.component.properties["color"] = probe_colors[color_choice.selectedIndex];
        content.component.properties["offset"] = content.fields["Plot offset"].value;
        content.component.sch.redraw_background()
      });
      return true
    } else return false
  };
  Probe.prototype.probe_info = function() {
    var color = this.properties["color"];
    var offset = this.properties["offset"];
    if (offset == undefined || offset == "") offset = "0";
    return [color, this.connections[0].label, offset, "voltage"]
  };
  function Ammeter(x, y, rotation, color, offset) {
    Component.call(this, "a", x, y, rotation);
    this.add_connection(0, 0);
    this.add_connection(16, 0);
    this.properties["color"] = color ? color: "magenta";
    this.properties["offset"] = offset == undefined || offset == "" ? "0": offset;
    this.bounding_box = [ - 3, 0, 16, 3];
    this.update_coords()
  }
  Ammeter.prototype = new Component;
  Ammeter.prototype.constructor = Ammeter;
  Ammeter.prototype.toString = function() {
    return "<Ammeter (" + this.x + "," + this.y + ")>"
  };
  Ammeter.prototype.move_end = function() {
    Component.prototype.move_end.call(this);
    var e1 = this.connections[0].location;
    var e2 = this.connections[1].location;
    var cplist = this.sch.find_connections(this.connections[0]);
    for (var i = cplist.length - 1; i >= 0; --i) {
      var c = cplist[i].parent;
      if (c.type == "w") {
        var c_e1 = c.connections[0].location;
        var c_e2 = c.connections[1].location;
        if (e1 == c_e1 && c2 == c_e2 || e1 == c_e2 && e2 == c_e1) {
          c.remove();
          break
        }
      }
    }
  };
  Ammeter.prototype.draw = function(c) {
    this.draw_line(c, 0, 0, 16, 0);
    c.strokeStyle = probe_colors_rgb[this.properties["color"]];
    if (c.strokeStyle != undefined) {
      c.beginPath();
      this.moveTo(c, 6, -3);
      this.lineTo(c, 10, 0);
      this.lineTo(c, 6, 3);
      c.stroke()
    }
  };
  Ammeter.prototype.clone = function(x, y) {
    return new Ammeter(x, y, this.rotation, this.properties["color"], this.properties["offset"])
  };
  Ammeter.prototype.edit_properties = Probe.prototype.edit_properties;
  Ammeter.prototype.label = function() {
    var name = this.properties["name"];
    var label = "I(" + (name ? name: "_" + this.properties["_json_"]) + ")";
    return label
  };
  Ammeter.prototype.display_current = function(c, vmap) {
    var label = this.label();
    var v = vmap[label];
    if (v != undefined) {
      var i = engineering_notation(v, 2) + "A";
      this.draw_text(c, i, 8, -5, 7, annotation_size, annotation_style);
      delete vmap[label]
    }
  };
  Ammeter.prototype.probe_info = function() {
    var color = this.properties["color"];
    var offset = this.properties["offset"];
    if (offset == undefined || offset == "") offset = "0";
    return [color, this.label(), offset, "current"]
  };
  function Resistor(x, y, rotation, name, r) {
    Component.call(this, "r", x, y, rotation);
    this.properties["name"] = name;
    this.properties["r"] = r ? r: "1";
    this.add_connection(0, 0);
    this.add_connection(0, 48);
    this.bounding_box = [ - 5, 0, 5, 48];
    this.update_coords()
  }
  Resistor.prototype = new Component;
  Resistor.prototype.constructor = Resistor;
  Resistor.prototype.toString = function() {
    return "<Resistor " + this.properties["r"] + " (" + this.x + "," + this.y + ")>"
  };
  Resistor.prototype.draw = function(c) {
    Component.prototype.draw.call(this, c);
    this.draw_line(c, 0, 0, 0, 12);
    this.draw_line(c, 0, 12, 4, 14);
    this.draw_line(c, 4, 14, -4, 18);
    this.draw_line(c, -4, 18, 4, 22);
    this.draw_line(c, 4, 22, -4, 26);
    this.draw_line(c, -4, 26, 4, 30);
    this.draw_line(c, 4, 30, -4, 34);
    this.draw_line(c, -4, 34, 0, 36);
    this.draw_line(c, 0, 36, 0, 48);
    if (this.properties["r"]) this.draw_text(c, this.properties["r"] + "Î©", 5, 24, 3, property_size);
    if (this.properties["name"]) this.draw_text(c, this.properties["name"], -5, 24, 5, property_size)
  };
  Resistor.prototype.clone = function(x, y) {
    return new Resistor(x, y, this.rotation, this.properties["name"], this.properties["r"])
  };
  function Capacitor(x, y, rotation, name, c) {
    Component.call(this, "c", x, y, rotation);
    this.properties["name"] = name;
    this.properties["c"] = c ? c: "1p";
    this.add_connection(0, 0);
    this.add_connection(0, 48);
    this.bounding_box = [ - 8, 0, 8, 48];
    this.update_coords()
  }
  Capacitor.prototype = new Component;
  Capacitor.prototype.constructor = Capacitor;
  Capacitor.prototype.toString = function() {
    return "<Capacitor " + this.properties["r"] + " (" + this.x + "," + this.y + ")>"
  };
  Capacitor.prototype.draw = function(c) {
    Component.prototype.draw.call(this, c);
    this.draw_line(c, 0, 0, 0, 22);
    this.draw_line(c, -8, 22, 8, 22);
    this.draw_line(c, -8, 26, 8, 26);
    this.draw_line(c, 0, 26, 0, 48);
    if (this.properties["c"]) this.draw_text(c, this.properties["c"] + "F", 9, 24, 3, property_size);
    if (this.properties["name"]) this.draw_text(c, this.properties["name"], -9, 24, 5, property_size)
  };
  Capacitor.prototype.clone = function(x, y) {
    return new Capacitor(x, y, this.rotation, this.properties["name"], this.properties["c"])
  };
  function Inductor(x, y, rotation, name, l) {
    Component.call(this, "l", x, y, rotation);
    this.properties["name"] = name;
    this.properties["l"] = l ? l: "1n";
    this.add_connection(0, 0);
    this.add_connection(0, 48);
    this.bounding_box = [ - 4, 0, 5, 48];
    this.update_coords()
  }
  Inductor.prototype = new Component;
  Inductor.prototype.constructor = Inductor;
  Inductor.prototype.toString = function() {
    return "<Inductor " + this.properties["l"] + " (" + this.x + "," + this.y + ")>"
  };
  Inductor.prototype.draw = function(c) {
    Component.prototype.draw.call(this, c);
    this.draw_line(c, 0, 0, 0, 14);
    this.draw_arc(c, 0, 18, 4, 6 * Math.PI / 4, 3 * Math.PI / 4);
    this.draw_arc(c, 0, 24, 4, 5 * Math.PI / 4, 3 * Math.PI / 4);
    this.draw_arc(c, 0, 30, 4, 5 * Math.PI / 4, 2 * Math.PI / 4);
    this.draw_line(c, 0, 34, 0, 48);
    if (this.properties["l"]) this.draw_text(c, this.properties["l"] + "H", 6, 24, 3, property_size);
    if (this.properties["name"]) this.draw_text(c, this.properties["name"], -3, 24, 5, property_size)
  };
  Inductor.prototype.clone = function(x, y) {
    return new Inductor(x, y, this.rotation, this.properties["name"], this.properties["l"])
  };
  var diode_types = ["normal", "ideal"];
  function Diode(x, y, rotation, name, area, type) {
    Component.call(this, "d", x, y, rotation);
    this.properties["name"] = name;
    this.properties["area"] = area ? area: "1";
    this.properties["type"] = type ? type: "normal";
    this.add_connection(0, 0);
    this.add_connection(0, 48);
    this.bounding_box = type == "ideal" ? [ - 12, 0, 12, 48] : [ - 8, 0, 8, 48];
    this.update_coords()
  }
  Diode.prototype = new Component;
  Diode.prototype.constructor = Diode;
  Diode.prototype.toString = function() {
    return "<Diode " + this.properties["area"] + " (" + this.x + "," + this.y + ")>"
  };
  Diode.prototype.draw = function(c) {
    Component.prototype.draw.call(this, c);
    this.draw_line(c, 0, 0, 0, 16);
    this.draw_line(c, -8, 16, 8, 16);
    this.draw_line(c, -8, 16, 0, 32);
    this.draw_line(c, 8, 16, 0, 32);
    this.draw_line(c, -8, 32, 8, 32);
    this.draw_line(c, 0, 32, 0, 48);
    if (this.properties["type"] == "ideal") {
      this.draw_line(c, -10, 12, 10, 12);
      this.draw_line(c, -10, 12, -10, 36);
      this.draw_line(c, 10, 12, 10, 36);
      this.draw_line(c, -10, 36, 10, 36)
    }
    if (this.properties["area"]) this.draw_text(c, this.properties["area"], 10, 24, 3, property_size);
    if (this.properties["name"]) this.draw_text(c, this.properties["name"], -10, 24, 5, property_size)
  };
  Diode.prototype.clone = function(x, y) {
    return new Diode(x, y, this.rotation, this.properties["name"], this.properties["area"], this.properties["type"])
  };
  Diode.prototype.edit_properties = function(x, y) {
    if (inside(this.bbox, x, y)) {
      var fields = [];
      fields["name"] = build_input("text", 10, this.properties["name"]);
      fields["area"] = build_input("text", 10, this.properties["area"]);
      fields["type"] = build_select(diode_types, this.properties["type"]);
      var content = build_table(fields);
      content.fields = fields;
      content.component = this;
      this.sch.dialog("Edit Properties", content,
      function(content) {
        content.component.properties["name"] = content.fields["name"].value;
        content.component.properties["area"] = content.fields["area"].value;
        content.component.properties["type"] = diode_types[content.fields["type"].selectedIndex];
        content.component.sch.redraw_background()
      });
      return true
    } else return false
  };
  function NFet(x, y, rotation, name, w_over_l) {
    Component.call(this, "n", x, y, rotation);
    this.properties["name"] = name;
    this.properties["W/L"] = w_over_l ? w_over_l: "2";
    this.add_connection(0, 0);
    this.add_connection( - 24, 24);
    this.add_connection(0, 48);
    this.bounding_box = [ - 24, 0, 8, 48];
    this.update_coords()
  }
  NFet.prototype = new Component;
  NFet.prototype.constructor = NFet;
  NFet.prototype.toString = function() {
    return "<NFet " + this.properties["W/L"] + " (" + this.x + "," + this.y + ")>"
  };
  NFet.prototype.draw = function(c) {
    Component.prototype.draw.call(this, c);
    this.draw_line(c, 0, 0, 0, 16);
    this.draw_line(c, -8, 16, 0, 16);
    this.draw_line(c, -8, 16, -8, 32);
    this.draw_line(c, -8, 32, 0, 32);
    this.draw_line(c, 0, 32, 0, 48);
    this.draw_line(c, -24, 24, -12, 24);
    this.draw_line(c, -12, 16, -12, 32);
    var dim = this.properties["W/L"];
    if (this.properties["name"]) {
      this.draw_text(c, this.properties["name"], 2, 22, 6, property_size);
      this.draw_text(c, dim, 2, 26, 0, property_size)
    } else this.draw_text(c, dim, 2, 24, 3, property_size)
  };
  NFet.prototype.clone = function(x, y) {
    return new NFet(x, y, this.rotation, this.properties["name"], this.properties["W/L"])
  };
  function PFet(x, y, rotation, name, w_over_l) {
    Component.call(this, "p", x, y, rotation);
    this.properties["name"] = name;
    this.properties["W/L"] = w_over_l ? w_over_l: "2";
    this.add_connection(0, 0);
    this.add_connection( - 24, 24);
    this.add_connection(0, 48);
    this.bounding_box = [ - 24, 0, 8, 48];
    this.update_coords()
  }
  PFet.prototype = new Component;
  PFet.prototype.constructor = PFet;
  PFet.prototype.toString = function() {
    return "<PFet " + this.properties["W/L"] + " (" + this.x + "," + this.y + ")>"
  };
  PFet.prototype.draw = function(c) {
    Component.prototype.draw.call(this, c);
    this.draw_line(c, 0, 0, 0, 16);
    this.draw_line(c, -8, 16, 0, 16);
    this.draw_line(c, -8, 16, -8, 32);
    this.draw_line(c, -8, 32, 0, 32);
    this.draw_line(c, 0, 32, 0, 48);
    this.draw_line(c, -24, 24, -16, 24);
    this.draw_circle(c, -14, 24, 2, false);
    this.draw_line(c, -12, 16, -12, 32);
    var dim = this.properties["W/L"];
    if (this.properties["name"]) {
      this.draw_text(c, this.properties["name"], 2, 22, 6, property_size);
      this.draw_text(c, dim, 2, 26, 0, property_size)
    } else this.draw_text(c, dim, 2, 24, 3, property_size)
  };
  PFet.prototype.clone = function(x, y) {
    return new PFet(x, y, this.rotation, this.properties["name"], this.properties["W/L"])
  };
  function OpAmp(x, y, rotation, name, A) {
    Component.call(this, "o", x, y, rotation);
    this.properties["name"] = name;
    this.properties["A"] = A ? A: "30000";
    this.add_connection(0, 0);
    this.add_connection(0, 16);
    this.add_connection(48, 8);
    this.add_connection(24, 32);
    this.bounding_box = [0, -8, 48, 32];
    this.update_coords()
  }
  OpAmp.prototype = new Component;
  OpAmp.prototype.constructor = OpAmp;
  OpAmp.prototype.toString = function() {
    return "<OpAmp" + this.properties["A"] + " (" + this.x + "," + this.y + ")>"
  };
  OpAmp.prototype.draw = function(c) {
    Component.prototype.draw.call(this, c);
    this.draw_line(c, 8, -8, 8, 24);
    this.draw_line(c, 8, -8, 40, 8);
    this.draw_line(c, 8, 24, 40, 8);
    this.draw_line(c, 0, 0, 8, 0);
    this.draw_line(c, 0, 16, 8, 16);
    this.draw_text(c, "gnd", 37, 18, property_size);
    this.draw_line(c, 40, 8, 48, 8);
    this.draw_line(c, 24, 16, 24, 32);
    this.draw_line(c, 10, 0, 16, 0);
    this.draw_line(c, 13, -3, 13, 3);
    this.draw_line(c, 10, 16, 16, 16);
    if (this.properties["name"]) this.draw_text(c, this.properties["name"], 32, 16, 0, property_size)
  };
  OpAmp.prototype.clone = function(x, y) {
    return new OpAmp(x, y, this.rotation, this.properties["name"], this.properties["A"])
  };
  function Source(x, y, rotation, name, type, value) {
    Component.call(this, type, x, y, rotation);
    this.properties["name"] = name;
    if (value == undefined) value = "dc(1)";
    this.properties["value"] = value;
    this.add_connection(0, 0);
    this.add_connection(0, 48);
    this.bounding_box = [ - 12, 0, 12, 48];
    this.update_coords();
    this.content = document.createElement("div")
  }
  Source.prototype = new Component;
  Source.prototype.constructor = Source;
  Source.prototype.toString = function() {
    return "<" + this.type + "source " + this.properties["params"] + " (" + this.x + "," + this.y + ")>"
  };
  Source.prototype.draw = function(c) {
    Component.prototype.draw.call(this, c);
    this.draw_line(c, 0, 0, 0, 12);
    this.draw_circle(c, 0, 24, 12, false);
    this.draw_line(c, 0, 36, 0, 48);
    if (this.type == "v") {
      this.draw_line(c, 0, 15, 0, 21);
      this.draw_line(c, -3, 18, 3, 18);
      this.draw_line(c, -3, 30, 3, 30)
    } else if (this.type == "i") {
      this.draw_line(c, 0, 15, 0, 32);
      this.draw_line(c, -3, 26, 0, 32);
      this.draw_line(c, 3, 26, 0, 32)
    }
    if (this.properties["name"]) this.draw_text(c, this.properties["name"], -13, 24, 5, property_size);
    if (this.properties["value"]) this.draw_text(c, this.properties["value"], 13, 24, 3, property_size)
  };
  var source_functions = {
    dc: ["DC value"],
    impulse: ["Height", "Width (secs)"],
    step: ["Initial value", "Plateau value", "Delay until step (secs)", "Rise time (secs)"],
    square: ["Initial value", "Plateau value", "Frequency (Hz)", "Duty cycle (%)"],
    triangle: ["Initial value", "Plateau value", "Frequency (Hz)"],
    pwl: ["Comma-separated list of alternating times and values"],
    pwl_repeating: ["Comma-separated list of alternating times and values"],
    pulse: ["Initial value", "Plateau value", "Delay until pulse (secs)", "Time for first transition (secs)", "Time for second transition (secs)", "Pulse width (secs)", "Period (secs)"],
    sin: ["Offset value", "Amplitude", "Frequency (Hz)", "Delay until sin starts (secs)", "Phase offset (degrees)"]
  };
  Source.prototype.build_content = function(src) {
    var fields = [];
    fields["name"] = build_input("text", 10, this.properties["name"]);
    if (src == undefined) {
      fields["value"] = this.properties["value"]
    } else {
      var src_types = [];
      for (var t in source_functions) src_types.push(t);
      var type_select = build_select(src_types, src.fun);
      type_select.component = this;
      type_select.addEventListener("change", source_type_changed, false);
      fields["type"] = type_select;
      if (src.fun == "pwl" || src.run == "pwl_repeating") {
        var v = "";
        var first = true;
        for (var i = 0; i < src.args.length; i++) {
          if (first) first = false;
          else v += ",";
          v += engineering_notation(src.args[i], 3);
          if (i % 2 == 0) v += "s"
        }
        fields[source_functions[src.fun][0]] = build_input("text", 30, v)
      } else {
        var labels = source_functions[src.fun];
        for (var i = 0; i < labels.length; i++) {
          var v = engineering_notation(src.args[i], 3);
          fields[labels[i]] = build_input("text", 10, v)
        }
      }
    }
    var div = this.content;
    if (div.hasChildNodes()) div.removeChild(div.firstChild);
    div.appendChild(build_table(fields));
    div.fields = fields;
    div.component = this;
    return div
  };
  function source_type_changed(event) {
    if (!event) event = window.event;
    var select = window.event ? event.srcElement: event.target;
    var type = select.options[select.selectedIndex].value;
    var src = undefined;
    if (this.src != undefined && type == this.src.fun) src = this.src;
    else if (typeof cktsim != "undefined") src = cktsim.parse_source(type + "()");
    select.component.build_content(src)
  }
  Source.prototype.edit_properties = function(x, y) {
    if (this.near(x, y)) {
      this.src = undefined;
      if (typeof cktsim != "undefined") this.src = cktsim.parse_source(this.properties["value"]);
      var content = this.build_content(this.src);
      this.sch.dialog("Edit Properties", content,
      function(content) {
        var c = content.component;
        var fields = content.fields;
        var first = true;
        var value = "";
        for (var label in fields) {
          if (label == "name") c.properties["name"] = fields["name"].value;
          else if (label == "value") {
            value = fields["value"].value;
            c.sch.redraw_background();
            return
          } else if (label == "type") {
            var select = fields["type"];
            value = select.options[select.selectedIndex].value + "("
          } else {
            if (first) first = false;
            else value += ",";
            value += fields[label].value
          }
        }
        c.properties["value"] = value + ")";
        c.sch.redraw_background()
      });
      return true
    } else return false
  };
  function VSource(x, y, rotation, name, value) {
    Source.call(this, x, y, rotation, name, "v", value);
    this.type = "v"
  }
  VSource.prototype = new Component;
  VSource.prototype.constructor = VSource;
  VSource.prototype.toString = Source.prototype.toString;
  VSource.prototype.draw = Source.prototype.draw;
  VSource.prototype.clone = Source.prototype.clone;
  VSource.prototype.build_content = Source.prototype.build_content;
  VSource.prototype.edit_properties = Source.prototype.edit_properties;
  VSource.prototype.display_current = function(c, vmap) {
    var name = this.properties["name"];
    var label = "I(" + (name ? name: "_" + this.properties["_json_"]) + ")";
    var v = vmap[label];
    if (v != undefined) {
      c.globalAlpha = .5;
      this.draw_text(c, "â–ˆâ–ˆâ–ˆ", -8, 8, 4, annotation_size, element_style);
      c.globalAlpha = 1;
      var i = engineering_notation(v, 2) + "A";
      this.draw_text(c, i, -3, 5, 5, annotation_size, annotation_style);
      this.draw_line(c, -3, 4, 0, 8);
      this.draw_line(c, 3, 4, 0, 8);
      delete vmap[label]
    }
  };
  VSource.prototype.clone = function(x, y) {
    return new VSource(x, y, this.rotation, this.properties["name"], this.properties["value"])
  };
  function ISource(x, y, rotation, name, value) {
    Source.call(this, x, y, rotation, name, "i", value);
    this.type = "i"
  }
  ISource.prototype = new Component;
  ISource.prototype.constructor = ISource;
  ISource.prototype.toString = Source.prototype.toString;
  ISource.prototype.draw = Source.prototype.draw;
  ISource.prototype.clone = Source.prototype.clone;
  ISource.prototype.build_content = Source.prototype.build_content;
  ISource.prototype.edit_properties = Source.prototype.edit_properties;
  ISource.prototype.clone = function(x, y) {
    return new ISource(x, y, this.rotation, this.properties["name"], this.properties["value"])
  };
  function component_slider(event, ui) {
    var sname = $(this).slider("option", "schematic");
    var cname = $(this).slider("option", "component");
    var pname = $(this).slider("option", "property");
    var suffix = $(this).slider("option", "suffix");
    if (typeof suffix != "string") suffix = "";
    var v = ui.value;
    $(this).slider("value", v);
    var choices = $(this).slider("option", "choices");
    if (choices instanceof Array) v = choices[v];
    $("." + sname).each(function(index, element) {
      element.schematic.set_property(cname, pname, v.toString() + suffix)
    });
    var analysis = $(this).slider("option", "analysis");
    if (analysis == "dc") $("." + sname).each(function(index, element) {
      element.schematic.dc_analysis()
    });
    return false
  }
  var module = {
    Schematic: Schematic,
    component_slider: component_slider
  };
  return module
} (); (function(requirejs, require, define) {
  define("video/00_resizer.js", [],
  function() {
    var Resizer = function(params) {
      var defaults = {
        container: window,
        element: null,
        containerRatio: null,
        elementRatio: null
      },
      callbacksList = [],
      delta = {
        height: 0,
        width: 0
      },
      module = {},
      mode = null,
      config;
      var initialize = function(params) {
        if (!config) {
          config = defaults
        }
        config = $.extend(true, {},
        config, params);
        if (!config.element) {
          console.log("Required parameter `element` is not passed.")
        }
        return module
      };
      var getData = function() {
        var container = $(config.container),
        containerWidth = container.width() + delta.width,
        containerHeight = container.height() + delta.height,
        containerRatio = config.containerRatio,
        element = $(config.element),
        elementRatio = config.elementRatio;
        if (!containerRatio) {
          containerRatio = containerWidth / containerHeight
        }
        if (!elementRatio) {
          elementRatio = element.width() / element.height()
        }
        return {
          containerWidth: containerWidth,
          containerHeight: containerHeight,
          containerRatio: containerRatio,
          element: element,
          elementRatio: elementRatio
        }
      };
      var align = function() {
        var data = getData();
        switch (mode) {
        case "height":
          alignByHeightOnly();
          break;
        case "width":
          alignByWidthOnly();
          break;
        default:
          if (data.containerRatio >= data.elementRatio) {
            alignByHeightOnly()
          } else {
            alignByWidthOnly()
          }
          break
        }
        fireCallbacks();
        return module
      };
      var alignByWidthOnly = function() {
        var data = getData(),
        height = data.containerWidth / data.elementRatio;
        data.element.css({
          height: height,
          width: data.containerWidth,
          top: .5 * (data.containerHeight - height),
          left: 0
        });
        return module
      };
      var alignByHeightOnly = function() {
        var data = getData(),
        width = data.containerHeight * data.elementRatio;
        data.element.css({
          height: data.containerHeight,
          width: data.containerHeight * data.elementRatio,
          top: 0,
          left: .5 * (data.containerWidth - width)
        });
        return module
      };
      var setMode = function(param) {
        if (_.isString(param)) {
          mode = param;
          align()
        }
        return module
      };
      var setElement = function(element) {
        config.element = element;
        return module
      };
      var addCallback = function(func) {
        if ($.isFunction(func)) {
          callbacksList.push(func)
        } else {
          console.error("[Video info]: TypeError: Argument is not a function.")
        }
        return module
      };
      var addOnceCallback = function(func) {
        if ($.isFunction(func)) {
          var decorator = function() {
            func();
            removeCallback(func)
          };
          addCallback(decorator)
        } else {
          console.error("TypeError: Argument is not a function.")
        }
        return module
      };
      var fireCallbacks = function() {
        $.each(callbacksList,
        function(index, callback) {
          callback()
        })
      };
      var removeCallbacks = function() {
        callbacksList.length = 0;
        return module
      };
      var removeCallback = function(func) {
        var index = $.inArray(func, callbacksList);
        if (index !== -1) {
          return callbacksList.splice(index, 1)
        }
      };
      var resetDelta = function() {
        delta["height"] = delta["width"] = 0;
        return module
      };
      var addDelta = function(value, side) {
        if (_.isNumber(value) && _.isNumber(delta[side])) {
          delta[side] += value
        }
        return module
      };
      var substractDelta = function(value, side) {
        if (_.isNumber(value) && _.isNumber(delta[side])) {
          delta[side] -= value
        }
        return module
      };
      var destroy = function() {
        var data = getData();
        data.element.css({
          height: "",
          width: "",
          top: "",
          left: ""
        });
        removeCallbacks();
        resetDelta();
        mode = null
      };
      initialize.apply(module, arguments);
      return $.extend(true, module, {
        align: align,
        alignByWidthOnly: alignByWidthOnly,
        alignByHeightOnly: alignByHeightOnly,
        destroy: destroy,
        setParams: initialize,
        setMode: setMode,
        setElement: setElement,
        callbacks: {
          add: addCallback,
          once: addOnceCallback,
          remove: removeCallback,
          removeAll: removeCallbacks
        },
        delta: {
          add: addDelta,
          substract: substractDelta,
          reset: resetDelta
        }
      })
    };
    return Resizer
  })
})(RequireJS.requirejs, RequireJS.require, RequireJS.define);
window.WordCloud = function(el) {
  RequireJS.require(["WordCloudMain"],
  function(WordCloudMain) {
    new WordCloudMain(el)
  })
}; (function(define) {
  define("video/00_async_process.js", [],
  function() {
    "use strict";
    var AsyncProcess = {
      array: function(list, process) {
        if (!_.isArray(list)) {
          return $.Deferred().reject().promise()
        }
        if (!_.isFunction(process) || !list.length) {
          return $.Deferred().resolve(list).promise()
        }
        var MAX_DELAY = 50,
        dfd = $.Deferred(),
        result = [],
        index = 0,
        len = list.length;
        var getCurrentTime = function() {
          return (new Date).getTime()
        };
        var handler = function() {
          var start = getCurrentTime();
          do {
            result[index] = process(list[index], index);
            index++
          } while ( index < len && getCurrentTime () - start < MAX_DELAY);
          if (index < len) {
            setTimeout(handler, 25)
          } else {
            dfd.resolve(result)
          }
        };
        setTimeout(handler, 25);
        return dfd.promise()
      }
    };
    return AsyncProcess
  })
})(RequireJS.define); (function(requirejs, require, define) {
  define("WordCloudMain", [],
  function() {
    var WordCloudMain = function(el) {
      var _this = this;
      this.wordCloudEl = $(el).find(".word_cloud");
      this.ajax_url = this.wordCloudEl.data("ajax-url");
      this.width = 635;
      this.height = 635;
      this.wordCloudEl.hide();
      $.postWithPrefix(_this.ajax_url + "/" + "get_state", null,
      function(response) {
        if (response.status !== "success") {
          console.log("ERROR: " + response.error);
          return
        }
        _this.configJson = response
      }).done(function() {
        _this.wordCloudEl.show();
        if (_this.configJson && _this.configJson.submitted) {
          _this.showWordCloud(_this.configJson);
          return
        }
      });
      $(el).find("input.save").on("click",
      function() {
        _this.submitAnswer()
      })
    };
    WordCloudMain.prototype.submitAnswer = function() {
      var _this = this,
      data = {
        student_words: []
      };
      this.wordCloudEl.find("input.input-cloud").each(function(index, value) {
        data.student_words.push($(value).val())
      });
      $.postWithPrefix(_this.ajax_url + "/" + "submit", $.param(data),
      function(response) {
        if (response.status !== "success") {
          console.log("ERROR: " + response.error);
          return
        }
        _this.showWordCloud(response)
      })
    };
    WordCloudMain.prototype.showWordCloud = function(response) {
      var words, _this = this,
      maxSize, minSize, scaleFactor, maxFontSize, minFontSize;
      this.wordCloudEl.find(".input_cloud_section").hide();
      words = response.top_words;
      maxSize = 0;
      minSize = 1e4;
      scaleFactor = 1;
      maxFontSize = 200;
      minFontSize = 15;
      $.each(words,
      function(index, word) {
        if (word.size > maxSize) {
          maxSize = word.size
        }
        if (word.size < minSize) {
          minSize = word.size
        }
      });
      $.each(words,
      function(index, word) {
        var tempScaleFactor = 1,
        size = word.size / maxSize * maxFontSize;
        if (size * .7 * word.text.length > _this.width) {
          tempScaleFactor = _this.width / word.text.length / .7 / size
        }
        if (scaleFactor > tempScaleFactor) {
          scaleFactor = tempScaleFactor
        }
      });
      maxFontSize *= scaleFactor;
      d3.layout.cloud().size([this.width, this.height]).words(words).rotate(function() {
        return Math.floor(Math.random() * 2) * 90
      }).font("Impact").fontSize(function(d) {
        var size = d.size / maxSize * maxFontSize;
        size = size >= minFontSize ? size: minFontSize;
        return size
      }).on("end",
      function(words, bounds) {
        _this.drawWordCloud(response, words, bounds)
      }).start()
    };
    WordCloudMain.prototype.drawWordCloud = function(response, words, bounds) {
      var fill = d3.scale.category20(),
      studentWordsKeys = [],
      studentWordsStr,
      scale = 1,
      cloudSectionEl = this.wordCloudEl.find(".result_cloud_section"),
      groupEl;
      if (bounds) {
        scale = .5 * Math.min(this.width / Math.abs(bounds[1].x - this.width / 2), this.width / Math.abs(bounds[0].x - this.width / 2), this.height / Math.abs(bounds[1].y - this.height / 2), this.height / Math.abs(bounds[0].y - this.height / 2))
      }
      $.each(response.student_words,
      function(word, stat) {
        var percent = response.display_student_percents ? " " + Math.round(100 * (stat / response.total_count)) + "%": "";
        studentWordsKeys.push("<strong>" + word + "</strong>" + percent)
      });
      studentWordsStr = "" + studentWordsKeys.join(", ");
      cloudSectionEl.addClass("active").find(".your_words").html(studentWordsStr).end().find(".total_num_words").html(response.total_count);
      $(cloudSectionEl.attr("id") + " .word_cloud").empty();
      groupEl = d3.select("#" + cloudSectionEl.attr("id") + " .word_cloud").append("svg").attr("width", this.width).attr("height", this.height).append("g").attr("transform", "translate(" + .5 * this.width + "," + .5 * this.height + ")").selectAll("text").data(words).enter().append("g");
      groupEl.append("title").text(function(d) {
        var res = "";
        $.each(response.top_words,
        function(index, value) {
          if (value.text === d.text) {
            res = value.percent + "%";
            return
          }
        });
        return res
      });
      groupEl.append("text").style("font-size",
      function(d) {
        return d.size + "px"
      }).style("font-family", "Impact").style("fill",
      function(d, i) {
        return fill(i)
      }).attr("text-anchor", "middle").attr("transform",
      function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")scale(" + scale + ")"
      }).text(function(d) {
        return d.text
      })
    };
    return WordCloudMain
  })
})(RequireJS.requirejs, RequireJS.require, RequireJS.define); (function(define) {
  "use strict";
  define("video/00_i18n.js", [],
  function() {
    return {
      Play: gettext("Play"),
      Pause: gettext("Pause"),
      Mute: gettext("Mute"),
      Unmute: gettext("Unmute"),
      "Exit full browser": gettext("Exit full browser"),
      "Fill browser": gettext("Fill browser"),
      Speed: gettext("Speed"),
      Volume: gettext("Volume"),
      Muted: gettext("Muted"),
      "Very low": gettext("Very low"),
      Low: gettext("Low"),
      Average: gettext("Average"),
      Loud: gettext("Loud"),
      "Very loud": gettext("Very loud"),
      Maximum: gettext("Maximum")
    }
  })
})(RequireJS.define); (function(define) {
  define("video/00_sjson.js", [],
  function() {
    "use strict";
    var Sjson = function(data) {
      var sjson = {
        start: data.start.concat(),
        text: data.text.concat()
      },
      module = {};
      var getter = function(propertyName) {
        return function() {
          return sjson[propertyName]
        }
      };
      var getStartTimes = getter("start");
      var getCaptions = getter("text");
      var size = function() {
        return sjson.text.length
      };
      function search(time, startTime, endTime) {
        var start = getStartTimes(),
        max = size() - 1,
        min = 0,
        results,
        index;
        if (typeof startTime !== "undefined" && typeof endTime !== "undefined") {
          results = filter(startTime, endTime);
          start = results.start;
          max = results.captions.length - 1
        } else {
          start = getStartTimes()
        }
        while (min < max) {
          index = Math.ceil((max + min) / 2);
          if (time < start[index]) {
            max = index - 1
          }
          if (time >= start[index]) {
            min = index
          }
        }
        return min
      }
      function filter(start, end) {
        var filteredTimes = [];
        var filteredCaptions = [];
        var startTimes = getStartTimes();
        var captions = getCaptions();
        if (startTimes.length !== captions.length) {
          console.warn("video caption and start time arrays do not match in length")
        }
        if (end === null && startTimes.length) {
          end = startTimes[startTimes.length - 1]
        }
        _.filter(startTimes,
        function(currentStartTime, i) {
          if (currentStartTime >= start && currentStartTime <= end) {
            filteredTimes.push(currentStartTime);
            filteredCaptions.push(captions[i])
          }
        });
        return {
          start: filteredTimes,
          captions: filteredCaptions
        }
      }
      return {
        getCaptions: getCaptions,
        getStartTimes: getStartTimes,
        getSize: size,
        filter: filter,
        search: search
      }
    };
    return Sjson
  })
})(RequireJS.define); (function(define) {
  define("video/00_iterator.js", [],
  function() {
    "use strict";
    var Iterator = function(list) {
      this.list = list;
      this.index = 0;
      this.size = this.list.length;
      this.lastIndex = this.list.length - 1
    };
    Iterator.prototype = {
      _isValid: function(index) {
        return _.isNumber(index) && index < this.size && index >= 0
      },
      next: function(index) {
        if (!this._isValid(index)) {
          index = this.index
        }
        this.index = index >= this.lastIndex ? 0 : index + 1;
        return this.list[this.index]
      },
      prev: function(index) {
        if (!this._isValid(index)) {
          index = this.index
        }
        this.index = index < 1 ? this.lastIndex: index - 1;
        return this.list[this.index]
      },
      last: function() {
        return this.list[this.lastIndex]
      },
      first: function() {
        return this.list[0]
      },
      isEnd: function() {
        return this.index === this.lastIndex
      }
    };
    return Iterator
  })
})(RequireJS.define); (function(requirejs, require, define) {
  define("video/01_initialize.js", ["video/03_video_player.js", "video/00_i18n.js", "moment"],
  function(VideoPlayer, i18n, moment) {
    var moment = moment || window.moment;
    var Initialize = function(state, element) {
      _makeFunctionsPublic(state);
      state.initialize(element).done(function() {
        if (state.isYoutubeType()) {
          state.parseSpeed()
        }
        if (/iP(hone|od)/i.test(state.isTouch[0])) {
          _hideWaitPlaceholder(state);
          state.el.trigger("initialize", arguments);
          return false
        }
        _initializeModules(state, i18n).done(function() {
          if (/iPad|Android/i.test(state.isTouch[0])) {
            state.el.on("play", _.once(function() {
              state.trigger("videoControl.show", null)
            }))
          } else {
            state.trigger("videoControl.show", null)
          }
          _hideWaitPlaceholder(state);
          state.el.trigger("initialize", arguments)
        })
      })
    },
    methodsDict = {
      bindTo: bindTo,
      fetchMetadata: fetchMetadata,
      getCurrentLanguage: getCurrentLanguage,
      getDuration: getDuration,
      getPlayerMode: getPlayerMode,
      getVideoMetadata: getVideoMetadata,
      initialize: initialize,
      isHtml5Mode: isHtml5Mode,
      isFlashMode: isFlashMode,
      isYoutubeType: isYoutubeType,
      parseSpeed: parseSpeed,
      parseYoutubeStreams: parseYoutubeStreams,
      setPlayerMode: setPlayerMode,
      setSpeed: setSpeed,
      speedToString: speedToString,
      trigger: trigger,
      youtubeId: youtubeId,
      loadHtmlPlayer: loadHtmlPlayer,
      loadYoutubePlayer: loadYoutubePlayer,
      loadYouTubeIFrameAPI: loadYouTubeIFrameAPI
    },
    _youtubeApiDeferred = null,
    _oldOnYouTubeIframeAPIReady;
    Initialize.prototype = methodsDict;
    return Initialize;
    function _makeFunctionsPublic(state) {
      bindTo(methodsDict, state, state)
    }
    function _renderElements(state) {
      var video, onYTApiReady, setupOnYouTubeIframeAPIReady;
      if (state.videoType === "youtube") {
        state.youtubeApiAvailable = false;
        onYTApiReady = function() {
          console.log("[Video info]: YouTube API is available and is loaded.");
          if (state.htmlPlayerLoaded) {
            return
          }
          console.log("[Video info]: Starting YouTube player.");
          video = VideoPlayer(state);
          state.modules.push(video);
          state.__dfd__.resolve();
          state.youtubeApiAvailable = true
        };
        if (window.YT) {
          if (_youtubeApiDeferred) {
            _youtubeApiDeferred.resolve()
          }
          window.YT.ready(onYTApiReady)
        } else {
          setupOnYouTubeIframeAPIReady = function() {
            _oldOnYouTubeIframeAPIReady = window.onYouTubeIframeAPIReady || undefined;
            window.onYouTubeIframeAPIReady = function() {
              window.onYouTubeIframeAPIReady.resolve()
            };
            window.onYouTubeIframeAPIReady.resolve = _youtubeApiDeferred.resolve;
            window.onYouTubeIframeAPIReady.done = _youtubeApiDeferred.done;
            if (_oldOnYouTubeIframeAPIReady) {
              window.onYouTubeIframeAPIReady.done(_oldOnYouTubeIframeAPIReady)
            }
          };
          if (!_youtubeApiDeferred) {
            _youtubeApiDeferred = $.Deferred();
            setupOnYouTubeIframeAPIReady()
          } else if (!window.onYouTubeIframeAPIReady || !window.onYouTubeIframeAPIReady.done) {
            setupOnYouTubeIframeAPIReady()
          }
          window.onYouTubeIframeAPIReady.done(function() {
            window.YT.ready(onYTApiReady)
          })
        }
      } else {
        video = VideoPlayer(state);
        state.modules.push(video);
        state.__dfd__.resolve();
        state.htmlPlayerLoaded = true
      }
    }
    function _waitForYoutubeApi(state) {
      console.log("[Video info]: Starting to wait for YouTube API to load.");
      window.setTimeout(function() {
        if (!state.youtubeApiAvailable) {
          console.log("[Video info]: YouTube API is not available.");
          if (!state.htmlPlayerLoaded) {
            state.loadHtmlPlayer()
          }
        }
        state.el.trigger("youtube_availability", [state.youtubeApiAvailable])
      },
      state.config.ytTestTimeout)
    }
    function loadYouTubeIFrameAPI(scriptTag) {
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag)
    }
    function _configureCaptions(state) {
      if (state.config.showCaptions) {
        state.hide_captions = $.cookie("hide_captions") === "true"
      } else {
        state.hide_captions = true;
        $.cookie("hide_captions", state.hide_captions, {
          expires: 3650,
          path: "/"
        });
        state.el.addClass("closed")
      }
    }
    function _parseYouTubeIDs(state) {
      if (state.parseYoutubeStreams(state.config.streams)) {
        state.videoType = "youtube";
        return true
      }
      console.log("[Video info]: Youtube Video IDs are incorrect or absent.");
      return false
    }
    function _prepareHTML5Video(state) {
      state.speeds = ["0.75", "1.0", "1.25", "1.50"];
      if (!state.config.sources.length) {
        _hideWaitPlaceholder(state);
        state.el.find(".video-player div").addClass("hidden");
        state.el.find(".video-player .video-error").removeClass("is-hidden");
        return false
      }
      state.videoType = "html5";
      if (!_.keys(state.config.transcriptLanguages).length) {
        state.config.showCaptions = false
      }
      state.setSpeed(state.speed);
      return true
    }
    function _hideWaitPlaceholder(state) {
      state.el.addClass("is-initialized").find(".spinner").attr({
        "aria-hidden": "true",
        tabindex: -1
      })
    }
    function _setConfigurations(state) {
      _configureCaptions(state);
      state.setPlayerMode(state.config.mode);
      state.controlState = "visible";
      state.controlHideTimeout = null;
      state.captionState = "invisible";
      state.captionHideTimeout = null
    }
    function _initializeModules(state, i18n) {
      var dfd = $.Deferred(),
      modulesList = $.map(state.modules,
      function(module) {
        var options = state.options[module.moduleName] || {};
        if (_.isFunction(module)) {
          return module(state, i18n, options)
        } else if ($.isPlainObject(module)) {
          return module
        }
      });
      $.when.apply(null, modulesList).done(dfd.resolve);
      return dfd.promise()
    }
    function _getConfiguration(data, storage) {
      var isBoolean = function(value) {
        var regExp = /^true$/i;
        return regExp.test(value.toString())
      },
      extractKeys = [],
      compatKeys = {
        start: "startTime",
        end: "endTime"
      },
      conversions = {
        showCaptions: isBoolean,
        autoplay: isBoolean,
        autohideHtml5: isBoolean,
        savedVideoPosition: function(value) {
          return storage.getItem("savedVideoPosition", true) || Number(value) || 0
        },
        speed: function(value) {
          return storage.getItem("speed", true) || value
        },
        generalSpeed: function(value) {
          return storage.getItem("general_speed") || value || "1.0"
        },
        transcriptLanguage: function(value) {
          return storage.getItem("language") || value || "en"
        },
        ytTestTimeout: function(value) {
          value = parseInt(value, 10);
          if (!isFinite(value)) {
            value = 1500
          }
          return value
        },
        startTime: function(value) {
          value = parseInt(value, 10);
          if (!isFinite(value) || value < 0) {
            return 0
          }
          return value
        },
        endTime: function(value) {
          value = parseInt(value, 10);
          if (!isFinite(value) || value === 0) {
            return null
          }
          return value
        }
      },
      config = {};
      data = _.extend({
        startTime: 0,
        endTime: null,
        sub: "",
        streams: ""
      },
      data);
      $.each(data,
      function(option, value) {
        if ($.inArray(option, extractKeys) !== -1) {
          return
        }
        if (compatKeys[option]) {
          option = compatKeys[option]
        }
        if (conversions[option]) {
          if (_.isFunction(conversions[option])) {
            value = conversions[option].call(this, value)
          } else {
            throw new TypeError(option + " is not a function.")
          }
        }
        config[option] = value
      });
      return config
    }
    function bindTo(methodsDict, obj, context, rewrite) {
      $.each(methodsDict,
      function(name, method) {
        if (_.isFunction(method)) {
          if (_.isUndefined(rewrite)) {
            rewrite = true
          }
          if (_.isUndefined(obj[name]) || rewrite) {
            obj[name] = _.bind(method, context)
          }
        }
      })
    }
    function loadYoutubePlayer() {
      if (this.htmlPlayerLoaded) {
        return
      }
      console.log("[Video info]: Fetch metadata for YouTube video.");
      this.fetchMetadata();
      this.parseSpeed()
    }
    function loadHtmlPlayer() {
      if (!_prepareHTML5Video(this)) {
        console.log("[Video info]: Continue loading " + "YouTube video.");
        this.el.find(".video-player div").removeClass("hidden");
        this.el.find(".video-player .video-error").addClass("is-hidden");
        this.loadYoutubePlayer()
      } else {
        console.log("[Video info]: Start HTML5 player.");
        this.el.find(".quality_control").hide();
        _renderElements(this)
      }
    }
    function initialize(element) {
      var self = this,
      el = this.el,
      id = this.id,
      container = el.find(".video-wrapper"),
      __dfd__ = $.Deferred(),
      isTouch = onTouchBasedDevice() || "";
      if (isTouch) {
        el.addClass("is-touch")
      }
      $.extend(this, {
        __dfd__: __dfd__,
        container: container,
        isFullScreen: false,
        isTouch: isTouch
      });
      console.log('[Video info]: Initializing video with id "%s".', id);
      this.config = $.extend({},
      _getConfiguration(this.metadata, this.storage), {
        element: element,
        fadeOutTimeout: 1400,
        captionsFreezeTime: 1e4,
        mode: $.cookie("edX_video_player_mode"),
        availableHDQualities: []
      });
      if (this.config.endTime < this.config.startTime) {
        this.config.endTime = null
      }
      this.lang = this.config.transcriptLanguage;
      this.speed = this.speedToString(this.config.speed || this.config.generalSpeed);
      this.htmlPlayerLoaded = false;
      _setConfigurations(this);
      if (!_parseYouTubeIDs(this)) {
        if (!_prepareHTML5Video(this)) {
          __dfd__.reject();
          return __dfd__.promise()
        }
        console.log("[Video info]: Start player in HTML5 mode.");
        _renderElements(this)
      } else {
        _renderElements(this);
        _waitForYoutubeApi(this);
        var scriptTag = document.createElement("script");
        scriptTag.src = this.config.ytApiUrl;
        scriptTag.async = true;
        $(scriptTag).on("load",
        function() {
          self.loadYoutubePlayer()
        });
        $(scriptTag).on("error",
        function() {
          console.log("[Video info]: YouTube returned an error for " + 'video with id "' + self.id + '".');
          if (!self.htmlPlayerLoaded) {
            self.loadHtmlPlayer()
          }
        });
        window.Video.loadYouTubeIFrameAPI(scriptTag)
      }
      return __dfd__.promise();
    }
    function parseYoutubeStreams(youtubeStreams) {
      if (_.isUndefined(youtubeStreams) || !youtubeStreams.length) {
        return false
      }
      this.videos = {};
      _.each(youtubeStreams.split(/,/),
      function(video) {
        var speed;
        video = video.split(/:/);
        speed = this.speedToString(video[0]);
        this.videos[speed] = video[1]
      },
      this);
      return _.isString(this.videos["1.0"])
    }
    function fetchMetadata() {
      var self = this,
      metadataXHRs = [];
      this.metadata = {};
      metadataXHRs = _.map(this.videos,
      function(url, speed) {
        return self.getVideoMetadata(url,
        function(data) {
          if (data.items.length > 0) {
            var metaDataItem = data.items[0];
            self.metadata[metaDataItem.id] = metaDataItem.contentDetails
          }
        })
      });
      $.when.apply(this, metadataXHRs).done(function() {
        self.el.trigger("metadata_received");
        self.youtubeMetadataReceived = true
      })
    }
    function parseSpeed() {
      this.speeds = _.keys(this.videos).sort()
    }
    function setSpeed(newSpeed) {
      var map = {.25 : "0.75",
        "0.50": "0.75",
        .75 : "0.50",
        1.25 : "1.50",
        "2.0": "1.50"
      };
      if (_.contains(this.speeds, newSpeed)) {
        this.speed = newSpeed
      } else {
        newSpeed = map[newSpeed];
        this.speed = _.contains(this.speeds, newSpeed) ? newSpeed: "1.0"
      }
    }
    function getVideoMetadata(url, callback) {
      if (!_.isString(url)) {
        url = this.videos["1.0"] || ""
      }
      if (this.config.ytKey) {
        return $.ajax({
          url: [this.config.ytMetadataUrl, "?id=", url, "&part=contentDetails&key=", this.config.ytKey].join(""),
          timeout: this.config.ytTestTimeout,
          success: _.isFunction(callback) ? callback: null
        })
      } else {
        return $.Deferred().reject().promise()
      }
    }
    function youtubeId(speed) {
      var currentSpeed = this.isFlashMode() ? this.speed: "1.0";
      return this.videos[speed] || this.videos[currentSpeed] || this.videos["1.0"]
    }
    function getDuration() {
      try {
        return moment.duration(this.metadata[this.youtubeId()].duration, moment.ISO_8601).asSeconds()
      } catch(err) {
        try {
          return _.result(this.metadata[this.youtubeId("1.0")], "duration")
        } catch(err) {
          return 0
        }
      }
    }
    function setPlayerMode(mode) {
      var supportedModes = ["html5", "flash"];
      mode = _.contains(supportedModes, mode) ? mode: "html5";
      this.currentPlayerMode = mode
    }
    function getPlayerMode() {
      return this.currentPlayerMode
    }
    function isFlashMode() {
      return this.getPlayerMode() === "flash"
    }
    function isHtml5Mode() {
      return this.getPlayerMode() === "html5"
    }
    function isYoutubeType() {
      return this.videoType === "youtube"
    }
    function speedToString(speed) {
      return parseFloat(speed).toFixed(2).replace(/\.00$/, ".0")
    }
    function getCurrentLanguage() {
      var keys = _.keys(this.config.transcriptLanguages);
      if (keys.length) {
        if (!_.contains(keys, this.lang)) {
          if (_.contains(keys, "en")) {
            this.lang = "en"
          } else {
            this.lang = keys.pop()
          }
        }
      } else {
        return null
      }
      return this.lang
    }
    function trigger(objChain) {
      var extraParameters = Array.prototype.slice.call(arguments, 1),
      i,
      tmpObj,
      chain;
      tmpObj = this;
      chain = objChain.split(".");
      while (chain.length) {
        i = chain.shift();
        if (tmpObj.hasOwnProperty(i)) {
          tmpObj = tmpObj[i]
        } else {
          return false
        }
      }
      tmpObj.apply(this, extraParameters);
      return true
    }
  })
})(RequireJS.requirejs, RequireJS.require, RequireJS.define); (function(requirejs, require, define) {
  define("video/025_focus_grabber.js", [],
  function() {
    return function(state) {
      var dfd = $.Deferred();
      state.focusGrabber = {};
      _makeFunctionsPublic(state);
      _renderElements(state);
      _bindHandlers(state);
      dfd.resolve();
      return dfd.promise()
    };
    function _makeFunctionsPublic(state) {
      var methodsDict = {
        disableFocusGrabber: disableFocusGrabber,
        enableFocusGrabber: enableFocusGrabber,
        onFocus: onFocus
      };
      state.bindTo(methodsDict, state.focusGrabber, state)
    }
    function _renderElements(state) {
      state.focusGrabber.elFirst = state.el.find(".focus_grabber.first");
      state.focusGrabber.elLast = state.el.find(".focus_grabber.last");
      state.focusGrabber.disableFocusGrabber()
    }
    function _bindHandlers(state) {
      state.focusGrabber.elFirst.on("focus", state.focusGrabber.onFocus);
      state.focusGrabber.elLast.on("focus", state.focusGrabber.onFocus);
      state.el.on("blur",
      function() {
        state.el.trigger("mousemove")
      })
    }
    function enableFocusGrabber() {
      var tabIndex;
      if ($(document.activeElement).parents().hasClass("video")) {
        tabIndex = -1
      } else {
        tabIndex = 0
      }
      this.focusGrabber.elFirst.attr("tabindex", tabIndex);
      this.focusGrabber.elLast.attr("tabindex", tabIndex);
      if (tabIndex === -1) {
        this.el.focus();
        this.focusGrabber.elFirst.attr("tabindex", 0);
        this.focusGrabber.elLast.attr("tabindex", 0)
      }
    }
    function disableFocusGrabber() {
      this.focusGrabber.elFirst.attr("tabindex", -1);
      this.focusGrabber.elLast.attr("tabindex", -1)
    }
    function onFocus(event, params) {
      this.el.trigger("mousemove");
      this.focusGrabber.disableFocusGrabber()
    }
  })
})(RequireJS.requirejs, RequireJS.require, RequireJS.define); (function(requirejs, require, define) {
  define("video/02_html5_video.js", [],
  function() {
    var HTML5Video = {};
    HTML5Video.Player = function() {
      Player.prototype.callStateChangeCallback = function() {
        if ($.isFunction(this.config.events.onStateChange)) {
          this.config.events.onStateChange({
            data: this.playerState
          })
        }
      };
      Player.prototype.pauseVideo = function() {
        this.video.pause()
      };
      Player.prototype.seekTo = function(value) {
        if (typeof value === "number" && value <= this.video.duration && value >= 0) {
          this.video.currentTime = value
        }
      };
      Player.prototype.setVolume = function(value) {
        if (typeof value === "number" && value <= 100 && value >= 0) {
          this.video.volume = value * .01
        }
      };
      Player.prototype.getCurrentTime = function() {
        return this.video.currentTime
      };
      Player.prototype.playVideo = function() {
        this.video.play()
      };
      Player.prototype.getPlayerState = function() {
        return this.playerState
      };
      Player.prototype.getVolume = function() {
        return this.video.volume
      };
      Player.prototype.getDuration = function() {
        if (isNaN(this.video.duration)) {
          return 0
        }
        return this.video.duration
      };
      Player.prototype.setPlaybackRate = function(value) {
        var newSpeed;
        newSpeed = parseFloat(value);
        if (isFinite(newSpeed)) {
          if (this.video.playbackRate !== value) {
            this.video.playbackRate = value
          }
        }
      };
      Player.prototype.getAvailablePlaybackRates = function() {
        return [.75, 1, 1.25, 1.5]
      };
      Player.prototype._getLogs = function() {
        return this.logs
      };
      Player.prototype.showErrorMessage = function() {
        this.el.find(".video-player div").addClass("hidden").end().find(".video-player .video-error").removeClass("is-hidden").end().addClass("is-initialized").find(".spinner").attr({
          "aria-hidden": "true",
          tabindex: -1
        })
      };
      Player.prototype.onError = function(event) {
        if ($.isFunction(this.config.events.onError)) {
          this.config.events.onError()
        }
      };
      Player.prototype.destroy = function() {
        this.video.removeEventListener("loadedmetadata", this.onLoadedMetadata, false);
        this.video.removeEventListener("play", this.onPlay, false);
        this.video.removeEventListener("playing", this.onPlaying, false);
        this.video.removeEventListener("pause", this.onPause, false);
        this.video.removeEventListener("ended", this.onEnded, false);
        this.el.find(".video-player div").removeClass("is-hidden").end().find(".video-player .video-error").addClass("is-hidden").end().removeClass("is-initialized").find(".spinner").attr({
          "aria-hidden": "false"
        });
        this.videoEl.remove()
      };
      Player.prototype.onLoadedMetadata = function() {
        this.playerState = HTML5Video.PlayerState.PAUSED;
        if ($.isFunction(this.config.events.onReady)) {
          this.config.events.onReady(null)
        }
      };
      Player.prototype.onPlay = function() {
        this.playerState = HTML5Video.PlayerState.BUFFERING;
        this.callStateChangeCallback()
      };
      Player.prototype.onPlaying = function() {
        this.playerState = HTML5Video.PlayerState.PLAYING;
        this.callStateChangeCallback()
      };
      Player.prototype.onPause = function() {
        this.playerState = HTML5Video.PlayerState.PAUSED;
        this.callStateChangeCallback()
      };
      Player.prototype.onEnded = function() {
        this.playerState = HTML5Video.PlayerState.ENDED;
        this.callStateChangeCallback()
      };
      return Player;
      function Player(el, config) {
        var isTouch = onTouchBasedDevice() || "",
        sourceList,
        _this,
        errorMessage,
        lastSource;
        _.bindAll(this, "onLoadedMetadata", "onPlay", "onPlaying", "onPause", "onEnded");
        this.logs = [];
        this.el = $(el);
        if (this.el.length === 0) {
          this.el = $("#" + el);
          if (this.el.length === 0) {
            errorMessage = gettext("VideoPlayer: Element corresponding to the given selector was not found.");
            if (window.console && console.log) {
              console.log(errorMessage)
            } else {
              throw new Error(errorMessage)
            }
            return
          }
        }
        if ($.isPlainObject(config)) {
          this.config = config
        } else {
          return
        }
        if (!config.videoSources && !config.videoSources.length) {
          return
        }
        _this = this;
        sourceList = $.map(config.videoSources,
        function(source) {
          return ["<source ", 'src="', source, source.indexOf("?") === -1 ? "?": "&", (new Date).getTime(), '" />'].join("")
        });
        this.video = document.createElement("video");
        errorMessage = [gettext("This browser cannot play .mp4, .ogg, or .webm files."), gettext("Try using a different browser, such as Google Chrome.")].join("");
        this.video.innerHTML = sourceList.join("") + errorMessage;
        this.videoEl = $(this.video);
        lastSource = this.videoEl.find("source").last();
        lastSource.on("error", this.showErrorMessage.bind(this));
        lastSource.on("error", this.onError.bind(this));
        this.videoEl.on("error", this.onError.bind(this));
        if (/iP(hone|od)/i.test(isTouch[0])) {
          this.videoEl.prop("controls", true)
        }
        this.playerState = HTML5Video.PlayerState.UNSTARTED;
        this.videoEl.on("click",
        function(event) {
          var PlayerState = HTML5Video.PlayerState;
          if (_this.playerState === PlayerState.PLAYING) {
            _this.playerState = PlayerState.PAUSED;
            _this.pauseVideo()
          } else {
            _this.playerState = PlayerState.PLAYING;
            _this.playVideo()
          }
        });
        var events = ["loadstart", "progress", "suspend", "abort", "error", "emptied", "stalled", "play", "pause", "loadedmetadata", "loadeddata", "waiting", "playing", "canplay", "canplaythrough", "seeking", "seeked", "timeupdate", "ended", "ratechange", "durationchange", "volumechange"];
        this.debug = false;
        $.each(events,
        function(index, eventName) {
          _this.video.addEventListener(eventName,
          function() {
            _this.logs.push({
              "event name": eventName,
              state: _this.playerState
            });
            if (_this.debug) {
              console.log("event name:", eventName, "state:", _this.playerState, "readyState:", _this.video.readyState, "networkState:", _this.video.networkState)
            }
            el.trigger("html5:" + eventName, arguments)
          })
        });
        this.video.addEventListener("loadedmetadata", this.onLoadedMetadata, false);
        this.video.addEventListener("play", this.onPlay, false);
        this.video.addEventListener("playing", this.onPlaying, false);
        this.video.addEventListener("pause", this.onPause, false);
        this.video.addEventListener("ended", this.onEnded, false);
        this.videoEl.appendTo(this.el.find(".video-player div"))
      }
    } ();
    HTML5Video.PlayerState = {
      UNSTARTED: -1,
      ENDED: 0,
      PLAYING: 1,
      PAUSED: 2,
      BUFFERING: 3,
      CUED: 5
    };
    return HTML5Video
  })
})(RequireJS.requirejs, RequireJS.require, RequireJS.define); (function(requirejs, require, define) {
  define("video/03_video_player.js", ["video/02_html5_video.js", "video/00_resizer.js"],
  function(HTML5Video, Resizer) {
    var dfd = $.Deferred(),
    VideoPlayer = function(state) {
      state.videoPlayer = {};
      _makeFunctionsPublic(state);
      _initialize(state);
      return dfd.promise()
    },
    methodsDict = {
      destroy: destroy,
      duration: duration,
      handlePlaybackQualityChange: handlePlaybackQualityChange,
      isBuffering: isBuffering,
      isCued: isCued,
      isEnded: isEnded,
      isPlaying: isPlaying,
      isUnstarted: isUnstarted,
      onCaptionSeek: onSeek,
      onEnded: onEnded,
      onError: onError,
      onPause: onPause,
      onPlay: onPlay,
      runTimer: runTimer,
      stopTimer: stopTimer,
      onLoadMetadataHtml5: onLoadMetadataHtml5,
      onPlaybackQualityChange: onPlaybackQualityChange,
      onReady: onReady,
      onSlideSeek: onSeek,
      onSpeedChange: onSpeedChange,
      onStateChange: onStateChange,
      onUnstarted: onUnstarted,
      onVolumeChange: onVolumeChange,
      pause: pause,
      play: play,
      seekTo: seekTo,
      setPlaybackRate: setPlaybackRate,
      update: update,
      figureOutStartEndTime: figureOutStartEndTime,
      figureOutStartingTime: figureOutStartingTime,
      updatePlayTime: updatePlayTime
    };
    VideoPlayer.prototype = methodsDict;
    return VideoPlayer;
    function _makeFunctionsPublic(state) {
      var debouncedF = _.debounce(function(params) {
        return onSeek.call(this, params)
      }.bind(state), 300);
      state.bindTo(methodsDict, state.videoPlayer, state);
      state.videoPlayer.onSlideSeek = debouncedF;
      state.videoPlayer.onCaptionSeek = debouncedF
    }
    function onLoadMetadataHtml5() {
      var player = this.videoPlayer.player.videoEl,
      videoWidth = player[0].videoWidth || player.width(),
      videoHeight = player[0].videoHeight || player.height();
      _resize(this, videoWidth, videoHeight);
      _updateVcrAndRegion(this)
    }
    function _initialize(state) {
      var youTubeId, player, userAgent;
      state.videoPlayer.ready = _.once(function() {
        if (!state.isFlashMode() && state.speed != "1.0") {
          state.videoPlayer.setPlaybackRate(state.speed)
        }
      });
      if (state.isYoutubeType()) {
        state.videoPlayer.PlayerState = YT.PlayerState;
        state.videoPlayer.PlayerState.UNSTARTED = -1
      } else {
        state.videoPlayer.PlayerState = HTML5Video.PlayerState
      }
      state.videoPlayer.currentTime = 0;
      state.videoPlayer.goToStartTime = true;
      state.videoPlayer.stopAtEndTime = true;
      state.videoPlayer.playerVars = {
        controls: 0,
        wmode: "transparent",
        rel: 0,
        showinfo: 0,
        enablejsapi: 1,
        modestbranding: 1,
        cc_load_policy: 0
      };
      if (!state.isFlashMode()) {
        state.videoPlayer.playerVars.html5 = 1
      }
      userAgent = navigator.userAgent.toLowerCase();
      state.browserIsFirefox = userAgent.indexOf("firefox") > -1;
      state.browserIsChrome = userAgent.indexOf("chrome") > -1;
      state.browserIsSafari = userAgent.indexOf("safari") > -1 && !state.browserIsChrome;
      if (state.videoType === "html5") {
        state.videoPlayer.player = new HTML5Video.Player(state.el, {
          playerVars: state.videoPlayer.playerVars,
          videoSources: state.config.sources,
          events: {
            onReady: state.videoPlayer.onReady,
            onStateChange: state.videoPlayer.onStateChange,
            onError: state.videoPlayer.onError
          }
        });
        player = state.videoEl = state.videoPlayer.player.videoEl;
        player[0].addEventListener("loadedmetadata", state.videoPlayer.onLoadMetadataHtml5, false)
      } else {
        youTubeId = state.youtubeId();
        state.videoPlayer.player = new YT.Player(state.id, {
          playerVars: state.videoPlayer.playerVars,
          videoId: youTubeId,
          events: {
            onReady: state.videoPlayer.onReady,
            onStateChange: state.videoPlayer.onStateChange,
            onPlaybackQualityChange: state.videoPlayer.onPlaybackQualityChange,
            onError: state.videoPlayer.onError
          }
        });
        state.el.on("initialize",
        function() {
          var player = state.videoEl = state.el.find("iframe"),
          videoWidth = player.attr("width") || player.width(),
          videoHeight = player.attr("height") || player.height();
          _resize(state, videoWidth, videoHeight);
          _updateVcrAndRegion(state, true)
        })
      }
      if (state.isTouch) {
        dfd.resolve()
      }
    }
    function _updateVcrAndRegion(state, isYoutube) {
      var update = function(state) {
        var duration = state.videoPlayer.duration(),
        time;
        time = state.videoPlayer.figureOutStartingTime(duration);
        state.trigger("videoControl.updateVcrVidTime", {
          time: time,
          duration: duration
        });
        state.trigger("videoProgressSlider.updateStartEndTimeRegion", {
          duration: duration
        });
        state.trigger("videoProgressSlider.updatePlayTime", {
          time: time,
          duration: duration
        })
      };
      if (state.youtubeMetadataReceived || !isYoutube) {
        update(state)
      } else {
        state.el.on("metadata_received",
        function() {
          update(state)
        })
      }
    }
    function _resize(state, videoWidth, videoHeight) {
      state.resizer = new Resizer({
        element: state.videoEl,
        elementRatio: videoWidth / videoHeight,
        container: state.container
      }).callbacks.once(function() {
        state.el.trigger("caption:resize")
      }).setMode("width");
      if (/iPad|Android/i.test(state.isTouch[0])) {
        state.el.on("controls:show",
        function() {
          state.el.trigger("caption:resize")
        })
      }
      $(window).on("resize.video", _.debounce(function() {
        state.trigger("videoFullScreen.updateControlsHeight", null);
        state.el.trigger("caption:resize");
        state.resizer.align()
      },
      100))
    }
    function _restartUsingFlash(state) {
      state.videoPlayer.player.destroy();
      state.setPlayerMode("flash");
      console.log('[Video info]: Changing YouTube player mode to "flash".');
      delete state.videoPlayer.playerVars.html5;
      state.videoPlayer.player = new YT.Player(state.id, {
        playerVars: state.videoPlayer.playerVars,
        videoId: state.youtubeId(),
        events: {
          onReady: state.videoPlayer.onReady,
          onStateChange: state.videoPlayer.onStateChange,
          onPlaybackQualityChange: state.videoPlayer.onPlaybackQualityChange,
          onError: state.videoPlayer.onError
        }
      });
      _updateVcrAndRegion(state, true);
      state.el.trigger("caption:fetch");
      state.resizer.setElement(state.el.find("iframe")).align()
    }
    function destroy() {
      var player = this.videoPlayer.player;
      this.el.removeClass(["is-unstarted", "is-playing", "is-paused", "is-buffered", "is-ended", "is-cued"].join(" "));
      $(window).off(".video");
      this.el.trigger("destroy");
      this.el.off();
      this.videoPlayer.stopTimer();
      if (this.resizer && this.resizer.destroy) {
        this.resizer.destroy()
      }
      if (player && player.video) {
        player.video.removeEventListener("loadedmetadata", this.videoPlayer.onLoadMetadataHtml5, false)
      }
      if (player && _.isFunction(player.destroy)) {
        player.destroy()
      }
      delete this.videoPlayer
    }
    function pause() {
      if (this.videoPlayer.player.pauseVideo) {
        this.videoPlayer.player.pauseVideo()
      }
    }
    function play() {
      if (this.videoPlayer.player.playVideo) {
        if (this.videoPlayer.isEnded()) {
          this.videoPlayer.goToStartTime = true
        }
        this.videoPlayer.player.playVideo()
      }
    }
    function update(time) {
      this.videoPlayer.currentTime = time || this.videoPlayer.player.getCurrentTime();
      if (isFinite(this.videoPlayer.currentTime)) {
        this.videoPlayer.updatePlayTime(this.videoPlayer.currentTime, this.videoPlayer.endTime);
        if (this.videoPlayer.endTime !== null && this.videoPlayer.endTime <= this.videoPlayer.currentTime) {
          this.videoPlayer.pause();
          this.trigger("videoProgressSlider.notifyThroughHandleEnd", {
            end: true
          });
          this.el.trigger("stop")
        }
        this.el.trigger("timeupdate", [this.videoPlayer.currentTime])
      }
    }
    function setPlaybackRate(newSpeed) {
      this.videoPlayer.player.setPlaybackRate(newSpeed)
    }
    function onSpeedChange(newSpeed) {
      var time = this.videoPlayer.currentTime;
      if (this.isFlashMode()) {
        this.videoPlayer.currentTime = Time.convert(time, parseFloat(this.speed), newSpeed)
      }
      newSpeed = parseFloat(newSpeed).toFixed(2).replace(/\.00$/, ".0");
      this.setSpeed(newSpeed);
      this.videoPlayer.setPlaybackRate(newSpeed)
    }
    function onSeek(params) {
      var time = params.time,
      type = params.type,
      oldTime = this.videoPlayer.currentTime;
      this.videoPlayer.goToStartTime = false;
      this.videoPlayer.seekTo(time);
      this.el.trigger("seek", [time, oldTime, type])
    }
    function seekTo(time) {
      var duration = this.videoPlayer.duration();
      if (typeof time !== "number" || time > duration || time < 0) {
        return false
      }
      this.el.off("play.seek");
      if (this.videoPlayer.isPlaying()) {
        this.videoPlayer.stopTimer()
      }
      var isUnplayed = this.videoPlayer.isUnstarted() || this.videoPlayer.isCued();
      if (isUnplayed && this.isYoutubeType()) {
        this.videoPlayer.player.cueVideoById(this.youtubeId(), time)
      } else {
        if (this.isYoutubeType() && this.videoPlayer.isBuffering()) {
          this.el.on("play.seek",
          function() {
            this.videoPlayer.player.seekTo(time, true)
          }.bind(this))
        } else {
          this.videoPlayer.player.seekTo(time, true)
        }
      }
      this.videoPlayer.updatePlayTime(time, duration);
      if (this.videoPlayer.isPlaying()) {
        this.videoPlayer.runTimer()
      }
      this.videoPlayer.currentTime = time
    }
    function runTimer() {
      if (!this.videoPlayer.updateInterval) {
        this.videoPlayer.updateInterval = window.setInterval(this.videoPlayer.update, 200);
        this.videoPlayer.update()
      }
    }
    function stopTimer() {
      window.clearInterval(this.videoPlayer.updateInterval);
      delete this.videoPlayer.updateInterval
    }
    function onEnded() {
      var time = this.videoPlayer.duration();
      this.trigger("videoProgressSlider.notifyThroughHandleEnd", {
        end: true
      });
      if (this.videoPlayer.skipOnEndedStartEndReset) {
        this.videoPlayer.skipOnEndedStartEndReset = undefined
      }
      this.videoPlayer.updatePlayTime(time, time);
      if (this.isYoutubeType()) {
        this.el.trigger("pause", arguments)
      }
      this.el.trigger("ended", arguments)
    }
    function onPause() {
      this.videoPlayer.stopTimer();
      this.el.trigger("pause", arguments)
    }
    function onPlay() {
      this.videoPlayer.runTimer();
      this.trigger("videoProgressSlider.notifyThroughHandleEnd", {
        end: false
      });
      this.videoPlayer.ready();
      this.el.trigger("play", arguments)
    }
    function onUnstarted() {}
    function handlePlaybackQualityChange(value) {
      this.videoPlayer.player.setPlaybackQuality(value)
    }
    function onPlaybackQualityChange() {
      var quality;
      quality = this.videoPlayer.player.getPlaybackQuality();
      this.trigger("videoQualityControl.onQualityChange", quality);
      this.el.trigger("qualitychange", arguments)
    }
    function onReady() {
      var _this = this,
      availablePlaybackRates, baseSpeedSubs, player, videoWidth, videoHeight;
      dfd.resolve();
      this.el.on("speedchange",
      function(event, speed) {
        _this.videoPlayer.onSpeedChange(speed)
      });
      this.el.on("volumechange volumechange:silent",
      function(event, volume) {
        _this.videoPlayer.onVolumeChange(volume)
      });
      availablePlaybackRates = this.videoPlayer.player.getAvailablePlaybackRates();
      availablePlaybackRates = _.filter(availablePlaybackRates,
      function(item) {
        var speed = Number(item);
        return speed > .25 && speed <= 5
      });
      if ((this.isHtml5Mode() || availablePlaybackRates.length > 1) && this.isYoutubeType()) {
        if (availablePlaybackRates.length === 1 && !this.isTouch) {
          _restartUsingFlash(this);
          return false
        } else if (availablePlaybackRates.length > 1) {
          this.setPlayerMode("html5");
          baseSpeedSubs = this.videos["1.0"];
          $.each(this.videos,
          function(index, value) {
            delete _this.videos[index]
          });
          this.speeds = [];
          $.each(availablePlaybackRates,
          function(index, value) {
            var key = value.toFixed(2).replace(/\.00$/, ".0");
            _this.videos[key] = baseSpeedSubs;
            _this.speeds.push(key)
          });
          this.setSpeed(this.speed);
          this.el.trigger("speed:render", [this.speeds, this.speed])
        }
      }
      if (this.isFlashMode()) {
        this.setSpeed(this.speed);
        this.el.trigger("speed:set", [this.speed])
      }
      if (this.isHtml5Mode()) {
        this.videoPlayer.player.setPlaybackRate(this.speed)
      }
      var duration = this.videoPlayer.duration(),
      time = this.videoPlayer.figureOutStartingTime(duration);
      if (time > 0 && this.videoPlayer.goToStartTime) {
        this.videoPlayer.seekTo(time)
      }
      this.el.trigger("ready", arguments);
      if (this.config.autoplay) {
        this.videoPlayer.play()
      }
    }
    function onStateChange(event) {
      this.el.removeClass(["is-unstarted", "is-playing", "is-paused", "is-buffered", "is-ended", "is-cued"].join(" "));
      switch (event.data) {
      case this.videoPlayer.PlayerState.UNSTARTED:
        this.el.addClass("is-unstarted");
        this.videoPlayer.onUnstarted();
        break;
      case this.videoPlayer.PlayerState.PLAYING:
        this.el.addClass("is-playing");
        this.videoPlayer.onPlay();
        break;
      case this.videoPlayer.PlayerState.PAUSED:
        this.el.addClass("is-paused");
        this.videoPlayer.onPause();
        break;
      case this.videoPlayer.PlayerState.BUFFERING:
        this.el.addClass("is-buffered");
        this.el.trigger("buffering");
        break;
      case this.videoPlayer.PlayerState.ENDED:
        this.el.addClass("is-ended");
        this.videoPlayer.onEnded();
        break;
      case this.videoPlayer.PlayerState.CUED:
        this.el.addClass("is-cued");
        if (this.isFlashMode()) {
          this.videoPlayer.play()
        }
        break
      }
    }
    function onError(code) {
      this.el.trigger("error", [code])
    }
    function figureOutStartEndTime(duration) {
      var videoPlayer = this.videoPlayer;
      videoPlayer.startTime = this.config.startTime;
      if (videoPlayer.startTime >= duration) {
        videoPlayer.startTime = 0
      } else if (this.isFlashMode()) {
        videoPlayer.startTime /= Number(this.speed)
      }
      videoPlayer.endTime = this.config.endTime || duration;
      if (videoPlayer.endTime <= videoPlayer.startTime || videoPlayer.endTime > duration) {
        videoPlayer.endTime = null
      } else if (this.isFlashMode()) {
        videoPlayer.endTime /= Number(this.speed)
      }
    }
    function figureOutStartingTime(duration) {
      var savedVideoPosition = this.config.savedVideoPosition,
      time = 0,
      startTime, endTime;
      this.videoPlayer.figureOutStartEndTime(duration);
      startTime = this.videoPlayer.startTime;
      endTime = this.videoPlayer.endTime;
      if (startTime > 0) {
        if (startTime < savedVideoPosition && (endTime > savedVideoPosition || endTime === null) && savedVideoPosition < duration - 1) {
          time = savedVideoPosition
        } else {
          time = startTime
        }
      } else if (savedVideoPosition > 0 && (endTime > savedVideoPosition || endTime === null) && savedVideoPosition < duration - 1) {
        time = savedVideoPosition
      }
      return time
    }
    function updatePlayTime(time, endTime) {
      var videoPlayer = this.videoPlayer,
      youTubeId;
      if (this.config.endTime) {
        endTime = Math.min(this.config.endTime, endTime)
      }
      this.trigger("videoProgressSlider.updatePlayTime", {
        time: time,
        duration: endTime
      });
      this.trigger("videoControl.updateVcrVidTime", {
        time: time,
        duration: endTime
      });
      this.el.trigger("caption:update", [time])
    }
    function isEnded() {
      var playerState = this.videoPlayer.player.getPlayerState(),
      ENDED = this.videoPlayer.PlayerState.ENDED;
      return playerState === ENDED
    }
    function isPlaying() {
      var playerState = this.videoPlayer.player.getPlayerState();
      return playerState === this.videoPlayer.PlayerState.PLAYING
    }
    function isBuffering() {
      var playerState = this.videoPlayer.player.getPlayerState();
      return playerState === this.videoPlayer.PlayerState.BUFFERING
    }
    function isCued() {
      var playerState = this.videoPlayer.player.getPlayerState();
      return playerState === this.videoPlayer.PlayerState.CUED
    }
    function isUnstarted() {
      var playerState = this.videoPlayer.player.getPlayerState();
      return playerState === this.videoPlayer.PlayerState.UNSTARTED
    }
    function duration() {
      var dur;
      if (this.videoPlayer.player.getDuration) {
        dur = this.videoPlayer.player.getDuration()
      }
      if (!isFinite(dur) || dur <= 0) {
        if (this.isYoutubeType()) {
          dur = this.getDuration()
        }
      }
      if (!isFinite(dur) || dur <= 0) {
        dur = 0
      }
      return Math.floor(dur)
    }
    function onVolumeChange(volume) {
      this.videoPlayer.player.setVolume(volume)
    }
  })
})(RequireJS.requirejs, RequireJS.require, RequireJS.define); (function(define) {
  "use strict";
  define("video/035_video_accessible_menu.js", [],
  function() {
    var VideoAccessibleMenu = function(element, options) {
      if (! (this instanceof VideoAccessibleMenu)) {
        return new VideoAccessibleMenu(element, options)
      }
      _.bindAll(this, "openMenu", "openMenuHandler", "closeMenu", "closeMenuHandler", "toggleMenuHandler", "clickHandler", "keyDownHandler", "render", "menuItemsLinksFocused", "changeFileType", "setValue");
      this.container = element;
      this.options = options || {};
      if (this.container.find(".video-tracks")) {
        this.initialize()
      }
    };
    VideoAccessibleMenu.prototype = {
      initialize: function() {
        this.value = this.options.storage.getItem("transcript_download_format");
        this.el = this.container.find(".video-tracks .a11y-menu-container");
        this.render();
        this.bindHandlers()
      },
      render: function() {
        var value, msg;
        this.button = this.el.children(".a11y-menu-button");
        this.menuList = this.el.children(".a11y-menu-list");
        this.menuItems = this.menuList.children(".a11y-menu-item");
        this.menuItemsLinks = this.menuItems.children(".a11y-menu-item-link");
        value = function(val, activeElement) {
          return val || activeElement.find("a").data("value") || "srt"
        } (this.value, this.menuItems.filter(".active"));
        msg = "." + value;
        if (value) {
          this.setValue(value);
          this.button.text(gettext(msg))
        }
      },
      bindHandlers: function() {
        this.el.on({
          mouseenter: this.openMenuHandler,
          mouseleave: this.closeMenuHandler,
          click: this.toggleMenuHandler,
          keydown: this.keyDownHandler
        });
        this.menuItems.on("click", "a.a11y-menu-item-link", this.clickHandler).on("keydown", "a.a11y-menu-item-link", this.keyDownHandler)
      },
      previousMenuItemLink: function(links, index) {
        return index < 1 ? links.last() : links.eq(index - 1)
      },
      nextMenuItemLink: function(links, index) {
        return index >= links.length - 1 ? links.first() : links.eq(index + 1)
      },
      menuItemsLinksFocused: function() {
        return this.menuItemsLinks.is(":focus")
      },
      openMenu: function(withoutHandler) {
        this.el.addClass("open");
        this.button.text("...");
        if (!withoutHandler) {
          $(window).on("click.currentMenu", this.closeMenuHandler)
        }
      },
      closeMenu: function(withoutHandler) {
        var msg = "." + this.value;
        this.el.removeClass("open");
        this.button.text(gettext(msg));
        if (!withoutHandler) {
          $(window).off("click.currentMenu")
        }
      },
      openMenuHandler: function() {
        this.openMenu(true);
        return false
      },
      closeMenuHandler: function(event) {
        if (!this.menuItemsLinksFocused() || event.type === "click") {
          this.closeMenu(true)
        }
        return false
      },
      toggleMenuHandler: function() {
        if (this.el.hasClass("open")) {
          this.closeMenu(true)
        } else {
          this.openMenu(true)
        }
        return false
      },
      clickHandler: function(event) {
        this.changeFileType.call(this, event);
        this.closeMenu(true);
        return false
      },
      keyDownHandler: function(event) {
        var KEY = $.ui.keyCode,
        keyCode = event.keyCode,
        target = $(event.currentTarget),
        index;
        if (target.is("a.a11y-menu-item-link")) {
          index = target.parent().index();
          switch (keyCode) {
          case KEY.UP:
            this.previousMenuItemLink(this.menuItemsLinks, index).focus();
            break;
          case KEY.DOWN:
            this.nextMenuItemLink(this.menuItemsLinks, index).focus();
            break;
          case KEY.TAB:
            this.closeMenu();
            break;
          case KEY.ENTER:
          case KEY.SPACE:
            this.button.focus();
            this.changeFileType.call(this, event);
            this.closeMenu();
            break;
          case KEY.ESCAPE:
            this.closeMenu();
            this.button.focus();
            break
          }
          return false
        } else {
          switch (keyCode) {
          case KEY.ENTER:
          case KEY.SPACE:
          case KEY.UP:
            this.openMenu();
            this.menuItemsLinks.last().focus();
            break;
          case KEY.ESCAPE:
            this.closeMenu();
            break
          }
          return event.keyCode === KEY.TAB
        }
      },
      setValue: function(value) {
        this.value = value;
        this.menuItems.removeClass("active").find("a[data-value='" + value + "']").parent().addClass("active")
      },
      changeFileType: function(event) {
        var fileType = $(event.currentTarget).data("value"),
        data = {
          transcript_download_format: fileType
        };
        this.setValue(fileType);
        this.options.storage.setItem("transcript_download_format", fileType);
        $.ajax({
          url: this.options.saveStateUrl,
          type: "POST",
          dataType: "json",
          data: data
        })
      }
    };
    return VideoAccessibleMenu
  })
})(RequireJS.define); (function(requirejs, require, define) {
  define("video/04_video_control.js", [],
  function() {
    return function(state) {
      var dfd = $.Deferred();
      state.videoControl = {};
      _makeFunctionsPublic(state);
      _renderElements(state);
      _bindHandlers(state);
      dfd.resolve();
      return dfd.promise()
    };
    function _makeFunctionsPublic(state) {
      var methodsDict = {
        destroy: destroy,
        hideControls: hideControls,
        show: show,
        showControls: showControls,
        focusFirst: focusFirst,
        updateVcrVidTime: updateVcrVidTime
      };
      state.bindTo(methodsDict, state.videoControl, state)
    }
    function destroy() {
      this.el.off({
        mousemove: this.videoControl.showControls,
        keydown: this.videoControl.showControls,
        destroy: this.videoControl.destroy,
        initialize: this.videoControl.focusFirst
      });
      this.el.off("controls:show");
      delete this.videoControl
    }
    function _renderElements(state) {
      state.videoControl.el = state.el.find(".video-controls");
      state.videoControl.vidTimeEl = state.videoControl.el.find(".vidtime");
      if (state.videoType === "html5" && state.config.autohideHtml5) {
        state.videoControl.fadeOutTimeout = state.config.fadeOutTimeout;
        state.videoControl.el.addClass("html5");
        state.controlHideTimeout = setTimeout(state.videoControl.hideControls, state.videoControl.fadeOutTimeout)
      }
    }
    function _bindHandlers(state) {
      if (state.videoType === "html5" && state.config.autohideHtml5) {
        state.el.on({
          mousemove: state.videoControl.showControls,
          keydown: state.videoControl.showControls
        })
      }
      if (state.config.focusFirstControl) {
        state.el.on("initialize", state.videoControl.focusFirst)
      }
      state.el.on("destroy", state.videoControl.destroy)
    }
    function focusFirst() {
      this.videoControl.el.find(".vcr a, .vcr button").first().focus()
    }
    function show() {
      this.videoControl.el.removeClass("is-hidden");
      this.el.trigger("controls:show", arguments)
    }
    function showControls(event) {
      if (!this.controlShowLock) {
        if (!this.captionsHidden) {
          return
        }
        this.controlShowLock = true;
        if (this.controlState === "invisible") {
          this.videoControl.el.show();
          this.controlState = "visible"
        } else if (this.controlState === "hiding") {
          this.videoControl.el.stop(true, false).css("opacity", 1).show();
          this.controlState = "visible"
        } else if (this.controlState === "visible") {
          clearTimeout(this.controlHideTimeout)
        }
        this.controlHideTimeout = setTimeout(this.videoControl.hideControls, this.videoControl.fadeOutTimeout);
        this.controlShowLock = false
      }
    }
    function hideControls() {
      var _this = this;
      this.controlHideTimeout = null;
      if (!this.captionsHidden) {
        return
      }
      this.controlState = "hiding";
      this.videoControl.el.fadeOut(this.videoControl.fadeOutTimeout,
      function() {
        _this.controlState = "invisible";
        _this.videoVolumeControl.el.removeClass("open");
        _this.videoSpeedControl.el.removeClass("open");
        _this.focusGrabber.enableFocusGrabber()
      })
    }
    function updateVcrVidTime(params) {
      var endTime = this.config.endTime !== null ? this.config.endTime: params.duration;
      endTime = Math.min(endTime, params.duration);
      this.videoControl.vidTimeEl.html(Time.format(params.time) + " / " + Time.format(endTime))
    }
  })
})(RequireJS.requirejs, RequireJS.require, RequireJS.define); (function(define) {
  "use strict";
  define("video/04_video_full_screen.js", [],
  function() {
    var template = ['<button class="control add-fullscreen" aria-disabled="false">', '<span class="icon-fallback-img">', '<span class="icon fa fa-arrows-alt" aria-hidden="true"></span>', '<span class="sr control-text">', gettext("Fill browser"), "</span>", "</span>", "</button>"].join("");
    return function(state) {
      var dfd = $.Deferred();
      state.videoFullScreen = {};
      _makeFunctionsPublic(state);
      _renderElements(state);
      _bindHandlers(state);
      dfd.resolve();
      return dfd.promise()
    };
    function _makeFunctionsPublic(state) {
      var methodsDict = {
        destroy: destroy,
        enter: enter,
        exitHandler: exitHandler,
        exit: exit,
        onFullscreenChange: onFullscreenChange,
        toggle: toggle,
        toggleHandler: toggleHandler,
        updateControlsHeight: updateControlsHeight
      };
      state.bindTo(methodsDict, state.videoFullScreen, state)
    }
    function destroy() {
      $(document).off("keyup", this.videoFullScreen.exitHandler);
      this.videoFullScreen.fullScreenEl.remove();
      this.el.off({
        fullscreen: this.videoFullScreen.onFullscreenChange,
        destroy: this.videoFullScreen.destroy
      });
      if (this.isFullScreen) {
        this.videoFullScreen.exit()
      }
      delete this.videoFullScreen
    }
    function _renderElements(state) {
      state.videoFullScreen.fullScreenEl = $(template);
      state.videoFullScreen.sliderEl = state.el.find(".slider");
      state.videoFullScreen.fullScreenState = false;
      state.el.find(".secondary-controls").append(state.videoFullScreen.fullScreenEl);
      state.videoFullScreen.updateControlsHeight()
    }
    function _bindHandlers(state) {
      state.videoFullScreen.fullScreenEl.on("click", state.videoFullScreen.toggleHandler);
      state.el.on({
        fullscreen: state.videoFullScreen.onFullscreenChange,
        destroy: state.videoFullScreen.destroy
      });
      $(document).on("keyup", state.videoFullScreen.exitHandler)
    }
    function _getControlsHeight(controls, slider) {
      return controls.height() + .5 * slider.height()
    }
    function onFullscreenChange(event, isFullScreen) {
      var height = this.videoFullScreen.updateControlsHeight();
      if (isFullScreen) {
        this.resizer.delta.substract(height, "height").setMode("both")
      } else {
        this.resizer.delta.reset().setMode("width")
      }
    }
    function updateControlsHeight() {
      var controls = this.el.find(".video-controls"),
      slider = this.videoFullScreen.sliderEl;
      this.videoFullScreen.height = _getControlsHeight(controls, slider);
      return this.videoFullScreen.height
    }
    function toggleHandler(event) {
      event.preventDefault();
      this.videoCommands.execute("toggleFullScreen")
    }
    function exit() {
      var fullScreenClassNameEl = this.el.add(document.documentElement),
      closedCaptionsEl = this.el.find(".closed-captions");
      this.videoFullScreen.fullScreenState = this.isFullScreen = false;
      fullScreenClassNameEl.removeClass("video-fullscreen");
      $(window).scrollTop(this.scrollPos);
      this.videoFullScreen.fullScreenEl.find(".icon").removeClass("fa-compress").addClass("fa-arrows-alt").find(".control-text").text(gettext("Fill browser"));
      this.el.trigger("fullscreen", [this.isFullScreen]);
      $(closedCaptionsEl).css({
        top: "70%",
        left: "5%"
      })
    }
    function enter() {
      var fullScreenClassNameEl = this.el.add(document.documentElement),
      closedCaptionsEl = this.el.find(".closed-captions");
      this.scrollPos = $(window).scrollTop();
      $(window).scrollTop(0);
      this.videoFullScreen.fullScreenState = this.isFullScreen = true;
      fullScreenClassNameEl.addClass("video-fullscreen");
      this.videoFullScreen.fullScreenEl.find(".icon").removeClass("fa-arrows-alt").addClass("fa-compress").find(".control-text").text(gettext("Exit full browser"));
      this.el.trigger("fullscreen", [this.isFullScreen]);
      $(closedCaptionsEl).css({
        top: "70%",
        left: "5%"
      })
    }
    function toggle() {
      if (this.videoFullScreen.fullScreenState) {
        this.videoFullScreen.exit()
      } else {
        this.videoFullScreen.enter()
      }
    }
    function exitHandler(event) {
      if (this.isFullScreen && event.keyCode === 27) {
        event.preventDefault();
        this.videoCommands.execute("toggleFullScreen")
      }
    }
  })
})(RequireJS.define); (function(requirejs, require, define) {
  "use strict";
  define("video/05_video_quality_control.js", [],
  function() {
    var template = ['<button class="control quality-control is-hidden" aria-disabled="false">', '<span class="icon-fallback-img">', '<span class="icon icon-hd" aria-hidden="true">HD</span>', '<span class="sr text-translation">', gettext("High Definition"), "</span>&nbsp;", '<span class="text control-text">', gettext("off"), "</span>", "</span>", "</button>"].join("");
    return function(state) {
      var dfd = $.Deferred();
      if (state.videoType !== "youtube") {
        return
      }
      state.videoQualityControl = {};
      _makeFunctionsPublic(state);
      _renderElements(state);
      _bindHandlers(state);
      dfd.resolve();
      return dfd.promise()
    };
    function _makeFunctionsPublic(state) {
      var methodsDict = {
        destroy: destroy,
        fetchAvailableQualities: fetchAvailableQualities,
        onQualityChange: onQualityChange,
        showQualityControl: showQualityControl,
        toggleQuality: toggleQuality
      };
      state.bindTo(methodsDict, state.videoQualityControl, state)
    }
    function destroy() {
      this.videoQualityControl.el.off({
        click: this.videoQualityControl.toggleQuality,
        destroy: this.videoQualityControl.destroy
      });
      this.el.off(".quality");
      this.videoQualityControl.el.remove();
      delete this.videoQualityControl
    }
    function _renderElements(state) {
      var element = state.videoQualityControl.el = $(template);
      state.videoQualityControl.quality = "large";
      state.el.find(".secondary-controls").append(element)
    }
    function _bindHandlers(state) {
      state.videoQualityControl.el.on("click", state.videoQualityControl.toggleQuality);
      state.el.on("play.quality", _.once(state.videoQualityControl.fetchAvailableQualities));
      state.el.on("destroy.quality", state.videoQualityControl.destroy)
    }
    function showQualityControl() {
      this.videoQualityControl.el.removeClass("is-hidden")
    }
    function fetchAvailableQualities() {
      var qualities = this.videoPlayer.player.getAvailableQualityLevels();
      this.config.availableHDQualities = _.intersection(qualities, ["highres", "hd1080", "hd720"]);
      if (this.config.availableHDQualities.length > 0) {
        this.trigger("videoQualityControl.showQualityControl");
        this.trigger("videoQualityControl.onQualityChange", this.videoQualityControl.quality)
      }
      this.trigger("videoPlayer.handlePlaybackQualityChange", this.videoQualityControl.quality)
    }
    function onQualityChange(value) {
      var controlStateStr;
      this.videoQualityControl.quality = value;
      if (_.contains(this.config.availableHDQualities, value)) {
        controlStateStr = gettext("on");
        this.videoQualityControl.el.addClass("active").find(".control-text").text(controlStateStr)
      } else {
        controlStateStr = gettext("off");
        this.videoQualityControl.el.removeClass("active").find(".control-text").text(controlStateStr)
      }
    }
    function toggleQuality(event) {
      var newQuality, value = this.videoQualityControl.quality,
      isHD = _.contains(this.config.availableHDQualities, value);
      event.preventDefault();
      newQuality = isHD ? "large": "highres";
      this.trigger("videoPlayer.handlePlaybackQualityChange", newQuality)
    }
  })
})(RequireJS.requirejs, RequireJS.require, RequireJS.define); (function(requirejs, require, define) {
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
})(RequireJS.requirejs, RequireJS.require, RequireJS.define); (function(define) {
  "use strict";
  define("video/07_video_volume_control.js", [],
  function() {
    var VolumeControl = function(state, i18n) {
      if (! (this instanceof VolumeControl)) {
        return new VolumeControl(state, i18n)
      }
      _.bindAll(this, "keyDownHandler", "updateVolumeSilently", "onVolumeChangeHandler", "openMenu", "closeMenu", "toggleMuteHandler", "keyDownButtonHandler", "destroy");
      this.state = state;
      this.state.videoVolumeControl = this;
      this.i18n = i18n;
      this.initialize();
      return $.Deferred().resolve().promise()
    };
    VolumeControl.prototype = {
      min: 0,
      max: 100,
      step: 20,
      template: ['<div class="volume" role="application">', '<button class="control" aria-disabled="false" aria-label="', gettext("Volume: Click on this button to mute or unmute this video or press UP or " + "DOWN buttons to increase or decrease volume level."), '" aria-expanded="false">', '<span class="icon-fallback-img">', '<span class="icon fa fa-volume-up" aria-hidden="true"></span>', '<span class="sr control-text">', gettext("Volume"), "</span>", "</span>", "</button>", '<div class="volume-slider-container" aria-hidden="true">', '<div class="volume-slider" ', 'role="slider"', 'aria-orientation="vertical" ', 'aria-valuemin="0" ', 'aria-valuemax="100" ', 'aria-valuenow=""></div>', "</div>", "</div>"].join(""),
      destroy: function() {
        this.volumeSlider.slider("destroy");
        this.state.el.find("iframe").removeAttr("tabindex");
        this.a11y.destroy();
        this.cookie = this.a11y = null;
        this.closeMenu();
        this.state.el.off("play.volume").off({
          keydown: this.keyDownHandler,
          volumechange: this.onVolumeChangeHandler
        });
        this.el.off({
          mouseenter: this.openMenu,
          mouseleave: this.closeMenu
        });
        this.button.off({
          mousedown: this.toggleMuteHandler,
          keydown: this.keyDownButtonHandler,
          focus: this.openMenu,
          blur: this.closeMenu
        });
        this.el.remove();
        delete this.state.videoVolumeControl
      },
      initialize: function() {
        var volume;
        if (this.state.isTouch) {
          return false
        }
        this.el = $(this.template);
        this.state.el.find("iframe").attr("tabindex", -1);
        this.button = this.el.children(".control");
        this.cookie = new CookieManager(this.min, this.max);
        this.a11y = new Accessibility(this.button, this.min, this.max, this.i18n);
        volume = this.cookie.getVolume();
        this.storedVolume = this.max;
        this.render();
        this.bindHandlers();
        this.setVolume(volume, true, false);
        this.checkMuteButtonStatus(volume)
      },
      render: function() {
        var container = this.el.find(".volume-slider");
        this.volumeSlider = container.slider({
          orientation: "vertical",
          range: "min",
          min: this.min,
          max: this.max,
          slide: this.onSlideHandler.bind(this)
        });
        container.find("a").attr("tabindex", -1);
        this.state.el.find(".secondary-controls").append(this.el)
      },
      bindHandlers: function() {
        this.state.el.on({
          "play.volume": _.once(this.updateVolumeSilently),
          volumechange: this.onVolumeChangeHandler
        });
        this.state.el.find(".volume").on({
          mouseenter: this.openMenu,
          mouseleave: this.closeMenu
        });
        this.button.on({
          keydown: this.keyDownHandler,
          click: false,
          mousedown: this.toggleMuteHandler,
          focus: this.openMenu,
          blur: this.closeMenu
        });
        this.state.el.on("destroy", this.destroy)
      },
      updateVolumeSilently: function() {
        this.state.el.trigger("volumechange:silent", [this.getVolume()])
      },
      getVolume: function() {
        return this.volume
      },
      setVolume: function(volume, silent, withoutSlider) {
        if (volume === this.getVolume()) {
          return false
        }
        this.volume = volume;
        this.a11y.update(this.getVolume());
        if (!withoutSlider) {
          this.updateSliderView(this.getVolume())
        }
        if (!silent) {
          this.cookie.setVolume(this.getVolume());
          this.state.el.trigger("volumechange", [this.getVolume()])
        }
      },
      increaseVolume: function() {
        var volume = Math.min(this.getVolume() + this.step, this.max);
        this.setVolume(volume, false, false);
        this.el.find(".volume-slider").attr("aria-valuenow", volume)
      },
      decreaseVolume: function() {
        var volume = Math.max(this.getVolume() - this.step, this.min);
        this.setVolume(volume, false, false);
        this.el.find(".volume-slider").attr("aria-valuenow", volume)
      },
      updateSliderView: function(volume) {
        this.volumeSlider.slider("value", volume);
        this.el.find(".volume-slider").attr("aria-valuenow", volume)
      },
      mute: function(muteStatus) {
        var volume;
        this.updateMuteButtonView(muteStatus);
        if (muteStatus) {
          this.storedVolume = this.getVolume() || this.max
        }
        volume = muteStatus ? 0 : this.storedVolume;
        this.setVolume(volume, false, false);
        this.el.find(".volume-slider").attr("aria-valuenow", volume)
      },
      getMuteStatus: function() {
        return this.getVolume() === 0
      },
      updateMuteButtonView: function(isMuted) {
        var action = isMuted ? "addClass": "removeClass";
        this.el[action]("is-muted");
        if (isMuted) {
          this.el.find(".control .icon").removeClass("fa-volume-up").addClass("fa-volume-off")
        } else {
          this.el.find(".control .icon").removeClass("fa-volume-off").addClass("fa-volume-up")
        }
      },
      toggleMute: function() {
        this.mute(!this.getMuteStatus())
      },
      checkMuteButtonStatus: function(volume) {
        if (volume <= this.min) {
          this.updateMuteButtonView(true);
          this.state.el.off("volumechange.is-muted");
          this.state.el.on("volumechange.is-muted", _.once(function() {
            this.updateMuteButtonView(false)
          }.bind(this)))
        }
      },
      openMenu: function() {
        this.el.addClass("is-opened");
        this.button.attr("aria-expanded", "true")
      },
      closeMenu: function() {
        this.el.removeClass("is-opened");
        this.button.attr("aria-expanded", "false")
      },
      keyDownHandler: function(event) {
        if (event.altKey) {
          return true
        }
        if ($(event.target).hasClass("ui-slider-handle")) {
          return true
        }
        var KEY = $.ui.keyCode,
        keyCode = event.keyCode;
        switch (keyCode) {
        case KEY.UP:
          if (event.shiftKey) {
            return true
          }
          this.increaseVolume();
          return false;
        case KEY.DOWN:
          if (event.shiftKey) {
            return true
          }
          this.decreaseVolume();
          return false;
        case KEY.SPACE:
        case KEY.ENTER:
          if (event.shiftKey) {
            return true
          }
          this.toggleMute();
          return false
        }
        return true
      },
      keyDownButtonHandler: function(event) {
        if (event.altKey) {
          return true
        }
        var KEY = $.ui.keyCode,
        keyCode = event.keyCode;
        switch (keyCode) {
        case KEY.ENTER:
        case KEY.SPACE:
          this.toggleMute();
          return false
        }
        return true
      },
      onSlideHandler: function(event, ui) {
        this.setVolume(ui.value, false, true);
        this.el.find(".volume-slider").attr("aria-valuenow", ui.volume)
      },
      toggleMuteHandler: function(event) {
        this.toggleMute();
        event.preventDefault()
      },
      onVolumeChangeHandler: function(event, volume) {
        this.checkMuteButtonStatus(volume)
      }
    };
    var Accessibility = function(button, min, max, i18n) {
      this.min = min;
      this.max = max;
      this.button = button;
      this.i18n = i18n;
      this.initialize()
    };
    Accessibility.prototype = {
      destroy: function() {
        this.liveRegion.remove()
      },
      initialize: function() {
        this.liveRegion = $("<div />", {
          "class": "sr video-live-region",
          "aria-hidden": "false",
          "aria-live": "polite"
        });
        this.button.after(this.liveRegion)
      },
      update: function(volume) {
        this.liveRegion.text([this.getVolumeDescription(volume), this.i18n["Volume"] + "."].join(" "));
        $(this.button).parent().find(".volume-slider").attr("aria-valuenow", volume)
      },
      getVolumeDescription: function(volume) {
        if (volume === 0) {
          return this.i18n["Muted"]
        } else if (volume <= 20) {
          return this.i18n["Very low"]
        } else if (volume <= 40) {
          return this.i18n["Low"]
        } else if (volume <= 60) {
          return this.i18n["Average"]
        } else if (volume <= 80) {
          return this.i18n["Loud"]
        } else if (volume <= 99) {
          return this.i18n["Very loud"]
        }
        return this.i18n["Maximum"]
      }
    };
    var CookieManager = function(min, max) {
      this.min = min;
      this.max = max;
      this.cookieName = "video_player_volume_level"
    };
    CookieManager.prototype = {
      getVolume: function() {
        var volume = parseInt($.cookie(this.cookieName), 10);
        if (_.isFinite(volume)) {
          volume = Math.max(volume, this.min);
          volume = Math.min(volume, this.max)
        } else {
          volume = this.max
        }
        return volume
      },
      setVolume: function(value) {
        $.cookie(this.cookieName, value, {
          expires: 3650,
          path: "/"
        })
      }
    };
    return VolumeControl
  })
})(RequireJS.define); (function(requirejs, require, define) {
  "use strict";
  define("video/08_video_speed_control.js", ["video/00_iterator.js"],
  function(Iterator) {
    var SpeedControl = function(state) {
      if (! (this instanceof SpeedControl)) {
        return new SpeedControl(state)
      }
      _.bindAll(this, "onSetSpeed", "onRenderSpeed", "clickLinkHandler", "keyDownLinkHandler", "mouseEnterHandler", "mouseLeaveHandler", "clickMenuHandler", "keyDownMenuHandler", "destroy");
      this.state = state;
      this.state.videoSpeedControl = this;
      this.initialize();
      return $.Deferred().resolve().promise()
    };
    SpeedControl.prototype = {
      template: ['<div class="speeds menu-container" role="application">', '<button class="control speed-button" aria-label="', gettext("Speed: Press UP to enter the speed menu then use the UP and DOWN arrow keys to navigate the different speeds, then press ENTER to change to the selected speed."), '" aria-disabled="false" aria-expanded="false">', '<span class="icon-fallback-img">', '<span class="icon fa fa-caret-right" aria-hidden="true"></span>', '<span class="sr control-text">', gettext("Speed"), "</span>", "</span>", '<span class="label" aria-hidden="true">', gettext("Speed"), "</span>", '<span class="value"></span>', "</button>", '<ol class="video-speeds menu"></ol>', "</div>"].join(""),
      destroy: function() {
        this.el.off({
          mouseenter: this.mouseEnterHandler,
          mouseleave: this.mouseLeaveHandler,
          click: this.clickMenuHandler,
          keydown: this.keyDownMenuHandler
        });
        this.state.el.off({
          "speed:set": this.onSetSpeed,
          "speed:render": this.onRenderSpeed
        });
        this.closeMenu(true);
        this.speedsContainer.remove();
        this.el.remove();
        delete this.state.videoSpeedControl
      },
      initialize: function() {
        var state = this.state;
        if (!this.isPlaybackRatesSupported(state)) {
          console.log("[Video info]: playbackRate is not supported.");
          return false
        }
        this.el = $(this.template);
        this.speedsContainer = this.el.find(".video-speeds");
        this.speedButton = this.el.find(".speed-button");
        this.render(state.speeds, state.speed);
        this.setSpeed(state.speed, true, true);
        this.bindHandlers();
        return true
      },
      render: function(speeds) {
        var speedsContainer = this.speedsContainer,
        reversedSpeeds = speeds.concat().reverse(),
        speedsList = $.map(reversedSpeeds,
        function(speed) {
          return ['<li data-speed="', speed, '">', '<button class="control speed-option" tabindex="-1">', speed, "x", "</button>", "</li>"].join("")
        });
        speedsContainer.html(speedsList.join(""));
        this.speedLinks = new Iterator(speedsContainer.find(".speed-option"));
        this.state.el.find(".secondary-controls").prepend(this.el)
      },
      bindHandlers: function() {
        this.el.on({
          mouseenter: this.mouseEnterHandler,
          mouseleave: this.mouseLeaveHandler,
          click: this.openMenu,
          keydown: this.keyDownMenuHandler
        });
        this.speedsContainer.on({
          click: this.clickLinkHandler,
          keydown: this.keyDownLinkHandler
        },
        ".speed-option");
        this.state.el.on({
          "speed:set": this.onSetSpeed,
          "speed:render": this.onRenderSpeed
        });
        this.state.el.on("destroy", this.destroy)
      },
      onSetSpeed: function(event, speed) {
        this.setSpeed(speed, true)
      },
      onRenderSpeed: function(event, speeds, currentSpeed) {
        this.render(speeds, currentSpeed)
      },
      isPlaybackRatesSupported: function(state) {
        var isHtml5 = state.videoType === "html5",
        isTouch = state.isTouch,
        video = document.createElement("video");
        return ! isTouch || isHtml5 && !Boolean(video.playbackRate)
      },
      openMenu: function(bindEvent) {
        if (bindEvent) {
          $(window).on("click.speedMenu", this.clickMenuHandler)
        }
        this.el.addClass("is-opened");
        this.speedButton.attr("tabindex", -1).attr("aria-expanded", "true")
      },
      closeMenu: function(unBindEvent) {
        if (unBindEvent) {
          $(window).off("click.speedMenu")
        }
        this.el.removeClass("is-opened");
        this.speedButton.attr("tabindex", 0).attr("aria-expanded", "false")
      },
      setSpeed: function(speed, silent, forceUpdate) {
        if (speed !== this.currentSpeed || forceUpdate) {
          this.speedsContainer.find("li").removeClass("is-active").siblings("li[data-speed='" + speed + "']").addClass("is-active");
          this.speedButton.find(".value").html(speed + "x");
          this.currentSpeed = speed;
          if (!silent) {
            this.el.trigger("speedchange", [speed, this.state.speed])
          }
        }
      },
      clickMenuHandler: function() {
        this.closeMenu();
        return false
      },
      clickLinkHandler: function(event) {
        var speed = $(event.currentTarget).parent().data("speed");
        this.closeMenu();
        this.state.videoCommands.execute("speed", speed);
        return false
      },
      mouseEnterHandler: function() {
        this.openMenu();
        return false
      },
      mouseLeaveHandler: function() {
        if (!this.speedLinks.list.is(":focus")) {
          this.closeMenu()
        }
        return false
      },
      keyDownMenuHandler: function(event) {
        var KEY = $.ui.keyCode,
        keyCode = event.keyCode;
        switch (keyCode) {
        case KEY.ENTER:
        case KEY.SPACE:
        case KEY.UP:
          this.openMenu(true);
          this.speedLinks.last().focus();
          break;
        case KEY.ESCAPE:
          this.closeMenu(true);
          break
        }
        return event.keyCode === KEY.TAB
      },
      keyDownLinkHandler: function(event) {
        if (event.altKey) {
          return true
        }
        var KEY = $.ui.keyCode,
        self = this,
        parent = $(event.currentTarget).parent(),
        index = parent.index(),
        speed = parent.data("speed");
        switch (event.keyCode) {
        case KEY.TAB:
          setTimeout(function() {
            self.closeMenu(true)
          },
          25);
          return true;
        case KEY.ESCAPE:
          this.closeMenu(true);
          this.speedButton.focus();
          return false;
        case KEY.UP:
          if (event.shiftKey) {
            return true
          }
          this.speedLinks.prev(index).focus();
          return false;
        case KEY.DOWN:
          if (event.shiftKey) {
            return true
          }
          this.speedLinks.next(index).focus();
          return false;
        case KEY.ENTER:
        case KEY.SPACE:
          this.closeMenu(true);
          this.speedButton.focus();
          this.setSpeed(this.state.speedToString(speed));
          return false
        }
        return true
      }
    };
    return SpeedControl
  })
})(RequireJS.requirejs, RequireJS.require, RequireJS.define); (function(define) {
  "use strict";
  define("video/09_video_caption.js", ["video/00_sjson.js", "video/00_async_process.js"],
  function(Sjson, AsyncProcess) {
    var VideoCaption = function(state) {
      if (! (this instanceof VideoCaption)) {
        return new VideoCaption(state)
      }
      _.bindAll(this, "toggle", "onMouseEnter", "onMouseLeave", "onMovement", "onContainerMouseEnter", "onContainerMouseLeave", "fetchCaption", "onResize", "pause", "play", "onCaptionUpdate", "onCaptionHandler", "destroy", "handleKeypress", "handleKeypressLink", "openLanguageMenu", "closeLanguageMenu", "previousLanguageMenuItem", "nextLanguageMenuItem", "handleCaptionToggle", "showClosedCaptions", "hideClosedCaptions", "toggleClosedCaptions", "updateCaptioningCookie", "handleCaptioningCookie", "handleTranscriptToggle");
      this.state = state;
      this.state.videoCaption = this;
      this.renderElements();
      this.handleCaptioningCookie();
      return $.Deferred().resolve().promise()
    };
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

(function(define) {
  "use strict";
  define("video/09_play_placeholder.js", [],
  function() {
    var PlayPlaceholder = function(state, i18n) {
      if (! (this instanceof PlayPlaceholder)) {
        return new PlayPlaceholder(state, i18n)
      }
      _.bindAll(this, "onClick", "hide", "show", "destroy");
      this.state = state;
      this.state.videoPlayPlaceholder = this;
      this.i18n = i18n;
      this.initialize();
      return $.Deferred().resolve().promise()
    };
    PlayPlaceholder.prototype = {
      destroy: function() {
        this.el.off("click", this.onClick);
        this.state.el.on({
          destroy: this.destroy,
          play: this.hide,
          "ended pause": this.show
        });
        this.hide();
        delete this.state.videoPlayPlaceholder
      },
      shouldBeShown: function() {
        return /iPad|Android/i.test(this.state.isTouch[0]) && !this.state.isYoutubeType()
      },
      initialize: function() {
        if (!this.shouldBeShown()) {
          return false
        }
        this.el = this.state.el.find(".btn-play");
        this.bindHandlers();
        this.show()
      },
      bindHandlers: function() {
        this.el.on("click", this.onClick);
        this.state.el.on({
          destroy: this.destroy,
          play: this.hide,
          "ended pause": this.show
        })
      },
      onClick: function() {
        this.state.videoCommands.execute("play")
      },
      hide: function() {
        this.el.addClass("is-hidden").attr({
          "aria-hidden": "true",
          tabindex: -1
        })
      },
      show: function() {
        this.el.removeClass("is-hidden").attr({
          "aria-hidden": "false",
          tabindex: 0
        })
      }
    };
    return PlayPlaceholder
  })
})(RequireJS.define); (function(define) {
  "use strict";
  define("video/09_play_pause_control.js", [],
  function() {
    var PlayPauseControl = function(state, i18n) {
      if (! (this instanceof PlayPauseControl)) {
        return new PlayPauseControl(state, i18n)
      }
      _.bindAll(this, "play", "pause", "onClick", "destroy");
      this.state = state;
      this.state.videoPlayPauseControl = this;
      this.i18n = i18n;
      this.initialize();
      return $.Deferred().resolve().promise()
    };
    PlayPauseControl.prototype = {
      template: ['<button class="control video_control play" aria-disabled="false">', '<span class="icon-fallback-img">', '<span class="icon fa fa-play" aria-hidden="true"></span>', '<span class="sr control-text">', gettext("Play"), "</span>", "</span>", "</button>"].join(""),
      destroy: function() {
        this.el.remove();
        this.state.el.off("destroy", this.destroy);
        delete this.state.videoPlayPauseControl
      },
      initialize: function() {
        this.el = $(this.template);
        this.render();
        this.bindHandlers()
      },
      render: function() {
        this.state.el.find(".vcr").prepend(this.el)
      },
      bindHandlers: function() {
        this.el.on({
          click: this.onClick
        });
        this.state.el.on({
          play: this.play,
          "pause ended": this.pause,
          destroy: this.destroy
        })
      },
      onClick: function(event) {
        event.preventDefault();
        this.state.videoCommands.execute("togglePlayback")
      },
      play: function() {
        this.el.addClass("pause").removeClass("play").find(".icon").removeClass("fa-play").addClass("fa-pause");
        this.el.find(".control-text").text(gettext("Pause"))
      },
      pause: function() {
        this.el.removeClass("pause").addClass("play").find(".icon").removeClass("fa-pause").addClass("fa-play");
        this.el.find(".control-text").text(gettext("Play"))
      }
    };
    return PlayPauseControl
  })
})(RequireJS.define); (function(define) {
  "use strict";
  define("video/09_play_skip_control.js", [],
  function() {
    var PlaySkipControl = function(state, i18n) {
      if (! (this instanceof PlaySkipControl)) {
        return new PlaySkipControl(state, i18n)
      }
      _.bindAll(this, "play", "onClick", "destroy");
      this.state = state;
      this.state.videoPlaySkipControl = this;
      this.i18n = i18n;
      this.initialize();
      return $.Deferred().resolve().promise()
    };
    PlaySkipControl.prototype = {
      template: ['<button class="control video_control play play-skip-control">', '<span class="icon-fallback-img">', '<span class="icon fa fa-play" aria-hidden="true"></span>', '<span class="text control-text">', gettext("Play"), "</span>", "</span>", "</button>"].join(""),
      destroy: function() {
        this.el.remove();
        this.state.el.off("destroy", this.destroy);
        delete this.state.videoPlaySkipControl
      },
      initialize: function() {
        this.el = $(this.template);
        this.render();
        this.bindHandlers()
      },
      render: function() {
        this.state.el.find(".vcr").prepend(this.el)
      },
      bindHandlers: function() {
        this.el.on("click", this.onClick);
        this.state.el.on({
          play: this.play,
          destroy: this.destroy
        })
      },
      onClick: function(event) {
        event.preventDefault();
        if (this.state.videoPlayer.isPlaying()) {
          this.state.videoCommands.execute("skip")
        } else {
          this.state.videoCommands.execute("play")
        }
      },
      play: function() {
        this.el.removeClass("play").addClass("skip").find(".icon").removeClass("fa-play").addClass("fa-step-forward").find(".control-text").text(gettext("Skip"));
        this.state.el.find("video").off("click")
      }
    };
    return PlaySkipControl
  })
})(RequireJS.define); (function(define) {
  "use strict";
  define("video/09_skip_control.js", [],
  function() {
    var SkipControl = function(state, i18n) {
      if (! (this instanceof SkipControl)) {
        return new SkipControl(state, i18n)
      }
      _.bindAll(this, "onClick", "render", "destroy");
      this.state = state;
      this.state.videoSkipControl = this;
      this.i18n = i18n;
      this.initialize();
      return $.Deferred().resolve().promise()
    };
    SkipControl.prototype = {
      template: ['<button class="control video_control skip skip-control" aria-disabled="false">', '<span class="icon-fallback-img">', '<span class="icon fa fa-step-forward" aria-hidden="true"></span>', '<span class="text control-text">', gettext("Do not show again"), "</span>", "</span>", "</button>"].join(""),
      destroy: function() {
        this.el.remove();
        this.state.el.off(".skip");
        delete this.state.videoSkipControl
      },
      initialize: function() {
        this.el = $(this.template);
        this.bindHandlers()
      },
      render: function() {
        this.state.el.find(".vcr .control").after(this.el)
      },
      bindHandlers: function() {
        this.el.on("click", this.onClick);
        this.state.el.on({
          "play.skip": _.once(this.render),
          "destroy.skip": this.destroy
        })
      },
      onClick: function(event) {
        event.preventDefault();
        this.state.videoCommands.execute("skip", true)
      }
    };
    return SkipControl
  })
})(RequireJS.define); (function(define) {
  "use strict";
  define("video/09_bumper.js", [],
  function() {
    var VideoBumper = function(player, state) {
      if (! (this instanceof VideoBumper)) {
        return new VideoBumper(player, state)
      }
      _.bindAll(this, "showMainVideoHandler", "destroy", "skipByDuration", "destroyAndResolve");
      this.dfd = $.Deferred();
      this.element = state.el;
      this.element.addClass("is-bumper");
      this.player = player;
      this.state = state;
      this.doNotShowAgain = false;
      this.state.videoBumper = this;
      this.bindHandlers();
      this.initialize();
      this.maxBumperDuration = 35
    };
    VideoBumper.prototype = {
      initialize: function() {
        this.player()
      },
      getPromise: function() {
        return this.dfd.promise()
      },
      showMainVideoHandler: function() {
        this.state.storage.setItem("isBumperShown", true);
        setTimeout(function() {
          this.saveState();
          this.showMainVideo()
        }.bind(this), 20)
      },
      destroyAndResolve: function() {
        this.destroy();
        this.dfd.resolve()
      },
      showMainVideo: function() {
        if (this.state.videoPlayer) {
          this.destroyAndResolve()
        } else {
          this.state.el.on("initialize", this.destroyAndResolve)
        }
      },
      skip: function() {
        this.element.trigger("skip", [this.doNotShowAgain]);
        this.showMainVideoHandler()
      },
      skipAndDoNotShowAgain: function() {
        this.doNotShowAgain = true;
        this.skip()
      },
      skipByDuration: function(event, time) {
        if (time > this.maxBumperDuration) {
          this.element.trigger("ended")
        }
      },
      bindHandlers: function() {
        var events = ["ended", "error"].join(" ");
        this.element.on(events, this.showMainVideoHandler);
        this.element.on("timeupdate", this.skipByDuration)
      },
      saveState: function() {
        var info = {
          bumper_last_view_date: true
        };
        if (this.doNotShowAgain) {
          _.extend(info, {
            bumper_do_not_show_again: true
          })
        }
        this.state.videoSaveStatePlugin.saveState(true, info)
      },
      destroy: function() {
        var events = ["ended", "error"].join(" ");
        this.element.off(events, this.showMainVideoHandler);
        this.element.off({
          timeupdate: this.skipByDuration,
          initialize: this.destroyAndResolve
        });
        this.element.removeClass("is-bumper");
        if (_.isFunction(this.state.videoPlayer.destroy)) {
          this.state.videoPlayer.destroy()
        }
        delete this.state.videoBumper
      }
    };
    return VideoBumper
  })
})(RequireJS.define); (function(define) {
  "use strict";
  define("video/09_save_state_plugin.js", [],
  function() {
    var SaveStatePlugin = function(state, i18n, options) {
      if (! (this instanceof SaveStatePlugin)) {
        return new SaveStatePlugin(state, i18n, options)
      }
      _.bindAll(this, "onSpeedChange", "saveStateHandler", "bindUnloadHandler", "onUnload", "onYoutubeAvailability", "onLanguageChange", "destroy");
      this.state = state;
      this.options = _.extend({
        events: []
      },
      options);
      this.state.videoSaveStatePlugin = this;
      this.i18n = i18n;
      this.initialize();
      return $.Deferred().resolve().promise()
    };
    SaveStatePlugin.moduleName = "SaveStatePlugin";
    SaveStatePlugin.prototype = {
      destroy: function() {
        this.state.el.off(this.events).off("destroy", this.destroy);
        $(window).off("unload", this.onUnload);
        delete this.state.videoSaveStatePlugin
      },
      initialize: function() {
        this.events = {
          speedchange: this.onSpeedChange,
          play: this.bindUnloadHandler,
          "pause destroy": this.saveStateHandler,
          "language_menu:change": this.onLanguageChange,
          youtube_availability: this.onYoutubeAvailability
        };
        this.bindHandlers()
      },
      bindHandlers: function() {
        if (this.options.events.length) {
          _.each(this.options.events,
          function(eventName) {
            var callback;
            if (_.has(this.events, eventName)) {
              callback = this.events[eventName];
              this.state.el.on(eventName, callback)
            }
          },
          this)
        } else {
          this.state.el.on(this.events)
        }
        this.state.el.on("destroy", this.destroy)
      },
      bindUnloadHandler: _.once(function() {
        $(window).on("unload.video", this.onUnload)
      }),
      onSpeedChange: function(event, newSpeed) {
        this.saveState(true, {
          speed: newSpeed
        });
        this.state.storage.setItem("speed", newSpeed, true);
        this.state.storage.setItem("general_speed", newSpeed)
      },
      saveStateHandler: function() {
        this.saveState(true)
      },
      onUnload: function() {
        this.saveState()
      },
      onLanguageChange: function(event, langCode) {
        this.state.storage.setItem("language", langCode)
      },
      onYoutubeAvailability: function(event, youtubeIsAvailable) {
        this.saveState(true, {
          youtube_is_available: youtubeIsAvailable
        })
      },
      saveState: function(async, data) {
        if (!$.isPlainObject(data)) {
          data = {
            saved_video_position: this.state.videoPlayer.currentTime
          }
        }
        if (data.speed) {
          this.state.storage.setItem("speed", data.speed, true)
        }
        if (_.has(data, "saved_video_position")) {
          this.state.storage.setItem("savedVideoPosition", data.saved_video_position, true);
          data.saved_video_position = Time.formatFull(data.saved_video_position)
        }
        $.ajax({
          url: this.state.config.saveStateUrl,
          type: "POST",
          async: async ? true: false,
          dataType: "json",
          data: data
        })
      }
    };
    return SaveStatePlugin
  })
})(RequireJS.define); (function(define) {
  "use strict";
  define("video/09_events_plugin.js", [],
  function() {
    var EventsPlugin = function(state, i18n, options) {
      if (! (this instanceof EventsPlugin)) {
        return new EventsPlugin(state, i18n, options)
      }
      _.bindAll(this, "onReady", "onPlay", "onPause", "onEnded", "onSeek", "onSpeedChange", "onShowLanguageMenu", "onHideLanguageMenu", "onSkip", "onShowCaptions", "onHideCaptions", "destroy");
      this.state = state;
      this.options = _.extend({},
      options);
      this.state.videoEventsPlugin = this;
      this.i18n = i18n;
      this.initialize();
      return $.Deferred().resolve().promise()
    };
    EventsPlugin.moduleName = "EventsPlugin";
    EventsPlugin.prototype = {
      destroy: function() {
        this.state.el.off(this.events);
        delete this.state.videoEventsPlugin
      },
      initialize: function() {
        this.events = {
          ready: this.onReady,
          play: this.onPlay,
          pause: this.onPause,
          "ended stop": this.onEnded,
          seek: this.onSeek,
          skip: this.onSkip,
          speedchange: this.onSpeedChange,
          "language_menu:show": this.onShowLanguageMenu,
          "language_menu:hide": this.onHideLanguageMenu,
          "captions:show": this.onShowCaptions,
          "captions:hide": this.onHideCaptions,
          destroy: this.destroy
        };
        this.bindHandlers();
        this.emitPlayVideoEvent = true
      },
      bindHandlers: function() {
        this.state.el.on(this.events)
      },
      onReady: function() {
        this.log("load_video")
      },
      onPlay: function() {
        if (this.emitPlayVideoEvent) {
          this.log("play_video", {
            currentTime: this.getCurrentTime()
          });
          this.emitPlayVideoEvent = false
        }
      },
      onPause: function() {
        this.log("pause_video", {
          currentTime: this.getCurrentTime()
        });
        this.emitPlayVideoEvent = true
      },
      onEnded: function() {
        this.log("stop_video", {
          currentTime: this.getCurrentTime()
        });
        this.emitPlayVideoEvent = true
      },
      onSkip: function(event, doNotShowAgain) {
        var info = {
          currentTime: this.getCurrentTime()
        },
        eventName = doNotShowAgain ? "do_not_show_again_video": "skip_video";
        this.log(eventName, info)
      },
      onSeek: function(event, time, oldTime, type) {
        this.log("seek_video", {
          old_time: oldTime,
          new_time: time,
          type: type
        })
      },
      onSpeedChange: function(event, newSpeed, oldSpeed) {
        this.log("speed_change_video", {
          current_time: this.getCurrentTime(),
          old_speed: oldSpeed,
          new_speed: newSpeed
        })
      },
      onShowLanguageMenu: function() {
        this.log("video_show_cc_menu")
      },
      onHideLanguageMenu: function() {
        this.log("video_hide_cc_menu")
      },
      onShowCaptions: function() {
        this.log("show_transcript", {
          current_time: this.getCurrentTime()
        })
      },
      onHideCaptions: function() {
        this.log("hide_transcript", {
          current_time: this.getCurrentTime()
        })
      },
      getCurrentTime: function() {
        var player = this.state.videoPlayer;
        return player ? player.currentTime: 0
      },
      log: function(eventName, data) {
        var logInfo = _.extend({
          id: this.state.id,
          code: this.state.isYoutubeType() ? this.state.youtubeId() : "html5"
        },
        data, this.options.data);
        Logger.log(eventName, logInfo)
      }
    };
    return EventsPlugin
  })
})(RequireJS.define); (function(define) {
  "use strict";
  define("video/09_events_bumper_plugin.js", [],
  function() {
    var EventsBumperPlugin = function(state, i18n, options) {
      if (! (this instanceof EventsBumperPlugin)) {
        return new EventsBumperPlugin(state, i18n, options)
      }
      _.bindAll(this, "onReady", "onPlay", "onEnded", "onShowLanguageMenu", "onHideLanguageMenu", "onSkip", "onShowCaptions", "onHideCaptions", "destroy");
      this.state = state;
      this.options = _.extend({},
      options);
      this.state.videoEventsBumperPlugin = this;
      this.i18n = i18n;
      this.initialize();
      return $.Deferred().resolve().promise()
    };
    EventsBumperPlugin.moduleName = "EventsBumperPlugin";
    EventsBumperPlugin.prototype = {
      destroy: function() {
        this.state.el.off(this.events);
        delete this.state.videoEventsBumperPlugin
      },
      initialize: function() {
        this.events = {
          ready: this.onReady,
          play: this.onPlay,
          "ended stop": this.onEnded,
          skip: this.onSkip,
          "language_menu:show": this.onShowLanguageMenu,
          "language_menu:hide": this.onHideLanguageMenu,
          "captions:show": this.onShowCaptions,
          "captions:hide": this.onHideCaptions,
          destroy: this.destroy
        };
        this.bindHandlers()
      },
      bindHandlers: function() {
        this.state.el.on(this.events)
      },
      onReady: function() {
        this.log("edx.video.bumper.loaded")
      },
      onPlay: function() {
        this.log("edx.video.bumper.played", {
          currentTime: this.getCurrentTime()
        })
      },
      onEnded: function() {
        this.log("edx.video.bumper.stopped", {
          currentTime: this.getCurrentTime()
        })
      },
      onSkip: function(event, doNotShowAgain) {
        var info = {
          currentTime: this.getCurrentTime()
        },
        eventName = "edx.video.bumper." + (doNotShowAgain ? "dismissed": "skipped");
        this.log(eventName, info)
      },
      onShowLanguageMenu: function() {
        this.log("edx.video.bumper.transcript.menu.shown")
      },
      onHideLanguageMenu: function() {
        this.log("edx.video.bumper.transcript.menu.hidden")
      },
      onShowCaptions: function() {
        this.log("edx.video.bumper.transcript.shown", {
          currentTime: this.getCurrentTime()
        })
      },
      onHideCaptions: function() {
        this.log("edx.video.bumper.transcript.hidden", {
          currentTime: this.getCurrentTime()
        })
      },
      getCurrentTime: function() {
        var player = this.state.videoPlayer;
        return player ? player.currentTime: 0
      },
      getDuration: function() {
        var player = this.state.videoPlayer;
        return player ? player.duration() : 0
      },
      log: function(eventName, data) {
        var logInfo = _.extend({
          host_component_id: this.state.id,
          bumper_id: this.state.config.sources[0] || "",
          duration: this.getDuration(),
          code: "html5"
        },
        data, this.options.data);
        Logger.log(eventName, logInfo)
      }
    };
    return EventsBumperPlugin
  })
})(RequireJS.define); (function(define) {
  "use strict";
  define("video/09_poster.js", [],
  function() {
    var VideoPoster = function(element, options) {
      if (! (this instanceof VideoPoster)) {
        return new VideoPoster(element, options)
      }
      _.bindAll(this, "onClick", "destroy");
      this.element = element;
      this.container = element.find(".video-player");
      this.options = options || {};
      this.initialize()
    };
    VideoPoster.moduleName = "Poster";
    VideoPoster.prototype = {
      template: _.template(['<div class="video-pre-roll is-<%= type %> poster" ', 'style="background-image: url(<%= url %>)">', '<button class="btn-play btn-pre-roll">', '<img src="/static/images/play.png" alt="">', '<span class="sr">', gettext("Play video"), "</span>", "</button>", "</div>"].join("")),
      initialize: function() {
        this.el = $(this.template({
          url: this.options.poster.url,
          type: this.options.poster.type
        }));
        this.element.addClass("is-pre-roll");
        this.render();
        this.bindHandlers()
      },
      bindHandlers: function() {
        this.el.on("click", this.onClick);
        this.element.on("destroy", this.destroy)
      },
      render: function() {
        this.container.append(this.el)
      },
      onClick: function() {
        if (_.isFunction(this.options.onClick)) {
          this.options.onClick()
        }
        this.destroy()
      },
      destroy: function() {
        this.element.off("destroy", this.destroy).removeClass("is-pre-roll");
        this.el.remove()
      }
    };
    return VideoPoster
  })
})(RequireJS.define); (function(define) {
  "use strict";
  define("video/095_video_context_menu.js", ["video/00_component.js"],
  function(Component) {
    var AbstractItem, AbstractMenu, Menu, Overlay, Submenu, MenuItem;
    AbstractItem = Component.extend({
      initialize: function(options) {
        this.options = $.extend(true, {
          label: "",
          prefix: "edx-",
          dataAttrs: {
            menu: this
          },
          attrs: {},
          items: [],
          callback: $.noop,
          initialize: $.noop
        },
        options);
        this.id = _.uniqueId();
        this.element = this.createElement();
        this.element.attr(this.options.attrs).data(this.options.dataAttrs);
        this.children = [];
        this.delegateEvents();
        this.options.initialize.call(this, this)
      },
      destroy: function() {
        _.invoke(this.getChildren(), "destroy");
        this.undelegateEvents();
        this.getElement().remove()
      },
      open: function() {
        this.getElement().addClass("is-opened");
        return this
      },
      close: function() {},
      closeSiblings: function() {
        _.invoke(this.getSiblings(), "close");
        return this
      },
      getElement: function() {
        return this.element
      },
      addChild: function(child) {
        var firstChild = null,
        lastChild = null;
        if (this.hasChildren()) {
          lastChild = this.getLastChild();
          lastChild.next = child;
          firstChild = this.getFirstChild();
          firstChild.prev = child
        }
        child.parent = this;
        child.next = firstChild;
        child.prev = lastChild;
        this.children.push(child);
        return this
      },
      getChildren: function() {
        return this.children.concat()
      },
      hasChildren: function() {
        return this.getChildren().length > 0
      },
      getFirstChild: function() {
        return _.first(this.children)
      },
      getLastChild: function() {
        return _.last(this.children)
      },
      bindEvent: function(element, events, handler) {
        $(element).on(this.addNamespace(events), handler);
        return this
      },
      getNext: function() {
        var item = this.next;
        while (item.isHidden() && this.id !== item.id) {
          item = item.next
        }
        return item
      },
      getPrev: function() {
        var item = this.prev;
        while (item.isHidden() && this.id !== item.id) {
          item = item.prev
        }
        return item
      },
      createElement: function() {
        return null
      },
      getRoot: function() {
        var item = this;
        while (item.parent) {
          item = item.parent
        }
        return item
      },
      populateElement: function() {},
      focus: function() {
        this.getElement().focus();
        this.closeSiblings();
        return this
      },
      isHidden: function() {
        return this.getElement().is(":hidden")
      },
      getSiblings: function() {
        var items = [],
        item = this;
        while (item.next && item.next.id !== this.id) {
          item = item.next;
          items.push(item)
        }
        return items
      },
      select: function() {},
      unselect: function() {},
      setLabel: function() {},
      itemHandler: function() {},
      keyDownHandler: function() {},
      delegateEvents: function() {},
      undelegateEvents: function() {
        this.getElement().off("." + this.id)
      },
      addNamespace: function(events) {
        return _.map(events.split(/\s+/),
        function(event) {
          return event + "." + this.id
        },
        this).join(" ")
      }
    });
    AbstractMenu = AbstractItem.extend({
      delegateEvents: function() {
        this.bindEvent(this.getElement(), "keydown mouseleave mouseover", this.itemHandler.bind(this)).bindEvent(this.getElement(), "contextmenu",
        function(event) {
          event.preventDefault()
        });
        return this
      },
      populateElement: function() {
        var fragment = document.createDocumentFragment();
        _.each(this.getChildren(),
        function(child) {
          fragment.appendChild(child.populateElement()[0])
        },
        this);
        this.appendContent([fragment]);
        this.isRendered = true;
        return this.getElement()
      },
      close: function() {
        this.closeChildren();
        this.getElement().removeClass("is-opened");
        return this
      },
      closeChildren: function() {
        _.invoke(this.getChildren(), "close");
        return this
      },
      itemHandler: function(event) {
        event.preventDefault();
        var item = $(event.target).data("menu");
        switch (event.type) {
        case "keydown":
          this.keyDownHandler.call(this, event, item);
          break;
        case "mouseover":
          this.mouseOverHandler.call(this, event, item);
          break;
        case "mouseleave":
          this.mouseLeaveHandler.call(this, event, item);
          break
        }
      },
      keyDownHandler: function() {},
      mouseOverHandler: function() {},
      mouseLeaveHandler: function() {}
    });
    Menu = AbstractMenu.extend({
      initialize: function(options, contextmenuElement, container) {
        this.contextmenuElement = $(contextmenuElement);
        this.container = $(container);
        this.overlay = this.getOverlay();
        AbstractMenu.prototype.initialize.apply(this, arguments);
        this.build(this, this.options.items)
      },
      createElement: function() {
        return $("<ol />", {
          "class": ["contextmenu", this.options.prefix + "contextmenu"].join(" "),
          role: "menu",
          tabindex: -1
        })
      },
      delegateEvents: function() {
        AbstractMenu.prototype.delegateEvents.call(this);
        this.bindEvent(this.contextmenuElement, "contextmenu", this.contextmenuHandler.bind(this)).bindEvent(window, "resize", _.debounce(this.close.bind(this), 100));
        return this
      },
      destroy: function() {
        AbstractMenu.prototype.destroy.call(this);
        this.overlay.destroy();
        this.contextmenuElement.removeData("contextmenu");
        return this
      },
      undelegateEvents: function() {
        AbstractMenu.prototype.undelegateEvents.call(this);
        this.contextmenuElement.off(this.addNamespace("contextmenu"));
        this.overlay.undelegateEvents();
        return this
      },
      appendContent: function(content) {
        this.getElement().append(content);
        return this
      },
      addChild: function() {
        AbstractMenu.prototype.addChild.apply(this, arguments);
        this.next = this.getFirstChild();
        this.prev = this.getLastChild();
        return this
      },
      build: function(container, items) {
        _.each(items,
        function(item) {
          var child;
          if (_.has(item, "items")) {
            child = this.build(new Submenu(item, this.contextmenuElement), item.items)
          } else {
            child = new MenuItem(item)
          }
          container.addChild(child)
        },
        this);
        return container
      },
      focus: function() {
        this.getElement().focus();
        return this
      },
      open: function() {
        var menu = this.isRendered ? this.getElement() : this.populateElement();
        this.container.append(menu);
        AbstractItem.prototype.open.call(this);
        this.overlay.show(this.container);
        return this
      },
      close: function() {
        AbstractMenu.prototype.close.call(this);
        this.getElement().detach();
        this.overlay.hide();
        return this
      },
      position: function(event) {
        this.getElement().position({
          my: "left top",
          of: event,
          collision: "flipfit flipfit",
          within: this.contextmenuElement
        });
        return this
      },
      pointInContainerBox: function(x, y) {
        var containerOffset = this.contextmenuElement.offset(),
        containerBox = {
          x0: containerOffset.left,
          y0: containerOffset.top,
          x1: containerOffset.left + this.contextmenuElement.outerWidth(),
          y1: containerOffset.top + this.contextmenuElement.outerHeight()
        };
        return containerBox.x0 <= x && x <= containerBox.x1 && containerBox.y0 <= y && y <= containerBox.y1
      },
      getOverlay: function() {
        return new Overlay(this.close.bind(this),
        function(event) {
          event.preventDefault();
          if (this.pointInContainerBox(event.pageX, event.pageY)) {
            this.position(event).focus();
            this.closeChildren()
          } else {
            this.close()
          }
        }.bind(this))
      },
      contextmenuHandler: function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.open().position(event).focus()
      },
      keyDownHandler: function(event, item) {
        var KEY = $.ui.keyCode,
        keyCode = event.keyCode;
        switch (keyCode) {
        case KEY.UP:
          item.getPrev().focus();
          event.stopPropagation();
          break;
        case KEY.DOWN:
          item.getNext().focus();
          event.stopPropagation();
          break;
        case KEY.TAB:
          event.stopPropagation();
          break;
        case KEY.ESCAPE:
          this.close();
          break
        }
        return false
      }
    });
    Overlay = Component.extend({
      ns: ".overlay",
      initialize: function(clickHandler, contextmenuHandler) {
        this.element = $("<div />", {
          "class": "overlay"
        });
        this.clickHandler = clickHandler;
        this.contextmenuHandler = contextmenuHandler
      },
      destroy: function() {
        this.getElement().remove();
        this.undelegateEvents()
      },
      getElement: function() {
        return this.element
      },
      hide: function() {
        this.getElement().detach();
        this.undelegateEvents();
        return this
      },
      show: function(container) {
        $(container).append(this.getElement());
        this.delegateEvents();
        return this
      },
      delegateEvents: function() {
        var self = this;
        $(document).on("click" + this.ns,
        function() {
          if (_.isFunction(self.clickHandler)) {
            self.clickHandler.apply(this, arguments)
          }
          self.hide()
        }).on("contextmenu" + this.ns,
        function() {
          if (_.isFunction(self.contextmenuHandler)) {
            self.contextmenuHandler.apply(this, arguments)
          }
        });
        return this
      },
      undelegateEvents: function() {
        $(document).off(this.ns);
        return this
      }
    });
    Submenu = AbstractMenu.extend({
      initialize: function(options, contextmenuElement) {
        this.contextmenuElement = contextmenuElement;
        AbstractMenu.prototype.initialize.apply(this, arguments)
      },
      createElement: function() {
        var element = $("<li />", {
          "class": ["submenu-item", "menu-item", this.options.prefix + "submenu-item"].join(" "),
          "aria-expanded": "false",
          "aria-haspopup": "true",
          "aria-labelledby": "submenu-item-label-" + this.id,
          role: "menuitem",
          tabindex: -1
        });
        this.label = $("<span />", {
          id: "submenu-item-label-" + this.id,
          text: this.options.label
        }).appendTo(element);
        this.list = $("<ol />", {
          "class": ["submenu", this.options.prefix + "submenu"].join(" "),
          role: "menu"
        }).appendTo(element);
        return element
      },
      appendContent: function(content) {
        this.list.append(content);
        return this
      },
      setLabel: function(label) {
        this.label.text(label);
        return this
      },
      openKeyboard: function() {
        if (this.hasChildren()) {
          this.open();
          this.getFirstChild().focus()
        }
        return this
      },
      keyDownHandler: function(event) {
        var KEY = $.ui.keyCode,
        keyCode = event.keyCode;
        switch (keyCode) {
        case KEY.LEFT:
          this.close().focus();
          event.stopPropagation();
          break;
        case KEY.RIGHT:
        case KEY.ENTER:
        case KEY.SPACE:
          this.openKeyboard();
          event.stopPropagation();
          break
        }
        return false
      },
      open: function() {
        AbstractMenu.prototype.open.call(this);
        this.getElement().attr({
          "aria-expanded": "true"
        });
        this.position();
        return this
      },
      close: function() {
        AbstractMenu.prototype.close.call(this);
        this.getElement().attr({
          "aria-expanded": "false"
        });
        return this
      },
      position: function() {
        this.list.position({
          my: "left top",
          at: "right top",
          of: this.getElement(),
          collision: "flipfit flipfit",
          within: this.contextmenuElement
        });
        return this
      },
      mouseOverHandler: function() {
        clearTimeout(this.timer);
        this.timer = setTimeout(this.open.bind(this), 200);
        this.focus()
      },
      mouseLeaveHandler: function() {
        clearTimeout(this.timer);
        this.timer = setTimeout(this.close.bind(this), 200);
        this.focus()
      }
    });
    MenuItem = AbstractItem.extend({
      createElement: function() {
        var classNames = ["menu-item", this.options.prefix + "menu-item", this.options.isSelected ? "is-selected": ""].join(" ");
        return $("<li />", {
          "class": classNames,
          "aria-selected": this.options.isSelected ? "true": "false",
          role: "menuitem",
          tabindex: -1,
          text: this.options.label
        })
      },
      populateElement: function() {
        return this.getElement()
      },
      delegateEvents: function() {
        this.bindEvent(this.getElement(), "click keydown contextmenu mouseover", this.itemHandler.bind(this));
        return this
      },
      setLabel: function(label) {
        this.getElement().text(label);
        return this
      },
      select: function(event) {
        this.options.callback.call(this, event, this, this.options);
        this.getElement().addClass("is-selected").attr({
          "aria-selected": "true"
        });
        _.invoke(this.getSiblings(), "unselect");
        this.getRoot().close();
        return this
      },
      unselect: function() {
        this.getElement().removeClass("is-selected").attr({
          "aria-selected": "false"
        });
        return this
      },
      itemHandler: function(event) {
        event.preventDefault();
        switch (event.type) {
        case "contextmenu":
        case "click":
          this.select();
          break;
        case "mouseover":
          this.focus();
          event.stopPropagation();
          break;
        case "keydown":
          this.keyDownHandler.call(this, event, this);
          break
        }
      },
      keyDownHandler: function(event) {
        var KEY = $.ui.keyCode,
        keyCode = event.keyCode;
        switch (keyCode) {
        case KEY.RIGHT:
          event.stopPropagation();
          break;
        case KEY.ENTER:
        case KEY.SPACE:
          this.select();
          event.stopPropagation();
          break
        }
        return false
      }
    });
    return function(state, i18n) {
      var speedCallback = function(event, menuitem, options) {
        var speed = parseFloat(options.label);
        state.videoCommands.execute("speed", speed)
      },
      options = {
        items: [{
          label: i18n["Play"],
          callback: function() {
            state.videoCommands.execute("togglePlayback")
          },
          initialize: function(menuitem) {
            state.el.on({
              play: function() {
                menuitem.setLabel(i18n["Pause"])
              },
              pause: function() {
                menuitem.setLabel(i18n["Play"])
              }
            })
          }
        },
        {
          label: state.videoVolumeControl.getMuteStatus() ? i18n["Unmute"] : i18n["Mute"],
          callback: function() {
            state.videoCommands.execute("toggleMute")
          },
          initialize: function(menuitem) {
            state.el.on({
              volumechange: function() {
                if (state.videoVolumeControl.getMuteStatus()) {
                  menuitem.setLabel(i18n["Unmute"])
                } else {
                  menuitem.setLabel(i18n["Mute"])
                }
              }
            })
          }
        },
        {
          label: i18n["Fill browser"],
          callback: function() {
            state.videoCommands.execute("toggleFullScreen")
          },
          initialize: function(menuitem) {
            state.el.on({
              fullscreen: function(event, isFullscreen) {
                if (isFullscreen) {
                  menuitem.setLabel(i18n["Exit full browser"])
                } else {
                  menuitem.setLabel(i18n["Fill browser"])
                }
              }
            })
          }
        },
        {
          label: i18n["Speed"],
          items: _.map(state.speeds,
          function(speed) {
            var isSelected = speed === state.speed;
            return {
              label: speed + "x",
              callback: speedCallback,
              speed: speed,
              isSelected: isSelected
            }
          }),
          initialize: function(menuitem) {
            state.el.on({
              speedchange: function(event, speed) {
                var item = menuitem.getChildren().filter(function(item) {
                  return item.options.speed === speed
                })[0];
                if (item) {
                  item.select()
                }
              }
            })
          }
        }]
      };
      $.fn.contextmenu = function(container, options) {
        return this.each(function() {
          $(this).data("contextmenu", new Menu(options, this, container))
        })
      };
      if (!state.isYoutubeType()) {
        state.el.find("video").contextmenu(state.el, options);
        state.el.on("destroy",
        function() {
          var contextmenu = $(this).find("video").data("contextmenu");
          if (contextmenu) {
            contextmenu.destroy()
          }
        })
      }
      return $.Deferred().resolve().promise()
    }
  })
})(RequireJS.define); (function(define) {
  "use strict";
  define("video/10_commands.js", [],
  function() {
    var VideoCommands, Command, playCommand, pauseCommand, togglePlaybackCommand, toggleMuteCommand, toggleFullScreenCommand, setSpeedCommand, skipCommand;
    VideoCommands = function(state, i18n) {
      if (! (this instanceof VideoCommands)) {
        return new VideoCommands(state, i18n)
      }
      _.bindAll(this, "destroy");
      this.state = state;
      this.state.videoCommands = this;
      this.i18n = i18n;
      this.commands = [];
      this.initialize();
      return $.Deferred().resolve().promise()
    };
    VideoCommands.prototype = {
      destroy: function() {
        this.state.el.off("destroy", this.destroy);
        delete this.state.videoCommands
      },
      initialize: function() {
        this.commands = this.getCommands();
        this.state.el.on("destroy", this.destroy)
      },
      execute: function(command) {
        var args = [].slice.call(arguments, 1) || [];
        if (_.has(this.commands, command)) {
          this.commands[command].execute.apply(this, [this.state].concat(args))
        } else {
          console.log('Command "' + command + '" is not available.')
        }
      },
      getCommands: function() {
        var commands = {},
        commandsList = [playCommand, pauseCommand, togglePlaybackCommand, toggleMuteCommand, toggleFullScreenCommand, setSpeedCommand, skipCommand];
        _.each(commandsList,
        function(command) {
          commands[command.name] = command
        },
        this);
        return commands
      }
    };
    Command = function(name, execute) {
      this.name = name;
      this.execute = execute
    };
    playCommand = new Command("play",
    function(state) {
      state.videoPlayer.play()
    });
    pauseCommand = new Command("pause",
    function(state) {
      state.videoPlayer.pause()
    });
    togglePlaybackCommand = new Command("togglePlayback",
    function(state) {
      if (state.videoPlayer.isPlaying()) {
        pauseCommand.execute(state)
      } else {
        playCommand.execute(state)
      }
    });
    toggleMuteCommand = new Command("toggleMute",
    function(state) {
      state.videoVolumeControl.toggleMute()
    });
    toggleFullScreenCommand = new Command("toggleFullScreen",
    function(state) {
      state.videoFullScreen.toggle()
    });
    setSpeedCommand = new Command("speed",
    function(state, speed) {
      state.videoSpeedControl.setSpeed(state.speedToString(speed))
    });
    skipCommand = new Command("skip",
    function(state, doNotShowAgain) {
      if (doNotShowAgain) {
        state.videoBumper.skipAndDoNotShowAgain()
      } else {
        state.videoBumper.skip()
      }
    });
    return VideoCommands
  })
})(RequireJS.define); (function(require, $) {
  "use strict";
  window.Video = function() {
    var tempCallStack = [];
    return function(element, processTempCallStack) {
      if (processTempCallStack) {
        $.each(tempCallStack,
        function(index, element) {
          window.Video(element)
        });
        return
      }
      tempCallStack.push(element);
      return {}
    }
  } ();
  require(["video/00_video_storage.js", "video/01_initialize.js", "video/025_focus_grabber.js", "video/035_video_accessible_menu.js", "video/04_video_control.js", "video/04_video_full_screen.js", "video/05_video_quality_control.js", "video/06_video_progress_slider.js", "video/07_video_volume_control.js", "video/08_video_speed_control.js", "video/09_video_caption.js", "video/09_play_placeholder.js", "video/09_play_pause_control.js", "video/09_play_skip_control.js", "video/09_skip_control.js", "video/09_bumper.js", "video/09_save_state_plugin.js", "video/09_events_plugin.js", "video/09_events_bumper_plugin.js", "video/09_poster.js", "video/10_commands.js", "video/095_video_context_menu.js"],
  function(VideoStorage, initialize, FocusGrabber, VideoAccessibleMenu, VideoControl, VideoFullScreen, VideoQualityControl, VideoProgressSlider, VideoVolumeControl, VideoSpeedControl, VideoCaption, VideoPlayPlaceholder, VideoPlayPauseControl, VideoPlaySkipControl, VideoSkipControl, VideoBumper, VideoSaveStatePlugin, VideoEventsPlugin, VideoEventsBumperPlugin, VideoPoster, VideoCommands, VideoContextMenu) {
    var youtubeXhr = null,
    oldVideo = window.Video;
    window.Video = function(element) {
      var el = $(element).find(".video"),
      id = el.attr("id").replace(/video_/, ""),
      storage = VideoStorage("VideoState", id),
      bumperMetadata = el.data("bumper-metadata"),
      mainVideoModules = [FocusGrabber, VideoControl, VideoPlayPlaceholder, VideoPlayPauseControl, VideoProgressSlider, VideoSpeedControl, VideoVolumeControl, VideoQualityControl, VideoFullScreen, VideoCaption, VideoCommands, VideoContextMenu, VideoSaveStatePlugin, VideoEventsPlugin],
      bumperVideoModules = [VideoControl, VideoPlaySkipControl, VideoSkipControl, VideoVolumeControl, VideoCaption, VideoCommands, VideoSaveStatePlugin, VideoEventsBumperPlugin],
      state = {
        el: el,
        id: id,
        metadata: el.data("metadata"),
        storage: storage,
        options: {},
        youtubeXhr: youtubeXhr,
        modules: mainVideoModules
      };
      var getBumperState = function(metadata) {
        var bumperState = $.extend(true, {
          el: el,
          id: id,
          storage: storage,
          options: {},
          youtubeXhr: youtubeXhr
        },
        {
          metadata: metadata
        });
        bumperState.modules = bumperVideoModules;
        bumperState.options = {
          SaveStatePlugin: {
            events: ["language_menu:change"]
          }
        };
        return bumperState
      };
      var player = function(state) {
        return function() {
          _.extend(state.metadata, {
            autoplay: true,
            focusFirstControl: true
          });
          initialize(state, element)
        }
      };
      new VideoAccessibleMenu(el, {
        storage: storage,
        saveStateUrl: state.metadata.saveStateUrl
      });
      if (bumperMetadata) {
        new VideoPoster(el, {
          poster: el.data("poster"),
          onClick: _.once(function() {
            var mainVideoPlayer = player(state),
            bumper,
            bumperState;
            if (storage.getItem("isBumperShown")) {
              mainVideoPlayer()
            } else {
              bumperState = getBumperState(bumperMetadata);
              bumper = new VideoBumper(player(bumperState), bumperState);
              state.bumperState = bumperState;
              bumper.getPromise().done(function() {
                delete state.bumperState;
                mainVideoPlayer()
              })
            }
          })
        })
      } else {
        initialize(state, element)
      }
      if (!youtubeXhr) {
        youtubeXhr = state.youtubeXhr
      }
      el.data("video-player-state", state);
      var onSequenceChange = function onSequenceChange() {
        if (state && state.videoPlayer) {
          state.videoPlayer.destroy()
        }
        $(".sequence").off("sequence:change", onSequenceChange)
      };
      $(".sequence").on("sequence:change", onSequenceChange);
      return state
    };
    window.Video.clearYoutubeXhr = function() {
      youtubeXhr = null
    };
    window.Video.loadYouTubeIFrameAPI = initialize.prototype.loadYouTubeIFrameAPI;
    oldVideo(null, true)
  })
})(window.RequireJS.require, window.jQuery);

