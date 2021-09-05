import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sighisoara Festival';

  constructor(public translate: TranslateService) {
    // list of available languages
    translate.addLangs(['en', 'ro']);

    // language that will be used by default
    translate.setDefaultLang('en');
  }

  /**
   * Translate the language constants to the given language
   * @param lang
   */
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
