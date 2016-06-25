import { Component } from '@angular/core';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdIcon,MdIconRegistry} from '@angular2-material/icon';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';



@Component({
  selector: 'my-app',
  templateUrl : 'app/app.dashboard.html',
  styleUrls : ['app/app.dashboard.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdButton,
    MdToolbar,
    MD_INPUT_DIRECTIVES,
    MdCheckbox,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon
      ],
    providers: [MdIconRegistry, MdRadioDispatcher],
})

export class AppComponent {
 formShowing: boolean = false;
  views: Object[] = [
    {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind"
    },
        {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind"
    },
        {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind"
    },
        {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind"
    },
        {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind"
    },
        {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind"
    },
        {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind"
    },
        {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind"
    },
        {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind"
    },
        {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind"
    },
    {
      name: "Potential dates",
      description: "Find your soulmate!",
      icon: "pets"
    }
  ];
  dogs: Object[] = [
    {name: "Porter"},
    {name: "Mal"},
    {name: "Razzle"},
    {name: "Koby"},
    {name: "Molly"},
    {name: "Husi"}
  ];
}