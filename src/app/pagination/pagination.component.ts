import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Page} from '../page';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() page: Page<any>;
  @Output() paginate = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  pageNumbers(currentPage: number, totalPages: number, {min = 1, length = 5} = {}): number[] {
    if (length > totalPages) { length = totalPages; }

    let start = currentPage - Math.floor(length / 2);
    start = Math.max(start, min);
    start = Math.min(start, min + totalPages - length);

    const pages = Array.from({length}, (el, i) => start + i);
    if (pages.indexOf(totalPages) === -1) {
      pages.push(totalPages);
    } else if (length < totalPages) {
      pages.unshift(pages[0] - 1);
    }
    return pages;
  }

  onPageClick(pageNumber: number): void {
    this.paginate.emit(pageNumber);
  }

  isLastPage(): boolean {
    return this.page.page === this.page.totalPages;
  }

  isFirstPage(): boolean {
    return this.page.page === 1;

  }

  onNextPage(): void {
    this.paginate.emit(this.page.page + 1);
  }

  onPreviousPage(): void {
    this.paginate.emit(this.page.page - 1);
  }
}
