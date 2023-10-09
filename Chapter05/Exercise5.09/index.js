var curry = function (fun) {
  if (typeof fun != 'function') return;
  var args = Array.prototype.slice.call(arguments);
  args.shift();
};
