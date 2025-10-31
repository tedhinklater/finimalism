"use strict";
(self.webpackChunk = self.webpackChunk || []).push([[8372], {
  5939: function(a, e, t) {
    t.r(e),
    e.default = `
<div id="indexPage" style="outline:0" data-role="page" data-dom-cache="true"
  class="page homePage libraryPage allLibraryPage backdropPage pageWithAbsoluteTabs withTabs"
  data-backdroptype="movie,series,book">

  <style>
    .spotlightiframe {
      width: 95vw;
      height: 23.5em;
      display: block;
      border: 0px solid #000;
      margin: 0 auto;
      margin-bottom: 0em;
      margin-top: 1em;
    }
    @media (max-width: 1000px) and (orientation: portrait) {
      .spotlightiframe { height: 25em; margin-bottom: -8em; }
    }
    @media (max-width: 1000px) and (orientation: landscape) {
      .spotlightiframe { height: 26em; margin-bottom: -7em; }
    }
    @media (max-width: 421px) and (orientation: portrait) {
      .spotlightiframe { height: 17em !important; margin-bottom: -3em; }
    }
    @media (max-height: 421px) and (orientation: landscape) {
      .spotlightiframe { height: 21em !important; }
    }
  </style>

  <iframe class="spotlightiframe"
    src="/web/ui/spotlight.html"
    tabindex="0"
    style="width:100vw;height:30em;display:block;border:0;margin:-3.2em auto -2em auto;z-index:100;position:relative;">
  </iframe>

  <div class="tabContent pageTabContent" id="homeTab" data-index="0">
    <div class="sections"></div>
  </div>
  <div class="tabContent pageTabContent" id="favoritesTab" data-index="1">
    <div class="sections"></div>
  </div>
</div>`;
  }
}]);
