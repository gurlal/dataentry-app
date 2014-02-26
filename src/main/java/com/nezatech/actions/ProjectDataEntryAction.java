package com.nezatech.actions;
import com.nezatech.dto.Project;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.codehaus.jackson.map.ObjectMapper;

@Namespace("/projects")
@Result(name = "success", type = "json")
@ParentPackage("angularstruts")
public class ProjectDataEntryAction extends ActionSupport {
    private Project project;

    @Action(
            value = "addProject",
            results = { @Result(name = "success", type = "json") })
    public String addProject() {
        ProjectsAction.projectNamesdyn.add(this.project);
        return SUCCESS;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) throws Exception {
		this.project = project;
    }
}
