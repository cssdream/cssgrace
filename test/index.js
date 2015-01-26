var fs = require('fs')

var test = require('tape')

var postcss = require('postcss')
var plugin = require('..')

function filename(name) { return 'test/' + name + '.css' }
function read(name) { return fs.readFileSync(name, 'utf8') }

function compareFixtures(t, name, msg, opts, postcssOpts) {
  postcssOpts = postcssOpts || {}
  postcssOpts.from = filename('fixtures/' + name)
  opts = opts || {}
  var actual = postcss().use(plugin).process(read(postcssOpts.from), postcssOpts).css

  var expected = read(filename('fixtures/' + name + '-out'))
  fs.writeFile(filename('fixtures/' + name + '-real'), actual)
  t.equal(actual.trim(), expected.trim(), msg)
}

test('remove display', function(t) {
  compareFixtures(t, 'remove-display', 'Should be remove display property')
  t.end()
})

test('remove colons', function(t) {
  compareFixtures(t, 'remove-colons', 'Should be remove colons')
  t.end()
})

test('position center mixin', function(t) {
  compareFixtures(t, 'position-center', 'Should be transform')
  t.end()
})

test('ellipsis mixin', function(t) {
  compareFixtures(t, 'ellipsis', 'Should be transform')
  t.end()
})

test('resize mixin', function(t) {
  compareFixtures(t, 'resize', 'Should be transform')
  t.end()
})

test('clearfix mixin', function(t) {
  compareFixtures(t, 'clearfix', 'Should be transform')
  t.end()
})

test('IE opacity hack', function(t) {
  compareFixtures(t, 'ie-opacity', 'Should be added filter')
  t.end()
})

test('IE rgba hack', function(t) {
  compareFixtures(t, 'bg-rgba', 'Should be added filter and :root selector')
  t.end()
})

test('inline-block hack', function(t) {
  compareFixtures(t, 'inline-block', 'Should be added *display: inline and *zoom: 1')
  t.end()
})

test('image set mixin', function(t) {
  compareFixtures(t, 'image-set', 'Should be transform')
  t.end()
})

test('image size', function(t) {
  compareFixtures(t, 'image-size', 'Should be transform')
  t.end()
})

test('comment', function(t) {
  compareFixtures(t, 'comment', 'Should be keep the comments on the current line')
  t.end()
})

test('image-size-multiple', function(t) {
  compareFixtures(t, 'image-size-multiple', 'Should be transform')
  t.end()
})

test('base64-image-size', function (t) {
  compareFixtures(t, 'base64-image-size', 'Should be transform')
  t.end();
});


