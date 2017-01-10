var mf = document.querySelectorAll('[data-mailto-fairy]');
mf.forEach(function (item) {
  var info = item.getAttribute('data-mailto-fairy');
  info = JSON.parse(info);
  var fields = '';
  for (var i in info) {
    if (i === 'user' || i === 'host') continue;
    fields += i + '=' + encodeURIComponent(info[i]) + '&';
  }
  fields = fields.replace(/&$/, '');
  var a = document.createElement('a');
  for (var i = 0, att; att = item.attributes[i]; i++) {
      if (att.name === 'data-mailto-fairy') continue;
      a.setAttribute(att.name, att.value);
  }
  a.href = 'mailto:' + info.user + '@' + info.host + (fields ? '?' + fields : '');
  a.appendChild(document.createTextNode(item.innerText || (info.user + '@' + info.host)));
  item.parentNode.replaceChild(a, item);
});
