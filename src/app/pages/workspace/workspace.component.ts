import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})

export class WorkspaceComponent implements OnInit {

	workspace: string = "Crane Frontend";
	boards = [
		{
			title:"To-do",
			issues:[{
				title: "Home Page",
				description: "Create Home page"
			},{
				title: "Search Page",
				description: "Create Search page"
			}]
		},
		{
			title:"In Progress",
			issues:[{
				title: "Notification Page",
				description: "Create Notification page"
			}]
		},
		{
			title:"Icebox",
			issues:[]
		},
		{
			title:"Done",
			issues:[
				{
					title: "Profile Page",
					description: "Create Profile page"
				}
			]
		},
	];

  constructor() {
   }

  ngOnInit(): void {
	  this.boards = [
		{
			title:"To-do",
			issues:[{
				title: "Home Page",
				description: "Create Home page"
			},{
				title: "Search Page",
				description: "Create Search page"
			}]
		},
		{
			title:"In Progress",
			issues:[{
				title: "Notification Page",
				description: "Create Notification page"
			}]
		},
		{
			title:"Icebox",
			issues:[]
		},
		{
			title:"Done",
			issues:[
				{
					title: "Profile Page",
					description: "Create Profile page"
				}
			]
		},
	];
  }

  drop(event: CdkDragDrop<any>) {
	console.log("Board:",this.boards);
	if (event.previousContainer.data[event.previousIndex] === event.container.data[event.previousIndex]) {
	  moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
	} else {
	  transferArrayItem(event.previousContainer.data,
						event.container.data,
						event.previousIndex,
						event.currentIndex);
	}
  }

  deletePipeline(indexVal:Number) {
	  this.boards.forEach((element,index)=>{
		if(index == indexVal) this.boards.splice(index,1);
	 });
	 console.log(this.boards);
  }  
}

/*
@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})

export class SnackBar implements OnInit {
	constructor(private _snackBar: MatSnackBar) {
	}

	ngOnInit() {

	}

	openSnackBar() {
    this._snackBar.open("Name already exists ! Cannot create a pipeline ! ");
  }
}
*/
