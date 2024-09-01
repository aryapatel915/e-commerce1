import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';

interface SidebarItem {
  label: string;
  routerLink: string;
  strokeIcon: string;
  fillIcon: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  childNavOpen: boolean = false;
  Isadmin : boolean = true;
  isSidebarOpen: boolean = false;
  scrollbarVisible: boolean = false;
  searchText: string = '';
  sidebarItems: SidebarItem[]  = [
    { label: 'carousel', routerLink: '/admin/carousel', strokeIcon: './assets/svg/icon-sprite.svg#stroke-home', fillIcon: './assets/svg/icon-sprite.svg#stroke-home' },
    // { label: 'About', routerLink: '/modules/about', strokeIcon: '../assets/svg/icon-sprite.svg#stroke-social', fillIcon: '../assets/svg/icon-sprite.svg#stroke-social' },
    // { label: 'Contact', routerLink: '/modules/contact', strokeIcon: '../assets/svg/icon-sprite.svg#stroke-contact', fillIcon: '../assets/svg/icon-sprite.svg#stroke-contact' },
    // { label: 'User details', routerLink: '/modules/userdetails', strokeIcon: '../assets/svg/icon-sprite.svg#stroke-user', fillIcon: '../assets/svg/icon-sprite.svg#stroke-user' },
    // { label: 'Add-User', routerLink: '/modules/adduser', strokeIcon: '../assets/svg/icon-sprite.svg#stroke-user', fillIcon: '../assets/svg/icon-sprite.svg#stroke-user' },
    // { label: 'Calendar', routerLink: '/modules/calendar', strokeIcon: '../assets/svg/icon-sprite.svg#stroke-calendar', fillIcon: '../assets/svg/icon-sprite.svg#stroke-calendar' },
    // { label: 'Timezone-Map', routerLink: '/modules/timezonemap', strokeIcon: '../assets/svg/icon-sprite.svg#stroke-maps', fillIcon: '../assets/svg/icon-sprite.svg#stroke-maps' }
];


filteredSidebarItems: SidebarItem[] = [...this.sidebarItems]; 

routerMo : any;
searchArray : any[] = []

serachForm !: FormGroup
  constructor(public router: Router,private fb : FormBuilder,private ngZone: NgZone, private cdRef: ChangeDetectorRef) {
    this.routerMo = router.url
    console.log('this.routerMo: ', this.routerMo);
   }


  ngOnInit() {
    this.filteredSidebarItems = this.sidebarItems;
    this.serachForm = this.fb.group({
      searchValue : []
    });
    this.serachForm.get('searchValue')?.valueChanges.subscribe(value => this.searchFunction(value));

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects.split('/').pop();
      }
    });
  }
  
  



  toggleChildNav() {
    this.childNavOpen = !this.childNavOpen;
  }
  


    searchFunction(value: string){
      if (value) {
        this.filteredSidebarItems = this.sidebarItems.filter(item =>
          item.label.toLowerCase().includes(value.toLowerCase())
        );
       
      } else {
        this.filteredSidebarItems = [...this.sidebarItems];
       
      }
    }

    hideScrollbar(): void {
      this.ngZone.run(() => {
        this.scrollbarVisible = !this.scrollbarVisible;
        this.cdRef.detectChanges();
      });
    }
   
    toggleHeaderClass() {
       this.isSidebarOpen = !this.isSidebarOpen;
    }
}
