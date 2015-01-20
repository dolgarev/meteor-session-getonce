Session.getOnce = function(key) {
  var v = Session.get(key);
  return Session.set(key, undefined), v;
};

Session.get_once = Session.getOnce;