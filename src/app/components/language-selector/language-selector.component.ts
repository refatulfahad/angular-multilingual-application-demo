import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent {
  constructor(private translocoService: TranslocoService) { }
  public languagesList: Array<
    Record<'imgUrl' | 'code' | 'name' | 'shorthand', string>
  > = [
      {
        imgUrl: '/assets/images/english.png',
        code: 'en',
        name: 'English',
        shorthand: 'ENG',
      },
      {
        imgUrl: '/assets/images/bangla.png',
        code: 'bn',
        name: 'Bangladesh',
        shorthand: 'BEN',
      },
      {
        imgUrl: '/assets/images/arabic.png',
        code: 'ar',
        name: 'Arabic',
        shorthand: 'ARA',
      },
    ];
  public changeLanguage(languageCode: string): void {
    this.translocoService.setActiveLang(languageCode);
    languageCode === 'ar'
      ? (document.body.style.direction = 'rtl')
      : (document.body.style.direction = 'ltr');
  }
}
