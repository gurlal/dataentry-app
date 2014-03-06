package com.nezatech.actions;
import com.nezatech.dto.Project;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;

import java.util.ArrayList;
import java.util.List;

@Namespace("/projects")
@Result(name = "success", type = "json")
@ParentPackage("angularstruts")
public class ProjectPagedListAction extends ActionSupport {
	private List<Project> projects = new ArrayList<Project>();
	private Integer pageSize;
	private  Integer currentPage;
	private Integer totalServerItems;

    @Action(
            value = "getPage",
            results = { @Result(name = "success", type = "json") })
    public String getPage() {
		totalServerItems = 32;
		projects.clear();
		int startID = ((currentPage -1) * pageSize) + 1;



		if(currentPage == 7) {
			projects.add(new Project(31, "Apache Struts" + 31, "http://ApacheStruts" + 31, "Apache Struts" + 31));
			projects.add(new Project(32, "Apache Struts" + 32, "http://ApacheStruts" + 32, "Apache Struts" + 32));
		} else {
			for(int i = startID; i < startID +pageSize; i++) {
				projects.add(new Project(i, "Apache Struts" + i, "http://ApacheStruts" + i, "Apache Struts" + i));
			}
		}

		return SUCCESS;
    }

	public List<Project> getProjects() {
		return projects;
	}

	public void setProjects(List<Project> projects) {
		this.projects = projects;
	}

	public Integer getPageSize() {
		return pageSize;
	}

	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}

	public Integer getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(Integer currentPage) {
		this.currentPage = currentPage;
	}

	public Integer getTotalServerItems() {
		return totalServerItems;
	}

	public void setTotalServerItems(Integer totalServerItems) {
		this.totalServerItems = totalServerItems;
	}
}
