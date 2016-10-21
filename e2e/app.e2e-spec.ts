import { TourOfHeroes3Page } from './app.po';

describe('tour-of-heroes3 App', function() {
  let page: TourOfHeroes3Page;

  beforeEach(() => {
    page = new TourOfHeroes3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
