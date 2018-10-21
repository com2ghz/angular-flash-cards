import { AngularFlashCardsPage } from './app.po';

describe('angular-flash-cards App', function() {
  let page: AngularFlashCardsPage;

  beforeEach(() => {
    page = new AngularFlashCardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
