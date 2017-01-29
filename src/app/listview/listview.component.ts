import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("input[type='checkbox']").change(function (e) {
      if ($(this).is(":checked")) {
        $(this).closest('.list-group-item').addClass("active");
      } else {
        $(this).closest('.list-group-item').removeClass("active");
      }
    });

    // Row navigation to contents/details page
    $(".list-group-item").click(function(e){
      var target = e.target;
      //check if clicked element is a div, and not <a>, button or input
      if($(target).is('div')) {
        //window.location = $(this).data("link");
      }
    });
  }

}
