import { Component } from '@angular/core';

@Component({
  selector: 'app-topnav-bar',
  styleUrls: [ '../app.style.css' ],
  templateUrl: './topnavbar.component.html'
})
export class TopNavBarComponent {
    toggleClicked(event: MouseEvent) {
        const target = event.srcElement.id;
        const body = $('body');
        const menu = $('#sidebar-menu');

        // toggle small or large menu
        if (body.hasClass('nav-md')) {
            menu.find('li.active ul').hide();
            menu.find('li.active').addClass('active-sm').removeClass('active');
        } else {
            menu.find('li.active-sm ul').show();
            menu.find('li.active-sm').addClass('active').removeClass('active-sm');
        }
        body.toggleClass('nav-md nav-sm');

    }
}
