if (!(Session.getOnce && Session.getOnce.constructor && Session.getOnce.constructor === Function)) {
  Session.getOnce = function(key) {
    var v = Session.get(key);
    return Session.set(key, void 0), v;
  };
}
