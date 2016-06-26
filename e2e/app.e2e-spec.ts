import { ViseoscopePage } from './app.po';

describe('viseoscope App', function() {
  let page: ViseoscopePage;

  beforeEach(() => {
    page = new ViseoscopePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
