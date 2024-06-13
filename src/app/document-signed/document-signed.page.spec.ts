import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentSignedPage } from './document-signed.page';

describe('DocumentSignedPage', () => {
  let component: DocumentSignedPage;
  let fixture: ComponentFixture<DocumentSignedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentSignedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
