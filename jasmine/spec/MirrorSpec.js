describe('Mirror', function () {
  it('should reflect all methods of an object into another', function () {
    var source        = { id: 1 }
        , dest        = { name: 'Spec' };

    Mirror.reflect(source, dest);

    expect(dest.id).toBeDefined();
  });

  it('should reflect even functions', function () {
    var source = {
        roar: function () {
          console.log(this.name + ' is roaring.');
        }
      }
    , dest = { name: 'Spec' };

    Mirror.reflect(source, dest);

    expect(dest.roar).toBeDefined();
  });
});