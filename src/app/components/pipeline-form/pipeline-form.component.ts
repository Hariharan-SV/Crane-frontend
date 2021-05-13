import { Component, OnInit, Input } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-pipeline-form',
  templateUrl: './pipeline-form.component.html',
  styleUrls: ['./pipeline-form.component.scss']
})
export class PipelineFormComponent implements OnInit {
	
	public pipeline : string = "";
	@Input() boards : any;

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

	submitPipeline() : void {
		let index = this.boards.findIndex((x:any )=> x.title === this.pipeline);
		if(index == -1){
			this.boards.push({"title":this.pipeline});
			index = this.boards.findIndex((x:any )=> x.title === this.pipeline);
			this.boards[index]["issues"] = [];
		} else {
			this.openSnackBar("Pipeline already Exists! Choose another name !","")
		}
		this.pipeline = "";
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
				duration: 2000,
		});
	}

}
