import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.scss']
})
export class IssueFormComponent implements OnInit {

	public  pipeline:  string  =  "";
	public  issue:  string  =  "";
	public  description:  string  =  "";

	@Input() formContent:any;
	@Input() afterSubmit:any;

  constructor() {
		this.formContent = {};
		this.afterSubmit = {};
	}
	
  ngOnInit(): void {
  }

	submitIssue() {
		let index = this.formContent.findIndex((x:any )=> x.title === this.pipeline);
		this.formContent[index]["issues"].push({"title":this.issue,"description":this.description});
		this.afterSubmit.close();
	}

}
