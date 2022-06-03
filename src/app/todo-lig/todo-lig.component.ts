import { Component, Input, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-todo-lig',
  templateUrl: './todo-lig.component.html',
  styleUrls: ['./todo-lig.component.css']
})
export class TodoLigComponent implements OnInit {

  @Input() contenu: string
  @Input() paire?: boolean

  tabNum: number
  constructor(private testService: TestServiceService) {
    this.contenu = ""
    this.tabNum = 0
  }


  ngOnInit(): void {
    let that = this
    this.testService.getSubTabNum().subscribe((val) => {
      that.tabNum = val
    })
    //this.tabNum = this.testService.getTabNum()
  }

}
