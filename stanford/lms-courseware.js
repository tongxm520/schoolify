(function() {
  this.Courseware = function() {
    Courseware.prefix = "";
    function Courseware() {
      Logger.bind();
      this.render()
    }
    Courseware.start = function() {
      return new Courseware
    };
    Courseware.prototype.render = function() {
      XBlock.initializeBlocks($(".course-content"));
      return $(".course-content .histogram").each(function() {
        var histg, id;
        id = $(this).attr("id").replace(/histogram_/, "");
        try {
          histg = new Histogram(id, $(this).data("histogram"))
        } catch(error) {
          histg = error;
          if (typeof console !== "undefined" && console !== null) {
            console.log(error)
          }
        }
        return histg
      })
    };
    return Courseware
  } ()
}).call(this); (function() {
  this.Histogram = function() {
    function Histogram(id, rawData) {
      this.id = id;
      this.rawData = rawData;
      this.xTicks = [];
      this.yTicks = [];
      this.data = [];
      this.calculate();
      this.render()
    }
    Histogram.prototype.calculate = function() {
      var count, log_count, score, _i, _len, _ref, _ref1, _results;
      _ref = this.rawData;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        _ref1 = _ref[_i],
        score = _ref1[0],
        count = _ref1[1];
        if (score === null) {
          continue
        }
        log_count = Math.log(count + 1);
        this.data.push([score, log_count]);
        this.xTicks.push([score, score.toString()]);
        _results.push(this.yTicks.push([log_count, count.toString()]))
      }
      return _results
    };
    Histogram.prototype.render = function() {
      return $.plot($("#histogram_" + this.id), [{
        data: this.data,
        bars: {
          show: true,
          align: "center",
          lineWidth: 0,
          fill: 1
        },
        color: "#b72121"
      }], {
        xaxis: {
          min: -1,
          max: Math.max.apply(Math, $.map(this.xTicks,
          function(data) {
            return data[0] + 1
          })),
          ticks: this.xTicks,
          tickLength: 0
        },
        yaxis: {
          min: 0,
          max: Math.max.apply(Math, $.map(this.yTicks,
          function(data) {
            return data[0] * 1.1
          })),
          ticks: this.yTicks,
          labelWidth: 50
        }
      })
    };
    return Histogram
  } ()
}).call(this);
var nothingtoseehere;
$(document).ajaxError(function(event, jXHR) {
  if (jXHR.status === 403 && jXHR.responseText === "Unauthenticated") {
    var message = gettext("You have been logged out of your edX account. " + "Click Okay to log in again now. " + "Click Cancel to stay on this page " + "(you must log in again to save your work).");
    if (window.confirm(message)) {
      var currentLocation = window.location.pathname;
      window.location.href = "/login?next=" + encodeURIComponent(currentLocation)
    }
  }
}); (function() {
  var _this = this;
  this.Tab = function() {
    function Tab(id, items) {
      var _this = this;
      this.id = id;
      this.items = items;
      this.onShow = function(element, ui) {
        return Tab.prototype.onShow.apply(_this, arguments)
      };
      this.el = $("#tab_" + id);
      this.render()
    }
    Tab.prototype.$ = function(selector) {
      return $(selector, this.el)
    };
    Tab.prototype.render = function() {
      var _this = this;
      $.each(this.items,
      function(index, item) {
        var tab;
        tab = $("<a>").attr({
          href: "#" + _this.tabId(index)
        }).html(item.title);
        _this.$(".navigation").append($("<li>").append(tab));
        return _this.el.append($("<section>").attr({
          id: _this.tabId(index)
        }))
      });
      return this.el.tabs({
        show: this.onShow
      })
    };
    Tab.prototype.onShow = function(element, ui) {
      this.$("section.ui-tabs-hide").html("");
      this.$("#" + this.tabId(ui.index)).html(this.items[ui.index]["content"]);
      return this.el.trigger("contentChanged")
    };
    Tab.prototype.tabId = function(index) {
      return "tab-" + this.id + "-" + index
    };
    return Tab
  } ()
}).call(this);
