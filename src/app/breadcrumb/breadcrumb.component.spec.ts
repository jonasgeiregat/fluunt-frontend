import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BreadcrumbComponent} from './breadcrumb.component';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {of} from 'rxjs';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadcrumbComponent],
      providers: [
        {
          provide: Router,
          useValue: {
            events: of(new NavigationEnd(0, '/foes/123/bars/456', null))
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            root: {
              routeConfig: {
                data: {breadcrumb: 'foo'},
                path: 'foo',
              },
              firstChild: {
                routeConfig: {
                  data: {breadcrumb: 'bar'},
                  path: 'bar',
                },
              }
            }
          }
        }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render breadcrumbs in correct order', () => {
    const breadcrumbs = [...fixture.nativeElement.querySelectorAll('a')].map(a => a.textContent);
    expect(breadcrumbs[0]).toBe('foo');
    expect(breadcrumbs[1]).toBe('bar');
  });
});
