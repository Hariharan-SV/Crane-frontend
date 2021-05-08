import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pipeline-form',
  templateUrl: './pipeline-form.component.html',
  styleUrls: ['./pipeline-form.component.scss']
})
export class PipelineFormComponent implements OnInit {
	
	public pipeline : string = "";
	@Input() boards : any;

  constructor() { }

  ngOnInit(): void {
  }

	submitPipeline() : void {
		this.boards.push({"title":this.pipeline});
		let index = this.boards.findIndex((x:any )=> x.title === this.pipeline);
		this.boards[index]["issues"] = [];
		this.pipeline = "";
	}

}
