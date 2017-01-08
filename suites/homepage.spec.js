describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    var angularHomepage = new AngularHomepage();
    angularHomepage.get();

    angularHomepage.setName('Mateusz');

    expect(angularHomepage.getGreeting()).toEqual('Hello Mateusz!');
  });
});
