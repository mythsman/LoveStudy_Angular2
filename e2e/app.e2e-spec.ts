import { LovestudyPage } from './app.po';

describe('lovestudy App', function() {
  let page: LovestudyPage;

  beforeEach(() => {
    page = new LovestudyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
