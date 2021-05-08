import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})

export class DialogBoxComponent implements OnInit {

  ngOnInit(): void {
  }

  closeResult:string = '';
  title:string = '';
  @Input() dialogRef: any;
  @Input() formContent: object;
  
  constructor(public dialog: MatDialog) {
      this.formContent = {};
      this.dialogRef = {};
  }

  open(content: any) {
    console.log(this.formContent);
    this.dialogRef = this.dialog.open(content);

    this.dialogRef.afterClosed().subscribe((result:any) => {
      console.log(`Dialog result: ${result}`);
    });
    
  }

  onNoClick(){
      this.dialog.closeAll();
  }
}
