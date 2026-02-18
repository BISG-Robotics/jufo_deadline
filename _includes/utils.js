// Borrowed from https://github.com/moment/moment-timezone/issues/167
// Adds support for time zones 'UTC-12'..'UTC+12'
function addUtcTimeZones() {
  // Moment.js uses the IANA timezone database, which supports generic time zones like 'Etc/GMT+1'.
  // However, the signs for these time zones are inverted compared to ISO 8601.
  // For more details, see https://github.com/moment/moment-timezone/issues/167
  for (let offset = -12; offset <= 12; offset++) {
    const posixSign = offset <= 0 ? "+" : "-";
    const isoSign = offset >= 0 ? "+" : "-";
    const link = `Etc/GMT${posixSign}${Math.abs(
      offset
    )}|UTC${isoSign}${Math.abs(offset)}`;
    moment.tz.link(link);
  }
}

function update_filtering(data) {
  var page_url = "{{site.baseurl}}";
  store.set("{{site.domain}}-subs", data.subs);

  // 1. 确保每个会议条目按是否过期分别在 coming_confs 和 past_confs 中
  $(".ConfItem").each(function() {
    var $item = $(this);
    var diff = parseInt($item.attr('diff')) || 0;
    if ($item.hasClass("past") || diff > 0) {
      $("#past_confs").append($item);
    } else {
      $("#coming_confs").append($item);
    }
  });

  // 2. 类别过滤
  $(".ConfItem").hide();
  for (const j in data.all_subs) {
    const s = data.all_subs[j];
    const identifier = "." + s + "-conf";
    if (data.subs.includes(s)) {
      $(identifier).show();
    }
  }

  if (subs.length == 0) {
    window.history.pushState("", "", page_url);
  } else {
    window.history.pushState("", "", page_url + "/?sub=" + data.subs.join());
  }
}

function createCalendarFromObject(data) {
  return createCalendar({
    options: {
      class: "calendar-obj",

      // You can pass an ID. If you don't, one will be generated for you
      id: data.id,
    },
    data: {
      // Event title
      title: data.title,

      // Event start date
      start: data.date,

      // Event duration
      duration: 60,
    },
  });
}
