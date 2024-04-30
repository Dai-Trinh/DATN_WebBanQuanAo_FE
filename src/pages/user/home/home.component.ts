import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('firstHorizontalScrollDiv') firstHorizontalScrollDiv!: ElementRef;
  //@ViewChild('secondHorizontalScrollDiv') secondHorizontalScrollDiv: ElementRef;


  arrDem: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  slideClass: string[] = [];

  ngOnInit(): void {
    this.slideClass[0] = "banner-slide banner-fade"
    this.slideClass[1] = "banner-slide"
    setInterval(() => {
      this.nextSlide();
    }, 10000); // Thay đổi ảnh sau mỗi 3 giây
  }

  nextSlide() {
    const currentSlideIndex = this.slideClass.indexOf('banner-slide banner-fade');
    const nextSlideIndex = (currentSlideIndex + 1) % this.slideClass.length;
    this.slideClass[currentSlideIndex] = 'banner-slide';
    this.slideClass[nextSlideIndex] = 'banner-slide banner-fade';
  }

  constructor(private renderer: Renderer2) { }

  isScrolled = false

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScrolled = window.scrollY > 150;
    // Thực hiện các hành động khi trang được cuộn
    console.log('Trang đã cuộn!');
  }


  onScrollHorizontal(event: MouseEvent) {
    // Kiểm tra hướng scroll và thực hiện xử lý tương ứng
    if (event.target === this.firstHorizontalScrollDiv.nativeElement) {
      this.renderer.setProperty(this.firstHorizontalScrollDiv.nativeElement, 'scrollLeft', event.pageX);
      console.log('Trang đã cuộn Trái!');
    }
    // } else if (event.target === this.secondHorizontalScrollDiv.nativeElement) {
    //   // Nếu sự kiện scroll được kích hoạt trên thẻ div thứ hai
    //   console.log('Đã cuộn div thứ hai');
    // }
  }
}
