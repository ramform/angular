import { TestHeroPage } from './app.po';

describe('test-hero App', function() {
  let page: TestHeroPage;

  beforeEach(() => {
    page = new TestHeroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
