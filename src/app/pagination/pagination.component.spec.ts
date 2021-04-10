import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PaginationComponent} from './pagination.component';
import {assembleI18nBoundString} from '@angular/compiler/src/render3/view/i18n/util';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should allow to navigate to pages 1 2 3 if active page is 1 with total of 3 pages ', () => {
    expect(component.pageNumbers(1, 3)).toEqual([1, 2, 3]);
  });

  it('should allow to navigate to pages 1 2 3 4 5 777 if active page is 1 with total of 777 pages ', () => {
    expect(component.pageNumbers(1, 777)).toEqual([1, 2, 3, 4, 5, 777]);
  });

  it('should allow to navigate to pages 1 2 3 4 5 777 if active page is 2 with total of 777 pages ', () => {
    expect(component.pageNumbers(2, 777)).toEqual([1, 2, 3, 4, 5, 777]);
  });

  it('should allow to navigate to pages 1 2 3 4 5 777 if active page is 3 with total of 777 pages ', () => {
    expect(component.pageNumbers(3, 777)).toEqual([1, 2, 3, 4, 5, 777]);
  });

  it('should allow to navigate to pages 2 3 4 5 6 777 if active page is 4 with total of 777 pages ', () => {
    expect(component.pageNumbers(4, 777)).toEqual([2, 3, 4, 5, 6, 777]);
  });

  it('should allow to navigate to pages  8 9 10 11 12 777 if active page is 10 with total of 777 pages ', () => {
    expect(component.pageNumbers(10, 777)).toEqual([8, 9, 10, 11, 12, 777]);
  });

  it('should allow to navigate to pages  772 773 774 775 776 777 if active page is 777 with total of 777 pages ', () => {
    expect(component.pageNumbers(777, 777)).toEqual([772, 773, 774, 775, 776, 777]);
  });

  it('should allow to navigate to pages  772 773 774 775 776 777 if active page is 776 with total of 777 pages ', () => {
    expect(component.pageNumbers(776, 777)).toEqual([772, 773, 774, 775, 776, 777]);
  });

  it('should allow to navigate to pages  772 773 774 775 776 777 if active page is 774 with total of 777 pages ', () => {
    expect(component.pageNumbers(774, 777)).toEqual([772, 773, 774, 775, 776, 777]);
  });

  it('should allow to navigate to pages  771 772 773 774 775 777 if active page is 773 with total of 777 pages ', () => {
    expect(component.pageNumbers(773, 777)).toEqual([771, 772, 773, 774, 775, 777]);
  });

  it('should disable next button when on last page', () => {
    component.page = {contents: undefined, page: 8, totalPages: 8, totalRecords: 64};
    expect(component.isLastPage()).toBeTrue();
  });

  it('should enable previous button when not on first page', () => {
    component.page = {contents: undefined, page: 2, totalPages: 8, totalRecords: 64};

    fixture.detectChanges();

    expect(component.isFirstPage()).toBeFalse();
    expect(fixture.nativeElement.querySelector('a').classList.contains('active')).toBeTrue();
  });

  it('should enable next button when not on last page', () => {
    component.page = {contents: undefined, page: 2, totalPages: 8, totalRecords: 64};

    fixture.detectChanges();

    expect(component.isLastPage()).toBeFalse();
    expect(fixture.nativeElement.querySelector('a[aria-label=Next]').classList.contains('active')).toBeTrue();
  });

  it('should disable next button when on last page', () => {
    component.page = {contents: undefined, page: 8, totalPages: 8, totalRecords: 64};

    fixture.detectChanges();

    expect(component.isLastPage()).toBeTrue();
    expect(fixture.nativeElement.querySelector('a[aria-label=Next]').classList.contains('active')).toBeFalse();
  });
});
