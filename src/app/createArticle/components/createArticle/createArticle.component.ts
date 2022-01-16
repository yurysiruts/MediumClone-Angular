import { Component } from '@angular/core';

@Component({
  selector: 'app-create-article',
  templateUrl: './createArticle.component.html',
  styleUrls: ['./createArticle.component.scss'],
})
export class CreateArticleComponent {
  initialValues = {
    title: 'Foo',
    description: 'Bar',
    body: 'body',
    tagList: [1, 2, 3],
  };

  onSubmit(res: any): void {
    console.log('onSubmit is parent', res);
  }
}
